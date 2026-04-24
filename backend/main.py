from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware  
from wikiagent import wiki_agent
from agent_metrics import AgentRunMetricsCallback
import logging
import os
import json
from time import perf_counter
from uuid import uuid4

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s | %(levelname)s | %(name)s | %(message)s",
)
logger = logging.getLogger("portfolio.chat")
INCLUDE_RAW_RESPONSE = os.getenv("INCLUDE_RAW_RESPONSE", "false").lower() in {"1", "true", "yes", "on"}
DEFAULT_CORS_ORIGINS = ",".join(
    [
        "https://www.prithvirajkandan.dev",
        "https://prithvirajkandan.dev",
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ]
)


def _parse_cors_origins() -> list[str]:
    raw_origins = os.getenv("CORS_ORIGINS", DEFAULT_CORS_ORIGINS)
    return [origin.strip() for origin in raw_origins.split(",") if origin.strip()]

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=_parse_cors_origins(),
    allow_methods=["*"],  # Allow all HTTP methods
    allow_headers=["*"],  # Allow all headers
)

agent = wiki_agent()


@app.get("/health")
async def health() -> dict[str, str]:
    return {"status": "ok"}

@app.post("/chat")
async def chat_endpoint(user_input: str):
    """Endpoint to handle chat interactions with the wiki agent."""
    request_id = uuid4().hex[:8]
    request_start = perf_counter()
    metrics_cb = AgentRunMetricsCallback(request_id=request_id)

    logger.info("/chat request received. request_id=%s user_input=%r", request_id, user_input)

    try:
        response = await agent.ainvoke(
            {
                "messages": [
                    {"role": "user", "content": user_input}
                ]
            },
            config={"callbacks": [metrics_cb]},
        )
    except Exception:
        total_latency_ms = (perf_counter() - request_start) * 1000
        metrics = metrics_cb.summary(total_latency_ms=total_latency_ms, status="error")
        logger.error("agent_metrics=%s", json.dumps(metrics, ensure_ascii=True, default=str))
        logger.exception("Agent execution failed. request_id=%s", request_id)
        raise

    total_latency_ms = (perf_counter() - request_start) * 1000
    metrics = metrics_cb.summary(total_latency_ms=total_latency_ms, status="ok")

    logger.info("Agent execution completed. request_id=%s", request_id)
    logger.info("agent_metrics=%s", json.dumps(metrics, ensure_ascii=True, default=str))
    logger.debug("Raw agent response: %s", response)

    structured = response.get("structured_response", {}) if isinstance(response, dict) else {}
    if hasattr(structured, "model_dump"):
        structured = structured.model_dump()

    assistant_output = structured.get("output", "") if isinstance(structured, dict) else ""
    if not assistant_output:
        assistant_output = "I encountered an issue processing your question. Could you rephrase it?"

    api_response = {
        "response": {
            "output": assistant_output,
        },
    }

    if INCLUDE_RAW_RESPONSE:
        api_response["raw_response"] = response

    return api_response