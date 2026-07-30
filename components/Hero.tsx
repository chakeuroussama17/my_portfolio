"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center px-6 py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-accent font-medium mb-4 text-sm tracking-widest uppercase"
        >
          Welcome to my portfolio
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            Hey, I&apos;m <span className="text-gradient">Oussama</span>
          </h1>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl md:text-3xl text-muted mb-8 max-w-2xl mx-auto"
        >
          Turning factory floors into <span className="text-accent">intelligent systems</span> with computer vision and AI automation.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-muted text-sm md:text-base mb-4 max-w-2xl mx-auto tracking-wide"
        >
          INDUSTRIAL AI &amp; AUTOMATION ENGINEER • COMPUTER VISION • MECHANICAL ENGINEERING BACKGROUND
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex gap-4 justify-center mt-12"
        >
          <a
            href="#work"
            className="bg-accent text-white px-8 py-3 rounded-full font-semibold hover:bg-accent/90 transition"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="border border-white/20 px-8 py-3 rounded-full font-semibold hover:border-white/40 transition"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
