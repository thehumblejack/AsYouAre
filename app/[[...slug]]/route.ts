import { readFile, stat } from "node:fs/promises";
import path from "node:path";
import { NextRequest } from "next/server";
import { transformFramerHtml } from "../lib/framer-transform";

// Directory holding the exported Framer HTML pages.
const CONTENT_DIR = path.join(process.cwd(), "content");

// Cache transformed HTML keyed by file path, invalidated on file mtime change.
const cache = new Map<string, { mtimeMs: number; html: string }>();

/**
 * Catch-all handler that serves the static Framer pages.
 *
 * The pages link to each other with relative paths that mirror the folder
 * layout (e.g. "about-us.html", "blog/post.html", "../index.html"), so we
 * serve each file at a URL matching its location. That keeps every internal
 * link working without rewriting any HTML. Each page is post-processed (see
 * transformFramerHtml) to strip Framer/promo branding and inject the video
 * widget.
 */
export async function GET(
  _req: NextRequest,
  ctx: { params: Promise<{ slug?: string[] }> }
) {
  const { slug } = await ctx.params;
  const parts = slug ?? [];

  // Resolve the requested path to a file inside content/.
  let rel = parts.join("/");
  if (rel === "" || rel === "index") {
    rel = "index.html";
  } else if (!path.extname(rel)) {
    // Allow clean URLs like /about-us in addition to /about-us.html
    rel = `${rel}.html`;
  }

  const filePath = path.join(CONTENT_DIR, rel);

  // Guard against path traversal outside the content directory.
  if (!filePath.startsWith(CONTENT_DIR + path.sep)) {
    return new Response("Not found", { status: 404 });
  }

  try {
    const { mtimeMs } = await stat(filePath);
    let entry = cache.get(filePath);
    if (!entry || entry.mtimeMs !== mtimeMs) {
      const raw = await readFile(filePath, "utf8");
      entry = { mtimeMs, html: transformFramerHtml(raw) };
      cache.set(filePath, entry);
    }
    return new Response(entry.html, {
      status: 200,
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  } catch {
    return new Response("Not found", { status: 404 });
  }
}
