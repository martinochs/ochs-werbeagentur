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

export const unterstuetzungsOptionen = [
  "Neue Website",
  "Bestehende Website verbessern",
  "Google Ads",
  "SEO / bessere Google-Sichtbarkeit",
  "Noch nicht sicher",
] as const;

export const leistungSlugToFormValue: Record<string, string> = {
  website: "Neue Website",
  "google-ads": "Google Ads",
  seo: "SEO / bessere Google-Sichtbarkeit",
  betreuung: "Bestehende Website verbessern",
  kombi: "Neue Website",
};

export const analyseProcessSteps = [
  {
    step: 1,
    title: "Anfrage senden",
    text: "Sie übermitteln uns Ihre Website und einige kurze Informationen zu Ihrer Praxis.",
  },
  {
    step: 2,
    title: "Wir analysieren Ihre Website",
    text: "Wir prüfen Ihre aktuelle Online-Präsenz und identifizieren erste konkrete Verbesserungspotenziale.",
  },
  {
    step: 3,
    title: "Sie erhalten unsere Ersteinschätzung",
    text: "Vor unserem Gespräch senden wir Ihnen eine kurze vorläufige Analyse per E-Mail.",
  },
  {
    step: 4,
    title: "Persönliches Erstgespräch",
    text: "Anschließend besprechen wir die Ergebnisse mit Ihnen und zeigen Ihnen, welche Maßnahmen für Ihre Praxis sinnvoll sind.",
  },
] as const;
