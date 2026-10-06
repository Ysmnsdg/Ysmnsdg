import Link from "next/link";
import { notFound } from "next/navigation";
import {
  articles,
  getArticleBySlug,
  getRelatedArticles,
} from "@/data/articles";
import { Button } from "@/components/ui/Button";
import {
  Container,
  GoldRule,
  SectionLabel,
} from "@/components/ui/Section";
import { articleJsonLd, breadcrumbJsonLd, createMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return createMetadata({
    title: article.seo.title,
    description: article.seo.description,
    path: `/journal/${article.slug}`,
  });
}

export default async function JournalArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const found = getArticleBySlug(slug);
  if (!found) notFound();
  const article = found as NonNullable<typeof found>;

  const related = getRelatedArticles(article.relatedSlugs);
  const jsonLd = articleJsonLd({
    title: article.title,
    description: article.seo.description,
    date: article.date,
    author: article.author,
    slug: article.slug,
  });
  const crumbs = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Journal", path: "/journal" },
    { name: article.title, path: `/journal/${article.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }}
      />

      <article className="bg-warm-white pt-28 pb-20 md:pt-36 md:pb-28">
        <Container className="max-w-3xl">
          <SectionLabel>{article.category}</SectionLabel>
          <h1 className="mt-4 font-serif text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.05] tracking-[-0.02em] text-text">
            {article.title}
          </h1>
          <p className="mt-6 text-sm text-taupe">
            {article.author} · {article.date} · {article.readingTime} read
          </p>
          <GoldRule className="mt-8" />

          <div className="mt-10 space-y-6 text-lg leading-relaxed text-text-secondary">
            {article.content.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>

          <p className="mt-12 border-t border-stone pt-8 text-sm text-taupe">
            Educational content only. This article does not constitute medical
            advice, diagnosis, or treatment.
          </p>

          <div className="mt-10">
            <Button href="/book">Discuss with the Practice</Button>
          </div>
        </Container>

        {related.length > 0 && (
          <Container className="mt-20 max-w-3xl border-t border-stone pt-12">
            <SectionLabel>Related</SectionLabel>
            <ul className="mt-6 space-y-5">
              {related.map((item) => (
                <li key={item.id}>
                  <Link
                    href={`/journal/${item.slug}`}
                    className="font-serif text-2xl text-text hover:text-espresso"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        )}
      </article>
    </>
  );
}
