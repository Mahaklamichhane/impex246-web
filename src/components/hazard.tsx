/* Full-bleed animated hazard stripe — used as a bold section divider. */
export function HazardDivider({ className = "" }: { className?: string }) {
  return <div className={`hazard h-2.5 w-full ${className}`} aria-hidden />;
}
