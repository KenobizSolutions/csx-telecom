import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mentions légales | CSX Telecom",
  description: "Mentions légales de CSX Telecom — éditeur, hébergeur, déclaration ARCEP, propriété intellectuelle et données personnelles.",
  alternates: { canonical: "https://csx-telecom.fr/mentions-legales" },
};

const sections = [
  {
    title: "Éditeur du site",
    content: [
      { label: "Raison sociale", value: "CSX Telecom" },
      { label: "Forme juridique", value: "Société à préciser" },
      { label: "Siège social", value: "Cahors, Lot (46000), France" },
      { label: "Téléphone", value: "05 82 73 03 60" },
      { label: "Email", value: "contact@csx.fr" },
      { label: "Directeur de la publication", value: "CSX Telecom" },
      { label: "SIRET", value: "À compléter" },
      { label: "TVA intracommunautaire", value: "À compléter" },
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
      { label: "Numéro de déclaration ARCEP", value: "À compléter" },
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
      {/* HERO */}
      <section
        className="relative py-16 md:py-20 text-white"
        style={{ background: "linear-gradient(135deg, #0D0DA8 0%, #1515DC 60%, #29ABE2 100%)" }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Mentions légales</h1>
          <p className="opacity-80">
            Informations légales relatives au site{" "}
            <span className="font-semibold">csx-telecom.fr</span>
          </p>
        </div>
      </section>

      {/* CONTENU */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-10">
            {sections.map((section) => (
              <div key={section.title}>
                <h2
                  className="text-xl font-bold mb-5 pb-3 border-b-2"
                  style={{ color: "#1515DC", borderColor: "#1515DC" }}
                >
                  {section.title}
                </h2>
                <dl className="space-y-3">
                  {section.content.map((item) => (
                    <div
                      key={item.label}
                      className="grid sm:grid-cols-[200px_1fr] gap-1 sm:gap-4 py-2 border-b border-gray-50 last:border-0"
                    >
                      <dt className="text-sm font-semibold text-gray-500">{item.label}</dt>
                      <dd className="text-sm text-gray-700 leading-relaxed">{item.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>

          <div
            className="mt-12 rounded-2xl p-6 text-sm text-gray-600"
            style={{ background: "#F0F4FF" }}
          >
            <p>
              Pour toute question relative aux présentes mentions légales, contactez-nous :{" "}
              <a
                href="mailto:contact@csx.fr"
                className="font-semibold hover:underline"
                style={{ color: "#1515DC" }}
              >
                contact@csx.fr
              </a>{" "}
              · <a href="tel:+33582730360" className="font-semibold hover:underline" style={{ color: "#1515DC" }}>05 82 73 03 60</a>
            </p>
            <p className="mt-2 text-gray-400">
              Dernière mise à jour : 22 avril 2026
            </p>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/"
              className="inline-block px-6 py-3 rounded-lg font-semibold text-white hover:opacity-90 transition-all"
              style={{ background: "#1515DC" }}
            >
              ← Retour à l'accueil
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
