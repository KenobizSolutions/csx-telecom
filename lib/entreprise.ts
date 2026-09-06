/**
 * Données d'entreprise partagées par toutes les données structurées du site.
 *
 * Source : les trois fiches d'établissement Google de CSX Telecom (Cahors,
 * Montauban, Gourdon), relevées le 27/07/2026. Le balisage n'a de valeur que
 * s'il dit exactement la même chose que les fiches : toute modification ici
 * doit être répercutée sur les fiches, et réciproquement.
 *
 * Un seul exemplaire de chaque bloc, importé partout, pour qu'aucune page ne
 * puisse diverger des autres.
 */

export const SITE = "https://www.csx-telecom.fr";
export const TELEPHONE = "+33582730360";
export const EMAIL = "contact@csx.fr";

/**
 * Horaires d'ouverture, identiques sur les trois établissements.
 *
 * Deux plages distinctes par jour : la coupure du midi doit rester visible.
 * Les fusionner en 08:30–17:30 annoncerait une ouverture continue qui n'existe
 * pas, et Google afficherait de faux horaires.
 *
 * Samedi et dimanche : aucune entrée. En schema.org l'absence de jour vaut
 * fermeture ; une plage 00:00–00:00 serait interprétée comme une ouverture.
 */
export const HORAIRES = [
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:30",
    closes: "12:00",
  },
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "13:30",
    closes: "17:30",
  },
] as const;

/**
 * Profils officiels de l'entreprise (sameAs).
 *
 * Ces deux profils sont également déclarés sur les trois fiches
 * d'établissement Google : c'est cette concordance qui donne sa valeur au
 * sameAs. N'y ajouter qu'un profil effectivement revendiqué par l'entreprise.
 *
 * ⚠ La page Facebook « CSXparticuliers » appartient à une autre entité du
 * groupe et ne doit jamais figurer ici : elle rattacherait au site une entité
 * distincte.
 *
 * L'URL share.google est le lien de partage de la fiche d'établissement
 * fourni par l'entreprise. À remplacer par l'URL canonique Google Maps de la
 * fiche lorsqu'elle aura été relevée.
 */
export const PROFILS = [
  "https://fr.linkedin.com/company/csx-telecom",
  "https://www.facebook.com/CSXTelecom",
  "https://share.google/USNDlzYinzAvses3B",
] as const;

/**
 * Établissements réels, confirmés chacun par sa fiche d'établissement Google.
 *
 * Source unique : le nœud Organization du layout les expose en `location`, et
 * les pages villes y prennent l'adresse de leur LocalBusiness. Une page ville
 * absente de cette table déclare le siège — elle couvre une zone sans y avoir
 * d'adresse propre, et en inventer une serait une fausse information.
 */
export type Etablissement = {
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

export const SIEGE: Etablissement = {
  name: "CSX Telecom",
  url: SITE,
  address: {
    "@type": "PostalAddress",
    // Graphie de référence, identique à la fiche Google, au pied de page et aux
    // mentions légales : sans accent sur « Emilien ». Google abrège « Place »
    // en « Pl. » à l'affichage, c'est sa convention de rendu, pas une autre
    // adresse — la forme développée reste alignée sur le contenu visible.
    streetAddress: "1 Place Emilien Imbert",
    postalCode: "46000",
    addressLocality: "Cahors",
    addressRegion: "Occitanie",
    addressCountry: "FR",
  },
};

export const ETABLISSEMENTS: Record<string, Etablissement> = {
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

/** Les trois établissements, pour le `location` du nœud Organization. */
export const ETABLISSEMENTS_TOUS: Etablissement[] = [
  SIEGE,
  ETABLISSEMENTS.montauban,
  ETABLISSEMENTS.gourdon,
];
