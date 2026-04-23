import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Opérateur télécom multi-opérateur | PME | CSX Telecom",
  description:
    "CSX Telecom, opérateur ARCEP indépendant. Standard IP, IPBX, internet professionnel, agents IA. Un seul interlocuteur. Plus de 200 clients. Audit gratuit.",
  alternates: { canonical: "https://csx-telecom.fr/" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "CSX Telecom",
  description: "Opérateur télécom indépendant déclaré ARCEP.",
  url: "https://csx-telecom.fr",
  telephone: "+33582730360",
  email: "contact@csx.fr",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1 Place Emilien Imbert",
    addressLocality: "Cahors",
    postalCode: "46000",
    addressCountry: "FR",
  },
  taxID: "800 317 570 00011",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"],
      opens: "08:30",
      closes: "12:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"],
      opens: "13:30",
      closes: "17:30",
    },
  ],
} as const;

const stats = [
  { value: "+15 ans", label: "d'expérience CSX Telecom" },
  { value: "+200", label: "clients actifs de 1 à +800 salariés" },
  { value: "Opérateur ARCEP", label: "multi-opérateur indépendant" },
  { value: "24h/24", label: "agents IA disponibles" },
];

const services = [
  {
    title: "Standard téléphonique IP & IPBX",
    description: "Installation, configuration et maintenance de votre standard IP, cloud ou sur site. De 2 à plus de 100 postes. Portage de vos numéros sans aucune coupure.",
    href: "/standard-telephonique-ipbx",
    icon: "📞",
  },
  {
    title: "Internet professionnel & MPLS",
    description: "Fibre, SDSL, 5G, Starlink avec GTR. Vraie redondance multi-opérateur. MPLS maintenu même sur la 5G de secours.",
    href: "/internet-professionnel",
    icon: "🌐",
  },
  {
    title: "Agents virtuels IA",
    description: "Votre assistant téléphonique IA qui répond, comprend et traite oralement les appels à votre place — 24h/24, 7j/7.",
    href: "/agents-virtuels-ia",
    icon: "🤖",
  },
];

const reasons = [
  {
    title: "Tous les opérateurs, un seul interlocuteur",
    description: "Orange, SFR, Bouygues, opérateurs fibre locaux, Starlink : nous accédons directement à tous en tant qu'opérateur déclaré. La meilleure solution pour chaque situation.",
  },
  {
    title: "Vraie redondance multi-opérateur",
    description: "Fibre chez A, backup fibre chez B, 5G chez C : le réseau bascule de manière transparente. Votre MPLS reste actif même sur la 5G de secours. Aucun client ne le remarque.",
  },
  {
    title: "Local et réactif",
    description: "Nos équipes sont à Toulouse, Montauban, Cahors et Bayonne. Nous nous déplaçons. Pas de hotline nationale.",
  },
  {
    title: "Solutions sur-mesure",
    description: "Une entreprise de 3 personnes et une de 200 n'ont pas les mêmes besoins. Nous analysons, conseillons, adaptons.",
  },
  {
    title: "IA intégrée dans vos communications",
    description: "Agents virtuels qui répondent oralement aux appels, assistante virtuelle 24/7 : vos communications fonctionnent même quand vos équipes ne sont pas disponibles.",
  },
];

const zones = [
  { city: "Toulouse", dept: "Haute-Garonne (31)", href: "/toulouse", priority: true },
  { city: "Montauban", dept: "Tarn-et-Garonne (82)", href: "/montauban", priority: true },
  { city: "Cahors", dept: "Lot (46)", href: "/cahors", priority: true },
  { city: "Gourdon", dept: "Lot (46)", href: "/gourdon", priority: false },
  { city: "Caussade", dept: "Tarn-et-Garonne (82)", href: "/caussade", priority: false },
  { city: "Bayonne · Biarritz", dept: "Pyrénées-Atlantiques (64)", href: "/bayonne-biarritz", priority: false },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section className="relative py-20 md:py-32 text-white" style={{ background: "linear-gradient(135deg, #0D0DA8 0%, #1515DC 60%, #29ABE2 100%)" }}>
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="inline-block mb-4 px-4 py-1 rounded-full text-sm font-medium bg-white/20">
            Opérateur déclaré ARCEP · Multi-opérateur indépendant
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Votre opérateur télécom indépendant —{" "}
            <span style={{ color: "#29ABE2" }}>téléphonie, internet et IA</span>{" "}
            pour les entreprises
          </h1>
          <p className="text-lg md:text-xl mb-4 font-semibold opacity-90">
            Un seul interlocuteur. Tous les opérateurs. Zéro coupure.
          </p>
          <p className="text-base md:text-lg mb-10 max-w-3xl mx-auto opacity-80 leading-relaxed">
            CSX Telecom est un opérateur télécom indépendant déclaré à l'ARCEP. Depuis plus de 15 ans,
            nous accompagnons plus de 200 entreprises avec des solutions de téléphonie IP,
            d'internet professionnel et d'agents virtuels IA sur-mesure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-block px-8 py-4 rounded-lg font-bold text-white text-lg hover:opacity-90 transition-all" style={{ background: "#29ABE2" }}>
              Demander un audit gratuit
            </Link>
            <a href="#services" className="inline-block px-8 py-4 rounded-lg font-bold text-white text-lg border-2 border-white/60 hover:bg-white/10 transition-all">
              Découvrir nos services
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
                <div className="text-2xl md:text-3xl font-bold mb-1" style={{ color: "#1515DC" }}>{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: "#111827" }}>
            Nos solutions pour les entreprises
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link key={service.href} href={service.href} className="group p-8 rounded-2xl border border-gray-100 hover:border-[#1515DC] hover:shadow-lg transition-all">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-[#1515DC] transition-colors" style={{ color: "#111827" }}>{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                <span className="font-semibold text-sm" style={{ color: "#1515DC" }}>En savoir plus →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* POURQUOI CSX */}
      <section className="py-16 md:py-24" style={{ background: "#F0F4FF" }}>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: "#111827" }}>
            Pourquoi CSX Telecom ?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {reasons.map((reason, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border-l-4" style={{ borderColor: "#1515DC" }}>
                <h3 className="text-lg font-bold mb-2" style={{ color: "#1515DC" }}>{reason.title}</h3>
                <p className="text-gray-600 leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FIN DU CUIVRE */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="rounded-2xl p-8 text-white" style={{ background: "linear-gradient(135deg, #1515DC, #0D0DA8)" }}>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              ⚠️ La fin du réseau cuivre RTC approche — êtes-vous prêt ?
            </h2>
            <p className="mb-6 opacity-90 leading-relaxed">
              Orange arrête progressivement le réseau téléphonique traditionnel (RTC) sur l'ensemble du territoire.
              Si votre entreprise fonctionne encore avec des lignes analogiques classiques, la migration vers l'IP est inévitable.
              Nous vous accompagnons dans cette transition sans coupure et sans mauvaise surprise.
            </p>
            <Link href="/blog/fin-reseau-cuivre-rtc" className="inline-block px-6 py-3 bg-white font-bold rounded-lg hover:bg-gray-100 transition-colors" style={{ color: "#1515DC" }}>
              En savoir plus
            </Link>
          </div>
        </div>
      </section>

      {/* ZONES */}
      <section className="py-16 md:py-24" style={{ background: "#F0F4FF" }}>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: "#111827" }}>
            Nous intervenons près de chez vous
          </h2>
          <p className="text-center text-gray-600 mb-12">Haute-Garonne (31) · Tarn-et-Garonne (82) · Lot (46) · Pyrénées-Atlantiques (64)</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {zones.map((zone) => (
              <Link key={zone.href} href={zone.href} className="bg-white p-5 rounded-xl border border-gray-100 hover:border-[#1515DC] hover:shadow-md transition-all group">
                <div className="font-bold text-lg mb-1 group-hover:text-[#1515DC] transition-colors" style={{ color: zone.priority ? "#1515DC" : "#111827" }}>{zone.city}</div>
                <div className="text-sm text-gray-500">{zone.dept}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 text-white text-center" style={{ background: "#0D0DA8" }}>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Parlons de votre situation télécom</h2>
          <p className="text-lg mb-8 opacity-80">
            Audit gratuit, sans engagement, sur site ou à distance.
          </p>
          <Link href="/contact" className="inline-block px-10 py-4 rounded-lg font-bold text-white text-lg hover:opacity-90 transition-all" style={{ background: "#29ABE2" }}>
            Demander mon audit gratuit — Réponse sous 24h
          </Link>
        </div>
      </section>
    </>
  );
}