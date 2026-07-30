"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, Bot, Code2, BarChart3 } from "lucide-react";

const services = [
  {
    id: "vision",
    title: "Computer Vision & Industrial AI",
    shortTitle: "Computer Vision",
    subtitle: "Safety & Monitoring Systems",
    icon: Eye,
    description:
      "Custom vision models trained and deployed against live industrial camera feeds — PPE compliance, defect and anomaly detection — including the edge hardware and retraining loop that keeps them accurate on the floor.",
    technologies: [
      "YOLOv8",
      "TensorFlow",
      "PyTorch",
      "OpenCV",
      "TensorFlow Lite",
      "CNNs",
    ],
    highlights: [
      "PPE detection across 12 live CCTV feeds",
      "Custom model training & continuous retraining",
      "Edge deployment on Raspberry Pi / ESP32-CAM",
      "RM 50,000 in estimated savings delivered",
    ],
  },
  {
    id: "agents",
    title: "AI Agents & Automation",
    shortTitle: "AI Automation",
    subtitle: "Agentic Workflows & RAG",
    icon: Bot,
    description:
      "Agentic workflows and retrieval-augmented assistants that take real work off people's desks — routing email, extracting submitted data, and answering questions grounded in your own documents.",
    technologies: [
      "n8n",
      "OpenAI API",
      "RAG",
      "FAISS",
      "LangChain",
      "Prompt Engineering",
    ],
    highlights: [
      "Agentic email routing & data extraction",
      "RAG chatbots grounded in company docs",
      "Multi-channel bots with human handoff",
      "Live database lookups inside conversations",
    ],
  },
  {
    id: "backend",
    title: "Backend & Data Engineering",
    shortTitle: "Backend Engineering",
    subtitle: "APIs & Data Pipelines",
    icon: Code2,
    description:
      "Production backends and data pipelines that hold the AI up — REST APIs, document processing, rule engines, and the database design underneath them.",
    technologies: [
      "Python",
      "FastAPI",
      "Django REST",
      "PostgreSQL",
      "MongoDB",
      "SQL",
    ],
    highlights: [
      "REST API design & integration",
      "OCR and document processing pipelines",
      "Rule engines for AP / 3-way matching",
      "Enterprise e-form systems at 1,000+ users",
    ],
  },
  {
    id: "analytics",
    title: "Analytics & Forecasting",
    shortTitle: "Analytics & Dashboards",
    subtitle: "Decision-Support Dashboards",
    icon: BarChart3,
    description:
      "Forecasting models and stakeholder-facing dashboards that turn raw operational data into something a decision-maker can actually act on.",
    technologies: [
      "Prophet",
      "Streamlit",
      "Plotly",
      "Pandas",
      "Scikit-learn",
      "XGBoost",
    ],
    highlights: [
      "30/60/90-day revenue forecasting",
      "Multi-scenario business modelling",
      "Real-time safety compliance dashboards",
      "AI-generated narrative summaries",
    ],
  },
];

export default function Services() {
  const [active, setActive] = useState(services[0].id);
  // Fall back to the first service so a stale id can never crash the render.
  const activeService = services.find((s) => s.id === active) ?? services[0];

  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-4 text-sm uppercase tracking-widest text-muted"
      >
        SERVICES
      </motion.h2>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-4xl font-bold mb-16 text-center"
      >
        Services & <span className="text-gradient">Expertise</span>
      </motion.h1>

      <div className="grid md:grid-cols-4 gap-4">
        {/* Left sidebar tabs */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:col-span-1 space-y-3"
        >
          {services.map((service) => {
            const Icon = service.icon;
            const isActive = active === service.id;
            return (
              <motion.button
                key={service.id}
                onClick={() => setActive(service.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full text-left bg-surface border rounded-2xl p-4 transition-all duration-300 group ${
                  isActive
                    ? "border-accent bg-accent/10"
                    : "border-white/10 hover:border-white/20"
                }`}
              >
                <div className="flex items-start gap-3">
                  <Icon
                    className={`flex-shrink-0 transition-colors ${
                      isActive ? "text-accent" : "text-muted group-hover:text-white"
                    }`}
                    size={24}
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-sm leading-tight truncate">
                      {service.shortTitle}
                    </h3>
                    <p className="text-xs text-muted mt-1 line-clamp-2">
                      {service.subtitle}
                    </p>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Right content area */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="md:col-span-3"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-surface border border-white/10 rounded-3xl p-8 min-h-96"
            >
              <div className="flex items-start gap-4 mb-6">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="w-16 h-16 bg-accent/20 border-2 border-accent rounded-xl flex items-center justify-center flex-shrink-0"
                >
                  {activeService.icon && (
                    <activeService.icon className="text-accent" size={32} />
                  )}
                </motion.div>

                <div>
                  <h3 className="text-2xl font-bold mb-1">{activeService.title}</h3>
                  <p className="text-accent text-sm font-semibold uppercase tracking-wide">
                    {activeService.subtitle}
                  </p>
                </div>
              </div>

              <p className="text-muted leading-relaxed mb-8">{activeService.description}</p>

              <div className="mb-8">
                <h4 className="text-xs uppercase tracking-widest text-muted mb-3 font-semibold">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeService.technologies.map((tech) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className="px-3 py-1.5 bg-white/10 rounded-full text-xs border border-white/20 hover:border-accent/50 transition whitespace-nowrap"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-xs uppercase tracking-widest text-muted mb-3 font-semibold">
                  Key Highlights
                </h4>
                <ul className="space-y-2">
                  {activeService.highlights.map((highlight, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                      className="flex items-center gap-3 text-sm text-muted"
                    >
                      <span className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                      {highlight}
                    </motion.li>
                  ))}
                </ul>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-accent text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-accent/90 transition"
              >
                Get in Touch →
              </motion.button>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
