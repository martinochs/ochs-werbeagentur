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

export function erstgespraechUrl(
  leistung?: LeistungSlug,
  options?: { quelle?: string },
): string {
  const params = new URLSearchParams();
  if (leistung) {
    params.set("leistung", leistungToUrlParam(leistung));
  }
  if (options?.quelle) {
    params.set("quelle", options.quelle);
  }
  const query = params.toString();
  return query ? `/praxisanalyse?${query}` : "/praxisanalyse";
}

/** @deprecated Alias — use erstgespraechUrl */
export const analyseUrl = erstgespraechUrl;
