/**
 * Footer CSX Telecom — refonte inspirée du template fintech-next.
 *
 * Style :
 *  - Fond sombre (CSX dark) avec coin arrondi haut-droit (rounded-tr-[100px])
 *  - 4 colonnes : logo + tagline | services | zones | contact
 *  - Bandeau bas avec mentions légales + crédit Kenobiz Sites
 */

import Link from "next/link";
import Image from "next/image";

const serviceLinks = [
  { label: "Standard IP & IPBX",      href: "/standard-telephonique-ipbx" },
  { label: "VoIP & téléphonie cloud", href: "/voip-telephonie-cloud" },
  { label: "Internet professionnel",  href: "/internet-professionnel" },
  { label: "Agents virtuels IA",      href: "/agents-virtuels-ia" },
  { label: "À propos",                href: "/a-propos" },
] as const;

const zoneLinks = [
  { label: "Toulouse",          href: "/toulouse" },
  { label: "Montauban",         href: "/montauban" },
  { label: "Cahors",            href: "/cahors" },
  { label: "Gourdon",           href: "/gourdon" },
  { label: "Caussade",          href: "/caussade" },
  { label: "Bayonne · Biarritz", href: "/bayonne-biarritz" },
] as const;

export function Footer() {
  return (
    <footer className="relative mt-3 md:mt-5">
      {/* Fond sombre + coin arrondi haut-droit (signature fintech-next) */}
      <div
        className="absolute inset-0 -z-10 rounded-tr-[100px]"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(135deg, var(--csx-darker) 0%, var(--csx-dark) 60%, var(--csx-primary) 100%)",
        }}
      />

      <div className="container-page text-white">
        {/* Blocs */}
        <div className="grid gap-10 py-14 md:grid-cols-12 md:gap-8 md:py-20">
          {/* Logo + tagline */}
          <div className="md:col-span-12 lg:col-span-4">
            <Link href="/" aria-label="CSX Telecom — accueil" className="inline-block">
              <Image
                src="/logo-csx.png"
                alt="CSX Telecom"
                width={140}
                height={88}
                quality={80}
                sizes="140px"
                style={{ objectFit: "contain" }}
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/75">
              Opérateur télécom indépendant déclaré ARCEP. Téléphonie IP, internet
              professionnel et agents IA pour les PME — Cahors, Montauban, Gourdon
              et Pays Basque.
            </p>
          </div>

          {/* Services */}
          <div className="md:col-span-4 lg:col-span-3">
            <p className="mb-4 text-sm font-bold tracking-wide text-white">
              Services
            </p>
            <ul className="space-y-2 text-sm">
              {serviceLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-white/75 transition-colors hover:text-[var(--csx-secondary)]"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Zones */}
          <div className="md:col-span-4 lg:col-span-3">
            <p className="mb-4 text-sm font-bold tracking-wide text-white">
              Zones d'intervention
            </p>
            <ul className="space-y-2 text-sm">
              {zoneLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-white/75 transition-colors hover:text-[var(--csx-secondary)]"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4 lg:col-span-2">
            <p className="mb-4 text-sm font-bold tracking-wide text-white">
              Contact
            </p>
            <ul className="space-y-2 text-sm text-white/75">
              <li>
                <a
                  href="tel:+33582730360"
                  className="font-[550] text-white transition-colors hover:text-[var(--csx-secondary)]"
                >
                  05 82 73 03 60
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@csx.fr"
                  className="transition-colors hover:text-[var(--csx-secondary)]"
                >
                  contact@csx.fr
                </a>
              </li>
              <li>
                Lun–Jeu 8h30–12h · 13h30–17h30
                <br />
                Ven 8h30–12h · 13h30–17h
              </li>
              <li className="text-white/60">
                1 Place Emilien Imbert
                <br />
                46000 Cahors
              </li>
            </ul>
          </div>
        </div>

        {/* Bandeau bas */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col gap-3 text-xs text-white/60 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col gap-1 md:flex-row md:items-center md:gap-3">
              <span>© 2026 CSX Telecom · SIRET : 800 317 570 00011</span>
              <span className="hidden text-white/30 md:inline" aria-hidden="true">
                ·
              </span>
              <span>
                Site conçu par{" "}
                <a
                  href="https://kenobiz-sites.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Agence web IA-first Sud-Ouest"
                  className="font-[550] text-white/85 transition-colors hover:text-[var(--csx-secondary)] hover:underline"
                >
                  Kenobiz Sites
                </a>
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
              <Link
                href="/mentions-legales"
                className="transition-colors hover:text-[var(--csx-secondary)]"
              >
                Mentions légales
              </Link>
              <Link
                href="/politique-confidentialite"
                className="transition-colors hover:text-[var(--csx-secondary)]"
              >
                Politique de confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
