export const fachrichtungen = [
  "Zahnarztpraxis",
  "Allgemeinmedizin / Hausarzt",
  "Hautarzt / Dermatologie",
  "Orthopädie",
  "Gynäkologie",
  "Kinder- und Jugendmedizin",
  "Augenheilkunde",
  "HNO",
  "Urologie",
  "Andere Fachrichtung",
] as const;

export const gewuenschteLeistungen = [
  "Praxis-Website",
  "Google Ads",
  "Monatliche Betreuung",
  "Website + Google Ads",
  "Noch unsicher — Beratung gewünscht",
] as const;

export const leistungSlugToFormValue: Record<string, string> = {
  website: "Praxis-Website",
  "google-ads": "Google Ads",
  betreuung: "Monatliche Betreuung",
  kombi: "Website + Google Ads",
};
