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
            Some highlights from building things at companies, in labs, and occasionally on a boat.
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
                  Teaching AI agents to ask permission before touching your data. Building Chupacabra, a Slack bot that plugs into GitHub, Jira, Confluence, and Snowflake for 10+ teams — plus the guardrails so it doesn't go rogue.
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
                  Built an AI analyst that lets anyone query 10TB+ of company data in plain English, no SQL required. Spent a summer nudging RAG accuracy from 65% to 85%, one evaluation run at a time.
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
                  Poking around inside billion-parameter models to see what they're actually thinking. Built a little team of AI agents — a decider, a reasoner, an executor — that argue their way to better answers, 35% better than going it alone.
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
                  Turned a 3-5 day, spreadsheet-fueled data slog into a 2-hour pipeline. Made 15+ messy biomedical data sources play nice together so ML teams could stop waiting around.
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
                  Trained graph neural nets on proteins and put a supercomputer to work on 30,000+ protein structures — turned a months-long job into two weeks.
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
                  Spent my free time picking apart startup pitch decks and asking founders uncomfortable technical questions about AI, healthcare, and infra.
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
                  Weekly deep dives into why AI systems break, lie, or go sideways — and what we can actually do about it.
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
                  Helped build a robot boat that hunts algae blooms for NYC Parks. Yes, an actual boat, with sensors and a mission.
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
                  Read a lot of frontier-tech pitch decks and said "this won't scale" more than once.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
