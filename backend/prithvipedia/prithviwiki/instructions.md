# PrithviWiki Instructions

## Purpose
PrithviWiki is a persistent markdown knowledge base about Prithvi Raj Kandan. It is designed for future LLMs/agents to answer questions with grounded, citation-backed responses.

## Scope
- Include only information grounded in sources.
- Prefer factual, concise, technical content.
- Preserve long-term consistency across pages.

## Required Tone for Agent Responses
- Professional and concise.
- Technical and detailed when the question is technical.
- No hype, no fabricated claims.

## Mandatory Rules
1. Every non-trivial claim must include a source pointer.
2. If sources conflict, state the conflict explicitly and do not pick a side silently.
3. If confidence is low, say so and point to [gaps-and-verification.md](gaps-and-verification.md).
4. Keep all wiki files in markdown.
5. Do not overwrite existing facts without logging the change in [log.md](log.md).

## Citation Format
Use inline source tags at sentence or bullet level:
- `[source: prithvipedia/rawdata/.extract/Prithvi-Raj-Resume.txt]`
- `[source: prithvipedia/rawdata/.extract/Social Links.txt]`
- `[source: prithvipedia/rawdata/.extract/Internship_Report(Ai_Receptionist)final P02 (1).txt]`

For links, include explicit URLs plus source tag.

## Ingestion Workflow
1. Add new raw files under `prithvipedia/rawdata/`.
2. Convert/transcribe to markdown-friendly text.
3. Update topic pages and add/adjust citations.
4. Update [sources.md](sources.md).
5. Append an entry in [log.md](log.md).
6. Update [index.md](index.md) only if page structure changes.

## Query Workflow for Future Agents
1. Read [index.md](index.md).
2. Read [profile-overview.md](profile-overview.md) and relevant topic pages.
3. Read [persona-guidelines.md](persona-guidelines.md) for voice and boundaries.
4. Read [freshness-governance.md](freshness-governance.md) if the question concerns updates or maintenance.
5. Answer with citations.
6. If asked for uncertain data, point to [gaps-and-verification.md](gaps-and-verification.md).

## Update and Lint Checklist
- Broken links checked.
- Orphan pages checked.
- Conflicting facts reviewed.
- Timeline consistency reviewed.
- Missing citations fixed.

## Out of Scope (for now)
- OCR extraction from images/PDFs not yet transcribed.
- Private profile information not in raw sources.
