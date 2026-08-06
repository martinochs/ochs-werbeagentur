import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { GoogleAdsSection } from "@/components/GoogleAdsSection";
import { siteConfig } from "@/lib/seo/config";
import { Megaphone, BarChart3, Rocket, TrendingUp, Check, Gift, ArrowRight, ShieldCheck, Info, Star } from "lucide-react";

export const metadata = {
  title: "Google Ads für Arztpraxen",
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
              Mehr Patienten. Mehr Termine. Mehr Wachstum.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              Professionelle Google Ads Kampagnen für Ihre Praxis – erstellt von Experten.<br />
              Sichtbar bei den richtigen Patienten, genau dann, wenn sie Sie suchen.
            </p>
          </div>
        </section>

        {/* Reuse the existing Google Ads Section */}
        <GoogleAdsSection hideButton={true} />

        {/* Dedicated Pricing Section for Google Ads */}
        <section id="preise" className="scroll-mt-28 border-t border-border bg-[#f8fafc] py-16 lg:py-24">
          <div className="mx-auto max-w-6xl px-4 lg:px-8">
            
            <div className="mx-auto max-w-3xl text-center mb-12">
              <h2 className="text-2xl font-bold text-navy sm:text-3xl">
                Transparentes Angebot für Ihre Praxis
              </h2>
              <p className="mt-4 text-base text-muted">
                Volle Kostenkontrolle und messbare Ergebnisse für Ihre Patientengewinnung.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              {/* Hauptangebot */}
              <div className="relative">
                <article className="flex flex-col lg:flex-row gap-8 lg:gap-12 rounded-2xl bg-white p-6 pt-10 lg:p-10 shadow-[0_4px_24px_rgba(10,37,64,0.06)] ring-1 ring-black/[0.04]">
                  {/* Left Side */}
                  <div className="flex-1">
                    <div className="flex items-start gap-4">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#166534] text-white">
                        <Megaphone className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold leading-snug text-[#166534]">
                          Google Ads Kampagnen-Erstellung
                        </h3>
                        <p className="mt-1 text-sm leading-snug text-muted">
                          Einmalige Einrichtung. Starkes Fundament für messbare Ergebnisse.
                        </p>
                      </div>
                    </div>

                    <p className="mt-6 text-sm text-navy">
                      Wir planen, erstellen und starten Ihre Google Ads Kampagne –<br />
                      für maximale Sichtbarkeit und gezielte Neupatienten.
                    </p>

                    <ul className="mt-6 space-y-4">
                      {[
                        { title: "Strategie & Keyword-Recherche", desc: "Wir finden die Suchbegriffe, mit denen Patienten wirklich suchen." },
                        { title: "Google Ads Kampagnen Einrichtung", desc: "Professionelle Einrichtung Ihrer Kampagne und Anzeigengruppen." },
                        { title: "Anzeigenerstellung & Zielgruppen", desc: "Überzeugende Anzeigen für die richtigen Patienten." },
                        { title: "Conversion-Tracking & Auswertung", desc: "Damit Sie genau sehen, was funktioniert." },
                        { title: "Laufende Optimierung (erste Phase)", desc: "Wir starten Ihre Kampagne mit optimalen Einstellungen." },
                      ].map((feature) => (
                        <li key={feature.title} className="flex items-start gap-3">
                          <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#166534]" strokeWidth={2.5} aria-hidden="true" />
                          <div>
                            <p className="text-sm font-bold text-navy">{feature.title}</p>
                            <p className="text-sm text-muted">{feature.desc}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right Side */}
                  <div className="w-full lg:w-[380px] shrink-0">
                    <div className="rounded-xl border border-[#bbf7d0] bg-[#f0fdf4] p-6 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <Gift className="h-4 w-4 text-[#166534]" aria-hidden="true" />
                        <p className="text-[11px] font-bold uppercase tracking-wide text-[#166534]">
                          AKTION BIS 31.10.2026
                        </p>
                      </div>
                      <div className="mt-6">
                        <p className="text-sm text-muted">Statt <span className="line-through decoration-red-500 decoration-2">4.749 €</span> regulär</p>
                        <p className="mt-2 text-5xl font-extrabold text-[#166534]">
                          2.999 €
                        </p>
                        <p className="mt-1 text-sm font-medium text-navy">einmalig</p>
                      </div>
                      <div className="mx-auto mt-4 inline-block rounded bg-[#16a34a] px-3 py-1 text-[13px] font-bold text-white">
                        Sie sparen 1.750 €
                      </div>
                    </div>

                    <div className="mt-6 space-y-4 px-2">
                      <div className="flex items-start gap-3">
                        <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#166534]" aria-hidden="true" />
                        <div>
                          <p className="text-sm font-bold text-navy">Schneller Start</p>
                          <p className="text-xs text-muted">Ihre Kampagne ist in kürzester Zeit online.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <TrendingUp className="mt-0.5 h-5 w-5 shrink-0 text-[#166534]" aria-hidden="true" />
                        <div>
                          <p className="text-sm font-bold text-navy">Maximale Sichtbarkeit</p>
                          <p className="text-xs text-muted">Erreichen Sie genau die Patienten, die Sie suchen.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <BarChart3 className="mt-0.5 h-5 w-5 shrink-0 text-[#166534]" aria-hidden="true" />
                        <div>
                          <p className="text-sm font-bold text-navy">Messbare Ergebnisse</p>
                          <p className="text-xs text-muted">Transparente Auswertung und volle Kontrolle.</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 rounded-xl border border-[#bfdbfe] bg-[#eff6ff] p-5 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <Gift className="h-5 w-5 text-[#1d6fd8]" aria-hidden="true" />
                        <p className="text-[10px] font-bold uppercase tracking-wide text-[#1d6fd8]">
                          Vorteil für Erstnutzer
                        </p>
                      </div>
                      <p className="mt-2 text-sm font-medium text-navy">Bis zu 4.000 € Google-Werbeguthaben*</p>
                      <div className="mt-3 border-t border-[#bfdbfe] pt-3 text-left">
                        <p className="text-[11px] leading-relaxed text-muted">
                          * Nur für berechtigte neue Google-Ads-Konten und abhängig von den jeweils geltenden Google-Aktionsbedingungen. Das Werbebudget ist nicht im Einrichtungs- oder Betreuungspreis enthalten.
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              </div>

              {/* Zusatzleistung */}
              <div className="relative mt-4">
                <article className="flex flex-col lg:flex-row gap-8 lg:gap-12 rounded-2xl bg-white p-6 pt-10 lg:p-10 shadow-[0_4px_24px_rgba(10,37,64,0.06)] ring-1 ring-black/[0.04]">
                  {/* Left Side */}
                  <div className="flex-1">
                    <div className="flex items-start gap-4">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#1d6fd8] text-white">
                        <BarChart3 className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold leading-snug text-[#1d6fd8]">
                          Laufende Betreuung & Optimierung
                        </h3>
                        <p className="mt-1 text-sm leading-snug text-muted">
                          Monatliche Betreuung für kontinuierlichen Erfolg.
                        </p>
                      </div>
                    </div>

                    <p className="mt-6 text-sm text-navy">
                      Wir überwachen, optimieren und skalieren Ihre Kampagnen –<br />
                      für mehr Anfragen, mehr Termine und nachhaltiges Wachstum.
                    </p>

                    <div className="mt-6 grid sm:grid-cols-2 gap-x-6 gap-y-4">
                      {[
                        { title: "Regelmäßige Kampagnen-Optimierung", desc: "Wir verbessern Ihre Anzeigen, Keywords und Budgets laufend." },
                        { title: "Performance-Monitoring & Reporting", desc: "Sie erhalten klare Auswertungen und Empfehlungen." },
                        { title: "A/B-Tests & Anzeigentexte", desc: "Wir testen neue Anzeigen für bessere Ergebnisse." },
                        { title: "Budget-Steuerung", desc: "Wir sorgen für das beste Verhältnis aus Kosten und Anfragen." },
                        { title: "Persönlicher Ansprechpartner", desc: "Direkte Kommunikation und schnelle Umsetzung." },
                      ].map((feature) => (
                        <div key={feature.title} className="flex items-start gap-3">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#1d6fd8]" strokeWidth={2.5} aria-hidden="true" />
                          <div>
                            <p className="text-[13px] font-bold text-navy">{feature.title}</p>
                            <p className="text-[13px] text-muted">{feature.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Side */}
                  <div className="w-full lg:w-[380px] shrink-0">
                    <div className="rounded-xl border border-[#bfdbfe] bg-[#eff6ff] p-6 text-center h-full flex flex-col justify-center">
                      <p className="text-sm font-bold text-navy">Monatliche Betreuung</p>
                      <p className="mt-4 text-4xl font-extrabold text-[#1d6fd8]">
                        449 €
                      </p>
                      <p className="mt-1 text-sm font-medium text-navy">/ Monat</p>
                      <p className="mt-4 text-xs text-muted">Flexible Kündigung: monatlich</p>
                      
                      <div className="mt-6 border-t border-[#bfdbfe] pt-4 flex items-start gap-2 text-left">
                        <Info className="mt-0.5 h-4 w-4 shrink-0 text-[#1d6fd8]" aria-hidden="true" />
                        <p className="text-xs text-muted">
                          Empfohlen für nachhaltiges Wachstum und maximale Ergebnisse.
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              </div>

              {/* Was passt am besten */}
              <div className="mt-8">
                <h3 className="text-center text-xl font-bold text-navy mb-6">
                  Was passt am besten zu Ihrer Praxis?
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Starten */}
                  <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#166534] text-white">
                        <Rocket className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-[#166534]">Sie möchten starten?</h4>
                        <p className="mt-1 text-[13px] text-muted">
                          Wählen Sie die Kampagnen-Erstellung und starten Sie mit einer professionellen Grundlage.
                        </p>
                      </div>
                    </div>
                    <ul className="mt-6 space-y-2">
                      <li className="flex items-center gap-2 text-[13px] text-navy">
                        <Check className="h-4 w-4 text-[#166534]" /> Einmalige Einrichtung
                      </li>
                      <li className="flex items-center gap-2 text-[13px] text-navy">
                        <Check className="h-4 w-4 text-[#166534]" /> Schneller Start & erste Ergebnisse
                      </li>
                      <li className="flex items-center gap-2 text-[13px] text-navy">
                        <Check className="h-4 w-4 text-[#166534]" /> Ideal für Praxen, die jetzt sichtbar werden wollen
                      </li>
                    </ul>
                  </div>

                  {/* Wachsen */}
                  <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#1d6fd8] text-white">
                        <TrendingUp className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-[#1d6fd8]">Sie möchten wachsen?</h4>
                        <p className="mt-1 text-[13px] text-muted">
                          Kombinieren Sie Erstellung und Betreuung für kontinuierliche Optimierung und mehr Anfragen.
                        </p>
                      </div>
                    </div>
                    <ul className="mt-6 space-y-2">
                      <li className="flex items-center gap-2 text-[13px] text-navy">
                        <Check className="h-4 w-4 text-[#1d6fd8]" /> Stetige Optimierung & mehr Ergebnisse
                      </li>
                      <li className="flex items-center gap-2 text-[13px] text-navy">
                        <Check className="h-4 w-4 text-[#1d6fd8]" /> Regelmäßige Auswertungen & Empfehlungen
                      </li>
                      <li className="flex items-center gap-2 text-[13px] text-navy">
                        <Check className="h-4 w-4 text-[#1d6fd8]" /> Nachhaltiges Wachstum für Ihre Praxis
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Bottom Banner */}
              <div className="mt-4 rounded-xl bg-[#fefce8] border border-[#fef08a] p-6 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#eab308] text-white">
                  <Star className="h-6 w-6 fill-current" strokeWidth={1} aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <h4 className="text-base font-bold text-navy">Maximaler Erfolg mit der richtigen Kombination.</h4>
                  <p className="text-[13px] text-muted mt-1">Website + Google Ads = mehr Sichtbarkeit, mehr Anfragen, mehr Termine.</p>
                </div>
                <div className="text-center md:text-right shrink-0 flex flex-col items-center md:items-end">
                  <div className="flex items-center gap-1.5">
                    <Gift className="h-3.5 w-3.5 text-[#ca8a04]" aria-hidden="true" />
                    <span className="text-[11px] font-bold uppercase tracking-wide text-[#ca8a04]">Aktion bis 31.10.2026</span>
                  </div>
                  <div className="mt-1 flex items-baseline gap-2">
                    <span className="text-sm text-muted line-through decoration-red-500 decoration-2">8.999 €</span>
                    <span className="text-3xl font-extrabold text-[#ca8a04]">5.499 €</span>
                  </div>
                  <div className="mt-1.5 inline-block rounded bg-[#fef08a] px-2 py-0.5 text-[11px] font-bold text-[#a16207]">
                    Sie sparen 3.500 €
                  </div>
                </div>
                <div className="shrink-0 w-full md:w-auto">
                  <a href="/praxisanalyse" className="block w-full rounded-md bg-[#ca8a04] px-6 py-3 text-sm font-bold text-white hover:bg-[#a16207] transition-colors text-center">
                    Kombination anfragen
                  </a>
                </div>
              </div>

              {/* Footer Bar */}
              <div className="mt-4 flex flex-col md:flex-row items-center justify-center gap-4 border-t border-border pt-6">
                <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[13px] text-muted">
                  <span className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-[#166534]" /> 100 % transparent</span>
                  <span className="text-border">•</span>
                  <span>Keine versteckten Kosten</span>
                  <span className="text-border">•</span>
                  <span>Volle Kontrolle</span>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
