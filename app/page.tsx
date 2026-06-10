import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    absolute: "CSX Telecom — Opérateur télécom indépendant pour les entreprises",
  },
  description:
    "CSX Telecom, opérateur ARCEP indépendant. Standard IP, IPBX, internet professionnel, agents IA. Un seul interlocuteur. Plus de 200 clients. Audit gratuit.",
  alternates: { canonical: "https://www.csx-telecom.fr/" },
};

// Les données structurées de l'entreprise (Organization + LocalBusiness,
// @id #organization) sont émises globalement par app/layout.tsx.

const stats = [
  { value: "+17 ans", label: "d'expérience CSX Telecom" },
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
    description: "Nos équipes sont à Cahors, Montauban, Gourdon et Bayonne. Nous nous déplaçons sur tout le Lot, le Tarn-et-Garonne, la Haute-Garonne et le Pays Basque. Pas de hotline nationale.",
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
  { city: "Cahors", dept: "Lot (46)", href: "/cahors", priority: true },
  { city: "Montauban", dept: "Tarn-et-Garonne (82)", href: "/montauban", priority: true },
  { city: "Caussade", dept: "Tarn-et-Garonne (82)", href: "/caussade", priority: true },
  { city: "Gourdon", dept: "Lot (46)", href: "/gourdon", priority: false },
  { city: "Toulouse", dept: "Haute-Garonne (31)", href: "/toulouse", priority: false },
  { city: "Bayonne · Biarritz", dept: "Pyrénées-Atlantiques (64)", href: "/bayonne-biarritz", priority: false },
];

export default function HomePage() {
  return (
    <>
      {/* HERO — fond gradient + coin arrondi bas-gauche (signature template) */}
      <section className="relative">
        <div
          className="absolute inset-0 -z-10 mb-28 rounded-bl-[100px] md:mb-0"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(135deg, var(--csx-darker) 0%, var(--csx-dark) 50%, var(--csx-primary) 100%)",
          }}
        />
        <div className="container-page">
          <div className="pt-20 pb-16 md:pt-28 md:pb-28">
            <div className="mx-auto max-w-3xl text-center text-white anim-fade-up">
              <div
                className="mb-6 inline-flex items-center rounded-full bg-white/15 px-4 py-1.5 text-xs font-[550] uppercase tracking-wider text-white/90 backdrop-blur"
              >
                Opérateur déclaré ARCEP · Multi-opérateur indépendant
              </div>
              <h1 className="h1 mb-6 text-white">
                Votre opérateur télécom indépendant —{" "}
                <span style={{ color: "var(--csx-secondary)" }}>
                  téléphonie, internet et IA
                </span>{" "}
                pour les entreprises
              </h1>
              <p className="mb-4 text-lg font-[550] text-white/90 md:text-xl">
                Un seul interlocuteur. Tous les opérateurs. Zéro coupure.
              </p>
              <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
                CSX Telecom est un opérateur télécom indépendant déclaré à l'ARCEP. Depuis plus de 17 ans,
                nous accompagnons plus de 200 entreprises avec des solutions de téléphonie IP,
                d'internet professionnel et d'agents virtuels IA sur-mesure.
              </p>
              <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link href="/contact" className="btn group bg-white text-[var(--csx-primary)] shadow-sm hover:bg-[var(--csx-light)]">
                  Demander un audit gratuit
                  <span className="ml-2 transition-transform duration-150 group-hover:translate-x-0.5">
                    <svg width="12" height="10" viewBox="0 0 12 10" fill="currentColor" aria-hidden="true">
                      <path d="M1 6.002h7.586L6.293 8.295a1 1 0 1 0 1.414 1.414l4-4a1 1 0 0 0 0-1.416l-4-4a1 1 0 0 0-1.414 1.416l2.293 2.293H1a1 1 0 1 0 0 2Z" />
                    </svg>
                  </span>
                </Link>
                <a href="#services" className="btn border border-white/40 bg-white/10 text-white backdrop-blur hover:bg-white/20">
                  Découvrir nos services
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS — 4 colonnes avec dividers verticaux (style template) */}
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

      {/* SERVICES — 3 cards façon template */}
      <section id="services" className="bg-white">
        <div className="container-page">
          <div className="section-pad">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="h2 mb-4">Nos solutions pour les entreprises</h2>
              <p className="text-lg text-slate-500">
                Trois piliers complémentaires pour digitaliser et sécuriser vos communications professionnelles.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group flex flex-col rounded-3xl border border-slate-200 bg-white p-8 transition-all hover:-translate-y-1 hover:border-[var(--csx-primary)] hover:shadow-xl"
                >
                  <div aria-hidden="true" className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl text-2xl" style={{ background: "var(--csx-light)" }}>
                    {service.icon}
                  </div>
                  <h3 className="mb-3 text-xl font-bold tracking-tight transition-colors group-hover:text-[var(--csx-primary)]">
                    {service.title}
                  </h3>
                  <p className="mb-6 grow leading-relaxed text-slate-500">{service.description}</p>
                  <span className="inline-flex items-center text-sm font-[550]" style={{ color: "var(--csx-primary)" }}>
                    En savoir plus
                    <span className="ml-1 transition-transform duration-150 group-hover:translate-x-0.5">→</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* POURQUOI CSX — section sombre avec coin arrondi haut-droit */}
      <section className="relative">
        <div
          className="absolute inset-0 -z-10 mb-24 rounded-tr-[100px] md:mb-0"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(135deg, var(--csx-text) 0%, var(--csx-darker) 70%, var(--csx-dark) 100%)",
          }}
        />
        <div className="container-page text-white">
          <div className="section-pad">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="h2 mb-4 text-white">Pourquoi CSX Telecom ?</h2>
              <p className="text-lg text-white/70">
                Cinq atouts qui font la différence face aux opérateurs nationaux.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {reasons.map((reason, i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-white/5 p-6 backdrop-blur ring-1 ring-white/10"
                >
                  <h3 className="mb-2 text-lg font-bold tracking-tight" style={{ color: "var(--csx-secondary)" }}>
                    {reason.title}
                  </h3>
                  <p className="leading-relaxed text-white/80">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FIN DU CUIVRE — bandeau alerte */}
      <section className="bg-white">
        <div className="container-page">
          <div className="py-16">
            <div
              className="rounded-3xl p-8 text-white md:p-12"
              style={{
                background: "linear-gradient(135deg, var(--csx-primary), var(--csx-dark))",
              }}
            >
              <div className="md:flex md:items-center md:justify-between md:gap-8">
                <div className="mb-6 md:mb-0 md:max-w-2xl">
                  <h2 className="h3 mb-3 text-white">
                    <span aria-hidden="true">⚠️ </span>La fin du réseau cuivre RTC approche — êtes-vous prêt ?
                  </h2>
                  <p className="leading-relaxed text-white/85">
                    Orange arrête progressivement le réseau téléphonique traditionnel (RTC) sur l'ensemble du territoire.
                    Si votre entreprise fonctionne encore avec des lignes analogiques classiques, la migration vers l'IP est inévitable.
                    Nous vous accompagnons dans cette transition sans coupure et sans mauvaise surprise.
                  </p>
                </div>
                <Link
                  href="/blog/fin-reseau-cuivre-rtc"
                  className="btn shrink-0 bg-white text-[var(--csx-primary)] shadow-sm hover:bg-[var(--csx-light)]"
                >
                  En savoir plus →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ZONES — light bg, cards */}
      <section style={{ background: "var(--csx-light)" }}>
        <div className="container-page">
          <div className="section-pad">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="h2 mb-4">Nous intervenons près de chez vous</h2>
              <p className="text-lg text-slate-600">
                Haute-Garonne (31) · Tarn-et-Garonne (82) · Lot (46) · Pyrénées-Atlantiques (64)
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {zones.map((zone) => (
                <Link
                  key={zone.href}
                  href={zone.href}
                  className="group rounded-2xl border border-white bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[var(--csx-primary)] hover:shadow-md"
                >
                  <div
                    className="mb-1 text-lg font-bold tracking-tight transition-colors group-hover:text-[var(--csx-primary)]"
                    style={{ color: zone.priority ? "var(--csx-primary)" : "var(--csx-text)" }}
                  >
                    {zone.city}
                  </div>
                  <div className="text-sm text-slate-500">{zone.dept}</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL — section sombre style template */}
      <section className="relative">
        <div
          className="absolute inset-0 -z-10 rounded-bl-[100px]"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(135deg, var(--csx-darker) 0%, var(--csx-dark) 100%)",
          }}
        />
        <div className="container-page">
          <div className="py-16 md:py-20">
            <div className="lg:flex lg:items-center lg:justify-between lg:gap-16">
              <div className="mb-8 text-center lg:mb-0 lg:text-left">
                <p className="mb-3 text-xl font-[550]" style={{ color: "var(--csx-secondary)" }}>
                  Prêt à passer à la suite ?
                </p>
                <h2 className="h2 text-white">Parlons de votre situation télécom</h2>
                <p className="mt-4 text-lg text-white/75">
                  Audit gratuit, sans engagement, sur site ou à distance.
                </p>
              </div>
              <div className="flex justify-center lg:shrink-0">
                <Link
                  href="/contact"
                  className="btn group bg-white text-[var(--csx-primary)] shadow-sm hover:bg-[var(--csx-light)]"
                >
                  Demander mon audit gratuit — Réponse sous 24h
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
