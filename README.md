# 246 Impex — Landing Page

A premium, animated landing page for **246 Impex Pvt. Ltd.** — a Nepal-based retailer of genuine imported consumer electronics (smartphones, laptops, audio & wearables, appliances and accessories from the world's best brands).

> Design direction: *genuine goods, imported from the world, delivered across Nepal.* The signature element is a wireframe globe with an import route landing on Kathmandu — the business made literal.

## Tech stack

- **Next.js 16** (App Router) · **React 19** · **TypeScript**
- **Tailwind CSS v4** (CSS-first `@theme` tokens)
- **Framer Motion** (reveals, parallax, micro-interactions)
- **Lenis** (smooth scroll)
- **Lucide** (icons)

## Design system

- **Palette** — cool navy-tinted neutrals; brand **red** (`#e11b22`) and **globe navy** (`#163e86`) both do real work (from the real 246 logo).
- **Type** — Space Grotesk (display) · Inter (body) · Space Mono (coordinates / labels / data).
- **Accents** — navy on light sections, red on dark.
- **Motion** — page-load sequence → line-by-line hero reveal → scroll reveals → hover micro-interactions. Fully respects `prefers-reduced-motion`; custom cursor + magnetic buttons are desktop-only.

## Content integrity

All business facts live in [`src/lib/content.ts`](src/lib/content.ts) and are sourced from the live site — no invented statistics, awards, clients, or claims. Contact uses verified channels only (WhatsApp + socials); no unverified address is shown.

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

## Production build (static export)

Configured with `output: 'export'` — every build emits a self-contained `out/` folder of static HTML/CSS/JS that deploys to any static host (cPanel, Netlify, GitHub Pages, S3…).

```bash
npm run build      # outputs ./out
# upload the contents of ./out to your web root
```

## Project structure

```
src/
├─ app/                 # layout (fonts, SEO, JSON-LD), page, globals.css (design tokens)
├─ components/
│  ├─ globe-route.tsx   # signature: wireframe globe + import route to Kathmandu
│  ├─ brand.tsx         # logo + globe motif
│  ├─ *-primitives.tsx  # Reveal, AnimatedText, MagneticButton, CountUp, marquee, cursor…
│  └─ sections/         # navbar, hero, categories, featured, why, trust, story, contact, footer
└─ lib/content.ts       # single source of truth for all verified content
```

## Notes

- `?static` URL param bypasses the preloader + smooth scroll (graceful/testing hook).
- Product imagery in `public/media/` is sourced from 246 Impex's own product listings.
