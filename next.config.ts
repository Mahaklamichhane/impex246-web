import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML/CSS/JS export — deployable to any static host (cPanel,
  // Netlify, GitHub Pages, S3…). Produces an `out/` folder on build.
  output: "export",

  // Emit /path/index.html so links resolve without a server rewrite —
  // safest for classic static/shared hosting.
  trailingSlash: true,

  // No next/image is used (visuals are inline SVG/CSS), but keep this
  // so any future <Image> still works under static export.
  images: { unoptimized: true },
};

export default nextConfig;
