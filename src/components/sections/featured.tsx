"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "../motion-primitives";
import { CTA } from "../ui";
import { ProductPanel } from "../visuals";
import { CONTACT, SITE } from "@/lib/content";

export default function Featured() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.12, 1]);

  return (
    <section
      ref={ref}
      className="grain relative overflow-hidden bg-ink py-24 text-white md:py-36"
    >
      {/* Warm brand wash */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(115%_90%_at_92%_8%,rgba(225,27,34,0.14),transparent_58%)]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/10 blur-[140px]" />

      {/* Oversized watermark */}
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-[7%] left-[-2%] z-0 select-none font-display text-[26vw] font-bold leading-none tracking-tighter text-white/[0.05]"
      >
        EMI
      </span>

      <div className="u-container relative z-10 grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Copy */}
        <div className="order-2 lg:order-1">
          <div className="mb-6 flex items-center gap-4">
            <span className="h-2 w-2 rounded-full bg-brand" />
            <span className="eyebrow text-white/60">Buy the smart way</span>
          </div>
          <Reveal>
            <h2 className="font-display text-[clamp(2.4rem,6vw,5rem)] font-semibold leading-[0.98] tracking-tight">
              Own it today.
              <br />
              Pay the <span className="accent text-brand pr-[0.05em]">easy</span>{" "}
              way.
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-7 max-w-[46ch] text-lg leading-relaxed text-white/70">
              Flexible EMI plans make premium, genuine electronics accessible —
              built for students and everyone. Choose your device, split the
              cost into comfortable instalments, and walk away with the real
              thing, official warranty included.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <CTA href={CONTACT.whatsappLink} external variant="primary">
                Ask about EMI
              </CTA>
              <CTA
                href={`${SITE.storeUrl}/products`}
                external
                variant="outline"
                tone="light"
              >
                Browse devices
              </CTA>
            </div>
          </Reveal>
        </div>

        {/* Visual */}
        <div className="order-1 lg:order-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-white/10 shadow-2xl sm:aspect-[5/4] lg:aspect-[4/5]">
            <motion.div
              style={{ y: reduce ? 0 : imgY, scale: reduce ? 1 : scale }}
              className="absolute inset-0"
            >
              <ProductPanel
                src="/media/featured-phones.webp"
                alt="Genuine imported iPhone lineup available at 246 Impex"
              />
            </motion.div>

            {/* EMI badge */}
            <div className="absolute bottom-5 left-5">
              <div className="rounded-md bg-ink px-4 py-3 shadow-lg">
                <p className="font-display text-2xl font-semibold leading-none text-white">
                  EMI
                </p>
                <p className="mt-1 text-xs text-white/70">
                  For students &amp; everyone
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
