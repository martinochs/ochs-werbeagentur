import Image from "next/image";
import Link from "next/link";
import { ProfilePhoto } from "@/components/ProfilePhoto";
import { erstgespraechUrl } from "@/lib/cta";
import {
  websiteArztpraxisAbout,
  websiteArztpraxisAdsUpsell,
  websiteArztpraxisBetreuung,
  websiteArztpraxisCta,
  websiteArztpraxisDesign,
  websiteArztpraxisFinalCta,
  websiteArztpraxisFaq,
  websiteArztpraxisHero,
  websiteArztpraxisLeadQuelle,
  websiteArztpraxisPricing,
  websiteArztpraxisProblems,
  websiteArztpraxisProcess,
  websiteArztpraxisScope,
  websiteArztpraxisSpecialties,
  websiteArztpraxisTrustBar,
  websiteArztpraxisWhy,
} from "@/lib/content/website-arztpraxis";
import { ArrowRight, Check } from "lucide-react";

const analyseUrl = erstgespraechUrl("website", { quelle: websiteArztpraxisLeadQuelle });
const kombiUrl = erstgespraechUrl("kombi", { quelle: websiteArztpraxisLeadQuelle });
const accent = "text-[#5b21b6]";

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
      data-lp-cta="website-analyse"
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

export function WebsiteArztpraxisLandingContent() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#f8fafc] py-14 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
          <h1 className="text-3xl font-bold leading-tight text-navy sm:text-4xl lg:text-[2.65rem]">
            {websiteArztpraxisHero.h1}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {websiteArztpraxisHero.subtitle}
          </p>
          <p className="mt-5 text-lg font-bold text-[#5b21b6]">{websiteArztpraxisHero.priceHint}</p>
          <p className="mt-2 text-sm text-muted">{websiteArztpraxisHero.trustBullets}</p>
          <LpCta
            href={analyseUrl}
            section="hero"
            className="btn-primary mt-8 inline-flex items-center gap-2 px-8 py-4 text-base"
          >
            {websiteArztpraxisCta.primary}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </LpCta>
          <p className="mt-3">
            <a
              href="#designbeispiele"
              className="text-sm font-semibold text-[#5b21b6] underline-offset-2 hover:underline"
            >
              {websiteArztpraxisHero.designLinkLabel}
            </a>
          </p>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-y border-border bg-white py-5">
        <ul className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-6 gap-y-2 px-4 text-center text-xs font-semibold text-navy sm:text-sm lg:px-8">
          {websiteArztpraxisTrustBar.map((item) => (
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
            {websiteArztpraxisProblems.heading}
          </h2>
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wide text-muted">Herausforderungen</h3>
              <ul className="mt-4 space-y-4">
                {websiteArztpraxisProblems.challenges.map(({ title, text }) => (
                  <li key={title} className="rounded-xl border border-border bg-surface p-4">
                    <p className="font-bold text-navy">{title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{text}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wide text-[#5b21b6]">Unsere Lösung</h3>
              <ul className="mt-4 space-y-4">
                {websiteArztpraxisProblems.solutions.map(({ title, text }) => (
                  <li
                    key={title}
                    className="rounded-xl border border-[#ddd6fe] bg-[#f5f3ff] p-4"
                  >
                    <p className="font-bold text-navy">{title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Designbeispiele */}
      <section id="designbeispiele" className="scroll-mt-24 border-t border-border bg-[#f8fafc] py-14 lg:py-16">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">{websiteArztpraxisDesign.heading}</h2>
          <p className="mt-2 text-xs font-medium text-muted">{websiteArztpraxisDesign.disclaimer}</p>
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            {websiteArztpraxisDesign.examples.map((example) => (
              <article
                key={example.href}
                className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm"
              >
                <div className="relative aspect-[16/10] w-full bg-surface">
                  <Image
                    src={example.image}
                    alt={example.imageAlt}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 480px"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-navy">{example.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{example.description}</p>
                  <Link
                    href={example.href}
                    className="mt-4 inline-flex items-center gap-2 rounded-lg bg-[#5b21b6] px-5 py-2.5 text-sm font-bold text-white hover:opacity-90"
                  >
                    {websiteArztpraxisDesign.buttonLabel}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Fachrichtungen */}
      <section className="py-14 lg:py-16">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">
            {websiteArztpraxisSpecialties.heading}
          </h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-muted">{websiteArztpraxisSpecialties.text}</p>
          <ul className="mt-6 flex flex-wrap gap-3">
            {websiteArztpraxisSpecialties.examples.map((item) => (
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

      {/* Leistungsumfang */}
      <section className="border-t border-border bg-[#f8fafc] py-14 lg:py-16">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">{websiteArztpraxisScope.heading}</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-white p-6">
              <h3 className="text-base font-bold text-navy">Design & Inhalte</h3>
              <div className="mt-4">
                <CheckList items={websiteArztpraxisScope.design} />
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-white p-6">
              <h3 className="text-base font-bold text-navy">Technik & Sichtbarkeit</h3>
              <div className="mt-4">
                <CheckList items={websiteArztpraxisScope.tech} />
              </div>
            </div>
          </div>
          <p className="mt-6 text-sm text-muted">{websiteArztpraxisScope.footnote}</p>
        </div>
      </section>

      {/* Warum OCHS */}
      <section className="py-14 lg:py-16">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">{websiteArztpraxisWhy.heading}</h2>
          <ul className="mt-8 grid gap-5 sm:grid-cols-2">
            {websiteArztpraxisWhy.items.map(({ title, text }) => (
              <li key={title} className="rounded-xl border border-border p-5">
                <h3 className="font-bold text-navy">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Mariia Ochs */}
      <section className="border-t border-border bg-[#f8fafc] py-14 lg:py-16">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <div className="grid items-center gap-8 lg:grid-cols-[240px_1fr]">
            <ProfilePhoto
              src={websiteArztpraxisAbout.imageSrc}
              alt={websiteArztpraxisAbout.imageAlt}
              className="mx-auto aspect-square w-full max-w-[240px] rounded-2xl shadow-md lg:mx-0"
              sizes="240px"
            />
            <div>
              <h2 className="text-2xl font-bold text-navy">{websiteArztpraxisAbout.heading}</h2>
              <p className="mt-4 leading-relaxed text-muted">{websiteArztpraxisAbout.text}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted">{websiteArztpraxisAbout.extra}</p>
              <LpCta
                href={analyseUrl}
                section="about"
                className="btn-primary mt-6 inline-flex items-center gap-2 px-6 py-3"
              >
                {websiteArztpraxisCta.primary}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </LpCta>
            </div>
          </div>
        </div>
      </section>

      {/* Ablauf */}
      <section className="py-14 lg:py-16">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">{websiteArztpraxisProcess.heading}</h2>
          <ol className="mt-8 list-none space-y-6">
            {websiteArztpraxisProcess.steps.map((step, index) => (
              <li key={step.title} className="flex gap-4">
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f5f3ff] text-sm font-bold text-[#5b21b6]"
                  aria-hidden="true"
                >
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-bold text-navy">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{step.text}</p>
                  {"note" in step && step.note && (
                    <p className="mt-1 text-sm leading-relaxed text-muted">{step.note}</p>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Preisblock */}
      <section className="border-t border-border bg-[#f8fafc] py-14 lg:py-16">
        <div className="mx-auto max-w-lg px-4 lg:px-8">
          <div className="rounded-2xl border border-[#ddd6fe] bg-white p-6 text-center shadow-sm sm:p-8">
            <h2 className="text-xl font-bold text-navy sm:text-2xl">{websiteArztpraxisPricing.heading}</h2>
            <p className="mt-4 text-sm text-muted">
              Regulär:{" "}
              <span className="line-through decoration-red-500 decoration-2">
                {websiteArztpraxisPricing.regular}
              </span>
            </p>
            <p className="mt-2 text-4xl font-extrabold text-[#5b21b6]">{websiteArztpraxisPricing.action}</p>
            <ul className="mt-6 space-y-2 text-left text-sm text-navy">
              {websiteArztpraxisPricing.includes.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Check className={`mt-0.5 h-4 w-4 shrink-0 ${accent}`} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <LpCta
              href={analyseUrl}
              section="pricing"
              className="btn-primary mt-8 flex w-full items-center justify-center gap-2 py-4 text-base"
            >
              {websiteArztpraxisCta.primary}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </LpCta>
            <p className="mt-3 text-sm text-muted">{websiteArztpraxisCta.subline}</p>
          </div>
        </div>
      </section>

      {/* Betreuung Upsell */}
      <section className="py-10">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <div className="rounded-xl border border-border bg-surface px-5 py-5 text-sm">
            <h2 className="text-base font-bold text-navy">{websiteArztpraxisBetreuung.heading}</h2>
            <p className="mt-2 text-muted">{websiteArztpraxisBetreuung.text}</p>
            <p className="mt-2 text-xs font-semibold text-[#5b21b6]">
              {websiteArztpraxisBetreuung.optionalNote}
            </p>
            <ul className="mt-3 space-y-1 text-muted">
              {websiteArztpraxisBetreuung.benefits.map((item) => (
                <li key={item}>· {item}</li>
              ))}
            </ul>
            <Link
              href={websiteArztpraxisBetreuung.linkHref}
              className="mt-3 inline-block font-semibold text-navy underline-offset-2 hover:underline"
            >
              {websiteArztpraxisBetreuung.linkLabel}
            </Link>
          </div>
        </div>
      </section>

      {/* Google Ads Upsell */}
      <section className="pb-10">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <div className="rounded-xl border border-dashed border-border px-5 py-5 text-sm">
            <h2 className="text-base font-bold text-navy">{websiteArztpraxisAdsUpsell.heading}</h2>
            <p className="mt-2 text-muted">{websiteArztpraxisAdsUpsell.text}</p>
            <a
              href={kombiUrl}
              data-lp-cta="kombi-analyse"
              data-lp-section="ads-upsell"
              className="mt-3 inline-block font-semibold text-navy underline-offset-2 hover:underline"
            >
              {websiteArztpraxisAdsUpsell.linkLabel}
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border py-14 lg:py-16">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <h2 className="text-2xl font-bold text-navy">Häufige Fragen</h2>
          <div className="mt-6 divide-y divide-border rounded-xl border border-border">
            {websiteArztpraxisFaq.map((item) => (
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
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">{websiteArztpraxisFinalCta.heading}</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted">{websiteArztpraxisFinalCta.text}</p>
          <LpCta
            href={analyseUrl}
            section="final"
            className="btn-primary mt-8 inline-flex items-center gap-2 px-8 py-4 text-base"
          >
            {websiteArztpraxisCta.primary}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </LpCta>
          <p className="mt-3 text-sm text-muted">{websiteArztpraxisCta.subline}</p>
        </div>
      </section>
    </>
  );
}
