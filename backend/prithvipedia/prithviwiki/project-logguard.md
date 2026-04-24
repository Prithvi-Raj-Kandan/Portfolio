# Project: LogGuard

## What It Is
LogGuard is described as an AI-powered security platform for detecting sensitive-data exposure patterns in logs, SQL payloads, and chat inputs. [source: prithvipedia/rawdata/.extract/Prithvi-Raj-Resume.txt]

## Problem Addressed
Manual log review is slow and error-prone for sensitive data leakage detection. LogGuard automates detection and risk assessment. [source: prithvipedia/rawdata/.extract/Prithvi-Raj-Resume.txt]

## Architecture (Source-Claimed)
A staged detection pipeline is described:
- Parser
- Pattern Detector
- Log Analyzer
- Risk Engine
- Policy Engine
- AI Insights
[source: prithvipedia/rawdata/.extract/Prithvi-Raj-Resume.txt]

## AI Integration
- Uses Google Gemini (`gemini-1.5-flash`) for contextual summaries and follow-up querying over ingested findings. [source: prithvipedia/rawdata/.extract/Prithvi-Raj-Resume.txt]

## Stack
- Python
- FastAPI
- Google Gemini
- React
- TypeScript
- Tailwind CSS
- pytest
[source: prithvipedia/rawdata/.extract/Prithvi-Raj-Resume.txt]

## Links
- Repo: https://github.com/Prithvi-Raj-Kandan/LogGuard [source: prithvipedia/rawdata/.extract/Social Links.txt]
- Live: https://log-guard-silk.vercel.app/ [source: prithvipedia/rawdata/.extract/Social Links.txt]

## Notes
- Resume extraction includes one misspelling variant ("LogGaurd"). Canonical repo name appears to be "LogGuard".

## Build Story

### Codebase Shape During Build
- Monorepo-style structure with backend and frontend tracks: `backend/` and `frontend_v2/`.
- Operational files were added for deployment and packaging: `railway.toml`, `Dockerfile`, `.dockerignore`, `.env.example`.
[source: prithvipedia/.repo-analysis/LogGuard-summary.txt]

### How It Was Built (Phase View)
1. Foundation and baseline setup started from initial commit, then early ticket-linked commits (`LG-101`, `LG-102`) established core scaffolding.
2. Detection pipeline incrementally appeared through explicit feature commits: pattern detection -> log analyzer -> AI analyzer/insights -> risk and policy engine.
3. Product hardening followed with multiple repository organization, UX refinements, and README cleanup commits.
4. Deployment readiness came later with Railway config and then Dockerization updates (`Dockerfile`, `.dockerignore`, docker changes).
[source: prithvipedia/.repo-analysis/LogGuard-summary.txt]

### Commit Trace (Oldest -> Newest)
- 2026-03-24 | 9f83eec | Initial commit
- 2026-03-25 | 5698a9a | LG-101 and LG-102 executed
- 2026-03-25 | ca6ab83 | LG-101 and LG-102 executed
- 2026-03-25 | 7524449 | LG-102 completed.
- 2026-03-25 | 8c3c322 | pattern detection
- 2026-03-25 | 2061f9a | Merge pull request #1 from Prithvi-Raj-Kandan/LG-103-Pattern_detection
- 2026-03-25 | ce1d2f4 | Track frontend_v2, update ignore rules, and reconcile frontend folders
- 2026-03-25 | 3595b89 | Add workflow logging and update plan execution principles
- 2026-03-25 | 9791f59 | fixed a lot of bugs
- 2026-03-25 | 51a7449 | Completed log analyzer which provides better context for the llms
- 2026-03-25 | b459cff | Merge pull request #2 from Prithvi-Raj-Kandan/LG-104-Log_analyzer
- 2026-03-26 | aa722e0 | implemented ai analyzer
- 2026-03-26 | 23a9dc3 | initial ai analyzer insights enabled. Needs to be formatted.
- 2026-03-26 | 8277592 | initial ai analyzer insights enabled. Needs to be formatted.
- 2026-03-26 | 49830db | Ai summaries formatted.Therefore the ticket completed.
- 2026-03-26 | 6eb3c6e | Merge pull request #3 from Prithvi-Raj-Kandan/LG-105-AI_Insights
- 2026-03-26 | 0920e15 | Added risk and policy engines which enable masking and blocking of log lines which are unsafe
- 2026-03-26 | 948772b | Few UX changes
- 2026-03-26 | e884884 | Merge pull request #4 from Prithvi-Raj-Kandan/LG-106-Policy_Engine
- 2026-03-26 | c02c852 | repo organized
- 2026-03-26 | 5adf8e1 | repo organized
- 2026-03-26 | 47e7a4c | Update README to remove deprecated features
- 2026-03-26 | 62e7044 | Delete frontend_v2/README.md
- 2026-03-26 | 5ef17ee | Delete frontend_v2/ATTRIBUTIONS.md
- 2026-03-26 | 8d54a62 | added railway config file
- 2026-03-26 | 55cf3a9 | railway config added
- 2026-03-26 | c370443 | Ux changes
- 2026-04-06 | fc1ed22 | Add platform link to README
- 2026-04-07 | 2e695d2 | added a dockerfile
- 2026-04-07 | 9952ac9 | Merge branch 'main' of https://github.com/Prithvi-Raj-Kandan/LogGuard
- 2026-04-08 | b56731a | added a dockerignore
- 2026-04-08 | 3be9975 | changed dockerfile
[source: prithvipedia/.repo-analysis/LogGuard-summary.txt]

