import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SteeveWidget } from "@/components/SteeveWidget";

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
};

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
      <body className="bg-white font-sans text-[var(--csx-text)] font-[400] antialiased">
        <div className="flex min-h-screen flex-col overflow-hidden">
          <Header />
          <main className="grow">{children}</main>
          <Footer />
        </div>

        {/* Kenobot script placeholder */}

        {/* Widget vocal Steeve — standard IA CSX Telecom */}
        <SteeveWidget />

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
