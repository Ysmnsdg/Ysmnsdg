import { dentist } from "@/data/dentist";
import { Button } from "@/components/ui/Button";
import { Container, GoldRule } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function ConsultationCta() {
  return (
    <section className="bg-ivory py-24 md:py-32">
      <Container>
        <Reveal>
          <GoldRule className="mb-10" />
          <h2 className="font-serif text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.95] tracking-[-0.03em] text-text">
            Ready to begin
            <br />
            the conversation?
          </h2>
          <p className="mt-8 max-w-xl text-pretty text-lg leading-relaxed text-text-secondary">
            Every treatment begins with understanding your goals, concerns and
            oral health.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/book" size="lg">
              Book Consultation
            </Button>
            <Button href="/virtual-consultation" variant="secondary" size="lg">
              Virtual Consultation
            </Button>
            <Button
              href={`tel:${dentist.phone.replace(/\s/g, "")}`}
              variant="ghost"
              size="lg"
              className="underline-offset-4 hover:underline"
            >
              Call the Practice
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
