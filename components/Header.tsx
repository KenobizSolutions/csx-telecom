"use client";

/**
 * Header CSX Telecom — refonte inspirée du template fintech-next.
 *
 * Style :
 *  - Position sticky transparente avec backdrop-blur sur scroll
 *  - Conteneur max-w-6xl, hauteur 64px (mobile) / 80px (desktop)
 *  - CTA pilule "Audit gratuit" rounded-full (couleur primaire CSX)
 *  - Menu mobile burger avec slide
 */

import * as React from "react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { label: "Standard IP",       href: "/standard-telephonique-ipbx" },
  { label: "Internet Pro",      href: "/internet-professionnel" },
  { label: "Agents IA",         href: "/agents-virtuels-ia" },
  { label: "À propos",          href: "/a-propos" },
  { label: "Blog",              href: "/blog" },
  { label: "Contact",           href: "/contact" },
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
    <header
      className={[
        "sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md transition-shadow duration-300",
        scrolled ? "shadow-sm" : "shadow-none",
      ].join(" ")}
    >
      <div className="container-page">
        <div className="flex h-16 items-center justify-between gap-4 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="shrink-0"
            aria-label="CSX Telecom — accueil"
            onClick={() => setIsOpen(false)}
          >
            <Image
              src="/logo-csx.png"
              alt="CSX Telecom"
              width={140}
              height={50}
              style={{ objectFit: "contain" }}
              priority
              className="h-9 w-auto md:h-10"
            />
          </Link>

          {/* Nav desktop */}
          <nav
            className="hidden items-center gap-7 lg:flex"
            aria-label="Navigation principale"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[15px] font-[500] text-slate-700 transition-colors hover:text-[var(--csx-primary)]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Burger */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="btn-sm btn-primary group hidden shadow-sm sm:inline-flex"
            >
              Audit gratuit
              <span className="ml-2 text-white/80 transition-transform duration-150 group-hover:translate-x-0.5">
                <svg
                  width="12"
                  height="10"
                  viewBox="0 0 12 10"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M1 6.002h7.586L6.293 8.295a1 1 0 1 0 1.414 1.414l4-4a1 1 0 0 0 0-1.416l-4-4a1 1 0 0 0-1.414 1.416l2.293 2.293H1a1 1 0 1 0 0 2Z" />
                </svg>
              </span>
            </Link>

            {/* Burger mobile */}
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:bg-slate-50 lg:hidden"
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
        <div className="lg:hidden">
          <nav
            className="container-page border-t border-slate-200 bg-white py-4"
            aria-label="Navigation mobile"
          >
            <ul className="grid gap-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block rounded-lg px-3 py-3 text-[15px] font-[500] text-slate-700 hover:bg-[var(--csx-light)] hover:text-[var(--csx-primary)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="btn-sm btn-primary w-full justify-center shadow-sm"
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
