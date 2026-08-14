import { CountUp, StaggerGroup, StaggerItem } from "../motion-primitives";
import { TRUST } from "@/lib/content";

/* Only real, countable facts — brands stocked, categories, warranty,
   genuine. No invented metrics. Oversized red figures on charcoal. */
export default function Trust() {
  return (
    <section className="grain relative overflow-hidden bg-ink text-white">
      <div className="hazard h-2.5 w-full" />
      <StaggerGroup
        className="u-container grid grid-cols-2 divide-white/10 md:grid-cols-4 md:divide-x"
        stagger={0.08}
      >
        {TRUST.map((t, i) => (
          <StaggerItem
            key={t.label}
            className={`px-2 py-14 text-center md:py-20 ${
              i < 2 ? "border-b border-white/10 md:border-b-0" : ""
            }`}
          >
            <div className="mono text-6xl font-bold leading-none tracking-tight text-brand md:text-7xl lg:text-8xl">
              <CountUp to={t.value} suffix={t.suffix} />
            </div>
            <p className="mx-auto mt-4 max-w-[16ch] text-sm uppercase tracking-wide text-white/55">
              {t.label}
            </p>
          </StaggerItem>
        ))}
      </StaggerGroup>
      <div className="hazard h-2.5 w-full" />
    </section>
  );
}
