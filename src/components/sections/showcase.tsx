import { Reveal } from "../motion-primitives";
import { CTA } from "../ui";
import { CoverflowCarousel } from "../ui/coverflow-carousel";
import { PRODUCT_SLIDES } from "@/lib/products";
import { SITE } from "@/lib/content";

export default function Showcase() {
  return (
    <section
      id="shop"
      className="border-t border-ink/8 bg-paper-2/50 py-24 md:py-32"
    >
      <div className="u-container">
        <div className="mb-6 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="mb-6 flex items-center gap-4">
              <span className="h-2 w-2 rounded-full bg-brand" />
              <span className="eyebrow text-ink/50">In stock now</span>
            </div>
            <Reveal>
              <h2 className="display-2 text-ink">
                Straight off the{" "}
                <span className="accent text-globe">shelf.</span>
              </h2>
            </Reveal>
          </div>
          <p className="max-w-[40ch] text-ink/60 md:text-right md:text-lg">
            Real products from our store, genuinely imported and ready to ship.
            Drag, flick, or use the arrows.
          </p>
        </div>
      </div>

      {/* Full-bleed carousel so the neighbouring cards run to the edges */}
      <Reveal delay={0.1}>
        <CoverflowCarousel
          slides={PRODUCT_SLIDES}
          showCaption
          showNavigation
          showPagination
          cardClassName="border border-ink/10 bg-white"
          label="Featured products at 246 Impex"
        />
      </Reveal>

      <div className="u-container mt-4 flex justify-center">
        <CTA href={`${SITE.storeUrl}/products`} external variant="outline">
          Browse all products
        </CTA>
      </div>
    </section>
  );
}
