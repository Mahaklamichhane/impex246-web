import { CountUp, StaggerGroup, StaggerItem } from "../motion-primitives";
import { TRUST } from "@/lib/content";

/* Only real, countable facts — brands stocked, categories, warranty,
   genuine. No invented metrics (revenue, clients, years, countries). */
export default function Trust() {
  return (
    <section className="border-y border-ink/10 bg-paper-2/60">
      <StaggerGroup
        className="u-container grid grid-cols-2 divide-ink/10 md:grid-cols-4 md:divide-x"
        stagger={0.08}
      >
        {TRUST.map((t, i) => (
          <StaggerItem
            key={t.label}
            className={`px-2 py-12 text-center md:py-16 ${
              i < 2 ? "border-b border-ink/10 md:border-b-0" : ""
            }`}
          >
            <div className="mono text-5xl font-bold tracking-tight text-ink md:text-6xl">
              <CountUp to={t.value} suffix={t.suffix} />
            </div>
            <p className="mx-auto mt-3 max-w-[16ch] text-sm text-ink/55">
              {t.label}
            </p>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}
