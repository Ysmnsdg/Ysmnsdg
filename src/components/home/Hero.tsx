import Image from "next/image";
import { dentist, fullName } from "@/data/dentist";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Section";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ivory pt-[var(--header-height)]">
      <Container wide className="grid min-h-[calc(100svh-var(--header-height))] items-end gap-10 py-12 lg:grid-cols-12 lg:gap-8 lg:py-0">
        <div className="flex flex-col justify-center py-8 lg:col-span-6 lg:py-24">
          <p className="eyebrow animate-fade-up text-taupe">Private Dentistry</p>
          <p className="mt-3 animate-fade-up delay-1 text-[0.7rem] uppercase tracking-[0.22em] text-text-secondary">
            {dentist.specialtiesLabel}
          </p>

          <h1 className="mt-8 animate-fade-up delay-2 font-serif text-[clamp(3.5rem,11vw,6.75rem)] leading-[0.92] tracking-[-0.03em] text-text">
            {dentist.heroHeadline.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>

          <div className="mt-8 max-w-md animate-fade-up delay-3 space-y-1 text-base leading-relaxed text-text-secondary md:text-lg">
            {dentist.heroSupport.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4 animate-fade-up delay-4">
            <Button href="/book" size="lg">
              Book a Consultation
            </Button>
            <Button href="/treatments" variant="secondary" size="lg">
              Explore Treatments
            </Button>
          </div>

          <p className="mt-8 animate-fade-in delay-4 text-sm text-taupe">
            {dentist.heroMicrocopy}
          </p>
        </div>

        <div className="relative lg:col-span-6 lg:min-h-[calc(100svh-var(--header-height))]">
          <div className="relative aspect-[4/5] w-full overflow-hidden lg:absolute lg:inset-y-0 lg:right-0 lg:aspect-auto lg:h-full lg:w-[min(100%,38rem)]">
            <Image
              src={dentist.portrait.src}
              alt={dentist.portrait.alt}
              fill
              priority
              unoptimized
              className="object-cover animate-mask"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-espresso/50 to-transparent p-6 md:p-8">
              <p className="font-serif text-2xl text-warm-white md:text-3xl">{fullName}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-warm-white/70">
                {dentist.specialty}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
