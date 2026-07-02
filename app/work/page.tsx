import { Navigation } from "@/components/navigation"
import Image from "next/image"

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

          <p className="text-gray-300 leading-relaxed text-lg max-w-4xl">
            I've worked across industry and research, focusing on ML systems, AI/ML research, and applied software engineering.
          </p>

          {/* Work Experience Cards */}
          <div className="space-y-0 mt-12 divide-y divide-gray-800">
            {/* Software Engineering Intern at Datadog */}
            <div className="flex gap-6 py-12 first:pt-0">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-purple-500 flex items-center justify-center overflow-hidden">
                  <span className="text-white font-bold text-xl">DD</span>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-white">Datadog</h3>
                    <p className="text-gray-400 text-lg mt-1">Software Engineering Intern</p>
                  </div>
                  <p className="text-gray-400 whitespace-nowrap">May 2026 – Aug 2026</p>
                </div>
                <p className="text-gray-300 mt-4 leading-relaxed">
                  Architecting an agentic permissions management platform for company-wide data access, with policy-aware guardrails that let AI agents autonomously acquire only the permissions they need. Building Chupacabra, an AI-powered Slack bot (Go/HTTP microservice) that composes skill bundles and MCP server integrations across GitHub, Jira, Confluence, and Snowflake for sandboxed agentic assistance across 10+ internal teams. Also designing a batch data ingestion pipeline for GBs of observability telemetry, backed by Terraform-managed cloud infrastructure and IAM policies for reproducible deployments.
                </p>
              </div>
            </div>

            {/* Software Engineering Intern at Amazon */}
            <div className="flex gap-6 py-12">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center overflow-hidden">
                  <Image src="/amazon-logo.png" alt="Amazon" width={64} height={64} className="object-contain" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-white">Amazon</h3>
                    <p className="text-gray-400 text-lg mt-1">Software Engineering Intern</p>
                  </div>
                  <p className="text-gray-400 whitespace-nowrap">Jun 2025 – Sep 2025</p>
                </div>
                <p className="text-gray-300 mt-4 leading-relaxed">
                  Built a large-scale analytics platform enabling natural language queries across org-wide data with under 10s latency, serving 100+ users. Designed high-throughput ingestion and embedding pipelines processing 1M+ records daily across data sources, indexing into a vector database to enable sub-second semantic search over 10TB+ of enterprise data. Built an automated iterative agent framework with a continuous evaluation pipeline across 100+ test scenarios, improving RAG accuracy from 65% to 85% and enabling optimization of RAG chunking and multi-agent orchestration.
                </p>
              </div>
            </div>

            {/* ML Research Intern at CRIS Lab */}
            <div className="flex gap-6 py-12">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center overflow-hidden">
                  <Image src="/columbia-logo.png" alt="Columbia" width={56} height={56} className="object-contain" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-white">Complex Resilient Intelligent Systems (CRIS) Lab @ Columbia University</h3>
                    <p className="text-gray-400 text-lg mt-1">ML Research Intern</p>
                  </div>
                  <p className="text-gray-400 whitespace-nowrap">May 2024 – Present</p>
                </div>
                <p className="text-gray-300 mt-4 leading-relaxed">
                  Trained sparse autoencoders on LLM activations (11B+ parameters) to uncover semantic representations with 90%+ accuracy. Built a multi-agent reasoning system with specialized roles — decider, reasoner, and executor — that improved complex problem-solving accuracy by 35% over single-agent models through structured task decomposition and inter-agent coordination.
                </p>
              </div>
            </div>

            {/* Software Engineering Intern at Scale Medicine */}
            <div className="flex gap-6 py-12">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center overflow-hidden">
                  <Image src="/scale-medicine-logo.png" alt="Scale Medicine" width={64} height={64} className="object-contain" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-white">Scale Medicine</h3>
                    <p className="text-gray-400 text-lg mt-1">Software Engineering Intern</p>
                  </div>
                  <p className="text-gray-400 whitespace-nowrap">Dec 2024 – May 2025</p>
                </div>
                <p className="text-gray-300 mt-4 leading-relaxed">
                  Built an end-to-end ETL platform processing 50+ datasets, reducing data transformation and synthetic data generation time from 3–5 days to under 2 hours and accelerating iteration cycles for downstream ML teams. Designed a unified data platform consolidating 15+ sources with automated schema normalization and ID resolution, reducing query latency from 2s to under 100ms and enabling real-time cross-dataset analytics.
                </p>
              </div>
            </div>

            {/* ML Research Intern at AlQuraishi Lab */}
            <div className="flex gap-6 py-12">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center overflow-hidden">
                  <Image src="/columbia-med-logo.png" alt="AlQuraishi Lab" width={64} height={64} className="object-contain" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-white">AlQuraishi Lab @ Columbia University</h3>
                    <p className="text-gray-400 text-lg mt-1">ML Research Intern</p>
                  </div>
                  <p className="text-gray-400 whitespace-nowrap">May 2024 – Dec 2024</p>
                </div>
                <p className="text-gray-300 mt-4 leading-relaxed">
                  Designed and trained deep learning architectures — GNNs, CNNs, and ensemble models — for link prediction, clustering, and multi-level classification, boosting predictive performance by 20–30% through hyperparameter tuning and negative sampling strategies. Built a distributed data processing pipeline leveraging HPC clusters with parallelized SLURM jobs to preprocess 30,000+ dense protein structure files, reducing processing time by 95%, from months to two weeks.
                </p>
              </div>
            </div>

            {/* Associate at Columbia Venture Partners */}
            <div className="flex gap-6 py-12">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center overflow-hidden">
                  <Image src="/cvp-logo.png" alt="CVP" width={56} height={56} className="object-contain" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-white">Columbia Venture Partners (CVP)</h3>
                    <p className="text-gray-400 text-lg mt-1">Associate</p>
                  </div>
                  <p className="text-gray-400 whitespace-nowrap">2024 – Present</p>
                </div>
                <p className="text-gray-300 mt-4 leading-relaxed">
                  Evaluated early-stage startups at the intersection of AI, healthcare, and infrastructure through market analysis, technical diligence, and investment memos. Worked closely with founders on product strategy and technical positioning.
                </p>
              </div>
            </div>

            {/* Member at Columbia AI Alignment */}
            <div className="flex gap-6 py-12">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center overflow-hidden">
                  <Image src="/caiac-logo.png" alt="CAIAC" width={56} height={56} className="object-contain" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-white">Columbia AI Alignment</h3>
                    <p className="text-gray-400 text-lg mt-1">Member</p>
                  </div>
                  <p className="text-gray-400 whitespace-nowrap">2024 – Present</p>
                </div>
                <p className="text-gray-300 mt-4 leading-relaxed">
                  Participated in reading groups and discussions on AI safety, alignment, and model robustness, with emphasis on failure modes, interpretability, and responsible deployment of ML systems.
                </p>
              </div>
            </div>

            {/* Software Engineer at AQUAS Project */}
            <div className="flex gap-6 py-12">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center overflow-hidden">
                  <Image src="/cu-robotics-logo.png" alt="CU Robotics" width={56} height={56} className="object-contain" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-white">AQUAS Project (Autonomous Water Systems)</h3>
                    <p className="text-gray-400 text-lg mt-1">Software Engineer</p>
                  </div>
                  <p className="text-gray-400 whitespace-nowrap">2024 – Present</p>
                </div>
                <p className="text-gray-300 mt-4 leading-relaxed">
                  Worked as part of a cross-institutional team in partnership with a Columbia research lab and NYC Parks to design and deploy an autonomous aquatic vehicle for monitoring algae blooms in ponds and lakes. Contributed to system design, sensor-driven data collection, and control logic, enabling real-world environmental monitoring and targeted treatment dispersal to support ecosystem health.
                </p>
              </div>
            </div>

            {/* Analyst at Entrepreneurs Roundtable Accelerator */}
            <div className="flex gap-6 py-12">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center overflow-hidden">
                  <Image src="/era-logo.png" alt="ERA" width={64} height={64} className="object-contain" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-white">Entrepreneurs Roundtable Accelerator</h3>
                    <p className="text-gray-400 text-lg mt-1">Analyst</p>
                  </div>
                  <p className="text-gray-400 whitespace-nowrap">2024</p>
                </div>
                <p className="text-gray-300 mt-4 leading-relaxed">
                  Conducted diligence on frontier technology startups, focusing on AI-driven products and data-intensive systems. Analyzed business models, competitive landscapes, and technical differentiation.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
