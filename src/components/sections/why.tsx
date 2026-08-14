import { Reveal, AnimatedText, StaggerGroup, StaggerItem } from "../motion-primitives";
import { VALUES } from "@/lib/content";

export default function Why() {
  return (
    <section id="why" className="u-container py-24 md:py-36">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Sticky heading */}
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <div className="mb-6 flex items-center gap-4">
              <span className="h-2 w-2 rounded-full bg-brand" />
              <span className="eyebrow text-ink/50">Why 246 Impex</span>
            </div>
            <AnimatedText
              as="h2"
              text="Reasons Nepal trusts us."
              className="display-2 text-ink"
            />
            <Reveal delay={0.15}>
              <p className="mt-6 max-w-[34ch] text-ink/60">
                No inflated promises — just the fundamentals of buying
                electronics done properly.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Value list */}
        <StaggerGroup className="lg:col-span-8" stagger={0.1}>
          <ul>
            {VALUES.map((v) => (
              <StaggerItem key={v.k}>
                <li className="group grid grid-cols-[auto_1fr] gap-6 border-b border-ink/12 py-8 transition-colors duration-500 hover:border-brand md:gap-10 md:py-10">
                  <span className="mono text-2xl font-bold leading-none text-brand transition-transform duration-500 group-hover:scale-110 md:text-4xl">
                    {v.k}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl font-medium tracking-tight text-ink transition-colors duration-500 group-hover:text-brand md:text-3xl">
                      {v.title}
                    </h3>
                    <p className="mt-3 max-w-[52ch] leading-relaxed text-ink/65">
                      {v.body}
                    </p>
                  </div>
                </li>
              </StaggerItem>
            ))}
          </ul>
        </StaggerGroup>
      </div>
    </section>
  );
}
