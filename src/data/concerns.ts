import type { Concern } from "./types";

export const concerns: Concern[] = [
  {
    id: "pain",
    label: "I have tooth pain",
    description:
      "Discomfort deserves careful assessment — we will help identify likely next steps.",
    treatmentIds: ["restorative", "preventive"],
  },
  {
    id: "improve-smile",
    label: "I want to improve my smile",
    description:
      "Aesthetic goals can be explored gently, with options matched to your features.",
    treatmentIds: ["smile-design", "veneers", "whitening"],
  },
  {
    id: "missing-tooth",
    label: "I am missing a tooth",
    description:
      "Replacement options focus on function, longevity, and a natural appearance.",
    treatmentIds: ["implants", "restorative"],
  },
  {
    id: "colour",
    label: "My teeth have changed colour",
    description:
      "Colour change has many causes; whitening or ceramic options may be discussed.",
    treatmentIds: ["whitening", "veneers"],
  },
  {
    id: "broken",
    label: "I have broken or chipped teeth",
    description:
      "Chips and fractures can often be restored with conservative, precise techniques.",
    treatmentIds: ["restorative", "veneers"],
  },
  {
    id: "checkup",
    label: "I need a routine check-up",
    description:
      "A calm, thorough review of oral health and a plan for prevention.",
    treatmentIds: ["preventive"],
  },
  {
    id: "straighter",
    label: "I want straighter teeth",
    description:
      "Alignment concerns may connect to smile design or referral pathways.",
    treatmentIds: ["smile-design"],
  },
  {
    id: "second-opinion",
    label: "I need a second opinion",
    description:
      "A considered review of your current plan, options, and unanswered questions.",
    treatmentIds: ["implants", "restorative", "smile-design"],
  },
];

export function getConcernById(id: string) {
  return concerns.find((c) => c.id === id);
}
