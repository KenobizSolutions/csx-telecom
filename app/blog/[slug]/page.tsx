import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, getArticleBySlug } from "../data";

/* ------------------------------------------------------------------ */
/*  Static params — pre-render all known slugs at build time           */
/* ------------------------------------------------------------------ */
export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

/* ------------------------------------------------------------------ */
/*  Dynamic metadata                                                     */
/* ------------------------------------------------------------------ */
export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: `https://www.csx-telecom.fr/blog/${article.slug}` },
    openGraph: {
      title: article.title,
      description: article.description,
      url: `https://www.csx-telecom.fr/blog/${article.slug}`,
      type: "article",
      publishedTime: article.date,
      authors: ["CSX Telecom"],
    },
  };
}

/* ------------------------------------------------------------------ */
/*  Page component                                                       */
/* ------------------------------------------------------------------ */
export default async function ArticlePage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    dateModified: article.date,
    author: {
      "@type": "Organization",
      name: "CSX Telecom",
      url: "https://www.csx-telecom.fr",
    },
    publisher: {
      "@type": "Organization",
      name: "CSX Telecom",
      url: "https://www.csx-telecom.fr",
    },
    url: `https://www.csx-telecom.fr/blog/${article.slug}`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.csx-telecom.fr/blog/${article.slug}`,
    },
  };

  const formattedDate = new Date(article.date).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section
        className="relative py-16 md:py-24 text-white"
        style={{ background: "linear-gradient(135deg, #0D0DA8 0%, #1515DC 60%, #29ABE2 100%)" }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-4">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              ← Retour au blog
            </Link>
          </div>
          <div className="flex items-center gap-3 mb-5">
            <span
              className="text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full text-white"
              style={{ background: "rgba(255,255,255,0.2)" }}
            >
              {article.category}
            </span>
            <span className="text-white/60 text-sm">{formattedDate}</span>
            <span className="text-white/60 text-sm">·</span>
            <span className="text-white/60 text-sm">⏱ {article.readingTime} de lecture</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-5">
            {article.title}
          </h1>
          <p className="text-base md:text-lg opacity-80 leading-relaxed max-w-3xl">
            {article.description}
          </p>
        </div>
      </section>

      {/* CORPS DE L'ARTICLE */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid lg:grid-cols-[1fr_280px] gap-12 items-start">

            {/* Texte principal */}
            <article>
              {/* Chapeau */}
              <p
                className="text-lg leading-relaxed mb-10 pb-8 border-b border-gray-100"
                style={{ color: "#374151" }}
              >
                {article.content}
              </p>

              {/* Sections */}
              <div className="space-y-10">
                {article.sections.map((section, i) => (
                  <section key={i}>
                    <h2
                      className="text-xl md:text-2xl font-bold mb-4"
                      style={{ color: "#1515DC" }}
                    >
                      {section.heading}
                    </h2>
                    <p className="text-gray-700 leading-relaxed text-base">{section.body}</p>
                  </section>
                ))}
              </div>

              {/* Signature auteur */}
              <div
                className="mt-12 pt-8 border-t border-gray-100 flex items-start gap-4"
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, #1515DC, #29ABE2)" }}
                >
                  CSX
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Équipe CSX Telecom</p>
                  <p className="text-sm text-gray-500">
                    Opérateur télécom indépendant déclaré ARCEP · Cahors, Toulouse, Montauban,
                    Bayonne
                  </p>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* CTA audit */}
              <div
                className="rounded-2xl p-6 text-white"
                style={{ background: "linear-gradient(135deg, #1515DC, #0D0DA8)" }}
              >
                <h3 className="font-bold text-lg mb-2">Audit gratuit</h3>
                <p className="text-sm opacity-80 mb-4 leading-relaxed">
                  Une question sur votre situation télécom ? Nos consultants vous répondent
                  gratuitement.
                </p>
                <Link
                  href="/contact"
                  className="block text-center px-4 py-3 rounded-lg font-bold text-white text-sm hover:opacity-90 transition-all"
                  style={{ background: "#29ABE2" }}
                >
                  Demander un audit →
                </Link>
              </div>

              {/* Contact rapide */}
              <div className="rounded-2xl p-6 border border-gray-100 bg-white">
                <h3 className="font-bold mb-3" style={{ color: "#111827" }}>
                  Nous contacter
                </h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li>
                    <a
                      href="tel:+33582730360"
                      className="flex items-center gap-2 hover:text-[#1515DC] transition-colors font-medium"
                    >
                      <span>📞</span> 05 82 73 03 60
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:contact@csx.fr"
                      className="flex items-center gap-2 hover:text-[#1515DC] transition-colors"
                    >
                      <span>✉️</span> contact@csx.fr
                    </a>
                  </li>
                  <li className="flex items-center gap-2 text-gray-400">
                    <span>🕒</span> Lun–Ven 8h–17h
                  </li>
                </ul>
              </div>

              {/* Autres articles */}
              <div className="rounded-2xl p-6 border border-gray-100 bg-white">
                <h3 className="font-bold mb-4" style={{ color: "#111827" }}>
                  Autres articles
                </h3>
                <ul className="space-y-3">
                  {articles
                    .filter((a) => a.slug !== article.slug)
                    .map((a) => (
                      <li key={a.slug}>
                        <Link
                          href={`/blog/${a.slug}`}
                          className="text-sm leading-snug hover:text-[#1515DC] transition-colors"
                          style={{ color: "#374151" }}
                        >
                          {a.title} →
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            </aside>

          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 text-white text-center" style={{ background: "#0D0DA8" }}>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">
            Besoin d'un accompagnement télécom ?
          </h2>
          <p className="text-lg mb-8 opacity-80">
            Audit gratuit, sans engagement, sur site ou à distance.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 rounded-lg font-bold text-white text-lg hover:opacity-90 transition-all"
            style={{ background: "#29ABE2" }}
          >
            Demander mon audit gratuit — Réponse sous 24h
          </Link>
        </div>
      </section>
    </>
  );
}
