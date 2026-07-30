"use client";
import { useMemo } from "react";
import { motion } from "framer-motion";

const SIZE = 600;
const CENTER = SIZE / 2;
const RADIUS = 250;
const NODE_COUNT = 130;
const LINK_DISTANCE = 0.36;

/**
 * Rounds to a fixed precision.
 *
 * `Math.sin`, `Math.cos` and `Math.sqrt` are implementation-defined in the
 * ECMAScript spec — Node and the browser are allowed to disagree in the last
 * bit or two. Rendering those raw values produced markup like
 * `opacity="0.25645358574410687"` on the server vs `0.2564535857441068` on the
 * client, which React reports as a hydration mismatch. Rounding every value
 * derived from trig collapses that difference. Everything downstream uses only
 * `+`/`*`, which IEEE-754 specifies exactly, so it stays identical.
 */
const round = (n: number, precision = 3) => {
  const factor = 10 ** precision;
  return Math.round(n * factor) / factor;
};

/**
 * A wireframe "network earth": points distributed evenly on a sphere via the
 * Fibonacci lattice, projected to 2D, with nearby points wired together.
 *
 * All geometry is deterministic (no Math.random) so server and client render
 * identical markup.
 */
export default function NetworkGlobe() {
  const { nodes, links, latitudes, longitudes } = useMemo(() => {
    const goldenAngle = Math.PI * (3 - Math.sqrt(5));

    const nodes = Array.from({ length: NODE_COUNT }, (_, i) => {
      const y = round(1 - (i / (NODE_COUNT - 1)) * 2, 6);
      const ringRadius = round(Math.sqrt(Math.max(0, 1 - y * y)), 6);
      const theta = goldenAngle * i;
      const x = round(Math.cos(theta) * ringRadius, 6);
      const z = round(Math.sin(theta) * ringRadius, 6);

      return {
        x,
        y,
        z,
        px: round(CENTER + x * RADIUS),
        py: round(CENTER + y * RADIUS),
        // Points on the far side of the sphere sit dimmer and smaller.
        depth: round((z + 1) / 2),
      };
    });

    const links: { x1: number; y1: number; x2: number; y2: number; depth: number }[] = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dz = nodes[i].z - nodes[j].z;
        if (round(Math.sqrt(dx * dx + dy * dy + dz * dz), 6) < LINK_DISTANCE) {
          links.push({
            x1: nodes[i].px,
            y1: nodes[i].py,
            x2: nodes[j].px,
            y2: nodes[j].py,
            depth: round((nodes[i].depth + nodes[j].depth) / 2),
          });
        }
      }
    }

    // Horizontal rings (latitude), squashed for a tilted-globe perspective.
    const latitudes = Array.from({ length: 7 }, (_, k) => {
      const phi = ((k + 1) * Math.PI) / 8;
      const r = round(RADIUS * Math.sin(phi));
      return { cy: round(CENTER - RADIUS * Math.cos(phi)), rx: r, ry: round(r * 0.26) };
    });

    // Vertical meridians (longitude).
    const longitudes = Array.from({ length: 8 }, (_, k) => {
      const angle = (k * Math.PI) / 8;
      return { rx: round(Math.abs(RADIUS * Math.cos(angle))), ry: RADIUS };
    });

    return { nodes, links, latitudes, longitudes };
  }, []);

  return (
    <svg
      viewBox={`0 0 ${SIZE} ${SIZE}`}
      className="w-full h-full"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="globe-haze" cx="50%" cy="50%" r="50%">
          <stop offset="60%" stopColor="#8b5cf6" stopOpacity="0" />
          <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.2" />
        </radialGradient>
        <filter id="node-glow" x="-300%" y="-300%" width="700%" height="700%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Soft atmospheric rim */}
      <circle cx={CENTER} cy={CENTER} r={RADIUS} fill="url(#globe-haze)" />

      {/* Static wireframe shell */}
      <g stroke="#22d3ee" fill="none" opacity="0.14">
        {latitudes.map((lat, i) => (
          <ellipse
            key={`lat-${i}`}
            cx={CENTER}
            cy={lat.cy}
            rx={lat.rx}
            ry={lat.ry}
            strokeWidth="0.7"
          />
        ))}
        {longitudes.map((lon, i) => (
          <ellipse
            key={`lon-${i}`}
            cx={CENTER}
            cy={CENTER}
            rx={lon.rx}
            ry={lon.ry}
            strokeWidth="0.7"
          />
        ))}
      </g>

      {/* Rotating network mesh */}
      <motion.g
        animate={{ rotate: 360 }}
        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
        style={{ originX: "300px", originY: "300px" }}
      >
        <g stroke="#7c6cf0">
          {links.map((link, i) => (
            <line
              key={`link-${i}`}
              x1={link.x1}
              y1={link.y1}
              x2={link.x2}
              y2={link.y2}
              strokeWidth="0.5"
              opacity={round(0.08 + link.depth * 0.22)}
            />
          ))}
        </g>

        <g filter="url(#node-glow)">
          {nodes.map((node, i) => (
            <motion.circle
              key={`node-${i}`}
              cx={node.px}
              cy={node.py}
              r={round(0.9 + node.depth * 1.6)}
              fill={i % 5 === 0 ? "#67e8f9" : "#8b5cf6"}
              animate={{ opacity: [0.35, 1, 0.35] }}
              transition={{
                duration: 3 + (i % 5),
                repeat: Infinity,
                ease: "easeInOut",
                // Deterministic stagger keeps SSR and client markup identical.
                delay: (i % 12) * 0.25,
              }}
            />
          ))}
        </g>
      </motion.g>
    </svg>
  );
}
