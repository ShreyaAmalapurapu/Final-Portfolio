import { Navigation } from "@/components/navigation"
import Link from "next/link"

export default function AboutPage() {
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

        {/* About Me Section */}
        <section className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-cyan-400">about me</h2>
          <div className="space-y-6 text-lg leading-relaxed max-w-4xl">
            <p className="text-gray-300">
              Hi! I'm Shreya, a Computer Science student at Columbia University with a minor in Applied Mathematics, focused on building software systems that bridge theory, infrastructure, and real-world impact. My work sits at the intersection of AI research and software engineering, where I enjoy turning complex ideas into reliable, production-ready systems.
            </p>
            <p className="text-gray-300">
              I've gained experience across industry and research, from building large-scale AI-powered analytics systems at Amazon to designing ETL platforms and data pipelines in fast-moving startup environments. In research settings, I've worked on representation learning, mechanistic interpretability, and deep learning models for scientific discovery, often leveraging distributed systems and HPC infrastructure to scale experimentation.
            </p>
            <p className="text-gray-300">
              I'm particularly interested in how we can make AI systems more robust, interpretable, and useful in high-stakes domains. Whether I'm developing end-to-end ML pipelines, exploring how models reason internally, or collaborating with interdisciplinary teams, I'm driven by curiosity and a desire to build systems that actually work in the real world.
            </p>
          </div>
          <div className="flex flex-wrap gap-6 text-lg">
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
        </section>
      </div>
    </div>
  )
}
