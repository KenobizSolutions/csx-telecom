import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité de CSX Telecom : données collectées (formulaire, assistant vocal IA, mesure d'audience), finalités, durées de conservation et vos droits RGPD.",
  alternates: { canonical: "https://www.csx-telecom.fr/politique-confidentialite" },
};

const sections = [
  {
    title: "Responsable du traitement",
    content: [
      { label: "Société", value: "CSX Telecom (SARL)" },
      { label: "Siège social", value: "1 Place Emilien Imbert, 46000 Cahors, France" },
      { label: "SIRET", value: "800 317 570 00011" },
      { label: "Contact", value: "contact@csx.fr — 05 82 73 03 60" },
    ],
  },
  {
    title: "Données que nous collectons",
    content: [
      {
        label: "Formulaire de contact",
        value:
          "Nom, entreprise, adresse e-mail, téléphone, objet et contenu de votre message. Ces informations sont celles que vous nous transmettez volontairement.",
      },
      {
        label: "Assistant vocal IA (Steeve)",
        value:
          "Si vous activez l'assistant vocal et autorisez votre microphone, votre voix et le contenu de la conversation sont traités en temps réel pour comprendre votre demande et y répondre. L'assistant n'est jamais activé sans une action volontaire de votre part.",
      },
      {
        label: "Mesure d'audience",
        value:
          "Des statistiques de fréquentation agrégées et anonymes (pages vues, performances) via Vercel Analytics et Speed Insights, sans cookie publicitaire ni traceur tiers.",
      },
      {
        label: "Données techniques",
        value:
          "Données de connexion (adresse IP, type de navigateur, journaux serveur) nécessaires au fonctionnement et à la sécurité du site.",
      },
    ],
  },
  {
    title: "Finalités et bases légales",
    content: [
      {
        label: "Répondre à vos demandes",
        value:
          "Traiter les demandes envoyées via le formulaire ou l'assistant vocal, et réaliser les prestations sollicitées. Base légale : votre consentement et/ou l'exécution de mesures précontractuelles.",
      },
      {
        label: "Améliorer le site",
        value:
          "Mesurer l'audience et les performances afin d'améliorer le contenu et l'expérience. Base légale : intérêt légitime.",
      },
      {
        label: "Sécurité et obligations légales",
        value:
          "Assurer la sécurité du site et respecter nos obligations légales et comptables. Base légale : intérêt légitime et obligation légale.",
      },
    ],
  },
  {
    title: "Destinataires et sous-traitants",
    content: [
      {
        label: "Principe",
        value:
          "Vos données sont destinées aux équipes de CSX Telecom. Elles ne sont ni vendues, ni louées, ni cédées à des fins commerciales. Nous faisons appel à des sous-traitants techniques agissant sur nos instructions :",
      },
      { label: "Hébergement & mesure d'audience", value: "Vercel Inc. (hébergement du site et statistiques anonymes)." },
      { label: "Assistant vocal IA", value: "ElevenLabs (traitement vocal en temps réel de l'assistant Steeve)." },
      { label: "Messagerie", value: "Zoho (réception des demandes envoyées à contact@csx.fr)." },
    ],
  },
  {
    title: "Transferts hors Union européenne",
    content: [
      {
        label: "Encadrement",
        value:
          "Certains prestataires (notamment l'hébergeur et le fournisseur de l'assistant vocal) peuvent traiter des données en dehors de l'Union européenne, notamment aux États-Unis. Ces transferts sont encadrés par des garanties appropriées (clauses contractuelles types de la Commission européenne).",
      },
    ],
  },
  {
    title: "Durées de conservation",
    content: [
      { label: "Demandes de contact", value: "Conservées 3 ans à compter de notre dernier échange, sauf relation commerciale en cours." },
      {
        label: "Conversations avec l'assistant vocal",
        value:
          "Le traitement de la voix a lieu en temps réel pour répondre à votre demande. La conservation éventuelle par notre prestataire est régie par sa propre politique de confidentialité.",
      },
      { label: "Données techniques", value: "Conservées pour une durée limitée à des fins de sécurité et de bon fonctionnement." },
      { label: "Statistiques d'audience", value: "Conservées sous forme agrégée et anonyme." },
    ],
  },
  {
    title: "Vos droits",
    content: [
      {
        label: "Droits RGPD",
        value:
          "Vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation, d'opposition et de portabilité de vos données, ainsi que du droit de retirer votre consentement à tout moment.",
      },
      {
        label: "Exercer vos droits",
        value:
          "Écrivez-nous à contact@csx.fr ou par courrier au siège social. Nous vous répondrons dans les meilleurs délais.",
      },
      {
        label: "Réclamation",
        value:
          "Vous pouvez introduire une réclamation auprès de la CNIL (Commission Nationale de l'Informatique et des Libertés — www.cnil.fr) si vous estimez que vos droits ne sont pas respectés.",
      },
    ],
  },
  {
    title: "Cookies et mesure d'audience",
    content: [
      {
        label: "Cookies",
        value:
          "Ce site n'utilise pas de cookie publicitaire ni de traceur tiers à des fins de profilage. La mesure d'audience est réalisée sans cookie de suivi. Seuls des cookies strictement nécessaires au fonctionnement peuvent être utilisés.",
      },
    ],
  },
  {
    title: "Sécurité",
    content: [
      {
        label: "Mesures",
        value:
          "Le site est servi en HTTPS et met en œuvre des en-têtes de sécurité. Nous prenons des mesures raisonnables pour protéger vos données contre tout accès non autorisé.",
      },
    ],
  },
];

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "https://www.csx-telecom.fr/" },
          { name: "Politique de confidentialité", url: "https://www.csx-telecom.fr/politique-confidentialite" },
        ]}
      />

      {/* HERO */}
      <section className="relative">
        <div
          className="absolute inset-0 -z-10 mb-20 rounded-bl-[100px] md:mb-0"
          aria-hidden="true"
          style={{ background: "linear-gradient(135deg, var(--csx-darker) 0%, var(--csx-dark) 50%, var(--csx-primary) 100%)" }}
        />
        <div className="container-page">
          <div className="pt-20 pb-12 md:pt-24 md:pb-20">
            <div className="mx-auto max-w-3xl text-center text-white anim-fade-up">
              <h1 className="h2 mb-3 text-white">Politique de confidentialité</h1>
              <p className="text-white/80">
                Comment CSX Telecom collecte et protège vos données personnelles sur{" "}
                <span className="font-[550]">csx-telecom.fr</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENU */}
      <section className="bg-white">
        <div className="container-page">
          <div className="section-pad">
            <div className="mx-auto max-w-3xl">
              <div className="space-y-10">
                {sections.map((section) => (
                  <div key={section.title}>
                    <h2
                      className="mb-5 border-b-2 pb-3 text-xl font-bold tracking-tight"
                      style={{ color: "var(--csx-primary)", borderColor: "var(--csx-primary)" }}
                    >
                      {section.title}
                    </h2>
                    <dl className="space-y-3">
                      {section.content.map((item) => (
                        <div
                          key={item.label}
                          className="grid gap-1 border-b border-slate-50 py-2 last:border-0 sm:grid-cols-[220px_1fr] sm:gap-4"
                        >
                          <dt className="text-sm font-[550] text-slate-500">{item.label}</dt>
                          <dd className="text-sm leading-relaxed text-slate-700">{item.value}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                ))}
              </div>

              <div className="mt-12 rounded-2xl p-6 text-sm text-slate-600" style={{ background: "var(--csx-light)" }}>
                <p>
                  Pour toute question relative à vos données personnelles, contactez-nous :{" "}
                  <a href="mailto:contact@csx.fr" className="font-[550] hover:underline" style={{ color: "var(--csx-primary)" }}>
                    contact@csx.fr
                  </a>{" "}
                  ·{" "}
                  <a href="tel:+33582730360" className="font-[550] hover:underline" style={{ color: "var(--csx-primary)" }}>
                    05 82 73 03 60
                  </a>
                </p>
                <p className="mt-2 text-slate-400">Dernière mise à jour : 6 juillet 2026</p>
              </div>

              <div className="mt-8 text-center">
                <Link href="/" className="btn btn-primary group shadow-sm">
                  <span className="mr-2 transition-transform duration-150 group-hover:-translate-x-0.5">←</span>
                  Retour à l&apos;accueil
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
