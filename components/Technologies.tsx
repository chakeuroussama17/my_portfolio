"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import type { IconType } from "react-icons";
import {
  SiPython,
  SiTensorflow,
  SiPytorch,
  SiOpencv,
  SiKeras,
  SiScikitlearn,
  SiUltralytics,
  SiN8N,
  SiFastapi,
  SiDjango,
  SiReact,
  SiFlutter,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiGooglecloud,
  SiStreamlit,
  SiPandas,
  SiNumpy,
  SiJupyter,
  SiGit,
  SiPostman,
  SiR,
  SiRaspberrypi,
  SiDocker,
  SiPlotly,
} from "react-icons/si";
import { FaAws, FaRobot, FaBrain, FaDatabase } from "react-icons/fa";

type Tech = { name: string; Icon: IconType; color: string };

// Brand colors are the official ones so each logo reads correctly on dark.
const techs: Tech[] = [
  { name: "Python", Icon: SiPython, color: "#3776AB" },
  { name: "TensorFlow", Icon: SiTensorflow, color: "#FF6F00" },
  { name: "PyTorch", Icon: SiPytorch, color: "#EE4C2C" },
  { name: "YOLOv8", Icon: SiUltralytics, color: "#0B23A9" },
  { name: "OpenCV", Icon: SiOpencv, color: "#5C3EE8" },
  { name: "Keras", Icon: SiKeras, color: "#D00000" },
  { name: "Scikit-learn", Icon: SiScikitlearn, color: "#F7931E" },
  { name: "XGBoost", Icon: FaBrain, color: "#22d3ee" },
  { name: "OpenAI API", Icon: FaRobot, color: "#10A37F" },
  { name: "n8n", Icon: SiN8N, color: "#EA4B71" },
  { name: "RAG / FAISS", Icon: FaDatabase, color: "#8b5cf6" },
  { name: "FastAPI", Icon: SiFastapi, color: "#009688" },
  { name: "Django REST", Icon: SiDjango, color: "#092E20" },
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "React Native", Icon: SiReact, color: "#61DAFB" },
  { name: "Flutter", Icon: SiFlutter, color: "#02569B" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
  { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
  { name: "SQL", Icon: SiMysql, color: "#4479A1" },
  { name: "AWS", Icon: FaAws, color: "#FF9900" },
  { name: "Google Cloud", Icon: SiGooglecloud, color: "#4285F4" },
  { name: "Docker", Icon: SiDocker, color: "#2496ED" },
  { name: "Streamlit", Icon: SiStreamlit, color: "#FF4B4B" },
  { name: "Plotly", Icon: SiPlotly, color: "#3F4F75" },
  { name: "Pandas", Icon: SiPandas, color: "#150458" },
  { name: "NumPy", Icon: SiNumpy, color: "#013243" },
  { name: "Jupyter", Icon: SiJupyter, color: "#F37626" },
  { name: "Git", Icon: SiGit, color: "#F05032" },
  { name: "Postman", Icon: SiPostman, color: "#FF6C37" },
  { name: "R", Icon: SiR, color: "#276DC3" },
  { name: "Raspberry Pi", Icon: SiRaspberrypi, color: "#A22846" },
];

function TechItem({
  tech,
  onEnter,
  onLeave,
}: {
  tech: Tech;
  onEnter: () => void;
  onLeave: () => void;
}) {
  const { name, Icon, color } = tech;
  return (
    <motion.div
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      whileHover={{ scale: 1.3, y: -15 }}
      whileTap={{ scale: 1.2 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="flex flex-col items-center gap-2 flex-shrink-0 cursor-pointer group w-24"
    >
      <Icon
        size={56}
        color={color}
        // Very dark brand colors (Django, NumPy, Pandas) would vanish on the
        // near-black page, so lift them with a subtle glow on hover.
        className="transition-all duration-300 group-hover:drop-shadow-[0_0_12px_currentColor]"
      />
      <p className="text-xs text-muted group-hover:text-accent transition-colors opacity-0 group-hover:opacity-100 whitespace-nowrap">
        {name}
      </p>
    </motion.div>
  );
}

export default function Technologies() {
  const [isPaused, setIsPaused] = useState(false);

  // Tripled so the strip can scroll continuously without a visible seam.
  const extended = [...techs, ...techs, ...techs];

  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-4 text-sm uppercase tracking-widest text-muted"
      >
        MY ARSENAL
      </motion.h2>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-4xl font-bold text-center mb-4"
      >
        TECHNOLOGIES I <span className="text-gradient">MASTER</span>
      </motion.h1>

      <p className="text-center text-muted mb-16 max-w-2xl mx-auto">
        Computer vision, AI automation and the backend stack that ships them to production
      </p>

      {/* Row 1 — scrolls left */}
      <div className="mb-12 overflow-hidden">
        <motion.div
          animate={{ x: isPaused ? 0 : [0, -1400] }}
          transition={{
            duration: 32,
            repeat: isPaused ? 0 : Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
          className="flex gap-12 w-max"
        >
          {extended.map((tech, i) => (
            <TechItem
              key={`row1-${i}`}
              tech={tech}
              onEnter={() => setIsPaused(true)}
              onLeave={() => setIsPaused(false)}
            />
          ))}
        </motion.div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className="overflow-hidden">
        <motion.div
          animate={{ x: isPaused ? 0 : [-1400, 0] }}
          transition={{
            duration: 38,
            repeat: isPaused ? 0 : Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
          className="flex gap-12 w-max"
        >
          {[...extended].reverse().map((tech, i) => (
            <TechItem
              key={`row2-${i}`}
              tech={tech}
              onEnter={() => setIsPaused(true)}
              onLeave={() => setIsPaused(false)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
