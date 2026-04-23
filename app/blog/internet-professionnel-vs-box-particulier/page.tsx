import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Internet professionnel vs box particulier : les différences clés",
  description:
    "Pourquoi une box grand public ne suffit pas pour une entreprise ? Comparatif complet entre internet professionnel et offre grand public : GTR, QoS, redondance, support.",
  alternates: { canonical: "https://www.csx-telecom.fr/blog/internet-professionnel-vs-box-particulier" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Internet professionnel vs box grand public : les vraies différences",
  description:
    "Comparatif complet entre internet professionnel et box grand public pour les entreprises : GTR, QoS, redondance, support technique dédié.",
  datePublished: "2026-01-20",
  dateModified: "2026-04-22",
  author: { "@type": "Organization", name: "CSX Telecom" },
  publisher: {
    "@type": "Organization",
    name: "CSX Telecom",
    url: "https://www.csx-telecom.fr",
  },
  url: "https://www.csx-telecom.fr/blog/internet-professionnel-vs-box-particulier",
} as const;

const comparison = [
  { critere: "Débit garanti", box: "Non garanti (partagé)", pro: "Garanti et symétrique" },
  { critere: "GTR (rétablissement)", box: "Aucune — vous attendez", pro: "4h ou 8h contractuels" },
  { critere: "Adresse IP fixe", box: "Non (IP dynamique)", pro: "Oui (IP fixe incluse)" },
  { critere: "Support technique", box: "Hotline partagée, délais longs", pro: "Technicien dédié, prioritaire" },
  { critere: "QoS voix / visio", box: "Non configurée", pro: "Configurée et surveillée" },
  { critere: "Redondance", box: "Aucune", pro: "Lien de secours automatique" },
  { critere: "SLA contractuel", box: "Aucun", pro: "Engagement de disponibilité" },
  { critere: "Installation", box: "Auto-installation", pro: "Technicien sur site" },
];

const sections = [
  {
    heading: "Le mythe de la \"box pro\"",
    body: `Beaucoup d'entreprises ont souscrit à une "offre pro" chez un grand opérateur, convaincues qu'elles disposaient d'une connexion professionnelle sérieuse. Dans bien des cas, cette offre n'est qu'une box grand public légèrement renommée, avec quelques services supplémentaires superficiels — et un prix un peu plus élevé.

La vraie différence entre internet professionnel et une offre grand public ne se mesure pas au débit annoncé sur la fiche technique. Elle se mesure quand la connexion tombe, quand il y a une panne, quand votre téléphonie IP se dégrade en plein accord commercial important. C'est là que les différences deviennent très concrètes.`,
  },
  {
    heading: "La GTR : ce que signifie vraiment une garantie de temps de rétablissement",
    body: `La Garantie de Temps de Rétablissement (GTR) est l'engagement contractuel d'un opérateur à rétablir votre connexion dans un délai défini en cas de panne. C'est l'un des critères les plus importants d'une offre internet professionnelle sérieuse.

Sur une box grand public, il n'existe aucune GTR. Si votre connexion tombe un lundi matin, vous ouvrez un ticket de support, vous attendez une plage d'intervention et vous espérez. Les délais réels peuvent aller de quelques heures à plusieurs jours selon la zone géographique et la disponibilité des techniciens.

Avec une offre professionnelle GTR 4h ou GTR 8h, l'opérateur s'engage contractuellement : si votre connexion n'est pas rétablie dans le délai prévu, vous êtes compensé. Et surtout, la prise en charge est prioritaire dès le signalement. Une panne sur votre accès professionnel est traitée comme une urgence, pas comme un ticket parmi des milliers d'autres.

Pour une entreprise dont l'activité dépend d'internet — téléphonie IP, applications cloud, paiement en ligne, visioconférence — chaque heure de coupure a un coût direct. La GTR n'est pas un luxe : c'est un filet de sécurité.`,
  },
  {
    heading: "Le débit garanti vs le débit théorique",
    body: `Les offres grand public affichent des débits "jusqu'à" qui correspondent à des conditions idéales jamais atteintes dans la réalité. Ces connexions sont mutualisées : vous partagez l'infrastructure avec des dizaines ou des centaines d'abonnés dans votre quartier. Aux heures de pointe, le débit réel peut être bien inférieur au débit annoncé.

L'internet professionnel propose un débit garanti et symétrique. "Garanti" signifie que vous disposez de ce débit en permanence, quelle que soit l'heure ou la charge du réseau. "Symétrique" signifie que le débit descendant (download) et montant (upload) sont identiques — ce qui est crucial pour la téléphonie IP, la visioconférence et les transferts de fichiers vers le cloud.

Pour une fibre dédiée FTTO (Fiber to the Office), vous bénéficiez d'une fibre optique non mutualisée, rien que pour vous. Les débits sont garantis de 100 Mb/s à plusieurs Gb/s selon l'offre. C'est la solution la plus robuste pour les sites critiques.`,
  },
  {
    heading: "La qualité de service (QoS) : invisible mais essentielle",
    body: `La QoS (Quality of Service) est un ensemble de mécanismes réseau qui priorisent certains types de trafic. Concrètement, la QoS fait en sorte que vos appels téléphoniques IP soient traités en priorité sur votre connexion, même si quelqu'un d'autre dans votre réseau est en train de télécharger un gros fichier ou de regarder une vidéo.

Sans QoS correctement configurée, la voix se dégrade : coupures, écho, décalage (latence élevée), crachotements. Ces symptômes sont souvent attribués à tort à la qualité de l'opérateur téléphonique, alors qu'ils proviennent d'une connexion internet non configurée pour la voix.

CSX Telecom configure systématiquement la QoS sur toutes les installations internet professionnelles. C'est une étape invisible pour l'utilisateur, mais fondamentale pour la qualité des communications.`,
  },
  {
    heading: "La redondance : ne jamais tomber en panne complète",
    body: `Une box grand public, c'est un seul lien internet. Si la fibre est coupée devant votre bureau par des travaux, vous êtes coupé du monde — et votre téléphonie IP avec vous.

Une installation internet professionnelle sérieuse intègre une redondance : un lien principal (fibre par exemple) et un lien de secours automatique (4G/5G, Starlink, SDSL). En cas de défaillance du lien principal, la bascule s'effectue en quelques secondes, de manière transparente pour les utilisateurs.

Ce que peu d'opérateurs font et que CSX Telecom assure : maintenir le réseau privé MPLS actif même lors du basculement sur le lien de secours. Vos sites restent interconnectés, vos applications métier continuent de fonctionner, vos téléphones IP ne s'interrompent pas.`,
  },
  {
    heading: "L'adresse IP fixe : pourquoi ça compte pour votre entreprise",
    body: `Une box grand public utilise généralement une adresse IP dynamique : elle change à chaque reconnexion. Ce n'est pas un problème pour un particulier. Pour une entreprise, c'est une contrainte.

Une adresse IP fixe est indispensable si vous hébergez un serveur, utilisez un VPN site-à-site, gérez des accès distants à vos systèmes ou avez des équipements de surveillance à piloter à distance. Sans IP fixe, chaque changement d'adresse nécessite une reconfiguration manuelle de tous vos accès.

L'internet professionnel inclut une ou plusieurs adresses IP fixes. Sur les offres CSX Telecom, l'IP fixe est incluse par défaut.`,
  },
  {
    heading: "Le support technique : la différence quand vous en avez le plus besoin",
    body: `Sur une box grand public, le support technique passe par une hotline partagée avec des millions d'abonnés. Le délai d'attente peut être long, les interlocuteurs sont des agents de niveau 1 qui suivent des scripts, et les interventions physiques sont planifiées sur des plages de plusieurs heures sans engagement de présence.

Sur une offre internet professionnelle CSX Telecom, vous avez un interlocuteur dédié qui connaît votre installation. En cas d'incident, vous appelez directement la bonne personne. Un technicien peut intervenir sur site en quelques heures sur nos zones d'intervention (Toulouse, Montauban, Cahors, Bayonne). L'urgence est traitée comme une urgence.

Ce n'est pas un argument de vente : c'est une différence structurelle entre un service conçu pour des particuliers et un service conçu pour des professionnels.`,
  },
];

export default function InternetProVsBoxPage() {
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
            <span className="text-sm font-medium px-3 py-1 rounded-full bg-white/20">Internet professionnel</span>
            <span className="text-white/40">·</span>
            <span className="text-sm opacity-70">7 min de lecture</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight">
            Internet professionnel vs box grand public : les vraies différences
          </h1>
          <p className="text-lg opacity-80 leading-relaxed">
            GTR, débit garanti, QoS, redondance, support dédié : voici pourquoi votre activité
            ne peut pas reposer sur une simple box d'opérateur.
          </p>
          <p className="text-sm opacity-60 mt-4">20 janvier 2026 · CSX Telecom</p>
        </div>
      </section>

      {/* CONTENU */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-[1fr_320px] gap-12">
            {/* Article */}
            <article>
              {/* Tableau comparatif */}
              <div className="mb-10 overflow-x-auto">
                <h2 className="text-2xl font-bold mb-5" style={{ color: "#1515DC" }}>
                  Comparatif : box grand public vs internet professionnel
                </h2>
                <div className="rounded-2xl overflow-hidden border border-gray-100">
                  <div
                    className="grid grid-cols-3 text-sm font-bold text-white"
                    style={{ background: "#1515DC" }}
                  >
                    <div className="p-4">Critère</div>
                    <div className="p-4 border-l border-white/20">Box grand public</div>
                    <div className="p-4 border-l border-white/20" style={{ background: "#0D0DA8" }}>
                      Internet professionnel
                    </div>
                  </div>
                  {comparison.map((row, i) => (
                    <div
                      key={i}
                      className="grid grid-cols-3 text-sm border-b border-gray-100 last:border-0"
                      style={{ background: i % 2 === 0 ? "white" : "#F9FAFB" }}
                    >
                      <div className="p-4 font-medium text-gray-800">{row.critere}</div>
                      <div className="p-4 text-gray-500 border-l border-gray-100">{row.box}</div>
                      <div
                        className="p-4 font-semibold border-l border-gray-100"
                        style={{ color: "#1515DC" }}
                      >
                        {row.pro}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

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
            </article>

            {/* Sidebar */}
            <aside className="space-y-6">
              <div
                className="rounded-2xl p-6 text-white sticky top-4"
                style={{ background: "#0D0DA8" }}
              >
                <h3 className="font-bold text-lg mb-3">Audit réseau gratuit</h3>
                <p className="text-sm opacity-80 leading-relaxed mb-5">
                  CSX Telecom analyse votre connexion actuelle et vous propose un accès professionnel
                  multi-opérateur adapté à votre activité.
                </p>
                <Link
                  href="/contact"
                  className="block text-center px-5 py-3 rounded-lg font-bold text-white hover:opacity-90 transition-all"
                  style={{ background: "#29ABE2" }}
                >
                  Demander un audit réseau
                </Link>
              </div>

              <div className="rounded-2xl p-5 border border-gray-100">
                <h3 className="font-bold mb-3" style={{ color: "#111827" }}>Articles liés</h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/blog/fin-reseau-cuivre-rtc"
                      className="text-sm hover:underline leading-tight block"
                      style={{ color: "#1515DC" }}
                    >
                      La fin du réseau cuivre RTC : ce que les entreprises doivent savoir
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog/standard-ip-vs-standard-classique"
                      className="text-sm hover:underline leading-tight block"
                      style={{ color: "#1515DC" }}
                    >
                      Standard IP vs standard classique : pourquoi migrer ?
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
                  Opérateur ARCEP indépendant. Fibre, SDSL, 5G, Starlink, MPLS.
                  Toulouse · Montauban · Cahors · Bayonne.
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
            Votre internet mérite une GTR et un vrai support
          </h2>
          <p className="opacity-80 mb-6">
            Audit réseau gratuit. Devis multi-opérateur sous 48h. Un consultant dédié, pas une hotline.
          </p>
          <Link
            href="/internet-professionnel"
            className="inline-block px-8 py-4 rounded-lg font-bold text-white hover:opacity-90 transition-all"
            style={{ background: "#29ABE2" }}
          >
            Découvrir nos offres internet professionnel
          </Link>
        </div>
      </section>
    </>
  );
}
