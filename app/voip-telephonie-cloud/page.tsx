import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Téléphonie cloud & VoIP pour entreprise",
  description:
    "Téléphonie cloud et VoIP pour entreprise : voix sur IP, mobilité, télétravail, évolutivité. Solution VoIP entreprise sans matériel à gérer. Opérateur ARCEP indépendant.",
  alternates: { canonical: "https://www.csx-telecom.fr/voip-telephonie-cloud" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Téléphonie cloud & VoIP pour entreprise",
  provider: {
    "@type": "LocalBusiness",
    name: "CSX Telecom",
    url: "https://www.csx-telecom.fr",
  },
  description:
    "Solution de téléphonie cloud (VoIP) pour entreprise : voix sur IP hébergée, mobilité, télétravail, évolutivité, sans matériel à gérer. Portage de numéros sans coupure.",
  areaServed: ["Cahors", "Montauban", "Caussade", "Gourdon", "Bayonne"],
  url: "https://www.csx-telecom.fr/voip-telephonie-cloud",
} as const;

const features = [
  {
    icon: "☁️",
    title: "Aucun matériel à gérer",
    description:
      "Votre standard est hébergé dans le cloud. Pas de serveur à installer ni à maintenir dans vos locaux : les mises à jour et la supervision sont assurées par CSX Telecom.",
  },
  {
    icon: "📱",
    title: "Mobilité & télétravail natifs",
    description:
      "Un softphone sur ordinateur ou mobile, votre numéro fixe qui vous suit partout. Vos équipes appellent et reçoivent leurs appels professionnels d'où qu'elles soient.",
  },
  {
    icon: "📈",
    title: "Évolutivité immédiate",
    description:
      "Un nouvel arrivant ? Un poste s'ajoute en quelques minutes. La téléphonie cloud grandit au rythme de votre entreprise, sans réinstallation ni surcoût caché.",
  },
  {
    icon: "🛡️",
    title: "Qualité opérateur ARCEP",
    description:
      "En tant qu'opérateur déclaré, nous maîtrisons la chaîne complète : trunks SIP, routage, redondance. Pas d'intermédiaire qui dégrade la qualité de vos communications.",
  },
];

const faqItems = [
  {
    question: "Quelle différence entre VoIP, téléphonie cloud et standard IP ?",
    answer:
      "Ce sont trois facettes de la même technologie. La VoIP (voix sur IP) désigne le fait de faire transiter les appels par internet plutôt que par le réseau cuivre. La téléphonie cloud désigne un standard entièrement hébergé chez l'opérateur, sans équipement dans vos locaux. Le standard IP (IPBX) peut, lui, être hébergé dans le cloud ou installé sur site. La téléphonie cloud est donc une forme de standard IP en VoIP, sans matériel à gérer.",
  },
  {
    question: "Faut-il du matériel pour passer à la téléphonie cloud ?",
    answer:
      "Très peu. Vous pouvez utiliser des téléphones IP physiques si vous le souhaitez, mais un simple ordinateur ou smartphone équipé d'une application suffit. Une connexion internet professionnelle fiable est le seul vrai prérequis — c'est précisément ce que nous dimensionnons lors de l'audit, avec si besoin un lien de secours pour garantir la continuité.",
  },
  {
    question: "La qualité des appels en VoIP est-elle fiable ?",
    answer:
      "Oui, à condition que l'accès internet soit dimensionné et que la voix soit prioritaire sur le réseau (QoS). En tant qu'opérateur, nous maîtrisons à la fois l'accès internet et la téléphonie : nous priorisons les flux voix, surveillons la qualité et prévoyons une redondance. C'est ce qui distingue une VoIP d'entreprise d'une solution grand public.",
  },
  {
    question: "Peut-on conserver ses numéros en passant à la VoIP ?",
    answer:
      "Oui. Le portage de vos numéros fixes existants est un droit. CSX Telecom gère le portage de bout en bout, sans coupure de service : vos clients continuent d'appeler les mêmes numéros, sans rien remarquer du changement.",
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

export default function VoipTelephonieCloudPage() {
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
                VoIP · Téléphonie cloud · Opérateur ARCEP
              </div>
              <h1 className="h1 mb-6 text-white">
                Téléphonie cloud & VoIP pour entreprise —{" "}
                <span style={{ color: "var(--csx-secondary)" }}>votre standard dans le cloud</span>
              </h1>
              <p className="mb-4 text-lg font-[550] text-white/90 md:text-xl">
                La voix sur IP, sans matériel à gérer, accessible partout.
              </p>
              <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
                CSX Telecom déploie votre téléphonie d&apos;entreprise dans le cloud : appels en voix sur IP,
                mobilité totale, télétravail natif et évolutivité immédiate — avec la fiabilité d&apos;un
                opérateur déclaré ARCEP et le portage de vos numéros sans coupure.
              </p>
              <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link href="/contact" className="btn group bg-white text-[var(--csx-primary)] shadow-sm hover:bg-[var(--csx-light)]">
                  Demander un audit gratuit
                  <span className="ml-2 transition-transform duration-150 group-hover:translate-x-0.5">→</span>
                </Link>
                <a href="#avantages" className="btn border border-white/40 bg-white/10 text-white backdrop-blur hover:bg-white/20">
                  Les avantages
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AVANTAGES */}
      <section id="avantages" style={{ background: "var(--csx-light)" }}>
        <div className="container-page">
          <div className="section-pad">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="h2 mb-4">Pourquoi passer à la téléphonie cloud ?</h2>
              <p className="text-lg text-slate-600">
                Une solution VoIP d&apos;entreprise pensée pour la souplesse, la mobilité et la continuité de
                service — sans la lourdeur d&apos;un standard physique.
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

      {/* CONTENU SEO — VoIP, téléphonie cloud, solution VoIP entreprise */}
      <section className="bg-white">
        <div className="container-page">
          <div className="section-pad">
            <div className="mx-auto max-w-3xl space-y-10">
              <div>
                <h2 className="mb-4 text-2xl font-bold tracking-tight md:text-3xl" style={{ color: "var(--csx-primary)" }}>
                  Qu&apos;est-ce que la VoIP pour entreprise ?
                </h2>
                <p className="leading-relaxed text-slate-700">
                  La VoIP (Voice over IP, ou voix sur IP) consiste à faire transiter vos communications
                  téléphoniques par le réseau internet plutôt que par les anciennes lignes cuivre. Pour une
                  entreprise, la VoIP signifie des appels de qualité, des numéros conservés et un standard
                  qui se pilote depuis un navigateur ou une application — sans la rigidité d&apos;un autocommutateur
                  physique. C&apos;est la base de la téléphonie professionnelle moderne, et le remplacement naturel
                  des lignes du réseau RTC en voie d&apos;extinction.
                </p>
              </div>
              <div>
                <h2 className="mb-4 text-2xl font-bold tracking-tight md:text-3xl" style={{ color: "var(--csx-primary)" }}>
                  Téléphonie cloud : votre standard hébergé
                </h2>
                <p className="leading-relaxed text-slate-700">
                  La téléphonie cloud pousse la logique VoIP plus loin : l&apos;ensemble du standard est hébergé
                  chez l&apos;opérateur. Plus aucun serveur à gérer dans vos locaux, plus de maintenance
                  matérielle, plus de mise à jour à planifier. Vous bénéficiez des mêmes fonctions qu&apos;un grand
                  standard d&apos;entreprise — accueil, files d&apos;attente, renvois, serveur vocal, conférence — avec
                  une administration simple et une facturation lisible. C&apos;est l&apos;équivalent d&apos;un{" "}
                  <Link href="/standard-telephonique-ipbx" className="font-[550] underline" style={{ color: "var(--csx-primary)" }}>
                    standard IP en mode Centrex
                  </Link>
                  .
                </p>
              </div>
              <div>
                <h2 className="mb-4 text-2xl font-bold tracking-tight md:text-3xl" style={{ color: "var(--csx-primary)" }}>
                  Une solution VoIP entreprise sur-mesure
                </h2>
                <p className="leading-relaxed text-slate-700">
                  Une TPE de deux personnes et une PME multi-sites n&apos;ont pas les mêmes besoins. Nous
                  dimensionnons votre solution VoIP entreprise au plus juste : nombre de postes, nombre de
                  communications simultanées, niveau de redondance, postes physiques ou softphones. Nous ne
                  sommes liés à aucune marque : ce qui compte, c&apos;est une solution qui fonctionne et un
                  support réactif. La téléphonie cloud s&apos;intègre aussi nativement avec nos{" "}
                  <Link href="/agents-virtuels-ia" className="font-[550] underline" style={{ color: "var(--csx-primary)" }}>
                    agents vocaux IA
                  </Link>{" "}
                  pour traiter les appels 24h/24.
                </p>
              </div>
              <div>
                <h2 className="mb-4 text-2xl font-bold tracking-tight md:text-3xl" style={{ color: "var(--csx-primary)" }}>
                  VoIP et internet : indissociables
                </h2>
                <p className="leading-relaxed text-slate-700">
                  La qualité de votre téléphonie cloud dépend directement de votre accès internet. En tant
                  qu&apos;opérateur, nous maîtrisons les deux : nous priorisons la voix sur le réseau (QoS) et
                  prévoyons une redondance pour que vos appels ne tombent jamais. Découvrez nos accès d&apos;{" "}
                  <Link href="/internet-professionnel" className="font-[550] underline" style={{ color: "var(--csx-primary)" }}>
                    internet professionnel
                  </Link>{" "}
                  pensés pour la voix.{" "}
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
      <section style={{ background: "var(--csx-light)" }}>
        <div className="container-page">
          <div className="section-pad">
            <div className="mx-auto max-w-3xl">
              <div className="mb-12 text-center">
                <h2 className="h2 mb-4">Questions fréquentes — Téléphonie cloud & VoIP</h2>
                <p className="text-lg text-slate-600">
                  Tout ce qu&apos;il faut savoir avant de passer votre téléphonie dans le cloud.
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
                  Passez votre téléphonie dans le cloud
                </p>
                <h2 className="h2 text-white">Audit gratuit, devis clair sous 48 h</h2>
                <p className="mt-4 text-lg text-white/75">
                  Audit gratuit de votre installation. Portage de vos numéros sans coupure. Nous
                  intervenons à Cahors, Montauban, Caussade, Gourdon, Bayonne et dans toute la région.
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
