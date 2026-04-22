"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Accueil",      href: "/" },
  { label: "Téléphonie IP", href: "/standard-telephonique-ipbx" },
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
    <header className="sticky top-0 z-50 w-full bg-[var(--csx-dark)] text-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="shrink-0 text-base font-semibold tracking-wide"
          aria-label="CSX Telecom"
          onClick={() => setIsOpen(false)}
        >
          <Image
              src="/logo-csx.png"
              alt="CSX Telecom"
              width={140}
              height={50}
              style={{ objectFit: "contain" }}
              priority
            />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigation principale">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-white/90 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild className="bg-[var(--csx-secondary)] text-white hover:bg-[color-mix(in_oklab,var(--csx-secondary),white_12%)]">
            <Link href="/contact">Audit gratuit</Link>
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/10"
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((v) => !v)}
          >
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      <div
        className={cn(
          "lg:hidden",
          isOpen ? "border-t border-white/10" : "hidden"
        )}
      >
        <nav className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8" aria-label="Navigation mobile">
          <div className="grid gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-white/90 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
              >
                {item.label}
              </Link>
            ))}
            <Button
              asChild
              className="mt-2 w-full bg-[var(--csx-secondary)] text-white hover:bg-[color-mix(in_oklab,var(--csx-secondary),white_12%)]"
            >
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                Audit gratuit
              </Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}

