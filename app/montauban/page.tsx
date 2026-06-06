import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Opérateur télécom à Montauban — Standard IP & Internet pro (82)",
  description:
    "Opérateur télécom à Montauban et dans le Tarn-et-Garonne (82). Standard IP, IPBX, internet professionnel multi-opérateur pour TPE et PME. Audit gratuit, intervention locale.",
  alternates: { canonical: "https://www.csx-telecom.fr/montauban" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "CSX Telecom — Montauban",
  description:
    "Opérateur télécom indépendant déclaré ARCEP à Montauban. Standard IP, IPBX, internet professionnel et agents IA pour les TPE et PME du Tarn-et-Garonne.",
  url: "https://www.csx-telecom.fr/montauban",
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
  { value: "+17 ans", label: "d'expérience télécom d'entreprise" },
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
    title: "Sur l'axe Montauban-Cahors : une couverture rapprochée",
    description:
      "Montauban se trouve sur notre zone d'intervention historique, à proximité directe de notre siège de Cahors. Qu'il s'agisse d'une intervention rapide ou d'un projet plus complexe, la couverture est assurée sans délai supplémentaire.",
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

const faqItems = [
  {
    question: "Combien de temps faut-il pour installer un standard IP à Montauban ?",
    answer:
      "Pour une TPE de 2 à 10 postes, l'installation complète prend généralement 1 à 3 semaines : audit initial (1 à 2 jours), commande et portage des numéros (5 à 10 jours ouvrés selon l'opérateur cédant), installation matérielle et formation (1 journée sur site). Pour les PME avec 10 postes ou plus et plusieurs lignes à porter, comptez 3 à 6 semaines. Dans tous les cas, le service téléphonique n'est jamais coupé pendant la migration.",
  },
  {
    question: "Existe-t-il des offres adaptées aux très petites entreprises de Montauban ?",
    answer:
      "Oui. Beaucoup d'opérateurs proposent des solutions dimensionnées pour les grandes structures. Chez CSX Telecom, nous servons aussi bien l'artisan de 2 salariés que la PME de 150 personnes. Une TPE peut avoir un standard IP cloud avec 2 postes et un agent IA à un tarif très compétitif. Pas de frais d'installation excessifs, pas de forfait surdimensionné. Nous construisons l'offre à la taille réelle de l'entreprise.",
  },
  {
    question: "Comment se passe la migration depuis le réseau cuivre dans le Tarn-et-Garonne ?",
    answer:
      "Le 82 est concerné par les fermetures progressives du réseau RTC d'Orange. La migration se déroule en 4 étapes : audit de l'installation existante (gratuit), proposition d'une solution IP adaptée, portage de vos numéros actuels chez votre nouvel opérateur SIP, et bascule finale sans coupure. CSX Telecom gère tout de A à Z — vous n'avez qu'à valider les étapes. Vos numéros de téléphone ne changent pas.",
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

export default function MontaubanPage() {
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
                Tarn-et-Garonne (82) · Opérateur ARCEP · TPE & PME
              </div>
              <h1 className="h1 mb-6 text-white">
                Standard téléphonique IP et internet pro à Montauban —{" "}
                <span style={{ color: "var(--csx-secondary)" }}>CSX Telecom</span>
              </h1>
              <p className="mb-4 text-lg font-[550] text-white/90 md:text-xl">
                Téléphonie et internet professionnel pour les TPE et PME du Tarn-et-Garonne.
              </p>
              <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
                CSX Telecom accompagne les entreprises de Montauban et du 82 dans leur transition
                téléphonique : migration depuis le réseau cuivre RTC, installation de standard IP,
                internet multi-opérateur fiable et agents IA pour ne jamais manquer un appel.
              </p>
              <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link href="/contact" className="btn group bg-white text-[var(--csx-primary)] shadow-sm hover:bg-[var(--csx-light)]">
                  Demander un audit gratuit à Montauban
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
              <h2 className="h2 mb-4">Nos solutions pour les entreprises de Montauban</h2>
              <p className="text-lg text-slate-600">
                Du standard téléphonique à l'internet professionnel en passant par les agents IA :
                toutes nos solutions sont disponibles à Montauban et dans le 82.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {services.map((service) => (
                <Link key={service.href} href={service.href} className="group flex flex-col rounded-3xl border border-slate-200 bg-white p-8 transition-all hover:-translate-y-1 hover:border-[var(--csx-primary)] hover:shadow-xl">
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
              <h2 className="h2 mb-4 text-white">Pourquoi CSX Telecom à Montauban ?</h2>
              <p className="text-lg text-white/70">
                Un opérateur régional qui connaît le tissu économique du Tarn-et-Garonne et intervient
                directement, sans intermédiaire.
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
              <h2 className="mb-3 text-2xl font-bold tracking-tight text-white">📍 Intervention dans tout le Tarn-et-Garonne</h2>
              <p className="mb-5 leading-relaxed text-white/85">
                Nos techniciens interviennent à Montauban et dans l'ensemble du département 82, depuis
                Moissac jusqu'à Caussade.
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

      <section className="bg-white">
        <div className="container-page">
          <div className="section-pad">
            <div className="mx-auto max-w-3xl">
              <div className="space-y-12">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight md:text-3xl" style={{ color: "var(--csx-primary)" }}>
                    Standard téléphonique d'entreprise à Montauban (Tarn-et-Garonne, 82)
                  </h2>
                  <p className="mt-4 leading-relaxed text-slate-600">
                    Pour une TPE ou une PME du Tarn-et-Garonne, déployer un{" "}
                    <Link href="/standard-telephonique-ipbx" className="font-[550] underline decoration-[var(--csx-secondary)] underline-offset-2 hover:text-[var(--csx-primary)]">
                      standard téléphonique d'entreprise
                    </Link>{" "}
                    à Montauban répond à un double enjeu : moderniser l'accueil des appels et anticiper la fin du
                    réseau cuivre RTC. CSX Telecom dimensionne chaque installation à la taille réelle de la
                    structure, de quelques postes pour un artisan à plusieurs dizaines pour une PME, sans forfait
                    surdimensionné.
                  </p>
                  <p className="mt-4 leading-relaxed text-slate-600">
                    L'audit gratuit de l'existant permet de cartographier vos lignes, vos usages et vos numéros
                    avant de planifier la bascule. Le portage s'effectue sans coupure et sans perte de numéro, et
                    nos techniciens interviennent directement à Montauban et dans le 82, sans intermédiaire.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold tracking-tight md:text-3xl" style={{ color: "var(--csx-primary)" }}>
                    Opérateur internet professionnel à Montauban
                  </h2>
                  <p className="mt-4 leading-relaxed text-slate-600">
                    Montauban et le Tarn-et-Garonne bénéficient d'un déploiement fibre actif, mais toutes les zones
                    d'activité ne sont pas encore éligibles au même rythme. En opérateur déclaré ARCEP accédant
                    directement à Orange, SFR, Bouygues, aux opérateurs fibre locaux et à Starlink Business, CSX
                    Telecom compare objectivement les offres d'{" "}
                    <Link href="/internet-professionnel" className="font-[550] underline decoration-[var(--csx-secondary)] underline-offset-2 hover:text-[var(--csx-primary)]">
                      internet professionnel
                    </Link>{" "}
                    disponibles à votre adresse, qu'il s'agisse de fibre, de SDSL, de 5G ou d'une liaison MPLS
                    inter-sites.
                  </p>
                  <p className="mt-4 leading-relaxed text-slate-600">
                    Pour les entreprises montalbanaises dont l'activité dépend d'une connexion permanente, nous
                    ajoutons un lien de secours automatique et un engagement de rétablissement (GTR). Cette
                    indépendance vis-à-vis des opérateurs réseau garantit le meilleur choix technique pour chaque
                    site du 82, sans préférence commerciale.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold tracking-tight md:text-3xl" style={{ color: "var(--csx-primary)" }}>
                    IPBX & téléphonie IP à Montauban
                  </h2>
                  <p className="mt-4 leading-relaxed text-slate-600">
                    La{" "}
                    <Link href="/voip-telephonie-cloud" className="font-[550] underline decoration-[var(--csx-secondary)] underline-offset-2 hover:text-[var(--csx-primary)]">
                      téléphonie IP en mode cloud
                    </Link>{" "}
                    apporte aux entreprises de Montauban des fonctions longtemps réservées aux grands groupes :
                    standard automatique, files d'attente, horaires d'ouverture, renvois et postes nomades. Un{" "}
                    <Link href="/standard-telephonique-ipbx" className="font-[550] underline decoration-[var(--csx-secondary)] underline-offset-2 hover:text-[var(--csx-primary)]">
                      IPBX
                    </Link>{" "}
                    hébergé ou installé sur site s'adapte aussi bien au commerce de centre-ville qu'à la PME
                    multi-sites du Tarn-et-Garonne.
                  </p>
                  <p className="mt-4 leading-relaxed text-slate-600">
                    Sur l'axe Montauban-Cahors, la proximité de notre siège permet un accompagnement réactif : de la
                    configuration initiale au paramétrage fin, en passant par la formation des équipes. La téléphonie
                    IP évolue ensuite au rythme de votre entreprise, en ajoutant ou retirant des postes en quelques
                    minutes.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold tracking-tight md:text-3xl" style={{ color: "var(--csx-primary)" }}>
                    Accueil téléphonique IA à Montauban
                  </h2>
                  <p className="mt-4 leading-relaxed text-slate-600">
                    Les artisans, commerçants et professions libérales montalbanais ne peuvent pas toujours
                    décrocher. L'{" "}
                    <Link href="/agents-virtuels-ia" className="font-[550] underline decoration-[var(--csx-secondary)] underline-offset-2 hover:text-[var(--csx-primary)]">
                      accueil téléphonique par agent IA
                    </Link>{" "}
                    prend le relais : il répond, qualifie la demande, note les messages et oriente les appelants,
                    24h/24, sans laisser un seul appel sans réponse, même en pleine activité ou hors des horaires
                    d'ouverture.
                  </p>
                  <p className="mt-4 leading-relaxed text-slate-600">
                    Intégré à votre standard IP, l'agent virtuel se déclenche en débordement ou en dehors des heures
                    de bureau et transmet l'information à votre équipe. Vous voulez savoir ce que cela donnerait pour
                    votre activité à Montauban ?{" "}
                    <Link href="/contact" className="font-[550] underline decoration-[var(--csx-secondary)] underline-offset-2 hover:text-[var(--csx-primary)]">
                      Demandez votre audit gratuit
                    </Link>{" "}
                    : nous vous répondons rapidement.
                  </p>
                </div>
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
                <h2 className="h2 mb-4">Questions fréquentes — Télécom à Montauban</h2>
                <p className="text-lg text-slate-600">Les questions les plus posées par les TPE et PME du Tarn-et-Garonne.</p>
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
                <p className="mb-3 text-xl font-[550]" style={{ color: "var(--csx-secondary)" }}>Votre télécom à Montauban, on s'en occupe</p>
                <h2 className="h2 text-white">Audit gratuit, intervention locale garantie</h2>
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
