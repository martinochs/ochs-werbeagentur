import type { Metadata } from "next";
import { LandingPageFooter, LandingPageHeader } from "@/components/LandingPageShell";
import { GoogleAdsZahnarztLandingContent } from "@/components/landing/GoogleAdsZahnarztLandingContent";
import { erstgespraechUrl } from "@/lib/cta";
import {
  googleAdsZahnarztCta,
  googleAdsZahnarztLeadQuelle,
  googleAdsZahnarztMetadata,
} from "@/lib/content/google-ads-zahnarzt";
import { siteConfig } from "@/lib/seo/config";

const ctaHref = erstgespraechUrl("google-ads", { quelle: googleAdsZahnarztLeadQuelle });

export const metadata: Metadata = {
  title: {
    absolute: googleAdsZahnarztMetadata.title,
  },
  description: googleAdsZahnarztMetadata.description,
  alternates: {
    canonical: `${siteConfig.url}${googleAdsZahnarztMetadata.canonicalPath}`,
  },
};

export default function GoogleAdsZahnarztLandingPage() {
  return (
    <>
      <LandingPageHeader
        ctaHref={ctaHref}
        trustHint="Google Ads für Zahnarztpraxen"
        ctaLabel={googleAdsZahnarztCta.header}
      />
      <main className="flex-1 bg-white" data-lp-page="google-ads-zahnarzt">
        <GoogleAdsZahnarztLandingContent />
      </main>
      <LandingPageFooter />
    </>
  );
}
