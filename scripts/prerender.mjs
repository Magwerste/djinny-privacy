// Injects the server-rendered app into dist/index.html so crawlers and first paint get real HTML.
// Runs after `vite build` (client) and `vite build --ssr` (dist-server/entry-server.js).
import { readFile, rm, writeFile } from "node:fs/promises";
import { pathToFileURL } from "node:url";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const htmlPath = path.join(root, "dist", "index.html");
const serverDir = path.join(root, "dist-server");

const { render } = await import(pathToFileURL(path.join(serverDir, "entry-server.js")).href);
const template = await readFile(htmlPath, "utf8");

const marker = '<div id="root"></div>';
if (!template.includes(marker)) throw new Error(`prerender: ${marker} not found in dist/index.html`);

await writeFile(htmlPath, template.replace(marker, `<div id="root">${render()}</div>`));
await rm(serverDir, { recursive: true, force: true });
console.log("prerendered dist/index.html");
