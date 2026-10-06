import Image from "next/image";
import Link from "next/link";
import { cases } from "@/data/cases";
import { getTreatmentBySlug } from "@/data/treatments";
import { dentist } from "@/data/dentist";
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
  title: "Results",
  description:
    "Anonymized clinical transformations — before and after previews from carefully documented cases.",
  path: "/results",
});

function patientLabel(consentStatus: (typeof cases)[number]["consentStatus"], identifier: string) {
  if (consentStatus === "consented-named") return identifier;
  return identifier.startsWith("Patient") ? identifier : "Anonymous patient";
}

export default function ResultsPage() {
  return (
    <>
      <section className="bg-ivory pt-28 pb-16 md:pt-36 md:pb-20">
        <Container>
          <Reveal>
            <SectionLabel>Portfolio</SectionLabel>
            <SectionHeading as="h1">Results</SectionHeading>
            <GoldRule className="mt-8" />
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-text-secondary text-pretty">
              Quiet transformations. Each case is shared with consent and
              anonymized where required.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="pb-24 md:pb-32">
        <Container wide>
          {cases.length === 0 ? (
            <div className="border border-stone bg-ivory px-8 py-16 text-center">
              <p className="font-serif text-2xl text-espresso">
                Cases forthcoming
              </p>
              <p className="mx-auto mt-3 max-w-md text-sm text-text-secondary">
                Documented transformations will appear here once consented case
                studies are configured.
              </p>
            </div>
          ) : (
            <ul className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
              {cases.map((caseStudy, index) => {
                const treatment = getTreatmentBySlug(
                  caseStudy.relatedTreatmentSlug ?? "",
                );
                return (
                  <li key={caseStudy.id}>
                    <Reveal delay={index * 60}>
                      <Link
                        href={`/cases/${caseStudy.slug}`}
                        className="group block"
                      >
                        <div className="relative grid grid-cols-2 gap-px overflow-hidden bg-stone">
                          <div className="relative aspect-[3/4] bg-stone/40">
                            <Image
                              src={caseStudy.beforeImage.src}
                              alt={caseStudy.beforeImage.alt}
                              fill
                              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                              sizes="(max-width: 768px) 50vw, 20vw"
                              unoptimized
                            />
                            <span className="absolute bottom-3 left-3 bg-espresso/75 px-2 py-1 text-[0.6rem] uppercase tracking-[0.16em] text-warm-white">
                              Before
                            </span>
                          </div>
                          <div className="relative aspect-[3/4] bg-stone/40">
                            <Image
                              src={caseStudy.afterImage.src}
                              alt={caseStudy.afterImage.alt}
                              fill
                              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                              sizes="(max-width: 768px) 50vw, 20vw"
                              unoptimized
                            />
                            <span className="absolute bottom-3 left-3 bg-espresso/75 px-2 py-1 text-[0.6rem] uppercase tracking-[0.16em] text-warm-white">
                              After
                            </span>
                          </div>
                        </div>
                        <div className="mt-5">
                          <p className="eyebrow text-taupe">
                            {treatment?.title ?? "Case study"} ·{" "}
                            {patientLabel(
                              caseStudy.consentStatus,
                              caseStudy.patientIdentifier,
                            )}
                          </p>
                          <h2 className="mt-2 font-serif text-2xl text-espresso transition-colors group-hover:text-text">
                            {caseStudy.title}
                          </h2>
                          <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-text-secondary">
                            {caseStudy.outcome}
                          </p>
                        </div>
                      </Link>
                    </Reveal>
                  </li>
                );
              })}
            </ul>
          )}

          <p className="mt-16 max-w-2xl text-xs leading-relaxed text-taupe">
            {dentist.medicalDisclaimer} Individual results vary. Images are
            illustrative placeholders until clinical photography is configured.
          </p>

          <div className="mt-10">
            <Button href="/book">Discuss a similar concern</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
