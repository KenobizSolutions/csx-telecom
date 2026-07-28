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
