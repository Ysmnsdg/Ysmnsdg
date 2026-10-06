import { journeySteps, principles } from "@/data/faq";
import { getFeaturedTestimonials } from "@/data/testimonials";
import { shortName } from "@/data/dentist";
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
  title: "Experience",
  description:
    "A calm patient journey — from consultation through follow-up — with comfort, clarity, and unhurried care.",
  path: "/experience",
});

export default function ExperiencePage() {
  const testimonials = getFeaturedTestimonials();

  return (
    <>
      <section className="bg-ivory pt-28 pb-16 md:pt-36 md:pb-20">
        <Container>
          <Reveal>
            <SectionLabel>Patient journey</SectionLabel>
            <SectionHeading as="h1">The experience</SectionHeading>
            <GoldRule className="mt-8" />
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-text-secondary text-pretty">
              Dentistry that feels considered — paced to you, explained clearly,
              and designed for lasting comfort.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <ol className="space-y-0">
            {journeySteps.map((step, index) => (
              <li key={step.id}>
                <Reveal delay={index * 40}>
                  <article className="grid gap-6 border-t border-stone py-12 md:grid-cols-12 md:gap-10 md:py-16">
                    <div className="md:col-span-2">
                      <p className="eyebrow text-gold">{step.number}</p>
                    </div>
                    <div className="md:col-span-4">
                      <h2 className="font-serif text-3xl text-espresso">
                        {step.title}
                      </h2>
                      <p className="mt-4 text-[0.975rem] leading-relaxed text-text-secondary">
                        {step.description}
                      </p>
                    </div>
                    <ul className="space-y-3 md:col-span-6">
                      {step.details.map((detail) => (
                        <li
                          key={detail}
                          className="flex gap-3 text-sm leading-relaxed text-text-secondary"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-espresso py-20 text-warm-white md:py-28">
        <Container>
          <Reveal>
            <SectionLabel light>Comfort &amp; anxiety</SectionLabel>
            <h2 className="font-serif text-[clamp(2rem,4vw,3.25rem)] leading-[1.05] text-balance">
              You remain in control
            </h2>
            <GoldRule className="mt-8" />
            <div className="mt-10 grid gap-10 md:grid-cols-3">
              {[
                {
                  title: "Clear explanations",
                  body: "Every step is outlined before it begins — no surprises, no jargon without translation.",
                },
                {
                  title: "Pause signals",
                  body: "Agree a simple signal to stop. We pause, regroup, and continue only when you are ready.",
                },
                {
                  title: "Unhurried pacing",
                  body: "Appointments are scheduled to allow space for questions, rest, and careful technique.",
                },
              ].map((item) => (
                <div key={item.title}>
                  <h3 className="font-serif text-xl text-warm-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-stone/80">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <Reveal>
            <SectionLabel>Why choose {shortName}</SectionLabel>
            <SectionHeading
              as="h2"
              className="text-[clamp(2rem,4vw,3.25rem)]"
            >
              Principles of care
            </SectionHeading>
          </Reveal>
          <ul className="mt-14 grid gap-10 md:grid-cols-2">
            {principles.map((principle, i) => (
              <li key={principle.id}>
                <Reveal delay={i * 60}>
                  <p className="eyebrow text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 font-serif text-2xl text-espresso">
                    {principle.title}
                  </h3>
                  <p className="mt-4 text-[0.975rem] leading-relaxed text-text-secondary text-pretty">
                    {principle.description}
                  </p>
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {testimonials.length > 0 && (
        <section className="border-t border-stone bg-ivory py-20 md:py-28">
          <Container>
            <SectionLabel>In their words</SectionLabel>
            <ul className="mt-10 grid gap-8 md:grid-cols-3">
              {testimonials.map((t) => (
                <li key={t.id} className="border border-stone bg-warm-white p-6">
                  <blockquote className="font-serif text-lg leading-snug text-espresso text-pretty">
                    “{t.quote}”
                  </blockquote>
                  <footer className="mt-6 text-xs uppercase tracking-[0.16em] text-taupe">
                    {t.patientIdentifier} · {t.treatmentTitle}
                  </footer>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}

      <section className="py-16 md:py-20">
        <Container className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <h2 className="font-serif text-3xl text-espresso">
            Ready when you are
          </h2>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href="/book">Book consultation</Button>
            <Button href="/virtual-consultation" variant="secondary">
              Virtual consult
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
