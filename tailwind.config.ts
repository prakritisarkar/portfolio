import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ["'JetBrains Mono'", "monospace"],
        display: ["'Syne'", "sans-serif"],
        body: ["'DM Sans'", "sans-serif"],
      },
      colors: {
        bg: "#030712",
        surface: "#0a0f1e",
        border: "#1a2035",
        accent: "#00d4ff",
        accent2: "#7c3aed",
        accent3: "#f97316",
        muted: "#4b5563",
        subtle: "#1e293b",
      },
      animation: {
        "glow-pulse": "glow-pulse 2s ease-in-out infinite alternate",
        "float": "float 6s ease-in-out infinite",
        "scan": "scan 3s linear infinite",
        "blink": "blink 1s step-end infinite",
      },
      keyframes: {
        "glow-pulse": {
          "0%": { boxShadow: "0 0 20px rgba(0, 212, 255, 0.3)" },
          "100%": { boxShadow: "0 0 40px rgba(0, 212, 255, 0.7)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "scan": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        "blink": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px)",
        "radial-glow":
          "radial-gradient(ellipse at center, rgba(0,212,255,0.15) 0%, transparent 70%)",
      },
      backgroundSize: {
        "grid-md": "40px 40px",
      },
    },
  },
  plugins: [],
};
export default config;
