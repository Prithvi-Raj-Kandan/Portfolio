export const profile = {
  name: "Prithvi Raj Kandan",
  role: "AI Engineer & Forward Deployed Engineer",
  focus: "Full-Stack AI Systems — Agents, RAG, Data Pipelines",
  location: "Bengaluru, India",
  availability: "Open to Bengaluru, Hyderabad, and remote worldwide",
  email: "prithvirajkandan@gmail.com",
  github: "https://github.com/Prithvi-Raj-Kandan",
  linkedin: "https://www.linkedin.com/in/prithvi-raj-kandan/",
  x: "https://x.com/PrithviRaj1213",
  site: "https://www.prithvirajkandan.dev/",
  resume: "/Prithvi_Raj_Kandan_Resume.pdf",
} as const;

export const navLinks = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
] as const;

export type Project = {
  id: string;
  title: string;
  kicker: string;
  badge?: string;
  description: string;
  tech: string[];
  githubUrl: string;
  liveUrl?: string;
  imageUrl: string;
  videoUrl?: string;
  gifUrl?: string;
};

export const projects: Project[] = [
  {
    id: "asta",
    title: "Asta — AI-Powered SME GST & Compliance Co-Pilot",
    kicker: "Compliance platform",
    badge: "Best Final-Year Project Award",
    description:
      "End-to-end compliance platform for Indian SMEs combining OCR invoice ingestion (Tesseract + PyMuPDF), deterministic GST rule validation, obligation and filing tracking, WhatsApp alerts, and a LangGraph + pgvector compliance co-pilot with human-in-the-loop drafts.",
    tech: ["Python", "FastAPI", "LangGraph", "PostgreSQL", "pgvector", "React", "TypeScript", "Docker"],
    githubUrl: "https://github.com/Prithvi-Raj-Kandan/Asta",
    imageUrl: "/projects/asta-preview.png",
    videoUrl: "/projects/asta-demo.mp4",
    gifUrl: "/projects/asta-demo.gif",
  },
  {
    id: "productionrag",
    title: "ProductionRAG — Hybrid Retrieval-Augmented Generation Platform",
    kicker: "Retrieval engine",
    description:
      "Production-grade two-stage hybrid retrieval engine combining BM25 lexical search and dense vector embeddings (ChromaDB) with Cohere cross-encoder reranking and automated RAGAS evaluation (>91% faithfulness, 89% answer relevancy).",
    tech: ["Python", "FastAPI", "LangChain", "ChromaDB", "Cohere Rerank", "Google Gemini", "React", "TypeScript", "RAGAS"],
    githubUrl: "https://github.com/Prithvi-Raj-Kandan/ProductionRAG",
    liveUrl: "https://production-rag-two.vercel.app/",
    imageUrl: "/projects/productionrag-preview.png",
    videoUrl: "/projects/productionrag-demo.mp4",
    gifUrl: "/projects/productionrag-demo.gif",
  },
  {
    id: "field-intelligence",
    title: "Field-Intelligence-System — AI Field Debrief & Knowledge Engine",
    kicker: "Field knowledge",
    description:
      "Voice-first and multimodal field-visit debriefing platform for NGOs and field teams, turning unstructured field notes, audio, and photos into structured entity graphs, semantic vector search (pgvector), and automated executive digests.",
    tech: ["Python", "FastAPI", "PostgreSQL", "pgvector", "SQLAlchemy", "Alembic", "React", "TypeScript", "AWS S3 / R2"],
    githubUrl: "https://github.com/Prithvi-Raj-Kandan/Field-Intelligence-System",
    imageUrl: "/projects/field-intelligence-preview.png",
    videoUrl: "/projects/field-intelligence-demo.mp4",
    gifUrl: "/projects/field-intelligence-demo.gif",
  },
  {
    id: "logguard",
    title: "LogGuard — AI Security Log Intelligence & Threat Classification Engine",
    kicker: "Security logs",
    description:
      "High-throughput log analysis pipeline (<1.2s/MB) combining regex and heuristic multi-tier threat classification (Critical/High/Medium/Low) with Gemini 2.5 Flash streaming root-cause vulnerability analysis and conversational log querying.",
    tech: ["Python", "FastAPI", "Google Gemini 2.5 Flash", "React", "TypeScript", "Tailwind CSS", "Pytest"],
    githubUrl: "https://github.com/Prithvi-Raj-Kandan/LogGuard",
    liveUrl: "https://log-guard-silk.vercel.app/",
    imageUrl: "/projects/logguard-preview.png",
    videoUrl: "/projects/logguard-demo.mp4",
    gifUrl: "/projects/logguard-demo.gif",
  },
];

export const skillGroups = [
  {
    index: "01",
    title: "AI & Agentic Systems",
    skills: [
      "LangGraph",
      "LangChain",
      "Hybrid RAG (BM25 + Dense + Cross-Encoder Reranking)",
      "Model Context Protocol (MCP)",
      "CortexOne FaaS",
      "Prompt Engineering",
      "RAGAS Evaluation",
      "Google Gemini / OpenAI / Cohere APIs",
    ],
  },
  {
    index: "02",
    title: "Backend & Data Engineering",
    skills: [
      "Python",
      "FastAPI",
      "dlt (data load tool)",
      "MotherDuck (DuckDB)",
      "PostgreSQL (pgvector)",
      "ChromaDB",
      "Qdrant",
      "SQLAlchemy",
      "REST APIs",
    ],
  },
  {
    index: "03",
    title: "Frontend & Full-Stack",
    skills: ["TypeScript", "JavaScript", "React", "Tailwind CSS", "Framer Motion", "HTML/CSS"],
  },
  {
    index: "04",
    title: "DevOps, Cloud & Tooling",
    skills: ["Docker", "GitHub Actions", "Pytest", "Linux", "AWS", "Cloudflare R2", "Vercel"],
  },
] as const;

export const beagleStack = [
  "Python",
  "JavaScript",
  "MCP",
  "CortexOne FaaS",
  "MotherDuck (DuckDB)",
  "dlt",
  "REST APIs",
  "GitHub Actions",
  "Pytest",
] as const;
