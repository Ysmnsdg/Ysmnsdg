import type { Treatment } from "./types";

export const treatments: Treatment[] = [
  {
    id: "implants",
    slug: "dental-implants",
    number: "01",
    title: "Dental Implants",
    shortDescription:
      "Restore function and confidence with carefully planned implant dentistry.",
    longDescription:
      "Implant treatment is planned with precision — assessing bone, bite, and aesthetics so that replacements feel secure and look natural. Every case begins with thorough diagnostics and a clear conversation about options and timeline.",
    benefits: [
      "Stable replacement for missing teeth",
      "Supports facial structure and bite",
      "Designed to blend with surrounding teeth",
    ],
    idealFor: [
      "Single missing teeth",
      "Multiple missing teeth",
      "Patients seeking a long-term restorative option",
    ],
    duration: "Typically several months, planned in stages",
    image: {
      src: "/images/treatment-implants.svg",
      alt: "Abstract editorial visual for dental implant treatment",
    },
    featured: true,
    relatedConcernIds: ["missing-tooth", "second-opinion"],
    seo: {
      title: "Dental Implants",
      description:
        "Carefully planned dental implant treatment focused on function, longevity, and natural aesthetics.",
    },
  },
  {
    id: "smile-design",
    slug: "smile-design",
    number: "02",
    title: "Smile Design",
    shortDescription:
      "A considered approach to proportion, harmony, and the character of your smile.",
    longDescription:
      "Smile design is not about creating a uniform look. It is about refining shape, colour, and balance so the result feels effortless and personal — guided by facial features, lip dynamics, and your own sense of self.",
    benefits: [
      "Thoughtful aesthetic planning",
      "Digital visualisation where appropriate",
      "Results that respect individuality",
    ],
    idealFor: [
      "Patients seeking smile refinement",
      "Those unhappy with shape or proportion",
      "Combined restorative and cosmetic goals",
    ],
    image: {
      src: "/images/treatment-smile.svg",
      alt: "Abstract editorial visual for smile design",
    },
    featured: true,
    relatedConcernIds: ["improve-smile", "straighter"],
    seo: {
      title: "Smile Design",
      description:
        "Personalised smile design with an emphasis on natural proportion, harmony, and lasting confidence.",
    },
  },
  {
    id: "veneers",
    slug: "porcelain-veneers",
    number: "03",
    title: "Porcelain Veneers",
    shortDescription:
      "Ultra-thin ceramic restorations that refine colour, shape, and symmetry.",
    longDescription:
      "Porcelain veneers can transform worn, uneven, or discoloured teeth with a light-touch approach. Planning is meticulous; preparation is conservative where possible; finishing is precise.",
    benefits: [
      "Natural light reflection",
      "Custom shade and form",
      "Durable ceramic aesthetics",
    ],
    idealFor: [
      "Discolouration resistant to whitening",
      "Minor shape irregularities",
      "Wear and chipping",
    ],
    duration: "Often completed over a few visits",
    image: {
      src: "/images/treatment-veneers.svg",
      alt: "Abstract editorial visual for porcelain veneers",
    },
    featured: true,
    relatedConcernIds: ["improve-smile", "broken", "colour"],
    seo: {
      title: "Porcelain Veneers",
      description:
        "Porcelain veneers planned for natural colour, proportion, and long-term oral health.",
    },
  },
  {
    id: "restorative",
    slug: "restorative-dentistry",
    number: "04",
    title: "Restorative Dentistry",
    shortDescription:
      "Rebuild strength and comfort with restorations that feel and look like your own teeth.",
    longDescription:
      "From precise fillings to crowns and full-mouth rehabilitation, restorative care focuses on longevity, bite harmony, and aesthetics that do not announce themselves.",
    benefits: [
      "Structural integrity restored",
      "Comfortable bite function",
      "Aesthetics integrated with health",
    ],
    idealFor: [
      "Decay or failing restorations",
      "Worn dentition",
      "Complex restorative needs",
    ],
    image: {
      src: "/images/treatment-restorative.svg",
      alt: "Abstract editorial visual for restorative dentistry",
    },
    featured: true,
    relatedConcernIds: ["pain", "broken", "second-opinion"],
    seo: {
      title: "Restorative Dentistry",
      description:
        "Restorative dentistry focused on strength, comfort, and natural-looking results.",
    },
  },
  {
    id: "whitening",
    slug: "teeth-whitening",
    number: "05",
    title: "Teeth Whitening",
    shortDescription:
      "Professional brightening tailored to your enamel and desired shade.",
    longDescription:
      "Whitening is assessed carefully — checking sensitivity, existing restorations, and realistic expectations — then delivered with controlled protocols for a refined, not exaggerated, result.",
    benefits: [
      "Supervised professional protocols",
      "Shade goals set together",
      "Sensitivity considered throughout",
    ],
    idealFor: [
      "Surface staining",
      "Patients seeking a brighter baseline",
      "Pre-aesthetic treatment preparation",
    ],
    image: {
      src: "/images/treatment-whitening.svg",
      alt: "Abstract editorial visual for teeth whitening",
    },
    featured: true,
    relatedConcernIds: ["colour", "improve-smile"],
    seo: {
      title: "Teeth Whitening",
      description:
        "Professional teeth whitening planned around enamel health and natural-looking brightness.",
    },
  },
  {
    id: "preventive",
    slug: "preventive-care",
    number: "06",
    title: "Preventive Care",
    shortDescription:
      "Quiet, consistent care that protects health before problems arise.",
    longDescription:
      "Prevention is the foundation of elegant dentistry. Regular assessment, refined hygiene therapy, and early intervention keep treatment minimal and outcomes lasting.",
    benefits: [
      "Early detection",
      "Personalised hygiene guidance",
      "Long-term oral health",
    ],
    idealFor: [
      "Routine maintenance",
      "Patients prioritising longevity",
      "Families seeking calm, thorough care",
    ],
    image: {
      src: "/images/treatment-preventive.svg",
      alt: "Abstract editorial visual for preventive care",
    },
    featured: true,
    relatedConcernIds: ["checkup"],
    seo: {
      title: "Preventive Care",
      description:
        "Preventive dentistry designed to protect oral health with calm, thorough, personalised care.",
    },
  },
];

export function getTreatmentBySlug(slug: string) {
  return treatments.find((t) => t.slug === slug);
}

export function getTreatmentsByIds(ids: string[]) {
  return treatments.filter((t) => ids.includes(t.id));
}

export function getFeaturedTreatments() {
  return treatments.filter((t) => t.featured);
}
