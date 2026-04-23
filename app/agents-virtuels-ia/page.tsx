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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* HERO */}
      <section
        className="relative py-20 md:py-32 text-white"
        style={{ background: "linear-gradient(135deg, #0D0DA8 0%, #1515DC 60%, #29ABE2 100%)" }}
      >
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="inline-block mb-4 px-4 py-1 rounded-full text-sm font-medium bg-white/20">
            IA vocale · Voix naturelle · 24h/24 · 7j/7
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Agents virtuels IA —{" "}
            <span style={{ color: "#29ABE2" }}>votre standard téléphonique ne dort jamais</span>
          </h1>
          <p className="text-lg md:text-xl mb-4 font-semibold opacity-90">
            Des agents vocaux IA qui répondent, comprennent et agissent à votre place.
          </p>
          <p className="text-base md:text-lg mb-10 max-w-3xl mx-auto opacity-80 leading-relaxed">
            Vos appels sont traités 24h/24, 7j/7 par des agents vocaux IA intégrés directement
            dans votre standard IP CSX Telecom — avec une voix naturelle, une compréhension
            contextuelle et une connexion directe à vos outils métier.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block px-8 py-4 rounded-lg font-bold text-white text-lg hover:opacity-90 transition-all"
              style={{ background: "#29ABE2" }}
            >
              Découvrir une démo
            </Link>
            <a
              href="#cas-usage"
              className="inline-block px-8 py-4 rounded-lg font-bold text-white text-lg border-2 border-white/60 hover:bg-white/10 transition-all"
            >
              Voir les cas d'usage
            </a>
          </div>
        </div>
      </section>

      {/* STATS DISPONIBILITÉ */}
      <section className="py-12" style={{ background: "#F0F4FF" }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {availability.map((item) => (
              <div key={item.stat} className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-1" style={{ color: "#1515DC" }}>
                  {item.stat}
                </div>
                <div className="text-sm text-gray-600">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAS D'USAGE */}
      <section id="cas-usage" className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: "#111827" }}>
            Quatre cas d'usage, une seule solution
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            L'agent IA s'adapte à votre activité. Voici les configurations les plus courantes chez
            nos clients.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase) => (
              <div key={useCase.title} className="p-8 rounded-2xl border border-gray-100 hover:border-[#1515DC] hover:shadow-md transition-all">
                <div className="text-4xl mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-bold mb-3" style={{ color: "#1515DC" }}>
                  {useCase.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-5">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.examples.map((ex) => (
                    <li key={ex} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="w-4 h-4 rounded-full flex-shrink-0 flex items-center justify-center text-white text-xs" style={{ background: "#29ABE2" }}>
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
      </section>

      {/* TECHNOLOGIE */}
      <section className="py-16 md:py-24" style={{ background: "#F0F4FF" }}>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: "#111827" }}>
            Une technologie à la hauteur de vos attentes
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Synthèse vocale de pointe, intégration native dans votre standard IP, personnalisation
            complète : voici ce qui rend nos agents vraiment différents.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {techPoints.map((point, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border-l-4" style={{ borderColor: "#1515DC" }}>
                <h3 className="text-lg font-bold mb-2" style={{ color: "#1515DC" }}>{point.title}</h3>
                <p className="text-gray-600 leading-relaxed">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DISPONIBILITÉ 24/7 */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="rounded-2xl p-8 text-white" style={{ background: "linear-gradient(135deg, #1515DC, #0D0DA8)" }}>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              🤖 Disponible quand vos équipes ne le sont pas
            </h2>
            <p className="mb-4 opacity-90 leading-relaxed">
              Les appels ne s'arrêtent pas à 17h. Un prospect qui tombe sur la messagerie vocale
              rappellera souvent un concurrent. Avec l'agent IA, chaque appel reçoit une réponse
              immédiate, professionnelle, et cohérente avec votre image — à 8h comme à minuit.
            </p>
            <p className="opacity-90 leading-relaxed">
              L'agent IA ne remplace pas vos équipes : il les décharge des appels répétitifs et
              s'assure qu'aucune opportunité n'est perdue en dehors des heures de bureau.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: "#111827" }}>
            Questions fréquentes — Agents virtuels IA
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Tout ce que vous voulez savoir sur nos agents vocaux IA avant de démarrer.
          </p>
          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <details
                key={i}
                className="border border-gray-100 rounded-2xl p-6 group open:border-[#1515DC]"
              >
                <summary
                  className="font-bold text-lg cursor-pointer list-none flex justify-between items-center gap-4"
                  style={{ color: "#111827" }}
                >
                  <span>{item.question}</span>
                  <span className="flex-shrink-0 text-xl font-light" style={{ color: "#1515DC" }}>+</span>
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 text-white text-center" style={{ background: "#0D0DA8" }}>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt à ne plus jamais manquer un appel ?
          </h2>
          <p className="text-lg mb-4 opacity-80">
            Démo personnalisée gratuite. Configuration en quelques jours. Aucun changement de
            numéro.
          </p>
          <p className="text-base mb-8 opacity-70">
            L'agent IA s'intègre dans votre standard IP existant ou dans une nouvelle installation
            CSX Telecom.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 rounded-lg font-bold text-white text-lg hover:opacity-90 transition-all"
            style={{ background: "#29ABE2" }}
          >
            Demander une démo — Réponse sous 24h
          </Link>
        </div>
      </section>
    </>
  );
}
