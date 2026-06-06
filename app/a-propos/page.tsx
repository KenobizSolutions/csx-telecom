import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "À propos — 17 ans d'expertise télécom pour les PME",
  description:
    "CSX Telecom, opérateur ARCEP indépendant depuis 17 ans. +200 clients PME. Équipes à Cahors, Montauban, Gourdon et Bayonne. Proximité, multi-opérateur, IA.",
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
      "Opérateur télécom indépendant déclaré ARCEP. 17 ans d'expérience. Plus de 200 clients PME. Téléphonie IP, internet professionnel, agents IA.",
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
  { value: "+17 ans", label: "d'expérience dans les télécoms d'entreprise" },
  { value: "+200", label: "clients actifs, de 1 à +800 salariés" },
  { value: "ARCEP", label: "opérateur déclaré, multi-opérateur indépendant" },
  { value: "4 villes", label: "équipes à Cahors, Montauban, Gourdon, Bayonne" },
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
      "Depuis 17 ans, nous accompagnons des entreprises qui évoluent. Certains clients sont avec nous depuis le début. Cette fidélité repose sur une relation honnête : nous conseillons ce qui est bon pour eux, pas ce qui maximise notre marge.",
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
    city: "Gourdon",
    dept: "Lot (46)",
    role: "Équipe Lot Sud",
    description: "Présence locale pour le sud du Lot — Gourdon, Souillac, la Bouriane — et les zones rurales du 46.",
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section className="relative">
        <div
          className="absolute inset-0 -z-10 mb-28 rounded-bl-[100px] md:mb-0"
          aria-hidden="true"
          style={{ background: "linear-gradient(135deg, var(--csx-darker) 0%, var(--csx-dark) 50%, var(--csx-primary) 100%)" }}
        />
        <div className="container-page">
          <div className="pt-20 pb-16 md:pt-28 md:pb-28">
            <div className="mx-auto max-w-3xl text-center text-white anim-fade-up">
              <div className="mb-6 inline-flex items-center rounded-full bg-white/15 px-4 py-1.5 text-xs font-[550] uppercase tracking-wider text-white/90 backdrop-blur">
                Opérateur ARCEP · Depuis 2009 · +200 clients
              </div>
              <h1 className="h1 mb-6 text-white">
                CSX Telecom —{" "}
                <span style={{ color: "var(--csx-secondary)" }}>17 ans d'expertise télécom</span>{" "}
                pour les PME
              </h1>
              <p className="mb-4 text-lg font-[550] text-white/90 md:text-xl">
                Un opérateur indépendant, local, qui ne vous vend que ce dont vous avez besoin.
              </p>
              <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
                Depuis 2009, CSX Telecom accompagne les entreprises de la région Occitanie et du Pays
                Basque dans leurs projets télécom. Téléphonie IP, internet professionnel, agents IA :
                nous construisons des solutions durables, avec une équipe présente sur le terrain.
              </p>
              <Link href="/contact" className="btn group bg-white text-[var(--csx-primary)] shadow-sm hover:bg-[var(--csx-light)]">
                Parler à un consultant
                <span className="ml-2 transition-transform duration-150 group-hover:translate-x-0.5">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-white">
        <div className="container-page">
          <div className="py-12 md:py-16">
            <div className="grid grid-cols-2 gap-8 md:-mx-9 md:grid-cols-4 md:gap-0">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="relative text-center md:px-9 md:after:absolute md:after:right-0 md:after:top-1/2 md:after:h-12 md:after:w-px md:after:-translate-y-1/2 md:after:bg-slate-200 md:last:after:hidden"
                >
                  <div className="mb-2 text-2xl font-bold tracking-tight md:text-3xl" style={{ color: "var(--csx-primary)" }}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HISTOIRE */}
      <section style={{ background: "var(--csx-light)" }}>
        <div className="container-page">
          <div className="section-pad">
            <div className="mx-auto max-w-3xl">
              <h2 className="h2 mb-8">Notre histoire</h2>
              <div className="space-y-6 text-lg leading-relaxed text-slate-700">
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
                  Aujourd'hui, notre équipe est répartie sur quatre agglomérations — Cahors, Montauban,
                  Gourdon et Bayonne — pour rester au plus près de nos clients. Nous continuons d'investir
                  dans les nouvelles technologies, notamment l'IA vocale, pour anticiper les besoins des
                  entreprises de demain.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALEURS — section sombre */}
      <section className="relative">
        <div
          className="absolute inset-0 -z-10 mb-24 rounded-tr-[100px] md:mb-0"
          aria-hidden="true"
          style={{ background: "linear-gradient(135deg, var(--csx-text) 0%, var(--csx-darker) 70%, var(--csx-dark) 100%)" }}
        />
        <div className="container-page text-white">
          <div className="section-pad">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="h2 mb-4 text-white">Nos valeurs</h2>
              <p className="text-lg text-white/70">
                Ce qui nous guide au quotidien, dans chaque installation et chaque relation client.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {values.map((val) => (
                <div key={val.title} className="rounded-2xl bg-white/5 p-6 backdrop-blur ring-1 ring-white/10">
                  <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-2xl">
                    {val.icon}
                  </div>
                  <h3 className="mb-2 text-lg font-bold tracking-tight" style={{ color: "var(--csx-secondary)" }}>
                    {val.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/80">{val.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AGENCES */}
      <section className="bg-white">
        <div className="container-page">
          <div className="section-pad">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="h2 mb-4">Nos équipes sur le terrain</h2>
              <p className="text-lg text-slate-600">
                Quatre implantations pour couvrir la région Occitanie et le Pays Basque avec des
                techniciens et consultants locaux.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {offices.map((office) => (
                <div
                  key={office.city}
                  className="rounded-3xl border border-slate-200 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-[var(--csx-primary)] hover:shadow-md"
                >
                  <div className="mb-3 flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-bold tracking-tight" style={{ color: "var(--csx-primary)" }}>
                        {office.city}
                      </h3>
                      <p className="text-sm text-slate-500">{office.dept}</p>
                    </div>
                    <span
                      className="shrink-0 rounded-full px-3 py-1 text-xs font-[550]"
                      style={{ background: "var(--csx-light)", color: "var(--csx-primary)" }}
                    >
                      {office.role}
                    </span>
                  </div>
                  <p className="leading-relaxed text-slate-600">{office.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative">
        <div
          className="absolute inset-0 -z-10 rounded-bl-[100px]"
          aria-hidden="true"
          style={{ background: "linear-gradient(135deg, var(--csx-darker) 0%, var(--csx-dark) 100%)" }}
        />
        <div className="container-page">
          <div className="py-16 md:py-20">
            <div className="lg:flex lg:items-center lg:justify-between lg:gap-16">
              <div className="mb-8 text-center lg:mb-0 lg:text-left">
                <p className="mb-3 text-xl font-[550]" style={{ color: "var(--csx-secondary)" }}>
                  Travaillons ensemble
                </p>
                <h2 className="h2 text-white">Un consultant vous répond sous 24h</h2>
                <p className="mt-4 text-lg text-white/75">
                  Audit gratuit de votre situation télécom. Sans engagement, sur site ou à distance.
                </p>
              </div>
              <div className="flex justify-center lg:shrink-0">
                <Link href="/contact" className="btn group bg-white text-[var(--csx-primary)] shadow-sm hover:bg-[var(--csx-light)]">
                  Nous contacter — Réponse sous 24h
                  <span className="ml-2 transition-transform duration-150 group-hover:translate-x-0.5">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
