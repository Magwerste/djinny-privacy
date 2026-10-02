import path from "node:path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig, type Plugin } from "vite";
import { APP_ID, PLAY_URL } from "./site.config";

// Public origin of the deployed site, used for canonical/OG tags, robots.txt and sitemap.xml.
// Override at build time after the repo rename or when moving to a custom domain:
//   SITE_URL=https://example.com npm run build
const SITE_URL = (process.env.SITE_URL || "https://magwerste.github.io/djinny-app").replace(/\/+$/, "");

/** Fills %SITE_URL% / %PLAY_URL% in index.html and emits robots.txt + sitemap.xml. */
function seo(): Plugin {
  const replacements: Record<string, string> = {
    "%SITE_URL%": SITE_URL,
    "%PLAY_URL%": PLAY_URL,
    "%APP_ID%": APP_ID,
  };
  return {
    name: "djinny-seo",
    transformIndexHtml: (html) =>
      Object.entries(replacements).reduce((out, [k, v]) => out.replaceAll(k, v), html),
    generateBundle() {
      const lastmod = new Date().toISOString().slice(0, 10);
      this.emitFile({
        type: "asset",
        fileName: "robots.txt",
        source: `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`,
      });
      this.emitFile({
        type: "asset",
        fileName: "sitemap.xml",
        source: `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>${SITE_URL}/</loc><lastmod>${lastmod}</lastmod><priority>1.0</priority></url>
  <url><loc>${SITE_URL}/privacy/</loc><lastmod>${lastmod}</lastmod><priority>0.3</priority></url>
  <url><loc>${SITE_URL}/delete-account.html</loc><lastmod>${lastmod}</lastmod><priority>0.2</priority></url>
</urlset>
`,
      });
    },
  };
}

export default defineConfig({
  // Relative asset URLs so the build works under a GitHub Pages project path or a custom domain.
  base: "./",
  plugins: [react(), tailwindcss(), seo()],
  resolve: { alias: { "@": path.resolve(import.meta.dirname, "src") } },
});
