import os
from pathlib import Path
from langchain.tools import tool

REPO_ROOT = Path(__file__).resolve().parents[1]
WIKI_DIR = Path(os.getenv("WIKI_DIR", REPO_ROOT / "prithvipedia" / "prithviwiki")).resolve()

@tool
def list_wiki_files():
    """Lists all markdown files in the wiki directory to see available pages."""
    try:
        return [f for f in WIKI_DIR.iterdir() if f.is_file() and f.suffix == ".md"]
    except FileNotFoundError:
        return "Wiki directory not found."

@tool
def read_wiki_page(filename: str):
    """Reads the full markdown content of a specific wiki page by filename."""
    path = WIKI_DIR / filename
    try:
        with path.open("r", encoding="utf-8") as f:
            return f.read()
    except FileNotFoundError:
        return f"Error: {filename} does not exist."

@tool
def upsert_wiki_page(filename: str, content: str):
    """Creates a new page or updates an existing one, abiding by the wiki's conventions."""
    path = WIKI_DIR / filename
    os.makedirs(WIKI_DIR, exist_ok=True)
    with path.open("w", encoding="utf-8") as f:
        f.write(content)
    return f"Successfully updated {filename}."
