from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware  
from wikiagent import wiki_agent
from typing import Any
import logging

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s | %(levelname)s | %(name)s | %(message)s",
)
logger = logging.getLogger("portfolio.chat")

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins (you can specify specific origins if needed)
    allow_methods=["*"],  # Allow all HTTP methods
    allow_headers=["*"],  # Allow all headers
)

agent = wiki_agent()


def _extract_text_from_content(content: Any) -> str:
    if isinstance(content, str):
        return content.strip()

    if isinstance(content, list):
        parts: list[str] = []
        for item in content:
            if isinstance(item, str) and item.strip():
                parts.append(item.strip())
                continue
            if isinstance(item, dict):
                text_value = item.get("text") or item.get("content") or item.get("output_text")
                if isinstance(text_value, str) and text_value.strip():
                    parts.append(text_value.strip())
        return "\n".join(parts).strip()

    if isinstance(content, dict):
        for key in ("text", "content", "output", "output_text"):
            value = content.get(key)
            if isinstance(value, str) and value.strip():
                return value.strip()

    return ""


def _extract_assistant_output(result: Any) -> str:
    if not isinstance(result, dict):
        return _extract_text_from_content(result)

    output_text = _extract_text_from_content(result.get("output"))
    if output_text:
        return output_text

    messages = result.get("messages")
    if isinstance(messages, list):
        for message in reversed(messages):
            role = None
            content = None

            if isinstance(message, dict):
                role = message.get("role") or message.get("type")
                content = message.get("content")
            else:
                role = getattr(message, "role", None) or getattr(message, "type", None)
                content = getattr(message, "content", None)

            role_str = str(role).lower() if role else ""
            if role_str in {"assistant", "ai", "aimessage"} or "ai" in role_str:
                assistant_text = _extract_text_from_content(content)
                if assistant_text:
                    return assistant_text

        for message in reversed(messages):
            candidate_content = message.get("content") if isinstance(message, dict) else getattr(message, "content", None)
            candidate_text = _extract_text_from_content(candidate_content)
            if candidate_text:
                return candidate_text

    return ""

@app.post("/chat")
async def chat_endpoint(user_input: str):
    """Endpoint to handle chat interactions with the wiki agent."""
    logger.info("/chat request received. user_input=%r", user_input)

    response = await agent.ainvoke({
        "messages": [
            {"role": "user", "content": user_input}
        ]
    })

    logger.info("Agent execution completed.")
    logger.debug("Raw agent response: %s", response)

    assistant_output = _extract_assistant_output(response)
    if not assistant_output:
        assistant_output = "I encountered an issue processing your question. Could you rephrase it?"

    return {
        "response": {
            "output": assistant_output,
        },
        "raw_response": response,
    }