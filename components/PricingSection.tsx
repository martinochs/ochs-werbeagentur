import {
  Activity,
  ArrowRight,
  Check,
  Gift,
  Headphones,
  Lightbulb,
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
  {
    title: "Betreuung & Weiterentwicklung",
    subtitle: "Wir kümmern uns dauerhaft um Ihren Erfolg.",
    pricePrefix: "Monatlich ab",
    price: "199 €",
    icon: Headphones,
    theme: themes.purple,
    features: [
      "Technische Wartung & Updates",
      "Inhaltspflege (Texte & Bilder)",
      "Sicherheits- & Backup-Service",
      "Persönlicher Ansprechpartner",
      "Monatliche Optimierungen",
    ],
    highlighted: false,
    badge: null,
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
      className="bg-white py-16 lg:py-20"
      aria-labelledby="pricing-heading"
    >
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <h2
          id="pricing-heading"
          className="text-center text-xl font-bold text-navy sm:text-2xl"
        >
          Unsere Leistungen und Preise
        </h2>

        <div className="mt-10 grid items-stretch gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {packages.map((pkg) => (
            <PricingCard key={pkg.title} pkg={pkg} />
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted">
          Alle Preise verstehen sich zzgl. MwSt.
        </p>
      </div>
    </section>
  );
}
