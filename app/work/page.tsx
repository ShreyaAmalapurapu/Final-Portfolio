import { Navigation } from "@/components/navigation"
import Image from "next/image"

type Experience = {
  company: string
  role: string
  period: string
  active?: boolean
  blurb: string
  tags: string[]
  logo?: string
  logoAlt?: string
  badgeText?: string
}

const experiences: Experience[] = [
  {
    company: "Datadog",
    role: "Software Engineering Intern",
    period: "2026.05 → 2026.08",
    active: true,
    badgeText: "DD",
    blurb:
      "Teaching AI agents to ask permission before touching your data. Building Chupacabra, a Slack bot that plugs into GitHub, Jira, Confluence, and Snowflake for 10+ teams — plus the guardrails so it doesn't go rogue.",
    tags: ["Go", "Terraform", "MCP", "Slack API"],
  },
  {
    company: "Amazon",
    role: "Software Engineering Intern",
    period: "2025.06 → 2025.09",
    logo: "/amazon-logo.png",
    logoAlt: "Amazon",
    blurb:
      "Built an AI analyst that lets anyone query 10TB+ of company data in plain English, no SQL required. Spent a summer nudging RAG accuracy from 65% to 85%, one evaluation run at a time.",
    tags: ["Python", "Vector DB", "RAG", "LLM Agents"],
  },
  {
    company: "Complex Resilient Intelligent Systems (CRIS) Lab @ Columbia",
    role: "ML Research Intern",
    period: "2024.05 → present",
    active: true,
    logo: "/columbia-logo.png",
    logoAlt: "Columbia",
    blurb:
      "Poking around inside billion-parameter models to see what they're actually thinking. Built a little team of AI agents — a decider, a reasoner, an executor — that argue their way to better answers, 35% better than going it alone.",
    tags: ["PyTorch", "Sparse Autoencoders", "Multi-Agent", "Interpretability"],
  },
  {
    company: "Scale Medicine",
    role: "Software Engineering Intern",
    period: "2024.12 → 2025.05",
    logo: "/scale-medicine-logo.png",
    logoAlt: "Scale Medicine",
    blurb:
      "Turned a 3-5 day, spreadsheet-fueled data slog into a 2-hour pipeline. Made 15+ messy biomedical data sources play nice together so ML teams could stop waiting around.",
    tags: ["ETL", "Python", "SQL", "Data Pipelines"],
  },
  {
    company: "AlQuraishi Lab @ Columbia University",
    role: "ML Research Intern",
    period: "2024.05 → 2024.12",
    logo: "/columbia-med-logo.png",
    logoAlt: "AlQuraishi Lab",
    blurb:
      "Trained graph neural nets on proteins and put a supercomputer to work on 30,000+ protein structures — turned a months-long job into two weeks.",
    tags: ["GNNs", "SLURM", "HPC", "PyTorch"],
  },
  {
    company: "Columbia Venture Partners (CVP)",
    role: "Associate",
    period: "2024 → present",
    active: true,
    logo: "/cvp-logo.png",
    logoAlt: "CVP",
    blurb:
      "Spent my free time picking apart startup pitch decks and asking founders uncomfortable technical questions about AI, healthcare, and infra.",
    tags: ["Technical Diligence", "Market Analysis"],
  },
  {
    company: "Columbia AI Alignment",
    role: "Member",
    period: "2024 → present",
    active: true,
    logo: "/caiac-logo.png",
    logoAlt: "CAIAC",
    blurb:
      "Weekly deep dives into why AI systems break, lie, or go sideways — and what we can actually do about it.",
    tags: ["AI Safety", "Interpretability"],
  },
  {
    company: "AQUAS Project (Autonomous Water Systems)",
    role: "Software Engineer",
    period: "2024 → present",
    active: true,
    logo: "/cu-robotics-logo.png",
    logoAlt: "CU Robotics",
    blurb:
      "Helped build a robot boat that hunts algae blooms for NYC Parks. Yes, an actual boat, with sensors and a mission.",
    tags: ["Robotics", "Sensors", "Embedded Systems"],
  },
  {
    company: "Entrepreneurs Roundtable Accelerator",
    role: "Analyst",
    period: "2024",
    logo: "/era-logo.png",
    logoAlt: "ERA",
    blurb: 'Read a lot of frontier-tech pitch decks and said "this won\'t scale" more than once.',
    tags: ["Startup Diligence"],
  },
]

export default function WorkPage() {
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

        {/* Navigation */}
        <Navigation />

        {/* Work Section */}
        <section className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-4xl md:text-5xl font-bold text-white">Work</h2>
            <p className="text-gray-400 text-lg">My professional journey and work experience.</p>
          </div>

          {/* Terminal-style intro */}
          <div className="rounded-lg border border-gray-800 bg-black/40 overflow-hidden max-w-4xl">
            <div className="flex items-center gap-2 px-4 py-2.5 border-b border-gray-800 bg-white/[0.02]">
              <span className="w-3 h-3 rounded-full bg-red-500/70" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <span className="w-3 h-3 rounded-full bg-green-500/70" />
              <span className="ml-3 text-xs text-gray-500">shreya@portfolio:~</span>
            </div>
            <div className="px-4 py-3 text-sm">
              <span className="text-green-400">shreya@portfolio</span>
              <span className="text-gray-500">:</span>
              <span className="text-cyan-400">~</span>
              <span className="text-gray-500">$ </span>
              <span className="text-gray-300">cat experience.log</span>
              <span className="inline-block w-2 h-4 bg-cyan-400 align-middle ml-1 animate-pulse" />
            </div>
          </div>

          {/* Timeline */}
          <div className="relative pl-10 md:pl-16 mt-12">
            {/* vertical rail */}
            <div className="absolute left-[11px] md:left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-cyan-400/70 via-cyan-400/20 to-transparent" />

            {experiences.map((exp, i) => (
              <div key={exp.company} className="relative pb-14 last:pb-0">
                {/* node */}
                <div className="absolute -left-10 md:-left-16 top-1 flex items-center justify-center w-6 h-6 md:w-8 md:h-8">
                  {exp.active && (
                    <span className="absolute inline-flex h-3.5 w-3.5 md:h-4 md:w-4 rounded-full bg-cyan-400/40 animate-ping" />
                  )}
                  <span
                    className={`relative w-3 h-3 md:w-3.5 md:h-3.5 rounded-full border-2 ${
                      exp.active
                        ? "bg-cyan-400 border-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.9)]"
                        : "bg-[#0a0e14] border-gray-600"
                    }`}
                  />
                </div>

                <div className="flex items-start gap-2 mb-2">
                  <span className="text-xs text-pink-400 tracking-wide">[{exp.period}]</span>
                  {exp.active && (
                    <span className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-green-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                      active
                    </span>
                  )}
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center overflow-hidden">
                      {exp.logo ? (
                        <Image src={exp.logo} alt={exp.logoAlt ?? exp.company} width={48} height={48} className="object-contain" />
                      ) : (
                        <span className="text-[#0a0e14] font-bold text-sm bg-purple-500 w-full h-full flex items-center justify-center text-white">
                          {exp.badgeText}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl md:text-2xl font-semibold text-white leading-tight">{exp.company}</h3>
                    <p className="text-cyan-400/80 text-sm mt-1">// {exp.role}</p>
                    <p className="text-gray-300 mt-3 leading-relaxed max-w-3xl">{exp.blurb}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] px-2 py-1 rounded border border-gray-700 text-gray-400 bg-white/[0.02]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* end of timeline cursor */}
            <div className="relative pt-2">
              <div className="absolute -left-10 md:-left-16 top-2 w-3 h-3 md:w-3.5 md:h-3.5 rounded-full border-2 border-gray-700 bg-[#0a0e14]" />
              <p className="text-xs text-gray-600">
                <span className="text-gray-500">$</span> tail -f experience.log
                <span className="inline-block w-2 h-3.5 bg-gray-600 align-middle ml-1 animate-pulse" />
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
