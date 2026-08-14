import type { NextConfig } from "next";

// For GitHub Pages project sites the app is served from /<repo>. Set
// NEXT_PUBLIC_BASE_PATH=/impex246-web in that build; leave empty for
// root deploys (local dev, custom domain, cPanel).
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  // Static HTML/CSS/JS export — deployable to any static host.
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  ...(basePath ? { basePath, assetPrefix: basePath } : {}),
};

export default nextConfig;
