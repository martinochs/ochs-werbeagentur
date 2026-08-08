export const leistungOptions = [
  { value: "website", label: "Praxis-Website" },
  { value: "google-ads", label: "Google Ads" },
  { value: "betreuung", label: "Google-Ads-Betreuung" },
  { value: "kombi", label: "Website + Google Ads" },
] as const;

export type LeistungSlug = (typeof leistungOptions)[number]["value"];

export const primaryCtaLabel = "Kostenlose Website-Analyse anfordern";
export const headerCtaLabel = "Analyse anfordern";
export const navAnalyseLabel = "Analyse anfordern";
export const formSubmitLabel = "Analyse anfordern";

const slugAliases: Record<string, LeistungSlug> = {
  website: "website",
  googleads: "google-ads",
  "google-ads": "google-ads",
  betreuung: "betreuung",
  kombi: "kombi",
};

export function parseLeistungSlug(value: string | undefined): LeistungSlug | undefined {
  if (!value) return undefined;
  return slugAliases[value];
}

export function leistungToUrlParam(leistung: LeistungSlug): string {
  if (leistung === "google-ads") return "googleads";
  return leistung;
}

export function erstgespraechUrl(leistung?: LeistungSlug): string {
  if (!leistung) return "/praxisanalyse";
  return `/praxisanalyse?leistung=${leistungToUrlParam(leistung)}`;
}

/** @deprecated Alias — use erstgespraechUrl */
export const analyseUrl = erstgespraechUrl;
