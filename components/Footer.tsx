import Link from "next/link";
import Image from "next/image";

const serviceLinks = [
  { label: "Standard IP & IPBX",    href: "/standard-telephonique-ipbx" },
  { label: "Internet professionnel", href: "/internet-professionnel" },
  { label: "Agents virtuels IA",    href: "/agents-virtuels-ia" },
  { label: "À propos",              href: "/a-propos" },
] as const;

const zoneLinks = [
  { label: "Toulouse",         href: "/toulouse" },
  { label: "Montauban",        href: "/montauban" },
  { label: "Cahors",           href: "/cahors" },
  { label: "Gourdon",          href: "/gourdon" },
  { label: "Caussade",         href: "/caussade" },
  { label: "Bayonne · Biarritz", href: "/bayonne-biarritz" },
] as const;

export function Footer() {
  return (
    <footer className="mt-auto bg-[var(--csx-dark)] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="space-y-3">
          <Image
              src="/logo-csx.png"
              alt="CSX Telecom"
              width={120}
              height={40}
              style={{ objectFit: "contain" }}
            />
          <p className="text-sm leading-relaxed text-white/80">
            Expert télécom B2B depuis 15 ans. Cahors, Toulouse, Montauban, Pays Basque.
          </p>
        </div>

        <div className="space-y-3">
          <div className="text-sm font-semibold text-white">Services</div>
          <ul className="space-y-2 text-sm">
            {serviceLinks.map((l) => (
              <li key={l.href}>
                <Link className="text-white/80 hover:text-white" href={l.href}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3">
          <div className="text-sm font-semibold text-white">Zones</div>
          <ul className="space-y-2 text-sm">
            {zoneLinks.map((l) => (
              <li key={l.href}>
                <Link className="text-white/80 hover:text-white" href={l.href}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3">
          <div className="text-sm font-semibold text-white">Contact</div>
          <ul className="space-y-2 text-sm text-white/80">
            <li>
              <a className="text-white hover:underline" href="tel:+33582730360">05 82 73 03 60</a>
            </li>
            <li>
              <a className="hover:text-white" href="mailto:contact@csx.fr">
                contact@csx.fr
              </a>
            </li>
            <li>Horaires : lun-ven 8h-17h</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-sm text-white/80 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">
            <span>© 2026 CSX Telecom</span>
            <span className="hidden text-white/30 sm:inline" aria-hidden="true">
              ·
            </span>
            <span className="text-xs text-white/60">
              Site conçu par{" "}
              <a
                href="https://kenobiz-sites.fr"
                target="_blank"
                rel="noopener noreferrer"
                title="Agence web IA-first Sud-Ouest"
                className="font-semibold text-white/80 hover:text-white hover:underline"
              >
                Kenobiz Sites
              </a>
            </span>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link className="hover:text-white" href="/mentions-legales">
              Mentions légales
            </Link>
            <span className="text-white/30" aria-hidden="true">
              |
            </span>
            <span>SIRET : 800 317 570 00011</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

