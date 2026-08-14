"use client";

import { motion } from "framer-motion";
import { MessageCircle, Truck, Clock } from "lucide-react";
import { Reveal } from "../motion-primitives";
import { CTA, Magnetic } from "../ui";
import { GlobeRoute } from "../globe-route";
import { CONTACT } from "@/lib/content";

export default function Contact() {
  return (
    <section
      id="contact"
      className="grain relative overflow-hidden bg-ink py-24 text-white md:py-36"
    >
      {/* Motif */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-none absolute -bottom-[18%] right-[-8%] h-[38rem] w-[38rem] text-white/[0.12]"
      >
        <GlobeRoute className="h-full w-full" />
      </motion.div>
      <div className="pointer-events-none absolute left-1/4 top-0 h-[30rem] w-[30rem] -translate-y-1/3 rounded-full bg-brand/15 blur-[130px]" />

      <div className="u-container relative z-10">
        <div className="mb-6 flex items-center gap-4">
          <span className="h-2 w-2 rounded-full bg-brand" />
          <span className="eyebrow text-white/60">Get in touch</span>
        </div>

        <Reveal>
          <h2 className="font-display text-[clamp(2.6rem,8vw,7rem)] font-semibold leading-[0.94] tracking-tight">
            Let&apos;s get you
            <br />
            the <span className="accent text-brand pr-[0.05em]">real</span>{" "}
            thing.
          </h2>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="mt-8 max-w-[48ch] text-lg leading-relaxed text-white/70">
            Message us on WhatsApp for prices, EMI options and availability —
            our team replies fast and helps you find exactly the right device.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Magnetic strength={0.3}>
              <CTA
                href={CONTACT.whatsappLink}
                external
                variant="primary"
                arrow={false}
                className="gap-3"
              >
                <MessageCircle className="h-[1.15em] w-[1.15em]" strokeWidth={1.8} />
                {CONTACT.whatsappIntl}
              </CTA>
            </Magnetic>
          </div>
        </Reveal>

        {/* Info cards */}
        <div className="mt-16 grid gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 sm:grid-cols-3">
          <InfoCard
            icon={Truck}
            title="Free delivery"
            body="Inside the Kathmandu Valley, with fast delivery across Nepal."
          />
          <InfoCard
            icon={Clock}
            title="Same-day dispatch"
            body="Order before 3 PM and we ship your device the same day."
          />
          <InfoCard
            icon={MessageCircle}
            title="Follow along"
            body={
              <span className="flex flex-wrap gap-x-4 gap-y-1">
                {CONTACT.socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline text-white/80 hover:text-white"
                  >
                    {s.label}
                  </a>
                ))}
              </span>
            }
          />
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  icon: Icon,
  title,
  body,
}: {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  title: string;
  body: React.ReactNode;
}) {
  return (
    <div className="bg-ink p-7">
      <Icon className="h-6 w-6 text-brand" strokeWidth={1.6} />
      <h3 className="mt-5 font-display text-lg font-medium">{title}</h3>
      <div className="mt-2 text-sm leading-relaxed text-white/60">{body}</div>
    </div>
  );
}
