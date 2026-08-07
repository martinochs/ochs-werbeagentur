import {
  ArrowRight,
  BarChart3,
  Check,
  ClipboardList,
  Search,
  TrendingUp,
} from "lucide-react";

const adsGreen = "#064e3b";

const steps = [
  {
    icon: Search,
    title: "Analyse & Strategie",
    text: "Wir analysieren Ihre Leistungen, Ihre Region, Ihre Wunschpatienten und die Wettbewerbssituation.",
  },
  {
    icon: ClipboardList,
    title: "Kampagnenerstellung",
    text: "Wir erstellen und strukturieren Ihre Google-Ads-Kampagnen und optimieren Zielgruppen und Anzeigentexte.",
  },
  {
    icon: BarChart3,
    title: "Tracking & Optimierung",
    text: "Wir messen Ergebnisse, optimieren laufend und sorgen für maximale Leistung und Effizienz.",
  },
  {
    icon: TrendingUp,
    title: "Auswertung & Wachstum",
    text: "Wir kontrollieren Suchbegriffe, Anzeigen, Kosten und Ergebnisse während des vereinbarten Betreuungszeitraums.",
  },
];

const highlights = [
  "Transparentes Tracking",
  "Gezielte regionale Ausrichtung",
  "Werbebudget unter Ihrer Kontrolle",
];

function GoogleSearchMockup() {
  return (
    <div className="mx-auto w-full max-w-[280px] lg:mx-0 lg:max-w-none">
      <div className="rounded-2xl border border-border bg-white p-4 shadow-[0_8px_32px_rgba(10,37,64,0.1)]">
        <div className="flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-2">
          <Search className="h-3.5 w-3.5 text-muted" aria-hidden="true" />
          <span className="text-xs text-muted">Zahnarzt Mannheim</span>
        </div>

        <div className="mt-4 rounded-xl border border-border bg-white p-3">
          <p className="text-[10px] font-medium uppercase tracking-wide text-muted">
            Anzeige
          </p>
          <p className="mt-1 text-sm font-bold text-navy">Zahnarztpraxis Mannheim</p>
          <div className="mt-1 flex items-center gap-1 text-[11px] text-amber-500">
            <span aria-hidden="true">★★★★★</span>
            <span className="font-semibold text-navy">4,9</span>
            <span className="text-muted">(97 Bewertungen)</span>
          </div>
          <p className="mt-2 text-xs leading-relaxed text-muted">
            Professionelle Zahnmedizin. Jetzt Termin vereinbaren.
          </p>
        </div>

        <div className="mt-3 rounded-xl border border-border bg-white p-3">
          <p className="text-xs font-semibold text-navy">Anfragen &amp; Anrufe</p>
          <svg
            viewBox="0 0 220 72"
            className="mt-2 h-16 w-full"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="ads-chart-fill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#16a34a" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#16a34a" stopOpacity="0.02" />
              </linearGradient>
            </defs>
            <path
              d="M 8 58 L 48 52 L 88 44 L 128 32 L 168 18 L 208 8 L 208 64 L 8 64 Z"
              fill="url(#ads-chart-fill)"
            />
            <polyline
              points="8,58 48,52 88,44 128,32 168,18 208,8"
              fill="none"
              stroke="#16a34a"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function StepContent({
  icon: Icon,
  title,
  text,
}: (typeof steps)[number]) {
  return (
    <>
      <div
        className="mx-auto flex h-11 w-11 items-center justify-center rounded-full text-white"
        style={{ backgroundColor: adsGreen }}
      >
        <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
      </div>
      <h3 className="mt-4 text-sm font-bold" style={{ color: adsGreen }}>
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
    </>
  );
}

export function GoogleAdsSection({ hideButton = false }: { hideButton?: boolean } = {}) {
  return (
    <section
      id="leistungen"
      className="scroll-mt-28 border-t border-border bg-white py-10 lg:py-14"
      aria-labelledby="google-ads-heading"
    >
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-[#f0f7f9] px-6 py-10 ring-1 ring-black/[0.04] lg:px-10 lg:py-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_260px] lg:items-start lg:gap-8">
            <div>
              <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:text-left">
                <h2
                  id="google-ads-heading"
                  className="text-xl font-bold sm:text-2xl"
                  style={{ color: adsGreen }}
                >
                  Google Ads für Ärzte und Zahnarztpraxen — neue Patienten
                  gewinnen
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  Wir schalten gezielte Google-Ads-Kampagnen, die genau die
                  Patienten erreichen, die Sie suchen.
                </p>
              </div>

              <ol className="mt-10 flex list-none flex-col gap-8 lg:flex-row lg:items-start lg:gap-0">
                {steps.map((step, index) => (
                  <li
                    key={step.title}
                    className="flex flex-1 flex-col items-center text-center lg:flex-row lg:items-start"
                  >
                    <div className="flex-1">
                      <StepContent {...step} />
                    </div>
                    {index < steps.length - 1 && (
                      <span
                        className="mt-4 flex justify-center lg:mt-0 lg:shrink-0 lg:items-start lg:px-1 lg:pt-3"
                        aria-hidden="true"
                      >
                        <ArrowRight className="h-4 w-4 rotate-90 text-navy/25 lg:rotate-0" />
                      </span>
                    )}
                  </li>
                ))}
              </ol>

              <div className="mt-10 flex flex-col gap-6 border-t border-navy/10 pt-8 lg:flex-row lg:items-center lg:justify-between">
                <ul className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2">
                  {highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-navy"
                    >
                      <Check
                        className="h-4 w-4 shrink-0 text-[#16a34a]"
                        strokeWidth={2.5}
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
                {!hideButton && (
                  <a
                    href="/leistungen/google-ads"
                    className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
                    style={{ backgroundColor: adsGreen }}
                  >
                    Mehr über Google Ads erfahren
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                )}
              </div>
            </div>

            <div className="lg:pt-2">
              <GoogleSearchMockup />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
