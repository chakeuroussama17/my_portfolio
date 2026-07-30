"use client";
import { motion } from "framer-motion";

const roles = [
  "INDUSTRIAL AI ENGINEER",
  "COMPUTER VISION",
  "AUTOMATION ENGINEER",
  "MECHANICAL ENGINEER",
  "AI AGENT BUILDER",
  "DATA SCIENTIST",
  "EDGE AI RESEARCHER",
];

export default function ScrollingBanner() {
  return (
    <div className="relative w-full py-32 overflow-hidden bg-gradient-to-b from-transparent via-accent/5 to-transparent">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent rounded-full blur-3xl opacity-20" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent rounded-full blur-3xl opacity-10" />
      </div>

      <div className="relative z-10 space-y-4">
        {/* First ribbon - scrolling right */}
        <motion.div
          animate={{ x: ["0%", "-100%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="whitespace-nowrap"
        >
          <div className="inline-flex gap-8">
            {[...roles, ...roles].map((role, i) => (
              <div
                key={i}
                className="bg-gradient-to-r from-accent to-secondary text-white px-8 py-3 rounded-lg font-bold text-2xl md:text-3xl whitespace-nowrap transform -skew-x-12 shadow-lg"
              >
                {role}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Second ribbon - scrolling left */}
        <motion.div
          animate={{ x: ["-100%", "0%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="whitespace-nowrap"
        >
          <div className="inline-flex gap-8">
            {[...roles, ...roles].map((role, i) => (
              <div
                key={i}
                className="bg-gradient-to-r from-secondary to-accent text-white px-8 py-3 rounded-lg font-bold text-2xl md:text-3xl whitespace-nowrap transform skew-x-12 shadow-lg"
              >
                {role}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Third ribbon - scrolling right */}
        <motion.div
          animate={{ x: ["0%", "-100%"] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          className="whitespace-nowrap"
        >
          <div className="inline-flex gap-8">
            {[...roles, ...roles].map((role, i) => (
              <div
                key={i}
                className="bg-gradient-to-r from-indigo-500 to-secondary text-white px-8 py-3 rounded-lg font-bold text-2xl md:text-3xl whitespace-nowrap transform -skew-x-12 shadow-lg"
              >
                {role}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Fade overlays on sides */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-20" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-20" />
    </div>
  );
}
