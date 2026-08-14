"use client";

import { CoverflowCarousel } from "@/components/ui/coverflow-carousel";

// Reliable Unsplash photo IDs (square crops).
const U = (id: string) =>
  `https://images.unsplash.com/photo-${id}?w=640&h=640&fit=crop&q=70&auto=format`;

const SLIDES = [
  {
    src: U("1470071459604-3b5ec3a7fe05"),
    alt: "Fog rolling through a forested valley at first light",
    title: "Tidewater",
    subtitle: "Long Player",
    meta: [
      { label: "Year", value: "2019" },
      { label: "Producer", value: "Ada Ferrow" },
      { label: "Length", value: "3:42" },
    ],
  },
  {
    src: U("1500534314209-a25ddb2bd429"),
    alt: "Sunlit dune ridge under a hard blue sky",
    title: "Nightshift",
    subtitle: "Long Player",
    meta: [
      { label: "Year", value: "2021" },
      { label: "Producer", value: "Kell Mora" },
      { label: "Length", value: "4:08" },
    ],
  },
  {
    src: U("1441974231531-c6227db76b6e"),
    alt: "Sunlight breaking through a dense stand of trees",
    title: "Overexposed",
    subtitle: "Single",
    meta: [
      { label: "Year", value: "2018" },
      { label: "Producer", value: "Juno Vale" },
      { label: "Length", value: "2:57" },
    ],
  },
  {
    src: U("1493246507139-91e8fad9978e"),
    alt: "Pastel abstract of coloured smoke against a pale ground",
    title: "Slow Bloom",
    subtitle: "EP",
    meta: [
      { label: "Year", value: "2022" },
      { label: "Producer", value: "Rue Alcott" },
      { label: "Length", value: "3:15" },
    ],
  },
  {
    src: U("1501785888041-af3ef285b470"),
    alt: "Mountain lake mirroring a ridgeline at dusk",
    title: "Open Palm",
    subtitle: "Single",
    meta: [
      { label: "Year", value: "2020" },
      { label: "Producer", value: "Ada Ferrow" },
      { label: "Length", value: "3:01" },
    ],
  },
  {
    src: U("1465101162946-4377e57745c3"),
    alt: "Long exposure of light trails over a dark landscape",
    title: "Low Country",
    subtitle: "Long Player",
    meta: [
      { label: "Year", value: "2017" },
      { label: "Producer", value: "Sim Oyo" },
      { label: "Length", value: "5:20" },
    ],
  },
  {
    src: U("1519681393784-d120267933ba"),
    alt: "Snow-covered peak lit by a cold morning sun",
    title: "Dry Season",
    subtitle: "EP",
    meta: [
      { label: "Year", value: "2016" },
      { label: "Producer", value: "Juno Vale" },
      { label: "Length", value: "2:44" },
    ],
  },
  {
    src: U("1447752875215-b2761acb3c5d"),
    alt: "Sunlit path winding through tall autumn trees",
    title: "Understory",
    subtitle: "Single",
    meta: [
      { label: "Year", value: "2023" },
      { label: "Producer", value: "Kell Mora" },
      { label: "Length", value: "3:38" },
    ],
  },
  {
    src: U("1470252649378-9c29740c9fa8"),
    alt: "Still mountain lake beneath layered ridgelines",
    title: "Paper Lantern",
    subtitle: "Single",
    meta: [
      { label: "Year", value: "2021" },
      { label: "Producer", value: "Rue Alcott" },
      { label: "Length", value: "2:19" },
    ],
  },
  {
    src: U("1439405326854-014607f694d7"),
    alt: "Aerial view of a patterned green landscape",
    title: "Still Water",
    subtitle: "Long Player",
    meta: [
      { label: "Year", value: "2015" },
      { label: "Producer", value: "Ada Ferrow" },
      { label: "Length", value: "4:51" },
    ],
  },
  {
    src: U("1506744038136-46273834b3fb"),
    alt: "Calm lake reflecting mountains and forest",
    title: "Third Rail",
    subtitle: "EP",
    meta: [
      { label: "Year", value: "2024" },
      { label: "Producer", value: "Sim Oyo" },
      { label: "Length", value: "3:07" },
    ],
  },
  {
    src: U("1418065460487-3e41a6c84dc5"),
    alt: "Rolling green hills under a bright sky",
    title: "Undertow",
    subtitle: "Single",
    meta: [
      { label: "Year", value: "2020" },
      { label: "Producer", value: "Juno Vale" },
      { label: "Length", value: "3:29" },
    ],
  },
];

export default function CoverflowDemoPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-2 bg-background py-16">
      <div className="mb-4 flex flex-col items-center gap-2 px-6 text-center">
        <span className="eyebrow text-ink/50">Component · shadcn/ui</span>
        <h1 className="font-display text-3xl font-semibold tracking-tight text-foreground">
          Coverflow Carousel
        </h1>
        <p className="max-w-[46ch] text-sm text-muted-foreground">
          Drag, flick, use the arrows or ← → keys. Fully looped, 3D, and
          themed to the 246 Impex palette.
        </p>
      </div>

      <div className="w-full overflow-hidden">
        <CoverflowCarousel
          slides={SLIDES}
          showCaption
          showNavigation
          showPagination
        />
      </div>
    </main>
  );
}
