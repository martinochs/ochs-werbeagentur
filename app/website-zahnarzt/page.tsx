import type { Metadata } from "next";
import { LandingPageFooter, LandingPageHeader } from "@/components/LandingPageShell";
import { erstgespraechUrl } from "@/lib/cta";
import {
  websiteZahnarztBenefits,
  websiteZahnarztLp,
  websiteZahnarztMetadata,
  websiteZahnarztOffer,
} from "@/lib/content/website-zahnarzt";
import { ArrowRight, Check, Gift, ShieldCheck } from "lucide-react";

const ctaHref = erstgespraechUrl("website");

export const metadata: Metadata = {
  title: websiteZahnarztMetadata.title,
  description: websiteZahnarztMetadata.description,
  robots: {
    index: false,
    follow: true,
  },
};

export default function WebsiteZahnarztLandingPage() {
  return (
    <>
      <LandingPageHeader ctaHref={ctaHref} ctaLabel={websiteZahnarztLp.ctaLabel} />
      <main className="flex-1 bg-white">
        <section className="bg-[#f8fafc] py-12 lg:py-16">
          <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
            <p className="text-xs font-bold uppercase tracking-widest text-[#5b21b6]">
              {websiteZahnarztLp.eyebrow}
            </p>
            <h1 className="mt-4 text-3xl font-bold leading-tight text-navy sm:text-4xl lg:text-[2.5rem]">
              {websiteZahnarztLp.title}
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              {websiteZahnarztLp.subtitle}
            </p>
            <a
              href={ctaHref}
              className="btn-primary mt-8 inline-flex items-center gap-2 px-8 py-4 text-base"
            >
              {websiteZahnarztLp.ctaLabel}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <p className="mt-4 text-sm text-muted">{websiteZahnarztLp.trustLine}</p>
          </div>
        </section>

        <section className="py-12 lg:py-14">
          <div className="mx-auto max-w-3xl px-4 lg:px-8">
            <div className="rounded-2xl border border-[#ddd6fe] bg-[#f5f3ff] p-6 text-center sm:p-8">
              <div className="flex items-center justify-center gap-2">
                <Gift className="h-4 w-4 text-[#5b21b6]" aria-hidden="true" />
                <p className="text-[11px] font-bold uppercase tracking-wide text-[#5b21b6]">
                  Aktion bis {websiteZahnarztOffer.actionUntil}
                </p>
              </div>
              <p className="mt-4 text-sm text-muted">
                Statt{" "}
                <span className="line-through decoration-red-500 decoration-2">
                  {websiteZahnarztOffer.regularPrice}
                </span>{" "}
                regulär
              </p>
              <p className="mt-2 text-5xl font-extrabold text-[#5b21b6]">
                {websiteZahnarztOffer.actionPrice}
              </p>
              <p className="mt-1 text-sm font-medium text-navy">netto, einmalig</p>
              <p className="mx-auto mt-3 inline-block rounded bg-[#7c3aed] px-3 py-1 text-xs font-bold text-white">
                Sie sparen {websiteZahnarztOffer.savings}
              </p>
            </div>

            <ul className="mt-8 space-y-3">
              {websiteZahnarztBenefits.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-navy sm:text-base">
                  <Check
                    className="mt-0.5 h-5 w-5 shrink-0 text-[#5b21b6]"
                    strokeWidth={2.5}
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex items-start gap-3 rounded-xl border border-border bg-white px-4 py-3 text-sm text-muted">
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#5b21b6]" aria-hidden="true" />
              <p>
                Festpreis mit klar definiertem Leistungsumfang — keine versteckten Agenturkosten.
                Domain, Hosting und externe Anbietergebühren sind separat.
              </p>
            </div>

            <a
              href={ctaHref}
              className="btn-primary mt-8 flex w-full items-center justify-center gap-2 py-4 text-base"
            >
              {websiteZahnarztLp.ctaLabel}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>
      <LandingPageFooter />
    </>
  );
}
