import { principles } from "@/data/faq";
import {
  Container,
  SectionHeading,
  SectionLabel,
} from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function WhyChoose() {
  return (
    <section className="bg-warm-white py-24 md:py-32">
      <Container wide>
        <Reveal>
          <SectionLabel>Principles</SectionLabel>
          <SectionHeading className="max-w-3xl">
            Why patients choose
            <br />
            this practice of care.
          </SectionHeading>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {principles.map((principle, index) => (
            <Reveal key={principle.id} delay={index * 70}>
              <article className="border-t border-stone pt-8">
                <p className="font-serif text-4xl text-gold/70">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 font-serif text-2xl text-text md:text-3xl">
                  {principle.title}
                </h3>
                <p className="mt-4 max-w-md text-pretty leading-relaxed text-text-secondary">
                  {principle.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
