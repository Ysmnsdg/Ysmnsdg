import type { DentistProfile, NavItem, TrustSignal } from "./types";

/**
 * CENTRAL CONFIG — replace every field when a dentist is selected.
 * Leave optional credential/trust fields empty or omit them to hide UI.
 * Never invent credentials, ratings, or clinical claims.
 */
export const dentist: DentistProfile = {
  firstName: "Amara",
  lastName: "Hale",
  titlePrefix: "Dr.",
  qualifications: "DDS, MSc Aesthetic Restorative Dentistry",
  specialty: "Aesthetic & Restorative Dentistry",
  specialtiesLabel: "AESTHETIC • RESTORATIVE • PREVENTIVE",
  practiceName: "Atelier Hale",
  monogram: "AH",
  tagline: "Private dentistry, refined.",
  heroHeadline: ["Dentistry,", "refined."],
  heroSupport: [
    "Clinical precision.",
    "Natural results.",
    "Care designed around you.",
  ],
  heroMicrocopy: "Private consultations • Personalized treatment planning",
  philosophyShort:
    "I believe the best dentistry is almost invisible — restoring health and harmony while honouring the character of each smile.",
  philosophyLong:
    "My work begins with listening. Every treatment plan is shaped by your goals, your oral health, and the quiet details that make a smile feel like your own. Technology helps us see clearly; judgment and restraint decide what we do.",
  philosophyStatement: {
    headline: ["Natural first.", "Precise always."],
    body: "The goal is not to create an artificial smile. It is to preserve individuality while improving health, balance, function and confidence.",
  },
  biography: [
    "Dr. Amara Hale practices private aesthetic and restorative dentistry with a focus on careful planning, digital precision, and results that feel natural.",
    "Her approach is calm and deliberate: thorough assessment, clear conversation, and treatment that respects both biology and beauty. Patients are never rushed into decisions; they are guided through options with honesty and care.",
    "Replace this biography in data/dentist.ts when the live practitioner profile is ready.",
  ],
  portrait: {
    src: "/images/portrait-placeholder.svg",
    alt: "Editorial portrait placeholder for Dr. Amara Hale",
  },
  experienceYears: undefined,
  patientsTreatedLabel: undefined,
  googleRating: undefined,
  membershipHighlight: undefined,
  education: [
    {
      title: "Doctor of Dental Surgery",
      detail: "Configure institution in data/dentist.ts",
    },
  ],
  certifications: [],
  associations: [],
  advancedTraining: [],
  awards: [],
  publications: [],
  phone: "+1 (000) 000-0000",
  email: "hello@atelierhale.example",
  address: {
    line1: "12 Atelier Lane",
    city: "Your City",
    region: "ST",
    postalCode: "00000",
    country: "Country",
  },
  mapsUrl: undefined,
  parkingInfo: "Street and nearby garage parking available. Details to be confirmed.",
  transitInfo: "Public transport access to be configured for the practice location.",
  accessibilityInfo:
    "Please contact the practice ahead of your visit so we can arrange any accessibility support you may need.",
  officeHours: [
    { day: "Monday", hours: "09:00 – 17:00" },
    { day: "Tuesday", hours: "09:00 – 17:00" },
    { day: "Wednesday", hours: "09:00 – 17:00" },
    { day: "Thursday", hours: "09:00 – 18:00" },
    { day: "Friday", hours: "09:00 – 15:00" },
    { day: "Saturday", hours: "By arrangement", closed: false },
    { day: "Sunday", hours: "Closed", closed: true },
  ],
  socialLinks: [
    {
      platform: "instagram",
      url: "https://instagram.com/",
      label: "Instagram",
    },
    {
      platform: "linkedin",
      url: "https://linkedin.com/",
      label: "LinkedIn",
    },
  ],
  bookingUrl: "/book",
  siteUrl: "https://atelierhale.example",
  locale: "en",
  medicalDisclaimer:
    "Educational content on this website does not constitute medical advice, diagnosis, or treatment. Always seek the guidance of a qualified dental professional for personal concerns.",
  privacyNotes: {
    virtualConsult:
      "This is not a diagnosis and does not replace an in-person clinical examination.",
    photoUpload:
      "Uploaded images are treated as sensitive data. In production they must be stored securely with consent, retention, and deletion controls. This demo uses a local mock workflow and does not persist medical images.",
  },
};

export const fullName = `${dentist.titlePrefix} ${dentist.firstName} ${dentist.lastName}`;

export const shortName = `${dentist.titlePrefix} ${dentist.lastName}`;

export const navigation: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Treatments", href: "/treatments" },
  { label: "Results", href: "/results" },
  { label: "Experience", href: "/experience" },
  { label: "Technology", href: "/technology" },
  { label: "Journal", href: "/journal" },
  { label: "Contact", href: "/contact" },
];

export function getTrustSignals(): TrustSignal[] {
  const signals: TrustSignal[] = [];

  if (dentist.experienceYears != null) {
    signals.push({
      id: "experience",
      label: "Years Experience",
      value: `${dentist.experienceYears}+`,
      enabled: true,
    });
  }

  if (dentist.patientsTreatedLabel) {
    signals.push({
      id: "patients",
      label: "Patients Treated",
      value: dentist.patientsTreatedLabel,
      enabled: true,
    });
  }

  if (dentist.googleRating) {
    signals.push({
      id: "rating",
      label: "Google Rating",
      value: `${dentist.googleRating.score.toFixed(1)} ★`,
      enabled: true,
    });
  }

  if (dentist.membershipHighlight) {
    signals.push({
      id: "membership",
      label: "Professional Membership",
      value: dentist.membershipHighlight,
      enabled: true,
    });
  }

  // Only show when technologies are configured as enabled
  signals.push({
    id: "digital",
    label: "Advanced Digital Dentistry",
    value: "Enabled when configured",
    enabled: false,
  });

  return signals.filter((s) => s.enabled !== false && Boolean(s.value));
}
