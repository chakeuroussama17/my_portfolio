"use client";
import { motion } from "framer-motion";
import { FileText, Download, GraduationCap, Microscope } from "lucide-react";

const results = [
  { value: "98.27%", label: "Fecal classification", detail: "mAP@0.5 · 0.982" },
  { value: "98%", label: "Mortality detection", detail: "mAP@0.5 · 0.981" },
  { value: "94%", label: "Health classification", detail: "mAP@0.5 · 0.940" },
  { value: "4.2s", label: "Avg alert delivery", detail: "100% delivery rate" },
];

const education = [
  {
    degree: "B.Sc. Computer Science — Data Science Specialisation",
    institution: "Albukhary International University, Malaysia",
    period: "Oct 2023 – Expected Nov 2026",
    highlight: "Dean's List every semester since enrolment",
    language: "Taught in English",
  },
  {
    degree: "B.Sc. Electromechanical Engineering",
    institution: "Algeria",
    period: "Graduated 2021",
    highlight: "Foundation for industrial and manufacturing domain work",
    language: "Taught in French",
  },
];

const interests = [
  {
    title: "Edge AI & TinyML",
    body: "Running production-grade vision models on commodity hardware — Raspberry Pi, ESP32-CAM — instead of dedicated GPUs, so cost stops being the barrier to adoption.",
  },
  {
    title: "Industrial Computer Vision",
    body: "Workplace safety, compliance monitoring and anomaly detection on live CCTV in real manufacturing environments, including the retraining loops that keep models accurate.",
  },
  {
    title: "Multi-Camera Tracking",
    body: "Re-identifying and handing off objects between cameras across a site, with temporal validation layers to suppress false positives.",
  },
  {
    title: "Applied AI for Emerging Economies",
    body: "Deployable systems for users priced out of commercial platforms — smallholder agriculture, low-connectivity and offline-first environments.",
  },
];

export default function Research() {
  return (
    <section id="research" className="max-w-5xl mx-auto px-6 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-4 text-sm uppercase tracking-widest text-muted"
      >
        ACADEMIC
      </motion.h2>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-4xl font-bold text-center mb-12"
      >
        RESEARCH &amp; <span className="text-gradient">EDUCATION</span>
      </motion.h1>

      {/* ---- Publication ---- */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-surface border border-white/10 rounded-3xl p-8 mb-8"
      >
        <div className="flex items-center gap-3 mb-5 flex-wrap">
          <FileText className="text-accent" size={20} />
          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-accent/15 text-accent border border-accent/30">
            First Author
          </span>
          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-white/5 text-muted border border-white/10">
            Peer-Reviewed Publication
          </span>
        </div>

        <h3 className="text-2xl font-bold mb-4 leading-snug">
          Edge AI–Driven Poultry Health Monitoring Using Computer Vision in
          Resource-Constrained IoT Environments
        </h3>

        <p className="text-sm text-muted mb-1">
          <span className="text-white font-semibold">M. O. Chakeur</span>, T. M. Diallo,
          M. Yahya, and M. Z. M. Zaki
        </p>
        <p className="text-sm text-muted mb-6">
          School of Computing and Informatics, Albukhary International University,
          Alor Setar, Malaysia
        </p>

        <p className="text-sm text-muted leading-relaxed mb-6">
          Smallholder poultry farmers in developing economies are disproportionately
          affected by flock disease, yet existing monitoring systems remain financially
          inaccessible — they depend on proprietary sensors, dedicated GPUs and costly
          commercial platforms. This work presents a four-stage cascading YOLOv8 pipeline
          that detects intruders, classifies fecal health, identifies behavioural
          abnormalities and confirms mortality from live CCTV, running on commodity
          hardware. A temporal validation layer suppresses false-positive mortality
          alerts while maintaining a 96.7% true-positive rate.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          {results.map((r) => (
            <div
              key={r.label}
              className="bg-white/5 border border-white/10 rounded-xl p-4 text-center"
            >
              <div className="text-xl font-bold text-accent mb-1">{r.value}</div>
              <div className="text-[11px] text-white mb-0.5">{r.label}</div>
              <div className="text-[10px] text-muted">{r.detail}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {[
            "YOLOv8",
            "TensorFlow Lite",
            "MobileNet",
            "OpenCV",
            "Raspberry Pi 4",
            "ESP32-CAM",
            "AWS",
            "MQTT",
          ].map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 bg-white/5 rounded-full text-[11px] border border-white/10"
            >
              {t}
            </span>
          ))}
        </div>

        <a
          href="/research/poultrix-edge-ai.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-accent text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-accent/90 transition"
        >
          <Download size={15} /> Read the paper (PDF)
        </a>
      </motion.div>

      {/* ---- Education ---- */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {education.map((e, i) => (
          <motion.div
            key={e.degree}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-surface border border-white/10 rounded-2xl p-6"
          >
            <div className="flex items-start gap-3 mb-3">
              <GraduationCap className="text-accent flex-shrink-0 mt-0.5" size={20} />
              <div>
                <h3 className="font-bold text-sm leading-snug mb-1">{e.degree}</h3>
                <p className="text-xs text-muted">{e.institution}</p>
              </div>
            </div>
            <p className="text-xs text-accent font-medium mb-2">{e.period}</p>
            <p className="text-xs text-muted mb-1">✦ {e.highlight}</p>
            <p className="text-[11px] text-muted opacity-70">{e.language}</p>
          </motion.div>
        ))}
      </div>

      {/* ---- Research interests ---- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-surface border border-white/10 rounded-3xl p-8"
      >
        <div className="flex items-center gap-3 mb-6">
          <Microscope className="text-accent" size={20} />
          <h3 className="text-lg font-bold">Research Interests</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {interests.map((it) => (
            <div key={it.title}>
              <h4 className="text-sm font-semibold text-accent mb-1.5">{it.title}</h4>
              <p className="text-xs text-muted leading-relaxed">{it.body}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
