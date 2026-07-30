"use client";
import { motion } from "framer-motion";
import { Wrench, BookOpen, Rocket, Factory } from "lucide-react";

const timeline = [
  {
    year: "2021",
    title: "Mechanical Foundations",
    description:
      "Graduated with a B.Sc. in Electromechanical Engineering in Algeria, taught in French. Went straight onto the floor — operating production equipment at ACGroup and working as a mechanical engineer at Tosyali, a heavy-industry steel manufacturer.",
    icon: Wrench,
  },
  {
    year: "2023",
    title: "Pivot Into Data Science",
    description:
      "Began a B.Sc. in Computer Science with a Data Science specialisation in Malaysia, taught in English. Dean's List every semester since enrolment, while building backend services remotely as an intern at Proceedit Trading.",
    icon: BookOpen,
  },
  {
    year: "2025",
    title: "Research, Startups & Community",
    description:
      "Won the Hult Prize campus round with AgriSenx and reached the national top 8. First author on published research into Poultrix, an edge-AI poultry monitoring pipeline hitting 98% detection accuracy on commodity hardware, and co-founded TechNexus — a student tech club now reaching 150+ students.",
    icon: Rocket,
  },
  {
    year: "2026",
    title: "Industrial AI in Production",
    description:
      "Joined HICOM Diecastings as AI & Digitalization Intern. Deployed PPE detection across 12 live CCTV feeds, built a multi-camera vehicle tracking system for site security, shipped an agentic n8n assistant on the public company site, and digitised company forms for 1,000+ users — an estimated RM 99,000 saved.",
    icon: Factory,
  },
];

export default function Timeline() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-4 text-sm uppercase tracking-widest text-muted"
      >
        THE STORY SO FAR
      </motion.h2>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-4xl font-bold text-center mb-20"
      >
        MY <span className="text-gradient">JOURNEY</span>
      </motion.h1>

      <div className="relative">
        {/* Center vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-accent via-accent to-transparent" />

        <div className="space-y-16">
          {timeline.map((item, index) => {
            const Icon = item.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex ${isEven ? "flex-row" : "flex-row-reverse"} gap-8 items-start`}
              >
                {/* Content */}
                <div className="flex-1">
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-surface border border-white/10 rounded-2xl p-6 hover:border-accent/50 transition"
                  >
                    <p className="text-accent font-bold text-sm uppercase tracking-wider mb-2">
                      {item.year}
                    </p>
                    <div className="flex items-start gap-3 mb-3">
                      <Icon className="text-accent flex-shrink-0 mt-1" size={20} />
                      <h3 className="text-xl font-bold">{item.title}</h3>
                    </div>
                    <p className="text-muted text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                </div>

                {/* Center dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.1 }}
                  className="w-6 h-6 bg-accent rounded-full border-4 border-background flex items-center justify-center flex-shrink-0 z-10"
                >
                  <div className="w-2 h-2 bg-background rounded-full" />
                </motion.div>

                {/* Spacer */}
                <div className="flex-1" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
