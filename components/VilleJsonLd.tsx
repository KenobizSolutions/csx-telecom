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

import { EMAIL, HORAIRES, SITE, TELEPHONE } from "@/lib/entreprise";

type Etablissement = {
  /** Raison sociale telle qu'elle figure sur la fiche Google correspondante. */
  name: string;
  /** URL représentant l'établissement. */
  url: string;
  address: {
    "@type": "PostalAddress";
    streetAddress: string;
    postalCode: string;
    addressLocality: string;
    addressRegion: string;
    addressCountry: string;
  };
};

/** Siège social. Sert de repli pour les pages qui couvrent une zone sans y
 *  disposer d'une adresse propre. */
const SIEGE: Etablissement = {
  name: "CSX Telecom",
  url: SITE,
  address: {
    "@type": "PostalAddress",
    // Graphie de référence, identique à la fiche d'établissement Google, au
    // pied de page et aux mentions légales : sans accent sur « Emilien ».
    // Google abrège « Place » en « Pl. » à l'affichage, c'est sa convention de
    // rendu et non une autre adresse — la forme développée est conservée pour
    // rester identique au contenu visible du site.
    streetAddress: "1 Place Emilien Imbert",
    postalCode: "46000",
    addressLocality: "Cahors",
    addressRegion: "Occitanie",
    addressCountry: "FR",
  },
};

/**
 * Établissements disposant d'une adresse postale propre, confirmée par leur
 * fiche d'établissement Google.
 *
 * Les pages absentes de cette table (Cahors, Toulouse, Caussade,
 * Bayonne–Biarritz) déclarent le siège : elles couvrent une zone sans y avoir
 * d'adresse à elles et se distinguent uniquement par `areaServed`. Y déclarer
 * une adresse locale inventée serait une fausse information doublée d'un
 * risque de pénalité — n'ajouter une entrée ici qu'une fois l'adresse
 * confirmée par la fiche Google de l'établissement.
 */
const ETABLISSEMENTS: Record<string, Etablissement> = {
  montauban: {
    name: "CSX Telecom Montauban",
    url: `${SITE}/montauban`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "1270 Avenue de Toulouse",
      postalCode: "82000",
      addressLocality: "Montauban",
      addressRegion: "Occitanie",
      addressCountry: "FR",
    },
  },
  gourdon: {
    name: "CSX Telecom Gourdon",
    url: `${SITE}/gourdon`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "35 bis Boulevard Mainiol",
      postalCode: "46300",
      addressLocality: "Gourdon",
      addressRegion: "Occitanie",
      addressCountry: "FR",
    },
  },
};

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
