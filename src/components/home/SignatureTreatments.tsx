import Image from "next/image";
import Link from "next/link";
import { getFeaturedTreatments } from "@/data/treatments";
import {
  Container,
  SectionHeading,
  SectionLabel,
} from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

export function SignatureTreatments() {
  const items = getFeaturedTreatments();

  return (
    <section className="bg-ivory py-24 md:py-32">
      <Container wide>
        <Reveal>
          <SectionLabel>Signature Treatments</SectionLabel>
          <SectionHeading className="max-w-3xl">
            Care shaped around
            <br />
            what you need.
          </SectionHeading>
        </Reveal>

        <div className="mt-16 space-y-16 md:mt-24 md:space-y-28">
          {items.map((treatment, index) => {
            const reverse = index % 2 === 1;
            return (
              <Reveal key={treatment.id} delay={index * 40}>
                <article
                  className={cn(
                    "grid items-center gap-8 lg:grid-cols-12 lg:gap-12",
                  )}
                >
                  <div
                    className={cn(
                      "relative aspect-[16/11] overflow-hidden bg-stone lg:col-span-7",
                      reverse && "lg:order-2",
                    )}
                  >
                    <Image
                      src={treatment.image.src}
                      alt={treatment.image.alt}
                      fill
                      unoptimized
                      className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                      sizes="(max-width: 1024px) 100vw, 58vw"
                    />
                  </div>

                  <div
                    className={cn(
                      "lg:col-span-5",
                      reverse ? "lg:order-1 lg:pr-6" : "lg:pl-6",
                    )}
                  >
                    <p className="font-serif text-5xl text-gold/80">{treatment.number}</p>
                    <h3 className="mt-4 font-serif text-3xl text-text md:text-4xl">
                      {treatment.title}
                    </h3>
                    <p className="mt-5 max-w-md text-pretty leading-relaxed text-text-secondary">
                      {treatment.shortDescription}
                    </p>
                    <Link
                      href={`/treatments/${treatment.slug}`}
                      className="link-line mt-8 text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-espresso"
                    >
                      Explore
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
