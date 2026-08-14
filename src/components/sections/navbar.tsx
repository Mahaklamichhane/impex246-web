"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "../brand";
import { CTA, Magnetic } from "../ui";
import { NAV, CONTACT } from "@/lib/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("lenis-stopped", open);
    return () => document.documentElement.classList.remove("lenis-stopped");
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 1.15 }}
        className="fixed inset-x-0 top-0 z-[900]"
      >
        <div
          className={`transition-all duration-500 ${
            scrolled
              ? "border-b border-ink/8 bg-paper/80 backdrop-blur-xl"
              : "border-b border-transparent bg-transparent"
          }`}
        >
          <nav className="u-container flex h-16 items-center justify-between md:h-[72px]">
            <a href="#top" aria-label="246 Impex — home" className="shrink-0">
              <Logo />
            </a>

            <ul className="hidden items-center gap-9 lg:flex">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="link-underline text-[0.9rem] font-medium text-ink/75 transition-colors hover:text-ink"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="hidden items-center gap-3 lg:flex">
              <Magnetic strength={0.25}>
                <CTA href={CONTACT.whatsappLink} external variant="primary">
                  Get in touch
                </CTA>
              </Magnetic>
            </div>

            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="grid h-11 w-11 place-items-center rounded-full border border-ink/12 text-ink lg:hidden"
            >
              <Menu strokeWidth={1.6} className="h-5 w-5" />
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile / tablet full-screen menu */}
      <AnimatePresence>
        {open && <MobileMenu onClose={() => setOpen(false)} />}
      </AnimatePresence>
    </>
  );
}

function MobileMenu({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-[1000] flex flex-col bg-ink text-white lg:hidden"
      initial={{ clipPath: "inset(0 0 100% 0)" }}
      animate={{ clipPath: "inset(0 0 0% 0)" }}
      exit={{ clipPath: "inset(0 0 100% 0)" }}
      transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="u-container flex h-16 items-center justify-between md:h-[72px]">
        <Logo tone="light" />
        <button
          onClick={onClose}
          aria-label="Close menu"
          className="grid h-11 w-11 place-items-center rounded-full border border-white/15"
        >
          <X strokeWidth={1.6} className="h-5 w-5" />
        </button>
      </div>

      <nav className="u-container flex flex-1 flex-col justify-center">
        <ul className="space-y-1">
          {NAV.map((item, i) => (
            <motion.li
              key={item.href}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.15 + i * 0.07,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="overflow-hidden border-b border-white/10"
            >
              <a
                href={item.href}
                onClick={onClose}
                className="flex items-baseline justify-between py-4"
              >
                <span className="font-display text-3xl font-medium tracking-tight sm:text-4xl">
                  {item.label}
                </span>
                <span className="font-mono text-xs text-white/40">
                  0{i + 1}
                </span>
              </a>
            </motion.li>
          ))}
        </ul>
      </nav>

      <div className="u-container pb-10">
        <CTA
          href={CONTACT.whatsappLink}
          external
          variant="primary"
          className="w-full justify-center"
        >
          Chat on WhatsApp
        </CTA>
        <div className="mt-5 flex flex-wrap gap-x-5 gap-y-1 text-sm text-white/50">
          {CONTACT.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
