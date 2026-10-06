import { getEnabledTechnologies } from "@/data/technologies";
import {
  Container,
  SectionHeading,
  SectionLabel,
} from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export function Technology() {
  const items = getEnabledTechnologies();
  if (!items.length) return null;

  return (
    <section className="bg-warm-white py-24 md:py-32">
      <Container wide>
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionLabel>Technology</SectionLabel>
            <SectionHeading>
              Precision through
              <br />
              modern technology.
            </SectionHeading>
          </div>
          <Button href="/technology" variant="secondary">
            Explore Technology
          </Button>
        </div>

        <div className="grid gap-px bg-stone md:grid-cols-2 lg:grid-cols-3">
          {items.map((tech, index) => (
            <Reveal key={tech.id} delay={index * 60}>
              <article className="h-full bg-warm-white p-8 md:p-10">
                <p className="eyebrow text-gold">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-5 font-serif text-2xl text-text md:text-3xl">
                  {tech.title}
                </h3>
                <p className="mt-4 text-pretty leading-relaxed text-text-secondary">
                  {tech.patientBenefit}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
