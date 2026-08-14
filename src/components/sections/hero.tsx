"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { ShieldCheck, Truck, BadgeCheck } from "lucide-react";
import { GlobeRoute } from "../globe-route";
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
  const globeY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="grain relative flex min-h-[100svh] flex-col justify-center overflow-hidden bg-ink pt-28 pb-16 text-white md:pt-32"
    >
      {/* Ambient depth — restrained, layered, premium */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(120% 80% at 50% -10%, rgba(255,255,255,0.06), transparent 60%), radial-gradient(80% 60% at 92% 78%, rgba(225,27,34,0.14), transparent 65%)",
        }}
      />
      {/* Fine grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "clamp(48px, 7vw, 96px) clamp(48px, 7vw, 96px)",
          maskImage:
            "radial-gradient(100% 100% at 50% 0%, black, transparent 75%)",
        }}
      />
      {/* Vignette */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(120%_120%_at_50%_40%,transparent_55%,rgba(0,0,0,0.55))]" />

      {/* Signature — wireframe globe with the import route to Nepal */}
      <motion.div
        aria-hidden
        style={{ y: reduce ? 0 : globeY }}
        className="pointer-events-none absolute right-[-32%] top-[46%] z-0 h-[38rem] w-[38rem] -translate-y-1/2 sm:right-[-16%] md:right-[-2%] md:h-[46rem] md:w-[46rem] lg:right-[2%]"
      >
        <div className="relative h-full w-full text-white/[0.13]">
          <GlobeRoute className="h-full w-full" />
          {/* Destination coordinate label near the Kathmandu crosshair */}
          <span className="mono absolute left-[68%] top-[35%] whitespace-nowrap text-[0.6rem] tracking-wide text-white/55">
            <span className="text-brand">◦</span> KTM 27.72°N 85.32°E
          </span>
        </div>
      </motion.div>

      <motion.div
        style={{ y: reduce ? 0 : contentY, opacity: reduce ? 1 : fade }}
        className="u-container relative z-10"
      >
        {/* Eyebrow */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: BASE_DELAY }}
          className="mb-7 flex items-center gap-3"
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
        <h1 className="display-1 max-w-[16ch] text-white">
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
                    delivered across{" "}
                    <span className="text-brand">Nepal.</span>
                  </>
                ) : (
                  line
                )}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* Supporting copy */}
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: BASE_DELAY + 0.55 }}
          className="mt-8 max-w-[52ch] text-lg leading-relaxed text-white/70 md:text-xl"
        >
          From smartphones to speakers — {SITE.name} brings you 100% original
          products from the world&apos;s best brands, with official warranty,
          easy EMI and fast delivery to your door.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: BASE_DELAY + 0.7 }}
          className="mt-10 flex flex-wrap items-center gap-4"
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

        {/* Trust chips */}
        <motion.ul
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, ease: EASE, delay: BASE_DELAY + 0.9 }}
          className="mt-14 flex flex-wrap gap-x-8 gap-y-3"
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

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: BASE_DELAY + 1.1, duration: 1 }}
        style={{ opacity: reduce ? 1 : fade }}
        className="u-container relative z-10 mt-16 hidden items-center gap-3 md:flex"
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
