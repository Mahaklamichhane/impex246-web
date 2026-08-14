"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { ShieldCheck, Truck, BadgeCheck, MousePointer2 } from "lucide-react";
import { Spotlight } from "../ui/spotlight";
import { SplineScene } from "../ui/splite";
import { CTA, Magnetic } from "../ui";
import { CONTACT, SITE } from "@/lib/content";

const EASE = [0.16, 1, 0.3, 1] as const;
const LINES = ["Welcome to", "246 Impex."];
const BASE_DELAY = 1.25; // wait out the preloader

const chips = [
  { icon: BadgeCheck, label: "100% genuine" },
  { icon: ShieldCheck, label: "1-year warranty" },
  { icon: Truck, label: "Fast delivery" },
];

export default function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const robotY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const fade = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden bg-paper pt-24 pb-10 text-ink md:pt-28"
    >
      {/* Soft warm ambience */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(90%_60%_at_18%_-10%,rgba(255,255,255,0.6),transparent_60%)]" />

      <div className="u-container relative z-10 grid items-center gap-8 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
        {/* Left — welcome copy */}
        <motion.div style={{ y: reduce ? 0 : contentY, opacity: reduce ? 1 : fade }}>
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: BASE_DELAY }}
            className="mb-6 flex items-center gap-3"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand/60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
            </span>
            <span className="eyebrow text-ink/60">
              Nepal · Imported Electronics
            </span>
          </motion.div>

          {/* Big welcome headline — line-by-line masked reveal */}
          <h1 className="font-display text-[clamp(2.9rem,6.6vw,6rem)] font-semibold leading-[0.95] tracking-[-0.035em] text-ink">
            {LINES.map((line, i) => (
              <span
                key={i}
                className="block overflow-hidden"
                style={{ paddingBottom: "0.08em" }}
              >
                <motion.span
                  className="inline-block"
                  initial={reduce ? false : { y: "108%" }}
                  animate={{ y: "0%" }}
                  transition={{
                    duration: 0.85,
                    ease: EASE,
                    delay: BASE_DELAY + 0.12 + i * 0.13,
                  }}
                >
                  {i === 1 ? (
                    <>
                      <span className="text-brand">246</span> Impex.
                    </>
                  ) : (
                    line
                  )}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: BASE_DELAY + 0.5 }}
            className="mt-7 max-w-[50ch] text-lg leading-relaxed text-ink/70"
          >
            Genuine imported electronics, delivered across Nepal. From
            smartphones to speakers — {SITE.name} brings you 100% original
            products from the world&apos;s best brands, with official warranty,
            easy EMI and fast delivery to your door.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: BASE_DELAY + 0.65 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Magnetic strength={0.3}>
              <CTA href={CONTACT.whatsappLink} external variant="primary">
                Enquire on WhatsApp
              </CTA>
            </Magnetic>
            <CTA
              href={`${SITE.storeUrl}/products`}
              external
              variant="outline"
            >
              Explore products
            </CTA>
          </motion.div>

          <motion.ul
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, ease: EASE, delay: BASE_DELAY + 0.85 }}
            className="mt-10 flex flex-wrap gap-x-8 gap-y-3"
          >
            {chips.map((c) => (
              <li
                key={c.label}
                className="flex items-center gap-2.5 text-sm text-ink/65"
              >
                <c.icon className="h-4 w-4 text-brand" strokeWidth={1.75} />
                {c.label}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Right — robot in a charcoal panel, tinted toward brand red */}
        <motion.div
          style={{ y: reduce ? 0 : robotY }}
          initial={reduce ? false : { opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: EASE, delay: BASE_DELAY + 0.15 }}
          className="relative order-first h-[380px] w-full sm:h-[460px] lg:order-none lg:h-[620px]"
        >
          <div className="relative h-full w-full overflow-hidden rounded-[1.75rem] border border-ink/10 bg-ink shadow-[0_30px_80px_rgba(38,36,29,0.25)]">
            {/* cursor spotlight within the panel */}
            <Spotlight className="left-10 -top-10 md:left-32" size={360} />
            {/* brand halo */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/25 blur-[90px]" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_110%,rgba(225,27,34,0.22),transparent_60%)]" />

            <motion.div
              className="robot-brand absolute inset-0"
              animate={reduce ? undefined : { y: [0, -16, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="h-full w-full"
              />
            </motion.div>

            <div className="pointer-events-none absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 text-xs text-white/45">
              <MousePointer2 className="h-3.5 w-3.5" strokeWidth={1.75} />
              Drag the robot
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: BASE_DELAY + 1.1, duration: 1 }}
        style={{ opacity: reduce ? 1 : fade }}
        className="u-container relative z-10 mt-10 hidden items-center gap-3 md:flex"
      >
        <span className="text-xs uppercase tracking-[0.2em] text-ink/40">
          Scroll
        </span>
        <span className="h-px w-16 overflow-hidden bg-ink/15">
          <motion.span
            className="block h-full w-full bg-brand"
            animate={reduce ? undefined : { x: ["-100%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </motion.div>
    </section>
  );
}
