import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Demandez votre audit gratuit",
  description:
    "Contactez CSX Telecom : 05 82 73 03 60 · contact@csx.fr. Siège à Cahors (Lot 46). Lun–Jeu 8h30–12h / 13h30–17h30, Ven jusqu'à 17h. Assistante virtuelle IA 24h/24.",
  alternates: { canonical: "https://www.csx-telecom.fr/contact" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact CSX Telecom",
  url: "https://www.csx-telecom.fr/contact",
  // NAP et horaires : portés par le nœud canonique #organization (layout).
  mainEntity: { "@id": "https://www.csx-telecom.fr/#organization" },
} as const;

const coordonnees = [
  {
    icon: "📞",
    label: "Téléphone",
    value: "05 82 73 03 60",
    detail: "Lun–Jeu 8h30–12h · 13h30–17h30 · Ven jusqu'à 17h",
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
  { day: "Lundi",    plage: "8h30 – 12h00  ·  13h30 – 17h30", ouvert: true },
  { day: "Mardi",    plage: "8h30 – 12h00  ·  13h30 – 17h30", ouvert: true },
  { day: "Mercredi", plage: "8h30 – 12h00  ·  13h30 – 17h30", ouvert: true },
  { day: "Jeudi",    plage: "8h30 – 12h00  ·  13h30 – 17h30", ouvert: true },
  { day: "Vendredi", plage: "8h30 – 12h00  ·  13h30 – 17h00", ouvert: true },
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section className="relative">
        <div
          className="absolute inset-0 -z-10 mb-28 rounded-bl-[100px] md:mb-0"
          aria-hidden="true"
          style={{ background: "linear-gradient(135deg, var(--csx-darker) 0%, var(--csx-dark) 50%, var(--csx-primary) 100%)" }}
        />
        <div className="container-page">
          <div className="pt-20 pb-16 md:pt-24 md:pb-24">
            <div className="mx-auto max-w-3xl text-center text-white anim-fade-up">
              <div className="mb-6 inline-flex items-center rounded-full bg-white/15 px-4 py-1.5 text-xs font-[550] uppercase tracking-wider text-white/90 backdrop-blur">
                Audit gratuit · Sans engagement · Réponse sous 24h
              </div>
              <h1 className="h1 mb-6 text-white">
                Contactez-nous —{" "}
                <span style={{ color: "var(--csx-secondary)" }}>parlons de votre télécom</span>
              </h1>
              <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
                Un audit gratuit de votre situation télécom, sur site ou à distance. Nos consultants
                vous répondent sous 24h en jours ouvrés.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COORDONNÉES */}
      <section style={{ background: "var(--csx-light)" }}>
        <div className="container-page">
          <div className="section-pad">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="h2 mb-4">Nos coordonnées</h2>
              <p className="text-lg text-slate-600">
                Appelez-nous, écrivez-nous ou laissez un message à notre assistante virtuelle — nous
                vous recontactons rapidement.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {coordonnees.map((c) => (
                <div
                  key={c.label}
                  className="flex items-start gap-5 rounded-2xl border border-white bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
                >
                  <span aria-hidden="true" className="shrink-0 inline-flex h-12 w-12 items-center justify-center rounded-2xl text-2xl" style={{ background: "var(--csx-light)" }}>
                    {c.icon}
                  </span>
                  <div>
                    <div className="mb-1 text-xs font-[550] uppercase tracking-wider text-slate-500">{c.label}</div>
                    {c.href ? (
                      <a href={c.href} className="text-lg font-bold tracking-tight hover:underline" style={{ color: "var(--csx-primary)" }}>
                        {c.value}
                      </a>
                    ) : (
                      <div className="text-lg font-bold tracking-tight" style={{ color: "var(--csx-primary)" }}>
                        {c.value}
                      </div>
                    )}
                    <div className="mt-0.5 text-sm text-slate-500">{c.detail}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <a href="tel:+33582730360" className="btn group bg-[var(--csx-primary)] text-white shadow-sm hover:bg-[var(--csx-dark)]">
                <span className="mr-2" aria-hidden="true">📞</span> Appeler le 05 82 73 03 60
              </a>
              <p className="mt-3 text-sm text-slate-500">
                Ou écrivez à{" "}
                <a href="mailto:contact@csx.fr" className="underline hover:text-slate-800">contact@csx.fr</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HORAIRES + ZONES */}
      <section className="bg-white">
        <div className="container-page">
          <div className="section-pad">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                <h2 className="mb-5 text-xl font-bold tracking-tight">Horaires d'ouverture</h2>
                <div className="space-y-2">
                  {horaires.map((h) => (
                    <div key={h.day} className="flex items-center justify-between border-b border-slate-50 py-2 text-sm last:border-0">
                      <span className="w-24 font-medium text-slate-700">{h.day}</span>
                      <span className={h.ouvert ? "font-[550]" : "text-slate-400"} style={h.ouvert ? { color: "var(--csx-primary)" } : {}}>
                        {h.plage}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-5 flex items-start gap-3 rounded-xl p-4 text-sm" style={{ background: "var(--csx-light)" }}>
                  <span className="shrink-0 text-xl" aria-hidden="true">🤖</span>
                  <p className="leading-relaxed text-slate-600">
                    En dehors des heures d'ouverture, notre{" "}
                    <strong>assistante virtuelle IA répond à vos appels 24h/24</strong> et prend vos
                    messages pour qu'un consultant vous rappelle dès le lendemain matin.
                  </p>
                </div>
              </div>

              <div className="rounded-3xl p-7 text-white" style={{ background: "linear-gradient(135deg, var(--csx-primary), var(--csx-dark))" }}>
                <h2 className="mb-2 text-xl font-bold tracking-tight">Zones d'intervention</h2>
                <p className="mb-5 text-sm leading-relaxed text-white/80">
                  Nos techniciens et consultants se déplacent dans toute la région. Pas de frais de
                  déplacement supplémentaires sur nos zones principales.
                </p>
                <ul className="space-y-3">
                  {zones.map((zone) => (
                    <li key={zone} className="flex items-center gap-3 text-sm">
                      <span className="h-2 w-2 shrink-0 rounded-full" style={{ background: "var(--csx-secondary)" }} />
                      <span className="text-white/90">{zone}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 border-t border-white/20 pt-5 text-xs text-white/70">
                  Vous êtes hors zone ? Contactez-nous quand même — nous intervenons ponctuellement
                  partout en France.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESSUS */}
      <section style={{ background: "var(--csx-light)" }}>
        <div className="container-page">
          <div className="section-pad">
            <div className="mx-auto mb-10 max-w-2xl text-center">
              <h2 className="h2 mb-4">Ce qui se passe après votre prise de contact</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {etapes.map((e) => (
                <div key={e.num} className="flex items-start gap-5 rounded-2xl border border-white bg-white p-7 shadow-sm">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-lg font-bold text-white" style={{ background: "linear-gradient(135deg, var(--csx-primary), var(--csx-secondary))" }}>
                    {e.num}
                  </div>
                  <div>
                    <h3 className="mb-1 text-base font-bold tracking-tight">{e.title}</h3>
                    <p className="text-sm leading-relaxed text-slate-600">{e.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative">
        <div className="absolute inset-0 -z-10 rounded-bl-[100px]" aria-hidden="true" style={{ background: "linear-gradient(135deg, var(--csx-darker) 0%, var(--csx-dark) 100%)" }} />
        <div className="container-page">
          <div className="py-16 md:py-20">
            <div className="lg:flex lg:items-center lg:justify-between lg:gap-12">
              <div className="mb-8 text-center lg:mb-0 lg:text-left">
                <p className="mb-3 text-xl font-[550]" style={{ color: "var(--csx-secondary)" }}>Prêt à simplifier votre télécom ?</p>
                <h2 className="h2 text-white">Un consultant revient vers vous sous 24h</h2>
                <p className="mt-4 text-lg text-white/75">Appelez-nous, écrivez-nous ou laissez un message.</p>
              </div>
              <div className="flex flex-col items-center gap-3 sm:flex-row lg:shrink-0">
                <a href="tel:+33582730360" className="btn bg-white text-[var(--csx-primary)] shadow-sm hover:bg-[var(--csx-light)]">
                  <span aria-hidden="true">📞 </span>05 82 73 03 60
                </a>
                <a href="mailto:contact@csx.fr" className="btn border border-white/40 bg-white/10 text-white backdrop-blur hover:bg-white/20">
                  <span aria-hidden="true">✉️ </span>contact@csx.fr
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
