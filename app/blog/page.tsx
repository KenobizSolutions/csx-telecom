import type { Metadata } from "next";
import Link from "next/link";
import { articles } from "./data";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Blog télécom entreprise — Guides et conseils",
  description:
    "Articles de fond sur la téléphonie IP, la cybersécurité télécom et les agents IA vocaux pour les PME. Conseils d'un opérateur ARCEP indépendant.",
  alternates: { canonical: "https://www.csx-telecom.fr/blog" },
};

const categoryColors: Record<string, string> = {
  "Téléphonie IP":            "var(--csx-primary)",
  "Cybersécurité":            "var(--csx-dark)",
  "IA & Innovation":          "var(--csx-secondary)",
  "Internet professionnel":   "var(--csx-darker)",
};

export default function BlogPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Accueil", url: "https://www.csx-telecom.fr/" }, { name: "Blog", url: "https://www.csx-telecom.fr/blog" }]} />
      {/* HERO */}
      <section className="relative">
        <div
          className="absolute inset-0 -z-10 mb-20 rounded-bl-[100px] md:mb-0"
          aria-hidden="true"
          style={{ background: "linear-gradient(135deg, var(--csx-darker) 0%, var(--csx-dark) 50%, var(--csx-primary) 100%)" }}
        />
        <div className="container-page">
          <div className="pt-20 pb-16 md:pt-24 md:pb-24">
            <div className="mx-auto max-w-3xl text-center text-white anim-fade-up">
              <div className="mb-6 inline-flex items-center rounded-full bg-white/15 px-4 py-1.5 text-xs font-[550] uppercase tracking-wider text-white/90 backdrop-blur">
                Ressources · Guides · Actualités
              </div>
              <h1 className="h1 mb-5 text-white">
                Blog — <span style={{ color: "var(--csx-secondary)" }}>Télécom & IA</span> pour les entreprises
              </h1>
              <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
                Articles de fond rédigés par l'équipe CSX Telecom sur la téléphonie IP, la
                cybersécurité et les agents IA vocaux. Des contenus concrets pour les décideurs
                de PME.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LISTE DES ARTICLES */}
      <section style={{ background: "var(--csx-light)" }}>
        <div className="container-page">
          <div className="section-pad">
            <div className="mx-auto grid max-w-5xl gap-6">
              {articles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  className="group flex flex-col gap-6 rounded-3xl border border-white bg-white p-8 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[var(--csx-primary)] hover:shadow-md md:flex-row"
                >
                  <div className="flex shrink-0 flex-col justify-between md:w-44">
                    <span
                      className="self-start rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide text-white"
                      style={{ background: categoryColors[article.category] ?? "var(--csx-primary)" }}
                    >
                      {article.category}
                    </span>
                    <div className="mt-3 space-y-1 text-sm text-slate-400">
                      <div>
                        {new Date(article.date).toLocaleDateString("fr-FR", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </div>
                      <div>
                        <span aria-hidden="true">⏱ </span>
                        {article.readingTime} de lecture
                      </div>
                    </div>
                  </div>

                  <div className="flex-1">
                    <h2 className="mb-3 text-xl font-bold leading-snug tracking-tight transition-colors group-hover:text-[var(--csx-primary)]">
                      {article.title}
                    </h2>
                    <p className="mb-4 leading-relaxed text-slate-600">{article.description}</p>
                    <span className="inline-flex items-center text-sm font-[550]" style={{ color: "var(--csx-primary)" }}>
                      Lire l'article<span className="ml-1 transition-transform duration-150 group-hover:translate-x-0.5">→</span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative">
        <div
          className="absolute inset-0 -z-10 rounded-bl-[100px]"
          aria-hidden="true"
          style={{ background: "linear-gradient(135deg, var(--csx-darker) 0%, var(--csx-dark) 100%)" }}
        />
        <div className="container-page">
          <div className="py-16 md:py-20">
            <div className="lg:flex lg:items-center lg:justify-between lg:gap-16">
              <div className="mb-8 text-center lg:mb-0 lg:text-left">
                <p className="mb-3 text-xl font-[550]" style={{ color: "var(--csx-secondary)" }}>
                  Une question sur votre situation télécom ?
                </p>
                <h2 className="h2 text-white">Nos consultants vous répondent gratuitement</h2>
                <p className="mt-4 text-lg text-white/75">Sans engagement, sur site ou à distance.</p>
              </div>
              <div className="flex justify-center lg:shrink-0">
                <Link href="/contact" className="btn group bg-white text-[var(--csx-primary)] shadow-sm hover:bg-[var(--csx-light)]">
                  Demander un audit gratuit — Réponse sous 24h
                  <span className="ml-2 transition-transform duration-150 group-hover:translate-x-0.5">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
