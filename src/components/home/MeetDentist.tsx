import Image from "next/image";
import { dentist, fullName, shortName } from "@/data/dentist";
import { Button } from "@/components/ui/Button";
import {
  Container,
  GoldRule,
  SectionHeading,
  SectionLabel,
} from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function MeetDentist() {
  return (
    <section className="bg-warm-white py-24 md:py-32">
      <Container wide className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div className="relative aspect-[4/5] overflow-hidden bg-stone">
            <Image
              src={dentist.portrait.src}
              alt={dentist.portrait.alt}
              fill
              unoptimized
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>
        </Reveal>

        <Reveal delay={120}>
          <SectionLabel>The Doctor</SectionLabel>
          <SectionHeading>
            A thoughtful approach
            <br />
            to modern dentistry.
          </SectionHeading>
          <GoldRule className="mt-8" />

          <div className="mt-8 space-y-1">
            <p className="font-serif text-2xl text-text">{fullName}</p>
            <p className="text-sm text-text-secondary">{dentist.qualifications}</p>
            <p className="text-xs uppercase tracking-[0.16em] text-taupe">
              {dentist.specialty}
            </p>
          </div>

          <p className="mt-8 max-w-xl text-pretty text-lg leading-relaxed text-text-secondary">
            {dentist.philosophyShort}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/about">Meet {shortName}</Button>
            <Button href="/about#credentials" variant="secondary">
              View Credentials
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
