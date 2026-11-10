import type { MetadataRoute } from "next";
import { articles } from "./blog/data";

const BASE = "https://www.csx-telecom.fr";

// Dernière modification RÉELLE de chaque page (mise à jour manuellement à
// chaque évolution de contenu). Ne jamais mettre une date identique partout :
// un lastmod uniforme à chaque build est ignoré par Google/Bing.
const LASTMOD: Record<string, string> = {
  "/":                            "2026-10-05",
  "/standard-telephonique-ipbx":  "2026-09-23",
  "/voip-telephonie-cloud":       "2026-09-23",
  "/internet-professionnel":      "2026-09-23",
  "/agents-virtuels-ia":          "2026-09-23",
  "/a-propos":                    "2026-09-23",
  "/contact":                     "2026-09-23",
  "/mentions-legales":            "2026-09-23",
  "/politique-confidentialite":   "2026-09-23",
  "/blog":                        "2026-09-23",
  "/toulouse":                    "2026-09-23",
  "/montauban":                   "2026-10-05",
  "/cahors":                      "2026-09-23",
  "/gourdon":                     "2026-09-23",
  "/caussade":                    "2026-09-23",
  "/bayonne-biarritz":            "2026-10-05",
};

// Articles à page statique dédiée : date de dernière mise à jour éditoriale.
const STANDALONE_ARTICLES: Record<string, string> = {
  "fin-reseau-cuivre-rtc":                     "2026-09-23",
  "standard-ip-vs-standard-classique":         "2026-09-23",
  "internet-professionnel-vs-box-particulier": "2026-09-23",
};

export default function sitemap(): MetadataRoute.Sitemap {
  const entry = (
    path: string,
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"],
    priority: number
  ): MetadataRoute.Sitemap[number] => ({
    // Racine sans slash final : c'est la forme que Next.js émet dans la
    // balise canonique (il normalise "/" en URL vide). Les deux formes
    // désignent la même URL, mais on les aligne pour éviter toute ambiguïté
    // entre le sitemap et la canonique.
    url: `${BASE}${path === "/" ? "" : path}`,
    lastModified: new Date(LASTMOD[path]),
    changeFrequency,
    priority,
  });

  const staticPages: MetadataRoute.Sitemap = [
    // Pages principales
    entry("/", "weekly", 1.0),
    entry("/standard-telephonique-ipbx", "monthly", 0.9),
    entry("/voip-telephonie-cloud", "monthly", 0.9),
    entry("/internet-professionnel", "monthly", 0.9),
    entry("/agents-virtuels-ia", "monthly", 0.9),
    // Pages institutionnelles
    entry("/a-propos", "monthly", 0.7),
    entry("/contact", "monthly", 0.8),
    entry("/mentions-legales", "yearly", 0.3),
    entry("/politique-confidentialite", "yearly", 0.3),
    // Blog
    entry("/blog", "weekly", 0.7),
    // Zones géographiques
    entry("/toulouse", "monthly", 0.8),
    entry("/montauban", "monthly", 0.8),
    entry("/cahors", "monthly", 0.8),
    entry("/gourdon", "monthly", 0.7),
    entry("/caussade", "monthly", 0.7),
    entry("/bayonne-biarritz", "monthly", 0.8),
  ];

  const standaloneArticles: MetadataRoute.Sitemap = Object.entries(
    STANDALONE_ARTICLES
  ).map(([slug, lastmod]) => ({
    url: `${BASE}/blog/${slug}`,
    lastModified: new Date(lastmod),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const blogPages: MetadataRoute.Sitemap = articles
    .filter((a) => !(a.slug in STANDALONE_ARTICLES))
    .map((article) => ({
      url: `${BASE}/blog/${article.slug}`,
      lastModified: new Date(article.date),
      changeFrequency: "monthly",
      priority: 0.6,
    }));

  return [...staticPages, ...standaloneArticles, ...blogPages];
}
