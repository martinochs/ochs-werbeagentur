import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ClosingCtaSection } from "@/components/ClosingCtaSection";
import { ScrollToTop } from "@/components/ScrollToTop";
import { erstgespraechUrl } from "@/lib/cta";
import { Search, Check, Gift, ShieldCheck, Info, Star, Rocket, TrendingUp, MapPin, LineChart } from "lucide-react";

export const metadata = {
  title: "SEO & KI-Sichtbarkeit für Ärzte",
  description: "Langfristige Sichtbarkeit bei Google und in KI-Suchen. Wir optimieren Ihre Praxis für lokale Suchanfragen und relevante Behandlungen.",
};

export default function SeoPage() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main className="flex-1 bg-white">
        {/* Hero Section */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
            <h1 className="text-3xl font-bold text-navy sm:text-4xl lg:text-5xl">
              Gefunden werden, wenn es darauf ankommt.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              Lokale SEO & KI-Sichtbarkeit für Arzt- und Zahnarztpraxen. Wir sorgen dafür, 
              dass Patienten in Ihrer Region Sie bei Google und in modernen KI-Suchen ganz oben finden.
            </p>
          </div>
        </section>

        {/* Dedicated Pricing Section for SEO */}
        <section id="preise" className="scroll-mt-28 border-t border-border bg-[#f8fafc] py-16 lg:py-24">
          <div className="mx-auto max-w-6xl px-4 lg:px-8">
            
            <div className="mx-auto max-w-3xl text-center mb-12">
              <h2 className="text-2xl font-bold text-navy sm:text-3xl">
                Transparentes Angebot für Ihre Praxis
              </h2>
              <p className="mt-4 text-base text-muted">
                Nachhaltige Sichtbarkeit zu fairen Konditionen. Keine versteckten Kosten.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              {/* Hauptangebot */}
              <div className="relative">
                <article className="flex flex-col lg:flex-row gap-8 lg:gap-12 rounded-2xl bg-white p-6 pt-10 lg:p-10 shadow-[0_4px_24px_rgba(10,37,64,0.06)] ring-1 ring-black/[0.04]">
                  {/* Left Side */}
                  <div className="flex-1">
                    <div className="flex items-start gap-4">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#1d6fd8] text-white">
                        <Search className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold leading-snug text-[#1d6fd8]">
                          Lokale SEO & KI-Optimierung
                        </h3>
                        <p className="mt-1 text-sm leading-snug text-muted">
                          Einmalige Optimierung für ein starkes Fundament.
                        </p>
                      </div>
                    </div>

                    <p className="mt-6 text-sm text-navy">
                      Wir optimieren Ihre Website und Ihr Google-Profil, damit Sie bei lokalen <br />
                      Suchanfragen und relevanten Behandlungen optimal ranken.
                    </p>

                    <ul className="mt-6 space-y-4">
                      {[
                        { title: "Keyword- & Wettbewerbsanalyse", desc: "Wir identifizieren die lukrativsten Suchbegriffe in Ihrer Region." },
                        { title: "Google-Unternehmensprofil", desc: "Professionelle Einrichtung und Optimierung für Local SEO." },
                        { title: "Onpage-SEO", desc: "Optimierung von Meta-Tags, Überschriften und Ladezeiten." },
                        { title: "Lokale Verzeichnisse", desc: "Eintragung in die wichtigsten Ärzte- und Branchenportale." },
                        { title: "KI-Sichtbarkeit", desc: "Aufbereitung Ihrer Daten für ChatGPT, Perplexity & Co." },
                      ].map((feature) => (
                        <li key={feature.title} className="flex items-start gap-3">
                          <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#1d6fd8]" strokeWidth={2.5} aria-hidden="true" />
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
                    <div className="rounded-xl border border-[#bfdbfe] bg-[#eff6ff] p-6 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <Gift className="h-4 w-4 text-[#1d6fd8]" aria-hidden="true" />
                        <p className="text-[11px] font-bold uppercase tracking-wide text-[#1d6fd8]">
                          INKLUSIVE BEI NEUER WEBSITE
                        </p>
                      </div>
                      <div className="mt-6">
                        <p className="text-sm text-muted">Statt <span className="line-through decoration-red-500 decoration-2">1.499 €</span> regulär</p>
                        <p className="mt-2 text-5xl font-extrabold text-[#1d6fd8]">
                          0 € <span className="text-xl font-bold">*</span>
                        </p>
                        <p className="mt-1 text-sm font-medium text-navy">einmalig</p>
                      </div>
                      <div className="mx-auto mt-4 inline-block rounded bg-[#2563eb] px-3 py-1 text-[13px] font-bold text-white">
                        Sie sparen 1.499 €
                      </div>
                      <p className="mt-4 text-[11px] text-muted leading-tight">
                        * Die komplette SEO-Grundoptimierung ist bei der Erstellung einer neuen Praxis-Website durch uns bereits kostenlos enthalten.
                      </p>
                      <a
                        href={erstgespraechUrl("seo")}
                        className="mt-6 block w-full rounded-lg bg-[#1d6fd8] px-4 py-3 text-sm font-bold text-white transition-opacity hover:opacity-90 text-center"
                      >
                        Kostenloses SEO-Erstgespräch vereinbaren
                      </a>
                    </div>

                    <div className="mt-6 space-y-4 px-2">
                      <div className="flex items-start gap-3">
                        <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#1d6fd8]" aria-hidden="true" />
                        <div>
                          <p className="text-sm font-bold text-navy">Lokal dominant</p>
                          <p className="text-xs text-muted">Werden Sie die Nr. 1 in Ihrer Stadt oder Region.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <LineChart className="mt-0.5 h-5 w-5 shrink-0 text-[#1d6fd8]" aria-hidden="true" />
                        <div>
                          <p className="text-sm font-bold text-navy">Nachhaltiger Traffic</p>
                          <p className="text-xs text-muted">Langfristige Besucher ohne laufende Klickkosten.</p>
                        </div>
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
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#0a2540] text-white">
                        <TrendingUp className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold leading-snug text-[#0a2540]">
                          Laufende SEO-Betreuung
                        </h3>
                        <p className="mt-1 text-sm leading-snug text-muted">
                          Kontinuierliche Optimierung für Top-Platzierungen.
                        </p>
                      </div>
                    </div>

                    <p className="mt-6 text-sm text-navy">
                      Suchmaschinen ändern sich ständig. Wir halten Ihre Rankings stabil <br />
                      und bauen Ihre Sichtbarkeit Monat für Monat weiter aus.
                    </p>

                    <div className="mt-6 grid sm:grid-cols-2 gap-x-6 gap-y-4">
                      {[
                        { title: "Content-Optimierung", desc: "Laufende Anpassung und Erweiterung Ihrer Website-Texte." },
                        { title: "Google-Profil-Pflege", desc: "Regelmäßige Updates, Posts und Bewertungsmanagement." },
                        { title: "Technisches SEO", desc: "Kontinuierliche Überwachung von Ladezeiten und Fehlern." },
                        { title: "Backlink-Aufbau", desc: "Stärkung Ihrer Autorität durch hochwertige Verlinkungen." },
                        { title: "Reporting & Strategie", desc: "Transparente Auswertungen und regelmäßige Abstimmung." },
                      ].map((feature) => (
                        <div key={feature.title} className="flex items-start gap-3">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#0a2540]" strokeWidth={2.5} aria-hidden="true" />
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
                    <div className="rounded-xl border border-border bg-[#f8fafc] p-6 text-center h-full flex flex-col justify-center">
                      <p className="text-sm font-bold text-navy">Monatliche SEO-Betreuung</p>
                      <p className="mt-4 text-4xl font-extrabold text-[#0a2540]">
                        349 €
                      </p>
                      <p className="mt-1 text-sm font-medium text-navy">/ Monat</p>
                      <p className="mt-4 text-xs text-muted">Flexible Kündigung: monatlich</p>
                      
                      <div className="mt-6 border-t border-border pt-4 flex items-start gap-2 text-left">
                        <Info className="mt-0.5 h-4 w-4 shrink-0 text-[#0a2540]" aria-hidden="true" />
                        <p className="text-xs text-muted">
                          Empfohlen für Praxen in umkämpften Regionen oder Fachgebieten.
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
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#1d6fd8] text-white">
                        <Rocket className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-[#1d6fd8]">Sichtbarkeit aufbauen?</h4>
                        <p className="mt-1 text-[13px] text-muted">
                          Wählen Sie die einmalige Optimierung für ein starkes SEO-Fundament.
                        </p>
                      </div>
                    </div>
                    <ul className="mt-6 space-y-2">
                      <li className="flex items-center gap-2 text-[13px] text-navy">
                        <Check className="h-4 w-4 text-[#1d6fd8]" /> Einmalige Investition
                      </li>
                      <li className="flex items-center gap-2 text-[13px] text-navy">
                        <Check className="h-4 w-4 text-[#1d6fd8]" /> Behebt alle grundlegenden SEO-Fehler
                      </li>
                      <li className="flex items-center gap-2 text-[13px] text-navy">
                        <Check className="h-4 w-4 text-[#1d6fd8]" /> Ideal für den Start oder nach einem Relaunch
                      </li>
                    </ul>
                  </div>

                  {/* Wachsen */}
                  <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0a2540] text-white">
                        <TrendingUp className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-[#0a2540]">Langfristig dominieren?</h4>
                        <p className="mt-1 text-[13px] text-muted">
                          Kombinieren Sie das Fundament mit laufender Betreuung für Top-Rankings.
                        </p>
                      </div>
                    </div>
                    <ul className="mt-6 space-y-2">
                      <li className="flex items-center gap-2 text-[13px] text-navy">
                        <Check className="h-4 w-4 text-[#0a2540]" /> Stetiger Aufbau von Autorität
                      </li>
                      <li className="flex items-center gap-2 text-[13px] text-navy">
                        <Check className="h-4 w-4 text-[#0a2540]" /> Anpassung an neue Google-Updates
                      </li>
                      <li className="flex items-center gap-2 text-[13px] text-navy">
                        <Check className="h-4 w-4 text-[#0a2540]" /> Ideal für stark umkämpfte Fachbereiche
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
                  <p className="text-[13px] text-muted mt-1">Website + SEO + Google Ads = Omnipräsenz in Ihrer Region.</p>
                </div>
                <div className="text-center md:text-right shrink-0 flex flex-col items-center md:items-end">
                  <div className="flex items-center gap-1.5">
                    <Gift className="h-3.5 w-3.5 text-[#ca8a04]" aria-hidden="true" />
                    <span className="text-[11px] font-bold uppercase tracking-wide text-[#ca8a04]">Aktion bis 31.10.2026</span>
                  </div>
                  <div className="mt-1 flex items-baseline gap-2">
                    <span className="text-sm text-muted line-through decoration-red-500 decoration-2">8.999 €</span>
                    {" "}
                    <span className="text-3xl font-extrabold text-[#ca8a04]">5.499 €</span>
                  </div>
                  <div className="mt-1.5 inline-block rounded bg-[#fef08a] px-2 py-0.5 text-[11px] font-bold text-[#a16207]">
                    Sie sparen 3.500 €
                  </div>
                </div>
                <div className="shrink-0 w-full md:w-auto">
                  <a href={erstgespraechUrl("kombi")} className="block w-full rounded-md bg-[#ca8a04] px-6 py-3 text-sm font-bold text-white hover:bg-[#a16207] transition-colors text-center">
                    Kostenloses Erstgespräch vereinbaren
                  </a>
                </div>
              </div>

              {/* Footer Bar */}
              <div className="mt-4 flex flex-col md:flex-row items-center justify-center gap-4 border-t border-border pt-6">
                <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[13px] text-muted">
                  <span className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-[#1d6fd8]" /> 100 % transparent</span>
                  <span className="text-border" aria-hidden="true"> &bull; </span>
                  <span>Keine versteckten Kosten</span>
                  <span className="text-border" aria-hidden="true"> &bull; </span>
                  <span>Volle Kontrolle</span>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
      <ClosingCtaSection leistung="seo" />
      <Footer />
    </>
  );
}
