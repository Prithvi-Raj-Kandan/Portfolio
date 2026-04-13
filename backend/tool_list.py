import os
from pathlib import Path
from langchain.tools import tool

WIKI_DIR = Path(r"c:\Users\PRITHVI RAJ\Portfolio\prithvipedia\prithviwiki")

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
    path = os.path.join(WIKI_DIR, filename)
    try:
        with open(path, "r", encoding="utf-8") as f:
            return f.read()
    except FileNotFoundError:
        return f"Error: {filename} does not exist."

@tool
def upsert_wiki_page(filename: str, content: str):
    """Creates a new page or updates an existing one, abiding by the wiki's conventions."""
    path = os.path.join(WIKI_DIR, filename)
    os.makedirs(WIKI_DIR, exist_ok=True)
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)
    return f"Successfully updated {filename}."
