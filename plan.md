## Plan: AI Engineer Portfolio with Personality Chat

Build your portfolio in 4 stages after P-01 (already complete):
1) optimize existing frontend with your identity and positioning,
2) create an LLM-wiki style knowledge base from your sources,
3) implement a personality-aware chat assistant over that knowledge base,
4) define future AI features that increase product value and differentiation.

This plan is execution-ready in Jira ticket format, starting from P-02.

**Assumptions**
- Current frontend stack remains React + Vite + Tailwind.
- Backend will be introduced in Python (FastAPI) because backend is currently blank and Python aligns with AI workflows.
- Knowledge base follows llm-wiki principles: persistent markdown wiki, explicit index, source logs, periodic linting.
- LLM provider can be swapped (OpenAI/Anthropic/local) via env-based adapter layer.

**Scope boundaries**
- Included: staged roadmap, detailed ticket definitions, dependencies, acceptance criteria, and verification.
- Excluded: implementation code in this phase.

## Stage 1: Optimize Current Frontend with Your Details

### P-02: Portfolio Content Architecture and Personal Brand Baseline
- Type: Story
- Priority: P0
- Estimate: 0.5-1 day
- Why this ticket: Current UI uses template identity and generic copy. Every later AI feature depends on accurate personal content.
- Description:
  - Define canonical personal content model to replace all placeholder text.
  - Create a single source-of-truth structure for hero/about/projects/skills/contact.
  - Map each section to verifiable evidence sources (resume, GitHub, LinkedIn).
- In scope:
  - Content schema (name, role, bio variants, project metadata, skills taxonomy, links).
  - Copy tone guide (confident, technical, practical AI engineer voice).
  - Mapping matrix: section -> source reference.
- Done when:
  - All template identity references are identified and replaced in plan artifacts.
  - A content JSON/TS structure is approved for integration.
  - Every visible claim has a source mapping.
- Dependencies: P-01 complete.
- Risks:
  - Inconsistent source facts across platforms.
- Mitigation:
  - Define precedence: resume > GitHub README > LinkedIn summary.
- Verification:
  - Manual pass of all current sections and placeholders.
  - Source consistency checklist signed off.

### P-03: Frontend Personalization and Section Refactor
- Type: Story
- Priority: P0
- Estimate: 1-1.5 days
- Why this ticket: Converts template frontend into your actual portfolio baseline.
- Description:
  - Replace generic content in hero, about, projects, skills, header/footer branding, and contact details.
  - Move hardcoded arrays into a typed data module for maintainability.
- In scope:
  - Real profile name/title/tagline.
  - Real projects with correct links, stack, outcomes.
  - Skills grouped for AI engineering (LLMs, MLOps, backend, frontend, cloud/tools).
  - Accurate contact and social links.
- Done when:
  - No template placeholders remain in UI copy.
  - All CTA links are valid and open expected destinations.
  - Project cards render from structured data source, not inline literals.
- Dependencies: P-02.
- Risks:
  - Broken layout after copy expansion.
- Mitigation:
  - Add responsive text constraints and truncation where needed.
- Verification:
  - Desktop/mobile visual QA.
  - Link click-through test.

### P-04: AI Engineer Visual Differentiation and Interaction Polish
- Type: Story
- Priority: P1
- Estimate: 1-2 days
- Why this ticket: Distinct visual identity increases memorability before chat is introduced.
- Description:
  - Redesign visual language from generic white template to intentional AI-engineer identity.
  - Add meaningful motion and micro-interactions that support narrative.
- In scope:
  - Typography and spacing refinement.
  - Visual motifs (signals/graphs/knowledge nodes, subtle gradients, non-generic cards).
  - Scroll transitions and staged reveals.
  - Accessibility contrast and reduced motion support.
- Done when:
  - UI has a cohesive brand direction tied to AI engineering.
  - Mobile and desktop layouts both pass visual and interaction checks.
  - Motion remains smooth without harming readability.
- Dependencies: P-03.
- Risks:
  - Overdesigned visuals reducing performance.
- Mitigation:
  - Keep animation CPU-light and defer heavy assets.
- Verification:
  - Lighthouse performance/accessibility spot check.
  - Manual keyboard navigation audit.

### P-05: Portfolio Reliability Baseline (SEO, Metadata, Contact UX)
- Type: Story
- Priority: P1
- Estimate: 0.5-1 day
- Why this ticket: Ensures discoverability and production readiness before AI stack integration.
- Description:
  - Add SEO metadata, OpenGraph, section-level semantics, and robust contact form UX states.
- In scope:
  - Meta title/description/social preview.
  - Semantic headings/landmarks.
  - Contact submission states (loading/success/failure) and spam-safe handling strategy.
- Done when:
  - Social preview renders correctly.
  - Page has clear semantic structure.
  - Contact flow has non-blocking UX feedback.
- Dependencies: P-03.
- Verification:
  - Meta preview validation.
  - Form state transitions tested.

## Stage 2: Knowledge Base Creation (LLM Wiki Style)

### P-06: Knowledge Base Repository Structure and Schema
- Type: Story
- Priority: P0
- Estimate: 1 day
- Why this ticket: Chat quality depends on KB structure and consistency.
- Description:
  - Create llm-wiki inspired folder architecture for raw sources, wiki pages, index, and logs.
  - Define frontmatter schema for entities/topics/projects/timeline entries.
- In scope:
  - Raw source conventions (immutable source copies).
  - Wiki page templates (persona, projects, skills, experience, achievements, FAQs).
  - index and log update rules.
- Done when:
  - KB directories and templates are finalized.
  - index generation/update strategy is documented.
  - Ingestion naming conventions are locked.
- Dependencies: P-02.
- Risks:
  - Schema drift as KB grows.
- Mitigation:
  - Strict templates + lint ticket (P-09).
- Verification:
  - Sample pages validate against template checklist.

### P-07: Source Ingestion from Resume, GitHub, LinkedIn, and Project Docs
- Type: Story
- Priority: P0
- Estimate: 1-2 days
- Why this ticket: Source quality directly controls answer quality and trustworthiness.
- Description:
  - Collect and normalize all source artifacts into raw source layer.
  - Parse into structured notes and source-specific summaries.
- In scope:
  - Resume extraction (experience, metrics, timeline).
  - GitHub extraction (repos, stars, commits, tech signals, notable PRs).
  - LinkedIn extraction (headline, experience, endorsements, highlights).
  - Optional: publications, talks, certifications.
- Done when:
  - All target sources are ingested with standardized metadata.
  - Source summaries exist and are linked in index.
  - Missing evidence items are explicitly flagged.
- Dependencies: P-06.
- Risks:
  - API limits/scraping constraints.
- Mitigation:
  - Manual export fallback and periodic refresh process.
- Verification:
  - Coverage report: source list vs ingested list.

### P-08: Persistent Wiki Synthesis and Cross-linking Pass
- Type: Story
- Priority: P0
- Estimate: 1-2 days
- Why this ticket: Converts raw data into a compounding knowledge artifact rather than ad-hoc retrieval.
- Description:
  - Build/update wiki pages by synthesizing across sources.
  - Add cross-links between projects, skills, outcomes, and timeline events.
  - Create persona pages for chat behavior grounding.
- In scope:
  - Master pages: profile-overview, project-catalog, skill-map, experience-timeline, FAQ.
  - Contradiction notes when sources disagree.
  - Citation references to raw source files.
- Done when:
  - Wiki has coherent linked structure and navigable index.
  - Each major claim includes at least one citation pointer.
  - Persona page has clear style constraints and boundaries.
- Dependencies: P-07.
- Risks:
  - Hallucinated synthesis.
- Mitigation:
  - Citation-required rule and conservative fallback responses.
- Verification:
  - Random claim audit across at least 20 statements.

### P-09: KB Linting, Freshness Workflow, and Governance
- Type: Story
- Priority: P1
- Estimate: 0.5-1 day
- Why this ticket: Keeps the KB reliable over time and prevents stale answers.
- Description:
  - Define periodic lint checks for orphan pages, stale claims, missing links, and contradictory updates.
  - Add refresh workflow when you update resume/repos.
- In scope:
  - Lint checklist and cadence (weekly/biweekly).
  - Update SOP for new projects and achievements.
  - Versioning and changelog pattern.
- Done when:
  - Lint procedure is documented and repeatable.
  - Freshness SLA is defined (for example, updates reflected within 48h).
- Dependencies: P-08.
- Verification:
  - Dry-run lint on current KB and issue list generated.

## Stage 3: Implement Chat Interface Using the Knowledge Base

### P-10: AI Backend Foundation (FastAPI + Config + Health)
- Type: Story
- Priority: P0
- Estimate: 1 day
- Why this ticket: Establishes API backbone for chat and retrieval.
- Description:
  - Initialize backend service with structured routes, environment config, and health checks.
- In scope:
  - FastAPI app scaffolding.
  - Environment variable management for model API keys.
  - Basic error model and request logging.
- Done when:
  - Backend starts locally with health endpoint.
  - Config loads securely from env.
  - Base API contract is documented.
- Dependencies: P-06.
- Risks:
  - Provider lock-in early.
- Mitigation:
  - Provider adapter interface from day one.
- Verification:
  - Local run + health check smoke test.

### P-11: Retrieval Layer and Knowledge Grounding Pipeline
- Type: Story
- Priority: P0
- Estimate: 1.5-2 days
- Why this ticket: Enables grounded responses from your KB instead of generic model outputs.
- Description:
  - Implement retrieval over wiki pages (hybrid keyword + embeddings if needed).
  - Return top-k chunks with citations and confidence heuristics.
- In scope:
  - Document loader for KB markdown.
  - Chunking strategy and retrieval ranking.
  - Citation object format for UI rendering.
- Done when:
  - Query returns relevant context snippets consistently.
  - Retrieval output includes source pointers.
  - Fallback behavior works when no context is found.
- Dependencies: P-10, P-08.
- Risks:
  - Poor relevance for nuanced queries.
- Mitigation:
  - Hybrid retrieval + query rewrite pass.
- Verification:
  - Test set of representative user questions with precision notes.

### P-12: Personality Prompting and Response Policy Layer
- Type: Story
- Priority: P0
- Estimate: 1 day
- Why this ticket: Mimicking your personality safely requires explicit behavioral constraints.
- Description:
  - Create system prompt and policy modules that encode your voice, communication style, and boundaries.
  - Enforce no-fabrication and citation preference.
- In scope:
  - Persona specification (tone, phrasing style, preferred technical depth).
  - Safety rules for unknowns and sensitive prompts.
  - Structured prompt assembly with retrieved context.
- Done when:
  - Responses feel aligned to your voice without false personal claims.
  - Unknown questions trigger transparent fallback.
- Dependencies: P-11.
- Risks:
  - Overfitting personality causing repetitive outputs.
- Mitigation:
  - Controlled variability and response style guidelines.
- Verification:
  - Persona consistency evaluation across scripted prompts.

### P-13: Frontend Chat Interface (Widget + Streaming UX)
- Type: Story
- Priority: P0
- Estimate: 1-1.5 days
- Why this ticket: Turns backend intelligence into portfolio-visible interaction.
- Description:
  - Build a polished chat widget integrated into portfolio layout.
  - Add message history, loading states, retries, and citations display.
- In scope:
  - Floating launcher + expandable panel.
  - User/assistant message bubbles.
  - Streaming or progressive response rendering.
  - Citation links to KB sections.
- Done when:
  - Chat can answer from KB in the live site.
  - Errors and retries are user-friendly.
  - Mobile chat UX is usable and non-intrusive.
- Dependencies: P-11, P-12.
- Risks:
  - UI clutter on smaller screens.
- Mitigation:
  - Adaptive panel and minimized default state.
- Verification:
  - End-to-end chat run on desktop/mobile.

### P-14: Chat Quality, Guardrails, and Performance Hardening
- Type: Story
- Priority: P1
- Estimate: 1 day
- Why this ticket: Production readiness requires reliability and abuse controls.
- Description:
  - Add rate limiting, timeout strategy, prompt injection safeguards, and response caching.
- In scope:
  - Request throttling.
  - Prompt sanitization and context isolation.
  - Timeout/retry and graceful degradation.
- Done when:
  - Chat remains responsive under repeated requests.
  - Injection attempts do not override system behavior.
  - Average latency remains within acceptable threshold.
- Dependencies: P-13.
- Verification:
  - Load simulation and adversarial prompt tests.

## Stage 4: Future Scope (Standout AI Features)

### P-15: Voice Mode for Portfolio Assistant
- Type: Epic Candidate
- Priority: P2
- Estimate: 2-3 days
- Description:
  - Add speech-to-text input and text-to-speech output for conversational demos.
- Done when:
  - Voice input and spoken responses work in modern browsers.
  - User can toggle voice mode on/off.
- Dependencies: P-13.

### P-16: Recruiter Mode and Role-based Answer Personalization
- Type: Epic Candidate
- Priority: P2
- Estimate: 1-2 days
- Description:
  - Add query modes (recruiter, collaborator, founder) that tailor answer depth and framing.
- Done when:
  - Mode selector adjusts response style and recommended project highlights.
- Dependencies: P-12, P-13.

### P-17: AI Project Recommender and Interactive Case Studies
- Type: Epic Candidate
- Priority: P2
- Estimate: 2-4 days
- Description:
  - Let visitors describe their use case; assistant recommends relevant projects and explains fit.
- Done when:
  - Output includes ranked project matches with rationale and links.
- Dependencies: P-08, P-13.

### P-18: Auto-updating Career Feed from GitHub Activity
- Type: Epic Candidate
- Priority: P2
- Estimate: 2 days
- Description:
  - Periodically ingest GitHub activity and update KB/wiki snapshots automatically.
- Done when:
  - New public work appears in timeline without manual page edits.
- Dependencies: P-07, P-09.

### P-19: Portfolio Intelligence Dashboard (Admin)
- Type: Epic Candidate
- Priority: P3
- Estimate: 2-3 days
- Description:
  - Add private dashboard for chat analytics: common questions, drop-offs, unanswered intents.
- Done when:
  - Dashboard surfaces actionable insights to improve content and KB.
- Dependencies: P-13.

## Dependency Graph
- P-02 -> P-03 -> P-04 -> P-05
- P-06 -> P-07 -> P-08 -> P-09
- P-10 -> P-11 -> P-12 -> P-13 -> P-14
- P-15/P-16/P-17/P-18/P-19 depend on core Stage 3 completion.
- Parallelization guidance:
  - Stage 1 and Stage 2 can overlap after P-02.
  - P-10 can start as soon as P-06 is finalized.
  - P-04 and P-05 can run in parallel after P-03.

## Milestones
- M1 Frontend Identity Ready: P-02 to P-05
- M2 KB Ready for Grounded QA: P-06 to P-09
- M3 Live Personality Chat MVP: P-10 to P-13
- M4 Production-grade Chat: P-14
- M5 Innovation Extensions: P-15 onward

## Verification Plan (Program-level)
1. Frontend fidelity checks
- All visible profile content reflects your real identity and links.
- No placeholder names or generic copy remains.

2. Knowledge quality checks
- Random claim audit with source traceability.
- Lint output contains no critical orphan/contradiction items.

3. Chat quality checks
- Persona consistency test set passes.
- Citation presence in technical answers.
- Unknown questions handled safely and transparently.

4. Performance and safety checks
- Latency within acceptable range under repeated queries.
- Rate limits and prompt-injection defenses validated.

## Jira Backlog Summary
- P0: P-02, P-03, P-06, P-07, P-08, P-10, P-11, P-12, P-13
- P1: P-04, P-05, P-09, P-14
- P2+: P-15 to P-19

## Recommended Execution Order
1. P-02
2. P-03 + P-06 (parallel)
3. P-04 + P-05 + P-07 (parallel)
4. P-08 + P-10 (parallel)
5. P-11
6. P-12
7. P-13
8. P-14
9. P-15 onward based on capacity and demo goals