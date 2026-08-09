import type { Metadata } from "next";
import { LandingPageFooter, LandingPageHeader } from "@/components/LandingPageShell";
import { WebsiteArztpraxisLandingContent } from "@/components/landing/WebsiteArztpraxisLandingContent";
import { erstgespraechUrl } from "@/lib/cta";
import {
  websiteArztpraxisCta,
  websiteArztpraxisLeadQuelle,
  websiteArztpraxisMetadata,
} from "@/lib/content/website-arztpraxis";
import { siteConfig } from "@/lib/seo/config";

const ctaHref = erstgespraechUrl("website", { quelle: websiteArztpraxisLeadQuelle });

export const metadata: Metadata = {
  title: {
    absolute: websiteArztpraxisMetadata.title,
  },
  description: websiteArztpraxisMetadata.description,
  alternates: {
    canonical: `${siteConfig.url}${websiteArztpraxisMetadata.canonicalPath}`,
  },
};

export default function WebsiteArztpraxisLandingPage() {
  return (
    <>
      <LandingPageHeader
        ctaHref={ctaHref}
        trustHint="Spezialisiert auf Arztpraxen"
        ctaLabel={websiteArztpraxisCta.header}
      />
      <main className="flex-1 bg-white" data-lp-page="website-arztpraxis">
        <WebsiteArztpraxisLandingContent />
      </main>
      <LandingPageFooter />
    </>
  );
}
