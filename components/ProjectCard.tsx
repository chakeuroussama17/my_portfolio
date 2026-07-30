"use client";
import { useState } from "react";
import Image from "next/image";
import { ExternalLink, Lock } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { Project } from "@/data/projects";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  // Falls back to the numbered placeholder if the screenshot is missing,
  // so a project without a captured image never renders a broken tile.
  const [hasImage, setHasImage] = useState(Boolean(project.image));

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="grid md:grid-cols-2 gap-12 items-center py-16 border-b border-white/10 last:border-b-0"
    >
      <div
        className={`relative rounded-2xl overflow-hidden border border-white/10 aspect-video bg-gradient-to-br from-accent/20 to-surface ${
          index % 2 === 1 ? "md:order-2" : ""
        }`}
      >
        {hasImage ? (
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-top"
            onError={() => setHasImage(false)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-center p-8">
            <div>
              <div className="text-6xl font-bold text-accent mb-4">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="text-sm text-muted">{project.title}</div>
            </div>
          </div>
        )}
      </div>

      <div className={index % 2 === 1 ? "md:order-1" : ""}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex items-center gap-3 mb-3 flex-wrap"
        >
          <span className="text-accent text-sm font-bold uppercase tracking-wider">
            {project.index}
          </span>
          {project.tag && (
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-accent/15 text-accent border border-accent/30">
              {project.tag}
            </span>
          )}
        </motion.div>

        <h3 className="text-3xl md:text-4xl font-bold mb-2">{project.title}</h3>
        <p className="text-muted text-lg mb-6">{project.subtitle}</p>

        <p className="text-muted leading-relaxed mb-6">{project.description}</p>

        <div className="mb-6">
          <h4 className="text-xs uppercase tracking-widest text-muted mb-3">Key Features</h4>
          <ul className="space-y-2">
            {project.features.map((f, i) => (
              <li key={i} className="flex items-center gap-3 text-sm text-muted">
                <span className="w-2 h-2 bg-accent rounded-full" />
                {f}
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <h4 className="text-xs uppercase tracking-widest text-muted mb-3">Tech Stack</h4>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <span key={s} className="px-3 py-1 bg-white/10 rounded-full text-xs border border-white/20 hover:border-accent/50 transition">
                {s}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              className="flex items-center gap-2 bg-accent text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-accent/90 transition"
            >
              <FaGithub size={14} /> Source Code
            </a>
          )}
          {project.caseStudyUrl && (
            <a
              href={project.caseStudyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-white/20 px-5 py-2 rounded-full text-sm font-medium hover:border-accent transition"
            >
              <ExternalLink size={14} /> View Live
            </a>
          )}
          {!project.caseStudyUrl && !project.githubUrl && (
            <span className="flex items-center gap-2 border border-white/10 text-muted px-5 py-2 rounded-full text-sm">
              <Lock size={14} /> Internal system — not publicly accessible
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
