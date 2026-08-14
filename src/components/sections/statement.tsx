const PHRASES = [
  "Genuine imported electronics",
  "Official 1-year warranty",
  "Easy EMI for everyone",
  "Delivered across Nepal",
  "100% original — no clones",
];

function Row({ reverse = false }: { reverse?: boolean }) {
  const items = (
    <ul
      className="animate-marquee flex shrink-0 items-center gap-8 pr-8"
      style={reverse ? { animationDirection: "reverse" } : undefined}
    >
      {PHRASES.map((p, i) => (
        <li key={i} className="flex items-center gap-8 whitespace-nowrap">
          <span>{p}</span>
          <span className="text-2xl text-ink/70">✦</span>
        </li>
      ))}
    </ul>
  );
  return (
    <div
      className="marquee-track flex overflow-hidden font-display text-[clamp(1.8rem,4.4vw,3.6rem)] font-semibold uppercase tracking-tight text-white"
      style={{ ["--marquee-duration" as string]: "24s" }}
    >
      {items}
      <ul
        className="animate-marquee flex shrink-0 items-center gap-8 pr-8"
        style={reverse ? { animationDirection: "reverse" } : undefined}
        aria-hidden
      >
        {PHRASES.map((p, i) => (
          <li key={i} className="flex items-center gap-8 whitespace-nowrap">
            <span>{p}</span>
            <span className="text-2xl text-ink/70">✦</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Statement() {
  return (
    <section
      aria-label="What 246 Impex promises"
      className="grain relative isolate overflow-hidden bg-brand py-4"
    >
      <div className="hazard absolute inset-x-0 top-0 h-2.5" />
      <div className="flex flex-col gap-2 py-8">
        <Row />
        <Row reverse />
      </div>
      <div className="hazard absolute inset-x-0 bottom-0 h-2.5" />
    </section>
  );
}
