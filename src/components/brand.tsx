/* Brand marks recreated as crisp SVG — echoes the real 246 globe logo
   (red field, blue meridians, "246") without hotlinking any asset.
   Fully theme-adaptive via currentColor / props. */

export function GlobeMotif({
  className = "",
  stroke = "currentColor",
  strokeWidth = 1,
}: {
  className?: string;
  stroke?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      fill="none"
      aria-hidden="true"
      stroke={stroke}
      strokeWidth={strokeWidth}
    >
      <circle cx="100" cy="100" r="96" />
      {/* latitudes */}
      <ellipse cx="100" cy="100" rx="96" ry="34" />
      <ellipse cx="100" cy="100" rx="96" ry="66" />
      <line x1="4" y1="100" x2="196" y2="100" />
      {/* longitudes */}
      <ellipse cx="100" cy="100" rx="34" ry="96" />
      <ellipse cx="100" cy="100" rx="66" ry="96" />
      <line x1="100" y1="4" x2="100" y2="196" />
    </svg>
  );
}

export function Logo({
  className = "",
  tone = "ink",
}: {
  className?: string;
  tone?: "ink" | "light";
}) {
  const text = tone === "light" ? "#ffffff" : "var(--color-ink)";
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-[7px] bg-brand text-white shadow-[0_4px_14px_rgba(225,27,34,0.35)]">
        <GlobeMotif
          className="absolute inset-0 h-full w-full text-white/45"
          strokeWidth={1.2}
        />
        <span
          className="relative font-display text-[13px] font-bold leading-none tracking-tight"
          style={{ letterSpacing: "-0.04em" }}
        >
          246
        </span>
      </span>
      <span
        className="font-display text-[15px] font-semibold leading-none tracking-tight"
        style={{ color: text }}
      >
        Impex
      </span>
    </span>
  );
}
