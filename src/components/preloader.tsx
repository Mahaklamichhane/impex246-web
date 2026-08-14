"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { GlobeMotif } from "./brand";

/* Short, purposeful intro (~1.1s) — logo + globe draw, then a
   panel wipe reveals the page. Skipped entirely for reduced motion. */
export default function Preloader() {
  const reduce = useReducedMotion();
  const [done, setDone] = useState(false);

  useEffect(() => {
    const staticMode =
      typeof window !== "undefined" &&
      window.location.search.includes("static");
    if (reduce || staticMode) {
      setDone(true);
      return;
    }
    document.documentElement.classList.add("lenis-stopped");
    const t = setTimeout(() => {
      setDone(true);
      document.documentElement.classList.remove("lenis-stopped");
    }, 1150);
    return () => {
      clearTimeout(t);
      document.documentElement.classList.remove("lenis-stopped");
    };
  }, [reduce]);

  if (reduce) return null;

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[10000] grid place-items-center bg-ink"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="flex flex-col items-center gap-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative grid h-16 w-16 place-items-center overflow-hidden rounded-xl bg-brand text-white"
            >
              <GlobeMotif className="absolute inset-0 h-full w-full text-white/40" />
              <span className="relative font-display text-lg font-bold tracking-tight">
                246
              </span>
            </motion.div>
            <div className="h-px w-28 overflow-hidden bg-white/15">
              <motion.div
                className="h-full bg-brand"
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
