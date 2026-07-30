"use client";
import { motion } from "framer-motion";
import NetworkGlobe from "./NetworkGlobe";

interface FinalCTAProps {
  onGetInTouch: () => void;
}

export default function FinalCTA({ onGetInTouch }: FinalCTAProps) {
  return (
    <section className="max-w-6xl mx-auto px-6 py-32 text-center relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[min(680px,115vw)] aspect-square">
          <NetworkGlobe />
        </div>
      </div>

      <div className="relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
        >
          LET&apos;S BUILD SOMETHING <span className="text-gradient">EXTRAORDINARY</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-xl text-muted max-w-2xl mx-auto mb-8"
        >
          Whether you&apos;re launching a startup or scaling an enterprise, I&apos;m here to turn your vision into reality
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <motion.button
            onClick={onGetInTouch}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-accent text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-accent/90 transition"
          >
            Get In Touch →
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-muted space-y-2"
        >
          <p className="font-semibold">Available for full-time roles and selective freelance projects.</p>
          <p>
            I focus on shipping clean, scalable web solutions that support real users and growing products.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
