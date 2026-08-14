"use client";

import { motion, useReducedMotion } from "framer-motion";
import { GlobeMotif } from "./brand";

/* ------------------------------------------------------------------
   ProductPanel — presents a real (white-background) product photo on
   a clean, softly-lit card. Reads premium on both dark and light
   sections. Optional inset image for a layered, editorial composition.
   ------------------------------------------------------------------ */
export function ProductPanel({
  src,
  alt,
  inset,
  insetAlt,
  caption,
}: {
  src: string;
  alt: string;
  inset?: string;
  insetAlt?: string;
  caption?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-white to-[#e9edf4]">
      {/* soft studio light + faint globe watermark */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_18%,rgba(255,255,255,0.9),transparent_70%)]" />
      <GlobeMotif
        className="pointer-events-none absolute -right-1/4 -top-1/4 h-[130%] w-[130%] text-globe/[0.06]"
        strokeWidth={0.5}
      />

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-contain p-8 sm:p-10"
      />

      {inset && (
        <motion.div
          className="absolute bottom-5 right-5 h-24 w-24 overflow-hidden rounded-xl border border-ink/10 bg-white shadow-lg sm:h-28 sm:w-28"
          animate={reduce ? undefined : { y: [0, -8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={inset}
            alt={insetAlt ?? ""}
            loading="lazy"
            className="h-full w-full object-contain p-2"
          />
        </motion.div>
      )}

      {caption && (
        <span className="mono absolute left-5 top-5 rounded-full border border-ink/10 bg-white/70 px-3 py-1 text-[0.62rem] uppercase tracking-wide text-ink/60 backdrop-blur-sm">
          {caption}
        </span>
      )}
    </div>
  );
}

