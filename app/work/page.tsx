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
            {/* Software Engineering Intern at Amazon */}
            <div className="flex gap-6 py-12 first:pt-0">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center overflow-hidden">
                  <Image src="/amazon-logo.png" alt="Amazon" width={64} height={64} className="object-contain" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-white">Amazon</h3>
                    <p className="text-gray-400 text-lg mt-1">Software Engineering Intern - data engineering and applied AI</p>
                  </div>
                  <p className="text-gray-400 whitespace-nowrap">Jun 2025 – Sep 2025</p>
                </div>
                <p className="text-gray-300 mt-4 leading-relaxed">
                  Built a scalable analytics agent enabling natural language queries over hundreds of datasets, replacing manual BI workflows with real-time AI-driven insights. Designed ingestion, embedding, and caching pipelines to improve latency, reduce compute cost, and support reliable multi-user usage at scale.
                </p>
              </div>
            </div>

            {/* AI/ML Researcher at CRIS Lab */}
            <div className="flex gap-6 py-12">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center overflow-hidden">
                  <Image src="/columbia-logo.png" alt="Columbia" width={56} height={56} className="object-contain" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-white">CRIS Lab (Complex Resilient Intelligent Systems Lab)</h3>
                    <p className="text-gray-400 text-lg mt-1">AI/ML Researcher</p>
                  </div>
                  <p className="text-gray-400 whitespace-nowrap">Jan 2025 – Present</p>
                </div>
                <p className="text-gray-300 mt-4 leading-relaxed">
                  Conducting research on representation learning and mechanistic interpretability, including sparse autoencoders, clustering over large embedding spaces, and reinforcement learning techniques to improve model reasoning. Exploring distillation methods to transfer reasoning behaviors from larger models to smaller ones.
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
                  Built data pipelines and ETL systems for transforming unstructured biomedical data into reusable, structured datasets. Designed backend services and automation that reduced processing time from days to hours and enabled rapid experimentation for downstream ML teams.
                </p>
              </div>
            </div>

            {/* AI/ML Researcher at Columbia Medical Center */}
            <div className="flex gap-6 py-12">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center overflow-hidden">
                  <Image src="/columbia-med-logo.png" alt="Columbia Medical" width={64} height={64} className="object-contain" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-white">Columbia Medical Center — Machine Learning & Systems Biology Lab</h3>
                    <p className="text-gray-400 text-lg mt-1">AI/ML Researcher</p>
                  </div>
                  <p className="text-gray-400 whitespace-nowrap">May 2024 – Jan 2025</p>
                </div>
                <p className="text-gray-300 mt-4 leading-relaxed">
                  Developed machine learning models for large-scale biological data, including graph-based and deep learning approaches for link prediction and classification. Built HPC-backed data processing pipelines to accelerate experimentation and enable large-scale analysis.
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
