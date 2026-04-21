import os
from pathlib import Path
from langchain.tools import tool
import logging

REPO_ROOT = Path(__file__).resolve().parents[1]
logger = logging.getLogger("portfolio.wiki")


def _candidate_wiki_dirs() -> list[Path]:
    candidates: list[Path] = []

    wiki_dir_env = os.getenv("WIKI_DIR", "").strip()
    if wiki_dir_env:
        candidates.append(Path(wiki_dir_env))

    candidates.extend(
        [
            REPO_ROOT / "prithvipedia" / "prithviwiki",
            REPO_ROOT.parent / "prithvipedia" / "prithviwiki",
            Path.cwd() / "prithvipedia" / "prithviwiki",
            Path("/workspace/source/prithvipedia/prithviwiki"),
            Path("/workspace/prithvipedia/prithviwiki"),
            Path("/app/prithvipedia/prithviwiki"),
        ]
    )

    unique_candidates: list[Path] = []
    seen: set[str] = set()
    for candidate in candidates:
        resolved = candidate.expanduser().resolve()
        marker = str(resolved)
        if marker not in seen:
            seen.add(marker)
            unique_candidates.append(resolved)

    return unique_candidates


def _resolve_wiki_dir() -> Path:
    for candidate in _candidate_wiki_dirs():
        if candidate.exists() and candidate.is_dir():
            return candidate

    return _candidate_wiki_dirs()[0]


WIKI_DIR = _resolve_wiki_dir()
logger.info("Resolved wiki directory to %s", WIKI_DIR)


def _wiki_dir_exists() -> bool:
    return WIKI_DIR.exists() and WIKI_DIR.is_dir()

@tool
def list_wiki_files():
    """Lists all markdown files in the wiki directory to see available pages."""
    logger.info("list_wiki_files called. wiki_dir=%s exists=%s", WIKI_DIR, _wiki_dir_exists())
    try:
        return [f for f in WIKI_DIR.iterdir() if f.is_file() and f.suffix == ".md"]
    except FileNotFoundError:
        logger.error("Wiki directory not found at %s", WIKI_DIR)
        return "Wiki directory not found."

@tool
def read_wiki_page(filename: str):
    """Reads the full markdown content of a specific wiki page by filename."""
    path = WIKI_DIR / filename
    logger.info("read_wiki_page called. wiki_dir=%s filename=%s", WIKI_DIR, filename)
    try:
        with path.open("r", encoding="utf-8") as f:
            return f.read()
    except FileNotFoundError:
        logger.error("Wiki page not found. path=%s", path)
        return f"Error: {filename} does not exist."

@tool
def upsert_wiki_page(filename: str, content: str):
    """Creates a new page or updates an existing one, abiding by the wiki's conventions."""
    path = WIKI_DIR / filename
    os.makedirs(WIKI_DIR, exist_ok=True)
    with path.open("w", encoding="utf-8") as f:
        f.write(content)
    return f"Successfully updated {filename}."
