"use client";

/**
 * Suivi des conversions via Vercel Analytics (événements personnalisés).
 *
 * Écoute délégué unique (aucun handler à ajouter sur chaque lien) : détecte
 * les clics sur les liens d'appel (tel:), d'e-mail (mailto:), les CTA vers
 * /contact, et tout élément portant un attribut data-track="<nom>".
 *
 * Note : les événements personnalisés Vercel Analytics nécessitent un plan
 * qui les prend en charge ; sinon track() est simplement ignoré (sans erreur).
 */

import { useEffect } from "react";
import { track } from "@vercel/analytics";

export function AnalyticsEvents() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const target = e.target as HTMLElement | null;
      const el = target?.closest?.("a[href], [data-track]") as HTMLElement | null;
      if (!el) return;

      const custom = el.getAttribute("data-track");
      if (custom) {
        track(custom);
        return;
      }

      const href = el.getAttribute("href") || "";
      if (href.startsWith("tel:")) track("call_click");
      else if (href.startsWith("mailto:")) track("email_click");
      else if (href === "/contact" || href.endsWith("/contact")) track("cta_contact_click");
    }

    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return null;
}
