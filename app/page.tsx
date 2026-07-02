import { Navigation } from "@/components/navigation"
import { SiteHeader } from "@/components/site-header"
import Link from "next/link"

type Project = {
  slug: string
  title: string
  description: string
  tags: string[]
  kind: "repo" | "lab" | "paper"
  linkHref: string
  linkLabel: string
  secondaryHref?: string
  secondaryLabel?: string
}

const KIND_META: Record<Project["kind"], { label: string; className: string }> = {
  repo: { label: "public repo", className: "text-green-400 border-green-400/40 bg-green-400/5" },
  lab: { label: "research lab", className: "text-purple-400 border-purple-400/40 bg-purple-400/5" },
  paper: { label: "paper", className: "text-yellow-400 border-yellow-400/40 bg-yellow-400/5" },
}

const LANG_DOT: Record<string, string> = {
  Python: "bg-blue-400",
  TypeScript: "bg-sky-400",
  "Next.js": "bg-sky-400",
  "Node.js": "bg-lime-400",
  FastAPI: "bg-teal-400",
  PyTorch: "bg-orange-400",
  Playwright: "bg-emerald-400",
}

const projects: Project[] = [
  {
    slug: "~/projects/chess-multiagent-eval-engine",
    title: "Multi-Agent Chess Engine Evaluation Framework",
    description:
      "8 UCI-speaking chess engines, each encoding a distinct agentic LLM reasoning methodology — ensemble voting, multi-model debate, recursive decomposition, an 11-agent LangGraph pipeline, chain-of-thought — benchmarked against each other in a live browser arena and round-robin tournament with real-time telemetry and Elo scoring.",
    tags: ["Python", "Multi-Agent", "LLM Evaluation"],
    kind: "repo",
    linkHref: "https://github.com/ShreyaAmalapurapu/Chess-MultiAgent-Eval-Engine",
    linkLabel: "GitHub",
  },
  {
    slug: "~/projects/x-search",
    title: "X-Search — Agentic Search Engine for X",
    description:
      "An agentic search engine for X (Twitter): a Playwright scraper, SQLite/FTS5 full-text indexing, and the Grok API for query understanding and summarization. Returns evidence-backed answers over real-time social data, with AI-generated topic/sentiment/entity analysis and filters for date, relevance, and engagement.",
    tags: ["Python", "FastAPI", "Playwright"],
    kind: "repo",
    linkHref: "https://github.com/ShreyaAmalapurapu/X-Search",
    linkLabel: "GitHub",
  },
  {
    slug: "~/projects/computer-use-agent",
    title: "Productivity Agent — Computer-Use Agent",
    description:
      "A local-first productivity agent (Chrome extension + Node.js backend) that watches browser tab and focus activity and generates AI-powered advice for staying on task. Flags forgotten tabs and rabbit holes through a local dashboard — privacy-first, zero keystroke or screenshot logging.",
    tags: ["TypeScript", "Node.js"],
    kind: "repo",
    linkHref: "https://github.com/ShreyaAmalapurapu/Computer-Use-Agent",
    linkLabel: "GitHub",
  },
  {
    slug: "~/research/protai",
    title: "ProtAI — Multimodal, Multi-Agent Protein Engineering Platform",
    description:
      "An autonomous, multi-agent system for protein engineering that reasons over heterogeneous biomedical data to identify high-value therapeutic targets — constructing disease-specific interaction networks and running structure prediction and docking through a fully orchestrated discovery pipeline.",
    tags: ["Multi-Agent", "Bioinformatics"],
    kind: "lab",
    linkHref: "https://cris.cheme.columbia.edu/content/research",
    linkLabel: "Research Lab",
  },
  {
    slug: "~/research/ariadne",
    title: "Ariadne — Distributed Orchestration for Large-Scale ML Workloads",
    description:
      "A distributed orchestration system for accelerating large ML experiments on HPC infrastructure. Splits preprocessing, training, and hyperparameter tuning across CPU cores and compute nodes with batched workloads and adaptive job queues, cutting experiment runtimes from days to hours.",
    tags: ["Distributed Systems", "HPC"],
    kind: "lab",
    linkHref: "https://www.aqlab.io/",
    linkLabel: "Research Lab",
  },
  {
    slug: "~/projects/stock-tracker-insights",
    title: "Stock Tracker Insights",
    description:
      "An AI-powered, real-time financial analytics app for tracking equities with interactive visualizations and personalized alerts. Event-driven architecture automates price/earnings alerts and AI-generated market digests, plus an admin dashboard for stock and news management.",
    tags: ["Next.js", "TypeScript"],
    kind: "repo",
    linkHref: "https://github.com/ShreyaAmalapurapu/Stock-Tracker-Insights-App",
    linkLabel: "GitHub",
  },
  {
    slug: "~/research/genome-transformer",
    title: "Multimodal Convolutional-Transformer for 3D Genome Structure",
    description:
      "An end-to-end convolutional–Transformer model predicting local 3D genome interaction maps from DNA sequence and epigenomic signals — modality-specific CNN encoders plus a Transformer self-attention module to catch non-local interaction patterns. Ablations show DNA methylation adds complementary signal.",
    tags: ["PyTorch", "Transformers", "Genomics"],
    kind: "repo",
    linkHref:
      "https://github.com/ShreyaAmalapurapu/Learning-Local-3D-Genome-Structure-from-Multimodal-Data-using-Convolutional-Transformer-Models",
    linkLabel: "GitHub",
    secondaryHref: "/ML4G_paper.pdf",
    secondaryLabel: "Paper",
  },
  {
    slug: "~/research/enstadti-pred",
    title: "ENStaDTI-pred — Ensemble Graph Learning for Drug–Target Interaction",
    description:
      "A drug–target interaction prediction pipeline built on heterogeneous graph representation learning and stacked ensembling — an 11-edge-type multiplex graph, complementary node embeddings across multiple frameworks, integrated via a stacking classifier for link prediction under severe class imbalance.",
    tags: ["Graph ML", "Ensembling"],
    kind: "paper",
    linkHref: "/DTI Paper.pdf",
    linkLabel: "Paper",
  },
  {
    slug: "~/research/nrpreto",
    title: "NRPreTo — Hierarchical ML for Protein Sequence Classification",
    description:
      "A hierarchical, two-level cascaded classifier for large-scale protein sequence classification. Operates on 13,494-descriptor feature vectors with per-stage feature selection and hyperparameter optimization, generalizing robustly to unseen sequences under limited labeled data.",
    tags: ["Bioinformatics", "Classification"],
    kind: "paper",
    linkHref: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10268018/",
    linkLabel: "Paper",
  },
]

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-[#0a0e14] text-gray-300 font-mono p-8 md:p-16 lg:p-24">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <SiteHeader />

        <Navigation />

        {/* Projects Section */}
        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-4xl md:text-5xl font-bold text-cyan-400">projects</h2>
            <p className="text-gray-400 text-lg">a compilation of things i've built!</p>
          </div>

          <div className="text-sm text-gray-500 max-w-4xl">
            <span className="text-green-400">shreya@portfolio</span>
            <span className="text-gray-500">:</span>
            <span className="text-cyan-400">~</span>
            <span className="text-gray-500">$ </span>
            <span className="text-gray-400">ls -la projects/</span>
            <span className="inline-block w-2 h-4 bg-cyan-400 align-middle ml-1 animate-pulse" />
          </div>

          {/* Project Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {projects.map((project) => {
              const kindMeta = KIND_META[project.kind]
              return (
                <div
                  key={project.title}
                  className="flex flex-col rounded-lg border border-gray-800 bg-black/40 overflow-hidden transition-colors hover:border-cyan-400/60"
                >
                  {/* fake terminal / file header */}
                  <div className="flex items-center gap-2 px-4 py-2.5 border-b border-gray-800 bg-white/[0.02]">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                    <span className="ml-2 text-xs text-gray-500 truncate flex-1">{project.slug}</span>
                    <span
                      className={`text-[10px] uppercase tracking-wide px-2 py-0.5 rounded border whitespace-nowrap ${kindMeta.className}`}
                    >
                      {kindMeta.label}
                    </span>
                  </div>

                  <div className="flex flex-col justify-between flex-1 p-5">
                    <div className="space-y-3">
                      <h3 className="text-lg font-semibold text-white leading-snug">{project.title}</h3>
                      <p className="text-gray-300 leading-relaxed text-sm">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[11px] px-2 py-1 rounded border border-gray-700 text-gray-400 flex items-center gap-1.5"
                          >
                            <span className={`w-1.5 h-1.5 rounded-full ${LANG_DOT[tag] ?? "bg-gray-500"}`} />
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-5 pt-4 border-t border-gray-800/70 space-y-3">
                      <p className="text-[11px] text-gray-600 truncate">
                        <span className="text-gray-500">$</span>{" "}
                        {project.kind === "repo" ? `git clone ${project.linkHref}` : `open ${project.linkHref}`}
                      </p>
                      <div className="flex flex-wrap gap-3">
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
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      </div>
    </div>
  )
}
