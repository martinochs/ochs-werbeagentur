export const leistungOptions = [
  { value: "website", label: "Praxis-Website" },
  { value: "google-ads", label: "Google Ads" },
  { value: "seo", label: "SEO & KI-Sichtbarkeit" },
  { value: "betreuung", label: "Monatliche Betreuung" },
  { value: "kombi", label: "Website + Google Ads" },
] as const;

export type LeistungSlug = (typeof leistungOptions)[number]["value"];

const validSlugs = new Set<string>(leistungOptions.map((option) => option.value));

export function parseLeistungSlug(value: string | undefined): LeistungSlug | undefined {
  if (value && validSlugs.has(value)) {
    return value as LeistungSlug;
  }
  return undefined;
}

export function erstgespraechUrl(leistung?: LeistungSlug): string {
  if (!leistung) return "/praxisanalyse";
  return `/praxisanalyse?leistung=${leistung}`;
}
