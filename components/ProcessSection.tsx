import {
  ArrowRight,
  Building2,
  Heart,
  Monitor,
  Pencil,
  Rocket,
  Search,
  Shield,
  Smartphone,
  Star,
  TrendingUp,
} from "lucide-react";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
});

const processNavy = "#0a2540";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Analyse & Strategie",
    text: "Wir analysieren Ihre aktuelle Website, Ihre Ziele und Ihre Zielgruppe, um die perfekte Strategie zu entwickeln.",
  },
  {
    icon: Pencil,
    number: "02",
    title: "Konzept & Design",
    text: "Wir erstellen ein individuelles Designkonzept mit klarer Struktur und Fokus auf Benutzerfreundlichkeit.",
  },
  {
    icon: Monitor,
    number: "03",
    title: "Umsetzung & Inhalte",
    text: "Technische Umsetzung, SEO-Optimierung und Erstellung aller Inhalte – datenschutzkonform und barrierefrei.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Launch & Betreuung",
    text: "Veröffentlichung Ihrer Website und optional laufende Betreuung, Weiterentwicklung und Optimierung.",
  },
];

const trustFeatures = [
  {
    icon: Shield,
    title: "Individuelles Design",
    text: "100 % auf Ihre Praxis und Ihre Patienten abgestimmt.",
  },
  {
    icon: Smartphone,
    title: "Mobil optimiert",
    text: "Perfekte Darstellung auf allen Geräten – für jeden Patienten.",
  },
  {
    icon: TrendingUp,
    title: "Mehr Sichtbarkeit",
    text: "SEO-optimiert für bessere Platzierungen bei Google.",
  },
];

function WebsiteMockup() {
  return (
    <div
      className="mx-auto w-full max-w-[340px] lg:mx-0 lg:max-w-none"
      role="img"
      aria-label="Beispiel einer modernen Praxis-Website im Browser"
    >
      <div className="overflow-hidden rounded-xl border border-border bg-white shadow-[0_12px_40px_rgba(10,37,64,0.12)]">
        <div className="flex items-center gap-1.5 border-b border-border bg-[#f5f7fa] px-3 py-2">
          <div className="h-2 w-2 rounded-full bg-red-400" aria-hidden="true" />
          <div className="h-2 w-2 rounded-full bg-yellow-400" aria-hidden="true" />
          <div className="h-2 w-2 rounded-full bg-green-400" aria-hidden="true" />
          <div className="ml-2 flex-1 rounded bg-white px-2 py-0.5 text-[9px] text-muted">
            praxis-beispiel.de
          </div>
        </div>

        <div className="p-3">
          <div className="flex items-center justify-between gap-2">
            <p className="text-[10px] font-bold uppercase tracking-wide text-navy">Ihre Praxis</p>
            <div className="flex gap-2 text-[8px] text-muted">
              <span>Praxis</span>
              <span>Leistungen</span>
              <span>Team</span>
              <span>Kontakt</span>
            </div>
          </div>

          <div className="relative mt-3 overflow-hidden rounded-lg">
            <div className="relative aspect-[16/10]">
              <Image
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=80"
                alt=""
                fill
                sizes="340px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-navy/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-3 text-white">
                <p className="text-[11px] font-bold leading-snug">Willkommen in Ihrer Praxis</p>
                <span className="mt-2 inline-block rounded bg-navy px-2 py-1 text-[8px] font-semibold">
                  Termin vereinbaren
                </span>
              </div>
            </div>
          </div>

          <div className="mt-3 grid grid-cols-3 gap-1.5">
            {[
              { icon: Heart, label: "Persönliche Betreuung" },
              { icon: Building2, label: "Moderne Ausstattung" },
              { icon: Shield, label: "Alles unter einem Dach" },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="rounded border border-border bg-surface px-1.5 py-2 text-center"
              >
                <Icon className="mx-auto h-3 w-3 text-navy/60" aria-hidden="true" />
                <p className="mt-1 text-[7px] leading-tight text-muted">{label}</p>
              </div>
            ))}
          </div>

          <div className="mt-3 flex items-center gap-2 rounded-lg border border-border bg-white px-2.5 py-2">
            <div className="flex gap-0.5 text-amber-400" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-2.5 w-2.5 fill-current" />
              ))}
            </div>
            <div>
              <p className="text-[8px] font-semibold text-navy">Über 100 zufriedene Patienten</p>
              <p className="text-[7px] text-muted">4,9 von 5 Sternen auf Google</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProcessSection() {
  return (
    <section
      id="ablauf"
      className="scroll-mt-28 border-t border-border bg-white py-14 lg:py-20"
      aria-labelledby="process-heading"
    >
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-border bg-white p-6 shadow-sm lg:p-10">
          <div className="grid items-start gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#5b6472]">
                So entsteht Ihre neue Praxis-Website
              </p>
              <h2
                id="process-heading"
                className={`${playfair.className} mt-3 text-3xl font-semibold leading-tight sm:text-4xl`}
                style={{ color: processNavy }}
              >
                Ihre Praxis-Website in vier klaren Schritten
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
                Wir begleiten Sie strukturiert von der Analyse bis zum Launch – mit modernster
                Technologie und klarer Kommunikation.
              </p>

              <ol className="mt-10 grid list-none gap-8 sm:grid-cols-2 xl:grid-cols-4 xl:gap-4">
                {steps.map((step, index) => (
                  <li key={step.title} className="relative">
                    {index < steps.length - 1 && (
                      <span
                        className="pointer-events-none absolute -right-2 top-5 hidden text-navy/20 xl:block"
                        aria-hidden="true"
                      >
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    )}
                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-[#f5f7fa] text-navy">
                      <step.icon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
                    </div>
                    <p className="mt-3 text-[11px] font-semibold tracking-wide text-muted">
                      {step.number}
                    </p>
                    <h3 className="mt-1 text-sm font-bold text-navy">{step.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted">{step.text}</p>
                  </li>
                ))}
              </ol>
            </div>

            <div className="lg:pt-6">
              <WebsiteMockup />
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-6 rounded-xl bg-[#f5f7fa] p-5 lg:flex-row lg:items-center lg:justify-between lg:p-6">
            <ul className="grid gap-5 sm:grid-cols-3 sm:gap-4">
              {trustFeatures.map(({ icon: Icon, title, text }) => (
                <li key={title} className="flex gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-white text-navy">
                    <Icon className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-navy">{title}</p>
                    <p className="mt-0.5 text-xs leading-relaxed text-muted">{text}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="shrink-0 text-center lg:text-right">
              <a
                href="#preise"
                className="inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: processNavy }}
              >
                Preise &amp; Pakete ansehen
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <p className="mt-2 text-[11px] text-muted">Transparent. Fair. Ohne versteckte Kosten.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
