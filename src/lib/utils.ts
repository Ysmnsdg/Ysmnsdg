export function cn(...inputs: Array<string | false | null | undefined>) {
  return inputs.filter(Boolean).join(" ").replace(/\s+/g, " ").trim();
}

export function formatAddress(parts: {
  line1: string;
  line2?: string;
  city: string;
  region: string;
  postalCode: string;
  country: string;
}) {
  return [
    parts.line1,
    parts.line2,
    `${parts.city}, ${parts.region} ${parts.postalCode}`,
    parts.country,
  ]
    .filter(Boolean)
    .join("\n");
}
