import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { siteConfig } from "@/lib/seo/config";
import { Check, ShieldCheck, Info, Star, Monitor, BarChart3, Search, Clock, TrendingUp, ArrowRight, Tag } from "lucide-react";

export const metadata = {
  title: `Betreuung & Weiterentwicklung | ${siteConfig.name}`,
  description: "Sorgenfreier Betrieb Ihrer Praxis-Website. Wir kümmern uns um Updates, Sicherheit, SEO und Google Ads – für Ihren langfristigen Erfolg.",
};

export default function BetreuungPage() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main className="flex-1 bg-white">
        {/* Hero Section */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
            <h1 className="text-3xl font-bold text-navy sm:text-4xl lg:text-5xl">
              Sorgenfrei digital wachsen.<br />Wir kümmern uns um den Rest.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              Konzentrieren Sie sich voll und ganz auf Ihre Patienten. Wir übernehmen die technische 
              Wartung, inhaltliche Pflege und kontinuierliche Optimierung Ihrer digitalen Präsenz.
            </p>
          </div>
        </section>

        {/* Dedicated Pricing Section for Betreuung */}
        <section id="preise" className="scroll-mt-28 border-t border-border bg-[#f8fafc] py-16 lg:py-24">
          <div className="mx-auto max-w-6xl px-4 lg:px-8">
            
            <div className="mx-auto max-w-3xl text-center mb-12">
              <h2 className="text-2xl font-bold text-navy sm:text-3xl">
                Unsere Betreuungs-Pakete
              </h2>
              <p className="mt-4 text-base text-muted">
                Transparente monatliche Festpreise. Flexibel kündbar. Keine versteckten Kosten.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              
              {/* 1. Website-Betreuung */}
              <div className="relative">
                <article className="flex flex-col lg:flex-row gap-8 lg:gap-12 rounded-2xl bg-white p-6 pt-10 lg:p-10 shadow-[0_4px_24px_rgba(10,37,64,0.06)] ring-1 ring-black/[0.04]">
                  {/* Left Side */}
                  <div className="flex-1">
                    <div className="flex items-start gap-4">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#5b21b6] text-white">
                        <Monitor className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold leading-snug text-[#5b21b6]">
                          Website-Betreuung
                        </h3>
                        <p className="mt-1 text-sm leading-snug text-muted">
                          Technische Sicherheit und aktuelle Inhalte.
                        </p>
                      </div>
                    </div>

                    <p className="mt-6 text-sm text-navy">
                      Wir sorgen dafür, dass Ihre Website immer auf dem neuesten Stand ist,<br />
                      schnell lädt und vor Hackerangriffen geschützt bleibt.
                    </p>

                    <ul className="mt-6 space-y-4">
                      {[
                        { title: "Regelmäßige Updates", desc: "System- und Plugin-Updates für höchste Sicherheit." },
                        { title: "Tägliche Backups", desc: "Automatische Sicherungen Ihrer gesamten Website." },
                        { title: "Sicherheitschecks", desc: "Proaktiver Schutz vor Malware und Ausfällen." },
                        { title: "Inhaltliche Änderungen", desc: "Wir passen Texte, Bilder oder Öffnungszeiten für Sie an." },
                      ].map((feature) => (
                        <li key={feature.title} className="flex items-start gap-3">
                          <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#5b21b6]" strokeWidth={2.5} aria-hidden="true" />
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
                    <div className="rounded-xl border border-[#ddd6fe] bg-[#f5f3ff] p-6 text-center h-full flex flex-col justify-center">
                      <p className="text-sm font-bold text-navy">Monatliche Betreuung</p>
                      <p className="mt-4 text-4xl font-extrabold text-[#5b21b6]">
                        199 €
                      </p>
                      <p className="mt-1 text-sm font-medium text-navy">/ Monat</p>
                      <p className="mt-4 text-xs text-muted">Flexible Kündigung: monatlich</p>
                      
                      <div className="mt-6 border-t border-[#ddd6fe] pt-4 flex items-start gap-2 text-left">
                        <Info className="mt-0.5 h-4 w-4 shrink-0 text-[#5b21b6]" aria-hidden="true" />
                        <p className="text-xs text-muted">
                          Sorgenfreier Betrieb Ihrer Praxis-Website ohne technischen Aufwand für Sie.
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              </div>

              {/* 2. SEO-Betreuung */}
              <div className="relative mt-4">
                <article className="flex flex-col lg:flex-row gap-8 lg:gap-12 rounded-2xl bg-white p-6 pt-10 lg:p-10 shadow-[0_4px_24px_rgba(10,37,64,0.06)] ring-1 ring-black/[0.04]">
                  {/* Left Side */}
                  <div className="flex-1">
                    <div className="flex items-start gap-4">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#1d6fd8] text-white">
                        <Search className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold leading-snug text-[#1d6fd8]">
                          Laufende SEO-Betreuung
                        </h3>
                        <p className="mt-1 text-sm leading-snug text-muted">
                          Kontinuierliche Optimierung für Top-Platzierungen.
                        </p>
                      </div>
                    </div>

                    <p className="mt-6 text-sm text-navy">
                      Suchmaschinen ändern sich ständig. Wir halten Ihre Rankings stabil<br />
                      und bauen Ihre Sichtbarkeit Monat für Monat weiter aus.
                    </p>

                    <div className="mt-6 grid sm:grid-cols-2 gap-x-6 gap-y-4">
                      {[
                        { title: "Content-Optimierung", desc: "Laufende Anpassung und Erweiterung Ihrer Website-Texte." },
                        { title: "Google Profil Pflege", desc: "Regelmäßige Updates, Posts und Bewertungsmanagement." },
                        { title: "Technisches SEO", desc: "Kontinuierliche Überwachung von Ladezeiten und Fehlern." },
                        { title: "Backlink-Aufbau", desc: "Stärkung Ihrer Autorität durch hochwertige Verlinkungen." },
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
                      <p className="text-sm font-bold text-navy">Monatliche SEO-Betreuung</p>
                      <p className="mt-4 text-4xl font-extrabold text-[#1d6fd8]">
                        349 €
                      </p>
                      <p className="mt-1 text-sm font-medium text-navy">/ Monat</p>
                      <p className="mt-4 text-xs text-muted">Flexible Kündigung: monatlich</p>
                      
                      <div className="mt-6 border-t border-[#bfdbfe] pt-4 flex items-start gap-2 text-left">
                        <Info className="mt-0.5 h-4 w-4 shrink-0 text-[#1d6fd8]" aria-hidden="true" />
                        <p className="text-xs text-muted">
                          Empfohlen für Praxen in umkämpften Regionen oder Fachgebieten.
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              </div>

              {/* 3. Google-Ads-Betreuung */}
              <div className="relative mt-4">
                <article className="flex flex-col lg:flex-row gap-8 lg:gap-12 rounded-2xl bg-white p-6 pt-10 lg:p-10 shadow-[0_4px_24px_rgba(10,37,64,0.06)] ring-1 ring-black/[0.04]">
                  {/* Left Side */}
                  <div className="flex-1">
                    <div className="flex items-start gap-4">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#166534] text-white">
                        <BarChart3 className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold leading-snug text-[#166534]">
                          Google-Ads-Betreuung
                        </h3>
                        <p className="mt-1 text-sm leading-snug text-muted">
                          Maximale Effizienz für Ihr Werbebudget.
                        </p>
                      </div>
                    </div>

                    <p className="mt-6 text-sm text-navy">
                      Wir überwachen, optimieren und skalieren Ihre Kampagnen –<br />
                      für mehr Anfragen, mehr Termine und nachhaltiges Wachstum.
                    </p>

                    <div className="mt-6 grid sm:grid-cols-2 gap-x-6 gap-y-4">
                      {[
                        { title: "Regelmäßige Optimierung", desc: "Wir verbessern Ihre Anzeigen, Keywords und Budgets laufend." },
                        { title: "Performance-Monitoring", desc: "Sie erhalten klare Auswertungen und Empfehlungen." },
                        { title: "A/B-Tests", desc: "Wir testen neue Anzeigen für bessere Ergebnisse." },
                        { title: "Budget-Steuerung", desc: "Wir sorgen für das beste Verhältnis aus Kosten und Anfragen." },
                      ].map((feature) => (
                        <div key={feature.title} className="flex items-start gap-3">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#166534]" strokeWidth={2.5} aria-hidden="true" />
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
                    <div className="rounded-xl border border-[#bbf7d0] bg-[#f0fdf4] p-6 text-center h-full flex flex-col justify-center">
                      <p className="text-sm font-bold text-navy">Monatliche Ads-Betreuung</p>
                      <p className="mt-4 text-4xl font-extrabold text-[#166534]">
                        449 €
                      </p>
                      <p className="mt-1 text-sm font-medium text-navy">/ Monat</p>
                      <p className="mt-4 text-xs text-muted">Flexible Kündigung: monatlich</p>
                      
                      <div className="mt-6 border-t border-[#bbf7d0] pt-4 flex items-start gap-2 text-left">
                        <Info className="mt-0.5 h-4 w-4 shrink-0 text-[#166534]" aria-hidden="true" />
                        <p className="text-xs text-muted">
                          Volle Kostenkontrolle und messbare Ergebnisse für Ihre Patientengewinnung.
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              </div>

              {/* Warum Betreuung? */}
              <div className="mt-8">
                <h3 className="text-center text-xl font-bold text-navy mb-6">
                  Warum eine professionelle Betreuung sinnvoll ist
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Zeit sparen */}
                  <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0a2540] text-white">
                        <Clock className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-[#0a2540]">Mehr Zeit für Patienten</h4>
                        <p className="mt-1 text-[13px] text-muted">
                          Technik, Updates und Marketing kosten Zeit und Nerven. Geben Sie diese Aufgaben ab.
                        </p>
                      </div>
                    </div>
                    <ul className="mt-6 space-y-2">
                      <li className="flex items-center gap-2 text-[13px] text-navy">
                        <Check className="h-4 w-4 text-[#0a2540]" /> Voller Fokus auf Ihren Praxisalltag
                      </li>
                      <li className="flex items-center gap-2 text-[13px] text-navy">
                        <Check className="h-4 w-4 text-[#0a2540]" /> Ein fester Ansprechpartner für alles
                      </li>
                      <li className="flex items-center gap-2 text-[13px] text-navy">
                        <Check className="h-4 w-4 text-[#0a2540]" /> Schnelle Umsetzung von Änderungen
                      </li>
                    </ul>
                  </div>

                  {/* Sicherheit & Wachstum */}
                  <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0a2540] text-white">
                        <TrendingUp className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-[#0a2540]">Sicherheit & Wachstum</h4>
                        <p className="mt-1 text-[13px] text-muted">
                          Das Internet schläft nie. Wir sorgen dafür, dass Sie immer sichtbar und geschützt sind.
                        </p>
                      </div>
                    </div>
                    <ul className="mt-6 space-y-2">
                      <li className="flex items-center gap-2 text-[13px] text-navy">
                        <Check className="h-4 w-4 text-[#0a2540]" /> Schutz vor Ausfällen und Hackerangriffen
                      </li>
                      <li className="flex items-center gap-2 text-[13px] text-navy">
                        <Check className="h-4 w-4 text-[#0a2540]" /> Kontinuierliche Steigerung der Anfragen
                      </li>
                      <li className="flex items-center gap-2 text-[13px] text-navy">
                        <Check className="h-4 w-4 text-[#0a2540]" /> Anpassung an neue Google-Richtlinien
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Bottom Banner - Kombi Paket */}
              <div className="mt-4 rounded-xl bg-[#fefce8] border border-[#fef08a] p-6 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#eab308] text-white">
                  <Star className="h-6 w-6 fill-current" strokeWidth={1} aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <h4 className="text-base font-bold text-navy">Rundum-Sorglos-Paket: Website + Google Ads</h4>
                  <p className="text-[13px] text-muted mt-1">Die komplette Betreuung für Ihre Website und Werbekampagnen aus einer Hand.</p>
                </div>
                <div className="text-center md:text-right shrink-0 flex flex-col items-center md:items-end">
                  <div className="mt-1 flex items-baseline gap-2">
                    <span className="text-sm text-muted line-through decoration-red-500 decoration-2">648 €</span>
                    <span className="text-3xl font-extrabold text-[#ca8a04]">599 €</span>
                    <span className="text-sm text-muted">/ Monat</span>
                  </div>
                  <div className="mt-1.5 inline-flex items-center gap-1.5 rounded bg-[#fef08a] px-2 py-0.5 text-[11px] font-bold text-[#a16207]">
                    <Tag className="h-3 w-3" aria-hidden="true" />
                    Sie sparen 49 € monatlich
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
                  <span className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-[#0a2540]" /> 100 % transparent</span>
                  <span className="text-border">•</span>
                  <span>Monatlich kündbar</span>
                  <span className="text-border">•</span>
                  <span>Fester Ansprechpartner</span>
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
