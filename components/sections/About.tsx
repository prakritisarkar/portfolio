"use client";

import { motion } from "framer-motion";
import { useReveal } from "@/lib/useReveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { Code2, Brain, Globe, Sparkles } from "lucide-react";

const pillars = [
  {
    icon: Code2,
    label: "Full-Stack Dev",
    color: "#00d4ff",
    desc: "End-to-end product development",
  },
  {
    icon: Brain,
    label: "Machine Learning",
    color: "#7c3aed",
    desc: "Intelligent data-driven systems",
  },
  {
    icon: Globe,
    label: "Web3 & DeFi",
    color: "#f97316",
    desc: "Decentralized protocol engineering",
  },
  {
    icon: Sparkles,
    label: "System Design",
    color: "#00d4ff",
    desc: "Scalable architecture patterns",
  },
];

export default function About() {
  const { ref, inView } = useReveal();

  return (
    <section id="about" ref={ref} className="relative z-10 py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          tag="01 — About"
          title="The person behind the code."
          inView={inView}
        />

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Text content */}
          <div className="space-y-6">
            {[
              "I'm a Computer Science Engineering student passionate about building real-world solutions through code. My work sits at the intersection of full-stack development, machine learning, and decentralized technologies.",
              "I enjoy taking ideas from concept to deployment — whether it's designing intelligent systems, building responsive web apps, or experimenting with blockchain-based solutions.",
              "Currently, I'm focused on creating scalable, user-centric products and continuously improving my problem-solving and system design skills.",
            ].map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 * i + 0.2 }}
                className="text-slate-300 text-base md:text-lg leading-relaxed"
              >
                {para}
              </motion.p>
            ))}

            {/* Quick facts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="pt-4 flex flex-wrap gap-3"
            >
              {["Open to Internships", "CSE Student", "Kolkata, India"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs px-3 py-1 rounded-full border border-[#1a2035] text-slate-400"
                  >
                    {tag}
                  </span>
                )
              )}
            </motion.div>
          </div>

          {/* Pillars grid */}
          <div className="grid grid-cols-2 gap-4">
            {pillars.map((p, i) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * i + 0.4 }}
                className="group p-5 rounded-xl border border-[#1a2035] bg-[#0a0f1e]/40 hover:border-opacity-50 transition-all duration-300 cursor-default"
                style={
                  {
                    "--c": p.color,
                  } as React.CSSProperties
                }
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = p.color + "40";
                  el.style.boxShadow = `0 0 20px ${p.color}15`;
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = "";
                  el.style.boxShadow = "";
                }}
              >
                <p.icon
                  size={22}
                  className="mb-3 transition-colors"
                  style={{ color: p.color }}
                />
                <div className="font-display font-semibold text-white text-sm mb-1">
                  {p.label}
                </div>
                <div className="text-xs text-slate-500">{p.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
