"use client";

import { useActionState } from "react";
import { track } from "@vercel/analytics";
import { sendContactMessage, type ContactState } from "./actions";

const initial: ContactState = { ok: false };

const inputClass =
  "w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-800 shadow-sm outline-none transition focus:border-[var(--csx-primary)] focus:ring-2 focus:ring-[var(--csx-primary)]/20";
const labelClass = "mb-1.5 block text-sm font-[550] text-slate-700";

export function ContactForm() {
  const [state, formAction, pending] = useActionState(sendContactMessage, initial);

  if (state.ok) {
    // Événement de conversion (Vercel Analytics)
    track("contact_form_submit");
    return (
      <div
        role="status"
        className="rounded-3xl border p-8 text-center"
        style={{ background: "var(--csx-light)", borderColor: "var(--csx-secondary)" }}
      >
        <div className="mb-3 text-3xl" aria-hidden="true">✅</div>
        <h3 className="mb-2 text-xl font-bold tracking-tight" style={{ color: "var(--csx-primary)" }}>
          Merci, votre demande est envoyée !
        </h3>
        <p className="text-slate-600">
          Un consultant CSX Telecom vous répond sous 24h en jours ouvrés. Pour une urgence,
          appelez le{" "}
          <a href="tel:+33582730360" className="font-[550] underline" style={{ color: "var(--csx-primary)" }}>
            05 82 73 03 60
          </a>
          .
        </p>
      </div>
    );
  }

  const fe = state.fieldErrors ?? {};

  return (
    <form action={formAction} className="space-y-4" noValidate>
      {/* Honeypot anti-spam — masqué aux humains et aux lecteurs d'écran */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Ne pas remplir</label>
        <input id="website" type="text" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Nom <span style={{ color: "var(--csx-primary)" }}>*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={inputClass}
            aria-invalid={fe.name ? true : undefined}
            aria-describedby={fe.name ? "err-name" : undefined}
          />
          {fe.name && <p id="err-name" role="alert" className="mt-1 text-xs text-red-600">{fe.name}</p>}
        </div>
        <div>
          <label htmlFor="company" className={labelClass}>Entreprise</label>
          <input id="company" name="company" type="text" autoComplete="organization" className={inputClass} />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className={labelClass}>
            E-mail <span style={{ color: "var(--csx-primary)" }}>*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClass}
            aria-invalid={fe.email ? true : undefined}
            aria-describedby={fe.email ? "err-email" : undefined}
          />
          {fe.email && <p id="err-email" role="alert" className="mt-1 text-xs text-red-600">{fe.email}</p>}
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>Téléphone</label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" className={inputClass} />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className={labelClass}>Votre besoin</label>
        <select id="subject" name="subject" className={inputClass} defaultValue="">
          <option value="">— Sélectionnez —</option>
          <option>Standard téléphonique IP / IPBX</option>
          <option>VoIP / téléphonie cloud</option>
          <option>Internet professionnel / fibre</option>
          <option>Agents vocaux IA</option>
          <option>Migration réseau cuivre (RTC)</option>
          <option>Autre demande</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Votre message <span style={{ color: "var(--csx-primary)" }}>*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={inputClass}
          aria-invalid={fe.message ? true : undefined}
          aria-describedby={fe.message ? "err-message" : undefined}
        />
        {fe.message && <p id="err-message" role="alert" className="mt-1 text-xs text-red-600">{fe.message}</p>}
      </div>

      <div>
        <label htmlFor="consent" className="flex items-start gap-2.5 text-sm text-slate-600">
          <input
            id="consent"
            name="consent"
            type="checkbox"
            required
            className="mt-0.5 h-4 w-4 shrink-0 rounded border-slate-300"
            aria-invalid={fe.consent ? true : undefined}
            aria-describedby={fe.consent ? "err-consent" : undefined}
          />
          <span>
            J&apos;accepte que mes données soient utilisées pour traiter ma demande, conformément à la{" "}
            <a href="/politique-confidentialite" className="underline" style={{ color: "var(--csx-primary)" }}>
              politique de confidentialité
            </a>
            . <span style={{ color: "var(--csx-primary)" }}>*</span>
          </span>
        </label>
        {fe.consent && <p id="err-consent" role="alert" className="mt-1 text-xs text-red-600">{fe.consent}</p>}
      </div>

      {state.error && (
        <p role="alert" className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700 ring-1 ring-red-100">
          {state.error}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="btn w-full bg-[var(--csx-primary)] text-white shadow-sm transition hover:bg-[var(--csx-dark)] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {pending ? "Envoi en cours…" : "Envoyer ma demande — réponse sous 24h"}
      </button>
      <p className="text-xs text-slate-400">
        Champs marqués <span style={{ color: "var(--csx-primary)" }}>*</span> obligatoires. Audit
        gratuit, sans engagement.
      </p>
    </form>
  );
}
