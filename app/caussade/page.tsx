import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Opérateur télécom entreprise à Caussade (82)",
  description:
    "Opérateur télécom à Caussade et dans le Quercy Blanc (Tarn-et-Garonne 82). Standard IP, internet professionnel, agents IA. Intervention locale depuis Montauban et Cahors.",
  alternates: { canonical: "https://www.csx-telecom.fr/caussade" },
};

// Pas d'agence à Caussade : on déclare un Service couvrant la zone,
// fourni par l'entité canonique (siège Cahors) — pas un établissement local.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Opérateur télécom pour entreprises à Caussade",
  serviceType: "Téléphonie IP, internet professionnel et agents IA",
  provider: { "@id": "https://www.csx-telecom.fr/#organization" },
  description:
    "CSX Telecom, opérateur déclaré ARCEP, intervient à Caussade et dans le Quercy Blanc : standard IP, internet professionnel et agents IA pour les entreprises du Tarn-et-Garonne.",
  url: "https://www.csx-telecom.fr/caussade",
  areaServed: [
    { "@type": "City", name: "Caussade" },
    { "@type": "AdministrativeArea", name: "Tarn-et-Garonne" },
  ],
} as const;

const stats = [
  { value: "+17 ans", label: "d'expérience télécom d'entreprise" },
  { value: "+200", label: "clients actifs en région Occitanie" },
  { value: "ARCEP", label: "opérateur déclaré, multi-opérateur" },
  { value: "2 équipes", label: "Montauban et Cahors à proximité" },
];

const services = [
  {
    icon: "📞",
    title: "Standard téléphonique IP & IPBX",
    description:
      "Migration depuis le réseau cuivre RTC, installation de standard IP cloud ou sur site. La zone de Caussade est bien positionnée entre deux équipes CSX : intervention rapide garantie.",
    href: "/standard-telephonique-ipbx",
  },
  {
    icon: "🌐",
    title: "Internet professionnel multi-opérateur",
    description:
      "Fibre, SDSL ou 5G selon votre éligibilité. En opérateur indépendant, nous comparons toutes les offres disponibles à Caussade et dans le Quercy Blanc pour vous proposer le meilleur rapport performance/prix.",
    href: "/internet-professionnel",
  },
  {
    icon: "🤖",
    title: "Agents virtuels IA",
    description:
      "Pour les commerces, artisans et professions libérales de Caussade : un standard téléphonique IA qui répond 24h/24, prend les messages et les rendez-vous même quand vous êtes indisponible.",
    href: "/agents-virtuels-ia",
  },
];

const reasons = [
  {
    title: "Position idéale entre Montauban et Cahors",
    description:
      "Caussade se situe à mi-chemin entre nos équipes de Montauban (82) et de Cahors (46). Cette position géographique permet des interventions rapides sur site, depuis l'une ou l'autre équipe selon disponibilité.",
  },
  {
    title: "Un opérateur indépendant sans préférence commerciale",
    description:
      "Dans le Quercy Blanc, les offres des opérateurs nationaux sont souvent limitées. En accédant directement à tous les opérateurs, nous comparons objectivement et recommandons ce qui est réellement disponible et fiable à votre adresse.",
  },
  {
    title: "Migration RTC sans surprise dans le 82",
    description:
      "Le Tarn-et-Garonne est concerné par l'extinction progressive du réseau cuivre. CSX Telecom gère des migrations dans le 82 depuis des années. Nous connaissons les délais réels et gérons le portage de vos numéros sans interruption.",
  },
  {
    title: "Solutions pour tous les secteurs locaux",
    description:
      "Négoce, agriculture, artisanat, santé, hôtellerie-restauration : nous connaissons la diversité du tissu économique du Quercy Blanc. Chaque secteur a ses contraintes, chaque solution est sur-mesure.",
  },
];

const faqItems = [
  {
    question: "Caussade et le Quercy Blanc sont-ils bien couverts en fibre professionnelle ?",
    answer:
      "La couverture fibre de Caussade et du Quercy Blanc s'améliore grâce au réseau THD 82. La commune de Caussade est en bonne partie éligible, mais les zones industrielles et artisanales périphériques restent parfois en attente. CSX Telecom effectue une vérification d'éligibilité gratuite à l'adresse exacte et propose une solution de transition SDSL ou 5G si la fibre n'est pas encore disponible.",
  },
  {
    question: "Quel opérateur choisir pour une PME dans le Quercy Blanc ?",
    answer:
      "La question n'est pas tant de choisir un opérateur, que de choisir le bon intermédiaire. En tant qu'opérateur déclaré ARCEP, CSX Telecom accède directement à Orange, SFR, Bouygues et aux opérateurs fibre locaux du 82. Nous comparons les offres disponibles à votre adresse et vous recommandons la solution la plus résiliente sans aucun lien commercial avec un opérateur en particulier. Objectivité garantie.",
  },
  {
    question: "La fin du réseau cuivre concerne-t-elle aussi les entreprises de Caussade ?",
    answer:
      "Oui. Le Tarn-et-Garonne est dans le périmètre des fermetures progressives du réseau RTC d'Orange. Si votre entreprise dispose encore de lignes téléphoniques analogiques classiques, d'un fax filaire ou d'un terminal de paiement sur ligne cuivre, la migration vers l'IP est inévitable. CSX Telecom gère la transition complète : audit, choix de la solution, portage des numéros et formation de vos équipes — sans coupure de service.",
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

export default function CaussadePage() {
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
                Quercy Blanc · Tarn-et-Garonne (82) · Opérateur ARCEP
              </div>
              <h1 className="h1 mb-6 text-white">
                Solutions télécom pour entreprises à Caussade —{" "}
                <span style={{ color: "var(--csx-secondary)" }}>CSX Telecom</span>
              </h1>
              <p className="mb-4 text-lg font-[550] text-white/90 md:text-xl">
                Téléphonie IP et internet professionnel dans le Quercy Blanc.
              </p>
              <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
                Entre Montauban et Cahors, Caussade et le Quercy Blanc bénéficient d'une couverture
                terrain rapide par nos deux équipes locales. Standard IP, internet multi-opérateur et
                agents IA : CSX Telecom adapte chaque solution à la réalité de votre entreprise.
              </p>
              <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link href="/contact" className="btn group bg-white text-[var(--csx-primary)] shadow-sm hover:bg-[var(--csx-light)]">
                  Demander un audit gratuit à Caussade
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
              <h2 className="h2 mb-4">Nos solutions pour les entreprises de Caussade</h2>
              <p className="text-lg text-slate-600">
                Toutes nos solutions sont disponibles dans le Quercy Blanc avec intervention directe
                depuis nos équipes de Montauban et de Cahors.
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
              <h2 className="h2 mb-4 text-white">Pourquoi CSX Telecom à Caussade ?</h2>
              <p className="text-lg text-white/70">
                Un opérateur régional avec deux équipes autour de vous, une indépendance totale
                vis-à-vis des grands opérateurs et une vraie connaissance du Quercy Blanc.
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
            <div className="rounded-3xl p-8 text-white" style={{ background: "linear-gradient(135deg, var(--csx-primary), var(--csx-dark))" }}>
              <h2 className="mb-3 text-xl font-bold tracking-tight text-white md:text-2xl"><span aria-hidden="true">⚠️ </span>La fin du réseau cuivre impacte le Quercy Blanc</h2>
              <p className="text-sm leading-relaxed text-white/85">
                Orange arrête progressivement le réseau RTC dans le Tarn-et-Garonne. Si votre
                entreprise fonctionne encore avec des lignes téléphoniques classiques, la migration
                vers l'IP est inévitable — et souvent plus rapide que prévu. CSX Telecom anticipe
                avec vous et réalise la transition sans coupure ni perte de numéro.
              </p>
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
                    Standard téléphonique d'entreprise à Caussade (Tarn-et-Garonne, 82)
                  </h2>
                  <p className="mt-4 leading-relaxed text-slate-600">
                    Installer un{" "}
                    <Link href="/standard-telephonique-ipbx" className="font-[550] underline decoration-[var(--csx-secondary)] underline-offset-2 hover:text-[var(--csx-primary)]">
                      standard téléphonique d'entreprise
                    </Link>{" "}
                    à Caussade, dans le sud du Tarn-et-Garonne, c'est moderniser l'accueil de ses appels tout en
                    préparant la fin du réseau cuivre RTC. CSX Telecom équipe les commerces, négoces, exploitations
                    agricoles et professions libérales du Quercy Blanc avec des solutions dimensionnées à leur
                    activité, sans surdimensionnement inutile.
                  </p>
                  <p className="mt-4 leading-relaxed text-slate-600">
                    Située entre nos équipes de Montauban et de Cahors, la zone de Caussade bénéficie d'une
                    intervention terrain rapide depuis l'un ou l'autre site. L'audit gratuit qualifie vos lignes et
                    vos usages, puis le portage de vos numéros s'effectue sans coupure ni perte de votre identité
                    téléphonique.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold tracking-tight md:text-3xl" style={{ color: "var(--csx-primary)" }}>
                    Opérateur internet professionnel à Caussade
                  </h2>
                  <p className="mt-4 leading-relaxed text-slate-600">
                    Dans le Quercy Blanc, la couverture fibre progresse mais les zones industrielles et artisanales
                    périphériques de Caussade restent parfois en attente. En opérateur déclaré ARCEP accédant
                    directement à Orange, SFR, Bouygues, aux opérateurs fibre locaux et à Starlink Business, CSX
                    Telecom vérifie l'éligibilité exacte de votre adresse et bâtit une offre d'{" "}
                    <Link href="/internet-professionnel" className="font-[550] underline decoration-[var(--csx-secondary)] underline-offset-2 hover:text-[var(--csx-primary)]">
                      internet professionnel
                    </Link>{" "}
                    sur mesure, fibre, SDSL, 5G, Starlink ou MPLS.
                  </p>
                  <p className="mt-4 leading-relaxed text-slate-600">
                    Pour les entreprises du sud du 82 qui ne peuvent se permettre aucune coupure, nous combinons un
                    lien principal et un secours automatique, assortis d'un engagement de rétablissement (GTR). Cette
                    approche multi-opérateur, sans préférence commerciale, garantit la connexion la plus fiable
                    réellement disponible à Caussade.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold tracking-tight md:text-3xl" style={{ color: "var(--csx-primary)" }}>
                    IPBX & téléphonie IP à Caussade
                  </h2>
                  <p className="mt-4 leading-relaxed text-slate-600">
                    La{" "}
                    <Link href="/voip-telephonie-cloud" className="font-[550] underline decoration-[var(--csx-secondary)] underline-offset-2 hover:text-[var(--csx-primary)]">
                      téléphonie IP hébergée dans le cloud
                    </Link>{" "}
                    offre aux entreprises de Caussade des fonctions avancées sans matériel lourd : standard
                    automatique, files d'attente, renvois selon les horaires et postes utilisables en mobilité. Un{" "}
                    <Link href="/standard-telephonique-ipbx" className="font-[550] underline decoration-[var(--csx-secondary)] underline-offset-2 hover:text-[var(--csx-primary)]">
                      IPBX cloud ou sur site
                    </Link>{" "}
                    convient aussi bien au commerce local qu'à la structure répartie sur plusieurs sites du Quercy
                    Blanc.
                  </p>
                  <p className="mt-4 leading-relaxed text-slate-600">
                    Grâce à notre double proximité avec Montauban et Cahors, le paramétrage de l'IPBX et la formation
                    des équipes se font rapidement, au plus près de votre organisation. La migration vers la
                    téléphonie IP s'effectue sans interruption de service et sans changement de numéro.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold tracking-tight md:text-3xl" style={{ color: "var(--csx-primary)" }}>
                    Accueil téléphonique IA à Caussade
                  </h2>
                  <p className="mt-4 leading-relaxed text-slate-600">
                    Dans le tissu de TPE et d'indépendants du Quercy Blanc, beaucoup gèrent seuls le téléphone. L'{" "}
                    <Link href="/agents-virtuels-ia" className="font-[550] underline decoration-[var(--csx-secondary)] underline-offset-2 hover:text-[var(--csx-primary)]">
                      accueil téléphonique par agent IA
                    </Link>{" "}
                    répond à leur place : il décroche, qualifie la demande, prend les messages et les rendez-vous,
                    24h/24, y compris hors des horaires d'ouverture. Commerces, artisans et professions libérales de
                    Caussade ne laissent plus aucun appel sans réponse.
                  </p>
                  <p className="mt-4 leading-relaxed text-slate-600">
                    Couplé à votre standard IP, l'agent virtuel intervient en débordement ou en dehors des heures de
                    bureau et transmet l'information à votre équipe. Vous souhaitez étudier la solution adaptée à
                    votre entreprise dans le Quercy Blanc ?{" "}
                    <Link href="/contact" className="font-[550] underline decoration-[var(--csx-secondary)] underline-offset-2 hover:text-[var(--csx-primary)]">
                      Demandez votre audit gratuit
                    </Link>{" "}
                    : une équipe proche de Caussade vous répond.
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
                <h2 className="h2 mb-4">Questions fréquentes — Télécom à Caussade</h2>
                <p className="text-lg text-slate-600">Les questions des entreprises du Quercy Blanc et du sud du 82.</p>
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
                <p className="mb-3 text-xl font-[550]" style={{ color: "var(--csx-secondary)" }}>Votre télécom à Caussade, on s'en charge</p>
                <h2 className="h2 text-white">Audit gratuit, intervention rapide</h2>
                <p className="mt-4 text-lg text-white/75">Audit gratuit sur site ou à distance. Intervention rapide depuis Montauban ou Cahors. Devis clair sous 48h.</p>
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
