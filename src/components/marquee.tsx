"use client";

/* CSS-driven infinite marquee (GPU transform only). Duplicated
   track for a seamless loop; pauses on hover; static list on
   reduced motion (handled in globals.css). */
export function Marquee({
  items,
  duration = 34,
  separator = "·",
  className = "",
}: {
  items: string[];
  duration?: number;
  separator?: string;
  className?: string;
}) {
  const track = (
    <ul className="animate-marquee flex shrink-0 items-center gap-10 pr-10">
      {items.map((it, i) => (
        <li key={i} className="flex items-center gap-10 whitespace-nowrap">
          <span>{it}</span>
          <span className="text-brand/70" aria-hidden>
            {separator}
          </span>
        </li>
      ))}
    </ul>
  );

  return (
    <div
      className={`marquee-track relative flex overflow-hidden ${className}`}
      style={{ ["--marquee-duration" as string]: `${duration}s` }}
    >
      {track}
      <ul
        className="animate-marquee flex shrink-0 items-center gap-10 pr-10"
        aria-hidden
      >
        {items.map((it, i) => (
          <li key={i} className="flex items-center gap-10 whitespace-nowrap">
            <span>{it}</span>
            <span className="text-brand/70">{separator}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
