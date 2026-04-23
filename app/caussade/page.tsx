import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Solutions télécom pour entreprises à Caussade — CSX Telecom",
  description:
    "Opérateur télécom à Caussade et dans le Quercy Blanc (Tarn-et-Garonne 82). Standard IP, internet professionnel, agents IA. Intervention locale depuis Montauban et Cahors.",
  alternates: { canonical: "https://csx-telecom.fr/caussade" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "CSX Telecom — Caussade",
  description:
    "Opérateur télécom indépendant déclaré ARCEP à Caussade et dans le Quercy Blanc. Standard IP, internet professionnel et agents IA pour les entreprises du Tarn-et-Garonne.",
  url: "https://csx-telecom.fr/caussade",
  telephone: "+33582730360",
  email: "contact@csx.fr",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Caussade",
    postalCode: "82300",
    addressCountry: "FR",
  },
  areaServed: { "@type": "City", name: "Caussade" },
} as const;

const stats = [
  { value: "+15 ans", label: "d'expérience télécom d'entreprise" },
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
            Quercy Blanc · Tarn-et-Garonne (82) · Opérateur ARCEP
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Solutions télécom pour entreprises à Caussade —{" "}
            <span style={{ color: "#29ABE2" }}>CSX Telecom</span>
          </h1>
          <p className="text-lg md:text-xl mb-4 font-semibold opacity-90">
            Téléphonie IP et internet professionnel dans le Quercy Blanc.
          </p>
          <p className="text-base md:text-lg mb-10 max-w-3xl mx-auto opacity-80 leading-relaxed">
            Entre Montauban et Cahors, Caussade et le Quercy Blanc bénéficient d'une couverture
            terrain rapide par nos deux équipes locales. Standard IP, internet multi-opérateur et
            agents IA : CSX Telecom adapte chaque solution à la réalité de votre entreprise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block px-8 py-4 rounded-lg font-bold text-white text-lg hover:opacity-90 transition-all"
              style={{ background: "#29ABE2" }}
            >
              Demander un audit gratuit à Caussade
            </Link>
            <a
              href="#services"
              className="inline-block px-8 py-4 rounded-lg font-bold text-white text-lg border-2 border-white/60 hover:bg-white/10 transition-all"
            >
              Nos services
            </a>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-12" style={{ background: "#F0F4FF" }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.value} className="text-center">
                <div className="text-2xl md:text-3xl font-bold mb-1" style={{ color: "#1515DC" }}>
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: "#111827" }}>
            Nos solutions pour les entreprises de Caussade
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Toutes nos solutions sont disponibles dans le Quercy Blanc avec intervention directe
            depuis nos équipes de Montauban et de Cahors.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group p-8 rounded-2xl border border-gray-100 hover:border-[#1515DC] hover:shadow-lg transition-all"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3
                  className="text-xl font-bold mb-3 group-hover:text-[#1515DC] transition-colors"
                  style={{ color: "#111827" }}
                >
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                <span className="font-semibold text-sm" style={{ color: "#1515DC" }}>
                  En savoir plus →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* POURQUOI CSX À CAUSSADE */}
      <section className="py-16 md:py-24" style={{ background: "#F0F4FF" }}>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: "#111827" }}>
            Pourquoi CSX Telecom à Caussade ?
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Un opérateur régional avec deux équipes autour de vous, une indépendance totale
            vis-à-vis des grands opérateurs et une vraie connaissance du Quercy Blanc.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {reasons.map((reason, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border-l-4" style={{ borderColor: "#1515DC" }}>
                <h3 className="text-lg font-bold mb-2" style={{ color: "#1515DC" }}>
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ENCART FIN DU CUIVRE */}
      <section className="py-10 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div
            className="rounded-2xl p-8 text-white"
            style={{ background: "linear-gradient(135deg, #1515DC, #0D0DA8)" }}
          >
            <h2 className="text-xl md:text-2xl font-bold mb-3">
              ⚠️ La fin du réseau cuivre impacte le Quercy Blanc
            </h2>
            <p className="opacity-90 leading-relaxed text-sm">
              Orange arrête progressivement le réseau RTC dans le Tarn-et-Garonne. Si votre
              entreprise fonctionne encore avec des lignes téléphoniques classiques, la migration
              vers l'IP est inévitable — et souvent plus rapide que prévu. CSX Telecom anticipe
              avec vous et réalise la transition sans coupure ni perte de numéro.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: "#111827" }}>
            Questions fréquentes — Télécom à Caussade
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Les questions des entreprises du Quercy Blanc et du sud du 82.
          </p>
          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <details
                key={i}
                className="border border-gray-100 rounded-2xl p-6 open:border-[#1515DC]"
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
            Votre télécom à Caussade, on s'en charge
          </h2>
          <p className="text-lg mb-4 opacity-80">
            Audit gratuit sur site ou à distance. Intervention rapide depuis Montauban ou Cahors.
            Devis clair sous 48h.
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
