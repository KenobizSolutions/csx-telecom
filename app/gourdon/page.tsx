import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Opérateur télécom à Gourdon — Standard IP & Internet pro (46)",
  description:
    "Opérateur télécom à Gourdon et dans le sud du Lot (46). Standard IP, internet fibre, 5G et Starlink pour zones rurales. Audit gratuit, intervention locale depuis Cahors.",
  alternates: { canonical: "https://www.csx-telecom.fr/gourdon" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "CSX Telecom — Gourdon",
  description:
    "Opérateur télécom indépendant déclaré ARCEP. Standard IP, internet fibre, 5G et Starlink pour les entreprises de Gourdon et du sud du Lot. Spécialiste des zones rurales.",
  url: "https://www.csx-telecom.fr/gourdon",
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
  { value: "+17 ans", label: "d'expérience télécom d'entreprise" },
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

const faqItems = [
  {
    question: "La fibre optique est-elle disponible à Gourdon et dans le Gourdonais ?",
    answer:
      "Le déploiement fibre dans le Gourdonais est en cours grâce au réseau THD Lot porté par le Département. La commune de Gourdon et certaines zones proches sont éligibles, mais la couverture reste incomplète en périphérie et dans les hameaux. CSX Telecom vérifie gratuitement l'éligibilité de votre adresse exacte et vous propose la meilleure solution disponible : fibre quand elle est là, SDSL, 5G ou Starlink sinon.",
  },
  {
    question: "Quelle solution internet professionnel pour une entreprise rurale dans le sud du Lot ?",
    answer:
      "Pour les entreprises sans fibre, nous recommandons Starlink Business couplé à un lien 5G de backup automatique. Starlink offre aujourd'hui des débits de 50 à 200 Mb/s avec une faible latence — largement suffisant pour la téléphonie IP, les applications cloud et la visioconférence. L'installation se fait en quelques heures, sans travaux. Le basculement automatique sur 5G garantit une continuité de service même en cas d'incident Starlink.",
  },
  {
    question: "CSX Telecom intervient-il aussi dans les communes autour de Gourdon ?",
    answer:
      "Oui. Nos techniciens couvrent tout le bassin gourdonais depuis notre siège de Cahors (moins de 30 km). Salviac, Payrac, Souillac, Carlucet, Cénac-et-Saint-Julien, Groléjac : nous intervenons sans sous-traitance dans toute la zone. Pas de surcoût kilométrique sur les communes du Gourdonais. Un seul interlocuteur pour l'audit, l'installation et la maintenance.",
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

export default function GourdonPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <section className="relative">
        <div className="absolute inset-0 -z-10 mb-28 rounded-bl-[100px] md:mb-0" aria-hidden="true" style={{ background: "linear-gradient(135deg, var(--csx-darker) 0%, var(--csx-dark) 50%, var(--csx-primary) 100%)" }} />
        <div className="container-page">
          <div className="pt-20 pb-16 md:pt-28 md:pb-28">
            <div className="mx-auto max-w-3xl text-center text-white anim-fade-up">
              <div className="mb-6 inline-flex items-center rounded-full bg-white/15 px-4 py-1.5 text-xs font-[550] uppercase tracking-wider text-white/90 backdrop-blur">
                Sud du Lot (46) · Fibre · 5G · Starlink · Opérateur ARCEP
              </div>
              <h1 className="h1 mb-6 text-white">
                Téléphonie professionnelle à Gourdon —{" "}
                <span style={{ color: "var(--csx-secondary)" }}>CSX Telecom</span>
              </h1>
              <p className="mb-4 text-lg font-[550] text-white/90 md:text-xl">
                Des solutions télécom qui fonctionnent dans les zones rurales du sud du Lot.
              </p>
              <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
                Dans le Gourdonais, la fibre n'est pas encore partout et le réseau cuivre RTC s'arrête.
                CSX Telecom propose des solutions adaptées : fibre quand elle est disponible, 5G ou
                Starlink Business là où elle ne l'est pas encore, et un standard IP sans coupure.
              </p>
              <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link href="/contact" className="btn group bg-white text-[var(--csx-primary)] shadow-sm hover:bg-[var(--csx-light)]">
                  Demander un audit gratuit à Gourdon
                  <span className="ml-2 transition-transform duration-150 group-hover:translate-x-0.5">→</span>
                </Link>
                <a href="#services" className="btn border border-white/40 bg-white/10 text-white backdrop-blur hover:bg-white/20">
                  Nos solutions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-page">
          <div className="py-12 md:py-16">
            <div className="grid grid-cols-2 gap-8 md:-mx-9 md:grid-cols-4 md:gap-0">
              {stats.map((stat, i) => (
                <div key={i} className="relative text-center md:px-9 md:after:absolute md:after:right-0 md:after:top-1/2 md:after:h-12 md:after:w-px md:after:-translate-y-1/2 md:after:bg-slate-200 md:last:after:hidden">
                  <div className="mb-2 text-2xl font-bold tracking-tight md:text-3xl" style={{ color: "var(--csx-primary)" }}>{stat.value}</div>
                  <div className="text-sm text-slate-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-page">
          <div className="pb-12">
            <div className="rounded-3xl p-7 text-white" style={{ background: "linear-gradient(135deg, var(--csx-primary), var(--csx-dark))" }}>
              <h2 className="mb-4 text-xl font-bold tracking-tight text-white">🛰️ Connectivité professionnelle même en zone rurale</h2>
              <p className="mb-5 text-sm leading-relaxed text-white/85">
                La couverture fibre du Gourdonais est en cours mais encore partielle. CSX Telecom
                s'adapte à chaque situation grâce à un panel de technologies complémentaires.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {techs.map((t) => (
                  <div key={t.label} className="flex items-center gap-3 text-sm text-white/90">
                    <span className="text-xl">{t.icon}</span>
                    {t.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" style={{ background: "var(--csx-light)" }}>
        <div className="container-page">
          <div className="section-pad">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="h2 mb-4">Nos solutions pour les entreprises du Gourdonais</h2>
              <p className="text-lg text-slate-600">
                Standard IP, internet adapté à votre connectivité réelle et agents IA : des solutions
                professionnelles conçues pour fonctionner dans le sud du Lot.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {services.map((service) => (
                <Link key={service.href} href={service.href} className="group flex flex-col rounded-3xl border border-white bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-[var(--csx-primary)] hover:shadow-xl">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl text-2xl" style={{ background: "var(--csx-light)" }}>{service.icon}</div>
                  <h3 className="mb-3 text-xl font-bold tracking-tight transition-colors group-hover:text-[var(--csx-primary)]">{service.title}</h3>
                  <p className="mb-6 grow leading-relaxed text-slate-500">{service.description}</p>
                  <span className="inline-flex items-center text-sm font-[550]" style={{ color: "var(--csx-primary)" }}>
                    En savoir plus<span className="ml-1 transition-transform duration-150 group-hover:translate-x-0.5">→</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative">
        <div className="absolute inset-0 -z-10 mb-24 rounded-tr-[100px] md:mb-0" aria-hidden="true" style={{ background: "linear-gradient(135deg, var(--csx-text) 0%, var(--csx-darker) 70%, var(--csx-dark) 100%)" }} />
        <div className="container-page text-white">
          <div className="section-pad">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="h2 mb-4 text-white">Pourquoi CSX Telecom à Gourdon ?</h2>
              <p className="text-lg text-white/70">
                Un opérateur qui connaît les contraintes des zones rurales et apporte de vraies
                réponses, pas des offres standardisées pensées pour les villes.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {reasons.map((reason, i) => (
                <div key={i} className="rounded-2xl bg-white/5 p-6 backdrop-blur ring-1 ring-white/10">
                  <h3 className="mb-2 text-lg font-bold tracking-tight" style={{ color: "var(--csx-secondary)" }}>{reason.title}</h3>
                  <p className="leading-relaxed text-white/80">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-page">
          <div className="section-pad">
            <div className="mx-auto max-w-3xl">
              <div className="mb-12 text-center">
                <h2 className="h2 mb-4">Questions fréquentes — Télécom à Gourdon</h2>
                <p className="text-lg text-slate-600">Les questions des entreprises du Gourdonais et du sud du Lot.</p>
              </div>
              <div className="space-y-4">
                {faqItems.map((item, i) => (
                  <details key={i} className="group rounded-2xl border border-slate-200 bg-white p-6 open:border-[var(--csx-primary)] open:shadow-sm">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-bold tracking-tight">
                      <span>{item.question}</span>
                      <span className="shrink-0 text-xl font-light transition-transform group-open:rotate-45" style={{ color: "var(--csx-primary)" }}>+</span>
                    </summary>
                    <p className="mt-4 leading-relaxed text-slate-600">{item.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative">
        <div className="absolute inset-0 -z-10 rounded-bl-[100px]" aria-hidden="true" style={{ background: "linear-gradient(135deg, var(--csx-darker) 0%, var(--csx-dark) 100%)" }} />
        <div className="container-page">
          <div className="py-16 md:py-20">
            <div className="lg:flex lg:items-center lg:justify-between lg:gap-16">
              <div className="mb-8 text-center lg:mb-0 lg:text-left">
                <p className="mb-3 text-xl font-[550]" style={{ color: "var(--csx-secondary)" }}>Votre télécom à Gourdon, résolu</p>
                <h2 className="h2 text-white">Audit gratuit sur site</h2>
                <p className="mt-4 text-lg text-white/75">Nous analysons votre connectivité réelle et vous proposons la solution adaptée à votre situation géographique exacte.</p>
              </div>
              <div className="flex justify-center lg:shrink-0">
                <Link href="/contact" className="btn group bg-white text-[var(--csx-primary)] shadow-sm hover:bg-[var(--csx-light)]">
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
