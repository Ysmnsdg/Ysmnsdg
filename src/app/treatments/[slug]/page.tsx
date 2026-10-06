import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getTreatmentBySlug, treatments } from "@/data/treatments";
import { concerns } from "@/data/concerns";
import { dentist } from "@/data/dentist";
import { Button } from "@/components/ui/Button";
import {
  Container,
  GoldRule,
  SectionHeading,
  SectionLabel,
} from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { breadcrumbJsonLd, createMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return treatments.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const treatment = getTreatmentBySlug(slug);
  if (!treatment) return {};
  return createMetadata({
    title: treatment.seo.title,
    description: treatment.seo.description,
    path: `/treatments/${treatment.slug}`,
  });
}

export default async function TreatmentDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const found = getTreatmentBySlug(slug);
  if (!found) notFound();
  const treatment = found as NonNullable<typeof found>;

  const relatedConcerns = concerns.filter((c) =>
    treatment.relatedConcernIds?.includes(c.id),
  );

  const jsonLd = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Treatments", path: "/treatments" },
    { name: treatment.title, path: `/treatments/${treatment.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="bg-ivory pt-28 pb-16 md:pt-36 md:pb-20">
        <Container>
          <Reveal>
            <p className="eyebrow text-gold">{treatment.number}</p>
            <SectionHeading as="h1" className="mt-4">
              {treatment.title}
            </SectionHeading>
            <GoldRule className="mt-8" />
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-text-secondary text-pretty">
              {treatment.shortDescription}
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-7">
              <div className="relative aspect-[4/3] overflow-hidden bg-stone/30">
                <Image
                  src={treatment.image.src}
                  alt={treatment.image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  unoptimized
                  priority
                />
              </div>
            </Reveal>
            <div className="lg:col-span-5">
              <Reveal>
                <SectionLabel>Overview</SectionLabel>
                <p className="mt-4 text-[1.05rem] leading-relaxed text-text-secondary text-pretty">
                  {treatment.longDescription}
                </p>
                {treatment.duration && (
                  <p className="mt-8 border-t border-stone pt-6 text-sm text-text-secondary">
                    <span className="eyebrow mr-3 text-taupe">Timeline</span>
                    {treatment.duration}
                  </p>
                )}
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-stone bg-warm-white py-16 md:py-24">
        <Container>
          <div className="grid gap-12 md:grid-cols-2">
            <Reveal>
              <SectionLabel>Benefits</SectionLabel>
              <ul className="mt-6 space-y-4">
                {treatment.benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex gap-3 border-b border-stone pb-4 text-[0.975rem] text-text-secondary"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={80}>
              <SectionLabel>Ideal for</SectionLabel>
              <ul className="mt-6 space-y-4">
                {treatment.idealFor.map((entry) => (
                  <li
                    key={entry}
                    className="flex gap-3 border-b border-stone pb-4 text-[0.975rem] text-text-secondary"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-espresso" />
                    {entry}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>

      {relatedConcerns.length > 0 && (
        <section className="py-16 md:py-20">
          <Container>
            <SectionLabel>Related concerns</SectionLabel>
            <ul className="mt-8 flex flex-wrap gap-3">
              {relatedConcerns.map((concern) => (
                <li
                  key={concern.id}
                  className="border border-stone px-4 py-2.5 text-sm text-text-secondary"
                >
                  {concern.label}
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}

      <section className="bg-espresso py-16 text-warm-white md:py-20">
        <Container className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionLabel light>Next step</SectionLabel>
            <h2 className="font-serif text-3xl md:text-4xl">
              Discuss {treatment.title.toLowerCase()}
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-stone/80">
              {dentist.medicalDisclaimer}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href="/book" variant="espresso">
              Book consultation
            </Button>
            <Button href="/results" variant="gold-line">
              View results
            </Button>
          </div>
        </Container>
      </section>

      <section className="py-10">
        <Container>
          <Link
            href="/treatments"
            className="text-xs uppercase tracking-[0.18em] text-text-secondary hover:text-espresso"
          >
            ← All treatments
          </Link>
        </Container>
      </section>
    </>
  );
}
