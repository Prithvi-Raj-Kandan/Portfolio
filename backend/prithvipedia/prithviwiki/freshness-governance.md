# Freshness and Governance

This page defines how PrithviWiki stays current and how updates should be handled over time.

## Update Cadence
- Review the wiki whenever a source changes.
- Run a lightweight freshness pass at least weekly during active portfolio work.
- Run a fuller review after resume edits, project milestones, or new repo activity.

## Freshness SLA
- New or corrected facts should be reflected in the wiki within 48 hours of source confirmation when actively maintaining the knowledge base.

## SOP
1. Add or update the raw source in `prithvipedia/rawdata/`.
2. Refresh extracted text or manual summary notes.
3. Update relevant topic pages with citations.
4. Update [source-coverage.md](source-coverage.md) and [sources.md](sources.md) if source status changed.
5. Append an entry to [log.md](log.md).
6. Re-run a quick check for broken links, stale claims, and contradictions.

## Versioning Pattern
- Keep one concise log entry per meaningful ingest or governance change.
- Prefer additive edits over silent rewrites.
- If a claim changes, note the old status in [log.md](log.md) or in the page history context.

## Audit Routine
- Check for orphan pages.
- Check for missing citations on non-trivial claims.
- Check for stale claims after source updates.
- Check for timeline inconsistencies.

## Last Updated
- 2026-04-12