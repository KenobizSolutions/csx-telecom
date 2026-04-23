import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact — Audit télécom gratuit sous 24h | CSX Telecom",
  description:
    "Contactez CSX Telecom : 05 82 73 03 60 · contact@csx.fr. Siège à Cahors (Lot 46). Lun–Ven 8h–17h, pause 12h–13h30. Assistante virtuelle disponible 24h/24.",
  alternates: { canonical: "https://csx-telecom.fr/contact" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact CSX Telecom",
  url: "https://csx-telecom.fr/contact",
  mainEntity: {
    "@type": "LocalBusiness",
    name: "CSX Telecom",
    telephone: "+33582730360",
    email: "contact@csx.fr",
    url: "https://csx-telecom.fr",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1 Place Emilien Imbert",
      addressLocality: "Cahors",
      postalCode: "46000",
      addressCountry: "FR",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "12:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "13:30",
        closes: "17:00",
      },
    ],
  },
} as const;

const coordonnees = [
  {
    icon: "📞",
    label: "Téléphone",
    value: "05 82 73 03 60",
    detail: "Lun–Ven 8h–12h · 13h30–17h",
    href: "tel:+33582730360",
  },
  {
    icon: "✉️",
    label: "Email",
    value: "contact@csx.fr",
    detail: "Réponse sous 24h en jours ouvrés",
    href: "mailto:contact@csx.fr",
  },
  {
    icon: "📍",
    label: "Siège social",
    value: "1 Place Emilien Imbert — 46000 Cahors",
    detail: "Interventions dans toute la région Occitanie et Pays Basque",
    href: null,
  },
  {
    icon: "🤖",
    label: "Assistante virtuelle IA",
    value: "Disponible 24h/24 · 7j/7",
    detail: "Répond à vos appels à toute heure, prend vos messages",
    href: null,
  },
];

const horaires = [
  { day: "Lundi",    plage: "8h00 – 12h00  ·  13h30 – 17h00", ouvert: true },
  { day: "Mardi",    plage: "8h00 – 12h00  ·  13h30 – 17h00", ouvert: true },
  { day: "Mercredi", plage: "8h00 – 12h00  ·  13h30 – 17h00", ouvert: true },
  { day: "Jeudi",    plage: "8h00 – 12h00  ·  13h30 – 17h00", ouvert: true },
  { day: "Vendredi", plage: "8h00 – 12h00  ·  13h30 – 17h00", ouvert: true },
  { day: "Samedi",   plage: "Fermé",                            ouvert: false },
  { day: "Dimanche", plage: "Fermé",                            ouvert: false },
];

const zones = [
  "Toulouse & Haute-Garonne (31)",
  "Montauban & Tarn-et-Garonne (82)",
  "Cahors & Lot (46)",
  "Gourdon & sud du Lot",
  "Caussade & Quercy Blanc",
  "Bayonne · Biarritz · Pays Basque (64)",
];

const etapes = [
  {
    num: "01",
    title: "Réponse sous 24h",
    description:
      "Un consultant CSX Telecom vous rappelle ou vous écrit sous 24h en jours ouvrés pour recueillir les premières informations.",
  },
  {
    num: "02",
    title: "Audit gratuit",
    description:
      "Nous analysons votre installation actuelle, vos contrats en cours et vos besoins réels — sur site ou à distance.",
  },
  {
    num: "03",
    title: "Proposition sans engagement",
    description:
      "Vous recevez un devis détaillé et chiffré. Aucune obligation. Vous comparez et décidez à votre rythme.",
  },
];

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section
        className="relative py-20 md:py-28 text-white"
        style={{ background: "linear-gradient(135deg, #0D0DA8 0%, #1515DC 60%, #29ABE2 100%)" }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-block mb-4 px-4 py-1 rounded-full text-sm font-medium bg-white/20">
            Audit gratuit · Sans engagement · Réponse sous 24h
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Contactez-nous —{" "}
            <span style={{ color: "#29ABE2" }}>parlons de votre télécom</span>
          </h1>
          <p className="text-base md:text-lg max-w-2xl mx-auto opacity-80 leading-relaxed">
            Un audit gratuit de votre situation télécom, sur site ou à distance. Nos consultants
            vous répondent sous 24h en jours ouvrés.
          </p>
        </div>
      </section>

      {/* COORDONNÉES */}
      <section className="py-16 md:py-24" style={{ background: "#F0F4FF" }}>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: "#111827" }}>
            Nos coordonnées
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Appelez-nous, écrivez-nous ou laissez un message à notre assistante virtuelle — nous vous recontactons rapidement.
          </p>

          <div className="grid sm:grid-cols-2 gap-5 mb-12">
            {coordonnees.map((c) => (
              <div
                key={c.label}
                className="bg-white p-6 rounded-2xl border-l-4 flex items-start gap-5"
                style={{ borderColor: "#1515DC" }}
              >
                <span className="text-3xl flex-shrink-0">{c.icon}</span>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1">
                    {c.label}
                  </div>
                  {c.href ? (
                    <a
                      href={c.href}
                      className="font-bold text-lg hover:underline"
                      style={{ color: "#1515DC" }}
                    >
                      {c.value}
                    </a>
                  ) : (
                    <div className="font-bold text-lg" style={{ color: "#1515DC" }}>
                      {c.value}
                    </div>
                  )}
                  <div className="text-sm text-gray-500 mt-0.5">{c.detail}</div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA appel direct */}
          <div className="text-center">
            <a
              href="tel:+33582730360"
              className="inline-flex items-center gap-3 px-10 py-4 rounded-lg font-bold text-white text-lg hover:opacity-90 transition-all"
              style={{ background: "#29ABE2" }}
            >
              <span>📞</span> Appeler le 05 82 73 03 60
            </a>
            <p className="text-sm text-gray-500 mt-3">
              Ou écrivez à{" "}
              <a href="mailto:contact@csx.fr" className="underline hover:text-gray-800">
                contact@csx.fr
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* HORAIRES + ZONES */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">

            {/* Horaires */}
            <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm">
              <h2 className="text-xl font-bold mb-5" style={{ color: "#111827" }}>
                Horaires d'ouverture
              </h2>
              <div className="space-y-2">
                {horaires.map((h) => (
                  <div
                    key={h.day}
                    className="flex justify-between items-center text-sm py-2 border-b border-gray-50 last:border-0"
                  >
                    <span className="font-medium text-gray-700 w-24">{h.day}</span>
                    <span
                      className={h.ouvert ? "font-semibold" : "text-gray-400"}
                      style={h.ouvert ? { color: "#1515DC" } : {}}
                    >
                      {h.plage}
                    </span>
                  </div>
                ))}
              </div>
              <div
                className="mt-5 rounded-xl p-4 flex items-start gap-3 text-sm"
                style={{ background: "#F0F4FF" }}
              >
                <span className="text-xl flex-shrink-0">🤖</span>
                <p className="text-gray-600 leading-relaxed">
                  En dehors des heures d'ouverture, notre{" "}
                  <strong>assistante virtuelle IA répond à vos appels 24h/24</strong> et prend vos
                  messages pour qu'un consultant vous rappelle dès le lendemain matin.
                </p>
              </div>
            </div>

            {/* Zones */}
            <div
              className="rounded-2xl p-7 text-white"
              style={{ background: "linear-gradient(135deg, #1515DC, #0D0DA8)" }}
            >
              <h2 className="text-xl font-bold mb-2">Zones d'intervention</h2>
              <p className="text-sm opacity-80 mb-5 leading-relaxed">
                Nos techniciens et consultants se déplacent dans toute la région. Pas de frais de
                déplacement supplémentaires sur nos zones principales.
              </p>
              <ul className="space-y-3">
                {zones.map((zone) => (
                  <li key={zone} className="flex items-center gap-3 text-sm">
                    <span
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ background: "#29ABE2" }}
                    />
                    <span className="opacity-90">{zone}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-5 border-t border-white/20 text-xs opacity-70">
                Vous êtes hors zone ? Contactez-nous quand même — nous intervenons ponctuellement
                partout en France.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESSUS */}
      <section className="py-16" style={{ background: "#F0F4FF" }}>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-10" style={{ color: "#111827" }}>
            Ce qui se passe après votre prise de contact
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {etapes.map((e) => (
              <div
                key={e.num}
                className="bg-white p-7 rounded-2xl flex gap-5 items-start"
              >
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center text-white font-bold text-lg"
                  style={{ background: "linear-gradient(135deg, #1515DC, #29ABE2)" }}
                >
                  {e.num}
                </div>
                <div>
                  <h3 className="font-bold text-base mb-1" style={{ color: "#111827" }}>
                    {e.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{e.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 text-white text-center" style={{ background: "#0D0DA8" }}>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt à simplifier votre télécom ?
          </h2>
          <p className="text-lg mb-8 opacity-80">
            Appelez-nous, écrivez-nous ou laissez un message. Un consultant revient vers vous sous 24h.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+33582730360"
              className="inline-block px-8 py-4 rounded-lg font-bold text-white text-lg hover:opacity-90 transition-all"
              style={{ background: "#29ABE2" }}
            >
              📞 05 82 73 03 60
            </a>
            <a
              href="mailto:contact@csx.fr"
              className="inline-block px-8 py-4 rounded-lg font-bold text-white text-lg border-2 border-white/60 hover:bg-white/10 transition-all"
            >
              ✉️ contact@csx.fr
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
