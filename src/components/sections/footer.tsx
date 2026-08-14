import { Logo } from "../brand";
import { NAV, CATEGORIES, CONTACT, SITE } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-paper pt-20 pb-10">
      <div className="u-container">
        <div className="grid gap-12 border-t border-ink/12 pt-14 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-6 max-w-[38ch] text-[0.95rem] leading-relaxed text-ink/60">
              {SITE.description}
            </p>
            <a
              href={CONTACT.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block font-display text-xl text-ink transition-colors hover:text-brand"
            >
              {CONTACT.whatsappIntl}
            </a>
          </div>

          {/* Explore */}
          <div className="md:col-span-3">
            <p className="eyebrow mb-5 text-ink/40">Explore</p>
            <ul className="space-y-3">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="link-underline text-ink/70 transition-colors hover:text-ink"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="md:col-span-4">
            <p className="eyebrow mb-5 text-ink/40">Shop</p>
            <ul className="space-y-3">
              {CATEGORIES.map((c) => (
                <li key={c.index}>
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline text-ink/70 transition-colors hover:text-ink"
                  >
                    {c.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col gap-4 border-t border-ink/12 pt-7 text-sm text-ink/50 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.legalName}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-1">
            {CONTACT.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-ink"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
