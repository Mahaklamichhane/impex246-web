"use client";

import { MousePointer2 } from "lucide-react";
import { Card } from "../ui/card";
import { Spotlight } from "../ui/spotlight";
import { SplineScene } from "../ui/splite";
import { Reveal } from "../motion-primitives";
import { CTA, Magnetic } from "../ui";
import { CONTACT, SITE } from "@/lib/content";

export default function Welcome() {
  return (
    <section id="welcome" className="u-container py-16 md:py-24">
      <Reveal>
        <Card className="relative w-full overflow-hidden border border-white/10 bg-ink text-white">
          {/* Cursor-following spotlight */}
          <Spotlight
            className="-top-40 left-0 md:-top-20 md:left-60"
            size={340}
          />
          {/* Brand glow + structural navy wash */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(110%_90%_at_90%_10%,rgba(22,62,134,0.55),transparent_60%)]" />

          <div className="relative flex flex-col md:h-[520px] md:flex-row">
            {/* Left — welcome copy */}
            <div className="relative z-10 flex flex-1 flex-col justify-center p-8 md:p-12">
              <div className="mb-6 flex items-center gap-4">
                <span className="h-2 w-2 rounded-full bg-brand" />
                <span className="eyebrow text-white/60">Welcome</span>
              </div>

              <h2 className="font-display text-[clamp(2.2rem,5vw,3.6rem)] font-semibold leading-[1.02] tracking-tight">
                Say hello to{" "}
                <span className="text-brand">246</span> Impex.
              </h2>

              <p className="mt-6 max-w-lg text-[0.98rem] leading-relaxed text-white/70">
                Give the robot a spin while you look around. We bring the
                world&apos;s best electronics to Nepal — 100% genuine, official
                warranty, easy EMI and fast delivery to your door.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Magnetic strength={0.3}>
                  <CTA href={CONTACT.whatsappLink} external variant="primary">
                    Chat with us
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
              </div>

              <p className="mt-8 flex items-center gap-2 text-xs text-white/40">
                <MousePointer2 className="h-3.5 w-3.5" strokeWidth={1.75} />
                Drag to interact
              </p>
            </div>

            {/* Right — interactive 3D robot */}
            <div className="relative min-h-[340px] flex-1 md:min-h-0">
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="absolute inset-0 h-full w-full"
              />
            </div>
          </div>
        </Card>
      </Reveal>
    </section>
  );
}
