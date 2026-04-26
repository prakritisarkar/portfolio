"use client";

import { Terminal } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative z-10 border-t border-[#1a2035] py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-gradient-to-br from-[#00d4ff] to-[#7c3aed] flex items-center justify-center">
            <Terminal size={10} className="text-white" />
          </div>
          <span className="font-mono text-sm text-slate-400">
            Prakriti Sarkar
          </span>
        </div>

        <p className="font-mono text-xs text-[#4b5563]">
          © {year} · Built with Next.js & Framer Motion
        </p>

        <div className="flex items-center gap-1 font-mono text-xs text-[#4b5563]">
          <span className="w-2 h-2 rounded-full bg-[#00d4ff] animate-pulse inline-block" />
          <span>Available for work</span>
        </div>
      </div>
    </footer>
  );
}
