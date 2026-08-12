import Image from "next/image";
import Link from "next/link";
import { ProfilePhoto } from "@/components/ProfilePhoto";
import { erstgespraechUrl } from "@/lib/cta";
import {
  websiteZahnarztAbout,
  websiteZahnarztAdsUpsell,
  websiteZahnarztBetreuung,
  websiteZahnarztCta,
  websiteZahnarztDesign,
  websiteZahnarztFinalCta,
  websiteZahnarztFaq,
  websiteZahnarztHero,
  websiteZahnarztLeadQuelle,
  websiteZahnarztPricing,
  websiteZahnarztProblems,
  websiteZahnarztProcess,
  websiteZahnarztScope,
  websiteZahnarztServices,
  websiteZahnarztTrustBar,
  websiteZahnarztWhy,
} from "@/lib/content/website-zahnarzt";
import { ArrowRight, Check } from "lucide-react";

const analyseUrl = erstgespraechUrl("website", { quelle: websiteZahnarztLeadQuelle });
const kombiUrl = erstgespraechUrl("kombi", { quelle: websiteZahnarztLeadQuelle });
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

export function WebsiteZahnarztLandingContent() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#f7f9fc] py-12 md:py-14 lg:py-16 xl:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2 md:gap-10 lg:gap-14 lg:px-8">
          <div className="text-left">
            <h1 className="max-w-[34rem] text-[1.75rem] font-bold leading-[1.15] text-navy sm:text-4xl lg:text-[2.75rem] xl:text-5xl">
              {websiteZahnarztHero.h1.replace(/\.$/, "")}
              <span className="text-[#5b21b6]">.</span>
            </h1>
            <p className="mt-5 max-w-[36rem] text-base leading-relaxed text-[#5b6472] sm:text-lg sm:leading-relaxed">
              {websiteZahnarztHero.subtitle}
            </p>
            <p className="mt-6 flex flex-wrap items-baseline gap-x-2 gap-y-1">
              <span className="text-xl font-bold text-[#5b21b6] sm:text-2xl">
                {websiteZahnarztHero.priceCurrent}
              </span>
              <span className="text-base text-[#5b6472]">
                statt{" "}
                <span className="line-through decoration-[#5b6472]/60">
                  {websiteZahnarztHero.priceCompare}
                </span>{" "}
                {websiteZahnarztHero.priceSuffix}
              </span>
            </p>
            <p className="mt-3 text-sm text-[#5b6472]">{websiteZahnarztHero.trustBullets}</p>
            <LpCta
              href={analyseUrl}
              section="hero"
              className="btn-primary mt-8 inline-flex w-full items-center justify-center gap-2 px-8 py-4 text-base sm:w-auto"
            >
              {websiteZahnarztCta.primary}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </LpCta>
            <p className="mt-4">
              <a
                href="#designbeispiele"
                className="text-sm font-semibold text-[#5b21b6] underline-offset-2 hover:underline"
              >
                {websiteZahnarztHero.designLinkLabel}
              </a>
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-xl md:max-w-none">
            <div className="relative aspect-[16/11] overflow-hidden rounded-3xl rounded-br-[4.5rem] shadow-sm sm:aspect-[4/3] md:aspect-[5/6] md:min-h-[420px] lg:min-h-[480px] lg:rounded-br-[5.5rem]">
              <Image
                src={websiteZahnarztHero.heroImage}
                alt={websiteZahnarztHero.heroImageAlt}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-[center_30%]"
              />
              <div
                className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#f7f9fc] to-transparent sm:w-1/5"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-y border-border bg-white py-8 lg:py-10">
        <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-x-4 gap-y-6 px-4 sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-6 lg:px-8">
          {websiteZahnarztTrustBar.map((item) => (
            <li
              key={item}
              className="flex flex-col items-center gap-2.5 text-center sm:flex-row sm:items-start sm:text-left"
            >
              <span
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#ddd6fe] bg-[#f5f3ff]"
                aria-hidden="true"
              >
                <Check className="h-3.5 w-3.5 text-[#5b21b6]" strokeWidth={2.5} />
              </span>
              <span className="text-xs font-semibold leading-snug text-navy sm:text-sm">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Problem & Nutzen */}
      <section className="py-14 lg:py-16">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-navy sm:text-3xl">
            {websiteZahnarztProblems.heading}
          </h2>
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wide text-muted">Herausforderungen</h3>
              <ul className="mt-4 space-y-4">
                {websiteZahnarztProblems.challenges.map(({ title, text }) => (
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
                {websiteZahnarztProblems.solutions.map(({ title, text }) => (
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
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">{websiteZahnarztDesign.heading}</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {websiteZahnarztDesign.examples.map((example) => (
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
                    {websiteZahnarztDesign.buttonLabel}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-4 text-sm text-muted">
            Weitere Designbeispiele:{" "}
            {websiteZahnarztDesign.moreExamples.map((item, index) => (
              <span key={item.href}>
                {index > 0 && " · "}
                <Link href={item.href} className="font-medium text-navy underline-offset-2 hover:underline">
                  {item.label}
                </Link>
              </span>
            ))}
          </p>
        </div>
      </section>

      {/* Leistungsbeispiele */}
      <section className="py-14 lg:py-16">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">{websiteZahnarztServices.heading}</h2>
          <p className="mt-3 max-w-2xl text-muted">{websiteZahnarztServices.intro}</p>
          <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {websiteZahnarztServices.items.map((item) => (
              <li
                key={item}
                className="rounded-lg border border-border bg-white px-3 py-2.5 text-center text-sm font-semibold text-navy"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-muted">{websiteZahnarztServices.note}</p>
        </div>
      </section>

      {/* Leistungsumfang */}
      <section className="border-t border-border bg-[#f8fafc] py-14 lg:py-16">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">{websiteZahnarztScope.heading}</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-white p-6">
              <h3 className="text-base font-bold text-navy">Design & Inhalte</h3>
              <div className="mt-4">
                <CheckList items={websiteZahnarztScope.design} />
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-white p-6">
              <h3 className="text-base font-bold text-navy">Technik & Sichtbarkeit</h3>
              <div className="mt-4">
                <CheckList items={websiteZahnarztScope.tech} />
              </div>
            </div>
          </div>
          <p className="mt-6 text-sm text-muted">{websiteZahnarztScope.footnote}</p>
        </div>
      </section>

      {/* Warum OCHS */}
      <section className="py-14 lg:py-16">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">{websiteZahnarztWhy.heading}</h2>
          <ul className="mt-8 grid gap-5 sm:grid-cols-2">
            {websiteZahnarztWhy.items.map(({ title, text }) => (
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
              src={websiteZahnarztAbout.imageSrc}
              alt={websiteZahnarztAbout.imageAlt}
              className="mx-auto aspect-square w-full max-w-[240px] rounded-2xl shadow-md lg:mx-0"
              sizes="240px"
            />
            <div>
              <h2 className="text-2xl font-bold text-navy">{websiteZahnarztAbout.heading}</h2>
              <p className="mt-4 text-muted leading-relaxed">{websiteZahnarztAbout.text}</p>
              <p className="mt-4 text-sm text-muted leading-relaxed">{websiteZahnarztAbout.extra}</p>
              <LpCta
                href={analyseUrl}
                section="about"
                className="btn-primary mt-6 inline-flex items-center gap-2 px-6 py-3"
              >
                {websiteZahnarztCta.primary}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </LpCta>
            </div>
          </div>
        </div>
      </section>

      {/* Ablauf */}
      <section className="py-14 lg:py-16">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">{websiteZahnarztProcess.heading}</h2>
          <ol className="mt-8 list-none space-y-6">
            {websiteZahnarztProcess.steps.map((step, index) => (
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
            <h2 className="text-xl font-bold text-navy sm:text-2xl">{websiteZahnarztPricing.heading}</h2>
            <p className="mt-4 text-sm text-muted">
              Regulär:{" "}
              <span className="line-through decoration-red-500 decoration-2">
                {websiteZahnarztPricing.regular}
              </span>
            </p>
            <p className="mt-2 text-4xl font-extrabold text-[#5b21b6]">{websiteZahnarztPricing.action}</p>
            <ul className="mt-6 space-y-2 text-left text-sm text-navy">
              {websiteZahnarztPricing.includes.map((item) => (
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
              {websiteZahnarztCta.primary}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </LpCta>
            <p className="mt-3 text-sm text-muted">{websiteZahnarztCta.subline}</p>
          </div>
        </div>
      </section>

      {/* Betreuung Upsell */}
      <section className="py-10">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <div className="rounded-xl border border-border bg-surface px-5 py-5 text-sm">
            <h2 className="text-base font-bold text-navy">{websiteZahnarztBetreuung.heading}</h2>
            <p className="mt-2 text-muted">{websiteZahnarztBetreuung.text}</p>
            <ul className="mt-3 space-y-1 text-muted">
              {websiteZahnarztBetreuung.benefits.map((item) => (
                <li key={item}>· {item}</li>
              ))}
            </ul>
            <Link
              href={websiteZahnarztBetreuung.linkHref}
              className="mt-3 inline-block font-semibold text-navy underline-offset-2 hover:underline"
            >
              {websiteZahnarztBetreuung.linkLabel}
            </Link>
          </div>
        </div>
      </section>

      {/* Google Ads Upsell */}
      <section className="pb-10">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <div className="rounded-xl border border-dashed border-border px-5 py-5 text-sm">
            <h2 className="text-base font-bold text-navy">{websiteZahnarztAdsUpsell.heading}</h2>
            <p className="mt-2 text-muted">{websiteZahnarztAdsUpsell.text}</p>
            <a
              href={kombiUrl}
              data-lp-cta="kombi-analyse"
              data-lp-section="ads-upsell"
              className="mt-3 inline-block font-semibold text-navy underline-offset-2 hover:underline"
            >
              {websiteZahnarztAdsUpsell.linkLabel}
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border py-14 lg:py-16">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <h2 className="text-2xl font-bold text-navy">Häufige Fragen</h2>
          <div className="mt-6 divide-y divide-border rounded-xl border border-border">
            {websiteZahnarztFaq.map((item) => (
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
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">{websiteZahnarztFinalCta.heading}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted leading-relaxed">{websiteZahnarztFinalCta.text}</p>
          <LpCta
            href={analyseUrl}
            section="final"
            className="btn-primary mt-8 inline-flex items-center gap-2 px-8 py-4 text-base"
          >
            {websiteZahnarztCta.primary}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </LpCta>
          <p className="mt-3 text-sm text-muted">{websiteZahnarztCta.subline}</p>
        </div>
      </section>
    </>
  );
}
