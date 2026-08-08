import type { LeistungSlug } from "@/lib/cta";

export type PraxisanalyseVariantKey = LeistungSlug | "default";

export type PraxisanalyseVariant = {
  heading: string;
  description: string;
  infoBox: string;
  submitLabel: string;
  metadataTitle: string;
  metadataDescription: string;
};

export const praxisanalyseVariants: Record<PraxisanalyseVariantKey, PraxisanalyseVariant> = {
  default: {
    heading: "Kostenlose Ersteinschätzung anfordern",
    description:
      "Senden Sie uns einige Angaben zu Ihrer Praxis — wir prüfen Ihren aktuellen oder geplanten Auftritt und melden uns mit einer ersten Einschätzung per E-Mail.",
    infoBox:
      "Die Anfrage ist kostenlos, unverbindlich und ohne Kaufverpflichtung. Ein persönliches Erstgespräch folgt erst danach, wenn Sie möchten.",
    submitLabel: "Kostenlose Ersteinschätzung anfordern",
    metadataTitle: "Kostenlose Ersteinschätzung",
    metadataDescription:
      "Fordern Sie eine kostenlose Ersteinschätzung für Ihre Arzt- oder Zahnarztpraxis an — wir melden uns per E-Mail mit ersten Empfehlungen.",
  },
  website: {
    heading: "Kostenlose Website-Analyse anfordern",
    description:
      "Wir werfen einen ersten Blick auf Ihre bestehende Website und zeigen Ihnen konkrete Verbesserungspotenziale. Falls noch keine Website vorhanden ist, analysieren wir Ihre Ausgangssituation, Ihre Ziele und die Anforderungen an Ihren neuen Praxisauftritt.",
    infoBox:
      "Die Anfrage ist kostenlos, unverbindlich und ohne Kaufverpflichtung. Ein persönliches Erstgespräch folgt erst danach, wenn Sie möchten.",
    submitLabel: "Kostenlose Website-Analyse anfordern",
    metadataTitle: "Kostenlose Website-Analyse",
    metadataDescription:
      "Fordern Sie eine kostenlose Website-Analyse für Ihre Praxis an — wir zeigen Ihnen konkrete Verbesserungspotenziale und melden uns per E-Mail.",
  },
  "google-ads": {
    heading: "Kostenlosen Google-Ads-Potenzialcheck anfragen",
    description:
      "Wir prüfen kurz, ob Google Ads für Ihre Praxis grundsätzlich sinnvoll sein kann und welche Leistungen sich besonders für eine Kampagne eignen.",
    infoBox:
      "Der kostenlose Potenzialcheck ist eine kurze Ersteinschätzung — keine vollständige Keyword-, Wettbewerbs- oder Kampagnenanalyse. Die Anfrage ist unverbindlich.",
    submitLabel: "Kostenlosen Potenzialcheck anfragen",
    metadataTitle: "Kostenloser Google-Ads-Potenzialcheck",
    metadataDescription:
      "Kurzer, kostenloser Check: Ob Google Ads für Ihre Praxis sinnvoll sein kann und welche Leistungen sich für eine Kampagne eignen.",
  },
  betreuung: {
    heading: "Kostenlosen Kampagnen-Check anfragen",
    description:
      "Sie schalten bereits Google Ads? Wir werfen einen ersten Blick auf Ihre bestehende Kampagne und prüfen, ob offensichtliches Optimierungspotenzial besteht.",
    infoBox:
      "Der kostenlose Kampagnen-Check ist eine kurze Ersteinschätzung — keine vollständige Kampagnenanalyse. Die Anfrage ist unverbindlich.",
    submitLabel: "Kostenlosen Kampagnen-Check anfragen",
    metadataTitle: "Kostenloser Kampagnen-Check",
    metadataDescription:
      "Sie schalten bereits Google Ads? Fordern Sie einen kostenlosen Kampagnen-Check an — wir prüfen offensichtliches Optimierungspotenzial.",
  },
  kombi: {
    heading: "Kostenlose Website- & Ads-Ersteinschätzung anfordern",
    description:
      "Wir betrachten Ihre aktuelle Website und prüfen gleichzeitig, welches Potenzial Google Ads für Ihre Praxis bieten könnte.",
    infoBox:
      "Die Anfrage ist kostenlos, unverbindlich und ohne Kaufverpflichtung. Ein persönliches Erstgespräch folgt erst danach, wenn Sie möchten.",
    submitLabel: "Kostenlose Ersteinschätzung anfordern",
    metadataTitle: "Kostenlose Website- & Ads-Ersteinschätzung",
    metadataDescription:
      "Kostenlose Ersteinschätzung zu Ihrer Website und dem Google-Ads-Potenzial für Ihre Praxis — unverbindlich per E-Mail.",
  },
};

export function getPraxisanalyseVariant(
  leistung?: LeistungSlug,
): PraxisanalyseVariant {
  if (!leistung) {
    return praxisanalyseVariants.default;
  }
  return praxisanalyseVariants[leistung];
}

export function getLeistungCtaLabel(leistung?: LeistungSlug): string {
  return getPraxisanalyseVariant(leistung).submitLabel;
}
