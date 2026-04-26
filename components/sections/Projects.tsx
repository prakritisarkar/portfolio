"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useReveal } from "@/lib/useReveal";
import SectionHeader from "@/components/ui/SectionHeader";
import {
  X,
  ExternalLink,
  Github,
  ArrowRight,
  Lock,
  TrendingUp,
  Activity,
  Zap,
} from "lucide-react";

const projects = [
  {
    id: "blockvault",
    name: "BlockVault",
    tagline: "A smarter approach to DeFi lending using on-chain credit behavior.",
    category: "Web3 / DeFi",
    color: "#f97316",
    icon: Lock,
    year: "2024",
    tech: ["Solidity", "Next.js", "The Graph", "Hardhat", "Ethers.js", "IPFS"],
    description:
      "BlockVault is a decentralized lending protocol that replaces collateral requirements with on-chain credit scoring, enabling undercollateralized loans based on verifiable wallet activity.",
    highlights: [
      "Built custom credit scoring smart contracts analyzing 6+ on-chain metrics",
      "Integrated The Graph protocol for real-time wallet reputation indexing",
      "Designed flash-loan resistant liquidation mechanism",
      "Deployed on testnet with gas-optimized Solidity contracts (avg 45k gas)",
    ],
    impact:
      "Prototype demonstrated 30% more capital efficiency than standard DeFi protocols. Received recognition at college blockchain hackathon.",
    github: "https://github.com/prakritisarkar/BlockVault",
    live: null,
  },
  {
    id: "splitx",
    name: "SplitX",
    tagline: "Simplifying group expenses with automated balance settlement.",
    category: "Full-Stack App",
    color: "#00d4ff",
    icon: TrendingUp,
    year: "2024",
    tech: ["React", "Node.js", "PostgreSQL", "Redis", "Plaid API", "Tailwind"],
    description:
      "SplitX is an intelligent expense-splitting application that automates group settlements using graph-based debt simplification — minimizing the number of transactions needed to settle everyone.",
    highlights: [
      "Implemented Bellman-Ford debt-simplification algorithm reducing settlement transactions by 60%",
      "Real-time updates with WebSocket connections for live expense tracking",
      "Bank-level OAuth integration via Plaid for automated payment verification",
      "Smart recurring expense detection with ML categorization",
    ],
    impact:
      "Beta tested with 50+ users across 8 friend groups. Reduced average settlement time from 3 days to same-day resolution.",
    github: "https://github.com/prakritisarkar/Split_x",
    live: "https://splitx.demo",
  },
  {
    id: "wellness",
    name: "Wellness Personas",
    tagline: "Turning raw data into meaningful user personas.",
    category: "ML / Data Science",
    color: "#7c3aed",
    icon: Activity,
    year: "2024",
    tech: ["Python", "scikit-learn", "Pandas", "FastAPI", "React", "D3.js"],
    description:
      "A machine learning pipeline that clusters users into wellness archetypes based on behavioral and biometric data, enabling hyper-personalized health recommendations.",
    highlights: [
      "K-Means + DBSCAN hybrid clustering achieving 87% silhouette score",
      "Feature engineering on 40+ health metrics with PCA dimensionality reduction",
      "Interactive D3.js visualization of persona clusters and transitions",
      "REST API serving real-time persona predictions at <50ms latency",
    ],
    impact:
      "Identified 5 distinct wellness personas from a 10,000-user dataset. Model insights used to redesign app onboarding, improving user retention by 22%.",
    github: "https://github.com/srijitabiswas/WellnessPersonas",
    live: null,
  },
];

function ProjectModal({
  project,
  onClose,
}: {
  project: (typeof projects)[0];
  onClose: () => void;
}) {
  const Icon = project.icon;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-[#030712]/90 backdrop-blur-xl" />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-[#1a2035] bg-[#0a0f1e] shadow-2xl"
        style={{ boxShadow: `0 0 80px ${project.color}20` }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className="p-8 border-b border-[#1a2035] relative overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${project.color}10 0%, transparent 60%)`,
          }}
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-8 h-8 rounded-lg border border-[#1a2035] flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-500 transition-all"
          >
            <X size={14} />
          </button>

          <div className="flex items-start gap-4">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: `${project.color}20`, border: `1px solid ${project.color}30` }}
            >
              <Icon size={20} style={{ color: project.color }} />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-1">
                <span
                  className="font-mono text-xs px-2 py-0.5 rounded"
                  style={{
                    color: project.color,
                    background: `${project.color}15`,
                  }}
                >
                  {project.category}
                </span>
                <span className="font-mono text-xs text-[#4b5563]">
                  {project.year}
                </span>
              </div>
              <h3 className="font-display text-2xl font-bold text-white">
                {project.name}
              </h3>
              <p className="text-slate-400 mt-1 text-sm">{project.tagline}</p>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="p-8 space-y-8">
          {/* Description */}
          <div>
            <h4 className="font-mono text-xs text-[#4b5563] uppercase tracking-widest mb-3">
              Overview
            </h4>
            <p className="text-slate-300 leading-relaxed">{project.description}</p>
          </div>

          {/* Highlights */}
          <div>
            <h4 className="font-mono text-xs text-[#4b5563] uppercase tracking-widest mb-3">
              Key Highlights
            </h4>
            <ul className="space-y-3">
              {project.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                  <Zap
                    size={14}
                    className="mt-0.5 flex-shrink-0"
                    style={{ color: project.color }}
                  />
                  {h}
                </li>
              ))}
            </ul>
          </div>

          {/* Impact */}
          <div
            className="p-4 rounded-xl"
            style={{
              background: `${project.color}08`,
              border: `1px solid ${project.color}20`,
            }}
          >
            <h4
              className="font-mono text-xs uppercase tracking-widest mb-2"
              style={{ color: project.color }}
            >
              Impact
            </h4>
            <p className="text-slate-300 text-sm leading-relaxed">{project.impact}</p>
          </div>

          {/* Tech stack */}
          <div>
            <h4 className="font-mono text-xs text-[#4b5563] uppercase tracking-widest mb-3">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="font-mono text-xs px-3 py-1 rounded-lg border border-[#1a2035] text-slate-400"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-3 pt-2">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#1a2035] text-slate-300 hover:text-white hover:border-slate-500 transition-all font-mono text-sm"
            >
              <Github size={14} />
              Source Code
            </a>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-sm transition-all"
                style={{
                  background: `${project.color}15`,
                  border: `1px solid ${project.color}30`,
                  color: project.color,
                }}
              >
                <ExternalLink size={14} />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ProjectCard({
  project,
  index,
  inView,
  onClick,
}: {
  project: (typeof projects)[0];
  index: number;
  inView: boolean;
  onClick: () => void;
}) {
  const Icon = project.icon;
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 + 0.2 }}
      onClick={onClick}
      className="group relative rounded-2xl border border-[#1a2035] bg-[#0a0f1e]/60 p-6 md:p-8 cursor-pointer overflow-hidden transition-all duration-500 hover:border-opacity-0"
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = project.color + "40";
        el.style.boxShadow = `0 0 40px ${project.color}12, 0 20px 60px rgba(0,0,0,0.5)`;
        el.style.transform = "translateY(-4px)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = "";
        el.style.boxShadow = "";
        el.style.transform = "";
      }}
    >
      {/* Gradient hover overlay */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `linear-gradient(135deg, ${project.color}06 0%, transparent 50%)`,
        }}
      />

      {/* Top row */}
      <div className="flex items-start justify-between mb-6">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
          style={{
            background: `${project.color}15`,
            border: `1px solid ${project.color}25`,
          }}
        >
          <Icon size={20} style={{ color: project.color }} />
        </div>
        <div className="flex items-center gap-2">
          <span
            className="font-mono text-xs px-2 py-1 rounded-md"
            style={{
              color: project.color,
              background: `${project.color}15`,
            }}
          >
            {project.category}
          </span>
          <span className="font-mono text-xs text-[#4b5563]">{project.year}</span>
        </div>
      </div>

      {/* Content */}
      <h3 className="font-display text-2xl font-bold text-white mb-2 group-hover:text-white transition-colors">
        {project.name}
      </h3>
      <p className="text-slate-400 text-sm mb-6 leading-relaxed">{project.tagline}</p>

      {/* Tech pills */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.slice(0, 4).map((t) => (
          <span
            key={t}
            className="font-mono text-xs px-2 py-1 rounded bg-[#1a2035] text-slate-400"
          >
            {t}
          </span>
        ))}
        {project.tech.length > 4 && (
          <span className="font-mono text-xs px-2 py-1 rounded bg-[#1a2035] text-slate-500">
            +{project.tech.length - 4}
          </span>
        )}
      </div>

      {/* View more */}
      <div
        className="flex items-center gap-2 font-mono text-xs transition-all duration-300 group-hover:gap-3"
        style={{ color: project.color }}
      >
        View Case Study
        <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const { ref, inView } = useReveal();
  const [selected, setSelected] = useState<(typeof projects)[0] | null>(null);

  return (
    <section id="projects" ref={ref} className="relative z-10 py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          tag="02 — Projects"
          title="Things I've shipped."
          subtitle="A selection of projects spanning DeFi protocols, full-stack applications, and machine learning systems."
          inView={inView}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              inView={inView}
              onClick={() => setSelected(project)}
            />
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/prakritisarkar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-sm text-slate-400 hover:text-[#00d4ff] transition-colors"
          >
            <Github size={16} />
            See more on GitHub
            <ArrowRight size={14} />
          </a>
        </motion.div>
      </div>

      <AnimatePresence>
        {selected && (
          <ProjectModal project={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
