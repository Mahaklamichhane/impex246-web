"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

/* Rotating greeting bubble that gives the robot a role: the 246 Impex
   shopping guide. Messages are on-brand and factual. */
const MESSAGES = [
  "Namaste! I'm your 246 guide 👋",
  "Ask me about easy EMI plans.",
  "Every device is 100% genuine.",
  "Official 1-year warranty, always.",
  "Let's find your next device →",
];

export function GuideBubble({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setI((n) => (n + 1) % MESSAGES.length), 3200);
    return () => clearInterval(t);
  }, [reduce]);

  return (
    <div className={`pointer-events-none ${className}`}>
      <div className="relative max-w-[220px] rounded-2xl rounded-tl-sm bg-cloud px-4 py-2.5 text-[13px] font-medium leading-snug text-ink shadow-lg">
        {reduce ? (
          MESSAGES[0]
        ) : (
          <AnimatePresence mode="wait">
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              {MESSAGES[i]}
            </motion.span>
          </AnimatePresence>
        )}
        {/* little tail */}
        <span className="absolute -top-1 left-3 h-3 w-3 rotate-45 rounded-[3px] bg-cloud" />
      </div>
    </div>
  );
}
