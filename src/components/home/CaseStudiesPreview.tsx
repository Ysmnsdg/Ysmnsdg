import Link from "next/link";
import { getFeaturedCases } from "@/data/cases";
import { treatments } from "@/data/treatments";
import {
  Container,
  SectionHeading,
  SectionLabel,
} from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function CaseStudiesPreview() {
  const items = getFeaturedCases().slice(0, 3);

  return (
    <section className="bg-warm-white py-24 md:py-32">
      <Container wide>
        <Reveal>
          <SectionLabel>Case Studies</SectionLabel>
          <SectionHeading className="max-w-3xl">
            How thoughtful planning
            <br />
            becomes lasting results.
          </SectionHeading>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((item, index) => {
            const treatment = treatments.find((t) => t.id === item.treatmentId);
            return (
              <Reveal key={item.id} delay={index * 80}>
                <Link
                  href={`/cases/${item.slug}`}
                  className="group block border border-stone bg-ivory p-7 transition-colors hover:border-gold/60"
                >
                  <p className="eyebrow text-gold">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-5 font-serif text-2xl leading-snug text-text">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-xs uppercase tracking-[0.16em] text-taupe">
                    {treatment?.title}
                  </p>
                  <p className="mt-5 line-clamp-3 text-sm leading-relaxed text-text-secondary">
                    {item.outcome}
                  </p>
                  <span className="mt-8 inline-block text-[0.6875rem] uppercase tracking-[0.18em] text-espresso transition-transform group-hover:translate-x-1">
                    Read case →
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
