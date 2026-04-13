from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware  
from wikiagent import wiki_agent

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins (you can specify specific origins if needed)
    allow_methods=["*"],  # Allow all HTTP methods
    allow_headers=["*"],  # Allow all headers
)

agent = wiki_agent()

@app.post("/chat")
async def chat_endpoint(user_input: str):
    """Endpoint to handle chat interactions with the wiki agent."""
    response = await agent.ainvoke({
        "messages": [
            {"role": "user", "content": user_input}
        ]
    })
    return {"response": response}