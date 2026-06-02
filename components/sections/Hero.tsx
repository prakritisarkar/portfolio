"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Mail, FileText } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 pt-20 z-10"
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00d4ff]/20 bg-[#00d4ff]/5 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#00d4ff] animate-pulse" />
          <span className="font-mono text-xs text-[#00d4ff] tracking-wider">
            Available for opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.div custom={1} variants={fadeUp} initial="hidden" animate="show">
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-[1.05] tracking-tight">
            Prakriti{" "}
            <span className="gradient-text">Sarkar</span>
          </h1>
        </motion.div>

        {/* Headline */}
        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="font-display text-xl md:text-2xl lg:text-3xl text-slate-300 max-w-3xl mx-auto leading-snug mb-6 font-medium"
        >
          Final-Year CSE Student building{" "}
<span className="text-[#00d4ff]">full-stack applications</span> and{" "}
<span className="text-[#7c3aed]">AI-powered solutions</span> for real-world problems.
        </motion.p>

        {/* Subtext */}
        <motion.p
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-12"
        >
          Final-year Computer Science Engineering student with experience in machine learning, full-stack development, blockchain applications, and digital transformation projects. I focus on building practical solutions that create real-world impact.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group flex items-center gap-2 px-6 py-3 bg-[#00d4ff] text-[#030712] font-semibold rounded-xl hover:bg-white transition-all duration-300 font-mono text-sm shadow-[0_0_30px_rgba(0,212,255,0.3)] hover:shadow-[0_0_50px_rgba(0,212,255,0.5)]"
          >
            View Projects
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>

          <a
            href="https://github.com/prakritisarkar"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 border border-[#1a2035] text-slate-300 rounded-xl hover:border-[#00d4ff]/40 hover:text-[#00d4ff] transition-all duration-300 font-mono text-sm glass"
          >
            <Github size={16} />
            GitHub
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 border border-[#1a2035] text-slate-300 rounded-xl hover:border-[#7c3aed]/40 hover:text-[#7c3aed] transition-all duration-300 font-mono text-sm glass"
          >
            <FileText size={16} />
            Resume
          </a>

          <a
            href="#contact"
            className="flex items-center gap-2 px-6 py-3 border border-[#1a2035] text-slate-300 rounded-xl hover:border-[#f97316]/40 hover:text-[#f97316] transition-all duration-300 font-mono text-sm glass"
          >
            <Mail size={16} />
            Contact
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          custom={5}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-20 flex flex-wrap items-center justify-center gap-10 md:gap-16"
        >
          {[
            { value: "10+", label: "Projects Built" },
            { value: "3+", label: "Years Coding" },
            { value: "5+", label: "Tech Stacks" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-3xl md:text-4xl font-bold text-white glow-text">
                {stat.value}
              </div>
              <div className="font-mono text-xs text-[#4b5563] mt-1 tracking-wider uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="font-mono text-xs text-[#4b5563] tracking-widest">
              SCROLL
            </span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-[#00d4ff]/60 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
