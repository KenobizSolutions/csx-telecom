import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Installateur téléphonie IP à Toulouse (31)",
  description:
    "Installateur standard téléphonique IP & internet pro à Toulouse. Opérateur ARCEP, intervention sur site dans toute la métropole. Devis gratuit sous 48 h.",
  alternates: { canonical: "https://www.csx-telecom.fr/toulouse" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Opérateur télécom pour entreprises à Toulouse",
  serviceType: "Téléphonie IP, internet professionnel et agents IA",
  provider: {
    "@type": "Organization",
    name: "CSX Telecom",
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
  },
  description:
    "CSX Telecom, opérateur déclaré ARCEP, intervient à Toulouse et en Haute-Garonne : standard IP, IPBX, internet professionnel multi-opérateur et agents IA pour les entreprises de la métropole toulousaine.",
  url: "https://www.csx-telecom.fr/toulouse",
  areaServed: [
    { "@type": "City", name: "Toulouse" },
    { "@type": "AdministrativeArea", name: "Haute-Garonne" },
  ],
} as const;

const stats = [
  { value: "+200", label: "clients actifs en région Occitanie" },
  { value: "+17 ans", label: "d'expérience télécom d'entreprise" },
  { value: "ARCEP", label: "opérateur déclaré, multi-opérateur" },
  { value: "24h/24", label: "supervision et agents IA disponibles" },
];

const services = [
  {
    icon: "📞",
    title: "Standard téléphonique IP & IPBX",
    description:
      "De 2 à +100 postes, cloud ou sur site. Portage de vos numéros sans coupure. Nos techniciens se déplacent sur Toulouse intra-muros et dans toute la première couronne.",
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
    title: "Une couverture terrain de toute la métropole",
    description:
      "Nos techniciens interviennent directement sur Toulouse et sa couronne — Labège-Innopole, Colomiers, Blagnac, Tournefeuille — depuis nos agences d'Occitanie, sans sous-traitance ni délai imposé par un prestataire.",
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
      "Votre consultant dédié connaît votre dossier et reste joignable directement pour toute la durée du contrat. Aucun ticket, aucune hotline nationale, aucun sous-traitant interposé.",
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
    question: "CSX Telecom intervient-il vraiment à Toulouse ?",
    answer:
      "Oui. Nous ne sommes pas un opérateur national qui déclare « couvrir » Toulouse depuis Paris. Opérateur régional d'Occitanie, nous intervenons directement sur Toulouse Métropole : nos techniciens se déplacent chez vous — Toulouse intra-muros, Labège, Colomiers, Blagnac, Tournefeuille — sans sous-traitance et sans délai imposé par un prestataire extérieur.",
  },
  {
    question: "Quel est le délai d'intervention à Toulouse en cas de panne ?",
    answer:
      "Nous proposons des GTR (Garantie de Temps de Rétablissement) contractuelles de 4h ou 8h selon votre offre — l'engagement porte sur le rétablissement de votre accès. Pour les petites structures sans GTR, la prise en charge téléphonique est immédiate et l'intervention sur site est planifiée selon la disponibilité de nos équipes.",
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
      <BreadcrumbJsonLd items={[{ name: "Accueil", url: "https://www.csx-telecom.fr/" }, { name: "Toulouse", url: "https://www.csx-telecom.fr/toulouse" }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

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
                Haute-Garonne (31) · Opérateur ARCEP · Intervention sur site
              </div>
              <h1 className="h1 mb-6 text-white">
                Téléphonie IP et internet professionnel à Toulouse —{" "}
                <span style={{ color: "var(--csx-secondary)" }}>CSX Telecom</span>
              </h1>
              <p className="mb-4 text-lg font-[550] text-white/90 md:text-xl">
                Un opérateur télécom indépendant qui intervient sur toute la métropole toulousaine.
              </p>
              <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
                Standard IP, IPBX, internet multi-opérateur, MPLS et agents IA : CSX Telecom accompagne
                les entreprises de Toulouse et de la Haute-Garonne avec des techniciens qui interviennent
                sur site et un consultant dédié pour toute la durée de votre contrat.
              </p>
              <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link href="/contact" className="btn group bg-white text-[var(--csx-primary)] shadow-sm hover:bg-[var(--csx-light)]">
                  Demander un audit gratuit à Toulouse
                  <span className="ml-2 transition-transform duration-150 group-hover:translate-x-0.5">→</span>
                </Link>
                <a href="#services" className="btn border border-white/40 bg-white/10 text-white backdrop-blur hover:bg-white/20">
                  Nos services
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

      <section id="services" className="bg-white">
        <div className="container-page">
          <div className="section-pad">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="h2 mb-4">Nos solutions pour les entreprises de Toulouse</h2>
              <p className="text-lg text-slate-600">
                Toutes nos solutions sont disponibles à Toulouse, avec installation et maintenance
                assurées par nos propres techniciens. Pas de sous-traitance.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {services.map((service) => (
                <Link key={service.href} href={service.href} className="group flex flex-col rounded-3xl border border-slate-200 bg-white p-8 transition-all hover:-translate-y-1 hover:border-[var(--csx-primary)] hover:shadow-xl">
                  <div aria-hidden="true" className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl text-2xl" style={{ background: "var(--csx-light)" }}>{service.icon}</div>
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
              <h2 className="h2 mb-4 text-white">Pourquoi CSX Telecom à Toulouse ?</h2>
              <p className="text-lg text-white/70">
                Un opérateur régional qui intervient directement à Toulouse, pas un revendeur national qui
                sous-traite les interventions terrain.
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
          <div className="py-12">
            <div className="rounded-3xl p-8 text-white md:p-10" style={{ background: "linear-gradient(135deg, var(--csx-primary), var(--csx-dark))" }}>
              <h2 className="mb-3 text-2xl font-bold tracking-tight text-white"><span aria-hidden="true">📍 </span>Intervention sur toute la métropole toulousaine</h2>
              <p className="mb-5 leading-relaxed text-white/85">
                Nos techniciens couvrent Toulouse et la première couronne. Déplacement rapide, sans
                frais supplémentaires sur la zone Toulouse Métropole.
              </p>
              <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
                {zones.map((zone) => (
                  <div key={zone} className="flex items-center gap-2 text-sm text-white/90">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: "var(--csx-secondary)" }} />
                    {zone}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--csx-light)" }}>
        <div className="container-page">
          <div className="section-pad">
            <div className="mx-auto max-w-3xl">
              <div className="mb-12 text-center">
                <h2 className="h2 mb-4">Questions fréquentes — Télécom à Toulouse</h2>
                <p className="text-lg text-slate-600">Les questions les plus courantes des entreprises de la métropole toulousaine.</p>
              </div>
              <div className="space-y-4">
                {faqItems.map((item, i) => (
                  <details key={i} className="group rounded-2xl border border-white bg-white p-6 shadow-sm open:border-[var(--csx-primary)]">
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
                <p className="mb-3 text-xl font-[550]" style={{ color: "var(--csx-secondary)" }}>Parlons de votre télécom à Toulouse</p>
                <h2 className="h2 text-white">Un consultant CSX Telecom vous répond sous 24h</h2>
                <p className="mt-4 text-lg text-white/75">Audit gratuit sur site ou à distance. Devis sous 48h.</p>
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
