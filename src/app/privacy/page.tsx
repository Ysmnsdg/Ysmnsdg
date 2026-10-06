import { dentist } from "@/data/dentist";
import {
  Container,
  GoldRule,
  SectionHeading,
  SectionLabel,
} from "@/components/ui/Section";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Privacy",
  description: "Privacy information for this dental practice website.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <section className="bg-warm-white pt-28 pb-24 md:pt-36">
      <Container className="max-w-3xl">
        <SectionLabel>Legal</SectionLabel>
        <SectionHeading as="h1">Privacy</SectionHeading>
        <GoldRule className="mt-8" />
        <div className="mt-10 space-y-6 text-text-secondary leading-relaxed">
          <p>
            This website is a personal brand system for private dentistry.
            Replace this page with practice-specific privacy policy language
            before launch.
          </p>
          <p>
            Virtual consultation photo uploads in this demo are handled in-memory
            only for preview and are not persisted to browser storage or a server.
            Production deployments must implement consent, secure storage,
            retention, and deletion controls for sensitive medical images.
          </p>
          <p>{dentist.privacyNotes.photoUpload}</p>
          <p>{dentist.medicalDisclaimer}</p>
        </div>
      </Container>
    </section>
  );
}
