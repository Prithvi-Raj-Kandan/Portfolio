from langchain_core.tools import tool
from langchain.agents import create_agent 

@tool 
def search_wikipedia(query: str) -> list:
    """Search relevant wiki pages based on the query from the index of the wiki. The LLM will read only those pages to generate answer.
        
    Args:
        query: Message sent by the user(the query).

    Response:
        A list of relevant wiki pages that the LLM has to read to generate the answer.        
    """

   