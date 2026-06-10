# SEO-CHANGELOG — Optimisation SEO B2B csx-telecom.fr

Branche : `seo-optimisation`. Travaux réalisés sur un site **en production** (Next.js 16 / App Router), 100 % en français, sans déploiement automatique.

## Règles appliquées (validées avec le client)

- **Aucune référence / témoignage client** (aucun n'a été fourni → aucun inventé).
- **Aucune marque produit citée** (IPBX, éditeurs, modèles d'IA). Argument retenu : « les technologies les plus éprouvées du marché — ce qui compte, c'est une solution qui fonctionne et un support réactif ».
- **Aucun prix affiché** (logique « audit gratuit / devis sur mesure »).
- **Pas de ciblage santé / public** (médical, dentaire, mairie) → étape « pages verticales IA » **abandonnée**.
- **Pas de nouvelles villes** (Figeac / Castelsarrasin / Moissac abandonnées) → focus **Cahors, Montauban, Caussade**.
- Corrections factuelles : **17 ans** (au lieu de 15), **+200 clients** conservé, **agence de Toulouse retirée** (Toulouse reste *zone d'intervention*), **agence de Gourdon ajoutée**. Agences = Cahors (siège), Montauban, Gourdon, Bayonne.
- NAP conservé : 05 82 73 03 60 · contact@csx.fr · 1 Place Emilien Imbert, 46000 Cahors.

## Pages créées

| Page | URL | Mots-clés ciblés |
|------|-----|------------------|
| VoIP & téléphonie cloud | `/voip-telephonie-cloud` | téléphonie cloud, voip entreprise, solution voip entreprise |

## Articles de blog créés (`app/blog/data.ts`, rendus via `/blog/[slug]`)

| Slug | Mots-clés |
|------|-----------|
| `ipbx-vs-centrex-quelle-solution` | ipbx, centrex, standard téléphonique entreprise |
| `trunk-sip-explication` | trunk sip, sip trunk, migration RTC |
| `standard-telephonique-ia-vs-humain` | standard téléphonique ia, accueil téléphonique |
| `migration-rtc-checklist` | fin du RTC, migration IP, portage |

## Pages optimisées (on-page)

| Page | Modifications | Mots-clés ciblés |
|------|---------------|------------------|
| `/standard-telephonique-ipbx` | Titre + section éditoriale H2/H3 (IPBX, trunk SIP, centrex, téléphonie IP entreprise), maillage VoIP/IA | ipbx, trunk sip, sip trunk, centrex, standard téléphonique entreprise, téléphonie ip entreprise |
| `/agents-virtuels-ia` | Titre + description + **correction des fausses intégrations natives** (interfaçage « selon audit »), section éditoriale H2 | agent vocal ia, standard téléphonique ia, agent virtuel vocal ia, accueil téléphonique entreprise, accueil téléphonique externalisé, accueil téléphonique automatique ia, standard téléphonique virtuel ia |
| `/internet-professionnel` | Titre + section éditoriale H2 (fibre entreprise, SDSL/5G/Starlink, MPLS, box pro, GTR) | internet entreprise, fibre entreprise, fibre optique entreprise, fibre pro, box internet entreprise, internet pour entreprise |
| `/cahors` | Section « services × ville » (4 H2), maillage interne, 17 ans | standard téléphonique entreprise Cahors, opérateur internet pro Cahors, IPBX/téléphonie IP Cahors, accueil téléphonique IA Cahors |
| `/montauban` | Section « services × ville » (4 H2), maillage interne, 17 ans, retrait mention équipe Toulouse | idem, Montauban (82) |
| `/caussade` | Section « services × ville » (4 H2), maillage interne, 17 ans | idem, Caussade / Quercy Blanc (82) |
| `/toulouse` | **Reframe** « équipe locale » → « zone d'intervention couverte depuis nos agences », JSON-LD `Service` (provider = siège Cahors), 17 ans | opérateur télécom Toulouse (31) — sans claim d'agence |
| `/gourdon`, `/bayonne-biarritz` | Correction « 17 ans » | — |
| `/` (accueil) | 17 ans, équipes Cahors/Montauban/Gourdon/Bayonne, priorité villes focus | — |
| `/a-propos` | 17 ans, agences (Toulouse→Gourdon) | — |

## SEO technique transverse

- **`Organization` JSON-LD global** ajouté dans `app/layout.tsx` (logo, ARCEP, NAP, `areaServed` 46/82/31/64, `sameAs` = fiche Google Business Profile, `contactPoint`).
- **Open Graph / Twitter** : métadonnées globales (`openGraph`, `twitter` summary_large_image) dans `layout.tsx` + **image de partage générée** `app/opengraph-image.tsx` (carte de marque CSX — aucun visuel dédié fourni, le logo/identité est repris). Appliquée à toutes les pages.
- **`sitemap.xml`** : ajout de `/voip-telephonie-cloud` ; les 4 nouveaux articles sont inclus automatiquement via `data.ts` ; `lastModified` rafraîchi.
- **Maillage interne** : page VoIP ajoutée au menu (`Header`) et au footer ; liens contextuels services↔villes↔blog ; chaque article de blog pointe vers sa page service (mapping par catégorie dans `/blog/[slug]`).
- **`robots.txt`** vérifié (OK), **canonicals** auto-référentes présentes sur toutes les pages (dont la nouvelle).
- **`public/llms.txt`** mis à jour (17 ans, VoIP, 4 nouveaux articles).
- Données structurées **`FAQPage`** déjà présentes sur les pages services/villes (conservées) ; nouvelle page VoIP livrée avec `Service` + `FAQPage`.

## Passe d'audit complémentaire (revue qualité)

**Cohérence factuelle & SEO local**
- **Horaires unifiés partout** (footer, contact, blog, llms.txt, JSON-LD) sur la
  vraie référence : Lun–Jeu 8h30–12h / 13h30–17h30, Ven 8h30–12h / 13h30–17h.
  Trois versions contradictoires coexistaient auparavant.
- **JSON-LD consolidé** : un seul nœud canonique `#organization`
  (`Organization` + `LocalBusiness`, avec NAP, horaires, logo, sameAs) émis par
  le layout ; les pages accueil / contact / à-propos s'y réfèrent par `@id` au
  lieu de dupliquer des données divergentes.
- **Caussade** : `LocalBusiness` (adresse locale fictive) → `Service` fourni par
  le siège, comme Toulouse (pas d'agence sur place).
- **Titres villes raccourcis** (≤ 60 caractères avec le suffixe) pour éviter la
  troncature en SERP.
- `llms.txt` : URLs harmonisées en `https://www.csx-telecom.fr` (canonique).

**Blog**
- Les 3 slugs à page statique dédiée ne sont plus pré-générés une 2ᵉ fois par la
  route dynamique `[slug]` (note explicative dans `data.ts`).
- Couleurs de marque en dur (#1515DC…) remplacées par les variables CSS dans les
  3 pages statiques ; couleur de badge ajoutée pour « Internet professionnel ».
- Tableau comparatif : « Connecteurs natifs disponibles » → « Possible selon la
  solution choisie » (cohérent avec la règle « aucune intégration native promise »).

**Accessibilité & divers**
- Émojis décoratifs marqués `aria-hidden` (icônes de cartes, pictos de titres,
  émojis de boutons) sur tout le site.
- Drawer mobile : focus envoyé au menu à l'ouverture, Tab cyclé à l'intérieur,
  focus rendu au bouton burger à la fermeture (`aria-controls` ajouté).
- Footer : titres de colonnes `<h6>` → `<p>` (hiérarchie de titres) ; graisse
  600 (`font-semibold`, non chargée pour Aspekta) remplacée par `font-[550]`.
- En-têtes de sécurité ajoutés dans `next.config.ts` (nosniff, X-Frame-Options,
  Referrer-Policy, HSTS, Permissions-Policy — micro non restreint pour le widget
  vocal).

## Vérifications

- `npm run build` : ✅ TypeScript clean.
- Garde-fous (grep) : ✅ aucune marque produit, aucun prix chiffré, aucune référence client, plus aucune mention « 15 ans » ni d'agence Toulouse ; horaires identiques partout ; un seul nœud `#organization`.
