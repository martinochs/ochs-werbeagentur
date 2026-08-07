export const fachrichtungen = [
  "Zahnarztpraxis",
  "Allgemeinmedizin / Hausarzt",
  "Hautarzt / Dermatologie",
  "Orthopädie",
  "Andere Facharztpraxis",
] as const;

export const gewuenschteLeistungen = [
  "Praxis-Website",
  "Google Ads",
  "SEO & KI-Sichtbarkeit",
  "Monatliche Betreuung",
  "Website + Google Ads",
  "Noch unsicher — Beratung gewünscht",
] as const;

export const leistungSlugToFormValue: Record<string, string> = {
  website: "Praxis-Website",
  "google-ads": "Google Ads",
  seo: "SEO & KI-Sichtbarkeit",
  betreuung: "Monatliche Betreuung",
  kombi: "Website + Google Ads",
};
