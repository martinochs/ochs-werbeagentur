import type { Metadata } from "next";
import { AboutSection } from "@/components/AboutSection";
import { ChallengesBenefitsSection } from "@/components/ChallengesBenefitsSection";
import { ClosingCtaSection } from "@/components/ClosingCtaSection";
import { FaqSection } from "@/components/FaqSection";
import { Footer } from "@/components/Footer";
import { GoogleAdsSection } from "@/components/GoogleAdsSection";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PortfolioExpertSection } from "@/components/PortfolioExpertSection";
import { PricingSection } from "@/components/PricingSection";
import { ProcessSection } from "@/components/ProcessSection";
import { TrustBarSection } from "@/components/TrustBarSection";
import { WebsiteFeaturesSection } from "@/components/WebsiteFeaturesSection";
import { faqItems } from "@/lib/content/faq";
import { siteConfig } from "@/lib/seo/config";
import {
  faqSchema,
  localBusinessSchema,
  webPageSchema,
} from "@/lib/seo/schema";

const homeFaqItems = [
  faqItems[0], // Was kostet eine professionelle Website für eine Arztpraxis?
  faqItems[1], // Was ist im Festpreis von 2.999 € netto enthalten?
  faqItems[2], // Was versteht sich unter einer Korrekturrunde?
  faqItems[3], // Wie lange dauert die Erstellung einer Praxis-Website?
  faqItems[15], // Wie starten wir mit der Zusammenarbeit?
];

export const metadata: Metadata = {
  title: {
    absolute: siteConfig.seoDefaultTitle,
  },
};

export default function HomePage() {
  const pageTitle = siteConfig.seoDefaultTitle;
  const schemas = [
    localBusinessSchema(),
    webPageSchema(pageTitle, siteConfig.description),
    faqSchema(faqItems),
  ];

  return (
    <>
      {schemas.map((schema) => (
        <script
          key={schema["@type"] as string}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <Header />
      <main>
        <Hero />
        <TrustBarSection />
        <AboutSection />
        <ChallengesBenefitsSection />
        <WebsiteFeaturesSection />
        <PortfolioExpertSection />
        <ProcessSection />
        <GoogleAdsSection />
        <PricingSection />
        <FaqSection items={homeFaqItems} showMoreLink={true} />
        <ClosingCtaSection />
      </main>
      <Footer />
    </>
  );
}
