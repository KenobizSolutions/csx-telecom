import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fin du réseau cuivre RTC : que faire pour votre entreprise ?",
  description:
    "Orange arrête progressivement le réseau téléphonique traditionnel (RTC) sur l'ensemble du territoire. Délais, impacts sur votre entreprise, solutions de migration IP : tout ce qu'il faut anticiper.",
  alternates: { canonical: "https://www.csx-telecom.fr/blog/fin-reseau-cuivre-rtc" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "La fin du réseau cuivre RTC : ce que les entreprises doivent savoir",
  description:
    "Orange arrête progressivement le réseau téléphonique traditionnel RTC. Délais, impacts, solutions de migration vers la téléphonie IP.",
  datePublished: "2026-03-15",
  dateModified: "2026-04-22",
  author: { "@type": "Organization", name: "CSX Telecom" },
  publisher: {
    "@type": "Organization",
    name: "CSX Telecom",
    url: "https://www.csx-telecom.fr",
  },
  url: "https://www.csx-telecom.fr/blog/fin-reseau-cuivre-rtc",
} as const;

const sections = [
  {
    heading: "Qu'est-ce que le réseau cuivre RTC ?",
    body: `Le Réseau Téléphonique Commuté (RTC) est l'infrastructure téléphonique analogique mise en place par France Télécom au siècle dernier. Il repose sur des câbles en cuivre et des centraux téléphoniques physiques qui transmettent la voix sous forme de signaux électriques analogiques.

Ce réseau supporte plusieurs types d'équipements encore très présents en entreprise : les lignes analogiques classiques (T0), les accès numériques T2 et T30 pour les structures plus importantes, les modems fax, les terminaux de paiement par téléphonie filaire, ainsi que certains systèmes d'alarme et d'ascenseurs. Si votre entreprise utilise l'un de ces équipements, elle est directement concernée par la fin du cuivre.`,
  },
  {
    heading: "Pourquoi Orange arrête-t-il le réseau cuivre ?",
    body: `Le réseau cuivre est vieillissant, coûteux à maintenir et techniquement limité face aux besoins actuels des entreprises. La fibre optique offre des débits sans comparaison, une fiabilité supérieure et des coûts d'exploitation bien plus faibles à long terme.

Orange a obtenu de l'ARCEP l'autorisation de fermer progressivement le RTC, zone par zone, jusqu'à son extinction complète prévue à l'horizon 2030. Les premières fermetures de plaques ont débuté en 2023 sur des zones pilotes. Depuis, le calendrier s'accélère : des dizaines de communes basculent chaque trimestre. Dans certaines zones, les entreprises ont reçu des préavis de moins de 18 mois pour migrer.`,
  },
  {
    heading: "Comment savoir si votre commune est concernée — et quand ?",
    body: `Orange publie un calendrier de fermeture du cuivre accessible sur son site. Les "plaques" de fermeture sont définies par commune ou par regroupements de communes. La liste s'allonge régulièrement et le rythme s'accélère depuis 2025.

Pour vérifier si votre adresse est impactée, vous pouvez consulter le portail de l'ARCEP ou contacter directement CSX Telecom pour une vérification gratuite à votre adresse exacte. Certaines entreprises découvrent leur date de coupure avec moins de 12 mois de préavis — anticiper plutôt que subir est toujours préférable.`,
  },
  {
    heading: "Quels équipements sont affectés dans votre entreprise ?",
    body: `La liste est plus longue qu'on ne le pense souvent. En dehors du standard téléphonique lui-même, la fin du cuivre impacte potentiellement :

— Les lignes fax (encore très utilisées dans certains secteurs comme la santé, le notariat, le BTP)
— Les terminaux de paiement par carte reliés à une ligne téléphonique fixe
— Les systèmes d'alarme intrusion et incendie connectés via ligne RTC
— Les ascenseurs équipés de téléphones de secours sur ligne analogique
— Les automates, distributeurs et équipements industriels communicants
— Les lignes de modem pour certains systèmes de télégestion

Chacun de ces équipements nécessite une solution de remplacement spécifique — et certains d'entre eux ont des contraintes réglementaires (alarmes, ascenseurs) qui imposent un prestataire agréé.`,
  },
  {
    heading: "Les solutions de remplacement : téléphonie IP et VoIP",
    body: `La migration vers la téléphonie IP (Voice over IP, VoIP) est la solution de référence pour remplacer les lignes RTC. Concrètement, les appels téléphoniques transitent par internet plutôt que par le réseau cuivre. Les avantages sont nombreux :

— Les numéros de téléphone existants sont conservés grâce au portage de numéros
— La qualité vocale est égale ou supérieure au RTC, dès lors que la connexion internet est correcte
— Les fonctionnalités sont enrichies : transfert d'appel, groupes de sonnerie, messagerie unifiée, intégration avec les outils CRM, etc.
— Les coûts sont souvent inférieurs à l'ancienne offre RTC, notamment pour les appels longue distance

Deux grandes familles de solutions coexistent : le standard cloud hébergé (aucun matériel sur site, accessible depuis n'importe où) et l'IPBX sur site (équipement installé dans vos locaux, plus adapté aux structures qui veulent maîtriser leur installation).`,
  },
  {
    heading: "Le portage de numéros : vos numéros ne changent pas",
    body: `C'est la question la plus fréquente : "Est-ce que je vais perdre mon numéro de téléphone ?" La réponse est non — à condition de s'y prendre correctement.

Le portage de numéros est un droit réglementaire. Tout opérateur doit accepter de libérer vos numéros vers un autre opérateur. CSX Telecom gère le portage directement, sans intermédiaire, depuis nos licences d'opérateur ARCEP. Le processus prend entre 5 et 10 jours ouvrés selon l'opérateur cédant. Pendant cette période, les deux systèmes fonctionnent en parallèle — aucune interruption de service.`,
  },
  {
    heading: "Les erreurs à éviter lors de la migration",
    body: `Plusieurs pièges guettent les entreprises qui gèrent la migration en urgence ou sans accompagnement :

Attendre le dernier moment. Orange peut parfois couper le service avant la date officielle annoncée, notamment en cas de dégradation du réseau local. Une migration précipitée en urgence est toujours plus coûteuse et stressante.

Oublier les équipements périphériques. Migrer le standard sans se préoccuper des alarmes, fax et TPE entraîne des dysfonctionnements critiques après la bascule.

Choisir un opérateur "revendeur" sans maîtrise technique. Certains intégrateurs revendent des offres sans en maîtriser le portage ni la qualité de service. En cas de problème, les délais de résolution peuvent être très longs.

Négliger la qualité de la connexion internet. La téléphonie IP nécessite une connexion stable avec des paramètres QoS (Quality of Service) bien configurés. Sans ces réglages, la qualité vocale peut se dégrader, notamment aux heures de pointe.`,
  },
  {
    heading: "Pourquoi confier la migration à CSX Telecom ?",
    body: `CSX Telecom est un opérateur déclaré ARCEP, ce qui signifie que nous gérons directement les portages, les trunks SIP et la qualité des flux vocaux — sans intermédiaire. Nos techniciens se déplacent à Toulouse, Montauban, Cahors, Bayonne et dans toute la région pour réaliser les installations sur site.

Notre processus de migration comprend : un audit gratuit de votre installation actuelle (lignes, numéros, équipements impactés), une proposition technique et tarifaire sous 48h, le portage de vos numéros sans coupure, l'installation et la configuration du nouveau système, la formation de vos équipes le jour J, et un suivi post-installation.

La migration vers la téléphonie IP est une opportunité, pas seulement une contrainte. C'est l'occasion de moderniser vos communications, d'intégrer des agents IA vocaux, et de réduire vos coûts téléphoniques.`,
  },
];

export default function FinReseauCuivreRTCPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section
        className="relative py-16 md:py-24 text-white"
        style={{ background: "linear-gradient(135deg, #0D0DA8 0%, #1515DC 60%, #29ABE2 100%)" }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Link href="/blog" className="text-white/70 hover:text-white text-sm transition-colors">
              ← Blog
            </Link>
            <span className="text-white/40">·</span>
            <span className="text-sm font-medium px-3 py-1 rounded-full bg-white/20">Téléphonie IP</span>
            <span className="text-white/40">·</span>
            <span className="text-sm opacity-70">5 min de lecture</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight">
            La fin du réseau cuivre RTC : ce que les entreprises doivent savoir
          </h1>
          <p className="text-lg opacity-80 leading-relaxed">
            Orange arrête progressivement le réseau téléphonique traditionnel. Délais, impacts,
            solutions de migration : tout ce qu'il faut anticiper avant d'être coupé sans préavis.
          </p>
          <p className="text-sm opacity-60 mt-4">15 mars 2026 · CSX Telecom</p>
        </div>
      </section>

      {/* CONTENU */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-[1fr_320px] gap-12">
            {/* Article */}
            <article>
              {sections.map((section, i) => (
                <div key={i} className="mb-10">
                  <h2 className="text-2xl font-bold mb-4" style={{ color: "#1515DC" }}>
                    {section.heading}
                  </h2>
                  {section.body.split("\n\n").map((para, j) => (
                    <p key={j} className="text-gray-700 leading-relaxed mb-4">
                      {para}
                    </p>
                  ))}
                </div>
              ))}

              {/* Encart résumé */}
              <div
                className="rounded-2xl p-7 text-white mt-8"
                style={{ background: "linear-gradient(135deg, #1515DC, #0D0DA8)" }}
              >
                <h3 className="text-xl font-bold mb-3">En résumé : les 5 points clés</h3>
                <ul className="space-y-2 text-sm opacity-90">
                  {[
                    "La fin du réseau cuivre RTC est programmée d'ici 2030, avec des fermetures déjà en cours.",
                    "Tous les équipements reliés au cuivre sont concernés : standard, fax, alarmes, TPE.",
                    "Le portage de numéros garantit que vos numéros ne changent pas.",
                    "La migration vers l'IP est une opportunité de modernisation, pas une contrainte.",
                    "Anticiper évite les situations d'urgence coûteuses et les coupures non planifiées.",
                  ].map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold">
                        {i + 1}
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-6">
              <div
                className="rounded-2xl p-6 text-white sticky top-4"
                style={{ background: "#0D0DA8" }}
              >
                <h3 className="font-bold text-lg mb-3">Votre migration, notre expertise</h3>
                <p className="text-sm opacity-80 leading-relaxed mb-5">
                  CSX Telecom gère des centaines de migrations depuis le réseau cuivre.
                  Audit gratuit, portage de numéros, zéro coupure.
                </p>
                <Link
                  href="/contact"
                  className="block text-center px-5 py-3 rounded-lg font-bold text-white hover:opacity-90 transition-all"
                  style={{ background: "#29ABE2" }}
                >
                  Demander un audit gratuit
                </Link>
              </div>

              <div className="rounded-2xl p-5 border border-gray-100">
                <h3 className="font-bold mb-3" style={{ color: "#111827" }}>Articles liés</h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/blog/standard-ip-vs-standard-classique"
                      className="text-sm hover:underline leading-tight block"
                      style={{ color: "#1515DC" }}
                    >
                      Standard IP vs standard classique : pourquoi migrer ?
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog/internet-professionnel-vs-box-particulier"
                      className="text-sm hover:underline leading-tight block"
                      style={{ color: "#1515DC" }}
                    >
                      Internet professionnel vs box grand public : les vraies différences
                    </Link>
                  </li>
                </ul>
              </div>

              <div
                className="rounded-2xl p-5 text-sm"
                style={{ background: "#F0F4FF" }}
              >
                <p className="font-semibold mb-1" style={{ color: "#1515DC" }}>CSX Telecom</p>
                <p className="text-gray-600 leading-relaxed">
                  Opérateur ARCEP indépendant depuis 15 ans. Toulouse · Montauban · Cahors · Bayonne.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-white text-center" style={{ background: "#0D0DA8" }}>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Vous êtes concerné par la fin du réseau cuivre ?
          </h2>
          <p className="opacity-80 mb-6">
            CSX Telecom vérifie gratuitement votre date de coupure et vous prépare une migration
            sans stress. Un consultant vous répond sous 24h.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 rounded-lg font-bold text-white hover:opacity-90 transition-all"
            style={{ background: "#29ABE2" }}
          >
            Demander mon audit gratuit — Réponse sous 24h
          </Link>
        </div>
      </section>
    </>
  );
}
