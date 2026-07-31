import { AboutSection } from "@/components/AboutSection";
import { ChallengesBenefitsSection } from "@/components/ChallengesBenefitsSection";
import { FaqSection } from "@/components/FaqSection";
import { Footer } from "@/components/Footer";
import { GoogleAdsSection } from "@/components/GoogleAdsSection";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PortfolioExpertSection } from "@/components/PortfolioExpertSection";
import { PricingSection } from "@/components/PricingSection";
import { ProcessSection } from "@/components/ProcessSection";
import { TrustBarSection } from "@/components/TrustBarSection";
import { faqItems } from "@/lib/content/faq";
import { siteConfig } from "@/lib/seo/config";
import {
  faqSchema,
  localBusinessSchema,
  webPageSchema,
} from "@/lib/seo/schema";

export default function HomePage() {
  const pageTitle = `${siteConfig.name} — ${siteConfig.tagline}`;
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
        <ChallengesBenefitsSection />
        <ProcessSection />
        <PortfolioExpertSection />
        <GoogleAdsSection />
        <PricingSection />
        <FaqSection />
        <AboutSection />
      </main>
      <Footer />
    </>
  );
}
