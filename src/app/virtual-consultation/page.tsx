import { dentist } from "@/data/dentist";
import { VirtualConsultFlow } from "@/components/consultation/VirtualConsultFlow";
import {
  Container,
  GoldRule,
  SectionHeading,
  SectionLabel,
} from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Virtual Consultation",
  description:
    "Begin with a secure virtual consultation request — educational guidance only, not a diagnosis.",
  path: "/virtual-consultation",
});

export default function VirtualConsultationPage() {
  return (
    <>
      <section className="bg-ivory pt-28 pb-12 md:pt-36 md:pb-16">
        <Container>
          <Reveal>
            <SectionLabel>Remote</SectionLabel>
            <SectionHeading as="h1">Virtual consultation</SectionHeading>
            <GoldRule className="mt-8" />
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-text-secondary text-pretty">
              Share your concern, optional photos, and goals. We will follow up
              to advise on next steps — always subject to an in-person
              examination.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="pb-24 md:pb-32">
        <Container>
          <VirtualConsultFlow />
          <p className="mx-auto mt-12 max-w-2xl text-center text-xs leading-relaxed text-taupe">
            {dentist.medicalDisclaimer}
          </p>
        </Container>
      </section>
    </>
  );
}
