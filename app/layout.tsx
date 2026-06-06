import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SteeveWidgetLazy } from "@/components/SteeveWidgetLazy";

// Aspekta — police principale (reprise du template fintech-next)
const aspekta = localFont({
  src: [
    { path: "../public/fonts/Aspekta-350.woff2", weight: "350" },
    { path: "../public/fonts/Aspekta-400.woff2", weight: "400" },
    { path: "../public/fonts/Aspekta-450.woff2", weight: "450" },
    { path: "../public/fonts/Aspekta-500.woff2", weight: "500" },
    { path: "../public/fonts/Aspekta-550.woff2", weight: "550" },
    { path: "../public/fonts/Aspekta-700.woff2", weight: "700" },
  ],
  variable: "--font-aspekta",
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.csx-telecom.fr"),
  title: {
    default: "CSX Telecom — Opérateur télécom indépendant pour les entreprises",
    template: "%s | CSX Telecom",
  },
  description:
    "CSX Telecom — Téléphonie IP, Internet Pro, infogérance et redondance pour les entreprises (B2B) à Cahors et en Occitanie.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "CSX Telecom",
    url: "https://www.csx-telecom.fr",
    title: "CSX Telecom — Opérateur télécom indépendant pour les entreprises",
    description:
      "Téléphonie IP, VoIP, internet professionnel et agents IA pour les entreprises (B2B) à Cahors et en Occitanie. Opérateur déclaré ARCEP.",
  },
  twitter: {
    card: "summary_large_image",
    title: "CSX Telecom — Opérateur télécom indépendant pour les entreprises",
    description:
      "Téléphonie IP, VoIP, internet professionnel et agents IA pour les entreprises. Opérateur déclaré ARCEP.",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.csx-telecom.fr/#organization",
  name: "CSX Telecom",
  url: "https://www.csx-telecom.fr",
  logo: "https://www.csx-telecom.fr/logo-csx.png",
  image: "https://www.csx-telecom.fr/logo-csx.png",
  description:
    "Opérateur télécom indépendant déclaré ARCEP. Téléphonie IP, VoIP, internet professionnel et agents virtuels IA pour les entreprises.",
  foundingDate: "2009",
  telephone: "+33582730360",
  email: "contact@csx.fr",
  taxID: "800 317 570 00011",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1 Place Emilien Imbert",
    addressLocality: "Cahors",
    postalCode: "46000",
    addressCountry: "FR",
  },
  areaServed: [
    "Lot (46)",
    "Tarn-et-Garonne (82)",
    "Haute-Garonne (31)",
    "Pyrénées-Atlantiques (64)",
  ],
  sameAs: ["https://share.google/USNDlzYinzAvses3B"],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+33582730360",
    email: "contact@csx.fr",
    contactType: "customer service",
    areaServed: "FR",
    availableLanguage: ["French"],
  },
} as const;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${aspekta.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* Pré-connexion vers l'API ElevenLabs (utilisée par le widget vocal) */}
        <link rel="preconnect" href="https://api.elevenlabs.io" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://api.elevenlabs.io" />
      </head>
      <body className="overflow-x-clip bg-white font-sans text-[var(--csx-text)] font-[400] antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="grow">{children}</main>
          <Footer />
        </div>

        {/* Kenobot script placeholder */}

        {/* Widget vocal Steeve — chargé après idle pour ne pas pénaliser le LCP */}
        <SteeveWidgetLazy />

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
