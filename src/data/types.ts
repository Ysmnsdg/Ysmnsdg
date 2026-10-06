export type SocialPlatform =
  | "instagram"
  | "linkedin"
  | "facebook"
  | "youtube"
  | "x";

export interface SocialLink {
  platform: SocialPlatform;
  url: string;
  label: string;
}

export interface OfficeHours {
  day: string;
  hours: string;
  closed?: boolean;
}

export interface CredentialItem {
  title: string;
  detail?: string;
  year?: string;
}

export interface TrustSignal {
  id: string;
  label: string;
  value: string;
  /** Hide when false or when value is empty */
  enabled?: boolean;
}

export interface DentistProfile {
  firstName: string;
  lastName: string;
  titlePrefix: string;
  qualifications: string;
  specialty: string;
  specialtiesLabel: string;
  practiceName: string;
  monogram: string;
  tagline: string;
  heroHeadline: string[];
  heroSupport: string[];
  heroMicrocopy: string;
  philosophyShort: string;
  philosophyLong: string;
  philosophyStatement: {
    headline: string[];
    body: string;
  };
  biography: string[];
  portrait: {
    src: string;
    alt: string;
  };
  signatureSrc?: string;
  experienceYears?: number;
  patientsTreatedLabel?: string;
  googleRating?: {
    score: number;
    reviewCount: number;
  };
  membershipHighlight?: string;
  education: CredentialItem[];
  certifications: CredentialItem[];
  associations: CredentialItem[];
  advancedTraining: CredentialItem[];
  awards: CredentialItem[];
  publications: CredentialItem[];
  phone: string;
  email: string;
  address: {
    line1: string;
    line2?: string;
    city: string;
    region: string;
    postalCode: string;
    country: string;
  };
  mapsUrl?: string;
  parkingInfo?: string;
  transitInfo?: string;
  accessibilityInfo?: string;
  officeHours: OfficeHours[];
  socialLinks: SocialLink[];
  bookingUrl?: string;
  siteUrl: string;
  locale: string;
  medicalDisclaimer: string;
  privacyNotes: {
    virtualConsult: string;
    photoUpload: string;
  };
}

export interface Treatment {
  id: string;
  slug: string;
  number: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  benefits: string[];
  idealFor: string[];
  duration?: string;
  image: {
    src: string;
    alt: string;
  };
  featured?: boolean;
  relatedConcernIds?: string[];
  seo: {
    title: string;
    description: string;
  };
}

export interface Concern {
  id: string;
  label: string;
  description: string;
  treatmentIds: string[];
}

export interface Technology {
  id: string;
  title: string;
  patientBenefit: string;
  description: string;
  image?: {
    src: string;
    alt: string;
  };
  enabled: boolean;
}

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  treatmentId: string;
  patientConcern: string;
  initialCondition: string;
  clinicalAssessment: string;
  optionsConsidered: string[];
  chosenTreatment: string;
  process: string[];
  timeline: string;
  duration: string;
  outcome: string;
  dentistCommentary: string;
  patientTestimonial?: string;
  patientIdentifier: string;
  consentStatus: "consented-anonymized" | "consented-named" | "pending";
  beforeImage: { src: string; alt: string };
  afterImage: { src: string; alt: string };
  featured?: boolean;
  relatedTreatmentSlug?: string;
  seo: {
    title: string;
    description: string;
  };
}

export interface Testimonial {
  id: string;
  quote: string;
  patientIdentifier: string;
  treatmentTitle: string;
  verifiedGoogle?: boolean;
  rating?: number;
  featured?: boolean;
  videoUrl?: string;
}

export interface JourneyStep {
  id: string;
  number: string;
  title: string;
  description: string;
  details: string[];
}

export interface Principle {
  id: string;
  title: string;
  description: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  category: string;
  author: string;
  date: string;
  readingTime: string;
  image?: { src: string; alt: string };
  relatedSlugs: string[];
  seo: {
    title: string;
    description: string;
  };
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: FaqCategory;
}

export type FaqCategory =
  | "Appointments"
  | "Treatments"
  | "Cosmetic Dentistry"
  | "Implants"
  | "Payment"
  | "Dental Anxiety"
  | "Aftercare";

export interface NavItem {
  label: string;
  href: string;
}
