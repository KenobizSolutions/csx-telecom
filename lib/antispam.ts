/**
 * Tri anti-démarchage du formulaire de contact.
 *
 * Constat (sept.–oct. 2026) : 100 % des demandes reçues par le formulaire
 * étaient du démarchage automatisé — logiciels de « génération de leads »,
 * revente de fichiers B2B, contrefaçons, services Instagram, robots de
 * soumission de formulaires. Toutes partageaient les mêmes traits : texte en
 * anglais, lien dans le message, formules toutes faites (« Hello Csx Telecom
 * Fr Owner »), et souvent un champ « Besoin » corrompu, signe d'un envoi
 * rejoué par script et non saisi dans un navigateur.
 *
 * Principe : aucun signal isolé ne doit écarter un vrai client. Chaque indice
 * ajoute des points ; seule une combinaison d'indices forts écarte la
 * demande. Entre les deux, la demande est livrée mais étiquetée, pour que
 * rien ne soit perdu en cas d'erreur de jugement.
 *
 *   score < SEUIL_SUSPECT  → livrée normalement
 *   score < SEUIL_SPAM     → livrée avec « [Spam probable] » dans l'objet
 *   score ≥ SEUIL_SPAM     → écartée (faux succès + trace dans les logs)
 */

export const SEUIL_SUSPECT = 3;
export const SEUIL_SPAM = 6;

import { BESOINS } from "./besoins";

export { BESOINS };

/** En dessous de ce délai entre l'affichage et l'envoi, aucun humain n'a pu
 *  remplir nom, coordonnées et consentement : c'est un automate. */
export const DELAI_MIN_MS = 2500;

export type Demande = {
  name: string;
  company: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  /** Contenu des champs pièges, invisibles pour un humain. */
  pieges: string[];
  /** Horodatage posé par le navigateur à l'affichage du formulaire
   *  (absent si le JavaScript n'a pas tourné : envoi par script, le plus
   *  souvent). */
  debut: number | null;
  maintenant: number;
};

export type Verdict = {
  niveau: "ok" | "suspect" | "spam";
  score: number;
  raisons: string[];
};

// Mots-outils : un texte français en contient beaucoup, un texte anglais
// presque aucun — et réciproquement. Plus robuste qu'une liste de mots
// « commerciaux », et indépendant du sujet du message.
const MOTS_EN = new Set(
  "the and you your to of is for with that this we our are can will have it on in my just now here more get what how if be at from they their about all would want".split(
    " "
  )
);
const MOTS_FR = new Set(
  "le la les de des du et est pour vous nous une un que qui dans sur avec pas je mon notre votre au aux ce cette bonjour merci nos vos il elle sont avons pouvez serait besoin".split(
    " "
  )
);

/** Formules de démarchage observées ou classiques (anglais et français). */
const FORMULES: RegExp[] = [
  /\b\w[\w\s]{0,40}\bowner\b/i, // « Hello Csx Telecom Fr Owner »
  /\bdear (friend|sir|madam|business owner)\b/i,
  /\bleads?\b|\blead generation\b/i,
  /\bunsubscribe\b|\bopt[- ]out\b|\bemail preferences\b/i,
  /\b(seo|backlinks?|guest posts?|domain authority|first page of google)\b/i,
  /\b(followers|instagram|tiktok|likes)\b/i,
  /\b(database|verified emails?|b2b data|download your data)\b/i,
  /\b(lifetime access|limited (time|seats?)|free trial|launch promo|price is just)\b/i,
  // « automates » seul est aussi un mot français (automates industriels) : on
  // ne retient que la tournure du démarchage.
  /\b(form submissions?|automates? website forms?|automatically submits?)\b/i,
  /\b(web ?design|website redesign|app development|virtual assistant)\b/i,
  /\b(crypto|bitcoin|forex|casino|loan offer)\b/i,
  /netlinking|référencement naturel|première page de google|boostez votre visibilité/i,
  /désinscri|ne plus recevoir/i,
];

const URL_RE = /\bhttps?:\/\/\S+|\bwww\.[a-z0-9-]+\.[a-z]{2,}\S*/gi;

function proportionAnglais(texte: string): { en: number; fr: number } {
  const mots = texte.toLowerCase().match(/[a-zàâäçéèêëîïôöùûüœ']+/g) ?? [];
  let en = 0;
  let fr = 0;
  for (const m of mots) {
    if (MOTS_EN.has(m)) en++;
    if (MOTS_FR.has(m)) fr++;
  }
  return { en, fr };
}

export function evaluerDemande(d: Demande): Verdict {
  const raisons: string[] = [];
  let score = 0;
  const ajoute = (points: number, raison: string) => {
    score += points;
    raisons.push(`${raison} (+${points})`);
  };

  // ── Signaux techniques ──────────────────────────────────────────────────
  // Champ piège rempli : un humain ne le voit pas. Pas éliminatoire à lui
  // seul (un gestionnaire de mots de passe pourrait, rarement, le remplir),
  // mais suffisant avec n'importe quel autre indice.
  if (d.pieges.some((p) => p.trim() !== "")) ajoute(5, "champ piège rempli");

  // Caractère de remplacement U+FFFD : le texte a été envoyé dans un autre
  // encodage que l'UTF-8 du navigateur — un script qui rejoue le formulaire.
  const tout = [d.name, d.company, d.email, d.phone, d.subject, d.message].join(" ");
  if (tout.includes("�")) ajoute(6, "encodage corrompu (envoi par script)");
  else if (d.subject && !(BESOINS as readonly string[]).includes(d.subject))
    ajoute(4, "« besoin » hors de la liste proposée");

  if (d.debut === null) {
    ajoute(2, "formulaire envoyé sans JavaScript");
  } else {
    const ecoule = d.maintenant - d.debut;
    if (ecoule >= 0 && ecoule < DELAI_MIN_MS) ajoute(6, `rempli en ${ecoule} ms`);
  }

  // ── Signaux de contenu ──────────────────────────────────────────────────
  const texte = `${d.message} ${d.company}`;
  const { en, fr } = proportionAnglais(texte);
  // Anglais nettement dominant. Volontairement peu pénalisant seul : un
  // client anglophone installé dans le Lot reste un client.
  if (en >= 5 && en > 2 * fr) ajoute(2, "message en anglais");

  const liens = d.message.match(URL_RE) ?? [];
  if (liens.length >= 2) ajoute(3, `${liens.length} liens dans le message`);
  else if (liens.length === 1) ajoute(2, "lien dans le message");

  let formules = 0;
  for (const re of FORMULES) if (re.test(d.message)) formules++;
  if (formules > 0) ajoute(Math.min(4, formules * 2), `${formules} formule(s) de démarchage`);

  const niveau = score >= SEUIL_SPAM ? "spam" : score >= SEUIL_SUSPECT ? "suspect" : "ok";
  return { niveau, score, raisons };
}
