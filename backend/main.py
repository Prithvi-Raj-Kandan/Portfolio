from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware  
from pydantic import BaseModel


class ChatRequest(BaseModel):
    message: str


async def process_chat(request: ChatRequest):
    return {"reply": request.message}

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins (you can specify specific origins if needed)
    allow_methods=["*"],  # Allow all HTTP methods
    allow_headers=["*"],  # Allow all headers
)

@app.post("/chat")
async def chat_endpoint(request: ChatRequest):
    # Process the chat request and generate a response
    response = await process_chat(request)
    return response