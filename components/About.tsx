"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, ExternalLink } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function About() {
  const stats = [
    { number: "RM 99K", label: "Cost Savings Delivered" },
    { number: "1,000+", label: "Enterprise Users Served" },
    { number: "2", label: "Engineering Degrees" },
  ];

  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-16 text-center"
      >
        GET TO KNOW ME
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:col-span-1 flex flex-col items-center"
        >
          <div className="relative w-48 h-48 mb-6 rounded-3xl overflow-hidden border-2 border-accent">
            <Image
              src="/mine.png"
              alt="Chakeur Oussama"
              fill
              sizes="192px"
              priority
              className="object-cover"
            />
          </div>

          <h3 className="text-2xl font-bold text-center mb-2">Chakeur Oussama</h3>
          <p className="text-muted text-center mb-1">Industrial AI &amp; Automation Engineer</p>
          <p className="text-muted text-center text-sm mb-6">Selangor, Malaysia</p>

          <div className="flex gap-3 justify-center">
            <a
              href="mailto:chakeuroussama@gmail.com"
              className="p-3 bg-surface rounded-lg hover:bg-white/10 transition"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <a
              href="https://linkedin.com/in/chakeur-oussama"
              target="_blank"
              className="p-3 bg-surface rounded-lg hover:bg-white/10 transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href="https://github.com/chakeuroussama"
              target="_blank"
              className="p-3 bg-surface rounded-lg hover:bg-white/10 transition"
              aria-label="GitHub"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://agrisenx-website.vercel.app/"
              target="_blank"
              className="p-3 bg-surface rounded-lg hover:bg-white/10 transition"
              aria-label="AgriSenx"
            >
              <ExternalLink size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="md:col-span-2"
        >
          <div className="grid grid-cols-3 gap-4 mb-8">
            {stats.map((stat, i) => (
              <div key={i} className="bg-surface p-6 rounded-2xl border border-white/10 text-center">
                <div className="text-2xl md:text-3xl font-bold text-accent mb-2">{stat.number}</div>
                <div className="text-xs md:text-sm text-muted">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="bg-surface rounded-3xl p-8 border border-white/10">
            <h3 className="text-xl font-bold mb-4">About Me</h3>
            <p className="text-muted leading-relaxed mb-4">
              I&apos;m an AI and automation engineer with a dual foundation in mechanical
              engineering and data science — a combination that lets me walk a manufacturing
              floor, understand the process, and then build the AI system that improves it.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              At HICOM Diecastings I designed and deployed a custom computer vision model for
              PPE compliance across 12 live CCTV feeds, a site-wide vehicle tracking system that
              follows any car across every camera on the plant, and led the digitisation of paper
              forms into an e-form system now serving over 1,000 users across 4 departments —
              together saving an estimated RM 99,000.
            </p>
            <p className="text-muted leading-relaxed">
              I&apos;m currently completing a B.Sc. in Computer Science (Data Science) in Malaysia,
              on the Dean&apos;s List every semester, alongside my earlier B.Sc. in Electromechanical
              Engineering. I co-founded TechNexus, a student tech club reaching 150+ students, and
              I&apos;m building AgriSenx, a Hult Prize campus-winning agriculture platform.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
