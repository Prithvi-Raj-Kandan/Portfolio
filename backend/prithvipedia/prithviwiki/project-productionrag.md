# Project: ProductionRAG

## What It Is
ProductionRAG is described as a production-ready RAG system for accurate querying of large, unstructured PDF documents with grounded context. [source: prithvipedia/rawdata/.extract/Prithvi-Raj-Resume.txt]

## Core Technical Design
- Multi-stage retrieval pipeline.
- Vector storage via ChromaDB.
- Cohere Rerank post-retrieval for relevance boosting.
- Final answer generation via Google Gemini.
[source: prithvipedia/rawdata/.extract/Prithvi-Raj-Resume.txt]

## Product Implementation
- Frontend: React + TypeScript (Vite).
- Backend: FastAPI.
- Features include PDF upload, chat querying with source citations, and evaluation workflow with RAGAS.
[source: prithvipedia/rawdata/.extract/Prithvi-Raj-Resume.txt]

## Deployment
- Live deployment mentioned with modular backend architecture (pdf_handler, vectorstore_handler, rag_chain, eval). [source: prithvipedia/rawdata/.extract/Prithvi-Raj-Resume.txt]

## Stack
- LangChain
- ChromaDB
- Cohere Rerank
- Google Gemini
- FastAPI
- React
- TypeScript
- RAGAS
[source: prithvipedia/rawdata/.extract/Prithvi-Raj-Resume.txt]

## Links
- Repo: https://github.com/Prithvi-Raj-Kandan/ProductionRAG [source: prithvipedia/rawdata/.extract/Social Links.txt]
- Live: https://production-rag-two.vercel.app/ [source: prithvipedia/rawdata/.extract/Social Links.txt]

## Build Story

### Codebase Shape During Build
- Monorepo-style split between backend and frontend (`backend/`, `frontend_v2/`).
- Deployment and operations files were added as build matured (`Dockerfile`, `.dockerignore`, `.env.example`).
- Presence of `assets/` and multiple markdown docs suggests product + documentation iteration in parallel.
[source: prithvipedia/.repo-analysis/ProductionRAG-summary.txt]

### How It Was Built (Phase View)
1. Base scaffold and project-file normalization started in early March 2026.
2. Mid-March emphasized product UX and answer quality (`new UI`, `citation enforcements`) with PR merge checkpoints.
3. Late March focused on deployment reliability and environment wiring for Railway/Vercel connectivity and healthcheck stability.
4. Dependency and import fixes plus Docker configuration updates were completed in April, followed by README refresh.
[source: prithvipedia/.repo-analysis/ProductionRAG-summary.txt]

### Commit Trace (Oldest -> Newest)
- 2026-03-06 | fecbedc | Initial commit
- 2026-03-06 | 0de6431 | Add project files with correct gitignore
- 2026-03-18 | 8f116cd | Workflow completed.
- 2026-03-19 | 66f48f1 | new UI
- 2026-03-20 | a689b62 | citation enforcements
- 2026-03-20 | 4695173 | Merge pull request #1 from Prithvi-Raj-Kandan/PR-101-New_UI
- 2026-03-20 | 35fec09 | final edit before deployment
- 2026-03-21 | ab4e9b2 | Updated Readme
- 2026-03-23 | b930365 | files organized
- 2026-03-23 | ff10f2c | updated readme
- 2026-03-23 | 898c115 | Merge pull request #2 from Prithvi-Raj-Kandan/PR-002-Session-Managment
- 2026-03-23 | 78446e4 | railway config file added
- 2026-03-23 | e606e03 | Configure Railway-Vercel connection via env vars
- 2026-03-23 | 29d7ee4 | Fix Railway backend deploy dependencies and start command
- 2026-03-23 | 53e2f2d | Improve Railway healthcheck and startup reliability
- 2026-03-24 | 31c5ab7 | Improve Railway healthcheck and startup reliability v2
- 2026-03-24 | 3a4eb9c | Improve Railway healthcheck and startup reliability v3
- 2026-03-24 | 36b167d | Add rank_bm25 and langchain_cohere to requirements
- 2026-03-24 | dc61ad3 | Add web application link to README
- 2026-04-08 | 07d456d | Add dependencies to requirements.txt
- 2026-04-08 | 72c3dbb | small import changes
- 2026-04-08 | 43479a1 | Fix backend imports and add Docker config
- 2026-04-09 | d0a5d56 | updated readme
[source: prithvipedia/.repo-analysis/ProductionRAG-summary.txt]

