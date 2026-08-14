import { Reveal } from "../motion-primitives";
import { GlobeMotif } from "../brand";

export default function Intro() {
  return (
    <section className="u-container relative overflow-hidden py-24 md:py-36">
      <span
        aria-hidden
        className="pointer-events-none absolute right-[-1%] top-4 z-0 select-none font-display text-[15vw] font-bold leading-none tracking-tighter text-ink/[0.04]"
      >
        246
      </span>
      <div className="relative z-10 mb-14 flex items-center gap-4">
        <span className="h-2 w-2 rounded-full bg-brand" />
        <span className="eyebrow text-ink/50">Who we are</span>
      </div>

      <div className="grid gap-x-16 gap-y-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Reveal>
            <h2 className="display-2 max-w-[16ch] text-ink">
              Owning <span className="accent text-brand">genuine</span>,
              world-class technology in Nepal should be simple.
            </h2>
          </Reveal>
        </div>

        <div className="lg:col-span-5 lg:pt-4">
          <Reveal delay={0.1}>
            <p className="text-lg leading-relaxed text-ink/70">
              246 Impex is your trusted destination for high-quality imported
              products in Nepal. We source reliable, affordable and modern tech
              from the world&apos;s best brands — and bring it, boxed and
              genuine, right to your doorstep.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-6 text-lg leading-relaxed text-ink/70">
              No clones. No grey-market surprises. Just original products backed
              by real warranties, flexible EMI and fast, dependable delivery.
            </p>
          </Reveal>
          <Reveal delay={0.26}>
            <div className="mt-8 flex items-center gap-4">
              <GlobeMotif
                className="h-10 w-10 text-globe"
                strokeWidth={1.25}
              />
              <span className="text-sm font-medium text-ink/60">
                Imported from the world · Trusted across Nepal
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
