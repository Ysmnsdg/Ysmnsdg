import Link from "next/link";
import { notFound } from "next/navigation";
import { cases, getCaseBySlug } from "@/data/cases";
import { getTreatmentBySlug } from "@/data/treatments";
import { dentist } from "@/data/dentist";
import { BeforeAfterSlider } from "@/components/cases/BeforeAfterSlider";
import { Button } from "@/components/ui/Button";
import {
  Container,
  GoldRule,
  SectionHeading,
  SectionLabel,
} from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { breadcrumbJsonLd, createMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caseStudy = getCaseBySlug(slug);
  if (!caseStudy) return {};
  return createMetadata({
    title: caseStudy.seo.title,
    description: caseStudy.seo.description,
    path: `/cases/${caseStudy.slug}`,
  });
}

function displayPatient(
  consentStatus: (typeof cases)[number]["consentStatus"],
  identifier: string,
) {
  if (consentStatus === "consented-named") return identifier;
  if (consentStatus === "pending") return "Patient case (consent pending)";
  return identifier;
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caseStudy = getCaseBySlug(slug);
  if (!caseStudy) {
    notFound();
  }

  const study = caseStudy!;

  const treatment = study.relatedTreatmentSlug
    ? getTreatmentBySlug(study.relatedTreatmentSlug)
    : undefined;

  const patient = displayPatient(
    study.consentStatus,
    study.patientIdentifier,
  );

  const jsonLd = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Results", path: "/results" },
    { name: study.title, path: `/cases/${study.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="bg-ivory pt-28 pb-16 md:pt-36 md:pb-20">
        <Container>
          <Reveal>
            <SectionLabel>Case study</SectionLabel>
            <SectionHeading as="h1">{study.title}</SectionHeading>
            <GoldRule className="mt-8" />
            <p className="mt-6 text-sm text-text-secondary">
              {patient}
              {treatment ? ` · ${treatment.title}` : ""}
              {study.consentStatus === "consented-anonymized"
                ? " · Anonymized with consent"
                : study.consentStatus === "pending"
                  ? " · Pending consent review"
                  : " · Shared with consent"}
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-12 md:py-16">
        <Container>
          <Reveal>
            <BeforeAfterSlider
              before={study.beforeImage}
              after={study.afterImage}
            />
          </Reveal>
        </Container>
      </section>

      <section className="pb-20 md:pb-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="space-y-12 lg:col-span-7">
              <CaseBlock label="Patient concern" body={study.patientConcern} />
              <CaseBlock
                label="Initial condition"
                body={study.initialCondition}
              />
              <CaseBlock
                label="Clinical assessment"
                body={study.clinicalAssessment}
              />

              <Reveal>
                <SectionLabel>Options considered</SectionLabel>
                <ul className="mt-5 space-y-3">
                  {study.optionsConsidered.map((option) => (
                    <li
                      key={option}
                      className="border-b border-stone pb-3 text-[0.975rem] text-text-secondary"
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <CaseBlock
                label="Chosen treatment"
                body={study.chosenTreatment}
              />

              <Reveal>
                <SectionLabel>Process</SectionLabel>
                <ol className="mt-5 space-y-4">
                  {study.process.map((step, i) => (
                    <li key={step} className="flex gap-4">
                      <span className="eyebrow shrink-0 text-gold">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[0.975rem] text-text-secondary">
                        {step}
                      </span>
                    </li>
                  ))}
                </ol>
              </Reveal>
            </div>

            <aside className="space-y-10 lg:col-span-5">
              <Reveal>
                <div className="border border-stone bg-ivory px-6 py-8">
                  <SectionLabel>Timeline</SectionLabel>
                  <p className="mt-3 font-serif text-2xl text-espresso">
                    {study.timeline}
                  </p>
                  <p className="mt-3 text-sm text-text-secondary">
                    Duration: {study.duration}
                  </p>
                </div>
              </Reveal>

              <CaseBlock label="Outcome" body={study.outcome} />

              <Reveal>
                <blockquote className="border-l border-gold pl-6">
                  <SectionLabel>Dentist commentary</SectionLabel>
                  <p className="mt-4 font-serif text-xl leading-snug text-espresso text-pretty">
                    “{study.dentistCommentary}”
                  </p>
                </blockquote>
              </Reveal>

              {study.patientTestimonial &&
                study.consentStatus !== "pending" && (
                  <Reveal>
                    <blockquote className="bg-espresso px-6 py-8 text-warm-white">
                      <p className="font-serif text-xl leading-snug text-pretty">
                        “{study.patientTestimonial}”
                      </p>
                      <footer className="mt-5 text-xs uppercase tracking-[0.16em] text-taupe">
                        — {patient}
                      </footer>
                    </blockquote>
                  </Reveal>
                )}

              {treatment && (
                <Reveal>
                  <div className="border-t border-stone pt-8">
                    <SectionLabel>Related treatment</SectionLabel>
                    <Link
                      href={`/treatments/${treatment.slug}`}
                      className="mt-3 block font-serif text-2xl text-espresso hover:underline"
                    >
                      {treatment.title}
                    </Link>
                    <p className="mt-3 text-sm text-text-secondary">
                      {treatment.shortDescription}
                    </p>
                  </div>
                </Reveal>
              )}
            </aside>
          </div>

          <p className="mt-16 max-w-3xl text-xs leading-relaxed text-taupe">
            {dentist.medicalDisclaimer} Case details are educational and
            anonymized according to consent status. Results vary.
          </p>

          <div className="mt-10 flex flex-col gap-3 border-t border-stone pt-10 sm:flex-row">
            <Button href="/book">Discuss a similar concern</Button>
            <Button href="/results" variant="secondary">
              All results
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}

function CaseBlock({ label, body }: { label: string; body: string }) {
  return (
    <Reveal>
      <SectionLabel>{label}</SectionLabel>
      <p className="mt-4 text-[1.05rem] leading-relaxed text-text-secondary text-pretty">
        {body}
      </p>
    </Reveal>
  );
}
