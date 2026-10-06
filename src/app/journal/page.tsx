import Link from "next/link";
import { articles } from "@/data/articles";
import {
  Container,
  GoldRule,
  SectionHeading,
  SectionLabel,
} from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "The Dental Journal",
  description:
    "Editorial articles on implants, veneers, whitening, sensitivity, and digital dentistry.",
  path: "/journal",
});

export default function JournalPage() {
  return (
    <>
      <section className="bg-ivory pt-28 pb-16 md:pt-36 md:pb-20">
        <Container>
          <Reveal>
            <SectionLabel>Journal</SectionLabel>
            <SectionHeading as="h1">The Dental Journal</SectionHeading>
            <GoldRule className="mt-8" />
            <p className="mt-6 max-w-2xl text-lg text-text-secondary">
              Educational writing for patients who want clarity — not marketing.
              Nothing here replaces a clinical examination.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-warm-white py-16 md:py-24">
        <Container wide>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, index) => (
              <Reveal key={article.id} delay={index * 50}>
                <article className="flex h-full flex-col border-t border-stone pt-6">
                  <p className="text-[0.65rem] uppercase tracking-[0.18em] text-taupe">
                    {article.category} · {article.readingTime} · {article.date}
                  </p>
                  <h2 className="mt-4 font-serif text-2xl leading-snug text-text md:text-3xl">
                    <Link
                      href={`/journal/${article.slug}`}
                      className="hover:text-espresso"
                    >
                      {article.title}
                    </Link>
                  </h2>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-text-secondary">
                    {article.excerpt}
                  </p>
                  <Link
                    href={`/journal/${article.slug}`}
                    className="link-line mt-8 text-[0.6875rem] uppercase tracking-[0.18em] text-espresso"
                  >
                    Read article →
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
