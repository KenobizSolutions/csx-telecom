/**
 * Valeurs de la liste « Votre besoin » du formulaire de contact.
 *
 * Module séparé de lib/antispam.ts à dessein : le formulaire (composant
 * client) l'importe, et les règles du tri anti-démarchage ne doivent pas
 * partir dans le code envoyé au navigateur, où un automate pourrait les lire.
 */
export const BESOINS = [
  "Standard téléphonique IP / IPBX",
  "VoIP / téléphonie cloud",
  "Internet professionnel / fibre",
  "Agents vocaux IA",
  "Migration réseau cuivre (RTC)",
  "Autre demande",
] as const;
