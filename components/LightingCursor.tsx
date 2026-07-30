"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const DOT_SIZE = 8;
const GLOW_SIZE = 150;

export default function LightingCursor() {
  const [isVisible, setIsVisible] = useState(false);

  // Raw pointer position. Motion values write directly to the DOM, so moving
  // the mouse never triggers a React re-render (that was the source of the lag).
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Dot sits exactly on the pointer, with no smoothing, so it never trails.
  const dotX = useTransform(cursorX, (v) => v - DOT_SIZE / 2);
  const dotY = useTransform(cursorY, (v) => v - DOT_SIZE / 2);

  // Glow follows with a light spring for a soft trailing feel.
  const glowX = useSpring(
    useTransform(cursorX, (v) => v - GLOW_SIZE / 2),
    { stiffness: 500, damping: 40, mass: 0.4 }
  );
  const glowY = useSpring(
    useTransform(cursorY, (v) => v - GLOW_SIZE / 2),
    { stiffness: 500, damping: 40, mass: 0.4 }
  );

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Lighting glow */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] transition-opacity duration-200"
        style={{
          x: glowX,
          y: glowY,
          width: GLOW_SIZE,
          height: GLOW_SIZE,
          opacity: isVisible ? 1 : 0,
          background:
            "radial-gradient(circle, rgba(139, 92, 246, 0.45) 0%, rgba(34, 211, 238, 0.18) 45%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(20px)",
        }}
      />

      {/* Inner bright dot */}
      <motion.div
        className="fixed top-0 left-0 bg-accent rounded-full pointer-events-none z-[9999] transition-opacity duration-200"
        style={{
          x: dotX,
          y: dotY,
          width: DOT_SIZE,
          height: DOT_SIZE,
          opacity: isVisible ? 1 : 0,
          boxShadow: "0 0 12px rgba(139, 92, 246, 0.95)",
        }}
      />
    </>
  );
}
