import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Standard téléphonique IP & IPBX pour entreprise",
  description:
    "Installation et maintenance de standard IP ou IPBX, de 2 à +100 postes. Fin du réseau cuivre RTC, migration sans coupure, cloud ou sur site. Opérateur ARCEP.",
  alternates: { canonical: "https://www.csx-telecom.fr/standard-telephonique-ipbx" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Standard téléphonique IP & IPBX",
  provider: {
    "@type": "LocalBusiness",
    name: "CSX Telecom",
    url: "https://www.csx-telecom.fr",
  },
  description:
    "Installation, configuration et maintenance de standard téléphonique IP ou IPBX pour entreprises. De 2 à plus de 100 postes. Portage de numéros sans coupure.",
  areaServed: ["Toulouse", "Montauban", "Cahors", "Bayonne"],
  url: "https://www.csx-telecom.fr/standard-telephonique-ipbx",
} as const;

const steps = [
  {
    num: "01",
    title: "Audit de l'existant",
    description:
      "Nous analysons votre installation actuelle : lignes actives, numéros à porter, postes, usages, contraintes techniques. Gratuit, sans engagement, sur site ou à distance.",
  },
  {
    num: "02",
    title: "Proposition sur-mesure",
    description:
      "Cloud hébergé ou IPBX sur site selon vos contraintes. Nous comparons les solutions, dimensionnons le nombre de postes et vous remettons un devis clair sous 48 h.",
  },
  {
    num: "03",
    title: "Déploiement & portage",
    description:
      "Installation par nos techniciens, portage de vos numéros existants (fixes et mobiles) sans aucune coupure. Vos collaborateurs sont formés le jour J.",
  },
  {
    num: "04",
    title: "Suivi & maintenance",
    description:
      "Un seul interlocuteur pour la durée du contrat. Mises à jour, ajouts de postes, supervision 24 h/24 de la ligne. Intervention sur site si nécessaire.",
  },
];

const cloudVsSite = [
  {
    label: "Standard cloud (hébergé)",
    points: [
      "Aucun matériel à gérer sur site",
      "Accessibilité depuis n'importe où (télétravail natif)",
      "Évolutivité immédiate : un poste en quelques clics",
      "Mises à jour automatiques incluses",
      "Idéal pour les structures multi-sites",
    ],
  },
  {
    label: "IPBX sur site",
    points: [
      "Données et appels hébergés dans vos locaux",
      "Indépendance totale vis-à-vis d'internet",
      "Personnalisation avancée des flux d'appels",
      "Solution pérenne pour les grandes structures",
      "Compatible avec les infrastructures existantes",
    ],
  },
];

const features = [
  {
    icon: "📞",
    title: "De 2 à +100 postes",
    description:
      "Que vous soyez une TPE de 2 personnes ou une PME de cent collaborateurs, nous dimensionnons votre standard en conséquence. La solution évolue avec vous.",
  },
  {
    icon: "🔄",
    title: "Portage sans coupure",
    description:
      "Vos numéros de téléphone fixes et mobiles sont portés vers le nouveau standard sans interruption de service. Vos clients n'entendent aucune différence.",
  },
  {
    icon: "🛡️",
    title: "Qualité opérateur",
    description:
      "En tant qu'opérateur déclaré ARCEP, nous maîtrisons toute la chaîne : trunks SIP, routage, redondance. Pas d'intermédiaire qui impacte la qualité vocale.",
  },
  {
    icon: "📍",
    title: "Installation sur site",
    description:
      "Nos techniciens se déplacent à Toulouse, Montauban, Cahors, Bayonne et dans toute la région. Pas de prestataire externe, pas de délai interminable.",
  },
];

const faqItems = [
  {
    question: "Combien de temps prend une migration vers le standard IP ?",
    answer:
      "Une migration standard prend entre 2 et 6 semaines selon la taille de l'installation. Cela inclut l'audit initial, la commande des équipements, le portage des numéros auprès des opérateurs (délai réglementaire de 5 à 10 jours ouvrés) et la formation des utilisateurs. Dans tous les cas, le service n'est jamais interrompu : la bascule se fait en parallèle de l'ancien système.",
  },
  {
    question: "Puis-je conserver mes numéros de téléphone existants ?",
    answer:
      "Oui, absolument. Le portage de numéros est une obligation réglementaire. CSX Telecom, en tant qu'opérateur déclaré ARCEP, gère directement le portage de vos numéros fixes et mobiles professionnels. Vos clients continuent d'appeler les mêmes numéros — sans aucune coupure, sans aucune modification côté appelant.",
  },
  {
    question: "Quelle est la différence entre un standard cloud et un IPBX sur site ?",
    answer:
      "Le standard cloud est hébergé sur nos serveurs : aucun matériel à installer dans vos locaux, accès depuis n'importe où, évolutivité immédiate. L'IPBX sur site est un équipement installé physiquement dans votre entreprise : idéal si vous souhaitez une indépendance totale vis-à-vis d'internet, ou si vous avez des exigences de sécurité très strictes. Les deux solutions se valent techniquement — le choix dépend de votre organisation et de vos contraintes.",
  },
  {
    question: "Le standard IP fonctionne-t-il en cas de coupure internet ?",
    answer:
      "C'est la question que tout le monde devrait poser. Un standard cloud basique tombe si internet tombe. Chez CSX Telecom, nous concevons les installations avec redondance : lien 4G/5G de secours automatique, IPBX sur site avec basculement, ou renvoi d'appels d'urgence sur mobiles. Nous vous expliquons clairement les risques de chaque configuration et vous proposons le niveau de résilience adapté à votre activité.",
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

export default function StandardIPBXPage() {
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
                Standard IP · IPBX · Opérateur ARCEP
              </div>
              <h1 className="h1 mb-6 text-white">
                Standard téléphonique IP & IPBX —{" "}
                <span style={{ color: "var(--csx-secondary)" }}>de 2 à +100 postes</span>
              </h1>
              <p className="mb-4 text-lg font-[550] text-white/90 md:text-xl">
                Cloud ou sur site, portage sans coupure, un seul interlocuteur.
              </p>
              <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
                Le réseau cuivre RTC est en cours d'extinction sur l'ensemble du territoire français. CSX
                Telecom vous accompagne dans la migration vers la téléphonie IP avec zéro interruption de
                service et un accompagnement de A à Z.
              </p>
              <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link href="/contact" className="btn group bg-white text-[var(--csx-primary)] shadow-sm hover:bg-[var(--csx-light)]">
                  Demander un audit gratuit
                  <span className="ml-2 transition-transform duration-150 group-hover:translate-x-0.5">→</span>
                </Link>
                <a href="#methode" className="btn border border-white/40 bg-white/10 text-white backdrop-blur hover:bg-white/20">
                  Notre méthode en 4 étapes
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ALERTE FIN DU CUIVRE */}
      <section className="bg-white">
        <div className="container-page">
          <div className="py-16">
            <div
              className="rounded-3xl p-8 text-white md:p-12"
              style={{ background: "linear-gradient(135deg, var(--csx-primary), var(--csx-dark))" }}
            >
              <h2 className="h3 mb-4 text-white">
                <span aria-hidden="true">⚠️ </span>Fin du réseau cuivre RTC — ce que ça change pour votre entreprise
              </h2>
              <p className="mb-4 leading-relaxed text-white/85">
                Orange arrête progressivement le réseau téléphonique classique (RTC) depuis 2023. Si votre
                standard, votre fax ou vos lignes analogiques reposent encore sur le cuivre, vous serez
                impacté dans les prochains mois — parfois sans préavis suffisant.
              </p>
              <p className="leading-relaxed text-white/85">
                La bonne nouvelle : migrer vers la téléphonie IP est aujourd'hui simple, économique, et
                souvent synonyme de nouvelles fonctionnalités. CSX Telecom gère l'intégralité de la
                transition, du portage de vos numéros à la formation de vos équipes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FONCTIONNALITÉS */}
      <section style={{ background: "var(--csx-light)" }}>
        <div className="container-page">
          <div className="section-pad">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="h2 mb-4">Ce que comprend notre offre standard IP</h2>
              <p className="text-lg text-slate-600">
                Une solution complète, de l'audit initial à la maintenance quotidienne, pour que votre
                téléphonie ne soit plus jamais un souci.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="rounded-2xl border border-white bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div aria-hidden="true" className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl text-2xl" style={{ background: "var(--csx-light)" }}>
                    {f.icon}
                  </div>
                  <h3 className="mb-2 text-lg font-bold tracking-tight" style={{ color: "var(--csx-primary)" }}>
                    {f.title}
                  </h3>
                  <p className="leading-relaxed text-slate-600">{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CLOUD VS SUR SITE */}
      <section className="bg-white">
        <div className="container-page">
          <div className="section-pad">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="h2 mb-4">Cloud hébergé ou IPBX sur site ?</h2>
              <p className="text-lg text-slate-600">
                Chaque entreprise a ses contraintes. Nous vous conseillons la solution la plus adaptée à
                votre taille, votre secteur et votre organisation.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {cloudVsSite.map((option) => (
                <div
                  key={option.label}
                  className="rounded-3xl border-2 p-8 transition-all hover:-translate-y-0.5 hover:shadow-lg"
                  style={{ borderColor: "var(--csx-primary)" }}
                >
                  <h3 className="mb-6 text-xl font-bold tracking-tight" style={{ color: "var(--csx-primary)" }}>
                    {option.label}
                  </h3>
                  <ul className="space-y-3">
                    {option.points.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-slate-700">
                        <span
                          className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
                          style={{ background: "var(--csx-secondary)" }}
                        >
                          ✓
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="mt-8 text-center text-sm text-slate-500">
              Vous hésitez ? Nos consultants analysent votre situation et vous recommandent la solution
              optimale — sans parti pris commercial.
            </p>
          </div>
        </div>
      </section>

      {/* MÉTHODE EN 4 ÉTAPES — section sombre rounded-tr */}
      <section id="methode" className="relative">
        <div
          className="absolute inset-0 -z-10 mb-24 rounded-tr-[100px] md:mb-0"
          aria-hidden="true"
          style={{ background: "linear-gradient(135deg, var(--csx-text) 0%, var(--csx-darker) 70%, var(--csx-dark) 100%)" }}
        />
        <div className="container-page text-white">
          <div className="section-pad">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="h2 mb-4 text-white">Notre méthode en 4 étapes</h2>
              <p className="text-lg text-white/70">
                Un processus rodé pour que votre migration soit transparente, sans stress ni surprise.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {steps.map((step) => (
                <div
                  key={step.num}
                  className="flex items-start gap-5 rounded-2xl bg-white/5 p-6 backdrop-blur ring-1 ring-white/10"
                >
                  <div
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-lg font-bold text-white"
                    style={{ background: "linear-gradient(135deg, var(--csx-primary), var(--csx-secondary))" }}
                  >
                    {step.num}
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-bold tracking-tight text-white">{step.title}</h3>
                    <p className="leading-relaxed text-white/80">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTENU SEO — IPBX, trunk SIP, centrex, téléphonie IP */}
      <section style={{ background: "var(--csx-light)" }}>
        <div className="container-page">
          <div className="section-pad">
            <div className="mx-auto max-w-3xl space-y-10">
              <div>
                <h2 className="mb-4 text-2xl font-bold tracking-tight md:text-3xl" style={{ color: "var(--csx-primary)" }}>
                  Qu&apos;est-ce qu&apos;un IPBX ?
                </h2>
                <p className="leading-relaxed text-slate-700">
                  Un IPBX (Internet Protocol Branch eXchange) est le standard téléphonique d&apos;entreprise de
                  nouvelle génération. Là où l&apos;ancien PABX commutait des lignes analogiques sur le réseau
                  cuivre, l&apos;IPBX gère les appels en voix sur IP : routage des appels internes et externes,
                  files d&apos;attente, messageries, renvois, serveur vocal interactif, conférence. Il existe en
                  deux formes : l&apos;IPBX sur site, installé dans vos locaux, et l&apos;IPBX cloud (hébergé),
                  accessible depuis n&apos;importe quel poste connecté.
                </p>
              </div>
              <div>
                <h2 className="mb-4 text-2xl font-bold tracking-tight md:text-3xl" style={{ color: "var(--csx-primary)" }}>
                  Trunk SIP : remplacer directement vos lignes RTC
                </h2>
                <p className="leading-relaxed text-slate-700">
                  Le trunk SIP (ou SIP trunk) est le canal qui relie votre standard au réseau téléphonique
                  via internet. Il remplace les anciennes lignes analogiques et les accès T0/T2 du réseau
                  RTC en voie d&apos;extinction. Un trunk SIP fournit autant de communications simultanées que
                  nécessaire, permet de conserver vos numéros par portage et s&apos;adapte instantanément quand
                  votre activité grandit. En tant qu&apos;opérateur déclaré ARCEP, CSX Telecom fournit les
                  trunks SIP en direct — sans intermédiaire qui dégrade la qualité vocale.
                </p>
              </div>
              <div>
                <h2 className="mb-4 text-2xl font-bold tracking-tight md:text-3xl" style={{ color: "var(--csx-primary)" }}>
                  Centrex : la téléphonie d&apos;entreprise entièrement hébergée
                </h2>
                <p className="leading-relaxed text-slate-700">
                  Le Centrex désigne un standard téléphonique entièrement hébergé chez l&apos;opérateur : aucun
                  équipement à gérer dans vos locaux, toutes les fonctions du standard sont rendues depuis le
                  cloud. C&apos;est la solution idéale pour les structures multi-sites ou en télétravail. Le
                  Centrex rejoint notre offre de{" "}
                  <Link href="/voip-telephonie-cloud" className="font-[550] underline" style={{ color: "var(--csx-primary)" }}>
                    VoIP &amp; téléphonie cloud
                  </Link>{" "}
                  : les fonctions d&apos;un grand standard, sans investissement matériel.
                </p>
              </div>
              <div>
                <h2 className="mb-4 text-2xl font-bold tracking-tight md:text-3xl" style={{ color: "var(--csx-primary)" }}>
                  Téléphonie IP pour entreprise : ce qui change au quotidien
                </h2>
                <p className="leading-relaxed text-slate-700">
                  La téléphonie IP d&apos;entreprise apporte la mobilité (votre numéro fixe vous suit sur mobile
                  et en télétravail), l&apos;évolutivité (un poste s&apos;ajoute en quelques minutes) et de nouvelles
                  fonctions : standard automatique, statistiques d&apos;appels, couplage avec vos outils. Elle
                  ouvre aussi la voie aux{" "}
                  <Link href="/agents-virtuels-ia" className="font-[550] underline" style={{ color: "var(--csx-primary)" }}>
                    agents vocaux IA
                  </Link>
                  , intégrés nativement à votre standard IP pour répondre 24h/24.
                </p>
              </div>
              <div>
                <h2 className="mb-4 text-2xl font-bold tracking-tight md:text-3xl" style={{ color: "var(--csx-primary)" }}>
                  Bien choisir son standard téléphonique d&apos;entreprise
                </h2>
                <p className="leading-relaxed text-slate-700">
                  Cloud ou sur site, nombre de postes, niveau de redondance : le bon choix dépend de votre
                  organisation, pas d&apos;un catalogue. Nous ne sommes liés à aucune marque — ce qui compte,
                  c&apos;est une solution qui fonctionne et un support réactif. Nous nous appuyons sur les
                  technologies les plus éprouvées du marché et dimensionnons votre standard à votre réalité.{" "}
                  <Link href="/contact" className="font-[550] underline" style={{ color: "var(--csx-primary)" }}>
                    Demandez votre audit gratuit
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white">
        <div className="container-page">
          <div className="section-pad">
            <div className="mx-auto max-w-3xl">
              <div className="mb-12 text-center">
                <h2 className="h2 mb-4">Questions fréquentes — Standard téléphonique IP</h2>
                <p className="text-lg text-slate-600">
                  Tout ce que vous devez savoir avant de migrer vers la téléphonie IP.
                </p>
              </div>
              <div className="space-y-4">
                {faqItems.map((item, i) => (
                  <details
                    key={i}
                    className="group rounded-2xl border border-slate-200 bg-white p-6 open:border-[var(--csx-primary)] open:shadow-sm"
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
                  Prêt à moderniser votre téléphonie ?
                </p>
                <h2 className="h2 text-white">Audit gratuit, devis clair sous 48 h</h2>
                <p className="mt-4 text-lg text-white/75">
                  Audit gratuit de votre installation actuelle. Devis clair sous 48 h. Zéro coupure pendant
                  la migration. Nous intervenons à Toulouse, Montauban, Cahors, Bayonne et dans toute la région.
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
