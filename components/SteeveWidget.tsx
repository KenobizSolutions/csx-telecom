"use client";

/**
 * SteeveWidget — bulle vocale flottante du standard IA CSX Telecom.
 *
 * Connecte le visiteur à l'agent ElevenLabs Conversational AI ("Steeve")
 * via le SDK officiel @elevenlabs/react. Aucun branding tiers : l'UI est
 * 100 % aux couleurs CSX Telecom (variables CSS --csx-*).
 *
 * États visuels :
 *  - idle       → micro statique, fond couleur primaire
 *  - connecting → pulse douce (connexion en cours)
 *  - listening  → anneau ping bleu clair (l'agent écoute l'utilisateur)
 *  - speaking   → double anneau pulsé + onde sonore (l'agent répond)
 */

import { useEffect, useState } from "react";
import {
  ConversationProvider,
  useConversation,
} from "@elevenlabs/react";

const AGENT_ID = "agent_1401kp3fxhyde0g92s7zgaa2qewp";

/* ------------------------------------------------------------------ */
/*  Icônes SVG inline (aucune dépendance externe)                      */
/* ------------------------------------------------------------------ */

function MicIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="9" y="2" width="6" height="12" rx="3" />
      <path d="M5 11a7 7 0 0 0 14 0" />
      <line x1="12" y1="18" x2="12" y2="22" />
      <line x1="8" y1="22" x2="16" y2="22" />
    </svg>
  );
}

function WaveIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.2}
      strokeLinecap="round"
      className={className}
      aria-hidden="true"
    >
      <line x1="4"  y1="12" x2="4"  y2="12" />
      <line x1="8"  y1="9"  x2="8"  y2="15" />
      <line x1="12" y1="5"  x2="12" y2="19" />
      <line x1="16" y1="9"  x2="16" y2="15" />
      <line x1="20" y1="12" x2="20" y2="12" />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <line x1="6" y1="6" x2="18" y2="18" />
      <line x1="6" y1="18" x2="18" y2="6" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Bouton vocal (consomme le contexte)                                */
/* ------------------------------------------------------------------ */

function SteeveButton() {
  const { startSession, endSession, status, isSpeaking } = useConversation();
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Auto-dismiss du toast d'erreur après 5 s
  useEffect(() => {
    if (!errorMsg) return;
    const t = setTimeout(() => setErrorMsg(null), 5000);
    return () => clearTimeout(t);
  }, [errorMsg]);

  const isActive = status === "connected" || status === "connecting";
  const isConnecting = status === "connecting";
  const isListening = status === "connected" && !isSpeaking;
  const isSpeakingNow = status === "connected" && isSpeaking;

  const handleClick = async () => {
    if (isActive) {
      endSession();
      return;
    }

    // Demande explicite de la permission micro avant tout démarrage SDK
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      // Libère immédiatement le flux : le SDK reprendra la main
      stream.getTracks().forEach((t) => t.stop());
    } catch {
      setErrorMsg(
        "Microphone indisponible — vérifiez les autorisations de votre navigateur."
      );
      return;
    }

    try {
      startSession({
        agentId: AGENT_ID,
        connectionType: "websocket",
        onError: (msg: string) => {
          setErrorMsg(msg || "Connexion à l'assistant interrompue.");
        },
      });
    } catch {
      setErrorMsg("Impossible de joindre l'assistant pour le moment.");
    }
  };

  // Libellé bouton selon l'état
  const ariaLabel = isActive
    ? "Mettre fin à la conversation avec Steeve"
    : "Parler à Steeve, l'assistant vocal CSX Telecom";

  return (
    <>
      {/* Conteneur fixé en bas à droite */}
      <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end gap-3">
        {/* Toast d'erreur discret */}
        {errorMsg && (
          <div
            role="status"
            className="max-w-xs rounded-xl bg-white px-4 py-3 text-sm text-gray-800 shadow-lg ring-1 ring-black/5"
          >
            {errorMsg}
          </div>
        )}

        <div className="relative">
          {/* Anneaux d'animation derrière le bouton (listening / speaking) */}
          {isListening && (
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 animate-ping rounded-full opacity-60"
              style={{ backgroundColor: "var(--csx-secondary)" }}
            />
          )}
          {isSpeakingNow && (
            <>
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 animate-ping rounded-full opacity-70"
                style={{ backgroundColor: "var(--csx-secondary)" }}
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -inset-1 animate-pulse rounded-full opacity-50"
                style={{
                  background:
                    "linear-gradient(135deg, var(--csx-primary), var(--csx-secondary))",
                }}
              />
            </>
          )}

          <button
            type="button"
            onClick={handleClick}
            aria-label={ariaLabel}
            aria-pressed={isActive}
            className={[
              "relative flex h-16 w-16 items-center justify-center rounded-full",
              "text-white shadow-lg transition-all duration-200",
              "hover:scale-105 hover:shadow-xl active:scale-95",
              "focus:outline-none focus-visible:ring-4 focus-visible:ring-white/40",
              isConnecting ? "animate-pulse" : "",
            ].join(" ")}
            style={{
              background: isSpeakingNow
                ? "linear-gradient(135deg, var(--csx-primary), var(--csx-secondary))"
                : "var(--csx-primary)",
            }}
          >
            {isActive ? (
              isSpeakingNow ? (
                <WaveIcon className="h-7 w-7" />
              ) : (
                <CloseIcon className="h-6 w-6" />
              )
            ) : (
              <MicIcon className="h-7 w-7" />
            )}
          </button>
        </div>
      </div>
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  Wrapper exporté avec ConversationProvider                          */
/* ------------------------------------------------------------------ */

export function SteeveWidget() {
  return (
    <ConversationProvider agentId={AGENT_ID}>
      <SteeveButton />
    </ConversationProvider>
  );
}
