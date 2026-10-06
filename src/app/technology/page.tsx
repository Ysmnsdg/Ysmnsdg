import { getEnabledTechnologies } from "@/data/technologies";
import { dentist } from "@/data/dentist";
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
  title: "Technology",
  description:
    "Digital tools that support clearer diagnosis, precise planning, and a more comfortable patient experience.",
  path: "/technology",
});

export default function TechnologyPage() {
  const tech = getEnabledTechnologies();

  return (
    <>
      <section className="bg-ivory pt-28 pb-16 md:pt-36 md:pb-20">
        <Container>
          <Reveal>
            <SectionLabel>Precision</SectionLabel>
            <SectionHeading as="h1">Technology</SectionHeading>
            <GoldRule className="mt-8" />
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-text-secondary text-pretty">
              Tools that inform judgment — never replace it. Only technologies
              actually offered by the practice are listed.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="pb-24 md:pb-32">
        <Container>
          {tech.length === 0 ? (
            <div className="border border-stone bg-ivory px-8 py-16 text-center">
              <p className="font-serif text-2xl text-espresso">
                Technology details forthcoming
              </p>
              <p className="mx-auto mt-3 max-w-md text-sm text-text-secondary">
                Enabled clinical technologies will appear here once configured
                for the practice.
              </p>
            </div>
          ) : (
            <ul className="divide-y divide-stone border-y border-stone">
              {tech.map((item, index) => (
                <li key={item.id}>
                  <Reveal delay={index * 50}>
                    <article className="grid gap-6 py-12 md:grid-cols-12 md:gap-10 md:py-16">
                      <div className="md:col-span-1">
                        <p className="eyebrow text-gold">
                          {String(index + 1).padStart(2, "0")}
                        </p>
                      </div>
                      <div className="md:col-span-4">
                        <h2 className="font-serif text-3xl text-espresso">
                          {item.title}
                        </h2>
                        <p className="mt-4 text-sm leading-relaxed text-text">
                          <span className="eyebrow mr-2 text-taupe">
                            Patient benefit
                          </span>
                          {item.patientBenefit}
                        </p>
                      </div>
                      <div className="md:col-span-7">
                        <p className="text-[1.05rem] leading-relaxed text-text-secondary text-pretty">
                          {item.description}
                        </p>
                      </div>
                    </article>
                  </Reveal>
                </li>
              ))}
            </ul>
          )}

          <p className="mt-12 max-w-2xl text-xs leading-relaxed text-taupe">
            {dentist.medicalDisclaimer} Not every technology is used in every
            case — we recommend tools only when they improve care.
          </p>

          <div className="mt-10">
            <Button href="/book">Ask about your case</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
