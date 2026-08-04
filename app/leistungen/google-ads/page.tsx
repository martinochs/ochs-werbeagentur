import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { GoogleAdsSection } from "@/components/GoogleAdsSection";
import { siteConfig } from "@/lib/seo/config";
import { Users, Check, Gift, ArrowRight } from "lucide-react";

export const metadata = {
  title: `Google Ads für Arztpraxen | ${siteConfig.name}`,
  description: "Gezielte Patientengewinnung durch Suchmaschinenwerbung. Erreichen Sie genau die Patienten, die in Ihrer Region nach Ihren Leistungen suchen.",
};

export default function GoogleAdsPage() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main className="flex-1 bg-white">
        {/* Hero Section */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
            <h1 className="text-3xl font-bold text-navy sm:text-4xl lg:text-5xl">
              Google Ads für Arzt- und Zahnarztpraxen
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              Gezielte Patientengewinnung durch Suchmaschinenwerbung. Wir erreichen genau die Patienten, die in Ihrer Region nach Ihren Leistungen suchen.
            </p>
          </div>
        </section>

        {/* Reuse the existing Google Ads Section */}
        <GoogleAdsSection hideButton={true} />

        {/* Dedicated Pricing Section for Google Ads */}
        <section id="preise" className="scroll-mt-28 border-t border-border bg-[#f8fafc] py-16 lg:py-24">
          <div className="mx-auto max-w-6xl px-4 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold text-navy sm:text-3xl">
                Transparentes Angebot für Ihre Praxis
              </h2>
              <p className="mt-4 text-base text-muted">
                Volle Kostenkontrolle und messbare Ergebnisse für Ihre Patientengewinnung.
              </p>
            </div>

            <div className="mx-auto mt-12 w-full">
              <article className="relative flex flex-col lg:flex-row gap-8 lg:gap-12 rounded-2xl bg-white p-6 shadow-[0_4px_24px_rgba(10,37,64,0.06)] ring-1 ring-black/[0.04] sm:p-8 lg:p-10">
                {/* Left Side: Info & Features */}
                <div className="flex-1">
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#166534] text-white">
                      <Users className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold leading-snug text-[#166534]">
                        Google Ads Patientengewinnung
                      </h3>
                      <p className="mt-1 text-sm leading-snug text-muted">
                        Mehr qualifizierte Patientenanfragen.
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 flex flex-col">
                    <ul className="space-y-4">
                      {[
                        "Strategie & Keyword-Recherche",
                        "Google Ads Kampagnen Einrichtung",
                        "Anzeigenerstellung & Zielgruppen",
                        "Conversion-Tracking & Auswertung",
                        "Laufende Optimierung",
                      ].map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-base text-navy/85">
                          <Check className="mt-0.5 h-6 w-6 shrink-0 text-[#166534]" strokeWidth={2.5} aria-hidden="true" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right Side: Prices & Buttons */}
                <div className="flex-1 shrink-0 border-t border-border pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
                  <div className="text-center">
                    <p className="text-sm text-muted">Regulärer Preis Einrichtung</p>
                    <p className="mt-1 text-xl font-bold text-muted line-through decoration-red-500 decoration-2">
                      4.749 €
                    </p>
                  </div>

                  <div className="mt-6 rounded-xl border border-[#bbf7d0] bg-[#f0fdf4] p-5 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <Gift className="h-5 w-5 text-[#16a34a]" aria-hidden="true" />
                      <p className="text-xs font-bold uppercase tracking-wide text-[#166534]">
                        Aktion bis 31.10.2026
                      </p>
                    </div>
                    <p className="mt-3 text-sm font-semibold text-navy">Aktionspreis Einrichtung</p>
                    <p className="mt-1 text-4xl font-extrabold text-[#166534]">
                      2.999 €
                    </p>
                    <div className="mx-auto mt-4 inline-block rounded-md bg-[#16a34a] px-3 py-1.5 text-sm font-bold text-white">
                      Sie sparen 1.750 €
                    </div>
                  </div>

                  <div className="mt-6 grid gap-6 sm:grid-cols-2">
                    <div className="rounded-xl border border-[#bfdbfe] bg-[#eff6ff] p-5 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <Gift className="h-5 w-5 text-[#1d6fd8]" aria-hidden="true" />
                        <p className="text-[10px] font-bold uppercase tracking-wide text-[#1d6fd8]">
                          Vorteil für Erstnutzer
                        </p>
                      </div>
                      <p className="mt-2 text-sm font-medium text-navy">bis zu</p>
                      <p className="mt-1 text-2xl font-extrabold text-[#1d6fd8]">4.000 €</p>
                      <p className="mt-1 text-xs font-semibold text-navy">Werbeguthaben*</p>
                    </div>
                    
                    <div className="rounded-xl border border-border bg-white p-5 text-center shadow-sm flex flex-col justify-center">
                       <p className="text-sm font-semibold text-navy">Laufende Betreuung</p>
                       <p className="mt-2 text-2xl font-bold text-[#166534]">449 €</p>
                       <p className="text-xs font-normal text-muted">/ Monat</p>
                    </div>
                  </div>

                  <a
                    href="/praxisanalyse"
                    className="mt-8 flex w-full items-center justify-center gap-2 rounded-lg border-2 border-[#166534] bg-[#166534] px-6 py-4 text-base font-semibold text-white transition-colors hover:opacity-90"
                  >
                    Kostenlose Praxisanalyse anfordern
                    <ArrowRight className="h-5 w-5" aria-hidden="true" />
                  </a>
                  
                  <p className="mt-4 text-center text-xs text-muted">
                    Alle Preise verstehen sich zzgl. der gesetzlichen MwSt.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
