import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Internet professionnel fibre & MPLS multi-opérateur",
  description:
    "Accès internet professionnel avec vraie redondance multi-opérateur. Fibre dédiée, SDSL, 5G, Starlink, MPLS, pare-feu NGFW. Opérateur ARCEP indépendant.",
  alternates: { canonical: "https://www.csx-telecom.fr/internet-professionnel" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Internet professionnel multi-opérateur",
  provider: {
    "@type": "LocalBusiness",
    name: "CSX Telecom",
    url: "https://www.csx-telecom.fr",
  },
  description:
    "Accès internet professionnel fibre, SDSL, 5G, Starlink, MPLS avec redondance multi-opérateur et pare-feu NGFW pour les entreprises.",
  areaServed: ["Toulouse", "Montauban", "Cahors", "Bayonne"],
  url: "https://www.csx-telecom.fr/internet-professionnel",
} as const;

const technologies = [
  {
    icon: "💡",
    title: "Fibre dédiée & FTTO",
    description:
      "Bande passante garantie symétrique, de 100 Mb/s à 10 Gb/s. La fibre dédiée (FTTO) assure des débits constants sans mutualisation, idéale pour les usages critiques.",
    badge: "Recommandé",
  },
  {
    icon: "📡",
    title: "SDSL & ADSL pro",
    description:
      "Pour les zones non encore éligibles à la fibre. Le SDSL offre un débit symétrique stable et une garantie de temps de rétablissement (GTR 4h ou 8h).",
    badge: null,
  },
  {
    icon: "📶",
    title: "5G & 4G de secours",
    description:
      "Lien de backup automatique sur 5G/4G qui prend le relais en quelques secondes en cas de défaillance du lien principal. Compatible avec le maintien du MPLS.",
    badge: null,
  },
  {
    icon: "🛰️",
    title: "Starlink Business",
    description:
      "Solution satellite de dernière génération pour les sites isolés ou en chantier. Débit élevé, latence acceptable, déploiement en quelques heures.",
    badge: "Sites isolés",
  },
  {
    icon: "🔗",
    title: "MPLS & VPN inter-sites",
    description:
      "Réseau privé entre vos différents sites avec qualité de service (QoS) garantie. Le MPLS reste actif même lors d'un basculement sur le lien 5G de secours.",
    badge: "Multi-sites",
  },
  {
    icon: "🔒",
    title: "Pare-feu NGFW",
    description:
      "Firewall nouvelle génération (NGFW) avec inspection applicative, filtrage URL, détection d'intrusion (IDS/IPS) et gestion centralisée. Votre périmètre réseau sécurisé.",
    badge: null,
  },
];

const redundancyPoints = [
  {
    title: "Deux opérateurs distincts sur chaque site",
    description:
      "Nous sélectionnons deux opérateurs sans infrastructure commune pour votre lien principal et votre lien de secours. Une panne chez l'un n'affecte pas l'autre.",
  },
  {
    title: "Basculement automatique transparent",
    description:
      "En cas de défaillance du lien principal, le trafic bascule en quelques secondes sur le lien de secours. Vos utilisateurs ne ressentent aucune interruption.",
  },
  {
    title: "MPLS maintenu sur 5G",
    description:
      "Là où d'autres perdent le réseau privé lors du basculement, CSX Telecom maintient votre MPLS actif même sur la 5G de secours. Vos applications métier continuent de fonctionner.",
  },
  {
    title: "Supervision 24h/24",
    description:
      "Nos outils de monitoring surveillent en permanence la qualité et la disponibilité de vos liens. En cas d'anomalie, nous intervenons avant même que vous ne le remarquiez.",
  },
];

const comparison = [
  { critere: "Opérateurs disponibles", classic: "1 seul", csx: "Tous opérateurs" },
  { critere: "Redondance", classic: "Option payante, même infra", csx: "Multi-opérateur réelle" },
  { critere: "MPLS sur backup 5G", classic: "Non", csx: "Oui" },
  { critere: "Pare-feu NGFW", classic: "Non inclus", csx: "Inclus et géré" },
  { critere: "GTR (temps de rétablissement)", classic: "48–72h", csx: "4h ou 8h selon offre" },
  { critere: "Interlocuteur", classic: "Hotline mutualisée", csx: "Consultant dédié local" },
  { critere: "Installation & câblage", classic: "Sous-traitée", csx: "Par nos techniciens" },
  { critere: "Supervision", classic: "Sur demande", csx: "24h/24 proactive" },
];

const faqItems = [
  {
    question: "Quelle est la vraie différence entre une box grand public et l'internet professionnel ?",
    answer:
      "La différence est fondamentale : une box grand public est partagée avec des milliers d'abonnés, sans garantie de débit ni engagement de rétablissement. L'internet professionnel comprend une bande passante garantie symétrique, une GTR (Garantie de Temps de Rétablissement) contractuelle de 4h ou 8h, une adresse IP fixe, un accès prioritaire au support et une supervision 24h/24. Une panne sur une box pro est traitée comme une urgence ; sur une box grand public, vous prenez votre ticket.",
  },
  {
    question: "Qu'est-ce que la redondance multi-opérateur et pourquoi en ai-je besoin ?",
    answer:
      "La redondance multi-opérateur consiste à avoir deux connexions internet qui empruntent des infrastructures physiques totalement différentes — deux opérateurs sans point de défaillance commun. Si l'une tombe (coupure, panne, travaux), l'autre prend le relais automatiquement en quelques secondes. Vous en avez besoin dès que votre activité dépend d'internet : paiement en ligne, téléphonie IP, accès à vos applications métier, fichiers partagés. Une seule heure d'interruption peut coûter plus cher qu'un an d'abonnement redondant.",
  },
  {
    question: "Le MPLS continue-t-il de fonctionner si mon lien principal tombe ?",
    answer:
      "Oui, c'est l'un des points différenciants de CSX Telecom. Chez la plupart des opérateurs, le basculement sur un lien de secours 4G/5G entraîne la perte du réseau privé MPLS — vos sites ne se voient plus. CSX Telecom maintient le tunnel MPLS actif même sur le lien 5G de backup, grâce à notre architecture de routage. Vos applications métier, vos postes téléphoniques inter-sites et vos imprimantes partagées continuent de fonctionner normalement.",
  },
  {
    question: "Combien de temps faut-il pour installer une ligne internet professionnelle ?",
    answer:
      "Les délais varient selon la technologie : pour une fibre mutualisée (FTTH Pro), comptez 2 à 4 semaines. Pour une fibre dédiée (FTTO), 6 à 12 semaines selon les travaux nécessaires. Pour un lien 5G/4G de backup, l'installation peut se faire en quelques jours. Nous vous proposons systématiquement une solution provisoire pendant la période d'attente pour que vous ne soyez jamais sans connexion professionnelle.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function InternetProfessionnelPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* HERO */}
      <section
        className="relative py-20 md:py-32 text-white"
        style={{ background: "linear-gradient(135deg, #0D0DA8 0%, #1515DC 60%, #29ABE2 100%)" }}
      >
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="inline-block mb-4 px-4 py-1 rounded-full text-sm font-medium bg-white/20">
            Fibre · SDSL · 5G · Starlink · MPLS · NGFW
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Internet professionnel —{" "}
            <span style={{ color: "#29ABE2" }}>vraie redondance multi-opérateur</span>
          </h1>
          <p className="text-lg md:text-xl mb-4 font-semibold opacity-90">
            Plus jamais sans internet. Même en cas de panne de votre opérateur principal.
          </p>
          <p className="text-base md:text-lg mb-10 max-w-3xl mx-auto opacity-80 leading-relaxed">
            En tant qu'opérateur ARCEP indépendant, CSX Telecom accède directement à tous les
            opérateurs. Nous combinons fibre, SDSL, 5G et Starlink pour construire un réseau
            professionnel résilient, sécurisé et supervisé 24h/24.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block px-8 py-4 rounded-lg font-bold text-white text-lg hover:opacity-90 transition-all"
              style={{ background: "#29ABE2" }}
            >
              Demander un audit réseau gratuit
            </Link>
            <a
              href="#comparatif"
              className="inline-block px-8 py-4 rounded-lg font-bold text-white text-lg border-2 border-white/60 hover:bg-white/10 transition-all"
            >
              Voir le comparatif
            </a>
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section className="py-16 md:py-24" style={{ background: "#F0F4FF" }}>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: "#111827" }}>
            Toutes les technologies à votre service
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Fibre dédiée, SDSL, 5G, Starlink, MPLS : nous choisissons pour vous la combinaison
            optimale selon votre localisation, vos usages et votre budget.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech) => (
              <div key={tech.title} className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-[#1515DC] hover:shadow-md transition-all">
                <div className="flex items-start justify-between mb-3">
                  <div className="text-3xl">{tech.icon}</div>
                  {tech.badge && (
                    <span className="text-xs font-bold px-2 py-1 rounded-full text-white" style={{ background: "#29ABE2" }}>
                      {tech.badge}
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: "#1515DC" }}>{tech.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REDONDANCE MULTI-OPÉRATEUR */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: "#111827" }}>
            Ce que "vraie redondance" signifie chez CSX Telecom
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            La plupart des offres "redondantes" utilisent deux liens du même opérateur sur la même
            infrastructure physique. Une seule panne peut tout couper. Pas chez nous.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {redundancyPoints.map((point, i) => (
              <div key={i} className="p-6 rounded-2xl border-l-4" style={{ background: "#F0F4FF", borderColor: "#1515DC" }}>
                <h3 className="text-lg font-bold mb-2" style={{ color: "#1515DC" }}>{point.title}</h3>
                <p className="text-gray-600 leading-relaxed">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARATIF */}
      <section id="comparatif" className="py-16 md:py-24" style={{ background: "#F0F4FF" }}>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: "#111827" }}>
            Box pro classique vs CSX Telecom
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Une offre internet d'entreprise, ce n'est pas une box grand public avec un abonnement
            légèrement plus cher. Voici la différence concrète.
          </p>
          <div className="bg-white rounded-2xl overflow-hidden border border-gray-100">
            <div className="grid grid-cols-3 text-sm font-bold" style={{ background: "#1515DC", color: "white" }}>
              <div className="p-4">Critère</div>
              <div className="p-4 text-center border-l border-white/20">Box pro classique</div>
              <div className="p-4 text-center border-l border-white/20" style={{ background: "#0D0DA8" }}>CSX Telecom</div>
            </div>
            {comparison.map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-3 text-sm border-b border-gray-100 last:border-0"
                style={{ background: i % 2 === 0 ? "white" : "#F9FAFB" }}
              >
                <div className="p-4 font-medium text-gray-800">{row.critere}</div>
                <div className="p-4 text-center text-gray-500 border-l border-gray-100">{row.classic}</div>
                <div className="p-4 text-center font-semibold border-l border-gray-100" style={{ color: "#1515DC" }}>
                  {row.csx}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: "#111827" }}>
            Questions fréquentes — Internet professionnel
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Tout ce que vous devez savoir sur l'internet d'entreprise avant de décider.
          </p>
          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <details
                key={i}
                className="border border-gray-100 rounded-2xl p-6 group open:border-[#1515DC]"
              >
                <summary
                  className="font-bold text-lg cursor-pointer list-none flex justify-between items-center gap-4"
                  style={{ color: "#111827" }}
                >
                  <span>{item.question}</span>
                  <span className="flex-shrink-0 text-xl font-light" style={{ color: "#1515DC" }}>+</span>
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 text-white text-center" style={{ background: "#0D0DA8" }}>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Votre réseau mérite mieux qu'une box
          </h2>
          <p className="text-lg mb-4 opacity-80">
            Audit réseau gratuit. Devis multi-opérateur comparatif sous 48 h. Zéro engagement.
          </p>
          <p className="text-base mb-8 opacity-70">
            Toulouse · Montauban · Cahors · Bayonne et toute la région Occitanie
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 rounded-lg font-bold text-white text-lg hover:opacity-90 transition-all"
            style={{ background: "#29ABE2" }}
          >
            Demander mon audit réseau — Réponse sous 24h
          </Link>
        </div>
      </section>
    </>
  );
}
