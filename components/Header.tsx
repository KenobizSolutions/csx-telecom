"use client";

/**
 * Header CSX Telecom — version "floating pill" moderne.
 *
 * Design :
 *  - Header sticky avec un fond toujours transparent
 *  - La navigation desktop est rassemblée dans une bulle blanche
 *    arrondie (rounded-full) avec un léger flou — comme le bouton CTA
 *  - Le logo prend quasi toute la hauteur du header (h-14 / md:h-16)
 *  - Effet de transparence : la bulle a un fond blanc/85 + backdrop-blur
 *    qui laisse deviner le contenu en dessous
 *  - Visible en permanence pendant le scroll
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
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setIsOpen(false);
    }
    if (isOpen) window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="container-page">
        <div
          className={[
            "flex h-20 items-center justify-between gap-3 md:h-24",
            "transition-all duration-300",
          ].join(" ")}
        >
          {/* Logo — prend presque toute la hauteur du header */}
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
              className="h-14 w-auto md:h-16"
              style={{ objectFit: "contain" }}
            />
          </Link>

          {/* Bulle de navigation flottante (desktop only) */}
          <nav
            aria-label="Navigation principale"
            className={[
              "hidden lg:flex items-center gap-1 rounded-full border border-white/40 bg-white/80 px-2 py-1.5 backdrop-blur-md",
              "transition-shadow duration-300",
              scrolled ? "shadow-md" : "shadow-sm",
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
          </nav>

          {/* CTA + burger mobile */}
          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className={[
                "btn-sm group hidden sm:inline-flex bg-[var(--csx-primary)] text-white shadow-sm",
                "hover:bg-[var(--csx-dark)] transition-shadow duration-300",
                scrolled ? "shadow-md" : "shadow-sm",
              ].join(" ")}
            >
              Audit gratuit
              <span className="ml-2 text-white/80 transition-transform duration-150 group-hover:translate-x-0.5">
                <svg width="12" height="10" viewBox="0 0 12 10" fill="currentColor" aria-hidden="true">
                  <path d="M1 6.002h7.586L6.293 8.295a1 1 0 1 0 1.414 1.414l4-4a1 1 0 0 0 0-1.416l-4-4a1 1 0 0 0-1.414 1.416l2.293 2.293H1a1 1 0 1 0 0 2Z" />
                </svg>
              </span>
            </Link>

            {/* Burger mobile — bulle blanche assortie */}
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-white/80 text-slate-700 backdrop-blur-md transition hover:bg-white lg:hidden"
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
            className="mt-2 rounded-3xl border border-white/40 bg-white/95 p-3 shadow-lg backdrop-blur-md"
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
                  className="btn-sm w-full justify-center bg-[var(--csx-primary)] text-white shadow-sm hover:bg-[var(--csx-dark)]"
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
