import type { Testimonial } from "./types";

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "Every appointment felt unhurried. I understood each step before it happened, and the result looks quietly natural — nothing exaggerated.",
    patientIdentifier: "Elena M.",
    treatmentTitle: "Porcelain Veneers",
    verifiedGoogle: false,
    rating: undefined,
    featured: true,
  },
  {
    id: "t2",
    quote:
      "I came for a second opinion and left with clarity. The planning was meticulous, and the implant feels like it has always been there.",
    patientIdentifier: "James R.",
    treatmentTitle: "Dental Implants",
    featured: true,
  },
  {
    id: "t3",
    quote:
      "As someone who avoids dental visits, I was met with patience. The explanation alone reduced my anxiety before treatment began.",
    patientIdentifier: "Anonymous patient",
    treatmentTitle: "Restorative Care",
    featured: true,
  },
];

export function getFeaturedTestimonials() {
  return testimonials.filter((t) => t.featured);
}
