export const googleAdsCreditBadge = "Bonus für Neukunden";

export const googleAdsCreditHeadline = {
  prefix: "Bis zu",
  amount: "4.000 €",
  suffix: "Google Ads-Werbeguthaben für Neukunden¹",
};

export const googleAdsCreditFootnoteMain =
  "¹ Das Werbeguthaben wird von Google angeboten und unterliegt den jeweils aktuellen Teilnahme- und Angebotsbedingungen von Google. Voraussetzung ist unter anderem die Berechtigung als Google-Ads-Neukunde sowie das Erreichen der von Google vorgegebenen Mindestausgaben.";

export const googleAdsCreditBudgetNote =
  "Das Werbebudget wird separat direkt an Google gezahlt.";

/** Vollständiger Fußnotentext für Screenreader und einfache Ausgabe */
export const googleAdsCreditFootnote = `${googleAdsCreditFootnoteMain} ${googleAdsCreditBudgetNote}`;

/** Fließtext-Headline für einfache Ausgabe */
export const googleAdsCreditHeadlineText = `${googleAdsCreditHeadline.prefix} ${googleAdsCreditHeadline.amount} ${googleAdsCreditHeadline.suffix}`;
