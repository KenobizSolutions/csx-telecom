import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Standard téléphonique IP et internet pro à Montauban — CSX Telecom",
  description:
    "Opérateur télécom à Montauban et dans le Tarn-et-Garonne (82). Standard IP, IPBX, internet professionnel multi-opérateur pour TPE et PME. Audit gratuit, intervention locale.",
  alternates: { canonical: "https://csx-telecom.fr/montauban" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "CSX Telecom — Montauban",
  description:
    "Opérateur télécom indépendant déclaré ARCEP à Montauban. Standard IP, IPBX, internet professionnel et agents IA pour les TPE et PME du Tarn-et-Garonne.",
  url: "https://csx-telecom.fr/montauban",
  telephone: "+33582730360",
  email: "contact@csx.fr",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Montauban",
    postalCode: "82000",
    addressCountry: "FR",
  },
  areaServed: { "@type": "City", name: "Montauban" },
} as const;

const stats = [
  { value: "+200", label: "clients actifs en région Occitanie" },
  { value: "+15 ans", label: "d'expérience télécom d'entreprise" },
  { value: "ARCEP", label: "opérateur déclaré, multi-opérateur" },
  { value: "24h/24", label: "supervision et agents IA disponibles" },
];

const services = [
  {
    icon: "📞",
    title: "Standard téléphonique IP & IPBX",
    description:
      "De 2 à +100 postes, adapté aux TPE et PME de Montauban. Portage de numéros sans coupure, cloud ou sur site. Migration depuis le réseau cuivre RTC gérée de bout en bout.",
    href: "/standard-telephonique-ipbx",
  },
  {
    icon: "🌐",
    title: "Internet professionnel & MPLS",
    description:
      "Fibre, SDSL, 5G de secours. Montauban et le 82 bénéficient d'un déploiement fibre actif. En opérateur indépendant, nous vous proposons le meilleur opérateur selon votre adresse et vos usages.",
    href: "/internet-professionnel",
  },
  {
    icon: "🤖",
    title: "Agents virtuels IA",
    description:
      "Votre secrétariat téléphonique IA, 24h/24. Idéal pour les artisans, commerçants et professions libérales de Montauban qui ne peuvent pas toujours décrocher.",
    href: "/agents-virtuels-ia",
  },
];

const reasons = [
  {
    title: "Techniciens présents dans le 82",
    description:
      "Notre équipe intervient régulièrement à Montauban et dans le Tarn-et-Garonne. Pas de long délai d'attente pour une intervention : nos techniciens connaissent le territoire et s'y déplacent rapidement.",
  },
  {
    title: "Fin du réseau cuivre : anticipez dès maintenant",
    description:
      "De nombreuses entreprises du 82 fonctionnent encore sur des lignes RTC analogiques. Orange arrête progressivement ce réseau. Nous gérons la migration vers la téléphonie IP sans coupure et sans surprise tarifaire.",
  },
  {
    title: "Un opérateur qui comprend les TPE locales",
    description:
      "Artisans, commerces, cabinets médicaux, PME agroalimentaires : nous connaissons les contraintes des petites structures. Nos offres sont dimensionnées à votre réalité, pas à celle d'un grand groupe.",
  },
  {
    title: "Entre Toulouse et Cahors : le meilleur des deux",
    description:
      "Montauban bénéficie de la proximité de nos deux équipes principales. Qu'il s'agisse d'une intervention rapide ou d'un projet plus complexe, la couverture est assurée sans délai supplémentaire.",
  },
];

const zones = [
  "Montauban centre",
  "Montauban Nord & Sud",
  "Moissac",
  "Castelsarrasin",
  "Caussade",
  "Grisolles",
  "Verdun-sur-Garonne",
  "Lauzerte",
];

export default function MontaubanPage() {
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
            Tarn-et-Garonne (82) · Opérateur ARCEP · TPE & PME
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Standard téléphonique IP et internet pro à Montauban —{" "}
            <span style={{ color: "#29ABE2" }}>CSX Telecom</span>
          </h1>
          <p className="text-lg md:text-xl mb-4 font-semibold opacity-90">
            Téléphonie et internet professionnel pour les TPE et PME du Tarn-et-Garonne.
          </p>
          <p className="text-base md:text-lg mb-10 max-w-3xl mx-auto opacity-80 leading-relaxed">
            CSX Telecom accompagne les entreprises de Montauban et du 82 dans leur transition
            téléphonique : migration depuis le réseau cuivre RTC, installation de standard IP,
            internet multi-opérateur fiable et agents IA pour ne jamais manquer un appel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block px-8 py-4 rounded-lg font-bold text-white text-lg hover:opacity-90 transition-all"
              style={{ background: "#29ABE2" }}
            >
              Demander un audit gratuit à Montauban
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
            Nos solutions pour les entreprises de Montauban
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Du standard téléphonique à l'internet professionnel en passant par les agents IA :
            toutes nos solutions sont disponibles à Montauban et dans le 82.
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

      {/* POURQUOI CSX À MONTAUBAN */}
      <section className="py-16 md:py-24" style={{ background: "#F0F4FF" }}>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: "#111827" }}>
            Pourquoi CSX Telecom à Montauban ?
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Un opérateur régional qui connaît le tissu économique du Tarn-et-Garonne et intervient
            directement, sans intermédiaire.
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
              📍 Intervention dans tout le Tarn-et-Garonne
            </h2>
            <p className="opacity-90 mb-5 leading-relaxed">
              Nos techniciens interviennent à Montauban et dans l'ensemble du département 82, depuis
              Moissac jusqu'à Caussade.
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

      {/* CTA FINAL */}
      <section className="py-20 text-white text-center" style={{ background: "#0D0DA8" }}>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Votre télécom à Montauban, on s'en occupe
          </h2>
          <p className="text-lg mb-4 opacity-80">
            Audit gratuit sur site ou à distance. Devis sous 48h. Intervention locale garantie.
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
