import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Standard téléphonique IP & IPBX pour entreprises | CSX Telecom",
  description:
    "Installation et maintenance de standard IP ou IPBX, de 2 à +100 postes. Fin du réseau cuivre RTC, migration sans coupure, cloud ou sur site. Opérateur ARCEP.",
  alternates: { canonical: "https://csx-telecom.fr/standard-telephonique-ipbx" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Standard téléphonique IP & IPBX",
  provider: {
    "@type": "LocalBusiness",
    name: "CSX Telecom",
    url: "https://csx-telecom.fr",
  },
  description:
    "Installation, configuration et maintenance de standard téléphonique IP ou IPBX pour entreprises. De 2 à plus de 100 postes. Portage de numéros sans coupure.",
  areaServed: ["Toulouse", "Montauban", "Cahors", "Bayonne"],
  url: "https://csx-telecom.fr/standard-telephonique-ipbx",
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
            Standard IP · IPBX · Opérateur ARCEP
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Standard téléphonique IP & IPBX —{" "}
            <span style={{ color: "#29ABE2" }}>de 2 à +100 postes</span>
          </h1>
          <p className="text-lg md:text-xl mb-4 font-semibold opacity-90">
            Cloud ou sur site, portage sans coupure, un seul interlocuteur.
          </p>
          <p className="text-base md:text-lg mb-10 max-w-3xl mx-auto opacity-80 leading-relaxed">
            Le réseau cuivre RTC est en cours d'extinction sur l'ensemble du territoire français. CSX
            Telecom vous accompagne dans la migration vers la téléphonie IP avec zéro interruption de
            service et un accompagnement de A à Z.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block px-8 py-4 rounded-lg font-bold text-white text-lg hover:opacity-90 transition-all"
              style={{ background: "#29ABE2" }}
            >
              Demander un audit gratuit
            </Link>
            <a
              href="#methode"
              className="inline-block px-8 py-4 rounded-lg font-bold text-white text-lg border-2 border-white/60 hover:bg-white/10 transition-all"
            >
              Notre méthode en 4 étapes
            </a>
          </div>
        </div>
      </section>

      {/* ALERTE FIN DU CUIVRE */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="rounded-2xl p-8 text-white" style={{ background: "linear-gradient(135deg, #1515DC, #0D0DA8)" }}>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              ⚠️ Fin du réseau cuivre RTC — ce que ça change pour votre entreprise
            </h2>
            <p className="mb-4 opacity-90 leading-relaxed">
              Orange arrête progressivement le réseau téléphonique classique (RTC) depuis 2023. Si votre
              standard, votre fax ou vos lignes analogiques reposent encore sur le cuivre, vous serez
              impacté dans les prochains mois — parfois sans préavis suffisant.
            </p>
            <p className="opacity-90 leading-relaxed">
              La bonne nouvelle : migrer vers la téléphonie IP est aujourd'hui simple, économique, et
              souvent synonyme de nouvelles fonctionnalités. CSX Telecom gère l'intégralité de la
              transition, du portage de vos numéros à la formation de vos équipes.
            </p>
          </div>
        </div>
      </section>

      {/* FONCTIONNALITÉS */}
      <section className="py-16 md:py-24" style={{ background: "#F0F4FF" }}>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: "#111827" }}>
            Ce que comprend notre offre standard IP
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Une solution complète, de l'audit initial à la maintenance quotidienne, pour que votre
            téléphonie ne soit plus jamais un souci.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-white p-6 rounded-2xl border-l-4" style={{ borderColor: "#1515DC" }}>
                <div className="text-3xl mb-3">{f.icon}</div>
                <h3 className="text-lg font-bold mb-2" style={{ color: "#1515DC" }}>{f.title}</h3>
                <p className="text-gray-600 leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLOUD VS SUR SITE */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: "#111827" }}>
            Cloud hébergé ou IPBX sur site ?
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Chaque entreprise a ses contraintes. Nous vous conseillons la solution la plus adaptée à
            votre taille, votre secteur et votre organisation.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {cloudVsSite.map((option) => (
              <div key={option.label} className="rounded-2xl border-2 p-8" style={{ borderColor: "#1515DC" }}>
                <h3 className="text-xl font-bold mb-6" style={{ color: "#1515DC" }}>
                  {option.label}
                </h3>
                <ul className="space-y-3">
                  {option.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-gray-700">
                      <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ background: "#29ABE2" }}>
                        ✓
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 mt-8 text-sm">
            Vous hésitez ? Nos consultants analysent votre situation et vous recommandent la solution
            optimale — sans parti pris commercial.
          </p>
        </div>
      </section>

      {/* MÉTHODE EN 4 ÉTAPES */}
      <section id="methode" className="py-16 md:py-24" style={{ background: "#F0F4FF" }}>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: "#111827" }}>
            Notre méthode en 4 étapes
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Un processus rodé pour que votre migration soit transparente, sans stress ni surprise.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {steps.map((step) => (
              <div key={step.num} className="bg-white p-8 rounded-2xl flex gap-6 items-start">
                <div
                  className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center text-white text-xl font-bold"
                  style={{ background: "linear-gradient(135deg, #1515DC, #29ABE2)" }}
                >
                  {step.num}
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: "#111827" }}>{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: "#111827" }}>
            Questions fréquentes — Standard téléphonique IP
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Tout ce que vous devez savoir avant de migrer vers la téléphonie IP.
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
            Prêt à moderniser votre téléphonie ?
          </h2>
          <p className="text-lg mb-4 opacity-80">
            Audit gratuit de votre installation actuelle. Devis clair sous 48 h. Zéro coupure pendant
            la migration.
          </p>
          <p className="text-base mb-8 opacity-70">
            Nous intervenons à Toulouse, Montauban, Cahors, Bayonne et dans toute la région.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 rounded-lg font-bold text-white text-lg hover:opacity-90 transition-all"
            style={{ background: "#29ABE2" }}
          >
            Demander mon audit gratuit — Réponse sous 24h
          </Link>
        </div>
      </section>
    </>
  );
}
