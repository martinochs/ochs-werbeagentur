import {
  Activity,
  ArrowRight,
  BarChart3,
  Calendar,
  Check,
  ChevronDown,
  Clock,
  Gift,
  Headphones,
  Info,
  Lightbulb,
  Monitor,
  ShieldCheck,
  Tag,
  User,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type PackageTheme = {
  accent: string;
  check: string;
};

const googleAdsBonus = {
  label: "Exklusiver Vorteil für Erstnutzer",
  amount: "4.000 €",
  subtitle: "Google-Werbeguthaben*",
  footnote: "Wir prüfen Ihre Berechtigung kostenlos.*",
};

type Package = {
  title: string;
  subtitle: string;
  pricePrefix: string;
  price: string;
  priceNote?: string;
  features: string[];
  icon: LucideIcon;
  theme: PackageTheme;
  highlighted: boolean;
  badge: string | null;
  googleAdsBonus?: boolean;
};

const themes = {
  navy: { accent: "#0a2540", check: "text-navy" },
  green: { accent: "#166534", check: "text-[#166534]" },
  blue: { accent: "#1d6fd8", check: "text-[#1d6fd8]" },
  purple: { accent: "#5b21b6", check: "text-[#5b21b6]" },
} as const;

const packages: Package[] = [
  {
    title: "Premium Praxis-Website",
    subtitle: "Die Basis für Ihren digitalen Auftritt.",
    pricePrefix: "Einmalig",
    price: "4.749 €",
    icon: Activity,
    theme: themes.navy,
    features: [
      "Individuelles Design",
      "Online-Terminbuchung integriert",
      "DSGVO-konform & sicher",
      "SEO-Grundoptimierung",
      "Texte & Bilder auf Wunsch",
    ],
    highlighted: false,
    badge: null,
  },
  {
    title: "Google Ads Patientengewinnung",
    subtitle: "Mehr qualifizierte Patientenanfragen.",
    pricePrefix: "Einmalig",
    price: "4.749 €",
    icon: Users,
    theme: themes.green,
    features: [
      "Strategie & Keyword-Recherche",
      "Google Ads Kampagnen Einrichtung",
      "Anzeigenerstellung & Zielgruppen",
      "Conversion-Tracking & Auswertung",
      "Laufende Optimierung",
    ],
    highlighted: false,
    badge: null,
    googleAdsBonus: true,
  },
  {
    title: "Praxis-Wachstumspaket Website + Google Ads",
    subtitle: "Die perfekte Kombination für nachhaltiges Wachstum.",
    pricePrefix: "Einmalig",
    price: "8.999 €",
    priceNote: "Empfohlen – sparen Sie 499 €",
    icon: Lightbulb,
    theme: themes.blue,
    features: [
      "Website (inkl. Terminbuchung & SEO)",
      "Google Ads Kampagnen",
      "Tracking & Conversion-Optimierung",
      "Professionelle Einrichtung",
      "Ein Ansprechpartner für alles",
    ],
    highlighted: true,
    badge: "Beste Gesamtlösung",
    googleAdsBonus: true,
  },
];

function GoogleAdsBonusBox() {
  return (
    <div className="relative overflow-hidden rounded-xl border-2 border-[#16a34a] bg-gradient-to-br from-[#ecfdf5] via-[#dcfce7] to-[#bbf7d0] px-3 py-3 text-center shadow-[0_4px_16px_rgba(22,101,52,0.15)]">
      <div
        className="pointer-events-none absolute -right-3 -top-3 h-14 w-14 rounded-full bg-[#16a34a]/10"
        aria-hidden="true"
      />
      <div className="relative flex items-center justify-center gap-1.5">
        <Gift className="h-4 w-4 text-[#15803d]" strokeWidth={2.25} aria-hidden="true" />
        <p className="text-[10px] font-bold uppercase tracking-wide text-[#166534]">
          {googleAdsBonus.label}
        </p>
      </div>
      <p className="relative mt-2 text-[11px] font-medium text-[#166534]">bis zu</p>
      <p className="relative text-2xl font-bold leading-none tracking-tight text-[#15803d]">
        {googleAdsBonus.amount}
      </p>
      <p className="relative mt-1 text-xs font-semibold text-[#166534]">
        {googleAdsBonus.subtitle}
      </p>
      <p className="relative mt-2 text-[10px] leading-snug text-[#166534]/80">
        {googleAdsBonus.footnote}
      </p>
    </div>
  );
}

function PricingFooter({
  pkg,
  accent,
}: {
  pkg: Package;
  accent: string;
}) {
  return (
    <div className="mt-auto shrink-0 border-t border-border pt-5">
      <div className="mb-5 min-h-[8.5rem]">
        {pkg.googleAdsBonus ? <GoogleAdsBonusBox /> : null}
      </div>

      <div className="text-center">
        <p className="text-xs font-semibold" style={{ color: accent }}>
          {pkg.pricePrefix}
        </p>
        <p className="mt-1 text-2xl font-bold" style={{ color: accent }}>
          {pkg.price}
        </p>
        {pkg.priceNote ? (
          <p className="mt-2 text-xs font-semibold text-accent">{pkg.priceNote}</p>
        ) : (
          <div className="mt-2 min-h-[2rem]" aria-hidden="true" />
        )}
      </div>

      <a
        href="/praxisanalyse"
        className={`mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-semibold transition-colors ${
          pkg.highlighted
            ? "border-2 border-[#1d6fd8] bg-white text-[#1d6fd8] hover:bg-[#eff6ff]"
            : "text-white hover:opacity-90"
        }`}
        style={pkg.highlighted ? undefined : { backgroundColor: accent }}
      >
        Mehr erfahren
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </a>
    </div>
  );
}

function PricingCard({ pkg }: { pkg: Package }) {
  const Icon = pkg.icon;
  const { accent, check } = pkg.theme;

  return (
    <article
      className={`relative flex h-full flex-col rounded-2xl bg-white p-6 shadow-[0_4px_24px_rgba(10,37,64,0.06)] ring-1 ring-black/[0.04] ${
        pkg.highlighted ? "ring-2 ring-[#1d6fd8]" : ""
      }`}
    >
      {pkg.badge && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-navy px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
          {pkg.badge}
        </span>
      )}

      <div className="flex items-start gap-4">
        <div
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-white"
          style={{ backgroundColor: accent }}
        >
          <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
        </div>
        <div>
          <h3 className="text-base font-bold leading-snug" style={{ color: accent }}>
            {pkg.title}
          </h3>
          <p className="mt-1 text-sm leading-snug text-muted">{pkg.subtitle}</p>
        </div>
      </div>

      <div className="mt-6 flex min-h-0 flex-1 flex-col">
        <ul className="space-y-2.5">
          {pkg.features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-2.5 text-sm text-navy/85"
            >
              <Check
                className={`mt-0.5 h-4 w-4 shrink-0 ${check}`}
                strokeWidth={2.5}
                aria-hidden="true"
              />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <PricingFooter pkg={pkg} accent={accent} />
    </article>
  );
}

export function PricingSection() {
  return (
    <section
      id="preise"
      className="border-t border-border bg-white py-16 lg:py-20"
      aria-labelledby="pricing-heading"
    >
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <h2
          id="pricing-heading"
          className="text-center text-xl font-bold text-navy sm:text-2xl"
        >
          Unsere Leistungen und Preise
        </h2>

        <div className="mt-10 grid items-stretch gap-6 lg:grid-cols-3">
          {packages.map((pkg) => (
            <PricingCard key={pkg.title} pkg={pkg} />
          ))}
        </div>

        {/* Monthly Options Box */}
        <div className="mt-12 rounded-[2rem] border border-border bg-[#f8fafc] p-6 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[300px_1fr] lg:gap-16">
            {/* Left Side: Title & Features */}
            <div>
              <h3 className="text-2xl font-bold leading-tight text-navy">
                Monatliche Betreuung<br />für Ihre Praxis
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Wir halten Ihre Website aktuell und optimieren Ihre Google-Anzeigen kontinuierlich – mit festen monatlichen Preisen.
              </p>
              
              <ul className="mt-8 space-y-6">
                <li className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#eff6ff] text-[#1d6fd8]">
                    <User className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-navy">Persönlicher Ansprechpartner</h4>
                    <p className="mt-0.5 text-[13px] text-muted">Direkt erreichbar, ohne Umwege.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#eff6ff] text-[#1d6fd8]">
                    <ShieldCheck className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-navy">Monatlich kündbar</h4>
                    <p className="mt-0.5 text-[13px] text-muted">Flexible Laufzeiten – volle Kontrolle für Sie.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#eff6ff] text-[#1d6fd8]">
                    <Check className="h-5 w-5" strokeWidth={2.5} aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-navy">Transparente Festpreise</h4>
                    <p className="mt-0.5 text-[13px] text-muted">Keine versteckten Kosten,<br />volle Planungssicherheit.</p>
                  </div>
                </li>
              </ul>

              <div className="mt-8 rounded-2xl bg-[#eff6ff] p-4">
                <div className="flex items-start gap-3">
                  <Gift className="mt-0.5 h-5 w-5 shrink-0 text-[#1d6fd8]" strokeWidth={2} aria-hidden="true" />
                  <div>
                    <h4 className="text-[13px] font-bold text-navy">Bis zu 600 € Google-Werbeguthaben*</h4>
                    <p className="mt-0.5 text-[12px] text-muted">Für neue Google-Ads-Konten.</p>
                    <a href="#kontakt" className="mt-1 inline-flex items-center gap-1 text-[12px] font-semibold text-[#1d6fd8] hover:underline">
                      Mehr erfahren <ArrowRight className="h-3 w-3" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Table */}
            <div className="flex flex-col">
              <div className="hidden grid-cols-[1fr_auto_120px] gap-4 border-b border-border pb-3 text-sm font-semibold text-navy lg:grid">
                <div>Leistung</div>
                <div className="flex items-center gap-1">Enthalten <Info className="h-3.5 w-3.5 text-muted" aria-hidden="true" /></div>
                <div className="text-right">Preis netto</div>
              </div>
              
              <div className="mt-4 flex flex-col gap-4">
                {/* Row 1 */}
                <div className="grid gap-4 rounded-2xl border border-border bg-white p-4 lg:grid-cols-[1fr_auto_120px] lg:items-center lg:border-none lg:bg-transparent lg:p-0 lg:pb-4 lg:border-b">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#5b21b6] text-white">
                      <Monitor className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="text-[15px] font-bold text-navy">Website-Betreuung</h4>
                      <p className="mt-1 text-[13px] text-muted">Wir kümmern uns um die<br className="hidden lg:block" />Technik und Inhalte Ihrer Website.</p>
                    </div>
                  </div>
                  <div className="lg:w-[220px]">
                    <details className="group relative">
                      <summary className="flex cursor-pointer items-center justify-between gap-2 rounded-lg border border-border bg-white px-3 py-2 text-[13px] font-medium text-navy transition-colors hover:bg-surface list-none [&::-webkit-details-marker]:hidden">
                        Enthaltene Leistungen
                        <ChevronDown className="h-4 w-4 text-muted transition-transform group-open:rotate-180" aria-hidden="true" />
                      </summary>
                      <div className="absolute left-0 top-full z-10 mt-1 w-full rounded-lg border border-border bg-white p-3 text-[13px] text-muted shadow-lg lg:w-[280px]">
                        Updates, Backups, Sicherheitschecks und kleinere Änderungen
                      </div>
                    </details>
                  </div>
                  <div className="text-left lg:text-right">
                    <p className="text-2xl font-bold text-[#5b21b6]">199 €</p>
                    <p className="text-[13px] text-muted">/Monat</p>
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid gap-4 rounded-2xl border border-border bg-white p-4 lg:grid-cols-[1fr_auto_120px] lg:items-center lg:border-none lg:bg-transparent lg:p-0 lg:pb-4 lg:border-b">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#166534] text-white">
                      <BarChart3 className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="text-[15px] font-bold text-navy">Google-Ads-Betreuung</h4>
                      <p className="mt-1 text-[13px] text-muted">Wir optimieren Ihre Kampagnen<br className="hidden lg:block" />für mehr Anfragen und Patienten.</p>
                    </div>
                  </div>
                  <div className="lg:w-[220px]">
                    <details className="group relative">
                      <summary className="flex cursor-pointer items-center justify-between gap-2 rounded-lg border border-border bg-white px-3 py-2 text-[13px] font-medium text-[#166534] transition-colors hover:bg-surface list-none [&::-webkit-details-marker]:hidden">
                        Enthaltene Leistungen
                        <ChevronDown className="h-4 w-4 text-[#166534]/60 transition-transform group-open:rotate-180" aria-hidden="true" />
                      </summary>
                      <div className="absolute left-0 top-full z-10 mt-1 w-full rounded-lg border border-border bg-white p-3 text-[13px] text-muted shadow-lg lg:w-[280px]">
                        Optimierung, Budgetkontrolle und monatliche Auswertung
                      </div>
                    </details>
                  </div>
                  <div className="text-left lg:text-right">
                    <p className="text-2xl font-bold text-[#166534]">449 €</p>
                    <p className="text-[13px] text-muted">/Monat</p>
                  </div>
                </div>

                {/* Row 3 (Highlighted) */}
                <div className="relative mt-2 rounded-2xl border-2 border-[#1d6fd8] bg-white p-4 lg:p-6">
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#1d6fd8] px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white lg:left-8 lg:translate-x-0">
                    Empfohlen
                  </span>
                  <div className="grid gap-4 lg:grid-cols-[1fr_auto_120px] lg:items-center">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#1d6fd8] text-white">
                        <Monitor className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
                        <Activity className="absolute ml-4 mt-4 h-4 w-4 rounded-full bg-white text-[#1d6fd8] p-0.5" strokeWidth={3} aria-hidden="true" />
                      </div>
                      <div>
                        <h4 className="text-[15px] font-bold text-navy">Website + Google Ads</h4>
                        <p className="mt-1 text-[13px] text-muted">Die komplette Betreuung für<br className="hidden lg:block" />Ihre Website und Werbekampagnen.</p>
                      </div>
                    </div>
                    <div className="lg:w-[220px]">
                      <details className="group relative">
                        <summary className="flex cursor-pointer items-center justify-between gap-2 rounded-lg border border-border bg-white px-3 py-2 text-[13px] font-medium text-[#1d6fd8] transition-colors hover:bg-surface list-none [&::-webkit-details-marker]:hidden">
                          Enthaltene Leistungen
                          <ChevronDown className="h-4 w-4 text-[#1d6fd8]/60 transition-transform group-open:rotate-180" aria-hidden="true" />
                        </summary>
                        <div className="absolute left-0 top-full z-10 mt-1 w-full rounded-lg border border-border bg-white p-3 text-[13px] text-muted shadow-lg lg:w-[280px]">
                          Vollständige Betreuung beider Bereiche
                        </div>
                      </details>
                    </div>
                    <div className="text-left lg:text-right">
                      <p className="text-2xl font-bold text-[#1d6fd8]">599 €</p>
                      <p className="text-[13px] text-muted">/Monat</p>
                      <div className="mt-2 inline-flex items-center gap-1.5 rounded bg-[#f0fdf4] px-2 py-1 text-[11px] font-bold text-[#15803d]">
                        <Tag className="h-3 w-3" aria-hidden="true" />
                        Sie sparen 49 € / Monat
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <a href="/praxisanalyse" className="btn-primary mt-8 flex w-full items-center justify-center gap-2 py-3.5 text-base">
                Betreuung unverbindlich anfragen
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              
              <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[13px] text-muted lg:justify-between">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-navy/40" aria-hidden="true" />
                  Kostenloses Erstgespräch
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-navy/40" aria-hidden="true" />
                  Individuelles Angebot
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-navy/40" aria-hidden="true" />
                  In 24h Rückmeldung
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-2xl bg-[#f8fafc] p-6 text-sm text-muted">
          <div className="flex gap-3">
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-navy/40" aria-hidden="true" />
            <div>
              <p>Alle Preise zzgl. MwSt. Das Google-Werbebudget ist nicht im Betreuungspreis enthalten.</p>
              <p>Es gelten die im Angebot vereinbarten Leistungsgrenzen und Kündigungsfristen.</p>
              <a href="#kontakt" className="mt-2 inline-flex items-center gap-1 font-semibold text-[#1d6fd8] hover:underline">
                Details zu Leistungen &amp; Bedingungen <ArrowRight className="h-3 w-3" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
