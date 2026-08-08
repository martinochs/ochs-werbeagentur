export const websitePackageActionPrice = "2.999 €";

export const websitePackageScopeHeading =
  "Im Festpreis von 2.999 € konkret enthalten";

export const websitePackageScopeHighlights = [
  "2.999 € netto",
  "Bis zu 10 Inhaltsseiten",
  "2 Korrekturrunden",
] as const;

export type WebsitePackageScopeItem = {
  text: string;
  emphasis?: boolean;
  note?: string;
};

export const websitePackageScopeItems: WebsitePackageScopeItem[] = [
  { text: "Individuelle Konzeption und modernes Praxisdesign" },
  {
    text: "Bis zu 10 Inhaltsseiten",
    emphasis: true,
    note: "Impressum und Datenschutz zählen nicht zu den 10 Inhaltsseiten",
  },
  {
    text: "Optimierte Darstellung auf Smartphone, Tablet und Desktop",
  },
  {
    text: "Erstellung und Optimierung der Website-Texte auf Grundlage Ihrer Praxisinformationen",
  },
  {
    text: "Übernahme vorhandener Texte und Bilder für die vereinbarten Seiten",
  },
  { text: "SEO-Grundoptimierung für Google" },
  { text: "Kontaktformular" },
  {
    text: "Integration eines bereits bestehenden Online-Terminbuchungssystems",
  },
  { text: "Technische Performance- und Ladezeitoptimierung" },
  {
    text: "Technische Einbindung von Impressum und Datenschutzerklärung",
  },
  {
    text: "2 Korrekturrunden vor Veröffentlichung",
    emphasis: true,
  },
  { text: "Technische Veröffentlichung der fertigen Website" },
];

export const websitePackageNoHiddenCostsLabel = "Keine versteckten Agenturkosten";

export const websitePackageNoHiddenCostsText =
  "Zusätzliche Funktionen oder Leistungen außerhalb dieses Leistungsumfangs werden nur nach vorheriger Abstimmung und ausdrücklicher Zustimmung des Kunden berechnet.";

export const websitePackageExternalCostsNote =
  "Domain, Hosting sowie Gebühren externer Anbieter sind nicht Bestandteil des einmaligen Website-Festpreises und werden separat ausgewiesen bzw. direkt beim jeweiligen Anbieter abgerechnet.";

export const websitePackageCardFeatures = [
  "Bis zu 10 Inhaltsseiten",
  "Individuelles Praxisdesign",
  "SEO-Grundoptimierung",
  "2 Korrekturrunden vor Veröffentlichung",
  "Integration bestehendes Terminbuchungssystem",
] as const;
