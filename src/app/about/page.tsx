import Image from "next/image";
import { dentist, fullName, shortName } from "@/data/dentist";
import type { CredentialItem } from "@/data/types";
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
  title: "About",
  description: `Meet ${fullName} — philosophy, approach, and credentials in private aesthetic and restorative dentistry.`,
  path: "/about",
});

function CredentialSection({
  label,
  items,
}: {
  label: string;
  items: CredentialItem[];
}) {
  if (!items.length) return null;
  return (
    <Reveal>
      <div className="border-t border-stone pt-10">
        <SectionLabel>{label}</SectionLabel>
        <ul className="mt-2 space-y-6">
          {items.map((item) => (
            <li key={`${item.title}-${item.year ?? ""}-${item.detail ?? ""}`}>
              <p className="font-serif text-xl text-espresso md:text-2xl">
                {item.title}
              </p>
              {(item.detail || item.year) && (
                <p className="mt-2 text-sm text-text-secondary">
                  {[item.detail, item.year].filter(Boolean).join(" · ")}
                </p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}

export default function AboutPage() {
  return (
    <>
      <section className="bg-ivory pt-28 pb-20 md:pt-36 md:pb-28">
        <Container>
          <Reveal>
            <SectionLabel>About</SectionLabel>
            <SectionHeading as="h1">
              Meet {shortName}
            </SectionHeading>
            <GoldRule className="mt-8" />
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-text-secondary text-pretty">
              {dentist.specialty}. {dentist.tagline}
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-5">
              <div className="relative aspect-[4/5] overflow-hidden bg-stone/40">
                <Image
                  src={dentist.portrait.src}
                  alt={dentist.portrait.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  unoptimized
                  priority
                />
              </div>
              <p className="mt-4 text-sm text-text-secondary">
                {fullName}
                {dentist.qualifications ? ` · ${dentist.qualifications}` : ""}
              </p>
            </Reveal>

            <div className="space-y-8 lg:col-span-7">
              {dentist.biography.map((paragraph, i) => (
                <Reveal key={i} delay={i * 80}>
                  <p className="text-[1.05rem] leading-relaxed text-text-secondary text-pretty">
                    {paragraph}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-espresso py-20 text-warm-white md:py-28">
        <Container>
          <Reveal>
            <SectionLabel light>Philosophy</SectionLabel>
            <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] text-balance">
              {dentist.philosophyStatement.headline.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
            <GoldRule className="mt-8 bg-gold" />
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-stone/90 text-pretty md:text-lg">
              {dentist.philosophyStatement.body}
            </p>
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-taupe text-pretty">
              {dentist.philosophyLong}
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <Reveal>
            <SectionLabel>Credentials</SectionLabel>
            <SectionHeading as="h2" className="text-[clamp(2rem,4vw,3.25rem)]">
              Education &amp; training
            </SectionHeading>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-text-secondary">
              Only verified entries from the practice profile are shown. Empty
              credential groups are omitted.
            </p>
          </Reveal>

          <div className="mt-14 space-y-12">
            <CredentialSection label="Education" items={dentist.education} />
            <CredentialSection
              label="Certifications"
              items={dentist.certifications}
            />
            <CredentialSection
              label="Associations"
              items={dentist.associations}
            />
            <CredentialSection
              label="Advanced training"
              items={dentist.advancedTraining}
            />
            <CredentialSection label="Awards" items={dentist.awards} />
            <CredentialSection
              label="Publications"
              items={dentist.publications}
            />
          </div>

          {!dentist.education.length &&
            !dentist.certifications.length &&
            !dentist.associations.length &&
            !dentist.advancedTraining.length &&
            !dentist.awards.length &&
            !dentist.publications.length && (
              <div className="mt-12 border border-stone bg-ivory px-8 py-14 text-center">
                <p className="font-serif text-2xl text-espresso">
                  Credentials forthcoming
                </p>
                <p className="mx-auto mt-3 max-w-md text-sm text-text-secondary">
                  Professional details will appear here once configured in the
                  practice profile.
                </p>
              </div>
            )}
        </Container>
      </section>

      <section className="border-t border-stone bg-ivory py-20 md:py-24">
        <Container className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <SectionLabel>Next step</SectionLabel>
            <h2 className="font-serif text-3xl text-espresso md:text-4xl">
              Begin with a conversation
            </h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href="/book">Book consultation</Button>
            <Button href="/experience" variant="secondary">
              The experience
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
