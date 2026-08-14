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
const LINES = ["Genuine imported", "electronics,", "delivered across Nepal."];
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
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const robotY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const fade = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="grain relative flex min-h-[100svh] flex-col justify-center overflow-hidden bg-ink pt-24 pb-10 text-white md:pt-28"
    >
      {/* Ambient depth */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(120% 80% at 15% -10%, rgba(255,255,255,0.05), transparent 55%), radial-gradient(90% 70% at 88% 82%, rgba(225,27,34,0.18), transparent 62%), radial-gradient(70% 60% at 78% 20%, rgba(22,62,134,0.35), transparent 60%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "clamp(48px, 7vw, 96px) clamp(48px, 7vw, 96px)",
          maskImage:
            "radial-gradient(100% 100% at 30% 0%, black, transparent 70%)",
        }}
      />
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(120%_120%_at_50%_40%,transparent_55%,rgba(0,0,0,0.5))]" />

      {/* Cursor-following spotlight across the whole hero */}
      <Spotlight className="left-0 top-0 md:left-40 md:-top-10" size={420} />

      <div className="u-container relative z-10 grid items-center gap-6 lg:grid-cols-[1fr_1.05fr] lg:gap-8">
        {/* Left — copy */}
        <motion.div style={{ y: reduce ? 0 : contentY, opacity: reduce ? 1 : fade }}>
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: BASE_DELAY }}
            className="mb-6 flex items-center gap-3"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand/70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
            </span>
            <span className="eyebrow text-white/70">
              Nepal · Imported Electronics
            </span>
          </motion.div>

          {/* Headline — line-by-line masked reveal */}
          <h1 className="font-display text-[clamp(2.5rem,5.4vw,4.6rem)] font-semibold leading-[0.98] tracking-[-0.03em] text-white">
            {LINES.map((line, i) => (
              <span
                key={i}
                className="block overflow-hidden"
                style={{ paddingBottom: "0.06em" }}
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
                  {i === 2 ? (
                    <>
                      delivered across <span className="text-brand">Nepal.</span>
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
            transition={{ duration: 0.8, ease: EASE, delay: BASE_DELAY + 0.55 }}
            className="mt-7 max-w-[48ch] text-lg leading-relaxed text-white/70"
          >
            From smartphones to speakers — {SITE.name} brings you 100% original
            products from the world&apos;s best brands, with official warranty,
            easy EMI and fast delivery to your door.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: BASE_DELAY + 0.7 }}
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
              tone="light"
            >
              Explore products
            </CTA>
          </motion.div>

          <motion.ul
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, ease: EASE, delay: BASE_DELAY + 0.9 }}
            className="mt-10 flex flex-wrap gap-x-8 gap-y-3"
          >
            {chips.map((c) => (
              <li
                key={c.label}
                className="flex items-center gap-2.5 text-sm text-white/65"
              >
                <c.icon className="h-4 w-4 text-brand" strokeWidth={1.75} />
                {c.label}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Right — interactive 3D robot (bigger, animated) */}
        <motion.div
          style={{ y: reduce ? 0 : robotY }}
          initial={reduce ? false : { opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: EASE, delay: BASE_DELAY + 0.15 }}
          className="relative order-first h-[360px] w-full sm:h-[440px] lg:order-none lg:h-[660px]"
        >
          {/* halo behind the robot */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/15 blur-[100px]" />
          <motion.div
            className="absolute inset-0"
            animate={reduce ? undefined : { y: [0, -16, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="h-full w-full"
            />
          </motion.div>

          {/* interaction hint */}
          <div className="pointer-events-none absolute bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-2 text-xs text-white/40 lg:bottom-6">
            <MousePointer2 className="h-3.5 w-3.5" strokeWidth={1.75} />
            Drag the robot
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
        <span className="text-xs uppercase tracking-[0.2em] text-white/40">
          Scroll
        </span>
        <span className="h-px w-16 overflow-hidden bg-white/15">
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
