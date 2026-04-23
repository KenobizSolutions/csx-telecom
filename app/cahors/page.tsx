import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Opérateur télécom à Cahors et dans le Lot — CSX Telecom",
  description:
    "CSX Telecom, siège social à Cahors. Opérateur ARCEP indépendant dans le Lot (46). Standard IP, IPBX, internet professionnel, agents IA. Expertise locale depuis 15 ans.",
  alternates: { canonical: "https://csx-telecom.fr/cahors" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "CSX Telecom — Cahors (siège social)",
  description:
    "Siège social de CSX Telecom à Cahors. Opérateur télécom indépendant déclaré ARCEP. Standard IP, IPBX, internet professionnel et agents IA pour les entreprises du Lot.",
  url: "https://csx-telecom.fr/cahors",
  telephone: "+33582730360",
  email: "contact@csx.fr",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cahors",
    postalCode: "46000",
    addressCountry: "FR",
  },
  areaServed: [
    { "@type": "City", name: "Cahors" },
    { "@type": "AdministrativeArea", name: "Lot" },
  ],
} as const;

const stats = [
  { value: "+15 ans", label: "d'expertise télécom depuis Cahors" },
  { value: "+200", label: "clients actifs en région Occitanie" },
  { value: "Lot (46)", label: "notre territoire historique" },
  { value: "ARCEP", label: "opérateur déclaré, multi-opérateur" },
];

const services = [
  {
    icon: "📞",
    title: "Standard téléphonique IP & IPBX",
    description:
      "Migration depuis le réseau cuivre RTC, installation de standard IP cloud ou sur site. Le département du Lot est particulièrement impacté par la fin du cuivre : nous gérons l'ensemble de la transition sans coupure.",
    href: "/standard-telephonique-ipbx",
  },
  {
    icon: "🌐",
    title: "Internet professionnel & MPLS",
    description:
      "Fibre là où elle est disponible, SDSL, 5G et Starlink pour les zones non encore desservies. Dans le Lot, la couverture fibre est inégale : notre expertise multi-opérateur permet de trouver la meilleure solution pour chaque adresse.",
    href: "/internet-professionnel",
  },
  {
    icon: "🤖",
    title: "Agents virtuels IA",
    description:
      "Standard téléphonique IA 24h/24. Pour les professions libérales, commerces, hôtels et artisans cadurciens : ne manquez plus jamais un appel, même en déplacement ou hors des heures d'ouverture.",
    href: "/agents-virtuels-ia",
  },
];

const reasons = [
  {
    title: "Cahors, notre siège social depuis l'origine",
    description:
      "CSX Telecom est né à Cahors. Notre siège social, nos équipes dirigeantes et nos opérations centrales sont basés dans le Lot depuis plus de 15 ans. Vous ne parlez pas à un prestataire de passage : vous parlez à l'entreprise elle-même.",
  },
  {
    title: "Connaissance fine du territoire lotois",
    description:
      "Nous connaissons les contraintes spécifiques du Lot : zones blanches, déploiement fibre partiel, impact fort de la fin du réseau cuivre sur les zones rurales. Nous apportons des solutions concrètes là où les opérateurs nationaux restent vagues.",
  },
  {
    title: "Le Lot face à la fin du cuivre",
    description:
      "Le réseau cuivre RTC d'Orange est en cours d'extinction. Le département 46 compte de nombreuses entreprises encore connectées en analogique. CSX Telecom réalise des centaines de migrations dans le Lot, avec portage des numéros et zéro coupure.",
  },
  {
    title: "Solutions pour zones rurales et semi-rurales",
    description:
      "Artisans à Figeac, hôtels dans la vallée du Lot, châteaux viticoles dans le Cahorsien : nos solutions fibre, SDSL, 5G et Starlink s'adaptent à chaque situation géographique, même les plus contraintes.",
  },
];

const zones = [
  "Cahors centre",
  "Figeac",
  "Saint-Céré",
  "Souillac",
  "Gourdon",
  "Bretenoux",
  "Prayssac & Puy-l'Évêque",
  "Luzech & Douelle",
];

const faqItems = [
  {
    question: "Mon entreprise dans le Lot est-elle concernée par la fin du réseau cuivre ?",
    answer:
      "Très probablement oui. Le département du Lot est particulièrement touché par l'extinction du réseau RTC d'Orange. Plusieurs communes du 46 sont déjà dans le calendrier de fermeture. Si votre entreprise fonctionne encore avec des lignes analogiques, des installations d'alarme sur cuivre ou des terminaux de paiement filaires, la migration vers l'IP est inévitable — parfois sous moins de 12 mois. CSX Telecom réalise un audit gratuit pour identifier votre date de bascule et préparer la transition.",
  },
  {
    question: "CSX Telecom peut-il intervenir dans les zones rurales du Lot ?",
    answer:
      "C'est précisément notre cœur de métier dans le 46. Notre siège est à Cahors et nos techniciens se déplacent dans tout le département : Figeac, Saint-Céré, Souillac, Gourdon, Bretenoux, la vallée du Lot. Nous connaissons les contraintes des zones rurales et semi-rurales du Lot mieux que tout autre opérateur. Pas de frais kilométriques excessifs sur la zone Lot.",
  },
  {
    question: "Quelles solutions pour une entreprise dans une zone blanche ou mal couverte du Lot ?",
    answer:
      "Nous proposons Starlink Business pour les sites où aucune solution filaire n'est disponible. Couplé à un lien 4G/5G de secours automatique, c'est aujourd'hui la solution la plus fiable pour les exploitations agricoles, hôtels en campagne, châteaux viticoles et gîtes professionnels du Cahorsien. L'installation Starlink se fait en quelques heures et ne nécessite pas de travaux de génie civil.",
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

export default function CahorsPage() {
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
            Lot (46) · Siège social CSX Telecom · Opérateur ARCEP
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Opérateur télécom à Cahors et dans le Lot —{" "}
            <span style={{ color: "#29ABE2" }}>CSX Telecom</span>
          </h1>
          <p className="text-lg md:text-xl mb-4 font-semibold opacity-90">
            Notre siège est à Cahors. Le Lot est notre territoire depuis le premier jour.
          </p>
          <p className="text-base md:text-lg mb-10 max-w-3xl mx-auto opacity-80 leading-relaxed">
            CSX Telecom est né à Cahors. Depuis plus de 15 ans, nous accompagnons les entreprises
            du Lot dans leurs projets télécom : standard IP, internet professionnel, migration
            depuis le réseau cuivre RTC et agents IA. Une expertise locale sans équivalent
            dans le département.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block px-8 py-4 rounded-lg font-bold text-white text-lg hover:opacity-90 transition-all"
              style={{ background: "#29ABE2" }}
            >
              Demander un audit gratuit dans le Lot
            </Link>
            <a
              href="#services"
              className="inline-block px-8 py-4 rounded-lg font-bold text-white text-lg border-2 border-white/60 hover:bg-white/10 transition-all"
            >
              Nos services
            </a>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-12" style={{ background: "#F0F4FF" }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.value} className="text-center">
                <div className="text-2xl md:text-3xl font-bold mb-1" style={{ color: "#1515DC" }}>
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ENCART SIÈGE */}
      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="rounded-2xl p-6 flex items-start gap-5" style={{ background: "#F0F4FF", borderLeft: "4px solid #29ABE2" }}>
            <span className="text-3xl flex-shrink-0">🏢</span>
            <div>
              <p className="font-bold text-lg mb-1" style={{ color: "#1515DC" }}>
                Siège social CSX Telecom — Cahors, Lot (46)
              </p>
              <p className="text-gray-600 leading-relaxed text-sm">
                Toutes les décisions, toute l'expertise opérationnelle et l'ensemble de nos équipes
                de direction sont basés à Cahors. Quand vous nous appelez, vous parlez directement
                aux personnes qui gèrent votre dossier — pas à un centre d'appels délocalisé.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: "#111827" }}>
            Nos solutions pour les entreprises du Lot
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Téléphonie IP, internet professionnel et agents IA : toutes nos solutions sont
            disponibles à Cahors et dans l'ensemble du département 46.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group p-8 rounded-2xl border border-gray-100 hover:border-[#1515DC] hover:shadow-lg transition-all"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3
                  className="text-xl font-bold mb-3 group-hover:text-[#1515DC] transition-colors"
                  style={{ color: "#111827" }}
                >
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                <span className="font-semibold text-sm" style={{ color: "#1515DC" }}>
                  En savoir plus →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* POURQUOI CSX À CAHORS */}
      <section className="py-16 md:py-24" style={{ background: "#F0F4FF" }}>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: "#111827" }}>
            Pourquoi CSX Telecom dans le Lot ?
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Pas un opérateur national qui "couvre" le 46 depuis Paris. Une entreprise lotoise
            qui connaît le territoire et y est implantée depuis ses débuts.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {reasons.map((reason, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border-l-4" style={{ borderColor: "#1515DC" }}>
                <h3 className="text-lg font-bold mb-2" style={{ color: "#1515DC" }}>
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ZONES COUVERTES */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div
            className="rounded-2xl p-8 text-white"
            style={{ background: "linear-gradient(135deg, #1515DC, #0D0DA8)" }}
          >
            <h2 className="text-2xl font-bold mb-3">
              📍 Couverture de l'ensemble du département du Lot
            </h2>
            <p className="opacity-90 mb-5 leading-relaxed">
              Depuis Cahors, nos équipes interviennent dans tout le 46 — du nord (Figeac,
              Saint-Céré) au sud (Gourdon) en passant par la vallée du Lot.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {zones.map((zone) => (
                <div key={zone} className="flex items-center gap-2 text-sm opacity-90">
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: "#29ABE2" }}
                  />
                  {zone}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: "#111827" }}>
            Questions fréquentes — Télécom dans le Lot
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Les questions les plus fréquentes des entreprises du département 46.
          </p>
          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <details
                key={i}
                className="border border-gray-100 rounded-2xl p-6 open:border-[#1515DC]"
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
            Votre opérateur télécom est à Cahors
          </h2>
          <p className="text-lg mb-4 opacity-80">
            Audit gratuit, sur site ou à distance dans tout le Lot. Devis sous 48h. Un
            interlocuteur local qui connaît votre territoire.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 rounded-lg font-bold text-white text-lg hover:opacity-90 transition-all"
            style={{ background: "#29ABE2" }}
          >
            Demander mon audit gratuit — Réponse sous 24h
          </Link>
        </div>
      </section>
    </>
  );
}
