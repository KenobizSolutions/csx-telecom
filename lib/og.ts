import type { Metadata } from "next";

const SITE_URL = "https://www.csx-telecom.fr";

/**
 * Image de partage par défaut (générée par `app/opengraph-image.tsx`).
 * Un bloc `openGraph` défini par une page REMPLACE celui du layout : l'image
 * de fichier de la racine n'est alors plus héritée, et la page sortait sans
 * og:image (24 alertes Ahrefs « Open Graph tags incomplete », nov. 2026).
 */
export const OG_IMAGE = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "CSX Telecom — Opérateur télécom indépendant pour les entreprises",
};

/**
 * Bloc Open Graph d'une page avec og:url = URL canonique.
 * Sans lui, chaque page héritait tel quel du bloc du layout (og:url, og:title
 * et og:description de l'accueil) : 18 alertes Ahrefs « Open Graph URL not
 * matching canonical », sept. 2026. og:title / og:description sont complétés
 * par Next à partir du title / description de la page.
 */
export function pageOpenGraph(path: string): NonNullable<Metadata["openGraph"]> {
  return {
    type: "website",
    locale: "fr_FR",
    siteName: "CSX Telecom",
    url: `${SITE_URL}${path === "/" ? "" : path}`,
    images: [OG_IMAGE],
  };
}
