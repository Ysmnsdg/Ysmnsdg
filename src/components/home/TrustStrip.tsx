import { getTrustSignals } from "@/data/dentist";
import { Container } from "@/components/ui/Section";

export function TrustStrip() {
  const signals = getTrustSignals();
  if (!signals.length) return null;

  return (
    <section className="border-y border-stone bg-warm-white" aria-label="Trust signals">
      <Container wide className="flex flex-wrap items-stretch justify-between gap-6 py-8 md:py-10">
        {signals.map((signal, index) => (
          <div
            key={signal.id}
            className="min-w-[8rem] flex-1 px-2 text-center md:text-left"
          >
            {index > 0 && (
              <span className="sr-only">·</span>
            )}
            <p className="font-serif text-3xl text-text md:text-4xl">{signal.value}</p>
            <p className="mt-2 text-[0.65rem] uppercase tracking-[0.18em] text-taupe">
              {signal.label}
            </p>
          </div>
        ))}
      </Container>
    </section>
  );
}
