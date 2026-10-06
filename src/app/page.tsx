import { Hero } from "@/components/home/Hero";
import { TrustStrip } from "@/components/home/TrustStrip";
import { MeetDentist } from "@/components/home/MeetDentist";
import { TreatmentDiscovery } from "@/components/home/TreatmentDiscovery";
import { SignatureTreatments } from "@/components/home/SignatureTreatments";
import { SmileTransformations } from "@/components/home/SmileTransformations";
import { CaseStudiesPreview } from "@/components/home/CaseStudiesPreview";
import { PatientExperience } from "@/components/home/PatientExperience";
import { Technology } from "@/components/home/Technology";
import { Comfort } from "@/components/home/Comfort";
import { Philosophy } from "@/components/home/Philosophy";
import { PatientStories } from "@/components/home/PatientStories";
import { WhyChoose } from "@/components/home/WhyChoose";
import { JournalPreview } from "@/components/home/JournalPreview";
import { ConsultationCta } from "@/components/home/ConsultationCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <MeetDentist />
      <TreatmentDiscovery />
      <SignatureTreatments />
      <SmileTransformations />
      <CaseStudiesPreview />
      <PatientExperience />
      <Technology />
      <Comfort />
      <Philosophy />
      <PatientStories />
      <WhyChoose />
      <JournalPreview />
      <ConsultationCta />
    </>
  );
}
