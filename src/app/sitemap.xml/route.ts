import { NextResponse } from "next/server";
import sitemap from "../sitemap";

export async function GET() {
  const routes = await sitemap();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `
  <url>
    <loc>${route.url}</loc>
    <lastmod>${route.lastModified.toISOString()}</lastmod>
    ${
      route.changeFrequency
        ? `<changefreq>${route.changeFrequency}</changefreq>`
        : ""
    }
    ${route.priority ? `<priority>${route.priority}</priority>` : ""}
  </url>`
  )
  .join("")}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
