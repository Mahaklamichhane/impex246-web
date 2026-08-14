"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { CATEGORIES } from "@/lib/content";
import { AnimatedText } from "../motion-primitives";

export default function Categories() {
  return (
    <section id="categories" className="bg-paper py-24 md:py-32">
      <div className="u-container">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="mb-6 flex items-center gap-4">
              <span className="h-2 w-2 rounded-full bg-brand" />
              <span className="eyebrow text-ink/50">What we carry</span>
            </div>
            <AnimatedText
              as="h2"
              text="Five categories. One standard."
              className="display-2 text-ink"
            />
          </div>
          <p className="max-w-[38ch] text-ink/60 md:text-right md:text-lg">
            Every device we stock is original, warrantied and ready to ship —
            explore the range.
          </p>
        </div>

        <div className="border-t border-ink/12">
          {CATEGORIES.map((cat, i) => (
            <CategoryRow key={cat.index} cat={cat} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CategoryRow({
  cat,
  i,
}: {
  cat: (typeof CATEGORIES)[number];
  i: number;
}) {
  return (
    <motion.a
      href={cat.href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.05 }}
      className="group relative block overflow-hidden border-b border-ink/12"
    >
      {/* Fill sweep on hover */}
      <span
        aria-hidden
        className="absolute inset-0 z-0 translate-y-full bg-ink transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0"
      />

      <div className="relative z-10 grid grid-cols-[auto_1fr_auto] items-center gap-5 py-7 md:gap-10 md:py-9">
        <span className="font-mono text-sm text-ink/40 transition-colors duration-500 group-hover:text-brand md:text-base">
          {cat.index}
        </span>

        <div className="min-w-0">
          <h3 className="font-display text-2xl font-medium tracking-tight text-ink transition-colors duration-500 group-hover:text-white sm:text-3xl md:text-[2.6rem] md:leading-[1.05]">
            {cat.title}
          </h3>

          {/* Expanding detail (desktop reveals on hover; always on mobile) */}
          <div className="grid grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:grid-rows-[0fr] md:group-hover:grid-rows-[1fr]">
            <div className="overflow-hidden">
              <p className="mt-3 max-w-[60ch] text-[0.95rem] leading-relaxed text-ink/60 transition-colors duration-500 group-hover:text-white/70 md:mt-4">
                {cat.blurb}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {cat.tags.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-ink/15 px-3 py-1 text-xs text-ink/55 transition-colors duration-500 group-hover:border-white/20 group-hover:text-white/70"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-ink/15 text-ink transition-all duration-500 group-hover:border-brand group-hover:bg-brand group-hover:text-white md:h-14 md:w-14">
          <ArrowUpRight
            className="h-5 w-5 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            strokeWidth={1.6}
          />
        </span>
      </div>
    </motion.a>
  );
}
