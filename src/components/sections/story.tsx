"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "../motion-primitives";
import { CTA } from "../ui";
import { ProductPanel } from "../visuals";
import { CONTACT } from "@/lib/content";

export default function Story() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.15, 1]);

  return (
    <section id="about" ref={ref} className="u-container py-24 md:py-36">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg lg:aspect-[5/6]">
          <motion.div
            style={{ y: reduce ? 0 : y, scale: reduce ? 1 : scale }}
            className="absolute inset-0"
          >
            <ProductPanel
              src="/media/story-redmi.webp"
              alt="Redmi smartphone — genuine imported flagship stocked by 246 Impex"
              inset="/media/story-watch.webp"
              insetAlt="Apple Watch Ultra available at 246 Impex"
              caption="Sourced worldwide"
            />
          </motion.div>
          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-ink/10" />
        </div>

        {/* Copy */}
        <div>
          <div className="mb-6 flex items-center gap-4">
            <span className="h-2 w-2 rounded-full bg-brand" />
            <span className="eyebrow text-ink/50">Our promise</span>
          </div>
          <Reveal>
            <h2 className="display-2 max-w-[15ch] text-ink">
              The world&apos;s best tech, brought{" "}
              <span className="accent text-brand">home.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-7 max-w-[50ch] text-lg leading-relaxed text-ink/70">
              We bridge the distance between the global brands you want and your
              doorstep in Nepal. Each product is carefully sourced, genuinely
              imported and delivered with the service you deserve — so modern
              technology feels reliable, affordable and within reach.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-9">
              <CTA href={CONTACT.whatsappLink} external variant="outline">
                Talk to our team
              </CTA>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
