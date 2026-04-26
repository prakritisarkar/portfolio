"use client";

import { motion } from "framer-motion";
import { useReveal } from "@/lib/useReveal";
import SectionHeader from "@/components/ui/SectionHeader";

const skillCategories = [
  {
    label: "Frontend",
    color: "#00d4ff",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Redux"],
  },
  {
    label: "Backend",
    color: "#7c3aed",
    skills: ["Node.js", "FastAPI", "Python", "PostgreSQL", "Redis", "REST / GraphQL"],
  },
  {
    label: "Machine Learning",
    color: "#f97316",
    skills: ["scikit-learn", "Pandas", "NumPy", "TensorFlow", "D3.js", "Jupyter"],
  },
  {
    label: "Web3",
    color: "#00d4ff",
    skills: ["Solidity", "Hardhat", "Ethers.js", "The Graph", "IPFS", "MetaMask SDK"],
  },
  {
    label: "Tools & DevOps",
    color: "#7c3aed",
    skills: ["Git", "Docker", "AWS", "Vercel", "Figma", "Linux"],
  },
];

export default function Skills() {
  const { ref, inView } = useReveal();

  return (
    <section id="skills" ref={ref} className="relative z-10 py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          tag="03 — Skills"
          title="What I work with."
          subtitle="Technologies and tools I use to build products from idea to production."
          inView={inView}
        />

        <div className="space-y-10">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: ci * 0.1 + 0.2 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ background: cat.color, boxShadow: `0 0 8px ${cat.color}` }}
                />
                <span
                  className="font-mono text-xs tracking-widest uppercase"
                  style={{ color: cat.color }}
                >
                  {cat.label}
                </span>
                <div className="flex-1 h-[1px] bg-[#1a2035]" />
              </div>

              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill, si) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.35,
                      delay: ci * 0.1 + si * 0.04 + 0.3,
                    }}
                    className="group relative px-4 py-2 rounded-xl border border-[#1a2035] bg-[#0a0f1e]/60 font-mono text-sm text-slate-300 cursor-default transition-all duration-300"
                    onMouseEnter={(e) => {
                      const el = e.currentTarget;
                      el.style.borderColor = cat.color + "50";
                      el.style.color = cat.color;
                      el.style.boxShadow = `0 0 16px ${cat.color}15`;
                      el.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget;
                      el.style.borderColor = "";
                      el.style.color = "";
                      el.style.boxShadow = "";
                      el.style.transform = "";
                    }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
