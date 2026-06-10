import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Opérateur télécom Bayonne · Biarritz (64)",
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
  { value: "+17 ans", label: "d'expérience télécom d'entreprise" },
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <section className="relative">
        <div className="absolute inset-0 -z-10 mb-28 rounded-bl-[100px] md:mb-0" aria-hidden="true" style={{ background: "linear-gradient(135deg, var(--csx-darker) 0%, var(--csx-dark) 50%, var(--csx-primary) 100%)" }} />
        <div className="container-page">
          <div className="pt-20 pb-16 md:pt-28 md:pb-28">
            <div className="mx-auto max-w-3xl text-center text-white anim-fade-up">
              <div className="mb-6 inline-flex items-center rounded-full bg-white/15 px-4 py-1.5 text-xs font-[550] uppercase tracking-wider text-white/90 backdrop-blur">
                Pays Basque · Pyrénées-Atlantiques (64) · Antenne locale · Opérateur ARCEP
              </div>
              <h1 className="h1 mb-6 text-white">
                Téléphonie IP et internet pro à Bayonne et Biarritz —{" "}
                <span style={{ color: "var(--csx-secondary)" }}>CSX Telecom</span>
              </h1>
              <p className="mb-4 text-lg font-[550] text-white/90 md:text-xl">
                Un opérateur télécom indépendant présent sur le Pays Basque.
              </p>
              <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
                Standard IP, IPBX, internet multi-opérateur et agents IA vocaux : CSX Telecom accompagne
                les entreprises du BAB et du Pays Basque avec une antenne locale, des techniciens qui
                se déplacent et un consultant dédié pendant toute la durée de votre contrat.
              </p>
              <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link href="/contact" className="btn group bg-white text-[var(--csx-primary)] shadow-sm hover:bg-[var(--csx-light)]">
                  Demander un audit gratuit au Pays Basque
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
              <h2 className="h2 mb-4">Nos solutions pour les entreprises du Pays Basque</h2>
              <p className="text-lg text-slate-600">
                Toutes nos solutions sont disponibles à Bayonne, Biarritz et dans l'ensemble du Pays
                Basque, avec installation et maintenance par nos équipes locales.
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
              <h2 className="h2 mb-4 text-white">Pourquoi CSX Telecom au Pays Basque ?</h2>
              <p className="text-lg text-white/70">
                Une antenne locale dédiée, un accès à tous les opérateurs du territoire et des
                solutions adaptées à l'économie basque.
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
              <h2 className="mb-3 text-2xl font-bold tracking-tight text-white"><span aria-hidden="true">📍 </span>Intervention dans tout le Pays Basque</h2>
              <p className="mb-5 leading-relaxed text-white/85">
                Notre équipe locale couvre l'ensemble du bassin BAB et le Pays Basque intérieur,
                de Hendaye à Hasparren.
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
                <h2 className="h2 mb-4">Questions fréquentes — Télécom au Pays Basque</h2>
                <p className="text-lg text-slate-600">Les questions des entreprises de Bayonne, Biarritz et du Pays Basque.</p>
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
                <p className="mb-3 text-xl font-[550]" style={{ color: "var(--csx-secondary)" }}>Parlons de votre télécom au Pays Basque</p>
                <h2 className="h2 text-white">Un consultant local vous répond sous 24h</h2>
                <p className="mt-4 text-lg text-white/75">Audit gratuit sur site ou à distance. Devis clair sous 48h. Intervention rapide sur le BAB.</p>
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
