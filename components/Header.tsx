"use client";

/**
 * Header CSX Telecom — version "floating pill" très visible.
 *
 * Design :
 *  - Header sticky, fond entièrement transparent (laisse passer le hero)
 *  - Logo grande taille à gauche
 *  - Une SEULE bulle blanche centrale qui contient tous les liens nav
 *    + le bouton "Audit gratuit" (effet plus prononcé)
 *  - La bulle a une ombre marquée, une bordure subtile et du backdrop-blur
 *    pour un vrai effet "flotte au-dessus du contenu"
 *  - Toujours visible pendant le scroll (sticky top: 0)
 */

import * as React from "react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { label: "Standard IP",  href: "/standard-telephonique-ipbx" },
  { label: "Internet Pro", href: "/internet-professionnel" },
  { label: "Agents IA",    href: "/agents-virtuels-ia" },
  { label: "À propos",     href: "/a-propos" },
  { label: "Blog",         href: "/blog" },
  { label: "Contact",      href: "/contact" },
] as const;

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setIsOpen(false);
    }
    if (isOpen) window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 w-full pt-3 md:pt-4">
      <div className="container-page">
        <div className="flex items-center justify-between gap-4">
          {/* Logo — prend toute la hauteur disponible */}
          <Link
            href="/"
            className="shrink-0"
            aria-label="CSX Telecom — accueil"
            onClick={() => setIsOpen(false)}
          >
            <Image
              src="/logo-csx.png"
              alt="CSX Telecom"
              width={300}
              height={100}
              priority
              className="h-14 w-auto md:h-20"
              style={{ objectFit: "contain" }}
            />
          </Link>

          {/* Bulle nav + CTA — flotte au-dessus du contenu */}
          <nav
            aria-label="Navigation principale"
            className={[
              "hidden lg:flex items-center gap-1 pl-2 pr-1.5 py-1.5",
              "rounded-full border border-slate-200/70 bg-white/85 backdrop-blur-xl",
              "shadow-[0_8px_30px_rgba(13,13,168,0.12)]",
            ].join(" ")}
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-[14px] font-[500] text-slate-700 transition-colors hover:bg-[var(--csx-light)] hover:text-[var(--csx-primary)]"
              >
                {item.label}
              </Link>
            ))}
            {/* CTA dans la même bulle */}
            <Link
              href="/contact"
              className="ml-1 inline-flex items-center rounded-full bg-[var(--csx-primary)] px-4 py-2 text-[14px] font-[550] text-white shadow-sm transition-all hover:bg-[var(--csx-dark)] group"
            >
              Audit gratuit
              <span className="ml-2 text-white/80 transition-transform duration-150 group-hover:translate-x-0.5">
                <svg width="12" height="10" viewBox="0 0 12 10" fill="currentColor" aria-hidden="true">
                  <path d="M1 6.002h7.586L6.293 8.295a1 1 0 1 0 1.414 1.414l4-4a1 1 0 0 0 0-1.416l-4-4a1 1 0 0 0-1.414 1.416l2.293 2.293H1a1 1 0 1 0 0 2Z" />
                </svg>
              </span>
            </Link>
          </nav>

          {/* Mobile : CTA + burger dans des bulles assorties */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              href="/contact"
              className="hidden sm:inline-flex h-11 items-center rounded-full border border-slate-200/70 bg-white/85 px-4 text-[14px] font-[550] text-[var(--csx-primary)] shadow-[0_4px_20px_rgba(13,13,168,0.1)] backdrop-blur-xl transition hover:bg-white"
            >
              Audit gratuit
            </Link>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200/70 bg-white/85 text-slate-700 shadow-[0_4px_20px_rgba(13,13,168,0.1)] backdrop-blur-xl transition hover:bg-white"
              aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={isOpen}
              onClick={() => setIsOpen((v) => !v)}
            >
              {isOpen ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="6" y1="6" x2="18" y2="18" />
                  <line x1="6" y1="18" x2="18" y2="6" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="17" x2="20" y2="17" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Drawer mobile — bulle flottante par-dessus le contenu */}
      {isOpen && (
        <div className="container-page lg:hidden">
          <nav
            aria-label="Navigation mobile"
            className="mt-3 rounded-3xl border border-slate-200/70 bg-white/95 p-3 shadow-[0_8px_30px_rgba(13,13,168,0.15)] backdrop-blur-xl"
          >
            <ul className="grid gap-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block rounded-full px-4 py-3 text-[15px] font-[500] text-slate-700 transition-colors hover:bg-[var(--csx-light)] hover:text-[var(--csx-primary)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="mt-1 px-1">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex w-full items-center justify-center rounded-full bg-[var(--csx-primary)] px-4 py-3 text-[14px] font-[550] text-white shadow-sm hover:bg-[var(--csx-dark)]"
                >
                  Audit gratuit
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
