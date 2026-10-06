import { dentist, fullName } from "@/data/dentist";
import { Container, GoldRule } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function Philosophy() {
  return (
    <section className="surface-espresso py-28 md:py-36">
      <Container>
        <Reveal>
          <GoldRule className="mb-10 bg-gold/70" />
          <h2 className="font-serif text-[clamp(2.75rem,8vw,6.5rem)] leading-[0.95] tracking-[-0.03em] text-warm-white">
            {dentist.philosophyStatement.headline.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
          <p className="mt-10 max-w-2xl text-pretty text-lg leading-relaxed text-stone md:text-xl">
            {dentist.philosophyStatement.body}
          </p>
          <p className="mt-16 font-serif text-2xl italic text-gold/80">
            — {fullName}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
