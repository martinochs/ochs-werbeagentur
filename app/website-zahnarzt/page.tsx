import type { Metadata } from "next";
import { LandingPageFooter, LandingPageHeader } from "@/components/LandingPageShell";
import { WebsiteZahnarztLandingContent } from "@/components/landing/WebsiteZahnarztLandingContent";
import { erstgespraechUrl } from "@/lib/cta";
import {
  websiteZahnarztLeadQuelle,
  websiteZahnarztMetadata,
} from "@/lib/content/website-zahnarzt";
import { siteConfig } from "@/lib/seo/config";

const ctaHref = erstgespraechUrl("website", { quelle: websiteZahnarztLeadQuelle });

export const metadata: Metadata = {
  title: {
    absolute: websiteZahnarztMetadata.title,
  },
  description: websiteZahnarztMetadata.description,
  alternates: {
    canonical: `${siteConfig.url}${websiteZahnarztMetadata.canonicalPath}`,
  },
};

export default function WebsiteZahnarztLandingPage() {
  return (
    <>
      <LandingPageHeader ctaHref={ctaHref} />
      <main className="flex-1 bg-white" data-lp-page="website-zahnarzt">
        <WebsiteZahnarztLandingContent />
      </main>
      <LandingPageFooter />
    </>
  );
}
