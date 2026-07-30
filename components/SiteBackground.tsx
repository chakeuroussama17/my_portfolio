"use client";
import { motion } from "framer-motion";

/**
 * Fixed, full-page background that sits behind all content.
 *
 * Built in code rather than as an image so it stays sharp at any resolution,
 * adds no page weight, and follows the violet/cyan theme automatically.
 *
 * To use a real image instead, drop it at `public/background.jpg` and
 * uncomment the image layer marked below.
 */
export default function SiteBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-background">
      {/* ---- Optional image layer -------------------------------------
          Put your file at:  my-portfolio/public/background.jpg
          then uncomment:

      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: "url('/background.jpg')" }}
      />
      ---------------------------------------------------------------- */}

      {/* Perspective grid, faded out toward the edges */}
      <div
        className="absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #8b5cf6 1px, transparent 1px), linear-gradient(to bottom, #8b5cf6 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 100%)",
        }}
      />

      {/* Slow-drifting aurora glows */}
      <motion.div
        className="absolute -top-40 -left-40 w-[38rem] h-[38rem] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,0.30) 0%, transparent 65%)",
          filter: "blur(60px)",
        }}
        animate={{ x: [0, 90, 0], y: [0, 60, 0], scale: [1, 1.12, 1] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute top-1/3 -right-40 w-[34rem] h-[34rem] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(34,211,238,0.22) 0%, transparent 65%)",
          filter: "blur(60px)",
        }}
        animate={{ x: [0, -70, 0], y: [0, 90, 0], scale: [1, 1.18, 1] }}
        transition={{ duration: 32, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />

      <motion.div
        className="absolute bottom-0 left-1/3 w-[30rem] h-[30rem] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(99,102,241,0.22) 0%, transparent 65%)",
          filter: "blur(60px)",
        }}
        animate={{ x: [0, 60, 0], y: [0, -70, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 29, repeat: Infinity, ease: "easeInOut", delay: 6 }}
      />

      {/* Fine grain to stop the gradients from banding on wide screens */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.15] mix-blend-overlay">
        <filter id="bg-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" />
        </filter>
        <rect width="100%" height="100%" filter="url(#bg-grain)" />
      </svg>

      {/* Vignette to keep text legible at the edges */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(10,10,18,0.85)_100%)]" />
    </div>
  );
}
