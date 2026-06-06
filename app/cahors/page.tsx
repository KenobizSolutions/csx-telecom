import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Opérateur télécom à Cahors — Standard IP & Internet pro (46)",
  description:
    "CSX Telecom, siège social à Cahors. Opérateur ARCEP indépendant dans le Lot (46). Standard IP, IPBX, internet professionnel, agents IA. Expertise locale depuis 17 ans.",
  alternates: { canonical: "https://www.csx-telecom.fr/cahors" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "CSX Telecom — Cahors (siège social)",
  description:
    "Siège social de CSX Telecom à Cahors. Opérateur télécom indépendant déclaré ARCEP. Standard IP, IPBX, internet professionnel et agents IA pour les entreprises du Lot.",
  url: "https://www.csx-telecom.fr/cahors",
  telephone: "+33582730360",
  email: "contact@csx.fr",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cahors",
    postalCode: "46000",
    addressCountry: "FR",
  },
  areaServed: [
    { "@type": "City", name: "Cahors" },
    { "@type": "AdministrativeArea", name: "Lot" },
  ],
} as const;

const stats = [
  { value: "+17 ans", label: "d'expertise télécom depuis Cahors" },
  { value: "+200", label: "clients actifs en région Occitanie" },
  { value: "Lot (46)", label: "notre territoire historique" },
  { value: "ARCEP", label: "opérateur déclaré, multi-opérateur" },
];

const services = [
  {
    icon: "📞",
    title: "Standard téléphonique IP & IPBX",
    description:
      "Migration depuis le réseau cuivre RTC, installation de standard IP cloud ou sur site. Le département du Lot est particulièrement impacté par la fin du cuivre : nous gérons l'ensemble de la transition sans coupure.",
    href: "/standard-telephonique-ipbx",
  },
  {
    icon: "🌐",
    title: "Internet professionnel & MPLS",
    description:
      "Fibre là où elle est disponible, SDSL, 5G et Starlink pour les zones non encore desservies. Dans le Lot, la couverture fibre est inégale : notre expertise multi-opérateur permet de trouver la meilleure solution pour chaque adresse.",
    href: "/internet-professionnel",
  },
  {
    icon: "🤖",
    title: "Agents virtuels IA",
    description:
      "Standard téléphonique IA 24h/24. Pour les professions libérales, commerces, hôtels et artisans cadurciens : ne manquez plus jamais un appel, même en déplacement ou hors des heures d'ouverture.",
    href: "/agents-virtuels-ia",
  },
];

const reasons = [
  {
    title: "Cahors, notre siège social depuis l'origine",
    description:
      "CSX Telecom est né à Cahors. Notre siège social, nos équipes dirigeantes et nos opérations centrales sont basés dans le Lot depuis plus de 17 ans. Vous ne parlez pas à un prestataire de passage : vous parlez à l'entreprise elle-même.",
  },
  {
    title: "Connaissance fine du territoire lotois",
    description:
      "Nous connaissons les contraintes spécifiques du Lot : zones blanches, déploiement fibre partiel, impact fort de la fin du réseau cuivre sur les zones rurales. Nous apportons des solutions concrètes là où les opérateurs nationaux restent vagues.",
  },
  {
    title: "Le Lot face à la fin du cuivre",
    description:
      "Le réseau cuivre RTC d'Orange est en cours d'extinction. Le département 46 compte de nombreuses entreprises encore connectées en analogique. CSX Telecom réalise des centaines de migrations dans le Lot, avec portage des numéros et zéro coupure.",
  },
  {
    title: "Solutions pour zones rurales et semi-rurales",
    description:
      "Artisans à Figeac, hôtels dans la vallée du Lot, châteaux viticoles dans le Cahorsien : nos solutions fibre, SDSL, 5G et Starlink s'adaptent à chaque situation géographique, même les plus contraintes.",
  },
];

const zones = [
  "Cahors centre",
  "Figeac",
  "Saint-Céré",
  "Souillac",
  "Gourdon",
  "Bretenoux",
  "Prayssac & Puy-l'Évêque",
  "Luzech & Douelle",
];

const faqItems = [
  {
    question: "Mon entreprise dans le Lot est-elle concernée par la fin du réseau cuivre ?",
    answer:
      "Très probablement oui. Le département du Lot est particulièrement touché par l'extinction du réseau RTC d'Orange. Plusieurs communes du 46 sont déjà dans le calendrier de fermeture. Si votre entreprise fonctionne encore avec des lignes analogiques, des installations d'alarme sur cuivre ou des terminaux de paiement filaires, la migration vers l'IP est inévitable — parfois sous moins de 12 mois. CSX Telecom réalise un audit gratuit pour identifier votre date de bascule et préparer la transition.",
  },
  {
    question: "CSX Telecom peut-il intervenir dans les zones rurales du Lot ?",
    answer:
      "C'est précisément notre cœur de métier dans le 46. Notre siège est à Cahors et nos techniciens se déplacent dans tout le département : Figeac, Saint-Céré, Souillac, Gourdon, Bretenoux, la vallée du Lot. Nous connaissons les contraintes des zones rurales et semi-rurales du Lot mieux que tout autre opérateur. Pas de frais kilométriques excessifs sur la zone Lot.",
  },
  {
    question: "Quelles solutions pour une entreprise dans une zone blanche ou mal couverte du Lot ?",
    answer:
      "Nous proposons Starlink Business pour les sites où aucune solution filaire n'est disponible. Couplé à un lien 4G/5G de secours automatique, c'est aujourd'hui la solution la plus fiable pour les exploitations agricoles, hôtels en campagne, châteaux viticoles et gîtes professionnels du Cahorsien. L'installation Starlink se fait en quelques heures et ne nécessite pas de travaux de génie civil.",
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

export default function CahorsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

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
                Lot (46) · Siège social CSX Telecom · Opérateur ARCEP
              </div>
              <h1 className="h1 mb-6 text-white">
                Opérateur télécom à Cahors et dans le Lot —{" "}
                <span style={{ color: "var(--csx-secondary)" }}>CSX Telecom</span>
              </h1>
              <p className="mb-4 text-lg font-[550] text-white/90 md:text-xl">
                Notre siège est à Cahors. Le Lot est notre territoire depuis le premier jour.
              </p>
              <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
                CSX Telecom est né à Cahors. Depuis plus de 17 ans, nous accompagnons les entreprises
                du Lot dans leurs projets télécom : standard IP, internet professionnel, migration
                depuis le réseau cuivre RTC et agents IA. Une expertise locale sans équivalent
                dans le département.
              </p>
              <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link href="/contact" className="btn group bg-white text-[var(--csx-primary)] shadow-sm hover:bg-[var(--csx-light)]">
                  Demander un audit gratuit dans le Lot
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

      {/* ENCART SIÈGE */}
      <section className="bg-white">
        <div className="container-page">
          <div className="pb-12">
            <div
              className="flex items-start gap-5 rounded-2xl border-l-4 p-6"
              style={{ background: "var(--csx-light)", borderColor: "var(--csx-secondary)" }}
            >
              <span className="shrink-0 text-3xl">🏢</span>
              <div>
                <p className="mb-1 text-lg font-bold tracking-tight" style={{ color: "var(--csx-primary)" }}>
                  Siège social CSX Telecom — Cahors, Lot (46)
                </p>
                <p className="text-sm leading-relaxed text-slate-600">
                  Toutes les décisions, toute l'expertise opérationnelle et l'ensemble de nos équipes
                  de direction sont basés à Cahors. Quand vous nous appelez, vous parlez directement
                  aux personnes qui gèrent votre dossier — pas à un centre d'appels délocalisé.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-white">
        <div className="container-page">
          <div className="section-pad">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="h2 mb-4">Nos solutions pour les entreprises du Lot</h2>
              <p className="text-lg text-slate-600">
                Téléphonie IP, internet professionnel et agents IA : toutes nos solutions sont
                disponibles à Cahors et dans l'ensemble du département 46.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group flex flex-col rounded-3xl border border-slate-200 bg-white p-8 transition-all hover:-translate-y-1 hover:border-[var(--csx-primary)] hover:shadow-xl"
                >
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl text-2xl" style={{ background: "var(--csx-light)" }}>
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

      {/* POURQUOI CSX — section sombre */}
      <section className="relative">
        <div
          className="absolute inset-0 -z-10 mb-24 rounded-tr-[100px] md:mb-0"
          aria-hidden="true"
          style={{ background: "linear-gradient(135deg, var(--csx-text) 0%, var(--csx-darker) 70%, var(--csx-dark) 100%)" }}
        />
        <div className="container-page text-white">
          <div className="section-pad">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="h2 mb-4 text-white">Pourquoi CSX Telecom dans le Lot ?</h2>
              <p className="text-lg text-white/70">
                Pas un opérateur national qui "couvre" le 46 depuis Paris. Une entreprise lotoise
                qui connaît le territoire et y est implantée depuis ses débuts.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {reasons.map((reason, i) => (
                <div key={i} className="rounded-2xl bg-white/5 p-6 backdrop-blur ring-1 ring-white/10">
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

      {/* ZONES COUVERTES */}
      <section className="bg-white">
        <div className="container-page">
          <div className="py-12">
            <div
              className="rounded-3xl p-8 text-white md:p-10"
              style={{ background: "linear-gradient(135deg, var(--csx-primary), var(--csx-dark))" }}
            >
              <h2 className="mb-3 text-2xl font-bold tracking-tight text-white">
                📍 Couverture de l'ensemble du département du Lot
              </h2>
              <p className="mb-5 leading-relaxed text-white/85">
                Depuis Cahors, nos équipes interviennent dans tout le 46 — du nord (Figeac,
                Saint-Céré) au sud (Gourdon) en passant par la vallée du Lot.
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

      {/* SECTION EDITORIALE SEO */}
      <section className="bg-white">
        <div className="container-page">
          <div className="section-pad">
            <div className="mx-auto max-w-3xl">
              <div className="space-y-12">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight md:text-3xl" style={{ color: "var(--csx-primary)" }}>
                    Standard téléphonique d'entreprise à Cahors (Lot, 46)
                  </h2>
                  <p className="mt-4 leading-relaxed text-slate-600">
                    Mettre en place un{" "}
                    <Link href="/standard-telephonique-ipbx" className="font-[550] underline decoration-[var(--csx-secondary)] underline-offset-2 hover:text-[var(--csx-primary)]">
                      standard téléphonique d'entreprise
                    </Link>{" "}
                    à Cahors, c'est s'appuyer sur l'opérateur qui a son siège social dans le Lot. CSX Telecom
                    accompagne depuis l'origine les commerces, cabinets, artisans et PME cadurciens dans le
                    remplacement de leurs anciennes lignes analogiques par une solution moderne, multi-postes et
                    évolutive. L'extinction du réseau cuivre RTC d'Orange rend cette bascule particulièrement
                    urgente dans le département 46, où de nombreuses installations fonctionnent encore en
                    analogique.
                  </p>
                  <p className="mt-4 leading-relaxed text-slate-600">
                    Chaque projet démarre par un audit gratuit de l'existant à Cahors et dans sa périphérie. Nous
                    qualifions le nombre de postes, les usages réels et l'éligibilité de chaque adresse, puis nous
                    assurons le portage des numéros sans coupure. Parce que nous sommes implantés sur place, vous
                    gardez un interlocuteur direct du premier échange à la mise en service, sans centre d'appels
                    délocalisé.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold tracking-tight md:text-3xl" style={{ color: "var(--csx-primary)" }}>
                    Opérateur internet professionnel à Cahors
                  </h2>
                  <p className="mt-4 leading-relaxed text-slate-600">
                    Dans le Lot, la couverture fibre reste inégale d'une commune à l'autre, et les zones rurales du
                    Cahorsien sont souvent mal desservies par les opérateurs nationaux. En tant qu'opérateur déclaré
                    ARCEP accédant directement à Orange, SFR, Bouygues, aux opérateurs fibre locaux et à Starlink
                    Business, CSX Telecom construit une offre d'{" "}
                    <Link href="/internet-professionnel" className="font-[550] underline decoration-[var(--csx-secondary)] underline-offset-2 hover:text-[var(--csx-primary)]">
                      internet professionnel
                    </Link>{" "}
                    réellement adaptée à chaque adresse, fibre, SDSL, 5G, Starlink ou MPLS selon l'éligibilité.
                  </p>
                  <p className="mt-4 leading-relaxed text-slate-600">
                    Pour les entreprises cadurciennes dont l'activité ne peut tolérer aucune interruption, nous
                    associons un lien principal et une solution de secours automatique, avec un engagement de
                    rétablissement (GTR). Cette approche multi-opérateur, pilotée localement, garantit un accès
                    internet fiable même dans les secteurs du Lot où la fibre tarde encore à arriver.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold tracking-tight md:text-3xl" style={{ color: "var(--csx-primary)" }}>
                    IPBX & téléphonie IP à Cahors
                  </h2>
                  <p className="mt-4 leading-relaxed text-slate-600">
                    La{" "}
                    <Link href="/voip-telephonie-cloud" className="font-[550] underline decoration-[var(--csx-secondary)] underline-offset-2 hover:text-[var(--csx-primary)]">
                      téléphonie IP dans le cloud
                    </Link>{" "}
                    remplace avantageusement les anciens autocommutateurs : standard automatique, files
                    d'attente, renvois intelligents, postes nomades et messagerie unifiée, le tout administrable à
                    distance. Pour les entreprises du Lot qui disposent de plusieurs sites ou de collaborateurs en
                    déplacement dans la vallée, un{" "}
                    <Link href="/standard-telephonique-ipbx" className="font-[550] underline decoration-[var(--csx-secondary)] underline-offset-2 hover:text-[var(--csx-primary)]">
                      IPBX cloud ou sur site
                    </Link>{" "}
                    centralise la téléphonie sans multiplier les abonnements.
                  </p>
                  <p className="mt-4 leading-relaxed text-slate-600">
                    Depuis Cahors, nos équipes paramètrent l'IPBX au plus près de votre organisation et forment vos
                    collaborateurs. La migration s'effectue sans coupure et sans changement de numéro, un atout
                    décisif pour les structures cadurciennes installées de longue date et soucieuses de préserver
                    leur identité téléphonique.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold tracking-tight md:text-3xl" style={{ color: "var(--csx-primary)" }}>
                    Accueil téléphonique IA à Cahors
                  </h2>
                  <p className="mt-4 leading-relaxed text-slate-600">
                    Dans un territoire où les TPE et indépendants sont souvent seuls à gérer l'accueil, l'{" "}
                    <Link href="/agents-virtuels-ia" className="font-[550] underline decoration-[var(--csx-secondary)] underline-offset-2 hover:text-[var(--csx-primary)]">
                      accueil téléphonique par agent IA
                    </Link>{" "}
                    permet de ne plus jamais manquer un appel. Professions libérales, hôtels de la vallée du Lot,
                    artisans et commerces cadurciens peuvent confier à un agent virtuel la prise de messages, la
                    qualification des demandes et l'orientation des appelants, 24h/24 et même hors des horaires
                    d'ouverture.
                  </p>
                  <p className="mt-4 leading-relaxed text-slate-600">
                    Couplé à votre standard IP, l'agent IA s'intègre naturellement à votre organisation existante et
                    se déclenche en débordement ou en dehors des heures de bureau. Vous souhaitez évaluer la
                    solution la plus pertinente pour votre entreprise à Cahors ?{" "}
                    <Link href="/contact" className="font-[550] underline decoration-[var(--csx-secondary)] underline-offset-2 hover:text-[var(--csx-primary)]">
                      Demandez votre audit gratuit
                    </Link>{" "}
                    : un interlocuteur local du Lot vous répond.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: "var(--csx-light)" }}>
        <div className="container-page">
          <div className="section-pad">
            <div className="mx-auto max-w-3xl">
              <div className="mb-12 text-center">
                <h2 className="h2 mb-4">Questions fréquentes — Télécom dans le Lot</h2>
                <p className="text-lg text-slate-600">
                  Les questions les plus fréquentes des entreprises du département 46.
                </p>
              </div>
              <div className="space-y-4">
                {faqItems.map((item, i) => (
                  <details
                    key={i}
                    className="group rounded-2xl border border-white bg-white p-6 shadow-sm open:border-[var(--csx-primary)]"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-bold tracking-tight">
                      <span>{item.question}</span>
                      <span
                        className="shrink-0 text-xl font-light transition-transform group-open:rotate-45"
                        style={{ color: "var(--csx-primary)" }}
                      >
                        +
                      </span>
                    </summary>
                    <p className="mt-4 leading-relaxed text-slate-600">{item.answer}</p>
                  </details>
                ))}
              </div>
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
                  Votre opérateur télécom est à Cahors
                </p>
                <h2 className="h2 text-white">Audit gratuit dans tout le Lot</h2>
                <p className="mt-4 text-lg text-white/75">
                  Audit gratuit, sur site ou à distance dans tout le Lot. Devis sous 48h. Un
                  interlocuteur local qui connaît votre territoire.
                </p>
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
