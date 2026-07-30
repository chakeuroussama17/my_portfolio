"use client";
import { motion } from "framer-motion";
import { Eye, Bot, LineChart, Search, CheckCircle2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Engagement = {
  title: string;
  Icon: LucideIcon;
  outcome: string;
  timeline: string;
  includes: string[];
  proof: string;
};

const engagements: Engagement[] = [
  {
    title: "Computer Vision Pilot",
    Icon: Eye,
    outcome:
      "A working detection system on your existing cameras — safety compliance, vehicle tracking, quality or count monitoring.",
    timeline: "3–6 weeks to a working pilot",
    includes: [
      "Custom model trained on your footage",
      "Integration with existing CCTV/RTSP feeds",
      "Alerting into Telegram, email or your tools",
      "Dashboard for the team who'll actually use it",
    ],
    proof: "Shipped at a die-casting plant — RM 90,000 saved across two systems",
  },
  {
    title: "AI Automation & Agents",
    Icon: Bot,
    outcome:
      "Take repetitive work off your team — routing enquiries, extracting data from documents, answering questions from your own files.",
    timeline: "2–4 weeks",
    includes: [
      "Agentic workflows in n8n",
      "RAG assistants grounded in your documents",
      "Email routing and data extraction",
      "Deployment on your site or Telegram",
    ],
    proof: "Live on a manufacturer's public site serving 100+ global customers",
  },
  {
    title: "Internal Tools & Dashboards",
    Icon: LineChart,
    outcome:
      "Replace the spreadsheet or paper process with something your team will actually use, on web or mobile.",
    timeline: "3–8 weeks depending on scope",
    includes: [
      "Web app or mobile app (React Native / Flutter)",
      "Backend, database and REST API",
      "Reporting, exports and role-based access",
      "Handover docs so you're not locked in",
    ],
    proof: "Visitor system in production with 1,000+ records; shift-logging app replacing paper",
  },
  {
    title: "AI Feasibility Audit",
    Icon: Search,
    outcome:
      "Not sure whether AI is the right answer? A short, honest assessment of what's actually worth building — and what isn't.",
    timeline: "3–5 days",
    includes: [
      "Review of your process and data readiness",
      "What's feasible, what isn't, and why",
      "Cost and hardware options — cloud vs on-prem",
      "Written recommendation you can act on",
    ],
    proof: "Grounded in mechanical engineering plus production AI deployment",
  },
];

const process = [
  { step: "01", title: "Short call", body: "20 minutes to understand the problem and whether I'm the right fit. No pitch." },
  { step: "02", title: "Scoped proposal", body: "Fixed scope, timeline and price in writing before any work starts." },
  { step: "03", title: "Build in the open", body: "Regular demos of working software, not status reports." },
  { step: "04", title: "Handover", body: "Documentation, code and a walkthrough so your team can run it without me." },
];

export default function WorkWithMe() {
  return (
    <section id="services" className="max-w-6xl mx-auto px-6 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-4 text-sm uppercase tracking-widest text-muted"
      >
        FOR CLIENTS
      </motion.h2>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-4xl font-bold text-center mb-4"
      >
        WORK <span className="text-gradient">WITH ME</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center text-muted max-w-2xl mx-auto mb-4"
      >
        I build AI systems that run in real operations — not demos. Everything below has
        shipped somewhere and is still running.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex justify-center mb-14"
      >
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs bg-green-400/10 border border-green-400/30 text-green-400">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          Available for selective freelance projects
        </span>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 mb-20">
        {engagements.map((e, i) => {
          const { Icon } = e;
          return (
            <motion.div
              key={e.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
              className="flex flex-col bg-surface border border-white/10 rounded-2xl p-6 hover:border-accent/50 transition-colors"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-accent/15 border border-accent/30 flex items-center justify-center flex-shrink-0">
                    <Icon className="text-accent" size={20} />
                  </div>
                  <h3 className="font-bold leading-tight">{e.title}</h3>
                </div>
                <span className="text-[10px] text-muted whitespace-nowrap pt-1">
                  {e.timeline}
                </span>
              </div>

              <p className="text-sm text-muted leading-relaxed mb-5">{e.outcome}</p>

              <ul className="space-y-2 mb-5 flex-1">
                {e.includes.map((inc) => (
                  <li key={inc} className="flex items-start gap-2.5 text-xs text-muted">
                    <CheckCircle2 className="text-accent flex-shrink-0 mt-0.5" size={13} />
                    {inc}
                  </li>
                ))}
              </ul>

              <p className="text-[11px] text-accent border-t border-white/10 pt-3">
                ✦ {e.proof}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* ---- Process ---- */}
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl font-bold text-center mb-10"
      >
        How a project <span className="text-gradient">runs</span>
      </motion.h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {process.map((p, i) => (
          <motion.div
            key={p.step}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="bg-surface border border-white/10 rounded-2xl p-5"
          >
            <div className="text-2xl font-bold text-accent/40 mb-2">{p.step}</div>
            <h4 className="font-semibold text-sm mb-2">{p.title}</h4>
            <p className="text-xs text-muted leading-relaxed">{p.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
