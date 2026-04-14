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


class AgentChatResponse(BaseModel):
    output: str = Field(description="Final assistant response text for the end user.")

if AGENT_VERBOSE:
    set_verbose(True)
    set_debug(True)
    logging.getLogger("langchain").setLevel(logging.DEBUG)
    logging.getLogger("langchain_core").setLevel(logging.DEBUG)
    logging.getLogger("portfolio.agent").info("LangChain verbose/debug logging is enabled.")

def wiki_agent():
    prompt_file = Path(r"C:\Users\PRITHVI RAJ\Portfolio\backend\portfolio_agent_system_prompt.md")
    system_prompt = prompt_file.read_text(encoding="utf-8")
    
    tools = [list_wiki_files, read_wiki_page, upsert_wiki_page]
    llm = ChatGoogleGenerativeAI(model="gemini-2.5-flash", temperature=0.4 , api_key=GEMINI_API_KEY)

    agent = create_agent(
        model=llm,
        tools=tools,
        system_prompt=system_prompt,
        response_format=AgentChatResponse,
        debug=AGENT_VERBOSE,
    )

    return agent