"use client";

import { motion } from "framer-motion";
import { useReveal } from "@/lib/useReveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { GraduationCap } from "lucide-react";

const experiences = [
  {
  type: "experience",
  icon: GraduationCap,
  title: "Trainee Intern — Digital Transformation Service Design",
  org: "XPMC, employability.life",
  period: "Nov 2025 — Mar 2026",
  color: "#22c55e",
  points: [
    "Worked on digital transformation and service design initiatives",
    "Applied structured problem-solving frameworks to business challenges",
    "Contributed to user-centric workflow and solution design",
    "Collaborated on research and process-mapping activities",
  ],
},
  {
  type: "education",
  icon: GraduationCap,
  title: "B.Tech — Computer Science Engineering",
  org: "Sister Nivedita University, Kolkata",
  period: "2023 — 2027",
  color: "#00d4ff",
  points: [
    "Final Year Computer Science Engineering student",
    "CGPA: 8.48",
    "Focused on software development, machine learning, and full-stack applications",
  ],
},
  {
    type: "education",
    icon: GraduationCap,
    title: "Class 5 — Class 12",
    org: "Indira Gandhi Memorial High School, Kolkata",
    period: "2015 — 2023",
    color: "#7c3aed",
    points: [
      "Completed secondary and higher secondary education",
      "Built academic foundation across core subjects",
    ],
  },
  {
    type: "education",
    icon: GraduationCap,
    title: "KG — Class 4",
    org: "St. Joseph School Bhakti Nagar, Siliguri",
    period: "2009 — 2014",
    color: "#f97316",
    points: [
      "Primary school education",
      "Early academic and personal development",
    ],
  },
];

export default function Experience() {
  const { ref, inView } = useReveal();

  return (
    <section id="experience" ref={ref} className="relative z-10 py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          tag="04 — Experience"
          title="Where I've been."
          subtitle="Education and journey that shaped who I am today."
          inView={inView}
        />

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#00d4ff]/40 via-[#7c3aed]/40 to-transparent md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, i) => {
              const Icon = exp.icon;
              const isRight = i % 2 !== 0;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.2 + 0.2 }}
                  className={`relative flex items-start gap-8 md:gap-0 pl-16 md:pl-0 ${
                    isRight ? "md:flex-row-reverse" : "md:flex-row"
                  }`}
                >
                  {/* Timeline dot */}
                  <div
                    className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 z-10"
                    style={{
                      borderColor: exp.color,
                      background: "#030712",
                      boxShadow: `0 0 12px ${exp.color}50`,
                    }}
                  >
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ background: exp.color }}
                    />
                  </div>

                  {/* Card */}
                  <div className={`md:w-[calc(50%-3rem)] ${isRight ? "md:mr-12" : "md:ml-12"}`}>
                    <div
                      className="group p-6 rounded-2xl border border-[#1a2035] bg-[#0a0f1e]/60 transition-all duration-300"
                      onMouseEnter={(e) => {
                        const el = e.currentTarget;
                        el.style.borderColor = exp.color + "40";
                        el.style.boxShadow = `0 0 30px ${exp.color}10`;
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget;
                        el.style.borderColor = "";
                        el.style.boxShadow = "";
                      }}
                    >
                      {/* Header */}
                      <div className="flex items-start gap-3 mb-4">
                        <div
                          className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                          style={{
                            background: `${exp.color}15`,
                            border: `1px solid ${exp.color}25`,
                          }}
                        >
                          <Icon size={16} style={{ color: exp.color }} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-display font-semibold text-white text-base leading-snug">
                            {exp.title}
                          </h3>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-slate-400 text-sm">{exp.org}</span>
                            <span className="text-[#4b5563]">·</span>
                            <span
                              className="font-mono text-xs"
                              style={{ color: exp.color }}
                            >
                              {exp.period}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Points */}
                      <ul className="space-y-2">
                        {exp.points.map((point, j) => (
                          <li
                            key={j}
                            className="flex items-start gap-2 text-sm text-slate-400"
                          >
                            <div
                              className="w-1 h-1 rounded-full mt-2 flex-shrink-0"
                              style={{ background: exp.color }}
                            />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Empty side for alternating layout */}
                  <div className="hidden md:block md:w-[calc(50%-3rem)]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}