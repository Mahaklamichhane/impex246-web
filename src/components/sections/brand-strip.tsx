import { Marquee } from "../marquee";
import { BRANDS } from "@/lib/content";

export default function BrandStrip() {
  return (
    <section
      aria-label="Brands we carry"
      className="border-y border-ink/8 bg-paper py-7"
    >
      <div className="u-container mb-5 flex items-center gap-4">
        <span className="eyebrow text-ink/45">The brands we carry</span>
        <span className="h-px flex-1 bg-ink/10" />
      </div>
      <Marquee
        items={BRANDS}
        duration={40}
        className="font-display text-2xl font-medium text-ink/80 md:text-3xl"
      />
    </section>
  );
}
