"use client";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useMemo } from "react";

export default function GitHubActivity() {
  const contributions = useMemo(() => {
    const weeks = 52;
    const days = 7;
    const data = [];
    for (let w = 0; w < weeks; w++) {
      for (let d = 0; d < days; d++) {
        // Use a seed-based pseudo-random for consistency
        data.push((w * 7 + d + (w % 3)) % 5);
      }
    }
    return data;
  }, []);
  const levels = ["bg-white/10", "bg-accent/30", "bg-accent/60", "bg-accent/80", "bg-accent"];

  return (
    <section className="max-w-4xl mx-auto px-6 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-2"
      >
        GITHUB <span className="text-gradient">ACTIVITY</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-muted mb-8"
      >
        Consistent contributions and continuous learning
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-surface border border-white/10 rounded-3xl p-8"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 bg-gradient-to-br from-accent to-surface rounded-full flex items-center justify-center">
            <span className="text-xs font-bold">O</span>
          </div>
          <div>
            <h3 className="font-bold">Chakeur Oussama</h3>
            <p className="text-xs text-muted">@chakeuroussama</p>
          </div>
        </div>

        <div className="bg-black/30 rounded-2xl p-6 overflow-auto mb-6">
          <div className="flex gap-1 pb-4" style={{ minWidth: "100%" }}>
            {Array.from({ length: 52 }).map((_, week) => (
              <div key={week} className="flex flex-col gap-1">
                {Array.from({ length: 7 }).map((_, day) => {
                  const index = week * 7 + day;
                  const level = contributions[index];
                  return (
                    <motion.div
                      key={`${week}-${day}`}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: (index * 0.01) % 0.5 }}
                      className={`w-3 h-3 rounded-sm ${levels[level]} hover:ring-1 hover:ring-accent cursor-pointer transition`}
                      title={`${level} contributions`}
                    />
                  );
                })}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2 text-xs text-muted mt-4">
            <span>Less</span>
            {levels.map((level, i) => (
              <div key={i} className={`w-3 h-3 rounded-sm ${level}`} />
            ))}
            <span>More</span>
          </div>
        </div>

        <a
          href="https://github.com"
          target="_blank"
          className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full text-sm transition"
        >
          Visit GitHub Profile <ExternalLink size={14} />
        </a>
      </motion.div>
    </section>
  );
}
