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
      <section className="relative">
        <div
          className="absolute inset-0 -z-10 mb-20 rounded-bl-[100px] md:mb-0"
          aria-hidden="true"
          style={{ background: "linear-gradient(135deg, var(--csx-darker) 0%, var(--csx-dark) 50%, var(--csx-primary) 100%)" }}
        />
        <div className="container-page">
          <div className="pt-20 pb-16 md:pt-24 md:pb-20">
            <div className="mx-auto max-w-3xl text-white anim-fade-up">
              <Link
                href="/blog"
                className="mb-5 inline-flex items-center gap-2 text-sm font-[500] text-white/70 transition-colors hover:text-white"
              >
                ← Retour au blog
              </Link>
              <div className="mb-5 flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white backdrop-blur">
                  {article.category}
                </span>
                <span className="text-sm text-white/60">{formattedDate}</span>
                <span className="text-sm text-white/60">·</span>
                <span className="text-sm text-white/60">⏱ {article.readingTime} de lecture</span>
              </div>
              <h1 className="h2 mb-5 text-white">{article.title}</h1>
              <p className="max-w-3xl text-base leading-relaxed text-white/80 md:text-lg">
                {article.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CORPS DE L'ARTICLE */}
      <section className="bg-white">
        <div className="container-page">
          <div className="section-pad">
            <div className="grid items-start gap-12 lg:grid-cols-[1fr_280px]">
              <article>
                <p className="mb-10 border-b border-slate-100 pb-8 text-lg leading-relaxed text-slate-700">
                  {article.content}
                </p>

                <div className="space-y-10">
                  {article.sections.map((section, i) => (
                    <section key={i}>
                      <h2 className="mb-4 text-xl font-bold tracking-tight md:text-2xl" style={{ color: "var(--csx-primary)" }}>
                        {section.heading}
                      </h2>
                      <p className="text-base leading-relaxed text-slate-700">{section.body}</p>
                    </section>
                  ))}
                </div>

                <div className="mt-12 flex items-start gap-4 border-t border-slate-100 pt-8">
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-lg font-bold text-white"
                    style={{ background: "linear-gradient(135deg, var(--csx-primary), var(--csx-secondary))" }}
                  >
                    CSX
                  </div>
                  <div>
                    <p className="font-[550] text-slate-800">Équipe CSX Telecom</p>
                    <p className="text-sm text-slate-500">
                      Opérateur télécom indépendant déclaré ARCEP · Cahors, Toulouse, Montauban, Bayonne
                    </p>
                  </div>
                </div>
              </article>

              <aside className="space-y-6">
                <div className="rounded-3xl p-6 text-white" style={{ background: "linear-gradient(135deg, var(--csx-primary), var(--csx-dark))" }}>
                  <h3 className="mb-2 text-lg font-bold tracking-tight">Audit gratuit</h3>
                  <p className="mb-4 text-sm leading-relaxed text-white/80">
                    Une question sur votre situation télécom ? Nos consultants vous répondent
                    gratuitement.
                  </p>
                  <Link
                    href="/contact"
                    className="block rounded-full px-4 py-3 text-center text-sm font-bold text-white transition-colors"
                    style={{ background: "var(--csx-secondary)" }}
                  >
                    Demander un audit →
                  </Link>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6">
                  <h3 className="mb-3 font-bold tracking-tight">Nous contacter</h3>
                  <ul className="space-y-3 text-sm text-slate-600">
                    <li>
                      <a href="tel:+33582730360" className="flex items-center gap-2 font-[500] transition-colors hover:text-[var(--csx-primary)]">
                        <span>📞</span> 05 82 73 03 60
                      </a>
                    </li>
                    <li>
                      <a href="mailto:contact@csx.fr" className="flex items-center gap-2 transition-colors hover:text-[var(--csx-primary)]">
                        <span>✉️</span> contact@csx.fr
                      </a>
                    </li>
                    <li className="flex items-center gap-2 text-slate-400">
                      <span>🕒</span> Lun–Ven 8h–17h
                    </li>
                  </ul>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6">
                  <h3 className="mb-4 font-bold tracking-tight">Autres articles</h3>
                  <ul className="space-y-3">
                    {articles
                      .filter((a) => a.slug !== article.slug)
                      .map((a) => (
                        <li key={a.slug}>
                          <Link
                            href={`/blog/${a.slug}`}
                            className="text-sm leading-snug text-slate-700 transition-colors hover:text-[var(--csx-primary)]"
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
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative">
        <div
          className="absolute inset-0 -z-10"
          aria-hidden="true"
          style={{ background: "linear-gradient(135deg, var(--csx-darker) 0%, var(--csx-dark) 100%)" }}
        />
        <div className="container-page">
          <div className="py-16 md:py-20">
            <div className="lg:flex lg:items-center lg:justify-between lg:gap-16">
              <div className="mb-8 text-center lg:mb-0 lg:text-left">
                <p className="mb-3 text-xl font-[550]" style={{ color: "var(--csx-secondary)" }}>
                  Besoin d'un accompagnement télécom ?
                </p>
                <h2 className="h2 text-white">Audit gratuit, sans engagement</h2>
                <p className="mt-4 text-lg text-white/75">Sur site ou à distance.</p>
              </div>
              <div className="flex justify-center lg:shrink-0">
                <Link href="/contact" className="btn group bg-white text-[var(--csx-primary)] shadow-sm hover:bg-[var(--csx-light)]">
                  Demander mon audit gratuit — Réponse sous 24h
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
