"use client";

import { motion } from "framer-motion";

interface Props {
  tag: string;
  title: string;
  subtitle?: string;
  inView: boolean;
}

export default function SectionHeader({ tag, title, subtitle, inView }: Props) {
  return (
    <div className="mb-16 md:mb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-3 mb-4"
      >
        <div className="h-[1px] w-8 bg-[#00d4ff]" />
        <span className="font-mono text-xs text-[#00d4ff] tracking-widest uppercase">
          {tag}
        </span>
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-display text-4xl md:text-5xl font-bold text-white"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-slate-400 max-w-xl text-lg"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
