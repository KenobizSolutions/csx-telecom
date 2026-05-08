import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Agents virtuels IA — Répondeur téléphonique intelligent 24h/24",
  description:
    "Agents IA vocaux qui répondent à vos appels 24h/24. Accueil standard, prise de RDV, FAQ, qualification de leads. Intégration native avec votre standard IP.",
  alternates: { canonical: "https://www.csx-telecom.fr/agents-virtuels-ia" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Agents virtuels IA vocaux",
  provider: {
    "@type": "LocalBusiness",
    name: "CSX Telecom",
    url: "https://www.csx-telecom.fr",
  },
  description:
    "Agents IA vocaux qui répondent aux appels téléphoniques 24h/24, 7j/7. Accueil standard, prise de rendez-vous, FAQ, qualification de leads.",
  url: "https://www.csx-telecom.fr/agents-virtuels-ia",
} as const;

const useCases = [
  {
    icon: "🏢",
    title: "Accueil standard",
    description:
      "L'agent répond dès la première sonnerie, accueille l'appelant par son nom s'il est connu, l'oriente vers le bon service ou la bonne personne, et prend un message si personne n'est disponible. Fini les appels manqués et les longues mises en attente.",
    examples: ["Redirection vers un collaborateur", "Prise de message structuré", "Annonce des horaires en dehors des plages"],
  },
  {
    icon: "📅",
    title: "Prise de rendez-vous",
    description:
      "L'agent consulte votre agenda en temps réel, propose des créneaux disponibles, confirme le rendez-vous et envoie une confirmation par SMS ou email. Compatible avec Google Calendar, Outlook, Zoho Calendar et la plupart des CRM.",
    examples: ["Consultation de l'agenda en direct", "Confirmation par SMS / email automatique", "Rappel J-1 automatique"],
  },
  {
    icon: "❓",
    title: "FAQ & informations courantes",
    description:
      "Tarifs, horaires, adresse, délais, disponibilité d'un produit : l'agent répond aux questions fréquentes sans mobiliser vos équipes. Vous définissez la base de connaissance ; l'IA la restitue oralement de façon naturelle.",
    examples: ["Réponse aux questions fréquentes 24h/24", "Mise à jour facile de la base de connaissance", "Escalade vers un humain si nécessaire"],
  },
  {
    icon: "🎯",
    title: "Qualification de leads",
    description:
      "Pour les entreprises qui reçoivent des demandes commerciales, l'agent pose les questions de qualification (secteur, taille, besoin, budget), enregistre les réponses et les pousse directement dans votre CRM avant de transférer vers un commercial.",
    examples: ["Questions de qualification scriptées", "Intégration CRM (Zoho, HubSpot, Salesforce)", "Transfert chaud vers commercial disponible"],
  },
];

const techPoints = [
  {
    title: "Voix ultra-naturelle",
    description:
      "La voix de nos agents est indiscernable d'un humain : intonation naturelle, pauses adaptées au sens de la phrase, réactions en temps réel. Votre appelant ne se sent pas face à un robot — c'est notre exigence de base.",
  },
  {
    title: "Compréhension contextuelle avancée",
    description:
      "L'agent comprend les phrases complexes, les interruptions, les accents régionaux et les demandes ambiguës. Il rebondit sur ce que dit l'appelant et adapte sa réponse en temps réel.",
  },
  {
    title: "Intégration native avec votre standard IP",
    description:
      "L'agent IA s'intègre directement dans votre standard téléphonique CSX Telecom. Pas de double infrastructure. Les transferts d'appels, la gestion des files d'attente et les enregistrements fonctionnent de manière unifiée.",
  },
  {
    title: "Personnalisation complète",
    description:
      "Script d'accueil, tonalité (formelle, chaleureuse, dynamique), langue (français, anglais, espagnol…), base de connaissance : tout est paramétrable. L'agent parle en votre nom, avec votre identité.",
  },
];

const availability = [
  { stat: "24h/24", label: "disponibilité, 7j/7, 365 jours par an" },
  { stat: "< 1s", label: "temps de réponse après la première sonnerie" },
  { stat: "0", label: "appel manqué, même à 3h du matin" },
  { stat: "∞", label: "appels simultanés sans file d'attente" },
];

const faqItems = [
  {
    question: "Les appelants savent-ils qu'ils parlent à un agent IA ?",
    answer:
      "C'est à vous de décider. Certains clients préfèrent une transparence totale — l'agent se présente comme un assistant automatique. D'autres préfèrent que l'agent parle au nom de l'entreprise sans préciser sa nature. Dans les deux cas, la qualité vocale et la compréhension contextuelle sont telles que l'expérience reste fluide et professionnelle. Nous vous conseillons sur la meilleure approche selon votre secteur et votre clientèle.",
  },
  {
    question: "Comment l'agent IA s'intègre-t-il à mon agenda ou mon CRM ?",
    answer:
      "L'intégration se fait via des connecteurs standards : Google Calendar, Microsoft Outlook, Zoho Calendar pour les agendas ; Zoho CRM, HubSpot, Salesforce pour les CRM. L'agent peut consulter les disponibilités en temps réel, créer des événements, enregistrer des leads et déclencher des workflows. La configuration est réalisée par nos équipes lors du déploiement — vous n'avez pas besoin de compétences techniques.",
  },
  {
    question: "Que se passe-t-il si l'agent IA ne comprend pas la demande de l'appelant ?",
    answer:
      "L'agent IA est conçu pour détecter les situations où il ne peut pas répondre correctement. Dans ce cas, il propose plusieurs options selon votre configuration : transférer l'appel vers un collaborateur disponible, prendre un message structuré, ou rappeler l'appelant sur une plage horaire convenue. Il n'y a jamais de situation bloquante : l'appelant est toujours pris en charge.",
  },
  {
    question: "Combien de temps faut-il pour mettre en place un agent IA ?",
    answer:
      "La mise en place d'un agent IA basique — accueil, prise de message, renvoi d'appel — prend entre 3 et 7 jours ouvrés. Les configurations plus avancées avec intégration CRM, prise de rendez-vous et base de connaissance prennent 2 à 3 semaines. L'agent s'intègre directement dans votre standard IP CSX Telecom existant ou dans une nouvelle installation — sans changement de numéro ni interruption de service.",
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

export default function AgentsVirtuelIAPage() {
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
                IA vocale · Voix naturelle · 24h/24 · 7j/7
              </div>
              <h1 className="h1 mb-6 text-white">
                Agents virtuels IA —{" "}
                <span style={{ color: "var(--csx-secondary)" }}>votre standard téléphonique ne dort jamais</span>
              </h1>
              <p className="mb-4 text-lg font-[550] text-white/90 md:text-xl">
                Des agents vocaux IA qui répondent, comprennent et agissent à votre place.
              </p>
              <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
                Vos appels sont traités 24h/24, 7j/7 par des agents vocaux IA intégrés directement
                dans votre standard IP CSX Telecom — avec une voix naturelle, une compréhension
                contextuelle et une connexion directe à vos outils métier.
              </p>
              <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link href="/contact" className="btn group bg-white text-[var(--csx-primary)] shadow-sm hover:bg-[var(--csx-light)]">
                  Découvrir une démo
                  <span className="ml-2 transition-transform duration-150 group-hover:translate-x-0.5">→</span>
                </Link>
                <a href="#cas-usage" className="btn border border-white/40 bg-white/10 text-white backdrop-blur hover:bg-white/20">
                  Voir les cas d'usage
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
              {availability.map((item, i) => (
                <div
                  key={i}
                  className="relative text-center md:px-9 md:after:absolute md:after:right-0 md:after:top-1/2 md:after:h-12 md:after:w-px md:after:-translate-y-1/2 md:after:bg-slate-200 md:last:after:hidden"
                >
                  <div className="mb-2 text-3xl font-bold tracking-tight md:text-4xl" style={{ color: "var(--csx-primary)" }}>
                    {item.stat}
                  </div>
                  <div className="text-sm text-slate-500">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CAS D'USAGE */}
      <section id="cas-usage" style={{ background: "var(--csx-light)" }}>
        <div className="container-page">
          <div className="section-pad">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="h2 mb-4">Quatre cas d'usage, une seule solution</h2>
              <p className="text-lg text-slate-600">
                L'agent IA s'adapte à votre activité. Voici les configurations les plus courantes chez
                nos clients.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {useCases.map((useCase) => (
                <div
                  key={useCase.title}
                  className="rounded-3xl border border-white bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-[var(--csx-primary)] hover:shadow-md"
                >
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl text-2xl" style={{ background: "var(--csx-light)" }}>
                    {useCase.icon}
                  </div>
                  <h3 className="mb-3 text-xl font-bold tracking-tight" style={{ color: "var(--csx-primary)" }}>
                    {useCase.title}
                  </h3>
                  <p className="mb-5 leading-relaxed text-slate-600">{useCase.description}</p>
                  <ul className="space-y-2">
                    {useCase.examples.map((ex) => (
                      <li key={ex} className="flex items-center gap-2 text-sm text-slate-700">
                        <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-xs text-white" style={{ background: "var(--csx-secondary)" }}>
                          ✓
                        </span>
                        {ex}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGIE — section sombre */}
      <section className="relative">
        <div
          className="absolute inset-0 -z-10 mb-24 rounded-tr-[100px] md:mb-0"
          aria-hidden="true"
          style={{ background: "linear-gradient(135deg, var(--csx-text) 0%, var(--csx-darker) 70%, var(--csx-dark) 100%)" }}
        />
        <div className="container-page text-white">
          <div className="section-pad">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="h2 mb-4 text-white">Une technologie à la hauteur de vos attentes</h2>
              <p className="text-lg text-white/70">
                Synthèse vocale de pointe, intégration native dans votre standard IP, personnalisation
                complète : voici ce qui rend nos agents vraiment différents.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {techPoints.map((point, i) => (
                <div key={i} className="rounded-2xl bg-white/5 p-6 backdrop-blur ring-1 ring-white/10">
                  <h3 className="mb-2 text-lg font-bold tracking-tight" style={{ color: "var(--csx-secondary)" }}>
                    {point.title}
                  </h3>
                  <p className="leading-relaxed text-white/80">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DISPONIBILITÉ 24/7 */}
      <section className="bg-white">
        <div className="container-page">
          <div className="py-16">
            <div
              className="rounded-3xl p-8 text-white md:p-12"
              style={{ background: "linear-gradient(135deg, var(--csx-primary), var(--csx-dark))" }}
            >
              <h2 className="h3 mb-4 text-white">
                🤖 Disponible quand vos équipes ne le sont pas
              </h2>
              <p className="mb-4 leading-relaxed text-white/85">
                Les appels ne s'arrêtent pas à 17h. Un prospect qui tombe sur la messagerie vocale
                rappellera souvent un concurrent. Avec l'agent IA, chaque appel reçoit une réponse
                immédiate, professionnelle, et cohérente avec votre image — à 8h comme à minuit.
              </p>
              <p className="leading-relaxed text-white/85">
                L'agent IA ne remplace pas vos équipes : il les décharge des appels répétitifs et
                s'assure qu'aucune opportunité n'est perdue en dehors des heures de bureau.
              </p>
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
                <h2 className="h2 mb-4">Questions fréquentes — Agents virtuels IA</h2>
                <p className="text-lg text-slate-600">
                  Tout ce que vous voulez savoir sur nos agents vocaux IA avant de démarrer.
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
                  Prêt à ne plus jamais manquer un appel ?
                </p>
                <h2 className="h2 text-white">Démo personnalisée gratuite</h2>
                <p className="mt-4 text-lg text-white/75">
                  Démo personnalisée gratuite. Configuration en quelques jours. Aucun changement de
                  numéro. L'agent IA s'intègre dans votre standard IP existant ou dans une nouvelle
                  installation CSX Telecom.
                </p>
              </div>
              <div className="flex justify-center lg:shrink-0">
                <Link href="/contact" className="btn group bg-white text-[var(--csx-primary)] shadow-sm hover:bg-[var(--csx-light)]">
                  Demander une démo — Réponse sous 24h
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
