/**
 * Données structurées communes aux pages villes.
 *
 * Chaque page ville porte le MÊME @graph : un LocalBusiness (l'établissement
 * qui dessert la ville) et un Service (la prestation couvrant la zone).
 *
 * NAP de référence — doit rester identique au pied de page, aux fiches
 * d'établissement Google et aux annuaires. Toute divergence affaiblit le SEO
 * local.
 */

import { EMAIL, ETABLISSEMENTS, HORAIRES, SIEGE, SITE, TELEPHONE } from "@/lib/entreprise";

export type Zone = {
  /** Ville mise en avant par la page. */
  ville: string;
  /** Département couvert (nom complet, ex. « Tarn-et-Garonne »). */
  departement: string;
  /** Communes ou zones supplémentaires couvertes (facultatif). */
  autresVilles?: string[];
};

export function VilleJsonLd({
  slug,
  zone,
  description,
}: {
  /** Segment d'URL de la page ville, ex. "cahors". */
  slug: string;
  zone: Zone;
  /** Description du service pour cette zone. */
  description: string;
}) {
  const url = `${SITE}/${slug}`;
  const etablissement = ETABLISSEMENTS[slug] ?? SIEGE;

  const areaServed = [
    { "@type": "City", name: zone.ville },
    ...(zone.autresVilles ?? []).map((v) => ({ "@type": "City", name: v })),
    { "@type": "AdministrativeArea", name: zone.departement },
  ];

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${url}#business`,
        name: etablissement.name,
        url: etablissement.url,
        telephone: TELEPHONE,
        email: EMAIL,
        address: etablissement.address,
        openingHoursSpecification: HORAIRES,
        areaServed,
        // TODO — aggregateRating : à ajouter lorsque la fiche Google comptera
        // assez d'avis. Avec 2 avis seulement, l'afficher serait
        // contre-productif.
      },
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: `Opérateur télécom pour entreprises à ${zone.ville}`,
        serviceType: "Téléphonie IP, internet professionnel et agents IA",
        description,
        url,
        provider: { "@id": `${url}#business` },
        areaServed,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
