import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Internet professionnel & fibre entreprise",
  description:
    "Accès internet professionnel avec vraie redondance multi-opérateur. Fibre dédiée, SDSL, 5G, Starlink, MPLS, pare-feu NGFW. Opérateur ARCEP indépendant.",
  alternates: { canonical: "https://www.csx-telecom.fr/internet-professionnel" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Internet professionnel multi-opérateur",
  provider: {
    "@type": "LocalBusiness",
    name: "CSX Telecom",
    url: "https://www.csx-telecom.fr",
  },
  description:
    "Accès internet professionnel fibre, SDSL, 5G, Starlink, MPLS avec redondance multi-opérateur et pare-feu NGFW pour les entreprises.",
  areaServed: ["Toulouse", "Montauban", "Cahors", "Bayonne"],
  url: "https://www.csx-telecom.fr/internet-professionnel",
} as const;

const technologies = [
  {
    icon: "💡",
    title: "Fibre dédiée & FTTO",
    description:
      "Bande passante garantie symétrique, de 100 Mb/s à 10 Gb/s. La fibre dédiée (FTTO) assure des débits constants sans mutualisation, idéale pour les usages critiques.",
    badge: "Recommandé",
  },
  {
    icon: "📡",
    title: "SDSL & ADSL pro",
    description:
      "Pour les zones non encore éligibles à la fibre. Le SDSL offre un débit symétrique stable et une garantie de temps de rétablissement (GTR 4h ou 8h).",
    badge: null,
  },
  {
    icon: "📶",
    title: "5G & 4G de secours",
    description:
      "Lien de backup automatique sur 5G/4G qui prend le relais en quelques secondes en cas de défaillance du lien principal. Compatible avec le maintien du MPLS.",
    badge: null,
  },
  {
    icon: "🛰️",
    title: "Starlink Business",
    description:
      "Solution satellite de dernière génération pour les sites isolés ou en chantier. Débit élevé, latence acceptable, déploiement en quelques heures.",
    badge: "Sites isolés",
  },
  {
    icon: "🔗",
    title: "MPLS & VPN inter-sites",
    description:
      "Réseau privé entre vos différents sites avec qualité de service (QoS) garantie. Le MPLS reste actif même lors d'un basculement sur le lien 5G de secours.",
    badge: "Multi-sites",
  },
  {
    icon: "🔒",
    title: "Pare-feu NGFW",
    description:
      "Firewall nouvelle génération (NGFW) avec inspection applicative, filtrage URL, détection d'intrusion (IDS/IPS) et gestion centralisée. Votre périmètre réseau sécurisé.",
    badge: null,
  },
];

const redundancyPoints = [
  {
    title: "Deux opérateurs distincts sur chaque site",
    description:
      "Nous sélectionnons deux opérateurs sans infrastructure commune pour votre lien principal et votre lien de secours. Une panne chez l'un n'affecte pas l'autre.",
  },
  {
    title: "Basculement automatique transparent",
    description:
      "En cas de défaillance du lien principal, le trafic bascule en quelques secondes sur le lien de secours. Vos utilisateurs ne ressentent aucune interruption.",
  },
  {
    title: "MPLS maintenu sur 5G",
    description:
      "Là où d'autres perdent le réseau privé lors du basculement, CSX Telecom maintient votre MPLS actif même sur la 5G de secours. Vos applications métier continuent de fonctionner.",
  },
  {
    title: "Supervision 24h/24",
    description:
      "Nos outils de monitoring surveillent en permanence la qualité et la disponibilité de vos liens. En cas d'anomalie, nous intervenons avant même que vous ne le remarquiez.",
  },
];

const comparison = [
  { critere: "Opérateurs disponibles", classic: "1 seul", csx: "Tous opérateurs" },
  { critere: "Redondance", classic: "Option payante, même infra", csx: "Multi-opérateur réelle" },
  { critere: "MPLS sur backup 5G", classic: "Non", csx: "Oui" },
  { critere: "Pare-feu NGFW", classic: "Non inclus", csx: "Inclus et géré" },
  { critere: "GTR (temps de rétablissement)", classic: "48–72h", csx: "4h ou 8h selon offre" },
  { critere: "Interlocuteur", classic: "Hotline mutualisée", csx: "Consultant dédié local" },
  { critere: "Installation & câblage", classic: "Sous-traitée", csx: "Par nos techniciens" },
  { critere: "Supervision", classic: "Sur demande", csx: "24h/24 proactive" },
];

const faqItems = [
  {
    question: "Quelle est la vraie différence entre une box grand public et l'internet professionnel ?",
    answer:
      "La différence est fondamentale : une box grand public est partagée avec des milliers d'abonnés, sans garantie de débit ni engagement de rétablissement. L'internet professionnel comprend une bande passante garantie symétrique, une GTR (Garantie de Temps de Rétablissement) contractuelle de 4h ou 8h, une adresse IP fixe, un accès prioritaire au support et une supervision 24h/24. Une panne sur une box pro est traitée comme une urgence ; sur une box grand public, vous prenez votre ticket.",
  },
  {
    question: "Qu'est-ce que la redondance multi-opérateur et pourquoi en ai-je besoin ?",
    answer:
      "La redondance multi-opérateur consiste à avoir deux connexions internet qui empruntent des infrastructures physiques totalement différentes — deux opérateurs sans point de défaillance commun. Si l'une tombe (coupure, panne, travaux), l'autre prend le relais automatiquement en quelques secondes. Vous en avez besoin dès que votre activité dépend d'internet : paiement en ligne, téléphonie IP, accès à vos applications métier, fichiers partagés. Une seule heure d'interruption peut coûter plus cher qu'un an d'abonnement redondant.",
  },
  {
    question: "Le MPLS continue-t-il de fonctionner si mon lien principal tombe ?",
    answer:
      "Oui, c'est l'un des points différenciants de CSX Telecom. Chez la plupart des opérateurs, le basculement sur un lien de secours 4G/5G entraîne la perte du réseau privé MPLS — vos sites ne se voient plus. CSX Telecom maintient le tunnel MPLS actif même sur le lien 5G de backup, grâce à notre architecture de routage. Vos applications métier, vos postes téléphoniques inter-sites et vos imprimantes partagées continuent de fonctionner normalement.",
  },
  {
    question: "Combien de temps faut-il pour installer une ligne internet professionnelle ?",
    answer:
      "Les délais varient selon la technologie : pour une fibre mutualisée (FTTH Pro), comptez 2 à 4 semaines. Pour une fibre dédiée (FTTO), 6 à 12 semaines selon les travaux nécessaires. Pour un lien 5G/4G de backup, l'installation peut se faire en quelques jours. Nous vous proposons systématiquement une solution provisoire pendant la période d'attente pour que vous ne soyez jamais sans connexion professionnelle.",
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

export default function InternetProfessionnelPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Accueil", url: "https://www.csx-telecom.fr/" }, { name: "Internet professionnel", url: "https://www.csx-telecom.fr/internet-professionnel" }]} />
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
                Fibre · SDSL · 5G · Starlink · MPLS · NGFW
              </div>
              <h1 className="h1 mb-6 text-white">
                Internet professionnel —{" "}
                <span style={{ color: "var(--csx-secondary)" }}>vraie redondance multi-opérateur</span>
              </h1>
              <p className="mb-4 text-lg font-[550] text-white/90 md:text-xl">
                Plus jamais sans internet. Même en cas de panne de votre opérateur principal.
              </p>
              <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
                En tant qu'opérateur ARCEP indépendant, CSX Telecom accède directement à tous les
                opérateurs. Nous combinons fibre, SDSL, 5G et Starlink pour construire un réseau
                professionnel résilient, sécurisé et supervisé 24h/24.
              </p>
              <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link href="/contact" className="btn group bg-white text-[var(--csx-primary)] shadow-sm hover:bg-[var(--csx-light)]">
                  Demander un audit réseau gratuit
                  <span className="ml-2 transition-transform duration-150 group-hover:translate-x-0.5">→</span>
                </Link>
                <a href="#comparatif" className="btn border border-white/40 bg-white/10 text-white backdrop-blur hover:bg-white/20">
                  Voir le comparatif
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section style={{ background: "var(--csx-light)" }}>
        <div className="container-page">
          <div className="section-pad">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="h2 mb-4">Toutes les technologies à votre service</h2>
              <p className="text-lg text-slate-600">
                Fibre dédiée, SDSL, 5G, Starlink, MPLS : nous choisissons pour vous la combinaison
                optimale selon votre localisation, vos usages et votre budget.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {technologies.map((tech) => (
                <div
                  key={tech.title}
                  className="rounded-2xl border border-white bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-[var(--csx-primary)] hover:shadow-md"
                >
                  <div className="mb-4 flex items-start justify-between">
                    <div aria-hidden="true" className="inline-flex h-12 w-12 items-center justify-center rounded-2xl text-2xl" style={{ background: "var(--csx-light)" }}>
                      {tech.icon}
                    </div>
                    {tech.badge && (
                      <span className="rounded-full px-2 py-1 text-xs font-bold text-white" style={{ background: "var(--csx-secondary)" }}>
                        {tech.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="mb-2 text-lg font-bold tracking-tight" style={{ color: "var(--csx-primary)" }}>
                    {tech.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* REDONDANCE — section sombre */}
      <section className="relative">
        <div
          className="absolute inset-0 -z-10 mb-24 rounded-tr-[100px] md:mb-0"
          aria-hidden="true"
          style={{ background: "linear-gradient(135deg, var(--csx-text) 0%, var(--csx-darker) 70%, var(--csx-dark) 100%)" }}
        />
        <div className="container-page text-white">
          <div className="section-pad">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="h2 mb-4 text-white">
                Ce que "vraie redondance" signifie chez CSX Telecom
              </h2>
              <p className="text-lg text-white/70">
                La plupart des offres "redondantes" utilisent deux liens du même opérateur sur la même
                infrastructure physique. Une seule panne peut tout couper. Pas chez nous.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {redundancyPoints.map((point, i) => (
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

      {/* COMPARATIF */}
      <section id="comparatif" className="bg-white">
        <div className="container-page">
          <div className="section-pad">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="h2 mb-4">Box pro classique vs CSX Telecom</h2>
              <p className="text-lg text-slate-600">
                Une offre internet d'entreprise, ce n'est pas une box grand public avec un abonnement
                légèrement plus cher. Voici la différence concrète.
              </p>
            </div>
            <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-slate-200 shadow-sm">
              <div className="grid grid-cols-3 text-sm font-bold text-white" style={{ background: "var(--csx-primary)" }}>
                <div className="p-4">Critère</div>
                <div className="border-l border-white/20 p-4 text-center">Box pro classique</div>
                <div className="border-l border-white/20 p-4 text-center" style={{ background: "var(--csx-dark)" }}>
                  CSX Telecom
                </div>
              </div>
              {comparison.map((row, i) => (
                <div
                  key={i}
                  className="grid grid-cols-3 border-b border-slate-100 text-sm last:border-0"
                  style={{ background: i % 2 === 0 ? "white" : "#fafafa" }}
                >
                  <div className="p-4 font-medium text-slate-800">{row.critere}</div>
                  <div className="border-l border-slate-100 p-4 text-center text-slate-500">{row.classic}</div>
                  <div className="border-l border-slate-100 p-4 text-center font-[550]" style={{ color: "var(--csx-primary)" }}>
                    {row.csx}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTENU SEO — fibre entreprise, MPLS, box pro */}
      <section className="bg-white">
        <div className="container-page">
          <div className="section-pad">
            <div className="mx-auto max-w-3xl space-y-10">
              <div>
                <h2 className="mb-4 text-2xl font-bold tracking-tight md:text-3xl" style={{ color: "var(--csx-primary)" }}>
                  Fibre entreprise : la fibre optique professionnelle
                </h2>
                <p className="leading-relaxed text-slate-700">
                  La fibre entreprise n&apos;est pas une box grand public déguisée. Une offre de fibre
                  professionnelle (FTTO, fibre optique dédiée) garantit un débit symétrique, une bande
                  passante non mutualisée et une GTR contractuelle. En opérateur indépendant déclaré ARCEP,
                  CSX Telecom compare les offres de fibre pro disponibles à votre adresse — Orange, SFR,
                  Bouygues, opérateurs fibre locaux — et retient la plus fiable pour votre activité, sans
                  préférence commerciale.
                </p>
              </div>
              <div>
                <h2 className="mb-4 text-2xl font-bold tracking-tight md:text-3xl" style={{ color: "var(--csx-primary)" }}>
                  SDSL, 5G et Starlink : couvrir chaque site
                </h2>
                <p className="leading-relaxed text-slate-700">
                  Toutes les adresses ne sont pas éligibles à la fibre. Le SDSL reste une solution
                  symétrique fiable là où la fibre n&apos;est pas déployée ; la 5G fixe sert d&apos;accès principal
                  ou de lien de secours automatique ; Starlink Business couvre les zones blanches, les sites
                  isolés et les chantiers, sans génie civil. Pour chaque site, nous choisissons la
                  technologie d&apos;accès internet pour entreprise la plus adaptée.
                </p>
              </div>
              <div>
                <h2 className="mb-4 text-2xl font-bold tracking-tight md:text-3xl" style={{ color: "var(--csx-primary)" }}>
                  MPLS & redondance multi-opérateur
                </h2>
                <p className="leading-relaxed text-slate-700">
                  Pour les entreprises multi-sites, le MPLS interconnecte vos établissements dans un réseau
                  privé performant et sécurisé. Couplé à une vraie redondance multi-opérateur (un accès
                  principal chez un opérateur, un secours chez un autre), votre connexion bascule
                  automatiquement en cas de coupure — votre MPLS reste actif, même sur la 5G de secours.
                  Vos applications métier et votre téléphonie IP ne s&apos;arrêtent pas.
                </p>
              </div>
              <div>
                <h2 className="mb-4 text-2xl font-bold tracking-tight md:text-3xl" style={{ color: "var(--csx-primary)" }}>
                  Box internet entreprise ou accès professionnel ?
                </h2>
                <p className="leading-relaxed text-slate-700">
                  Une box internet entreprise d&apos;entrée de gamme peut suffire à une petite structure, mais
                  elle n&apos;offre ni débit garanti, ni GTR, ni adresse IP fixe, ni QoS pour prioriser la voix.
                  Dès que votre activité dépend du réseau — téléphonie IP, applications cloud, paiement —
                  un accès professionnel avec engagement de rétablissement devient indispensable. Nous vous
                  aidons à dimensionner l&apos;offre fibre entreprise réellement utile, sans surdimensionner.
                </p>
              </div>
              <div>
                <h2 className="mb-4 text-2xl font-bold tracking-tight md:text-3xl" style={{ color: "var(--csx-primary)" }}>
                  GTR et délais de raccordement
                </h2>
                <p className="leading-relaxed text-slate-700">
                  La GTR (Garantie de Temps de Rétablissement) est l&apos;engagement contractuel de remise en
                  service sous 4 h ou 8 h en cas de panne — un critère décisif pour une entreprise. Les
                  délais de raccordement varient selon la technologie et l&apos;adresse : nous vérifions votre
                  éligibilité, vous annonçons un délai réaliste et prévoyons une solution de transition
                  (5G, SDSL) si nécessaire. Une connexion fiable est aussi la base d&apos;un{" "}
                  <Link href="/standard-telephonique-ipbx" className="font-[550] underline" style={{ color: "var(--csx-primary)" }}>
                    standard téléphonique IP
                  </Link>{" "}
                  stable.{" "}
                  <Link href="/contact" className="font-[550] underline" style={{ color: "var(--csx-primary)" }}>
                    Vérifiez votre éligibilité
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
                <h2 className="h2 mb-4">Questions fréquentes — Internet professionnel</h2>
                <p className="text-lg text-slate-600">
                  Tout ce que vous devez savoir sur l'internet d'entreprise avant de décider.
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
                  Votre réseau mérite mieux qu'une box
                </p>
                <h2 className="h2 text-white">Audit réseau gratuit, devis multi-opérateur sous 48 h</h2>
                <p className="mt-4 text-lg text-white/75">
                  Audit réseau gratuit. Devis multi-opérateur comparatif sous 48 h. Zéro engagement.
                  Toulouse · Montauban · Cahors · Bayonne et toute la région Occitanie.
                </p>
              </div>
              <div className="flex justify-center lg:shrink-0">
                <Link href="/contact" className="btn group bg-white text-[var(--csx-primary)] shadow-sm hover:bg-[var(--csx-light)]">
                  Demander mon audit réseau — Réponse sous 24h
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
