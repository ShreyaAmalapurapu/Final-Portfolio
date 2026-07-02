import { Navigation } from "@/components/navigation"
import { SiteHeader } from "@/components/site-header"
import Link from "next/link"

function Prompt({ cmd }: { cmd: string }) {
  return (
    <p>
      <span className="text-green-400">shreya@portfolio</span>
      <span className="text-gray-500">:</span>
      <span className="text-cyan-400">~</span>
      <span className="text-gray-500">$ </span>
      <span className="text-gray-300">{cmd}</span>
    </p>
  )
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0a0e14] text-gray-300 font-mono p-8 md:p-16 lg:p-24">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <SiteHeader />

        <Navigation />

        {/* About Me Section */}
        <section className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-cyan-400">about me</h2>

          <div className="rounded-lg border border-gray-800 bg-black/40 overflow-hidden max-w-4xl">
            {/* terminal chrome */}
            <div className="flex items-center gap-2 px-4 py-2.5 border-b border-gray-800 bg-white/[0.02]">
              <span className="w-3 h-3 rounded-full bg-red-500/70" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <span className="w-3 h-3 rounded-full bg-green-500/70" />
              <span className="ml-3 text-xs text-gray-500">shreya@portfolio:~</span>
            </div>

            <div className="p-5 md:p-8 text-sm md:text-base space-y-8">
              <div className="space-y-2">
                <Prompt cmd="whoami" />
                <p className="text-gray-300 leading-relaxed pl-0">
                  Shreya — CS + Applied Math @ Columbia, class of 2027. I like building the plumbing that makes AI
                  systems actually useful instead of just impressive in a demo.
                </p>
              </div>

              <div className="space-y-2">
                <Prompt cmd="cat mission.txt" />
                <p className="text-gray-300 leading-relaxed">
                  Half research, half production code. I've trained sparse autoencoders to peek inside LLM brains
                  and shipped an analytics agent that 100+ people actually query every day — turns out I like both
                  ends of the pipeline: the "why does this model think that" end, and the "ship it, users are
                  waiting" end.
                </p>
              </div>

              <div className="space-y-2">
                <Prompt cmd="ls current_obsessions/" />
                <ul className="text-gray-300 leading-relaxed space-y-1.5">
                  <li>
                    <span className="text-pink-400">→</span> teaching AI agents to ask for permission before doing
                    something dumb
                  </li>
                  <li>
                    <span className="text-pink-400">→</span> multi-agent systems that argue with each other until
                    they're right
                  </li>
                  <li>
                    <span className="text-pink-400">→</span> distributed / HPC systems — bonus points if it involves
                    a supercomputer
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <Prompt cmd="cat stack.yaml" />
                <pre className="text-gray-300 leading-relaxed whitespace-pre-wrap">
                  <span className="text-cyan-400">languages</span>: Python, TypeScript, C/C++, Java, SQL, R, JavaScript{"\n"}
                  <span className="text-cyan-400">systems</span>: AWS, GCP, Spark, Kafka, Vector DBs, Kubernetes, SLURM
                </pre>
              </div>

              <div className="space-y-3">
                <Prompt cmd="./contact.sh --all" />
                <div className="flex flex-wrap gap-6 pt-1">
                  <Link
                    href="https://www.linkedin.com/in/shreya-amala/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 hover:underline transition-colors"
                  >
                    LinkedIn
                  </Link>
                  <Link
                    href="https://github.com/ShreyaAmalapurapu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 hover:underline transition-colors"
                  >
                    GitHub
                  </Link>
                  <Link
                    href="mailto:sa4342@columbia.edu"
                    className="text-cyan-400 hover:text-cyan-300 hover:underline transition-colors"
                  >
                    Email
                  </Link>
                </div>
              </div>

              <p className="text-gray-600 text-xs">
                <span className="text-gray-500">$</span>
                <span className="inline-block w-2 h-3.5 bg-gray-600 align-middle ml-2 animate-pulse" />
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
