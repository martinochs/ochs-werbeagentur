import Link from "next/link";
import { ProfilePhoto } from "@/components/ProfilePhoto";
import { GoogleAdsExampleMockup } from "@/components/landing/GoogleAdsExampleMockup";
import { erstgespraechUrl } from "@/lib/cta";
import {
  googleAdsArztpraxisAbout,
  googleAdsArztpraxisBetreuung,
  googleAdsArztpraxisBudgetInfo,
  googleAdsArztpraxisCta,
  googleAdsArztpraxisExample,
  googleAdsArztpraxisFinalCta,
  googleAdsArztpraxisFaq,
  googleAdsArztpraxisHero,
  googleAdsArztpraxisLeadQuelle,
  googleAdsArztpraxisMeasurement,
  googleAdsArztpraxisPricing,
  googleAdsArztpraxisProblems,
  googleAdsArztpraxisProcess,
  googleAdsArztpraxisScope,
  googleAdsArztpraxisSpecialties,
  googleAdsArztpraxisStartoptimierung,
  googleAdsArztpraxisTrustBar,
  googleAdsArztpraxisWebsiteUpsell,
  googleAdsArztpraxisWhyAds,
  googleAdsArztpraxisWhyOchs,
} from "@/lib/content/google-ads-arztpraxis";
import { ArrowRight, Check } from "lucide-react";

const analyseUrl = erstgespraechUrl("google-ads", { quelle: googleAdsArztpraxisLeadQuelle });
const accent = "text-[#166534]";
const accentBg = "bg-[#f0fdf4]";
const accentBorder = "border-[#bbf7d0]";

type LpCtaProps = {
  href: string;
  section: string;
  className?: string;
  children: React.ReactNode;
};

function LpCta({ href, section, className = "btn-primary", children }: LpCtaProps) {
  return (
    <a
      href={href}
      data-lp-cta="google-ads-potenzialcheck"
      data-lp-section={section}
      className={className}
    >
      {children}
    </a>
  );
}

function CheckList({ items }: { items: readonly string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5 text-sm text-navy">
          <Check className={`mt-0.5 h-4 w-4 shrink-0 ${accent}`} strokeWidth={2.5} aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export function GoogleAdsArztpraxisLandingContent() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#f8fafc] py-14 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
          <h1 className="text-3xl font-bold leading-tight text-navy sm:text-4xl lg:text-[2.65rem]">
            {googleAdsArztpraxisHero.h1}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {googleAdsArztpraxisHero.subtitle}
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-navy">
            {googleAdsArztpraxisHero.intro}
          </p>
          <p className="mt-5 text-lg font-bold text-[#166534]">{googleAdsArztpraxisHero.priceHint}</p>
          <LpCta
            href={analyseUrl}
            section="hero"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#166534] px-8 py-4 text-base font-bold text-white hover:opacity-90"
          >
            {googleAdsArztpraxisCta.primary}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </LpCta>
          <p className="mt-3 text-sm text-muted">{googleAdsArztpraxisCta.subline}</p>
          <p className="mt-3">
            <a
              href="#leistungsumfang"
              className="text-sm font-semibold text-[#166534] underline-offset-2 hover:underline"
            >
              {googleAdsArztpraxisHero.scopeLinkLabel}
            </a>
          </p>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-y border-border bg-white py-5">
        <ul className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-6 gap-y-2 px-4 text-center text-xs font-semibold text-navy sm:text-sm lg:px-8">
          {googleAdsArztpraxisTrustBar.map((item) => (
            <li key={item} className="flex items-center gap-1.5">
              <Check className={`h-3.5 w-3.5 shrink-0 ${accent}`} aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Problem & Nutzen */}
      <section className="py-14 lg:py-16">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-navy sm:text-3xl">
            {googleAdsArztpraxisProblems.heading}
          </h2>
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wide text-muted">Herausforderungen</h3>
              <ul className="mt-4 space-y-4">
                {googleAdsArztpraxisProblems.challenges.map(({ title, text }) => (
                  <li key={title} className="rounded-xl border border-border bg-surface p-4">
                    <p className="font-bold text-navy">{title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{text}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wide text-[#166534]">Unsere Lösung</h3>
              <ul className="mt-4 space-y-4">
                {googleAdsArztpraxisProblems.solutions.map(({ title, text }) => (
                  <li key={title} className={`rounded-xl border ${accentBorder} ${accentBg} p-4`}>
                    <p className="font-bold text-navy">{title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Fachrichtungen */}
      <section className="border-t border-border bg-[#f8fafc] py-14 lg:py-16">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">{googleAdsArztpraxisSpecialties.heading}</h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-muted">{googleAdsArztpraxisSpecialties.text}</p>
          <ul className="mt-6 flex flex-wrap gap-3">
            {googleAdsArztpraxisSpecialties.examples.map((item) => (
              <li
                key={item}
                className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-semibold text-navy"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Anzeigenbeispiel */}
      <section className="py-14 lg:py-16">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-navy sm:text-3xl">{googleAdsArztpraxisExample.heading}</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted lg:hidden">
                {googleAdsArztpraxisExample.disclaimer}
              </p>
            </div>
            <GoogleAdsExampleMockup
              disclaimer={googleAdsArztpraxisExample.disclaimer}
              searchQuery={googleAdsArztpraxisExample.searchQuery}
              practiceName={googleAdsArztpraxisExample.practiceName}
              adText={googleAdsArztpraxisExample.adText}
            />
          </div>
        </div>
      </section>

      {/* Leistungsumfang */}
      <section id="leistungsumfang" className="scroll-mt-24 border-t border-border bg-[#f8fafc] py-14 lg:py-16">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">{googleAdsArztpraxisScope.heading}</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-border bg-white p-6">
              <h3 className="text-base font-bold text-navy">Strategie & Vorbereitung</h3>
              <div className="mt-4">
                <CheckList items={googleAdsArztpraxisScope.strategy} />
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-white p-6">
              <h3 className="text-base font-bold text-navy">Kampagnenerstellung</h3>
              <div className="mt-4">
                <CheckList items={googleAdsArztpraxisScope.creation} />
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-white p-6">
              <h3 className="text-base font-bold text-navy">Messung & Optimierung</h3>
              <div className="mt-4">
                <CheckList items={googleAdsArztpraxisScope.measurement} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 30 Tage Startoptimierung */}
      <section className="py-10">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <div className={`rounded-xl border ${accentBorder} ${accentBg} px-5 py-6`}>
            <h2 className="text-lg font-bold text-navy">{googleAdsArztpraxisStartoptimierung.heading}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">{googleAdsArztpraxisStartoptimierung.text}</p>
            <p className="mt-3 text-sm font-semibold text-[#166534]">{googleAdsArztpraxisStartoptimierung.note}</p>
          </div>
        </div>
      </section>

      {/* Warum Google Ads */}
      <section className="border-t border-border py-14 lg:py-16">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">{googleAdsArztpraxisWhyAds.heading}</h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-muted">{googleAdsArztpraxisWhyAds.intro}</p>
          <ul className="mt-8 grid gap-5 sm:grid-cols-3">
            {googleAdsArztpraxisWhyAds.items.map(({ title, text }) => (
              <li key={title} className="rounded-xl border border-border p-5">
                <h3 className="font-bold text-navy">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Warum OCHS */}
      <section className="border-t border-border bg-[#f8fafc] py-14 lg:py-16">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">{googleAdsArztpraxisWhyOchs.heading}</h2>
          <ul className="mt-8 grid gap-5 sm:grid-cols-2">
            {googleAdsArztpraxisWhyOchs.items.map(({ title, text }) => (
              <li key={title} className="rounded-xl border border-border bg-white p-5">
                <h3 className="font-bold text-navy">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Mariia Ochs */}
      <section className="py-14 lg:py-16">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <div className="grid items-center gap-8 lg:grid-cols-[240px_1fr]">
            <ProfilePhoto
              src={googleAdsArztpraxisAbout.imageSrc}
              alt={googleAdsArztpraxisAbout.imageAlt}
              className="mx-auto aspect-square w-full max-w-[240px] rounded-2xl shadow-md lg:mx-0"
              sizes="240px"
            />
            <div>
              <h2 className="text-2xl font-bold text-navy">{googleAdsArztpraxisAbout.heading}</h2>
              <p className="mt-4 leading-relaxed text-muted">{googleAdsArztpraxisAbout.text}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted">{googleAdsArztpraxisAbout.extra}</p>
              <LpCta
                href={analyseUrl}
                section="about"
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#166534] px-6 py-3 font-bold text-white hover:opacity-90"
              >
                {googleAdsArztpraxisCta.primary}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </LpCta>
            </div>
          </div>
        </div>
      </section>

      {/* Ablauf */}
      <section className="border-t border-border bg-[#f8fafc] py-14 lg:py-16">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">{googleAdsArztpraxisProcess.heading}</h2>
          <ol className="mt-8 list-none space-y-6">
            {googleAdsArztpraxisProcess.steps.map((step, index) => (
              <li key={step.title} className="flex gap-4">
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f0fdf4] text-sm font-bold text-[#166534]"
                  aria-hidden="true"
                >
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-bold text-navy">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Preisblock */}
      <section className="py-14 lg:py-16">
        <div className="mx-auto max-w-lg px-4 lg:px-8">
          <div className={`rounded-2xl border ${accentBorder} bg-white p-6 text-center shadow-sm sm:p-8`}>
            <h2 className="text-xl font-bold text-navy sm:text-2xl">{googleAdsArztpraxisPricing.heading}</h2>
            <p className="mt-4 text-4xl font-extrabold text-[#166534]">{googleAdsArztpraxisPricing.price}</p>
            <p className="mt-2 text-sm font-semibold text-navy">{googleAdsArztpraxisPricing.includesNote}</p>
            <ul className="mt-6 space-y-2 text-left text-sm text-navy">
              {googleAdsArztpraxisPricing.includes.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Check className={`mt-0.5 h-4 w-4 shrink-0 ${accent}`} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm font-medium text-amber-950">
              {googleAdsArztpraxisPricing.budgetNote}
            </p>
            <LpCta
              href={analyseUrl}
              section="pricing"
              className="mt-8 flex w-full items-center justify-center gap-2 rounded-lg bg-[#166534] py-4 text-base font-bold text-white hover:opacity-90"
            >
              {googleAdsArztpraxisCta.primary}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </LpCta>
            <p className="mt-3 text-sm text-muted">{googleAdsArztpraxisCta.subline}</p>
          </div>
        </div>
      </section>

      {/* Betreuung Upsell */}
      <section className="py-10">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <div className="rounded-xl border border-border bg-surface px-5 py-5 text-sm">
            <h2 className="text-base font-bold text-navy">{googleAdsArztpraxisBetreuung.heading}</h2>
            <p className="mt-2 text-muted">{googleAdsArztpraxisBetreuung.text}</p>
            <p className="mt-2 text-lg font-bold text-navy">{googleAdsArztpraxisBetreuung.price}</p>
            <p className="mt-2 text-xs font-semibold text-[#166534]">{googleAdsArztpraxisBetreuung.optionalNote}</p>
            <ul className="mt-3 space-y-1 text-muted">
              {googleAdsArztpraxisBetreuung.benefits.map((item) => (
                <li key={item}>· {item}</li>
              ))}
            </ul>
            <Link
              href={googleAdsArztpraxisBetreuung.linkHref}
              className="mt-3 inline-block font-semibold text-navy underline-offset-2 hover:underline"
            >
              {googleAdsArztpraxisBetreuung.linkLabel}
            </Link>
          </div>
        </div>
      </section>

      {/* Werbebudget Info */}
      <section className="pb-10">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <div className="rounded-xl border border-border px-5 py-5 text-sm">
            <h2 className="text-base font-bold text-navy">{googleAdsArztpraxisBudgetInfo.heading}</h2>
            <p className="mt-2 text-muted">{googleAdsArztpraxisBudgetInfo.text}</p>
            <p className="mt-2 text-muted">{googleAdsArztpraxisBudgetInfo.extra}</p>
          </div>
        </div>
      </section>

      {/* Conversion-Messung */}
      <section className="pb-10">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <div className="rounded-xl border border-dashed border-border px-5 py-5 text-sm">
            <h2 className="text-base font-bold text-navy">{googleAdsArztpraxisMeasurement.heading}</h2>
            <p className="mt-2 text-muted">{googleAdsArztpraxisMeasurement.text}</p>
            <p className="mt-2 text-muted">{googleAdsArztpraxisMeasurement.note}</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border py-14 lg:py-16">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <h2 className="text-2xl font-bold text-navy">Häufige Fragen</h2>
          <div className="mt-6 divide-y divide-border rounded-xl border border-border">
            {googleAdsArztpraxisFaq.map((item) => (
              <details key={item.question} className="group px-4 py-1">
                <summary className="cursor-pointer list-none py-4 font-semibold text-navy [&::-webkit-details-marker]:hidden">
                  {item.question}
                </summary>
                <p className="pb-4 text-sm leading-relaxed text-muted">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-border bg-[#f8fafc] py-14 lg:py-16">
        <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">{googleAdsArztpraxisFinalCta.heading}</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted">{googleAdsArztpraxisFinalCta.text}</p>
          <LpCta
            href={analyseUrl}
            section="final"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#166534] px-8 py-4 text-base font-bold text-white hover:opacity-90"
          >
            {googleAdsArztpraxisCta.primary}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </LpCta>
          <p className="mt-3 text-sm text-muted">{googleAdsArztpraxisCta.subline}</p>
        </div>
      </section>

      {/* Website Upsell */}
      <section className="pb-14">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <p className="text-center text-xs text-muted">
            {googleAdsArztpraxisWebsiteUpsell.text}{" "}
            <Link
              href={googleAdsArztpraxisWebsiteUpsell.linkHref}
              className="font-medium text-navy underline-offset-2 hover:underline"
            >
              {googleAdsArztpraxisWebsiteUpsell.linkLabel}
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
