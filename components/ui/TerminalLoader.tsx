"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const lines = [
  { text: "> Initializing system...", delay: 0 },
  { text: "> Loading portfolio v2.0", delay: 400 },
  { text: "> Connecting to servers...", delay: 800 },
  { text: "> Authenticating credentials...", delay: 1200 },
  { text: "> Fetching projects [████████████] 100%", delay: 1700 },
  { text: "> Loading ML models...", delay: 2100 },
  { text: "> Configuring Web3 protocols...", delay: 2500 },
  { text: "> System ready. Welcome.", delay: 3000 },
];

interface Props {
  onComplete: () => void;
}

export default function TerminalLoader({ onComplete }: Props) {
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    lines.forEach((line, i) => {
      setTimeout(() => {
        setVisibleLines((prev) => [...prev, i]);
        setProgress(Math.round(((i + 1) / lines.length) * 100));
      }, line.delay);
    });

    setTimeout(() => {
      setExiting(true);
      setTimeout(onComplete, 600);
    }, 3600);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-[#030712] flex items-center justify-center"
        >
          {/* Scan line */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#00d4ff]/40 to-transparent animate-scan" />
          </div>

          {/* Background blobs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00d4ff]/5 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#7c3aed]/5 rounded-full blur-[100px]" />

          <div className="w-full max-w-2xl px-6">
            {/* Terminal window */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="glass rounded-xl overflow-hidden border border-[#1a2035]"
            >
              {/* Title bar */}
              <div className="flex items-center gap-2 px-4 py-3 bg-[#0a0f1e] border-b border-[#1a2035]">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28ca41]" />
                <span className="ml-3 text-xs font-mono text-[#4b5563]">
                  prakriti@portfolio:~
                </span>
              </div>

              {/* Terminal body */}
              <div className="p-6 min-h-[280px] font-mono text-sm">
                {lines.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={visibleLines.includes(i) ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.2 }}
                    className={`mb-1 ${
                      i === lines.length - 1
                        ? "text-[#00d4ff] font-semibold"
                        : "text-slate-400"
                    }`}
                  >
                    {visibleLines.includes(i) && (
                      <>
                        {line.text}
                        {i === visibleLines[visibleLines.length - 1] &&
                          i < lines.length - 1 && (
                            <span className="ml-1 animate-blink text-[#00d4ff]">
                              ▊
                            </span>
                          )}
                      </>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Progress bar */}
              <div className="px-6 pb-6">
                <div className="flex justify-between text-xs font-mono text-[#4b5563] mb-2">
                  <span>Loading portfolio...</span>
                  <span>{progress}%</span>
                </div>
                <div className="h-1 bg-[#1a2035] rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                </div>
              </div>
            </motion.div>

            {/* Name below terminal */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-center mt-8"
            >
              <span className="font-mono text-xs text-[#4b5563] tracking-widest uppercase">
                Prakriti Sarkar • Portfolio
              </span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
