"use client";

import { motion } from "framer-motion";
import { useReveal } from "@/lib/useReveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { ArrowRight, Clock, Tag } from "lucide-react";

const posts = [
  {
    title: "Building an On-Chain Credit Score: A DeFi Engineering Deep Dive",
    excerpt:
      "How I designed a gas-efficient smart contract system that analyzes 6+ wallet metrics to generate trustless credit scores for undercollateralized lending.",
    tag: "Web3",
    tagColor: "#f97316",
    readTime: "8 min read",
    date: "Oct 2024",
    slug: "on-chain-credit-score",
  },
  {
    title: "K-Means vs DBSCAN: Choosing the Right Clustering Algorithm for User Personas",
    excerpt:
      "A practical comparison of clustering algorithms for behavioral data segmentation — including when DBSCAN beats K-Means and when it doesn't.",
    tag: "Machine Learning",
    tagColor: "#7c3aed",
    readTime: "6 min read",
    date: "Sep 2024",
    slug: "clustering-algorithms-comparison",
  },
  {
    title: "Graph-Based Debt Simplification: The Algorithm Behind SplitX",
    excerpt:
      "Bellman-Ford meets expense splitting — how I reduced settlement transactions by 60% using a directed graph debt minimization approach.",
    tag: "Algorithms",
    tagColor: "#00d4ff",
    readTime: "5 min read",
    date: "Aug 2024",
    slug: "debt-simplification-algorithm",
  },
];

export default function Blog() {
  const { ref, inView } = useReveal();

  return (
    <section id="blog" ref={ref} className="relative z-10 py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          tag="05 — Writing"
          title="Thoughts & learnings."
          subtitle="Technical articles on the problems I've solved and lessons learned along the way."
          inView={inView}
        />

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 + 0.2 }}
              className="group flex flex-col rounded-2xl border border-[#1a2035] bg-[#0a0f1e]/60 p-6 cursor-pointer transition-all duration-300"
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = post.tagColor + "40";
                el.style.transform = "translateY(-4px)";
                el.style.boxShadow = `0 20px 60px rgba(0,0,0,0.4), 0 0 30px ${post.tagColor}10`;
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = "";
                el.style.transform = "";
                el.style.boxShadow = "";
              }}
            >
              {/* Top meta */}
              <div className="flex items-center justify-between mb-4">
                <span
                  className="flex items-center gap-1.5 font-mono text-xs px-2 py-1 rounded-md"
                  style={{
                    color: post.tagColor,
                    background: `${post.tagColor}15`,
                  }}
                >
                  <Tag size={10} />
                  {post.tag}
                </span>
                <span className="font-mono text-xs text-[#4b5563]">{post.date}</span>
              </div>

              {/* Title */}
              <h3 className="font-display font-semibold text-white text-base leading-snug mb-3 group-hover:text-white transition-colors flex-1">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3">
                {post.excerpt}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#1a2035]">
                <span className="flex items-center gap-1.5 font-mono text-xs text-[#4b5563]">
                  <Clock size={11} />
                  {post.readTime}
                </span>
                <span
                  className="flex items-center gap-1 font-mono text-xs transition-all group-hover:gap-2"
                  style={{ color: post.tagColor }}
                >
                  Read more
                  <ArrowRight size={11} />
                </span>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-10"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 font-mono text-sm text-slate-400 hover:text-[#00d4ff] transition-colors border border-[#1a2035] px-5 py-2.5 rounded-xl hover:border-[#00d4ff]/30"
          >
            View all articles
            <ArrowRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
