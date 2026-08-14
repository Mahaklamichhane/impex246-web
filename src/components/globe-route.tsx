"use client";

import { motion, useReducedMotion } from "framer-motion";

/* ============================================================
   Signature: a wireframe globe with an import route landing on
   Kathmandu. Fine meridian/parallel line-work (currentColor),
   a red routing arc that draws itself, and a coordinate crosshair
   on the destination. The brief — genuine goods imported from the
   world, delivered across Nepal — made literal and precise.
   ============================================================ */

// Destination point on the globe (visual position for Kathmandu)
const NP = { x: 268, y: 150 };
const ORIGIN = { x: 96, y: 286 };

export function GlobeRoute({
  className = "",
  wire = "currentColor",
  wireOpacity = 1,
  animate = true,
}: {
  className?: string;
  wire?: string;
  wireOpacity?: number;
  animate?: boolean;
}) {
  const reduce = useReducedMotion();
  const draw = animate && !reduce;

  return (
    <svg
      viewBox="0 0 400 400"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <g stroke={wire} opacity={wireOpacity} strokeWidth={1}>
        <circle cx="200" cy="200" r="176" />
        {/* parallels */}
        <line x1="24" y1="200" x2="376" y2="200" />
        <ellipse cx="200" cy="200" rx="176" ry="60" />
        <ellipse cx="200" cy="200" rx="176" ry="120" />
        <ellipse cx="200" cy="200" rx="176" ry="156" opacity="0.6" />
        {/* meridians */}
        <line x1="200" y1="24" x2="200" y2="376" />
        <ellipse cx="200" cy="200" rx="60" ry="176" />
        <ellipse cx="200" cy="200" rx="120" ry="176" />
        <ellipse cx="200" cy="200" rx="156" ry="176" opacity="0.6" />
      </g>

      {/* Origin node */}
      <circle cx={ORIGIN.x} cy={ORIGIN.y} r="3.5" fill="var(--color-globe-400)" />

      {/* Route arc — draws itself toward Nepal */}
      <motion.path
        d={`M ${ORIGIN.x} ${ORIGIN.y} C 150 210, 210 150, ${NP.x} ${NP.y}`}
        stroke="var(--color-brand)"
        strokeWidth="2"
        strokeLinecap="round"
        initial={draw ? { pathLength: 0 } : false}
        whileInView={draw ? { pathLength: 1 } : undefined}
        viewport={{ once: true }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      />

      {/* Destination crosshair + pulse on Kathmandu */}
      <g>
        <line x1={NP.x - 13} y1={NP.y} x2={NP.x + 13} y2={NP.y} stroke="var(--color-brand)" strokeWidth="1" />
        <line x1={NP.x} y1={NP.y - 13} x2={NP.x} y2={NP.y + 13} stroke="var(--color-brand)" strokeWidth="1" />
        <rect
          x={NP.x - 6}
          y={NP.y - 6}
          width="12"
          height="12"
          stroke="var(--color-brand)"
          strokeWidth="1.5"
          fill="none"
        />
        {draw && (
          <motion.circle
            cx={NP.x}
            cy={NP.y}
            r="6"
            stroke="var(--color-brand)"
            strokeWidth="1.5"
            fill="none"
            initial={{ scale: 1, opacity: 0.9 }}
            animate={{ scale: [1, 2.6], opacity: [0.9, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 1.6 }}
            style={{ transformOrigin: `${NP.x}px ${NP.y}px` }}
          />
        )}
        <circle cx={NP.x} cy={NP.y} r="2.5" fill="var(--color-brand)" />
      </g>
    </svg>
  );
}
