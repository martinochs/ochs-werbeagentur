import type { Metadata } from "next";
import { LandingPageFooter, LandingPageHeader } from "@/components/LandingPageShell";
import { GoogleAdsArztpraxisLandingContent } from "@/components/landing/GoogleAdsArztpraxisLandingContent";
import { erstgespraechUrl } from "@/lib/cta";
import {
  googleAdsArztpraxisCta,
  googleAdsArztpraxisLeadQuelle,
  googleAdsArztpraxisMetadata,
} from "@/lib/content/google-ads-arztpraxis";
import { siteConfig } from "@/lib/seo/config";

const ctaHref = erstgespraechUrl("google-ads", { quelle: googleAdsArztpraxisLeadQuelle });

export const metadata: Metadata = {
  title: {
    absolute: googleAdsArztpraxisMetadata.title,
  },
  description: googleAdsArztpraxisMetadata.description,
  alternates: {
    canonical: `${siteConfig.url}${googleAdsArztpraxisMetadata.canonicalPath}`,
  },
};

export default function GoogleAdsArztpraxisLandingPage() {
  return (
    <>
      <LandingPageHeader
        ctaHref={ctaHref}
        trustHint="Google Ads für Arztpraxen"
        ctaLabel={googleAdsArztpraxisCta.header}
      />
      <main className="flex-1 bg-white" data-lp-page="google-ads-arztpraxis">
        <GoogleAdsArztpraxisLandingContent />
      </main>
      <LandingPageFooter />
    </>
  );
}
