/* Prefix a local (public/) asset path with the deploy base path so plain
   <img src="/media/..."> resolves correctly on GitHub Pages project sites
   (served from /<repo>). Empty for root deploys. */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const asset = (path: string) => `${BASE_PATH}${path}`;
