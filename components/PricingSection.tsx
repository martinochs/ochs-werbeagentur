import {
  Activity,
  ArrowRight,
  BarChart3,
  Calendar,
  Check,
  CheckCircle2,
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

type ActionTheme = {
  boxBorder: string;
  boxBg: string;
  titleText: string;
  priceText: string;
  badgeBg: string;
  badgeText: string;
  iconColor: string;
  buttonBg: string;
  buttonText: string;
  buttonBorder: string;
};

type Package = {
  title: string;
  subtitle: string;
  regularPrice: string;
  actionPrice: string;
  savings: string;
  features: string[];
  icon: LucideIcon;
  theme: PackageTheme;
  actionTheme: ActionTheme;
  highlighted: boolean;
  badge: string | null;
  linkHref: string;
  linkLabel: string;
  showAdCredit?: boolean;
};

const themes = {
  navy: { accent: "#0a2540", check: "text-navy" },
  green: { accent: "#166534", check: "text-[#166534]" },
  blue: { accent: "#1d6fd8", check: "text-[#1d6fd8]" },
} as const;

const actionThemes = {
  green: {
    boxBorder: "border-[#bbf7d0]",
    boxBg: "bg-[#f0fdf4]",
    titleText: "text-[#166534]",
    priceText: "text-[#166534]",
    badgeBg: "bg-[#16a34a]",
    badgeText: "text-white",
    iconColor: "text-[#16a34a]",
    buttonBg: "bg-navy",
    buttonText: "text-white",
    buttonBorder: "border-navy",
  },
  green2: {
    boxBorder: "border-[#bbf7d0]",
    boxBg: "bg-[#f0fdf4]",
    titleText: "text-[#166534]",
    priceText: "text-[#166534]",
    badgeBg: "bg-[#16a34a]",
    badgeText: "text-white",
    iconColor: "text-[#16a34a]",
    buttonBg: "bg-[#166534]",
    buttonText: "text-white",
    buttonBorder: "border-[#166534]",
  },
  blue: {
    boxBorder: "border-[#bfdbfe]",
    boxBg: "bg-[#eff6ff]",
    titleText: "text-[#1d6fd8]",
    priceText: "text-[#1d6fd8]",
    badgeBg: "bg-[#1d6fd8]",
    badgeText: "text-white",
    iconColor: "text-[#1d6fd8]",
    buttonBg: "bg-white",
    buttonText: "text-[#1d6fd8]",
    buttonBorder: "border-[#1d6fd8]",
  },
};

const packages: Package[] = [
  {
    title: "Premium Praxis-Website",
    subtitle: "Die Basis für Ihren digitalen Auftritt.",
    regularPrice: "4.749 €",
    actionPrice: "2.999 €",
    savings: "1.750 €",
    icon: Activity,
    theme: themes.navy,
    actionTheme: actionThemes.green,
    features: [
      "Individuelles Design",
      "Online-Terminbuchung integriert",
      "Datenschutzfreundliche technische Umsetzung",
      "SEO-Grundoptimierung",
      "Texte & Bilder auf Wunsch",
    ],
    highlighted: false,
    badge: null,
    linkHref: "/leistungen/praxis-websites",
    linkLabel: "Mehr zur Praxis-Website",
  },
  {
    title: "Google Ads Patientengewinnung",
    subtitle: "Mehr qualifizierte Patientenanfragen.",
    regularPrice: "4.749 €",
    actionPrice: "2.999 €",
    savings: "1.750 €",
    icon: Users,
    theme: themes.green,
    actionTheme: actionThemes.green2,
    features: [
      "Strategie & Keyword-Recherche",
      "Google-Ads-Kampagneneinrichtung",
      "Anzeigenerstellung & Zielgruppen",
      "Conversion-Tracking & Auswertung",
      "Laufende Optimierung",
    ],
    highlighted: false,
    badge: null,
    linkHref: "/leistungen/google-ads",
    linkLabel: "Mehr zu Google Ads",
    showAdCredit: true,
  },
  {
    title: "Praxis-Wachstumspaket Website + Google Ads",
    subtitle: "Die perfekte Kombination für nachhaltiges Wachstum.",
    regularPrice: "8.999 €",
    actionPrice: "5.499 €",
    savings: "3.500 €",
    icon: Lightbulb,
    theme: themes.blue,
    actionTheme: actionThemes.blue,
    features: [
      "Website (inkl. Terminbuchung & SEO)",
      "Google-Ads-Kampagnen",
      "Tracking & Conversion-Optimierung",
      "Professionelle Einrichtung",
      "Ein Ansprechpartner für alles",
    ],
    highlighted: true,
    badge: "BESTE GESAMTLÖSUNG",
    linkHref: "/leistungen/praxis-websites",
    linkLabel: "Website + Google Ads ansehen",
  },
];

function PricingFooter({ pkg }: { pkg: Package }) {
  const { boxBorder, boxBg, titleText, priceText, badgeBg, badgeText, iconColor, buttonBg, buttonText, buttonBorder } = pkg.actionTheme;

  return (
    <div className="mt-auto shrink-0 border-t border-border pt-6">
      <div className="text-center">
        <p className="text-xs text-muted">Regulärer Preis</p>
        <p className="mt-0.5 text-lg font-bold text-muted line-through decoration-red-500 decoration-2">
          {pkg.regularPrice}
        </p>
      </div>

      <div className={`mt-4 rounded-xl border ${boxBorder} ${boxBg} p-4 text-center`}>
        <div className="flex items-center justify-center gap-1.5">
          <Gift className={`h-4 w-4 ${iconColor}`} aria-hidden="true" />
          <p className={`text-[11px] font-bold uppercase tracking-wide ${titleText}`}>
            Aktion bis 31.10.2026
          </p>
        </div>
        <p className="mt-2 text-xs font-semibold text-navy">Aktionspreis</p>
        <p className={`mt-0.5 text-3xl font-extrabold ${priceText}`}>
          {pkg.actionPrice}
        </p>
        <div className={`mx-auto mt-3 inline-block rounded-md px-3 py-1 text-xs font-bold ${badgeBg} ${badgeText}`}>
          Sie sparen {pkg.savings}
        </div>
      </div>

      {pkg.showAdCredit && (
        <div className="mt-4 rounded-xl border border-[#bfdbfe] bg-[#eff6ff] p-4">
          <div className="flex items-start gap-3">
            <Gift className="mt-0.5 h-5 w-5 shrink-0 text-[#1d6fd8]" strokeWidth={2} aria-hidden="true" />
            <div>
              <p className="text-[13px] font-bold text-navy">Bis zu 4.000 € Google-Werbeguthaben*</p>
              <p className="mt-0.5 text-[12px] text-muted">Für berechtigte neue Google-Ads-Konten.</p>
            </div>
          </div>
          <div className="mt-3 border-t border-[#bfdbfe] pt-3">
            <p className="text-[11px] leading-relaxed text-muted">
              * Nur für berechtigte neue Google-Ads-Konten und abhängig von den jeweils geltenden Google-Aktionsbedingungen. Das Werbebudget ist nicht im Einrichtungs- oder Betreuungspreis enthalten.
            </p>
          </div>
        </div>
      )}

      <a
        href={pkg.linkHref}
        className={`mt-4 flex w-full items-center justify-center gap-2 rounded-lg border-2 px-4 py-3 text-sm font-semibold transition-colors ${buttonBg} ${buttonText} ${buttonBorder} hover:opacity-90`}
      >
        {pkg.linkLabel}
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

      <PricingFooter pkg={pkg} />
    </article>
  );
}

export function PricingSection() {
  return (
    <section
      id="preise"
      className="scroll-mt-28 border-t border-border bg-white py-16 lg:py-20"
      aria-labelledby="pricing-heading"
    >
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <h2
          id="pricing-heading"
          className="text-center text-2xl font-bold text-navy sm:text-3xl lg:text-4xl"
        >
          Unsere Leistungen und Preise
        </h2>
        <div className="mt-3 flex items-center justify-center gap-2 text-sm font-bold text-[#166534]">
          <Calendar className="h-5 w-5" aria-hidden="true" />
          Aktionsangebot gültig bis 31.10.2026
        </div>

        <div className="mt-10 grid items-stretch gap-6 lg:grid-cols-3">
          {packages.map((pkg) => (
            <PricingCard key={pkg.title} pkg={pkg} />
          ))}
        </div>

        <div className="mt-8 text-center text-sm text-muted">
          <p>Alle Preise verstehen sich zzgl. der gesetzlichen MwSt.</p>
          <p className="mt-1 text-xs">* Details und Voraussetzungen finden Sie in unseren Leistungsbeschreibungen.</p>
        </div>

        {/* Monthly Options Box */}
        <div className="mt-12 rounded-[2rem] border border-border bg-[#f8fafc] p-6 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[300px_1fr] lg:gap-16">
            {/* Left Side: Title & Features */}
            <div>
              <h3 className="text-2xl font-bold leading-tight text-navy">
                Monatliche Betreuung
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Optional nach Erstellung Ihrer Website oder Google-Ads-Einrichtung — mit festen
                monatlichen Preisen und persönlicher Betreuung.
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
                    <p className="mt-0.5 text-[13px] text-muted">Keine versteckten Kosten, <br />volle Planungssicherheit.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Right Side: Table */}
            <div className="flex flex-col">
              <div className="hidden grid-cols-[1fr_120px] gap-4 border-b border-border pb-3 text-sm font-semibold text-navy lg:grid">
                <div>Leistung</div>
                <div className="text-right">Preis netto</div>
              </div>
              
              <div className="mt-4 flex flex-col gap-4">
                {/* Row 1 */}
                <details name="monthly-options" className="group rounded-2xl border border-border bg-white p-4 lg:border-none lg:bg-transparent lg:p-0 lg:pb-4 lg:border-b">
                  <summary className="grid cursor-pointer gap-4 lg:grid-cols-[1fr_120px] lg:items-center list-none [&::-webkit-details-marker]:hidden">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#5b21b6] text-white">
                        <Monitor className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-[15px] font-bold text-navy">Website-Betreuung</h4>
                          <ChevronDown className="h-4 w-4 text-muted transition-transform group-open:rotate-180" aria-hidden="true" />
                        </div>
                        <p className="mt-1 text-[13px] text-muted">Wir kümmern uns um die <br className="hidden lg:block" />Technik und Inhalte Ihrer Website.</p>
                      </div>
                    </div>
                    <div className="text-left lg:text-right">
                      <p className="text-2xl font-bold text-[#5b21b6]">249 €</p>
                      <p className="text-[13px] text-muted">/Monat</p>
                    </div>
                  </summary>
                  <div className="mt-4 lg:ml-16 rounded-xl bg-white lg:bg-surface p-4 text-[13px] text-muted border border-border lg:border-none">
                    <span className="mb-2 block font-semibold text-navy">Enthaltene Leistungen:</span>
                    <ul className="space-y-1.5">
                      <li className="flex items-start gap-2"><span className="text-navy">•</span> Technische Updates und Sicherheitsaktualisierungen</li>
                      <li className="flex items-start gap-2"><span className="text-navy">•</span> Backups</li>
                      <li className="flex items-start gap-2"><span className="text-navy">•</span> Sicherheitschecks</li>
                      <li className="flex items-start gap-2"><span className="text-navy">•</span> Kleinere inhaltliche Änderungen im Rahmen der Betreuung</li>
                    </ul>
                  </div>
                </details>

                {/* Row 2 */}
                <details name="monthly-options" className="group rounded-2xl border border-border bg-white p-4 lg:border-none lg:bg-transparent lg:p-0 lg:pb-4 lg:border-b">
                  <summary className="grid cursor-pointer gap-4 lg:grid-cols-[1fr_120px] lg:items-center list-none [&::-webkit-details-marker]:hidden">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#166534] text-white">
                        <BarChart3 className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-[15px] font-bold text-navy">Google-Ads-Betreuung</h4>
                          <ChevronDown className="h-4 w-4 text-muted transition-transform group-open:rotate-180" aria-hidden="true" />
                        </div>
                        <p className="mt-1 text-[13px] text-muted">Wir optimieren Ihre Kampagnen <br className="hidden lg:block" />für mehr Anfragen und Patienten.</p>
                      </div>
                    </div>
                    <div className="text-left lg:text-right">
                      <p className="text-2xl font-bold text-[#166534]">449 €</p>
                      <p className="text-[13px] text-muted">/Monat</p>
                    </div>
                  </summary>
                  <div className="mt-4 lg:ml-16 rounded-xl bg-white lg:bg-surface p-4 text-[13px] text-muted border border-border lg:border-none">
                    <span className="mb-2 block font-semibold text-navy">Enthaltene Leistungen:</span>
                    <ul className="space-y-1.5">
                      <li className="flex items-start gap-2"><span className="text-navy">•</span> Optimierung</li>
                      <li className="flex items-start gap-2"><span className="text-navy">•</span> Budgetkontrolle</li>
                      <li className="flex items-start gap-2"><span className="text-navy">•</span> monatliche Auswertung</li>
                    </ul>
                  </div>
                </details>

                {/* Row 3 (Highlighted) */}
                <details name="monthly-options" className="group relative mt-2 rounded-2xl border-2 border-[#1d6fd8] bg-white p-4 lg:p-6">
                  <summary className="grid cursor-pointer gap-4 lg:grid-cols-[1fr_120px] lg:items-center list-none [&::-webkit-details-marker]:hidden">
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#1d6fd8] px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white lg:left-8 lg:translate-x-0">
                      Empfohlen
                    </span>
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#1d6fd8] text-white">
                        <Monitor className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
                        <Activity className="absolute ml-4 mt-4 h-4 w-4 rounded-full bg-white text-[#1d6fd8] p-0.5" strokeWidth={3} aria-hidden="true" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-[15px] font-bold text-navy">Website + Google Ads</h4>
                          <ChevronDown className="h-4 w-4 text-[#1d6fd8] transition-transform group-open:rotate-180" aria-hidden="true" />
                        </div>
                        <p className="mt-1 text-[13px] text-muted">Die komplette Betreuung für <br className="hidden lg:block" />Ihre Website und Werbekampagnen.</p>
                      </div>
                    </div>
                    <div className="text-left lg:text-right">
                      <p className="text-2xl font-bold text-[#1d6fd8]">649 €</p>
                      <p className="text-[13px] text-muted">/Monat</p>
                      <div className="mt-2 inline-flex items-center gap-1.5 rounded bg-[#f0fdf4] px-2 py-1 text-[11px] font-bold text-[#15803d]">
                        <Tag className="h-3 w-3" aria-hidden="true" />
                        Sie sparen 49 € / Monat
                      </div>
                    </div>
                  </summary>
                  <div className="mt-4 lg:ml-16 rounded-xl bg-[#eff6ff] p-4 text-[13px] text-muted">
                    <span className="mb-2 block font-semibold text-[#1d6fd8]">Enthaltene Leistungen:</span>
                    <ul className="space-y-1.5">
                      <li className="flex items-start gap-2"><span className="text-[#1d6fd8]">•</span> Vollständige Betreuung beider Bereiche</li>
                    </ul>
                  </div>
                </details>
              </div>

              <a href="/leistungen/betreuung" className="btn-primary mt-8 flex w-full items-center justify-center gap-2 py-3.5 text-base">
                Mehr zur Betreuung
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              
              <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[13px] text-muted lg:justify-between">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-navy/40" aria-hidden="true" />
                  Kostenlose Website-Analyse
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-navy/40" aria-hidden="true" />
                  Individuelles Angebot
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-navy/40" aria-hidden="true" />
                  Rückmeldung innerhalb von 24 Stunden
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
