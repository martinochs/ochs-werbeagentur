export type SiteConfig = {
  name: string;
  legalName: string;
  contactPerson: string;
  tagline: string;
  description: string;
  url: string;
  locale: string;
  phone: string | null;
  phoneDisplay: string | null;
  email: string | null;
  address: {
    street: string;
    city: string;
    region: string;
    postalCode: string;
    country: string;
  };
  geo: {
    latitude: number;
    longitude: number;
  };
  keywords: string[];
};

export const siteConfig: SiteConfig = {
  name: "OCHS Digital Consulting",
  legalName: "OCHS Digital Consulting",
  contactPerson: "Mariia Ochs",
  tagline: "Websites für Ärzte & Zahnärzte in Mannheim",
  description:
    "Webdesign für Arzt- und Zahnarztpraxen in Mannheim: Moderne Praxis-Websites mit Online-Terminbuchung, SEO, Google Ads und persönlicher Betreuung durch Mariia Ochs — kostenloses Erstgespräch.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://ochs-digital-consulting.vercel.app",
  locale: "de_DE",
  phone: null,
  phoneDisplay: null,
  email: null,
  address: {
    street: "Römerstraße 1",
    city: "Mannheim",
    region: "Baden-Württemberg",
    postalCode: "68259",
    country: "DE",
  },
  geo: {
    latitude: 49.4893,
    longitude: 8.5218,
  },
  keywords: [
    "Website für Ärzte Mannheim",
    "Website für Zahnärzte Mannheim",
    "Praxis-Website Mannheim",
    "Webdesign Arztpraxis",
    "Webdesign Zahnarztpraxis",
    "SEO für Ärzte",
    "Google Ads Zahnarzt",
    "Praxis Homepage erstellen",
    "Arzt Homepage Mannheim",
  ],
};

export const primaryKeyword = "Praxis-Website Mannheim";

export function formatAddress(config: SiteConfig = siteConfig): string {
  const { address } = config;
  return `${address.street}, ${address.postalCode} ${address.city}`;
}

export function mapsUrl(config: SiteConfig = siteConfig): string {
  const query = encodeURIComponent(formatAddress(config));
  return `https://www.google.com/maps/search/?api=1&query=${query}`;
}
