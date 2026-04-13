from pathlib import Path 
from langchain_core.tools import tool
from langchain.agents import create_agent 

WIKI_ROOT = Path(r"c:\Users\PRITHVI RAJ\Portfolio\prithvipedia\prithviwiki")

@tool 
def search_wikipedia(query: str) -> list[str]:
    """Search relevant wiki pages based on the query from the index of the wiki.  
    Note:
        The following pages should be returned as relevant wiki pages for any query:
        1. index.md
        2. profile-overview.md
        3. persona-guidelines.md
  
    Args:
        query: Message sent by the user(the query).

    Response:
        A list of relevant wiki pages that the LLM has to read to generate the answer.        
    """
    relevant_pages = []
    for page in WIKI_ROOT.glob("*.md"):
        if page.name in ["index.md", "profile-overview.md", "persona-guidelines.md"]:
            relevant_pages.append(["index.md", "profile-overview.md", "persona-guidelines.md"])
        for page.name in ["index.md"]:
            relevant_pages.append(page.name)


    return relevant_pages

@tool
def read_wikipedia_page(page_name: str) -> str:
    """Read the content of a wiki page and return it as a string.

    Args:
        page_name: The name of the wiki page to read."""
    page_path = WIKI_ROOT / page_name
    if not page_path.exists():
        return f"Page {page_name} does not exist."
    
    with open(page_path, "r", encoding="utf-8") as file:
        content = file.read()
    
    return content

@tool 
def wiki_maintanance(query: str) -> str:
    """Perform wiki maintenance tasks such as updating or adding new pages based on the query.

    Args:
        query: Message sent by the user(the query). """
    
