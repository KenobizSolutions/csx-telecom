"use client";

/**
 * Wrapper du SteeveWidget — chargement du SDK ElevenLabs AU CLIC.
 *
 * Une bulle placeholder (SVG statique, aucune dépendance) est rendue
 * immédiatement. Le SDK vocal (~500 KiB) n'est téléchargé que lorsque le
 * visiteur clique sur la bulle : la grande majorité des visites (qui
 * n'ouvrent jamais l'assistant) ne paient plus ce coût — meilleur LCP/TBT.
 *
 * IMPORTANT : ne rien importer statiquement de ./SteeveWidget, sinon le SDK
 * reviendrait dans le bundle initial. Le vrai widget est chargé uniquement via
 * import() dynamique et démarre l'appel (autoStart) dès son montage.
 */

import dynamic from "next/dynamic";
import { useState } from "react";

const SteeveWidget = dynamic(
  () => import("./SteeveWidget").then((m) => ({ default: m.SteeveWidget })),
  { ssr: false, loading: () => null }
);

export function SteeveWidgetLazy() {
  const [activated, setActivated] = useState(false);

  // Une fois activé, le vrai widget prend le relais (même position fixe) et
  // démarre la conversation immédiatement.
  if (activated) return <SteeveWidget autoStart />;

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end gap-3">
      <div className="group relative flex flex-col items-center gap-2">
        {/* Bulle d'invite (hover/focus) */}
        <div
          role="tooltip"
          className={[
            "pointer-events-none absolute right-0 bottom-full mb-3",
            "max-w-[260px] rounded-xl bg-white px-4 py-2.5",
            "text-xs leading-snug text-gray-800 shadow-lg ring-1 ring-black/5",
            "opacity-0 translate-y-1 transition-all duration-200",
            "group-hover:opacity-100 group-hover:translate-y-0",
            "group-focus-within:opacity-100 group-focus-within:translate-y-0",
          ].join(" ")}
        >
          Passez nous un appel direct, que ce soit pour un renseignement ou un problème technique
          <span
            aria-hidden="true"
            className="absolute -bottom-1 right-7 h-2 w-2 rotate-45 bg-white ring-1 ring-black/5"
          />
        </div>

        <button
          type="button"
          onClick={() => setActivated(true)}
          aria-label="Parler à Steeve, l'assistant vocal CSX Telecom"
          className={[
            "relative flex h-16 w-16 items-center justify-center rounded-full",
            "text-white shadow-lg transition-all duration-200",
            "hover:scale-105 hover:shadow-xl active:scale-95",
            "focus:outline-none focus-visible:ring-4 focus-visible:ring-white/40",
          ].join(" ")}
          style={{ background: "var(--csx-primary)" }}
        >
          {/* Icône micro (identique au widget réel) */}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-7 w-7"
            aria-hidden="true"
          >
            <rect x="9" y="2" width="6" height="12" rx="3" />
            <path d="M5 11a7 7 0 0 0 14 0" />
            <line x1="12" y1="18" x2="12" y2="22" />
            <line x1="8" y1="22" x2="16" y2="22" />
          </svg>
        </button>

        <span
          className="select-none rounded-full bg-white/90 px-3 py-1 text-[11px] font-medium text-gray-700 shadow-sm ring-1 ring-black/5 backdrop-blur"
          aria-hidden="true"
        >
          Testez notre assistant virtuel
        </span>
      </div>
    </div>
  );
}
