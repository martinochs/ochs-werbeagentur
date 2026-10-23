import type { Metadata } from "next";
import { LandingPageFooter, LandingPageHeader } from "@/components/LandingPageShell";
import { WebsiteZahnarztLandingContent } from "@/components/landing/WebsiteZahnarztLandingContent";
import {
  websiteZahnarztCta,
  websiteZahnarztFormAnchor,
  websiteZahnarztMetadata,
} from "@/lib/content/website-zahnarzt";
import { siteConfig } from "@/lib/seo/config";

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
      <LandingPageHeader
        ctaHref={websiteZahnarztFormAnchor}
        trustHint="Spezialisiert auf Zahnarztpraxen"
        ctaLabel={websiteZahnarztCta.header}
      />
      <main className="flex-1 bg-white" data-lp-page="website-zahnarzt">
        <WebsiteZahnarztLandingContent />
      </main>
      <LandingPageFooter />
    </>
  );
}
