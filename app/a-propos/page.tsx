import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "À propos — 15 ans d'expertise télécom pour les PME",
  description:
    "CSX Telecom, opérateur ARCEP indépendant depuis 15 ans. +200 clients PME. Équipes à Toulouse, Montauban, Cahors et Bayonne. Proximité, multi-opérateur, IA.",
  alternates: { canonical: "https://www.csx-telecom.fr/a-propos" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "À propos de CSX Telecom",
  url: "https://www.csx-telecom.fr/a-propos",
  mainEntity: {
    "@type": "LocalBusiness",
    name: "CSX Telecom",
    description:
      "Opérateur télécom indépendant déclaré ARCEP. 15 ans d'expérience. Plus de 200 clients PME. Téléphonie IP, internet professionnel, agents IA.",
    foundingDate: "2009",
    numberOfEmployees: { "@type": "QuantitativeValue", minValue: 5, maxValue: 20 },
    url: "https://www.csx-telecom.fr",
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
    areaServed: ["Toulouse", "Montauban", "Cahors", "Bayonne", "Gourdon", "Caussade"],
  },
} as const;

const stats = [
  { value: "+15 ans", label: "d'expérience dans les télécoms d'entreprise" },
  { value: "+200", label: "clients actifs, de 1 à +800 salariés" },
  { value: "ARCEP", label: "opérateur déclaré, multi-opérateur indépendant" },
  { value: "4 villes", label: "équipes présentes à Toulouse, Montauban, Cahors, Bayonne" },
];

const values = [
  {
    icon: "📍",
    title: "Proximité terrain",
    description:
      "Nos techniciens et consultants sont basés en région, pas dans un centre d'appels national. Ils se déplacent chez vous, connaissent votre secteur géographique et interviennent rapidement. Une vraie relation de proximité, pas un numéro de ticket.",
  },
  {
    icon: "🔗",
    title: "Indépendance multi-opérateur",
    description:
      "Être déclaré ARCEP signifie que nous ne sommes lié à aucun opérateur. Orange, SFR, Bouygues, opérateurs fibre locaux, Starlink : nous accédons directement à tous et choisissons objectivement la meilleure solution pour chaque client et chaque site.",
  },
  {
    icon: "🤖",
    title: "IA intégrée dans les communications",
    description:
      "Nous avons anticipé l'intégration de l'IA dans les communications d'entreprise. Nos agents vocaux IA permettent aux PME d'accéder à une assistante téléphonique de niveau professionnel — disponible 24h/24, sans infrastructure lourde.",
  },
  {
    icon: "🎯",
    title: "Solutions sur-mesure",
    description:
      "Pas de forfaits rigides. Nous analysons la situation réelle de chaque entreprise — taille, secteur, contraintes techniques, budget — et construisons une réponse adaptée. Certains clients ont besoin de 2 postes, d'autres de 200. Nous servons les deux.",
  },
  {
    icon: "🔒",
    title: "Engagement de résultat",
    description:
      "Notre réputation repose sur la continuité de service de nos clients. Supervision 24h/24, GTR contractuelles, un interlocuteur unique pendant toute la durée du contrat : nous ne décrochons pas après la signature.",
  },
  {
    icon: "🌱",
    title: "Vision long terme",
    description:
      "Depuis 15 ans, nous accompagnons des entreprises qui évoluent. Certains clients sont avec nous depuis le début. Cette fidélité repose sur une relation honnête : nous conseillons ce qui est bon pour eux, pas ce qui maximise notre marge.",
  },
];

const offices = [
  {
    city: "Cahors",
    dept: "Lot (46)",
    role: "Siège social — Opérations & direction",
    description: "Notre base principale. 1 Place Emilien Imbert, 46000 Cahors. SIRET : 800 317 570 00011. Toutes les décisions stratégiques et opérationnelles partent d'ici.",
  },
  {
    city: "Toulouse",
    dept: "Haute-Garonne (31)",
    role: "Équipe technique & commerciale",
    description: "Notre plus grande équipe terrain, pour couvrir la métropole toulousaine et l'ensemble du 31.",
  },
  {
    city: "Montauban",
    dept: "Tarn-et-Garonne (82)",
    role: "Techniciens & support",
    description: "Présence locale pour les entreprises du 82 et les zones entre Toulouse et Cahors.",
  },
  {
    city: "Bayonne · Biarritz",
    dept: "Pyrénées-Atlantiques (64)",
    role: "Équipe Pays Basque",
    description: "Couverture du bassin bayonnais, de Biarritz à Anglet et jusqu'à Pau.",
  },
];

export default function AProposPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section
        className="relative py-20 md:py-32 text-white"
        style={{ background: "linear-gradient(135deg, #0D0DA8 0%, #1515DC 60%, #29ABE2 100%)" }}
      >
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="inline-block mb-4 px-4 py-1 rounded-full text-sm font-medium bg-white/20">
            Opérateur ARCEP · Depuis 2009 · +200 clients
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            CSX Telecom —{" "}
            <span style={{ color: "#29ABE2" }}>15 ans d'expertise télécom</span>{" "}
            pour les PME
          </h1>
          <p className="text-lg md:text-xl mb-4 font-semibold opacity-90">
            Un opérateur indépendant, local, qui ne vous vend que ce dont vous avez besoin.
          </p>
          <p className="text-base md:text-lg mb-10 max-w-3xl mx-auto opacity-80 leading-relaxed">
            Depuis 2009, CSX Telecom accompagne les entreprises de la région Occitanie et du Pays
            Basque dans leurs projets télécom. Téléphonie IP, internet professionnel, agents IA :
            nous construisons des solutions durables, avec une équipe présente sur le terrain.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 rounded-lg font-bold text-white text-lg hover:opacity-90 transition-all"
            style={{ background: "#29ABE2" }}
          >
            Parler à un consultant
          </Link>
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

      {/* HISTOIRE */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: "#111827" }}>
            Notre histoire
          </h2>
          <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
            <p>
              CSX Telecom est né d'un constat simple : les PME méritent le même niveau de service
              télécom que les grandes entreprises, avec un interlocuteur qui les connaît et qui se
              déplace. Pas une hotline anonyme, pas un contrat standardisé impossible à modifier.
            </p>
            <p>
              Depuis notre création, nous avons obtenu la déclaration d'opérateur auprès de
              l'ARCEP. Ce statut n'est pas anodin : il nous permet d'accéder directement aux
              infrastructures de tous les opérateurs — Orange, SFR, Bouygues, opérateurs fibre
              locaux — et de négocier les meilleures conditions pour nos clients sans aucun lien
              de dépendance avec un opérateur en particulier.
            </p>
            <p>
              Au fil des années, nous avons accompagné plus de 200 entreprises dans leur
              transformation télécom : migration depuis le réseau cuivre RTC, déploiement de
              standards IP, construction de réseaux MPLS multi-sites, et plus récemment intégration
              d'agents vocaux IA dans les flux d'appels.
            </p>
            <p>
              Aujourd'hui, notre équipe est répartie sur quatre agglomérations — Toulouse, Montauban,
              Cahors et Bayonne — pour rester au plus près de nos clients. Nous continuons d'investir
              dans les nouvelles technologies, notamment l'IA vocale, pour anticiper les besoins des
              entreprises de demain.
            </p>
          </div>
        </div>
      </section>

      {/* VALEURS */}
      <section className="py-16 md:py-24" style={{ background: "#F0F4FF" }}>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: "#111827" }}>
            Nos valeurs
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Ce qui nous guide au quotidien, dans chaque installation et chaque relation client.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((val) => (
              <div key={val.title} className="bg-white p-6 rounded-2xl border-l-4" style={{ borderColor: "#1515DC" }}>
                <div className="text-3xl mb-3">{val.icon}</div>
                <h3 className="text-lg font-bold mb-2" style={{ color: "#1515DC" }}>{val.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AGENCES */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: "#111827" }}>
            Nos équipes sur le terrain
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Quatre implantations pour couvrir la région Occitanie et le Pays Basque avec des
            techniciens et consultants locaux.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {offices.map((office) => (
              <div key={office.city} className="p-6 rounded-2xl border border-gray-100 hover:border-[#1515DC] hover:shadow-md transition-all">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold" style={{ color: "#1515DC" }}>{office.city}</h3>
                    <p className="text-sm text-gray-500">{office.dept}</p>
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ background: "#F0F4FF", color: "#1515DC" }}>
                    {office.role}
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed">{office.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 text-white text-center" style={{ background: "#0D0DA8" }}>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Travaillons ensemble
          </h2>
          <p className="text-lg mb-4 opacity-80">
            Audit gratuit de votre situation télécom. Sans engagement, sur site ou à distance.
          </p>
          <p className="text-base mb-8 opacity-70">
            Un consultant CSX Telecom vous répond sous 24h.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 rounded-lg font-bold text-white text-lg hover:opacity-90 transition-all"
            style={{ background: "#29ABE2" }}
          >
            Nous contacter — Réponse sous 24h
          </Link>
        </div>
      </section>
    </>
  );
}
