"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Users, Trophy, Award, ExternalLink } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Achievement = {
  id: string;
  title: string;
  role: string;
  Icon: LucideIcon;
  image: string;
  description: string;
  points: string[];
  href?: string;
  linkLabel?: string;
};

const achievements: Achievement[] = [
  {
    id: "technexus",
    title: "TechNexus Club",
    role: "Co-Founder",
    Icon: Users,
    image: "/technexus.png",
    description:
      "Co-founded a student-led tech club at Albukhary International University to bridge academic learning and industry-ready skills — running coding bootcamps, workshops and peer-learning sessions.",
    points: [
      "150+ students reached through hands-on sessions",
      "Bootcamps in coding fundamentals, AI and cloud",
      "Built around innovation, inclusion and leadership",
    ],
    href: "https://technexus.club/",
    linkLabel: "Visit technexus.club",
  },
  {
    id: "hult-prize",
    title: "Hult Prize Malaysia",
    role: "National Top 8",
    Icon: Trophy,
    image: "/hultprize.png",
    description:
      "Pitched AgriSenx / Poultrix — the AI and IoT poultry monitoring platform — through the Hult Prize competition, winning the campus round and advancing to the national top 8 at Taylor's University.",
    points: [
      "Campus round winner at AIU",
      "National top 8, Hult Prize Malaysia",
      "Presented the full edge-AI hardware prototype",
    ],
  },
  {
    id: "swiss-innovation",
    title: "Swiss Innovation Challenge",
    role: "National Participant",
    Icon: Award,
    image: "",
    description:
      "Presented the Poultrix poultry monitoring system at the Swiss Innovation Challenge national competition in Malaysia, pitching the edge-AI approach to a panel of industry judges.",
    points: [
      "National-level competition, 2025",
      "Presented the edge-AI monitoring system",
      "Certifications: Google Cloud Professional, IBM Data Fundamentals",
    ],
  },
];

function AchievementCard({ item, index }: { item: Achievement; index: number }) {
  const { title, role, Icon, image, description, points, href, linkLabel } = item;
  const [hasImage, setHasImage] = useState(Boolean(image));

  const Wrapper = href ? motion.a : motion.div;

  return (
    <Wrapper
      {...(href ? { href, target: "_blank", rel: "noopener noreferrer" } : {})}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="group flex flex-col bg-surface border border-white/10 rounded-2xl overflow-hidden hover:border-accent/50 transition-colors"
    >
      <div className="relative aspect-video bg-gradient-to-br from-accent/20 to-surface overflow-hidden">
        {hasImage ? (
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
            onError={() => setHasImage(false)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Icon className="text-accent" size={56} />
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-3">
          <Icon className="text-accent flex-shrink-0" size={16} />
          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-accent/15 text-accent border border-accent/30">
            {role}
          </span>
        </div>

        <h3 className="text-lg font-bold mb-3 group-hover:text-accent transition-colors">
          {title}
        </h3>

        <p className="text-sm text-muted leading-relaxed mb-4">{description}</p>

        <ul className="space-y-2 mb-4 flex-1">
          {points.map((p, i) => (
            <li key={i} className="flex items-start gap-2.5 text-xs text-muted">
              <span className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 flex-shrink-0" />
              {p}
            </li>
          ))}
        </ul>

        {href && (
          <span className="inline-flex items-center gap-1.5 text-xs text-muted group-hover:text-accent transition-colors">
            <ExternalLink size={12} /> {linkLabel}
          </span>
        )}
      </div>
    </Wrapper>
  );
}

export default function Achievements() {
  return (
    <section id="achievements" className="max-w-6xl mx-auto px-6 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-4 text-sm uppercase tracking-widest text-muted"
      >
        BEYOND THE CODE
      </motion.h2>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-4xl font-bold text-center mb-4"
      >
        AWARDS &amp; <span className="text-gradient">LEADERSHIP</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center text-muted max-w-2xl mx-auto mb-12"
      >
        National startup competitions, and a student tech community built from scratch.
      </motion.p>

      <div className="grid md:grid-cols-3 gap-6">
        {achievements.map((item, i) => (
          <AchievementCard key={item.id} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}
