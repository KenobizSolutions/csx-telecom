import type { MetadataRoute } from "next";
import { articles } from "./blog/data";

const BASE = "https://csx-telecom.fr";
const TODAY = new Date("2026-04-22");

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    // Pages principales
    { url: `${BASE}/`,                            lastModified: TODAY, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE}/standard-telephonique-ipbx`,  lastModified: TODAY, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/internet-professionnel`,       lastModified: TODAY, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/agents-virtuels-ia`,           lastModified: TODAY, changeFrequency: "monthly", priority: 0.9 },
    // Pages institutionnelles
    { url: `${BASE}/a-propos`,                     lastModified: TODAY, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/contact`,                      lastModified: TODAY, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/mentions-legales`,             lastModified: TODAY, changeFrequency: "yearly",  priority: 0.3 },
    // Blog
    { url: `${BASE}/blog`,                         lastModified: TODAY, changeFrequency: "weekly",  priority: 0.7 },
    // Zones géographiques
    { url: `${BASE}/toulouse`,                     lastModified: TODAY, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/montauban`,                    lastModified: TODAY, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/cahors`,                       lastModified: TODAY, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/gourdon`,                      lastModified: TODAY, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/caussade`,                     lastModified: TODAY, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/bayonne-biarritz`,             lastModified: TODAY, changeFrequency: "monthly", priority: 0.8 },
  ];

  const blogPages: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${BASE}/blog/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticPages, ...blogPages];
}
