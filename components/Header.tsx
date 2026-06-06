"use client";

/**
 * Header CSX Telecom — bandeau translucide sur scroll.
 *
 * Layout :
 *  - Logo à gauche
 *  - Bulle nav centrée (indépendante)
 *  - Bouton "Audit gratuit" à droite (indépendant)
 *
 * Comportement :
 *  - Sticky top:0 → reste visible pendant tout le scroll
 *  - Au repos : bandeau totalement transparent
 *  - Au scroll : le bandeau (uniquement) devient translucide
 *    (bg-white/70 + backdrop-blur). Le logo, la bulle menu et le
 *    bouton "Audit gratuit" restent solides et clairement visibles
 *    en permanence.
 */

import * as React from "react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { label: "Standard IP",  href: "/standard-telephonique-ipbx" },
  { label: "Internet Pro", href: "/internet-professionnel" },
  { label: "VoIP",         href: "/voip-telephonie-cloud" },
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
      {/*
        Bandeau translucide qui apparaît au scroll.
        - Couche absolue placée derrière le contenu du header (-z-10)
        - bg blanc semi-transparent + backdrop-blur
        - mask-image en gradient vertical : opaque en haut, transparent en bas
          → effet "la page glisse sous le bandeau translucide"
      */}
      <div
        aria-hidden="true"
        className={[
          "pointer-events-none absolute inset-x-0 top-0 -z-10 h-full transition-opacity duration-300",
          scrolled ? "opacity-100" : "opacity-0",
        ].join(" ")}
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.55)",
          backdropFilter: "blur(10px) saturate(140%)",
          WebkitBackdropFilter: "blur(10px) saturate(140%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, black 15%, transparent 100%)",
          maskImage:
            "linear-gradient(to bottom, black 0%, black 15%, transparent 100%)",
        }}
      />

      <div className="container-page">
        {/* Layout : grille 3 colonnes pour centrer parfaitement la bulle nav */}
        <div className="grid h-20 grid-cols-[auto_1fr_auto] items-center gap-4 md:h-24">
          {/* Logo (gauche) — toujours opaque */}
          <Link
            href="/"
            className="shrink-0"
            aria-label="CSX Telecom — accueil"
            onClick={() => setIsOpen(false)}
          >
            <Image
              src="/logo-csx.png"
              alt="CSX Telecom"
              width={240}
              height={150}
              priority
              fetchPriority="high"
              quality={85}
              sizes="(max-width: 768px) 100px, 130px"
              className="h-14 w-auto md:h-20"
              style={{ objectFit: "contain" }}
            />
          </Link>

          {/* Bulle navigation (centre) — toujours opaque */}
          <nav
            aria-label="Navigation principale"
            className="hidden lg:flex justify-self-center items-center gap-1 rounded-full border border-slate-200 bg-white px-2 py-1.5 shadow-[0_8px_30px_rgba(13,13,168,0.12)]"
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

          {/* CTA Audit gratuit (droite) — toujours opaque, séparé de la bulle nav */}
          <div className="flex items-center gap-2 justify-self-end">
            <Link
              href="/contact"
              className="hidden sm:inline-flex group items-center rounded-full bg-[var(--csx-primary)] px-5 py-2.5 text-[14px] font-[550] text-white shadow-[0_4px_20px_rgba(21,21,220,0.25)] transition-all hover:bg-[var(--csx-dark)]"
            >
              Audit gratuit
              <span className="ml-2 text-white/80 transition-transform duration-150 group-hover:translate-x-0.5">
                <svg width="12" height="10" viewBox="0 0 12 10" fill="currentColor" aria-hidden="true">
                  <path d="M1 6.002h7.586L6.293 8.295a1 1 0 1 0 1.414 1.414l4-4a1 1 0 0 0 0-1.416l-4-4a1 1 0 0 0-1.414 1.416l2.293 2.293H1a1 1 0 1 0 0 2Z" />
                </svg>
              </span>
            </Link>

            {/* Burger mobile */}
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-[0_4px_20px_rgba(13,13,168,0.1)] transition hover:bg-slate-50 lg:hidden"
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

      {/* Drawer mobile */}
      {isOpen && (
        <div className="container-page lg:hidden">
          <nav
            aria-label="Navigation mobile"
            className="mt-1 mb-3 rounded-3xl border border-slate-200 bg-white p-3 shadow-[0_8px_30px_rgba(13,13,168,0.15)]"
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
