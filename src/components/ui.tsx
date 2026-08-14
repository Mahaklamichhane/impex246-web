"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import {
  useRef,
  useState,
  type ReactNode,
  type MouseEvent,
} from "react";

/* ---------------------------------------------------------------
   MagneticButton — element drifts toward the cursor, springs back.
   Wraps any child; disabled on touch / reduced-motion.
   --------------------------------------------------------------- */
export function Magnetic({
  children,
  strength = 0.35,
  className,
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (e: MouseEvent) => {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - (rect.left + rect.width / 2)) * strength;
    const y = (e.clientY - (rect.top + rect.height / 2)) * strength;
    setPos({ x, y });
  };
  const reset = () => setPos({ x: 0, y: 0 });

  return (
    <motion.span
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 250, damping: 18, mass: 0.4 }}
      className={`inline-block ${className ?? ""}`}
    >
      {children}
    </motion.span>
  );
}

/* ---------------------------------------------------------------
   CTA button — primary (solid), secondary (outline/ghost).
   Arrow slides on hover; subtle fill sweep.
   --------------------------------------------------------------- */
type CTAProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost";
  tone?: "ink" | "light";
  external?: boolean;
  arrow?: boolean;
  className?: string;
};

export function CTA({
  href,
  children,
  variant = "primary",
  tone = "ink",
  external,
  arrow = true,
  className = "",
}: CTAProps) {
  const base =
    "group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full px-6 py-3.5 text-[0.94rem] font-medium transition-colors duration-500 will-change-transform";

  const styles: Record<string, string> = {
    primary:
      "bg-brand text-white hover:text-white [--sweep:theme(colors.brand-700)]",
    outline:
      tone === "light"
        ? "border border-white/30 text-white hover:text-ink"
        : "border border-ink/20 text-ink hover:text-white",
    ghost:
      tone === "light"
        ? "text-white/90 hover:text-white"
        : "text-ink/80 hover:text-ink",
  };

  const sweep =
    variant === "primary"
      ? "bg-brand-700"
      : variant === "outline"
        ? tone === "light"
          ? "bg-white"
          : "bg-ink"
        : "bg-transparent";

  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`${base} ${styles[variant]} ${className}`}
    >
      {variant !== "ghost" && (
        <span
          aria-hidden
          className={`absolute inset-0 -z-0 ${sweep} translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0`}
        />
      )}
      <span className="relative z-10">{children}</span>
      {arrow && (
        <ArrowUpRight
          className="relative z-10 h-[1.05em] w-[1.05em] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          strokeWidth={1.75}
        />
      )}
    </a>
  );
}
