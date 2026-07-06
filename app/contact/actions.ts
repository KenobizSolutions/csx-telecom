"use server";

import nodemailer from "nodemailer";

export type ContactState = {
  ok: boolean;
  error?: string;
  fieldErrors?: Partial<Record<"name" | "email" | "message" | "consent", string>>;
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

  const fieldErrors: NonNullable<ContactState["fieldErrors"]> = {};
  if (name.length < 2) fieldErrors.name = "Merci d'indiquer votre nom.";
  if (!EMAIL_RE.test(email)) fieldErrors.email = "Adresse e-mail invalide.";
  if (message.length < 10)
    fieldErrors.message = "Merci de préciser votre demande (10 caractères minimum).";
  if (!consent) fieldErrors.consent = "Merci d'accepter le traitement de vos données.";

  if (Object.keys(fieldErrors).length > 0) {
    return { ok: false, error: "Merci de corriger les champs indiqués.", fieldErrors };
  }

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 465);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to = process.env.CONTACT_TO || "contact@csx.fr";
  const from = process.env.CONTACT_FROM || user;

  if (!host || !user || !pass) {
    console.error(
      "[contact] SMTP non configuré : définir SMTP_HOST, SMTP_USER, SMTP_PASS."
    );
    return {
      ok: false,
      error:
        "Une erreur technique empêche l'envoi pour le moment. Merci de nous appeler au 05 82 73 03 60 ou d'écrire à contact@csx.fr.",
    };
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  const body = [
    `Nom : ${name}`,
    company && `Entreprise : ${company}`,
    `E-mail : ${email}`,
    phone && `Téléphone : ${phone}`,
    subject && `Sujet : ${subject}`,
    "",
    "Message :",
    message,
    "",
    "— Envoyé depuis le formulaire de contact de www.csx-telecom.fr",
  ]
    .filter(Boolean)
    .join("\n");

  try {
    await transporter.sendMail({
      from: `"Site CSX Telecom" <${from}>`,
      to,
      replyTo: { name, address: email },
      subject: `[Site] Demande de ${name}${company ? ` — ${company}` : ""}`,
      text: body,
    });
    return { ok: true };
  } catch (err) {
    console.error("[contact] Échec de l'envoi de l'e-mail :", err);
    return {
      ok: false,
      error:
        "L'envoi a échoué. Merci de nous appeler au 05 82 73 03 60 ou d'écrire à contact@csx.fr.",
    };
  }
}
