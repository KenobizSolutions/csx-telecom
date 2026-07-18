import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales de CSX Telecom — éditeur, hébergeur, déclaration ARCEP, propriété intellectuelle et données personnelles.",
  alternates: { canonical: "https://www.csx-telecom.fr/mentions-legales" },
};

const sections = [
  {
    title: "Éditeur du site",
    content: [
      { label: "Raison sociale", value: "CSX Telecom" },
      { label: "Forme juridique", value: "SARL" },
      { label: "Siège social", value: "1 Place Emilien Imbert, 46000 Cahors, France" },
      { label: "Téléphone", value: "05 82 73 03 60" },
      { label: "Email", value: "contact@csx.fr" },
      { label: "Directeur de la publication", value: "CSX Telecom" },
      { label: "SIRET", value: "800 317 570 00011" },
      { label: "TVA intracommunautaire", value: "FR89800317570" },
    ],
  },
  {
    title: "Déclaration ARCEP",
    content: [
      {
        label: "Statut",
        value:
          "Opérateur de communications électroniques déclaré auprès de l'Autorité de Régulation des Communications Électroniques et des Postes (ARCEP) conformément à l'article L. 33-1 du Code des postes et des communications électroniques.",
      },
    ],
  },
  {
    title: "Hébergeur",
    content: [
      { label: "Raison sociale", value: "Vercel Inc." },
      { label: "Adresse", value: "340 Pine Street, Suite 701, San Francisco, CA 94104, États-Unis" },
      { label: "Site web", value: "https://vercel.com" },
    ],
  },
  {
    title: "Crédits techniques",
    content: [
      { label: "Conception et réalisation", value: "Kenobiz Sites — kenobiz-sites.fr" },
    ],
  },
  {
    title: "Propriété intellectuelle",
    content: [
      {
        label: "Droits réservés",
        value:
          "L'ensemble du contenu de ce site (textes, images, logos, structure) est la propriété exclusive de CSX Telecom ou de ses partenaires. Toute reproduction, représentation ou diffusion, totale ou partielle, du contenu de ce site par quelque procédé que ce soit, sans l'autorisation préalable et expresse de CSX Telecom, est interdite et constitue une contrefaçon sanctionnée par les articles L. 335-2 et suivants du Code de la propriété intellectuelle.",
      },
    ],
  },
  {
    title: "Données personnelles",
    content: [
      {
        label: "Responsable du traitement",
        value: "CSX Telecom, Cahors (46000). Email : contact@csx.fr",
      },
      {
        label: "Finalités",
        value:
          "Les données collectées via les formulaires de contact sont utilisées exclusivement pour répondre aux demandes d'information et réaliser les prestations commandées. Elles ne sont ni vendues, ni cédées à des tiers.",
      },
      {
        label: "Droits",
        value:
          "Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification, d'effacement et de portabilité de vos données personnelles. Pour exercer ces droits, contactez-nous à contact@csx.fr.",
      },
      {
        label: "Durée de conservation",
        value:
          "Les données de contact sont conservées 3 ans à compter du dernier contact, sauf obligation légale contraire.",
      },
    ],
  },
  {
    title: "Cookies",
    content: [
      {
        label: "Usage",
        value:
          "Ce site peut utiliser des cookies techniques nécessaires à son bon fonctionnement. Aucun cookie publicitaire ni de tracking tiers n'est déposé sans votre consentement explicite.",
      },
    ],
  },
  {
    title: "Limitation de responsabilité",
    content: [
      {
        label: "Informations",
        value:
          "CSX Telecom s'efforce de maintenir les informations de ce site à jour et exactes. Toutefois, la société ne saurait être tenue responsable des erreurs ou omissions, ni des dommages directs ou indirects résultant de l'utilisation du site.",
      },
      {
        label: "Liens externes",
        value:
          "Ce site peut contenir des liens vers des sites tiers. CSX Telecom ne contrôle pas ces sites et décline toute responsabilité quant à leur contenu.",
      },
    ],
  },
  {
    title: "Loi applicable",
    content: [
      {
        label: "Juridiction",
        value:
          "Les présentes mentions légales sont soumises au droit français. En cas de litige, et à défaut de résolution amiable, les tribunaux compétents du ressort du siège social de CSX Telecom seront seuls compétents.",
      },
    ],
  },
];

export default function MentionsLegalesPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "https://www.csx-telecom.fr/" },
          { name: "Mentions légales", url: "https://www.csx-telecom.fr/mentions-legales" },
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
              <h1 className="h2 mb-3 text-white">Mentions légales</h1>
              <p className="text-white/80">
                Informations légales relatives au site{" "}
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
                          className="grid gap-1 border-b border-slate-50 py-2 last:border-0 sm:grid-cols-[200px_1fr] sm:gap-4"
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
                  Pour toute question relative aux présentes mentions légales, contactez-nous :{" "}
                  <a href="mailto:contact@csx.fr" className="font-[550] hover:underline" style={{ color: "var(--csx-primary)" }}>
                    contact@csx.fr
                  </a>{" "}
                  ·{" "}
                  <a href="tel:+33582730360" className="font-[550] hover:underline" style={{ color: "var(--csx-primary)" }}>
                    05 82 73 03 60
                  </a>
                </p>
                <p className="mt-2 text-slate-400">Dernière mise à jour : 22 avril 2026</p>
              </div>

              <div className="mt-8 text-center">
                <Link href="/" className="btn btn-primary group shadow-sm">
                  <span className="mr-2 transition-transform duration-150 group-hover:-translate-x-0.5">←</span>
                  Retour à l'accueil
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
