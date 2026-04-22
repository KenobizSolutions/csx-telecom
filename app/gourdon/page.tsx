import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Téléphonie professionnelle à Gourdon — CSX Telecom",
  description:
    "Opérateur télécom à Gourdon et dans le sud du Lot (46). Standard IP, internet fibre, 5G et Starlink pour zones rurales. Audit gratuit, intervention locale depuis Cahors.",
  alternates: { canonical: "https://csx-telecom.fr/gourdon" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "CSX Telecom — Gourdon",
  description:
    "Opérateur télécom indépendant déclaré ARCEP. Standard IP, internet fibre, 5G et Starlink pour les entreprises de Gourdon et du sud du Lot. Spécialiste des zones rurales.",
  url: "https://csx-telecom.fr/gourdon",
  telephone: "+33582730360",
  email: "contact@csx.fr",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Gourdon",
    postalCode: "46300",
    addressCountry: "FR",
  },
  areaServed: { "@type": "City", name: "Gourdon" },
} as const;

const stats = [
  { value: "+15 ans", label: "d'expérience télécom d'entreprise" },
  { value: "Fibre + 5G", label: "et Starlink pour zones rurales" },
  { value: "ARCEP", label: "opérateur déclaré, multi-opérateur" },
  { value: "24h/24", label: "agents IA et supervision disponibles" },
];

const services = [
  {
    icon: "📞",
    title: "Standard téléphonique IP & IPBX",
    description:
      "Migration depuis le réseau cuivre RTC, standard cloud ou sur site. Dans le sud du Lot, la fin du cuivre impacte de nombreux artisans et PME. Nous gérons toute la transition sans coupure.",
    href: "/standard-telephonique-ipbx",
  },
  {
    icon: "🌐",
    title: "Internet fibre, 5G & Starlink",
    description:
      "La couverture fibre est en cours dans le Gourdonais mais reste incomplète. En opérateur multi-technologie, nous combinons fibre disponible, 5G et Starlink Business pour une connexion fiable quel que soit votre site.",
    href: "/internet-professionnel",
  },
  {
    icon: "🤖",
    title: "Agents virtuels IA",
    description:
      "Artisan, hôtel, commerce : votre téléphone répond 24h/24 même quand vous êtes en chantier, en salle ou hors d'accès. L'agent IA prend les messages, répond aux questions courantes et prend les rendez-vous.",
    href: "/agents-virtuels-ia",
  },
];

const reasons = [
  {
    title: "Expertise des zones rurales et semi-rurales",
    description:
      "Le sud du Lot présente des contraintes spécifiques : couverture fibre partielle, bâtiments anciens, sites isolés. Nous connaissons ces réalités et proposons des solutions concrètes — pas des offres conçues pour les zones urbaines denses.",
  },
  {
    title: "Starlink Business et 5G : vos alternatives à la fibre",
    description:
      "Là où la fibre n'est pas encore disponible, Starlink Business offre aujourd'hui des débits élevés avec une installation rapide. Couplé à la 5G de secours, c'est une solution professionnelle fiable pour les sites ruraux du Gourdonais.",
  },
  {
    title: "Proximité depuis Cahors — notre siège",
    description:
      "Notre siège social est à Cahors, à moins de 30 km. Nos techniciens connaissent le terrain entre Cahors et Gourdon et interviennent rapidement sur vos sites, sans faire appel à un sous-traitant extérieur.",
  },
  {
    title: "Fin du réseau cuivre : urgence dans le 46",
    description:
      "Orange arrête le réseau RTC sur le territoire. Dans les zones rurales du Lot, cette transition est parfois précipitée. CSX Telecom anticipe avec vous et gère le portage de vos numéros sans aucune interruption de service.",
  },
];

const techs = [
  { label: "Fibre optique (là où disponible)", icon: "💡" },
  { label: "SDSL pour zones en attente de fibre", icon: "📶" },
  { label: "5G backup automatique", icon: "📡" },
  { label: "Starlink Business pour sites isolés", icon: "🛰️" },
];

export default function GourdonPage() {
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
            Sud du Lot (46) · Fibre · 5G · Starlink · Opérateur ARCEP
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Téléphonie professionnelle à Gourdon —{" "}
            <span style={{ color: "#29ABE2" }}>CSX Telecom</span>
          </h1>
          <p className="text-lg md:text-xl mb-4 font-semibold opacity-90">
            Des solutions télécom qui fonctionnent dans les zones rurales du sud du Lot.
          </p>
          <p className="text-base md:text-lg mb-10 max-w-3xl mx-auto opacity-80 leading-relaxed">
            Dans le Gourdonais, la fibre n'est pas encore partout et le réseau cuivre RTC s'arrête.
            CSX Telecom propose des solutions adaptées : fibre quand elle est disponible, 5G ou
            Starlink Business là où elle ne l'est pas encore, et un standard IP sans coupure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block px-8 py-4 rounded-lg font-bold text-white text-lg hover:opacity-90 transition-all"
              style={{ background: "#29ABE2" }}
            >
              Demander un audit gratuit à Gourdon
            </Link>
            <a
              href="#services"
              className="inline-block px-8 py-4 rounded-lg font-bold text-white text-lg border-2 border-white/60 hover:bg-white/10 transition-all"
            >
              Nos solutions
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

      {/* ENCART TECHNOLOGIES RURALES */}
      <section className="py-10 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div
            className="rounded-2xl p-7 text-white"
            style={{ background: "linear-gradient(135deg, #1515DC, #0D0DA8)" }}
          >
            <h2 className="text-xl font-bold mb-4">
              🛰️ Connectivité professionnelle même en zone rurale
            </h2>
            <p className="opacity-90 mb-5 text-sm leading-relaxed">
              La couverture fibre du Gourdonais est en cours mais encore partielle. CSX Telecom
              s'adapte à chaque situation grâce à un panel de technologies complémentaires.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {techs.map((t) => (
                <div key={t.label} className="flex items-center gap-3 text-sm opacity-90">
                  <span className="text-xl">{t.icon}</span>
                  {t.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-16 md:py-24" style={{ background: "#F0F4FF" }}>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: "#111827" }}>
            Nos solutions pour les entreprises du Gourdonais
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Standard IP, internet adapté à votre connectivité réelle et agents IA : des solutions
            professionnelles conçues pour fonctionner dans le sud du Lot.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group p-8 rounded-2xl bg-white border border-gray-100 hover:border-[#1515DC] hover:shadow-lg transition-all"
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

      {/* POURQUOI CSX À GOURDON */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: "#111827" }}>
            Pourquoi CSX Telecom à Gourdon ?
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Un opérateur qui connaît les contraintes des zones rurales et apporte de vraies
            réponses, pas des offres standardisées pensées pour les villes.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {reasons.map((reason, i) => (
              <div key={i} className="p-6 rounded-2xl border-l-4" style={{ background: "#F0F4FF", borderColor: "#1515DC" }}>
                <h3 className="text-lg font-bold mb-2" style={{ color: "#1515DC" }}>
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 text-white text-center" style={{ background: "#0D0DA8" }}>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Votre télécom à Gourdon, résolu
          </h2>
          <p className="text-lg mb-4 opacity-80">
            Audit gratuit sur site. Nous analysons votre connectivité réelle et vous proposons la
            solution adaptée à votre situation géographique exacte.
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
