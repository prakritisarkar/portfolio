"use client";

import { useState } from "react";
import TerminalLoader from "@/components/ui/TerminalLoader";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Blog from "@/components/sections/Blog";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import CursorGlow from "@/components/ui/CursorGlow";
import BackgroundGrid from "@/components/ui/BackgroundGrid";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <CursorGlow />
      {!loaded && <TerminalLoader onComplete={() => setLoaded(true)} />}
      {loaded && (
        <main className="relative min-h-screen">
          <BackgroundGrid />
          <Navbar />
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Experience />
          <Blog />
          <Contact />
          <Footer />
        </main>
      )}
    </>
  );
}
