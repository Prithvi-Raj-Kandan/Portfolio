from __future__ import annotations

from time import perf_counter
from typing import Any
from uuid import UUID

from langchain_core.callbacks.base import AsyncCallbackHandler
from langchain_core.outputs import LLMResult


class AgentRunMetricsCallback(AsyncCallbackHandler):
    """Collects structured per-request metrics for agent execution."""

    def __init__(self, request_id: str):
        self.request_id = request_id

        self._llm_starts: dict[str, float] = {}
        self._tool_starts: dict[str, float] = {}
        self._chain_starts: dict[str, float] = {}
        self._tool_names: dict[str, str] = {}
        self._chain_names: dict[str, str] = {}

        self.model_calls: list[dict[str, Any]] = []
        self.tool_calls: list[dict[str, Any]] = []
        self.chain_stages: list[dict[str, Any]] = []

        self.input_tokens = 0
        self.output_tokens = 0
        self.total_tokens = 0

    @staticmethod
    def _run_key(run_id: UUID) -> str:
        return str(run_id)

    @staticmethod
    def _safe_name(serialized: dict[str, Any] | None, fallback: str) -> str:
        if not serialized:
            return fallback

        if isinstance(serialized.get("name"), str):
            return serialized["name"]

        serialized_id = serialized.get("id")
        if isinstance(serialized_id, list) and serialized_id:
            return str(serialized_id[-1])

        return fallback

    @staticmethod
    def _duration_ms(start: float | None) -> float | None:
        if start is None:
            return None
        return round((perf_counter() - start) * 1000, 2)

    def _extract_usage(self, response: LLMResult) -> tuple[int, int, int]:
        in_tokens = 0
        out_tokens = 0
        total = 0

        for generation_group in response.generations or []:
            for generation in generation_group:
                message = getattr(generation, "message", None)
                usage = getattr(message, "usage_metadata", None)
                if not isinstance(usage, dict):
                    continue

                in_tokens += int(usage.get("input_tokens", 0) or 0)
                out_tokens += int(usage.get("output_tokens", 0) or 0)
                total += int(usage.get("total_tokens", 0) or 0)

        if total == 0:
            total = in_tokens + out_tokens

        return in_tokens, out_tokens, total

    async def on_chat_model_start(
        self,
        serialized: dict[str, Any],
        messages: list[list[Any]],
        *,
        run_id: UUID,
        **kwargs: Any,
    ) -> None:
        self._llm_starts[self._run_key(run_id)] = perf_counter()

    async def on_llm_start(
        self,
        serialized: dict[str, Any],
        prompts: list[str],
        *,
        run_id: UUID,
        **kwargs: Any,
    ) -> None:
        self._llm_starts[self._run_key(run_id)] = perf_counter()

    async def on_llm_end(
        self,
        response: LLMResult,
        *,
        run_id: UUID,
        **kwargs: Any,
    ) -> None:
        key = self._run_key(run_id)
        duration_ms = self._duration_ms(self._llm_starts.pop(key, None))
        in_tokens, out_tokens, total = self._extract_usage(response)

        self.input_tokens += in_tokens
        self.output_tokens += out_tokens
        self.total_tokens += total

        model_name = None
        try:
            first_group = response.generations[0]
            first_gen = first_group[0]
            message = getattr(first_gen, "message", None)
            metadata = getattr(message, "response_metadata", {}) if message else {}
            if isinstance(metadata, dict):
                model_name = metadata.get("model_name")
        except (IndexError, TypeError):
            model_name = None

        self.model_calls.append(
            {
                "run_id": key,
                "model": model_name or "unknown",
                "latency_ms": duration_ms,
                "input_tokens": in_tokens,
                "output_tokens": out_tokens,
                "total_tokens": total,
            }
        )

    async def on_tool_start(
        self,
        serialized: dict[str, Any],
        input_str: str,
        *,
        run_id: UUID,
        **kwargs: Any,
    ) -> None:
        key = self._run_key(run_id)
        self._tool_starts[key] = perf_counter()
        self._tool_names[key] = self._safe_name(serialized, "tool")

    async def on_tool_end(
        self,
        output: Any,
        *,
        run_id: UUID,
        **kwargs: Any,
    ) -> None:
        key = self._run_key(run_id)
        duration_ms = self._duration_ms(self._tool_starts.pop(key, None))
        name = self._tool_names.pop(key, "tool")
        self.tool_calls.append(
            {
                "run_id": key,
                "tool": name,
                "latency_ms": duration_ms,
            }
        )

    async def on_chain_start(
        self,
        serialized: dict[str, Any],
        inputs: dict[str, Any],
        *,
        run_id: UUID,
        **kwargs: Any,
    ) -> None:
        key = self._run_key(run_id)
        self._chain_starts[key] = perf_counter()
        self._chain_names[key] = self._safe_name(serialized, "chain")
        self.chain_stages.append(
            {
                "run_id": key,
                "chain": self._chain_names[key],
                "event": "start",
            }
        )

    async def on_chain_end(
        self,
        outputs: dict[str, Any],
        *,
        run_id: UUID,
        **kwargs: Any,
    ) -> None:
        key = self._run_key(run_id)
        duration_ms = self._duration_ms(self._chain_starts.pop(key, None))
        chain_name = self._chain_names.pop(key, "chain")
        self.chain_stages.append(
            {
                "run_id": key,
                "chain": chain_name,
                "event": "end",
                "latency_ms": duration_ms,
            }
        )

    def summary(self, total_latency_ms: float, status: str) -> dict[str, Any]:
        return {
            "request_id": self.request_id,
            "status": status,
            "total_latency_ms": round(total_latency_ms, 2),
            "model_calls_count": len(self.model_calls),
            "tool_calls_count": len(self.tool_calls),
            "tokens": {
                "input_tokens": self.input_tokens,
                "output_tokens": self.output_tokens,
                "total_tokens": self.total_tokens,
            },
            "model_calls": self.model_calls,
            "tool_calls": self.tool_calls,
            "chain_stages": self.chain_stages,
        }
