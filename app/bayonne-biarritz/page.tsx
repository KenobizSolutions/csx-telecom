import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Opérateur télécom Bayonne Biarritz — Standard IP & Internet pro (64)",
  description:
    "Opérateur télécom au Pays Basque (64). Standard IP, IPBX, internet multi-opérateur, agents IA. Antenne locale à Bayonne. Audit gratuit pour les entreprises de Bayonne, Biarritz, Anglet.",
  alternates: { canonical: "https://www.csx-telecom.fr/bayonne-biarritz" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "CSX Telecom — Bayonne & Biarritz",
  description:
    "Opérateur télécom indépendant déclaré ARCEP au Pays Basque. Standard IP, internet professionnel multi-opérateur et agents IA pour les entreprises de Bayonne, Biarritz et Anglet.",
  url: "https://www.csx-telecom.fr/bayonne-biarritz",
  telephone: "+33582730360",
  email: "contact@csx.fr",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bayonne",
    postalCode: "64100",
    addressCountry: "FR",
  },
  areaServed: [
    { "@type": "City", name: "Bayonne" },
    { "@type": "City", name: "Biarritz" },
    { "@type": "City", name: "Anglet" },
  ],
} as const;

const stats = [
  { value: "+15 ans", label: "d'expérience télécom d'entreprise" },
  { value: "+200", label: "clients actifs en région" },
  { value: "ARCEP", label: "opérateur déclaré, multi-opérateur" },
  { value: "24h/24", label: "agents IA et supervision disponibles" },
];

const services = [
  {
    icon: "📞",
    title: "Standard téléphonique IP & IPBX",
    description:
      "De 2 à +100 postes, cloud ou sur site. Portage de vos numéros 05 sans coupure. Nos techniciens du Pays Basque se déplacent sur Bayonne, Biarritz, Anglet et l'ensemble du bassin.",
    href: "/standard-telephonique-ipbx",
  },
  {
    icon: "🌐",
    title: "Internet professionnel & MPLS",
    description:
      "Fibre dédiée, SDSL, 5G backup. Le Pays Basque bénéficie d'une bonne infrastructure fibre. Nous accédons à tous les opérateurs présents sur le BAB pour construire le réseau le plus résilient pour votre entreprise.",
    href: "/internet-professionnel",
  },
  {
    icon: "🤖",
    title: "Agents virtuels IA",
    description:
      "Pour les hôtels, cabinets, commerces et entreprises tech du Pays Basque : un standard IA qui répond à vos appels 24h/24, 7j/7, en français et en anglais. Idéal pour les secteurs en contact avec une clientèle internationale.",
    href: "/agents-virtuels-ia",
  },
];

const reasons = [
  {
    title: "Une antenne locale au Pays Basque",
    description:
      "CSX Telecom dispose d'une équipe basée sur le Pays Basque. Nos techniciens et consultants connaissent le tissu économique local — du BAB (Bayonne-Anglet-Biarritz) jusqu'à Saint-Jean-de-Luz et l'arrière-pays basque.",
  },
  {
    title: "Multi-opérateur dans une zone à forte concurrence",
    description:
      "Le Pays Basque est couvert par de nombreux opérateurs. En tant qu'opérateur déclaré ARCEP, nous accédons directement à tous et choisissons objectivement la meilleure combinaison pour chaque entreprise et chaque site.",
  },
  {
    title: "Adapté aux secteurs locaux : tourisme, tech, santé",
    description:
      "Hôtels, thalassos, agences digitales, cabinet médicaux, industries agroalimentaires : le Pays Basque a une économie diversifiée. Chaque secteur a ses usages télécom spécifiques — nous les connaissons et adaptons chaque solution en conséquence.",
  },
  {
    title: "Agents IA multilingues pour les entreprises en contact international",
    description:
      "Bayonne et Biarritz accueillent de nombreuses entreprises avec une clientèle internationale. Nos agents vocaux IA fonctionnent en français, en anglais et en espagnol — un atout pour les professionnels du tourisme, de la santé et de l'hôtellerie.",
  },
];

const zones = [
  "Bayonne centre & BAB",
  "Biarritz",
  "Anglet",
  "Saint-Jean-de-Luz",
  "Hendaye",
  "Hasparren",
  "Cambo-les-Bains",
  "Espelette & Pays Basque intérieur",
];

const faqItems = [
  {
    question: "L'agent IA peut-il répondre en plusieurs langues à Bayonne et Biarritz ?",
    answer:
      "Oui. Nos agents vocaux IA sont configurables en plusieurs langues : français, anglais, espagnol. Pour les hôtels, thalassos, agences et professions de santé du Pays Basque qui reçoivent des clientèles étrangères, c'est un avantage concret. L'agent détecte automatiquement la langue de l'appelant ou suit le script multilingue que vous définissez. Aucun surcoût pour une configuration bilingue ou trilingue.",
  },
  {
    question: "Quelle infrastructure fibre est disponible au Pays Basque pour les entreprises ?",
    answer:
      "Le Pays Basque bénéficie d'une infrastructure fibre développée, portée notamment par HEGOA (réseau public fibre 64) et les principaux opérateurs nationaux. Bayonne, Anglet et Biarritz sont très bien couverts en fibre dédiée FTTO et en fibre mutualisée FTTH Pro. CSX Telecom accède directement à l'ensemble des opérateurs présents sur le territoire basque pour vous proposer la solution la plus adaptée à votre adresse et votre activité.",
  },
  {
    question: "CSX Telecom couvre-t-il aussi Saint-Jean-de-Luz, Hendaye et l'arrière-pays basque ?",
    answer:
      "Oui. Notre équipe locale couvre tout le bassin BAB et s'étend jusqu'à Saint-Jean-de-Luz, Hendaye, Hasparren, Cambo-les-Bains et le Pays Basque intérieur. Pour les entreprises situées en zone rurale basque ou dans des bâtisses patrimoniales, nous proposons des solutions adaptées : Starlink Business, 5G backup, ou SDSL selon la disponibilité à votre adresse exacte.",
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

export default function BayonneBiarritzPage() {
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
            Pays Basque · Pyrénées-Atlantiques (64) · Antenne locale · Opérateur ARCEP
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Téléphonie IP et internet pro à Bayonne et Biarritz —{" "}
            <span style={{ color: "#29ABE2" }}>CSX Telecom</span>
          </h1>
          <p className="text-lg md:text-xl mb-4 font-semibold opacity-90">
            Un opérateur télécom indépendant présent sur le Pays Basque.
          </p>
          <p className="text-base md:text-lg mb-10 max-w-3xl mx-auto opacity-80 leading-relaxed">
            Standard IP, IPBX, internet multi-opérateur et agents IA vocaux : CSX Telecom accompagne
            les entreprises du BAB et du Pays Basque avec une antenne locale, des techniciens qui
            se déplacent et un consultant dédié pendant toute la durée de votre contrat.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block px-8 py-4 rounded-lg font-bold text-white text-lg hover:opacity-90 transition-all"
              style={{ background: "#29ABE2" }}
            >
              Demander un audit gratuit au Pays Basque
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

      {/* SERVICES */}
      <section id="services" className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: "#111827" }}>
            Nos solutions pour les entreprises du Pays Basque
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Toutes nos solutions sont disponibles à Bayonne, Biarritz et dans l'ensemble du Pays
            Basque, avec installation et maintenance par nos équipes locales.
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

      {/* POURQUOI CSX AU PAYS BASQUE */}
      <section className="py-16 md:py-24" style={{ background: "#F0F4FF" }}>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: "#111827" }}>
            Pourquoi CSX Telecom au Pays Basque ?
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Une antenne locale dédiée, un accès à tous les opérateurs du territoire et des
            solutions adaptées à l'économie basque.
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
              📍 Intervention dans tout le Pays Basque
            </h2>
            <p className="opacity-90 mb-5 leading-relaxed">
              Notre équipe locale couvre l'ensemble du bassin BAB et le Pays Basque intérieur,
              de Hendaye à Hasparren.
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
            Questions fréquentes — Télécom au Pays Basque
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Les questions des entreprises de Bayonne, Biarritz et du Pays Basque.
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
            Parlons de votre télécom au Pays Basque
          </h2>
          <p className="text-lg mb-4 opacity-80">
            Audit gratuit sur site ou à distance. Un consultant local vous répond sous 24h.
            Devis clair sous 48h. Intervention rapide sur le BAB.
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
