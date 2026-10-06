import { dentist } from "@/data/dentist";
import { BookingFlow } from "@/components/booking/BookingFlow";
import {
  Container,
  GoldRule,
  SectionHeading,
  SectionLabel,
} from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Book Consultation",
  description:
    "Request a private consultation — choose a reason, preferred time, and share your details.",
  path: "/book",
});

export default function BookPage() {
  return (
    <>
      <section className="bg-ivory pt-28 pb-12 md:pt-36 md:pb-16">
        <Container>
          <Reveal>
            <SectionLabel>Appointments</SectionLabel>
            <SectionHeading as="h1">Book a consultation</SectionHeading>
            <GoldRule className="mt-8" />
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-text-secondary text-pretty">
              Tell us what brings you in. We will confirm a time that suits you.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="pb-24 md:pb-32">
        <Container>
          <BookingFlow />
          <p className="mx-auto mt-12 max-w-2xl text-center text-xs leading-relaxed text-taupe">
            {dentist.medicalDisclaimer} This booking flow is a demonstration and
            does not create a live appointment until connected to practice
            systems.
          </p>
        </Container>
      </section>
    </>
  );
}
