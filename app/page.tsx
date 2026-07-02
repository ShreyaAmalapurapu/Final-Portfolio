import { Navigation } from "@/components/navigation"
import Link from "next/link"

type Project = {
  title: string
  description: string
  tags: string[]
  linkHref: string
  linkLabel: string
  secondaryHref?: string
  secondaryLabel?: string
}

const projects: Project[] = [
  {
    title: "Multi-Agent Chess Engine Evaluation Framework",
    description:
      "Built 8 UCI-speaking chess engines, each encoding a distinct agentic LLM reasoning methodology — ensemble voting, multi-model debate, recursive decomposition, an 11-agent LangGraph pipeline, and chain-of-thought — to benchmark reasoning quality in an adversarial domain. Engines compete via a live browser arena with real-time telemetry and a round-robin tournament with Elo scoring.",
    tags: ["Python", "Multi-Agent", "LLM Evaluation"],
    linkHref: "https://github.com/ShreyaAmalapurapu/Chess-MultiAgent-Eval-Engine",
    linkLabel: "GitHub",
  },
  {
    title: "X-Search — Agentic Search Engine for X",
    description:
      "An agentic search engine for X (Twitter) combining a Playwright-based scraper, SQLite/FTS5 full-text indexing, and the Grok API for query understanding and summarization. Returns evidence-backed answers over real-time social data, with AI-generated topic/sentiment/entity analysis and filtering by date, relevance, and engagement.",
    tags: ["Python", "FastAPI", "Playwright", "Grok API"],
    linkHref: "https://github.com/ShreyaAmalapurapu/X-Search",
    linkLabel: "GitHub",
  },
  {
    title: "Productivity Agent — Computer-Use Agent",
    description:
      "A local-first productivity agent (Chrome extension + Node.js backend) that observes browser tab and focus activity and generates AI-powered advice for better focus. Tracks context-switching patterns, flags forgotten tabs and rabbit holes, and surfaces evidence-backed recommendations through a local dashboard — built privacy-first, with no keystroke or screenshot recording.",
    tags: ["TypeScript", "Node.js", "Chrome Extension"],
    linkHref: "https://github.com/ShreyaAmalapurapu/Computer-Use-Agent",
    linkLabel: "GitHub",
  },
  {
    title: "ProtAI — Multimodal, Multi-Agent Protein Engineering Platform",
    description:
      "An autonomous, multi-agent system for protein engineering that reasons over heterogeneous biomedical data sources to identify high-value therapeutic targets. Constructs disease-specific interaction networks, triggers structure prediction and docking workflows, and delivers ranked protein targets through fully orchestrated, end-to-end discovery pipelines.",
    tags: ["Multi-Agent", "Bioinformatics", "Research"],
    linkHref: "https://cris.cheme.columbia.edu/content/research",
    linkLabel: "Research Lab",
  },
  {
    title: "Ariadne — Distributed Orchestration for Large-Scale ML Workloads",
    description:
      "A distributed orchestration system designed to accelerate large-scale machine learning experiments on HPC infrastructure. Dynamically splits preprocessing, training, and hyperparameter tuning across CPU cores and compute nodes using batched workloads and adaptive job queues, reducing end-to-end experiment runtimes from days to hours.",
    tags: ["Distributed Systems", "HPC", "ML Infra"],
    linkHref: "https://www.aqlab.io/",
    linkLabel: "Research Lab",
  },
  {
    title: "Stock Tracker Insights",
    description:
      "An AI-powered, real-time financial analytics web app for tracking equities across customizable time horizons with interactive visualizations and personalized alerts. Built with Next.js and an event-driven architecture that automates price alerts, earnings notifications, and AI-generated market digests, plus an admin dashboard for stock management and news publishing.",
    tags: ["Next.js", "TypeScript", "Event-Driven"],
    linkHref: "https://github.com/ShreyaAmalapurapu/Stock-Tracker-Insights-App",
    linkLabel: "GitHub",
  },
  {
    title: "Multimodal Convolutional-Transformer for 3D Genome Structure",
    description:
      "An end-to-end convolutional–Transformer model that predicts local 3D genome interaction maps from DNA sequence and epigenomic signals, using modality-specific CNN encoders and a Transformer self-attention module to capture non-local interaction patterns. Ablations show DNA methylation provides complementary signal, improving reconstruction accuracy on held-out genomic regions.",
    tags: ["PyTorch", "Transformers", "Genomics"],
    linkHref:
      "https://github.com/ShreyaAmalapurapu/Learning-Local-3D-Genome-Structure-from-Multimodal-Data-using-Convolutional-Transformer-Models",
    linkLabel: "GitHub",
    secondaryHref: "/ML4G_paper.pdf",
    secondaryLabel: "Paper",
  },
  {
    title: "ENStaDTI-pred — Ensemble Graph Learning for Drug–Target Interaction",
    description:
      "A machine learning pipeline for large-scale drug–target interaction prediction built on heterogeneous graph representation learning and stacked ensembling. Constructs a multiplex graph with eleven edge types, learns complementary node embeddings across multiple graph embedding frameworks, and integrates them via a stacking classifier for link prediction under severe class imbalance.",
    tags: ["Graph ML", "Ensembling", "Research"],
    linkHref: "/DTI Paper.pdf",
    linkLabel: "Paper",
  },
  {
    title: "NRPreTo — Hierarchical ML for Protein Sequence Classification",
    description:
      "A hierarchical machine learning pipeline for large-scale protein sequence classification, built as a two-level cascaded classifier system. Operates on high-dimensional sequence feature vectors (13,494 descriptors) with per-stage feature selection and hyperparameter optimization, generalizing robustly to unseen sequences under limited labeled data.",
    tags: ["Bioinformatics", "Classification", "Research"],
    linkHref: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10268018/",
    linkLabel: "Paper",
  },
]

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-[#0a0e14] text-gray-300 font-mono p-8 md:p-16 lg:p-24">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <header className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="text-cyan-400">shreya</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400">
            <span className="text-pink-400">{">"}</span> studying <span className="text-cyan-400">cs + math</span> @
            columbia
          </p>
        </header>

        <Navigation />

        {/* Projects Section */}
        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-4xl md:text-5xl font-bold text-cyan-400">projects</h2>
            <p className="text-gray-400 text-lg">a compilation of things i've built!</p>
          </div>

          {/* Project Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {projects.map((project) => (
              <div
                key={project.title}
                className="flex flex-col justify-between rounded-lg border border-gray-800 bg-white/[0.02] p-6 transition-colors hover:border-cyan-400/60 hover:bg-white/[0.04]"
              >
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white leading-snug">{project.title}</h3>
                  <p className="text-gray-300 leading-relaxed text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-full border border-gray-700 text-gray-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 mt-6">
                  <Link
                    href={project.linkHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm border-2 border-cyan-400 text-cyan-400 rounded hover:bg-cyan-400/10 transition-colors"
                  >
                    {project.linkLabel}
                  </Link>
                  {project.secondaryHref && (
                    <Link
                      href={project.secondaryHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 text-sm border-2 border-gray-600 text-gray-400 rounded hover:bg-white/5 transition-colors"
                    >
                      {project.secondaryLabel}
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
