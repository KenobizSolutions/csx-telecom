import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />

        {/* Kenobot script placeholder */}

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
