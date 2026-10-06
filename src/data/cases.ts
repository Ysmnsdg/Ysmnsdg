import type { CaseStudy } from "./types";

/**
 * All cases must be anonymized unless explicit consent status is "consented-named".
 * Never include identifiable patient information.
 */
export const cases: CaseStudy[] = [
  {
    id: "case-veneers-01",
    slug: "porcelain-veneers-natural-harmony",
    title: "Natural restoration of shape and symmetry",
    treatmentId: "veneers",
    patientConcern:
      "Uneven edges and colour variation that made the smile feel unfinished in photographs and conversation.",
    initialCondition:
      "Mild wear on the anterior teeth with asymmetric length and shade inconsistency between central incisors.",
    clinicalAssessment:
      "Healthy periodontal foundations with sufficient enamel for conservative ceramic veneers. Occlusion stable; soft-tissue levels favourable.",
    optionsConsidered: [
      "Whitening and bonding only",
      "Limited composite bonding",
      "Porcelain veneers on selected anterior teeth",
    ],
    chosenTreatment:
      "Porcelain veneers planned to refine proportion, edge harmony, and colour while preserving as much natural structure as possible.",
    process: [
      "Comprehensive records and aesthetic preview",
      "Conservative preparation and provisional stage",
      "Ceramic try-in and adhesive placement",
      "Occlusal refinement and maintenance guidance",
    ],
    timeline: "Completed across a planned series of visits",
    duration: "Approximately 3–4 weeks",
    outcome:
      "A quieter, more balanced smile with improved light reflection and edge symmetry — still recognisably the patient’s own.",
    dentistCommentary:
      "The aim was refinement, not reinvention. We adjusted length and shade just enough for harmony, then stopped.",
    patientTestimonial:
      "I look like myself — only more settled. That was exactly what I hoped for.",
    patientIdentifier: "Patient A",
    consentStatus: "consented-anonymized",
    beforeImage: {
      src: "/images/case-before-01.svg",
      alt: "Anonymized before illustration for porcelain veneer case",
    },
    afterImage: {
      src: "/images/case-after-01.svg",
      alt: "Anonymized after illustration for porcelain veneer case",
    },
    featured: true,
    relatedTreatmentSlug: "porcelain-veneers",
    seo: {
      title: "Porcelain Veneers Case Study",
      description:
        "An anonymized case exploring porcelain veneers for natural shape, proportion, and colour harmony.",
    },
  },
  {
    id: "case-implant-01",
    slug: "single-implant-anterior",
    title: "Single-tooth implant with natural emergence",
    treatmentId: "implants",
    patientConcern:
      "A missing front tooth affecting confidence when speaking and smiling.",
    initialCondition:
      "Single anterior space with adequate bone volume following careful site assessment.",
    clinicalAssessment:
      "Favourable soft-tissue profile and bone for a single implant with custom abutment and ceramic crown.",
    optionsConsidered: [
      "Removable partial prosthesis",
      "Conventional bridge",
      "Single dental implant",
    ],
    chosenTreatment:
      "Single implant with digitally guided planning and a ceramic crown matched to adjacent teeth.",
    process: [
      "3D planning and surgical guide",
      "Implant placement and healing phase",
      "Provisional aesthetics where indicated",
      "Final ceramic restoration",
    ],
    timeline: "Staged over several months",
    duration: "Approximately 4–6 months",
    outcome:
      "A stable, natural-looking replacement that restores speech comfort and smile confidence.",
    dentistCommentary:
      "Emergence profile and shade matching mattered as much as osseointegration. The restoration had to disappear into the smile.",
    patientIdentifier: "Patient B",
    consentStatus: "consented-anonymized",
    beforeImage: {
      src: "/images/case-before-02.svg",
      alt: "Anonymized before illustration for implant case",
    },
    afterImage: {
      src: "/images/case-after-02.svg",
      alt: "Anonymized after illustration for implant case",
    },
    featured: true,
    relatedTreatmentSlug: "dental-implants",
    seo: {
      title: "Dental Implant Case Study",
      description:
        "An anonymized single-tooth implant case focused on natural emergence and shade harmony.",
    },
  },
  {
    id: "case-whitening-01",
    slug: "professional-whitening-refinement",
    title: "Controlled brightening with enamel respect",
    treatmentId: "whitening",
    patientConcern:
      "Gradual dullness that made the smile feel tired despite good oral health.",
    initialCondition:
      "Extrinsic staining with healthy enamel and no active sensitivity history.",
    clinicalAssessment:
      "Suitable candidate for supervised professional whitening with clear shade goals.",
    optionsConsidered: [
      "At-home over-the-counter products",
      "Supervised professional whitening",
      "Ceramic intervention (not indicated)",
    ],
    chosenTreatment:
      "Professional whitening protocol with staged review and sensitivity management.",
    process: [
      "Baseline records and shade agreement",
      "Supervised whitening sessions",
      "Review and maintenance advice",
    ],
    timeline: "Short course with review",
    duration: "Approximately 1–2 weeks",
    outcome:
      "A brighter baseline that still looks natural in daylight and conversation.",
    dentistCommentary:
      "Brightness without chalkiness. We set a ceiling for shade and protected comfort throughout.",
    patientIdentifier: "Patient C",
    consentStatus: "consented-anonymized",
    beforeImage: {
      src: "/images/case-before-03.svg",
      alt: "Anonymized before illustration for whitening case",
    },
    afterImage: {
      src: "/images/case-after-03.svg",
      alt: "Anonymized after illustration for whitening case",
    },
    featured: true,
    relatedTreatmentSlug: "teeth-whitening",
    seo: {
      title: "Teeth Whitening Case Study",
      description:
        "An anonymized whitening case focused on controlled brightness and enamel comfort.",
    },
  },
];

export function getCaseBySlug(slug: string) {
  return cases.find((c) => c.slug === slug);
}

export function getFeaturedCases() {
  return cases.filter((c) => c.featured);
}
