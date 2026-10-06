import Link from "next/link";
import { getFeaturedCases } from "@/data/cases";
import { treatments } from "@/data/treatments";
import { BeforeAfterSlider } from "@/components/cases/BeforeAfterSlider";
import { Button } from "@/components/ui/Button";
import {
  Container,
  SectionHeading,
  SectionLabel,
} from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function SmileTransformations() {
  const featured = getFeaturedCases()[0];
  if (!featured) return null;

  const treatment = treatments.find((t) => t.id === featured.treatmentId);

  return (
    <section className="bg-ivory py-24 md:py-32">
      <Container wide>
        <Reveal>
          <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
            <div>
              <SectionLabel>Results</SectionLabel>
              <SectionHeading>
                Real smiles.
                <br />
                Real transformations.
              </SectionHeading>
            </div>
            <Button href="/results" variant="secondary">
              Explore All Transformations
            </Button>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <BeforeAfterSlider
            before={featured.beforeImage}
            after={featured.afterImage}
            className="shadow-[var(--shadow-soft)]"
          />

          <div className="mt-8 grid gap-6 border-t border-stone pt-8 md:grid-cols-3">
            <div>
              <p className="eyebrow">Treatment</p>
              <p className="mt-2 font-serif text-2xl text-text">
                {treatment?.title ?? "Treatment"}
              </p>
            </div>
            <div>
              <p className="eyebrow">Patient concern</p>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                {featured.patientConcern}
              </p>
            </div>
            <div>
              <p className="eyebrow">Duration</p>
              <p className="mt-2 text-sm text-text-secondary">{featured.duration}</p>
              <p className="mt-4 max-w-sm text-pretty font-serif text-xl leading-snug text-text">
                {featured.title}
              </p>
              <Link
                href={`/results/${featured.slug}`}
                className="link-line mt-6 text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-espresso"
              >
                View Full Case →
              </Link>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
