import Link from "next/link";
import { ProfilePhoto } from "@/components/ProfilePhoto";
import { GoogleAdsExampleMockup } from "@/components/landing/GoogleAdsExampleMockup";
import { erstgespraechUrl } from "@/lib/cta";
import {
  googleAdsZahnarztAbout,
  googleAdsZahnarztBetreuung,
  googleAdsZahnarztBudgetInfo,
  googleAdsZahnarztCta,
  googleAdsZahnarztExample,
  googleAdsZahnarztFinalCta,
  googleAdsZahnarztFaq,
  googleAdsZahnarztHero,
  googleAdsZahnarztLeadQuelle,
  googleAdsZahnarztMeasurement,
  googleAdsZahnarztPricing,
  googleAdsZahnarztProblems,
  googleAdsZahnarztProcess,
  googleAdsZahnarztScope,
  googleAdsZahnarztServices,
  googleAdsZahnarztStartoptimierung,
  googleAdsZahnarztTrustBar,
  googleAdsZahnarztWebsiteUpsell,
  googleAdsZahnarztWhyAds,
  googleAdsZahnarztWhyOchs,
} from "@/lib/content/google-ads-zahnarzt";
import { ArrowRight, Check } from "lucide-react";

const analyseUrl = erstgespraechUrl("google-ads", { quelle: googleAdsZahnarztLeadQuelle });
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

export function GoogleAdsZahnarztLandingContent() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#f8fafc] py-14 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
          <h1 className="text-3xl font-bold leading-tight text-navy sm:text-4xl lg:text-[2.65rem]">
            {googleAdsZahnarztHero.h1}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {googleAdsZahnarztHero.subtitle}
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-navy">
            {googleAdsZahnarztHero.intro}
          </p>
          <p className="mt-5 text-lg font-bold text-[#166534]">{googleAdsZahnarztHero.priceHint}</p>
          <LpCta
            href={analyseUrl}
            section="hero"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#166534] px-8 py-4 text-base font-bold text-white hover:opacity-90"
          >
            {googleAdsZahnarztCta.primary}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </LpCta>
          <p className="mt-3 text-sm text-muted">{googleAdsZahnarztCta.subline}</p>
          <p className="mt-3">
            <a
              href="#leistungsumfang"
              className="text-sm font-semibold text-[#166534] underline-offset-2 hover:underline"
            >
              {googleAdsZahnarztHero.scopeLinkLabel}
            </a>
          </p>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-y border-border bg-white py-5">
        <ul className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-6 gap-y-2 px-4 text-center text-xs font-semibold text-navy sm:text-sm lg:px-8">
          {googleAdsZahnarztTrustBar.map((item) => (
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
            {googleAdsZahnarztProblems.heading}
          </h2>
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wide text-muted">Herausforderungen</h3>
              <ul className="mt-4 space-y-4">
                {googleAdsZahnarztProblems.challenges.map(({ title, text }) => (
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
                {googleAdsZahnarztProblems.solutions.map(({ title, text }) => (
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

      {/* Leistungsschwerpunkte */}
      <section className="border-t border-border bg-[#f8fafc] py-14 lg:py-16">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">{googleAdsZahnarztServices.heading}</h2>
          <p className="mt-3 max-w-2xl text-muted">{googleAdsZahnarztServices.intro}</p>
          <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {googleAdsZahnarztServices.items.map((item) => (
              <li
                key={item}
                className="rounded-lg border border-border bg-white px-3 py-2.5 text-center text-sm font-semibold text-navy"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-muted">{googleAdsZahnarztServices.note}</p>
        </div>
      </section>

      {/* Anzeigenbeispiel */}
      <section className="py-14 lg:py-16">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-navy sm:text-3xl">{googleAdsZahnarztExample.heading}</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted lg:hidden">
                {googleAdsZahnarztExample.disclaimer}
              </p>
            </div>
            <GoogleAdsExampleMockup disclaimer={googleAdsZahnarztExample.disclaimer} />
          </div>
        </div>
      </section>

      {/* Leistungsumfang */}
      <section id="leistungsumfang" className="scroll-mt-24 border-t border-border bg-[#f8fafc] py-14 lg:py-16">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">{googleAdsZahnarztScope.heading}</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-border bg-white p-6">
              <h3 className="text-base font-bold text-navy">Strategie & Vorbereitung</h3>
              <div className="mt-4">
                <CheckList items={googleAdsZahnarztScope.strategy} />
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-white p-6">
              <h3 className="text-base font-bold text-navy">Kampagnenerstellung</h3>
              <div className="mt-4">
                <CheckList items={googleAdsZahnarztScope.creation} />
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-white p-6">
              <h3 className="text-base font-bold text-navy">Messung & Optimierung</h3>
              <div className="mt-4">
                <CheckList items={googleAdsZahnarztScope.measurement} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 30 Tage Startoptimierung */}
      <section className="py-10">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <div className={`rounded-xl border ${accentBorder} ${accentBg} px-5 py-6`}>
            <h2 className="text-lg font-bold text-navy">{googleAdsZahnarztStartoptimierung.heading}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">{googleAdsZahnarztStartoptimierung.text}</p>
            <p className="mt-3 text-sm font-semibold text-[#166534]">{googleAdsZahnarztStartoptimierung.note}</p>
          </div>
        </div>
      </section>

      {/* Warum Google Ads */}
      <section className="border-t border-border py-14 lg:py-16">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">{googleAdsZahnarztWhyAds.heading}</h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-muted">{googleAdsZahnarztWhyAds.intro}</p>
          <ul className="mt-8 grid gap-5 sm:grid-cols-3">
            {googleAdsZahnarztWhyAds.items.map(({ title, text }) => (
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
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">{googleAdsZahnarztWhyOchs.heading}</h2>
          <ul className="mt-8 grid gap-5 sm:grid-cols-2">
            {googleAdsZahnarztWhyOchs.items.map(({ title, text }) => (
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
              src={googleAdsZahnarztAbout.imageSrc}
              alt={googleAdsZahnarztAbout.imageAlt}
              className="mx-auto aspect-square w-full max-w-[240px] rounded-2xl shadow-md lg:mx-0"
              sizes="240px"
            />
            <div>
              <h2 className="text-2xl font-bold text-navy">{googleAdsZahnarztAbout.heading}</h2>
              <p className="mt-4 leading-relaxed text-muted">{googleAdsZahnarztAbout.text}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted">{googleAdsZahnarztAbout.extra}</p>
              <LpCta
                href={analyseUrl}
                section="about"
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#166534] px-6 py-3 font-bold text-white hover:opacity-90"
              >
                {googleAdsZahnarztCta.primary}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </LpCta>
            </div>
          </div>
        </div>
      </section>

      {/* Ablauf */}
      <section className="border-t border-border bg-[#f8fafc] py-14 lg:py-16">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">{googleAdsZahnarztProcess.heading}</h2>
          <ol className="mt-8 list-none space-y-6">
            {googleAdsZahnarztProcess.steps.map((step, index) => (
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
            <h2 className="text-xl font-bold text-navy sm:text-2xl">{googleAdsZahnarztPricing.heading}</h2>
            <p className="mt-4 text-4xl font-extrabold text-[#166534]">{googleAdsZahnarztPricing.price}</p>
            <p className="mt-2 text-sm font-semibold text-navy">{googleAdsZahnarztPricing.includesNote}</p>
            <ul className="mt-6 space-y-2 text-left text-sm text-navy">
              {googleAdsZahnarztPricing.includes.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Check className={`mt-0.5 h-4 w-4 shrink-0 ${accent}`} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm font-medium text-amber-950">
              {googleAdsZahnarztPricing.budgetNote}
            </p>
            <LpCta
              href={analyseUrl}
              section="pricing"
              className="mt-8 flex w-full items-center justify-center gap-2 rounded-lg bg-[#166534] py-4 text-base font-bold text-white hover:opacity-90"
            >
              {googleAdsZahnarztCta.primary}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </LpCta>
            <p className="mt-3 text-sm text-muted">{googleAdsZahnarztCta.subline}</p>
          </div>
        </div>
      </section>

      {/* Betreuung Upsell */}
      <section className="py-10">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <div className="rounded-xl border border-border bg-surface px-5 py-5 text-sm">
            <h2 className="text-base font-bold text-navy">{googleAdsZahnarztBetreuung.heading}</h2>
            <p className="mt-2 text-muted">{googleAdsZahnarztBetreuung.text}</p>
            <p className="mt-2 text-lg font-bold text-navy">{googleAdsZahnarztBetreuung.price}</p>
            <p className="mt-2 text-xs font-semibold text-[#166534]">{googleAdsZahnarztBetreuung.optionalNote}</p>
            <ul className="mt-3 space-y-1 text-muted">
              {googleAdsZahnarztBetreuung.benefits.map((item) => (
                <li key={item}>· {item}</li>
              ))}
            </ul>
            <Link
              href={googleAdsZahnarztBetreuung.linkHref}
              className="mt-3 inline-block font-semibold text-navy underline-offset-2 hover:underline"
            >
              {googleAdsZahnarztBetreuung.linkLabel}
            </Link>
          </div>
        </div>
      </section>

      {/* Werbebudget Info */}
      <section className="pb-10">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <div className="rounded-xl border border-border px-5 py-5 text-sm">
            <h2 className="text-base font-bold text-navy">{googleAdsZahnarztBudgetInfo.heading}</h2>
            <p className="mt-2 text-muted">{googleAdsZahnarztBudgetInfo.text}</p>
            <p className="mt-2 text-muted">{googleAdsZahnarztBudgetInfo.extra}</p>
          </div>
        </div>
      </section>

      {/* Conversion-Messung */}
      <section className="pb-10">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <div className="rounded-xl border border-dashed border-border px-5 py-5 text-sm">
            <h2 className="text-base font-bold text-navy">{googleAdsZahnarztMeasurement.heading}</h2>
            <p className="mt-2 text-muted">{googleAdsZahnarztMeasurement.text}</p>
            <p className="mt-2 text-muted">{googleAdsZahnarztMeasurement.note}</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border py-14 lg:py-16">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <h2 className="text-2xl font-bold text-navy">Häufige Fragen</h2>
          <div className="mt-6 divide-y divide-border rounded-xl border border-border">
            {googleAdsZahnarztFaq.map((item) => (
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
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">{googleAdsZahnarztFinalCta.heading}</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted">{googleAdsZahnarztFinalCta.text}</p>
          <LpCta
            href={analyseUrl}
            section="final"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#166534] px-8 py-4 text-base font-bold text-white hover:opacity-90"
          >
            {googleAdsZahnarztCta.primary}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </LpCta>
          <p className="mt-3 text-sm text-muted">{googleAdsZahnarztCta.subline}</p>
        </div>
      </section>

      {/* Website Upsell */}
      <section className="pb-14">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <p className="text-center text-xs text-muted">
            {googleAdsZahnarztWebsiteUpsell.text}{" "}
            <Link
              href={googleAdsZahnarztWebsiteUpsell.linkHref}
              className="font-medium text-navy underline-offset-2 hover:underline"
            >
              {googleAdsZahnarztWebsiteUpsell.linkLabel}
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
