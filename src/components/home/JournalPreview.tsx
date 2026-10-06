import Link from "next/link";
import { articles } from "@/data/articles";
import {
  Container,
  SectionHeading,
  SectionLabel,
} from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function JournalPreview() {
  const latest = articles.slice(0, 3);

  return (
    <section className="bg-warm-white py-24 md:py-32">
      <Container wide>
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionLabel>The Dental Journal</SectionLabel>
            <SectionHeading>
              Clear thinking on
              <br />
              modern dentistry.
            </SectionHeading>
          </div>
          <Button href="/journal" variant="secondary">
            Browse the Journal
          </Button>
        </div>

        <div className="grid gap-8 border-t border-stone pt-10 md:grid-cols-3">
          {latest.map((article, index) => (
            <Reveal key={article.id} delay={index * 70}>
              <article>
                <p className="text-[0.65rem] uppercase tracking-[0.18em] text-taupe">
                  {article.category} · {article.readingTime}
                </p>
                <h3 className="mt-4 font-serif text-2xl leading-snug text-text">
                  <Link
                    href={`/journal/${article.slug}`}
                    className="transition-colors hover:text-espresso"
                  >
                    {article.title}
                  </Link>
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                  {article.excerpt}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
