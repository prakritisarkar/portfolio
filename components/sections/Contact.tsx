"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useReveal } from "@/lib/useReveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { Github, Linkedin, Twitter, Mail, Send, ArrowRight } from "lucide-react";

const socials = [
  {
    label: "GitHub",
    handle: "@prakriti-sarkar",
    href: "https://github.com/prakritisarkar",
    icon: Github,
    color: "#e2e8f0",
  },
  {
    label: "LinkedIn",
    handle: "Prakriti Sarkar",
    href: "https://www.linkedin.com/in/prakriti-sarkar-35311428b/",
    icon: Linkedin,
    color: "#0077b5",
  },
  {
    label: "Twitter / X",
    handle: "@prakriti_dev",
    href: "https://twitter.com",
    icon: Twitter,
    color: "#1da1f2",
  },
  {
    label: "Email",
    handle: "hello.prakritisarkar@gmail.com",
    href: "mailto:hello.prakritisarkar@gmail.com",
    icon: Mail,
    color: "#00d4ff",
  },
];

export default function Contact() {
  const { ref, inView } = useReveal();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, connect to an API route or email service
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" ref={ref} className="relative z-10 py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          tag="06 — Contact"
          title="Let's build something."
          subtitle="Have a project in mind, or just want to connect? I'm always open to interesting conversations."
          inView={inView}
        />

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left — socials + message */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              Whether it's a full-time role, internship, freelance project, or
              just a conversation about tech — my inbox is always open.
            </p>

            <a
              href= "mailto:hello.prakritisarkar@gmail.com"

              className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] text-white font-semibold font-mono text-sm mb-10 shadow-[0_0_30px_rgba(0,212,255,0.2)] hover:shadow-[0_0_50px_rgba(0,212,255,0.4)] transition-all hover:-translate-y-0.5"
            >
              <Mail size={16} />
              Send me an email
              <ArrowRight size={14} />
            </a>

            {/* Social links */}
            <div className="space-y-3">
              {socials.map((s, i) => {
                const Icon = s.icon;
                return (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: i * 0.1 + 0.4 }}
                    className="flex items-center gap-4 p-4 rounded-xl border border-[#1a2035] bg-[#0a0f1e]/40 group transition-all duration-300"
                    onMouseEnter={(e) => {
                      const el = e.currentTarget;
                      el.style.borderColor = s.color + "40";
                      el.style.transform = "translateX(4px)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget;
                      el.style.borderColor = "";
                      el.style.transform = "";
                    }}
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: s.color + "15" }}
                    >
                      <Icon size={16} style={{ color: s.color }} />
                    </div>
                    <div>
                      <div className="font-mono text-xs text-[#4b5563] uppercase tracking-wider">
                        {s.label}
                      </div>
                      <div className="text-slate-300 text-sm font-medium">{s.handle}</div>
                    </div>
                    <ArrowRight
                      size={14}
                      className="ml-auto text-[#4b5563] group-hover:text-slate-300 group-hover:translate-x-1 transition-all"
                    />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Right — contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form
              onSubmit={handleSubmit}
              className="p-8 rounded-2xl border border-[#1a2035] bg-[#0a0f1e]/60 space-y-5"
            >
              <div className="text-sm font-mono text-[#4b5563] mb-6 uppercase tracking-widest">
                // Send a message
              </div>

              <div>
                <label className="block font-mono text-xs text-slate-400 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-xl bg-[#030712] border border-[#1a2035] text-slate-200 text-sm font-mono placeholder:text-[#2a3548] focus:outline-none focus:border-[#00d4ff]/40 focus:shadow-[0_0_15px_rgba(0,212,255,0.1)] transition-all"
                />
              </div>

              <div>
                <label className="block font-mono text-xs text-slate-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-[#030712] border border-[#1a2035] text-slate-200 text-sm font-mono placeholder:text-[#2a3548] focus:outline-none focus:border-[#00d4ff]/40 focus:shadow-[0_0_15px_rgba(0,212,255,0.1)] transition-all"
                />
              </div>

              <div>
                <label className="block font-mono text-xs text-slate-400 mb-2">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full px-4 py-3 rounded-xl bg-[#030712] border border-[#1a2035] text-slate-200 text-sm font-mono placeholder:text-[#2a3548] focus:outline-none focus:border-[#00d4ff]/40 focus:shadow-[0_0_15px_rgba(0,212,255,0.1)] transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#00d4ff] text-[#030712] font-semibold font-mono text-sm hover:bg-white transition-all shadow-[0_0_20px_rgba(0,212,255,0.3)] hover:shadow-[0_0_40px_rgba(0,212,255,0.5)]"
              >
                {sent ? (
                  "Message sent! ✓"
                ) : (
                  <>
                    <Send size={14} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
