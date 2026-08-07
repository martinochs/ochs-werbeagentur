import { siteConfig } from "./config";

export function localBusinessSchema() {
  const { registeredOffice, geo, phone, email, url, name, description, contactPerson } =
    siteConfig;

  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name,
    description,
    url,
    serviceType: "Webdesign für Arzt- und Zahnarztpraxen",
    ...(phone ? { telephone: phone } : {}),
    ...(email ? { email } : {}),
    employee: {
      "@type": "Person",
      name: contactPerson,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: registeredOffice.street,
      addressLocality: registeredOffice.city,
      addressRegion: registeredOffice.region,
      postalCode: registeredOffice.postalCode,
      addressCountry: registeredOffice.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: geo.latitude,
      longitude: geo.longitude,
    },
    areaServed: [
      { "@type": "City", name: "Mannheim" },
      { "@type": "City", name: "Ludwigshafen" },
      { "@type": "City", name: "Heidelberg" },
      { "@type": "AdministrativeArea", name: "Rhein-Neckar-Kreis" },
    ],
    priceRange: "€€",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    sameAs: [],
  };
}

export function faqSchema(
  items: ReadonlyArray<{ question: string; answer: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function webPageSchema(title: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: siteConfig.url,
    inLanguage: "de-DE",
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}
