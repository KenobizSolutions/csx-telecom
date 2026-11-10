# csx-telecom.fr

Site vitrine B2B de CSX Telecom (opérateur télécom, Cahors) — Next.js (App Router), déployé sur Vercel à chaque merge sur `main`.

## Commandes

```bash
npm ci
npm run dev     # développement, http://localhost:3000
npm run build   # build de production
npm run lint
```

## Repères

- `lib/entreprise.ts` — source unique : NAP, horaires, établissements, profils officiels. Doit rester identique aux fiches d'établissement Google.
- `components/VilleJsonLd.tsx` — données structurées des pages villes.
- `app/contact/actions.ts` — envoi du formulaire via Resend ; `lib/antispam.ts` — tri anti-démarchage.
- `components/SteeveWidget*.tsx` — bulle de l'agent vocal ElevenLabs (l'agent se configure côté ElevenLabs).
- `app/sitemap.ts` — dates `lastmod` à mettre à jour quand une page change.
- `public/llms.txt` — présentation du site pour les assistants IA ; à tenir à jour avec les pages et les horaires.

## Variables d'environnement (Vercel)

`RESEND_API_KEY_TELECOM` (requise), `CONTACT_TO`, `CONTACT_FROM` (facultatives).

## Règles éditoriales

Pas de référence client, pas de marque citée, pas de prix, pas d'adresse d'agence non confirmée. Détail dans `SEO-CHANGELOG.md`.
