import { shortName } from "@/data/dentist";
import { Button } from "@/components/ui/Button";
import {
  Container,
  GoldRule,
  SectionHeading,
  SectionLabel,
} from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function Comfort() {
  return (
    <section className="bg-ivory py-24 md:py-32">
      <Container className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <SectionLabel>Comfort</SectionLabel>
          <SectionHeading>
            Dentistry should
            <br />
            feel different.
          </SectionHeading>
          <GoldRule className="mt-8" />
        </Reveal>

        <Reveal delay={100}>
          <div className="space-y-6 text-pretty text-lg leading-relaxed text-text-secondary">
            <p>
              Many people postpone care because of fear, past experiences, or
              uncertainty. {shortName} approaches anxious patients with patience,
              clear communication, and control that stays with you.
            </p>
            <p>
              Before treatment, we explain what will happen and why. During care,
              you may pause at any time. Comfort strategies and pacing are
              discussed openly — without medical promises we cannot keep.
            </p>
            <p>
              The environment is quiet and unhurried. The goal is simple: you
              should feel informed, respected, and safe enough to begin.
            </p>
          </div>
          <div className="mt-10">
            <Button href="/experience">Explore the Experience</Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
