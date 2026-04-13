# Portfolio Backend

FastAPI-based backend for Prithvi Raj's AI portfolio website. Serves a personality-aware chat agent that retrieves information from the PrithviWiki knowledge base.

## Setup

### 1. Copy `.env.example` to `.env` and add your API keys

```bash
cp ../.env.example .env
# Edit .env and add your GEMINI_API_KEY
```

### 2. Create a virtual environment

```bash
python -m venv venv
```

### 3. Activate the virtual environment

**Windows (PowerShell):**
```powershell
.\venv\Scripts\Activate.ps1
```

**macOS/Linux:**
```bash
source venv/bin/activate
```

### 4. Install dependencies

```bash
pip install -r requirements.txt
```

## Running the Server

```bash
uvicorn main:app --reload
```

The API will be available at `http://localhost:8000`.

### Health Check

```bash
curl http://localhost:8000/health
```

### Chat Endpoint

```bash
curl -X POST "http://localhost:8000/chat?user_input=where%20did%20you%20study%3F"
```

## Project Structure

- `main.py` — FastAPI app with `/chat` endpoint
- `wikiagent.py` — Creates and returns the LangChain agent
- `tool_list.py` — Tool implementations for wiki search and reading
- `portfolio_agent_system_prompt.md` — System prompt that defines the agent's personality and behavior
- `requirements.txt` — Python dependencies

## Architecture

The backend uses the **LLM Wiki pattern** (Andrej Karpathy):

1. Agent reads the wiki index (`prithvipedia/prithviwiki/index.md`) + foundation context pages
2. Agent reasons about which pages are relevant
3. Agent fetches those pages directly from the local filesystem
4. Agent synthesizes an answer with citations

Tools provided:
- `list_wiki_files()` — Lists all pages in the wiki
- `read_wiki_page(filename)` — Reads a specific wiki page
- `upsert_wiki_page(filename, content)` — Creates or updates a page

## Environment Variables

Required in `.env`:
- `GEMINI_API_KEY` — Your Google Gemini API key

## Notes

- The wiki lives in `../prithvipedia/prithviwiki/`.
- The agent always includes `index.md`, `profile-overview.md`, and `persona-guidelines.md` for context.
- All responses are grounded in the wiki; the agent will say "I don't have information on that" for out-of-scope queries.
