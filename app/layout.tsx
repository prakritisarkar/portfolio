import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prakriti Sarkar — Full-Stack Developer",
  description:
    "Full-stack developer with experience in machine learning, Web3, and data-driven systems. Building products that are not just functional — but impactful.",
  keywords: ["Prakriti Sarkar", "Full-Stack Developer", "ML Engineer", "Web3", "Portfolio"],
  openGraph: {
    title: "Prakriti Sarkar — Full-Stack Developer",
    description: "Building scalable web applications and intelligent systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#030712] text-slate-200 font-body antialiased overflow-x-hidden">
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
