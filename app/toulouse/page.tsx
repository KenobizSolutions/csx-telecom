import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Téléphonie IP et internet professionnel à Toulouse — CSX Telecom",
  description:
    "Opérateur télécom à Toulouse et en Haute-Garonne (31). Standard IP, IPBX, internet multi-opérateur, agents IA. Équipe locale, audit gratuit, intervention rapide sur toute la métropole.",
  alternates: { canonical: "https://csx-telecom.fr/toulouse" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "CSX Telecom — Toulouse",
  description:
    "Opérateur télécom indépendant déclaré ARCEP à Toulouse. Standard IP, IPBX, internet professionnel multi-opérateur et agents IA pour les entreprises de la métropole toulousaine.",
  url: "https://csx-telecom.fr/toulouse",
  telephone: "+33582730360",
  email: "contact@csx.fr",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Toulouse",
    postalCode: "31000",
    addressCountry: "FR",
  },
  areaServed: { "@type": "City", name: "Toulouse" },
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
      "De 2 à +100 postes, cloud ou sur site. Portage de vos numéros sans coupure. Nos techniciens toulousains se déplacent sur Toulouse intra-muros et dans toute la première couronne.",
    href: "/standard-telephonique-ipbx",
  },
  {
    icon: "🌐",
    title: "Internet professionnel & MPLS",
    description:
      "Fibre dédiée, SDSL, 5G de backup, MPLS inter-sites. La métropole toulousaine est très bien fibrée : en tant qu'opérateur ARCEP nous accédons à Orange, SFR, Bouygues, Axione et aux opérateurs locaux.",
    href: "/internet-professionnel",
  },
  {
    icon: "🤖",
    title: "Agents virtuels IA",
    description:
      "Standard téléphonique IA 24h/24. Nos agents vocaux répondent, orientent et prennent les rendez-vous à votre place — idéal pour les cabinets, commerces et PME toulousaines.",
    href: "/agents-virtuels-ia",
  },
];

const reasons = [
  {
    title: "Une équipe locale présente à Toulouse",
    description:
      "Nos techniciens et consultants sont basés à Toulouse. Ils connaissent la métropole, ses zones d'activité — Labège-Innopole, Colomiers, Blagnac, Tournefeuille — et interviennent rapidement sans sous-traitance.",
  },
  {
    title: "Accès direct à tous les opérateurs présents sur la métropole",
    description:
      "Toulouse est l'une des villes les mieux couvertes de France. Nous accédons directement à Orange, SFR, Bouygues, Covage, Axione et aux opérateurs fibre de la région pour vous proposer la solution la plus résiliente.",
  },
  {
    title: "Adapté aux PME et ETI de toutes tailles",
    description:
      "Startup de 3 personnes, cabinet libéral, industrie aérospatiale ou groupe de plusieurs centaines de salariés : nous dimensionnons chaque solution à la taille réelle de l'entreprise, sans forfait imposé.",
  },
  {
    title: "Un seul interlocuteur, pas une hotline",
    description:
      "Votre consultant toulousain connaît votre dossier et reste joignable directement pour toute la durée du contrat. Aucun ticket, aucune hotline nationale, aucun sous-traitant interposé.",
  },
];

const zones = [
  "Toulouse centre",
  "Labège & Innopole",
  "Colomiers & Airbus",
  "Blagnac",
  "Tournefeuille",
  "Balma & Quint-Fonsegrives",
  "Muret",
  "L'Union & Castelmaurou",
];

const faqItems = [
  {
    question: "CSX Telecom est-il vraiment présent physiquement à Toulouse ?",
    answer:
      "Oui. Nous ne sommes pas un opérateur national qui déclare « couvrir » Toulouse depuis Paris. Notre équipe technique et commerciale est basée sur la métropole. Nos techniciens se déplacent directement chez vous — Toulouse intra-muros, Labège, Colomiers, Blagnac, Tournefeuille — sans sous-traitance et sans délai imposé par un prestataire extérieur.",
  },
  {
    question: "Quel est le délai d'intervention à Toulouse en cas de panne ?",
    answer:
      "Pour les incidents critiques, notre objectif est d'intervenir sous 4h sur Toulouse Métropole. Nous proposons des GTR (Garantie de Temps de Rétablissement) contractuelles selon votre offre. Pour les petites structures sans GTR, la prise en charge téléphonique est immédiate et l'intervention sur site est planifiée dans la journée ou le lendemain selon la disponibilité.",
  },
  {
    question: "La métropole toulousaine est-elle bien couverte en fibre professionnelle ?",
    answer:
      "Toulouse est l'une des métropoles les mieux fibrées de France. La fibre professionnelle FTTO est disponible dans les principales zones d'activité : Labège-Innopole, Colomiers, Blagnac, Toulouse centre, Quint-Fonsegrives. En dehors de ces zones, nous combinons fibre mutualisée, SDSL et 5G. Nous réalisons gratuitement une étude d'éligibilité pour chaque adresse avant tout engagement.",
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

export default function ToulousePage() {
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
            Haute-Garonne (31) · Opérateur ARCEP · Équipe locale
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Téléphonie IP et internet professionnel à Toulouse —{" "}
            <span style={{ color: "#29ABE2" }}>CSX Telecom</span>
          </h1>
          <p className="text-lg md:text-xl mb-4 font-semibold opacity-90">
            Un opérateur télécom indépendant, présent physiquement sur la métropole toulousaine.
          </p>
          <p className="text-base md:text-lg mb-10 max-w-3xl mx-auto opacity-80 leading-relaxed">
            Standard IP, IPBX, internet multi-opérateur, MPLS et agents IA : CSX Telecom accompagne
            les entreprises de Toulouse et de la Haute-Garonne avec une équipe locale qui intervient
            sur site et un consultant dédié pour toute la durée de votre contrat.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block px-8 py-4 rounded-lg font-bold text-white text-lg hover:opacity-90 transition-all"
              style={{ background: "#29ABE2" }}
            >
              Demander un audit gratuit à Toulouse
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
            Nos solutions pour les entreprises de Toulouse
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Toutes nos solutions sont disponibles à Toulouse, avec installation et maintenance
            assurées par nos techniciens locaux. Pas de sous-traitance.
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

      {/* POURQUOI CSX À TOULOUSE */}
      <section className="py-16 md:py-24" style={{ background: "#F0F4FF" }}>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: "#111827" }}>
            Pourquoi CSX Telecom à Toulouse ?
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Un opérateur présent physiquement à Toulouse, pas un revendeur national qui sous-traite
            les interventions terrain.
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
              📍 Intervention sur toute la métropole toulousaine
            </h2>
            <p className="opacity-90 mb-5 leading-relaxed">
              Nos techniciens couvrent Toulouse et la première couronne. Déplacement rapide, sans
              frais supplémentaires sur la zone Toulouse Métropole.
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
            Questions fréquentes — Télécom à Toulouse
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Les questions les plus courantes des entreprises de la métropole toulousaine.
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
            Parlons de votre télécom à Toulouse
          </h2>
          <p className="text-lg mb-4 opacity-80">
            Audit gratuit sur site ou à distance. Devis sous 48h. Un consultant toulousain vous
            répond sous 24h.
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
