"use client";
import { featuredProjects, otherProjects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import CompactProjectCard from "./CompactProjectCard";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="work" className="max-w-6xl mx-auto px-6 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-4 text-sm uppercase tracking-widest text-muted"
      >
        PORTFOLIO
      </motion.h2>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-4xl font-bold text-center mb-4"
      >
        FEATURED <span className="text-gradient">PROJECTS</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center text-muted max-w-2xl mx-auto mb-12"
      >
        Computer vision systems running on a live factory floor, mobile apps in production,
        and agentic assistants deployed on public company sites.
      </motion.p>

      <div>
        {featuredProjects.map((p, idx) => (
          <ProjectCard key={p.id} project={p} index={idx} />
        ))}
      </div>

      {/* Secondary: applied AI tooling */}
      <div className="mt-24">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-4"
        >
          AI <span className="text-gradient">PROJECTS</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-muted max-w-2xl mx-auto mb-12"
        >
          Document intelligence, forecasting and RAG chatbot builds — each deployed and live.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((p, idx) => (
            <CompactProjectCard key={p.id} project={p} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
