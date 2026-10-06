import type { Technology } from "./types";

/**
 * Only enable technologies actually offered by the dentist.
 * Disabled items are never shown.
 */
export const technologies: Technology[] = [
  {
    id: "digital-xray",
    title: "Digital X-Ray",
    patientBenefit:
      "Clearer images with lower radiation exposure than traditional film, supporting accurate diagnosis.",
    description:
      "Digital radiography provides immediate, high-resolution views that help us assess structure and plan treatment with confidence.",
    enabled: true,
  },
  {
    id: "cbct",
    title: "3D Imaging",
    patientBenefit:
      "A detailed three-dimensional view helps us plan complex treatments with greater precision.",
    description:
      "Cone-beam CT imaging offers volumetric insight for implant planning and complex anatomy — used when clinically indicated.",
    enabled: true,
  },
  {
    id: "intraoral-scanner",
    title: "Intraoral Scanner",
    patientBenefit:
      "Comfortable digital impressions without messy traditional moulds.",
    description:
      "Optical scanning captures precise models of your teeth for restorations, planning, and communication.",
    enabled: true,
  },
  {
    id: "dsd",
    title: "Digital Smile Design",
    patientBenefit:
      "Visual planning that helps you understand proposed aesthetic changes before treatment begins.",
    description:
      "Digital smile design tools support proportion analysis and shared decision-making for aesthetic cases.",
    enabled: true,
  },
  {
    id: "cadcam",
    title: "CAD/CAM",
    patientBenefit:
      "Precisely milled restorations designed for fit, function, and natural form.",
    description:
      "Computer-aided design and manufacture support high-accuracy ceramic restorations.",
    enabled: true,
  },
  {
    id: "ai-imaging",
    title: "AI-assisted imaging",
    patientBenefit:
      "Additional analytical support during image review — always interpreted by the clinician.",
    description:
      "AI tools may assist with image analysis. Clinical decisions remain with your dentist.",
    enabled: false,
  },
];

export function getEnabledTechnologies() {
  return technologies.filter((t) => t.enabled);
}
