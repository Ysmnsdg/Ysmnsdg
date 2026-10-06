import Image from "next/image";
import Link from "next/link";
import { treatments } from "@/data/treatments";
import { Button } from "@/components/ui/Button";
import {
  Container,
  GoldRule,
  SectionHeading,
  SectionLabel,
} from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Treatments",
  description:
    "Aesthetic, restorative, and preventive dentistry — planned with precision and natural results in mind.",
  path: "/treatments",
});

export default function TreatmentsPage() {
  return (
    <>
      <section className="bg-ivory pt-28 pb-16 md:pt-36 md:pb-20">
        <Container>
          <Reveal>
            <SectionLabel>Care</SectionLabel>
            <SectionHeading as="h1">Treatments</SectionHeading>
            <GoldRule className="mt-8" />
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-text-secondary text-pretty">
              Each pathway begins with listening. Explore the care we offer —
              always tailored, never rushed.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="pb-24 md:pb-32">
        <Container>
          {treatments.length === 0 ? (
            <div className="border border-stone bg-ivory px-8 py-16 text-center">
              <p className="font-serif text-2xl text-espresso">
                Treatments coming soon
              </p>
            </div>
          ) : (
            <ul className="divide-y divide-stone border-y border-stone">
              {treatments.map((treatment, index) => (
                <li key={treatment.id}>
                  <Reveal delay={index * 40}>
                    <article className="grid gap-8 py-12 md:grid-cols-12 md:gap-10 md:py-16">
                      <div className="md:col-span-1">
                        <p className="eyebrow text-gold">{treatment.number}</p>
                      </div>
                      <div className="md:col-span-6">
                        <h2 className="font-serif text-3xl text-espresso md:text-4xl">
                          <Link
                            href={`/treatments/${treatment.slug}`}
                            className="link-line transition-colors hover:text-espresso"
                          >
                            {treatment.title}
                          </Link>
                        </h2>
                        <p className="mt-5 max-w-xl text-[0.975rem] leading-relaxed text-text-secondary text-pretty">
                          {treatment.shortDescription}
                        </p>
                        <Link
                          href={`/treatments/${treatment.slug}`}
                          className="mt-6 inline-flex text-xs uppercase tracking-[0.18em] text-espresso underline-offset-4 hover:underline"
                        >
                          Explore treatment
                        </Link>
                      </div>
                      <div className="relative aspect-[4/3] overflow-hidden bg-stone/30 md:col-span-5">
                        <Image
                          src={treatment.image.src}
                          alt={treatment.image.alt}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 40vw"
                          unoptimized
                        />
                      </div>
                    </article>
                  </Reveal>
                </li>
              ))}
            </ul>
          )}

          <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-stone pt-12 md:flex-row md:items-center">
            <p className="max-w-md text-sm text-text-secondary">
              Unsure where to begin? A consultation clarifies options without
              pressure.
            </p>
            <Button href="/book">Book consultation</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
