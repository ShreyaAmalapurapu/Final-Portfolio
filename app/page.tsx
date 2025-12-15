import { Navigation } from "@/components/navigation"
import Link from "next/link"

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
          <div className="space-y-12 mt-12">
            {/* ProtAI Project */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white">ProtAI — Multimodal, Multi-Agent Protein Engineering Platform</h3>
              <p className="text-gray-300 leading-relaxed max-w-4xl">
                ProtAI is an autonomous, multi-agent system for protein engineering that reasons over heterogeneous biomedical data sources to identify high-value therapeutic targets. The platform constructs disease-specific interaction networks, triggers structure prediction and docking workflows, and delivers ranked protein targets through fully orchestrated, end-to-end discovery pipelines.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="https://cris.cheme.columbia.edu/content/research" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 border-2 border-cyan-400 text-cyan-400 rounded hover:bg-cyan-400/10 transition-colors"
                >
                  done as part of research lab
                </Link>
              </div>
            </div>

            {/* Ariadne Project */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white">Ariadne — Distributed Orchestration System for Large-Scale ML Workloads</h3>
              <p className="text-gray-300 leading-relaxed max-w-4xl">
                Ariadne is a distributed orchestration system designed to accelerate large-scale machine learning experiments on HPC infrastructure. It dynamically splits preprocessing, training, and hyperparameter tuning across CPU cores and compute nodes using batched workloads and adaptive job queues, reducing end-to-end experiment runtimes from days to hours.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="https://github.com/aqlaboratory/ariadne" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 border-2 border-cyan-400 text-cyan-400 rounded hover:bg-cyan-400/10 transition-colors"
                >
                  done as part of research lab
                </Link>
              </div>
            </div>

            {/* Stock Tracker Insights Project */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white">Stock Tracker Insights — AI-Powered Real-Time Market Analytics</h3>
              <p className="text-gray-300 leading-relaxed max-w-4xl">
                Stock Tracker Insights is an AI-powered, real-time financial analytics web application for tracking equities across customizable time horizons with interactive visualizations and personalized alerts. Built with Next.js and an event-driven architecture, the platform automates price alerts, earnings notifications, and AI-generated market digests, while an admin dashboard enables stock management, news publishing, and user activity monitoring.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="https://github.com/ShreyaAmalapurapu/Stock-Tracker-Insights-App" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 border-2 border-cyan-400 text-cyan-400 rounded hover:bg-cyan-400/10 transition-colors"
                >
                  Link
                </Link>
              </div>
            </div>

            {/* Multimodal Convolutional-Transformer Project */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white">Multimodal Convolutional-Transformer for 3D Genome Structure Prediction</h3>
              <p className="text-gray-300 leading-relaxed max-w-4xl">
                Built an end-to-end convolutional–Transformer model that predicts local 3D genome interaction maps from DNA sequence and epigenomic signals. The architecture uses modality-specific CNN encoders for local feature extraction and a Transformer-based self-attention module to model long-range dependencies across genomic regions, enabling the system to capture non-local interaction patterns. Controlled ablation experiments show that incorporating DNA methylation provides complementary signal, improving reconstruction accuracy and generalization on held-out genomic regions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/ML4G_paper.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 border-2 border-cyan-400 text-cyan-400 rounded hover:bg-cyan-400/10 transition-colors"
                >
                  Link
                </Link>
              </div>
            </div>

            {/* ENStaDTI-pred Project */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white">ENStaDTI-pred — Ensemble Graph Learning for Drug–Target Interaction Prediction</h3>
              <p className="text-gray-300 leading-relaxed max-w-4xl">
                ENStaDTI-pred is a machine learning pipeline for large-scale drug–target interaction prediction built on heterogeneous graph representation learning and stacked ensembling. The system constructs a multiplex graph with eleven edge types, learns complementary node embeddings using multiple graph embedding frameworks (GATNE, ComplEx, MultiVERSE, Hin2Vec, AspEm), and integrates them via a multi-layer stacking classifier to perform link prediction under severe class imbalance. By combining diverse embedding spaces through late-integration ensembling, the model achieves state-of-the-art performance on benchmark datasets and demonstrates how ensemble graph representations can substantially improve predictive robustness and generalization.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/DTI Paper.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 border-2 border-cyan-400 text-cyan-400 rounded hover:bg-cyan-400/10 transition-colors"
                >
                  Link
                </Link>
              </div>
            </div>

            {/* NRPreTo Project */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white">NRPreTo — Hierarchical Machine Learning for Protein Sequence Classification</h3>
              <p className="text-gray-300 leading-relaxed max-w-4xl">
                NRPreTo is a hierarchical machine learning pipeline for large-scale protein sequence classification, designed as a two-level decision system with cascaded classifiers. The model operates on high-dimensional sequence feature vectors (13,494 descriptors) and applies per-stage feature selection and hyperparameter optimization to reduce dimensionality and improve generalization, with stage-wise filtering to mitigate error propagation. Evaluated on benchmark datasets and external proteome-scale data, the system demonstrates robust performance in multi-class classification under limited labeled data and successfully generalizes to unseen sequences.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10268018/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 border-2 border-cyan-400 text-cyan-400 rounded hover:bg-cyan-400/10 transition-colors"
                >
                  Link
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
