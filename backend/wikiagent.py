from pathlib import Path
from langchain.agents import create_agent 
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_core.globals import set_debug, set_verbose
from tool_list import list_wiki_files, read_wiki_page, upsert_wiki_page
from dotenv import load_dotenv
from pydantic import BaseModel, Field
import os
import logging

load_dotenv()  #

GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")  # Ensure this is set in your .env file
AGENT_VERBOSE = os.getenv("AGENT_VERBOSE", "false").lower() in {"1", "true", "yes", "on"}
LLM_TEMPERATURE = float(os.getenv("LLM_TEMPERATURE", "0.4"))
LLM_MAX_RETRIES = int(os.getenv("LLM_MAX_RETRIES", "1"))


def _parse_csv_env(value: str | None) -> list[str]:
    if not value:
        return []
    return [item.strip() for item in value.split(",") if item.strip()]


def _api_keys() -> list[str]:
    keys = _parse_csv_env(os.getenv("GEMINI_API_KEYS"))
    if GEMINI_API_KEY:
        keys.insert(0, GEMINI_API_KEY.strip())

    deduped: list[str] = []
    seen: set[str] = set()
    for key in keys:
        if key and key not in seen:
            seen.add(key)
            deduped.append(key)
    return deduped


def _models() -> list[str]:
    models = _parse_csv_env(os.getenv("GEMINI_MODELS"))
    if not models:
        models = ["gemini-2.5-flash", "gemini-2.0-flash"]
    return models


class AgentChatResponse(BaseModel):
    output: str = Field(description="Final assistant response text for the end user.")

if AGENT_VERBOSE:
    set_verbose(True)
    set_debug(True)
    logging.getLogger("langchain").setLevel(logging.DEBUG)
    logging.getLogger("langchain_core").setLevel(logging.DEBUG)
    logging.getLogger("portfolio.agent").info("LangChain verbose/debug logging is enabled.")

def wiki_agent():
    return wiki_agents()[0]


def wiki_agents():
    repo_root = Path(__file__).resolve().parents[1]
    prompt_file = Path(
        os.getenv(
            "SYSTEM_PROMPT_PATH",
            repo_root / "backend" / "portfolio_agent_system_prompt.md",
        )
    ).resolve()
    system_prompt = prompt_file.read_text(encoding="utf-8")
    
    tools = [list_wiki_files, read_wiki_page, upsert_wiki_page]
    keys = _api_keys()
    models = _models()

    if not keys:
        raise ValueError("No Gemini API key configured. Set GEMINI_API_KEY or GEMINI_API_KEYS.")

    agents = []

    for model_name in models:
        for key in keys:
            llm = ChatGoogleGenerativeAI(
                model=model_name,
                temperature=LLM_TEMPERATURE,
                max_retries=LLM_MAX_RETRIES,
                api_key=key,
            )

            agent = create_agent(
                model=llm,
                tools=tools,
                system_prompt=system_prompt,
                response_format=AgentChatResponse,
                debug=AGENT_VERBOSE,
            )

            agents.append(agent)

    logging.getLogger("portfolio.agent").info(
        "Initialized %d agent fallback candidates across %d model(s) and %d key(s).",
        len(agents),
        len(models),
        len(keys),
    )

    return agents