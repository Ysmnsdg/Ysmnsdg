import { dentist } from "@/data/dentist";
import {
  Container,
  GoldRule,
  SectionHeading,
  SectionLabel,
} from "@/components/ui/Section";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Terms",
  description: "Terms of use for this dental practice website.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <section className="bg-warm-white pt-28 pb-24 md:pt-36">
      <Container className="max-w-3xl">
        <SectionLabel>Legal</SectionLabel>
        <SectionHeading as="h1">Terms of Use</SectionHeading>
        <GoldRule className="mt-8" />
        <div className="mt-10 space-y-6 text-text-secondary leading-relaxed">
          <p>
            Content on this website is for general education and practice
            information. It does not create a dentist–patient relationship and
            does not replace professional clinical advice.
          </p>
          <p>{dentist.medicalDisclaimer}</p>
          <p>
            Booking and virtual consultation forms in this demo are mock
            workflows. Confirmed appointments require practice acknowledgement.
          </p>
        </div>
      </Container>
    </section>
  );
}
