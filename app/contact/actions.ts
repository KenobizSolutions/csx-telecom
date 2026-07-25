"use server";

export type ContactValues = {
  name: string;
  company: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  consent: boolean;
};

export type ContactState = {
  ok: boolean;
  error?: string;
  fieldErrors?: Partial<Record<"name" | "email" | "phone" | "consent", string>>;
  /** Saisie renvoyée au formulaire pour ne rien perdre en cas d'erreur. */
  values?: ContactValues;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Nettoie un champ destiné à un en-tête / une ligne (retire sauts de ligne). */
function clean(v: FormDataEntryValue | null, max: number): string {
  return (typeof v === "string" ? v : "").replace(/[\r\n\t]+/g, " ").trim().slice(0, max);
}
/** Nettoie le corps du message (multi-ligne autorisé). */
function cleanMessage(v: FormDataEntryValue | null, max: number): string {
  return (typeof v === "string" ? v : "").replace(/\r\n/g, "\n").trim().slice(0, max);
}
/** Échappe le HTML avant insertion dans le corps de l'e-mail. */
function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function sendContactMessage(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  // Honeypot anti-spam : champ caché, normalement vide. S'il est rempli,
  // c'est un bot → on renvoie un faux succès pour ne rien lui apprendre.
  if (clean(formData.get("website"), 100)) return { ok: true };

  const name = clean(formData.get("name"), 120);
  const company = clean(formData.get("company"), 160);
  const email = clean(formData.get("email"), 200);
  const phone = clean(formData.get("phone"), 40);
  const subject = clean(formData.get("subject"), 80);
  const message = cleanMessage(formData.get("message"), 4000);
  const consent = formData.get("consent") === "on";

  // La saisie est systématiquement renvoyée : une erreur ne doit jamais
  // effacer ce que le visiteur a écrit.
  const values: ContactValues = { name, company, email, phone, subject, message, consent };

  // Validation volontairement minimale : on demande un nom, un moyen de
  // recontact (e-mail OU téléphone) et le consentement. Le message est
  // facultatif — mieux vaut un lead sans détail qu'un formulaire abandonné.
  const fieldErrors: NonNullable<ContactState["fieldErrors"]> = {};
  if (name.length < 2) fieldErrors.name = "Merci d'indiquer votre nom.";
  if (email && !EMAIL_RE.test(email)) fieldErrors.email = "Adresse e-mail invalide.";
  if (!email && !phone) {
    fieldErrors.email = "Indiquez un e-mail ou un téléphone pour que nous puissions vous répondre.";
    fieldErrors.phone = "Indiquez un e-mail ou un téléphone pour que nous puissions vous répondre.";
  }
  if (!consent) fieldErrors.consent = "Merci d'accepter le traitement de vos données.";

  if (Object.keys(fieldErrors).length > 0) {
    return { ok: false, error: "Merci de corriger les champs indiqués.", fieldErrors, values };
  }

  const lead = { name, company, email, phone, subject, message, date: new Date().toISOString() };

  /**
   * Filet de sécurité : quoi qu'il arrive, la demande complète est écrite dans
   * les journaux du serveur. Si l'envoi échoue, le prospect reste récupérable
   * depuis les logs Vercel (recherche : CONTACT_LEAD).
   */
  const logLead = (raison: string) =>
    console.error(`CONTACT_LEAD ${raison} ${JSON.stringify(lead)}`);

  // Clé Resend : RESEND_API_KEY_TELECOM est le nom utilisé sur ce projet
  // (le compte Resend héberge plusieurs sites) ; RESEND_API_KEY reste accepté.
  const apiKey = process.env.RESEND_API_KEY_TELECOM || process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO || "contact@csx.fr";
  // Doit appartenir à un domaine vérifié dans Resend. Une fois csx-telecom.fr
  // vérifié, basculer CONTACT_FROM sur "CSX Telecom <site@csx-telecom.fr>".
  const from = process.env.CONTACT_FROM || "CSX Telecom <contact@kenobiz-sites.fr>";

  if (!apiKey) {
    logLead("ENVOI_IMPOSSIBLE_CLE_MANQUANTE");
    console.error(
      "[contact] Clé Resend absente (RESEND_API_KEY_TELECOM) : impossible d'envoyer la demande."
    );
    return {
      ok: false,
      values,
      error:
        "Une erreur technique empêche l'envoi pour le moment. Merci de nous appeler au 05 82 73 03 60 ou d'écrire à contact@csx.fr.",
    };
  }

  const lignes = [
    ["Nom", name],
    ["Entreprise", company],
    ["E-mail", email],
    ["Téléphone", phone],
    ["Besoin", subject],
  ].filter(([, v]) => v) as [string, string][];

  const corpsMessage = message || "(aucun message saisi)";

  const text = [
    ...lignes.map(([k, v]) => `${k} : ${v}`),
    "",
    "Message :",
    corpsMessage,
    "",
    "— Envoyé depuis le formulaire de contact de www.csx-telecom.fr",
  ].join("\n");

  const html = `
    <div style="font-family:system-ui,-apple-system,Segoe UI,sans-serif;max-width:620px;color:#1a1a2e">
      <h2 style="color:#1515dc;margin:0 0 16px">Nouvelle demande depuis le site</h2>
      <table style="border-collapse:collapse;width:100%;font-size:14px">
        ${lignes
          .map(
            ([k, v]) =>
              `<tr><td style="padding:6px 12px 6px 0;color:#64748b;white-space:nowrap">${esc(k)}</td><td style="padding:6px 0"><strong>${esc(v)}</strong></td></tr>`
          )
          .join("")}
      </table>
      <p style="margin:20px 0 6px;color:#64748b;font-size:14px">Message :</p>
      <div style="background:#f0f4ff;border-radius:12px;padding:16px;white-space:pre-wrap;font-size:15px">${esc(corpsMessage)}</div>
      <p style="margin-top:24px;color:#94a3b8;font-size:12px">
        Formulaire de contact — www.csx-telecom.fr · Répondez directement à cet e-mail pour joindre le prospect.
      </p>
    </div>`;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        // Uniquement si le visiteur a laissé un e-mail : il peut ne donner
        // qu'un téléphone.
        ...(email ? { reply_to: email } : {}),
        subject: `[Site] Demande de ${name}${company ? ` — ${company}` : ""}`,
        text,
        html,
      }),
    });

    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      logLead("ECHEC_ENVOI");
      console.error(`[contact] Resend a répondu ${res.status} : ${detail.slice(0, 300)}`);
      return {
        ok: false,
        values,
        error:
          "L'envoi a échoué. Merci de nous appeler au 05 82 73 03 60 ou d'écrire à contact@csx.fr.",
      };
    }

    return { ok: true };
  } catch (err) {
    logLead("EXCEPTION_RESEAU");
    console.error("[contact] Échec de l'appel à Resend :", err);
    return {
      ok: false,
      values,
      error:
        "L'envoi a échoué. Merci de nous appeler au 05 82 73 03 60 ou d'écrire à contact@csx.fr.",
    };
  }
}
