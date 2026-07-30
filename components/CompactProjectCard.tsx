"use client";
import { useState } from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { Project } from "@/data/projects";

export default function CompactProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const [hasImage, setHasImage] = useState(Boolean(project.image));

  return (
    <motion.a
      href={project.caseStudyUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      whileHover={{ y: -6 }}
      className="group flex flex-col bg-surface border border-white/10 rounded-2xl overflow-hidden hover:border-accent/50 transition-colors"
    >
      <div className="relative aspect-video bg-gradient-to-br from-accent/20 to-surface overflow-hidden">
        {hasImage ? (
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
            onError={() => setHasImage(false)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-3xl font-bold text-accent">
              {project.title.charAt(0)}
            </span>
          </div>
        )}
      </div>

      <div className="p-5 flex flex-col flex-1">
        <p className="text-xs uppercase tracking-widest text-accent mb-2">
          {project.subtitle}
        </p>
        <h3 className="font-bold mb-2 group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <p className="text-xs text-muted leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.stack.map((s) => (
            <span
              key={s}
              className="px-2 py-0.5 bg-white/5 rounded-full text-[10px] border border-white/10"
            >
              {s}
            </span>
          ))}
        </div>

        <span className="inline-flex items-center gap-1.5 text-xs text-muted group-hover:text-accent transition-colors">
          <ExternalLink size={12} /> View live
        </span>
      </div>
    </motion.a>
  );
}
