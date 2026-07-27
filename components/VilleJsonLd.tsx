/**
 * Données structurées communes aux pages villes.
 *
 * Chaque page ville porte le MÊME @graph : un LocalBusiness (l'entreprise,
 * avec le NAP de référence) et un Service (la prestation couvrant la ville).
 * Seul `areaServed` distingue les pages.
 *
 * NAP de référence — doit rester identique au pied de page, à la fiche Google
 * Business Profile et aux annuaires. Toute divergence affaiblit le SEO local.
 */

const SITE = "https://www.csx-telecom.fr";

/**
 * TODO — adresses des agences : lorsque les adresses postales exactes des
 * agences (Montauban, Gourdon, Bayonne) seront connues, remplacer `address`
 * par l'adresse de l'agence concernée sur la page correspondante, et
 * envisager un nœud LocalBusiness distinct par établissement (chacun avec son
 * propre @id). En attendant, les six pages déclarent l'adresse du siège et se
 * différencient uniquement par `areaServed` : déclarer une adresse locale
 * inventée serait une fausse information et un risque de pénalité.
 */
const SIEGE = {
  "@type": "PostalAddress",
  streetAddress: "1 place Émilien Imbert",
  postalCode: "46000",
  addressLocality: "Cahors",
  addressCountry: "FR",
} as const;

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
        name: "CSX Telecom",
        url: SITE,
        telephone: "+33582730360",
        email: "contact@csx.fr",
        address: SIEGE,
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
