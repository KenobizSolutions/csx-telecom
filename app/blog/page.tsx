import type { Metadata } from "next";
import Link from "next/link";
import { articles } from "./data";

export const metadata: Metadata = {
  title: "Blog télécom entreprise — Guides et conseils",
  description:
    "Articles de fond sur la téléphonie IP, la cybersécurité télécom et les agents IA vocaux pour les PME. Conseils d'un opérateur ARCEP indépendant.",
  alternates: { canonical: "https://www.csx-telecom.fr/blog" },
};

const categoryColors: Record<string, string> = {
  "Téléphonie IP":   "#1515DC",
  "Cybersécurité":   "#0D0DA8",
  "IA & Innovation": "#29ABE2",
};

export default function BlogPage() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative py-20 md:py-28 text-white"
        style={{ background: "linear-gradient(135deg, #0D0DA8 0%, #1515DC 60%, #29ABE2 100%)" }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-block mb-4 px-4 py-1 rounded-full text-sm font-medium bg-white/20">
            Ressources · Guides · Actualités
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">
            Blog — Télécom & IA pour les entreprises
          </h1>
          <p className="text-base md:text-lg opacity-80 leading-relaxed max-w-2xl mx-auto">
            Articles de fond rédigés par l'équipe CSX Telecom sur la téléphonie IP, la
            cybersécurité et les agents IA vocaux. Des contenus concrets pour les décideurs
            de PME.
          </p>
        </div>
      </section>

      {/* LISTE DES ARTICLES */}
      <section className="py-16 md:py-24" style={{ background: "#F0F4FF" }}>
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-1 gap-6">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-[#1515DC] hover:shadow-lg transition-all flex flex-col md:flex-row gap-6"
              >
                {/* Catégorie + méta */}
                <div className="flex-shrink-0 flex flex-col justify-between md:w-44">
                  <span
                    className="inline-block text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full text-white self-start"
                    style={{ background: categoryColors[article.category] ?? "#1515DC" }}
                  >
                    {article.category}
                  </span>
                  <div className="text-sm text-gray-400 mt-3 space-y-1">
                    <div>
                      {new Date(article.date).toLocaleDateString("fr-FR", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </div>
                    <div>⏱ {article.readingTime} de lecture</div>
                  </div>
                </div>

                {/* Contenu */}
                <div className="flex-1">
                  <h2
                    className="text-xl font-bold mb-3 group-hover:text-[#1515DC] transition-colors leading-snug"
                    style={{ color: "#111827" }}
                  >
                    {article.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">{article.description}</p>
                  <span className="text-sm font-semibold" style={{ color: "#1515DC" }}>
                    Lire l'article →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-white text-center" style={{ background: "#0D0DA8" }}>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">
            Une question sur votre situation télécom ?
          </h2>
          <p className="text-lg mb-8 opacity-80">
            Nos consultants vous répondent gratuitement, sans engagement.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 rounded-lg font-bold text-white text-lg hover:opacity-90 transition-all"
            style={{ background: "#29ABE2" }}
          >
            Demander un audit gratuit — Réponse sous 24h
          </Link>
        </div>
      </section>
    </>
  );
}
