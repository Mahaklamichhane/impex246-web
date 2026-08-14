import { Marquee } from "../marquee";
import { BRANDS } from "@/lib/content";

export default function BrandStrip() {
  return (
    <section
      aria-label="Brands we carry"
      className="grain relative overflow-hidden bg-ink py-9 text-white"
    >
      <div className="hazard absolute inset-x-0 top-0 h-2" />
      <div className="u-container mb-6 flex items-center gap-4">
        <span className="h-2 w-2 rounded-full bg-brand" />
        <span className="eyebrow text-white/50">The brands we carry</span>
        <span className="h-px flex-1 bg-white/12" />
      </div>
      <Marquee
        items={BRANDS}
        duration={36}
        separator="✦"
        className="font-display text-3xl font-semibold uppercase tracking-tight text-white md:text-5xl"
      />
      <div className="hazard absolute inset-x-0 bottom-0 h-2" />
    </section>
  );
}
