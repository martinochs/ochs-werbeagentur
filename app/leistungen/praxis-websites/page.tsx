import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ClosingCtaSection } from "@/components/ClosingCtaSection";
import { ScrollToTop } from "@/components/ScrollToTop";
import { erstgespraechUrl, primaryCtaLabel } from "@/lib/cta";
import {
  terminbuchungFeatureTitle,
  terminbuchungHeroMention,
} from "@/lib/content/terminbuchung";
import {
  websiteBetreuungContentChangeFeature,
  websiteBetreuungContentChangeScope,
  websiteBetreuungIntro,
} from "@/lib/content/website-betreuung";
import { TerminbuchungDisclaimer } from "@/components/TerminbuchungDisclaimer";
import { Monitor, Check, Gift, ShieldCheck, Info, Star, Rocket, TrendingUp, Activity } from "lucide-react";

export const metadata = {
  title: "Praxis-Websites für Ärzte",
  description:
    "Moderne Praxis-Websites mit Einbindung Ihres bestehenden Terminbuchungssystems und datenschutzfreundlicher technischer Umsetzung. Perfekt auf Ihre Fachrichtung zugeschnitten.",
};

export default function PraxisWebsitesPage() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main className="flex-1 bg-white">
        {/* Hero Section */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
            <h1 className="text-3xl font-bold text-navy sm:text-4xl lg:text-5xl">
              Ihre neue Praxis-Website. Modern, sicher, gewinnend.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              Wir erstellen individuelle Websites für Ärzte und Zahnärzte – optimiert für die Patientengewinnung,
              inklusive {terminbuchungHeroMention.toLowerCase()} und datenschutzfreundlicher technischer Umsetzung.
            </p>
          </div>
        </section>

        {/* Dedicated Pricing Section for Praxis-Websites */}
        <section id="preise" className="scroll-mt-28 border-t border-border bg-[#f8fafc] py-16 lg:py-24">
          <div className="mx-auto max-w-6xl px-4 lg:px-8">
            
            <div className="mx-auto max-w-3xl text-center mb-12">
              <h2 className="text-2xl font-bold text-navy sm:text-3xl">
                Transparentes Angebot für Ihre Praxis
              </h2>
              <p className="mt-4 text-base text-muted">
                Ein fester Preis für Ihre neue Website. Keine versteckten Kosten.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              {/* Hauptangebot */}
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
                          Premium Praxis-Website
                        </h3>
                        <p className="mt-1 text-sm leading-snug text-muted">
                          Die Basis für Ihren digitalen Auftritt.
                        </p>
                      </div>
                    </div>

                    <p className="mt-6 text-sm text-navy">
                      Wir konzipieren, designen und programmieren Ihre neue Praxis-Website – <br />
                      schlüsselfertig und bereit für neue Patienten.
                    </p>

                    <ul className="mt-6 space-y-4">
                      {[
                        { title: "Individuelles Design", desc: "Modernes Layout, das perfekt zu Ihrer Praxis passt." },
                        {
                          title: terminbuchungFeatureTitle,
                          desc: "Nahtlos in Ihr Website-Design integriert.",
                        },
                        { title: "Datenschutzfreundliche technische Umsetzung", desc: "Deutsches Kundenhosting, SSL-Verschlüsselung und datensparsame Einbindungen — Impressum und Datenschutz als Basis." },
                        { title: "SEO-Grundoptimierung", desc: "Gute Auffindbarkeit bei Google von Anfang an." },
                        { title: "Texte & Bilder auf Wunsch", desc: "Wir unterstützen Sie bei der professionellen Inhaltserstellung." },
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

                    <TerminbuchungDisclaimer className="mt-6" />
                  </div>

                  {/* Right Side */}
                  <div className="w-full lg:w-[380px] shrink-0">
                    <div className="rounded-xl border border-[#ddd6fe] bg-[#f5f3ff] p-6 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <Gift className="h-4 w-4 text-[#5b21b6]" aria-hidden="true" />
                        <p className="text-[11px] font-bold uppercase tracking-wide text-[#5b21b6]">
                          AKTION BIS 31.10.2026
                        </p>
                      </div>
                      <div className="mt-6">
                        <p className="text-sm text-muted">Statt <span className="line-through decoration-red-500 decoration-2">4.749 €</span> regulär</p>
                        <p className="mt-2 text-5xl font-extrabold text-[#5b21b6]">
                          2.999 €
                        </p>
                        <p className="mt-1 text-sm font-medium text-navy">einmalig</p>
                      </div>
                      <div className="mx-auto mt-4 inline-block rounded bg-[#7c3aed] px-3 py-1 text-[13px] font-bold text-white">
                        Sie sparen 1.750 €
                      </div>
                      <a
                        href={erstgespraechUrl("website")}
                        className="mt-6 block w-full rounded-lg bg-[#5b21b6] px-4 py-3 text-sm font-bold text-white transition-opacity hover:opacity-90 text-center"
                      >
                        {primaryCtaLabel}
                      </a>
                    </div>

                    <div className="mt-6 space-y-4 px-2">
                      <div className="flex items-start gap-3">
                        <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#5b21b6]" aria-hidden="true" />
                        <div>
                          <p className="text-sm font-bold text-navy">Schlüsselfertig</p>
                          <p className="text-xs text-muted">Sie müssen sich um keine technischen Details kümmern.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Activity className="mt-0.5 h-5 w-5 shrink-0 text-[#5b21b6]" aria-hidden="true" />
                        <div>
                          <p className="text-sm font-bold text-navy">Mobil optimiert</p>
                          <p className="text-xs text-muted">Perfekte Darstellung auf allen Smartphones und Tablets.</p>
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
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#1d6fd8] text-white">
                        <ShieldCheck className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold leading-snug text-[#1d6fd8]">
                          Website-Betreuung
                        </h3>
                        <p className="mt-1 text-sm leading-snug text-muted">
                          Wir kümmern uns um die Technik und Inhalte Ihrer Website.
                        </p>
                      </div>
                    </div>

                    <p className="mt-6 text-sm text-navy">
                      Lehnen Sie sich zurück. {websiteBetreuungIntro}
                    </p>

                    <div className="mt-6 grid sm:grid-cols-2 gap-x-6 gap-y-4">
                      {[
                        { title: "Technische Updates und Sicherheitsaktualisierungen", desc: "Für dauerhafte Stabilität und Sicherheit Ihrer Website." },
                        { title: "Tägliche Backups", desc: "Automatische Sicherungen Ihrer gesamten Website." },
                        { title: "Sicherheitschecks", desc: "Proaktiver Schutz vor Malware und Hackerangriffen." },
                        { title: "Inhaltliche Änderungen", desc: websiteBetreuungContentChangeFeature },
                        { title: "Persönlicher Support", desc: "Schnelle Hilfe bei allen Fragen rund um Ihre Website." },
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
                        249 €
                      </p>
                      <p className="mt-1 text-sm font-medium text-navy">/ Monat</p>
                      <p className="mt-4 text-xs text-muted">Monatlich kündbar</p>
                      
                      <div className="mt-6 border-t border-[#bfdbfe] pt-4 flex items-start gap-2 text-left">
                        <Info className="mt-0.5 h-4 w-4 shrink-0 text-[#1d6fd8]" aria-hidden="true" />
                        <p className="text-xs text-muted">
                          Sorgenfreier Betrieb Ihrer Praxis-Website ohne technischen Aufwand für Sie.
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
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#5b21b6] text-white">
                        <Rocket className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-[#5b21b6]">Neue Website erstellen?</h4>
                        <p className="mt-1 text-[13px] text-muted">
                          Entscheiden Sie sich für unser Premium-Paket und erhalten Sie einen modernen Auftritt.
                        </p>
                      </div>
                    </div>
                    <ul className="mt-6 space-y-2">
                      <li className="flex items-center gap-2 text-[13px] text-navy">
                        <Check className="h-4 w-4 text-[#5b21b6]" /> Einmalige Einrichtung
                      </li>
                      <li className="flex items-center gap-2 text-[13px] text-navy">
                        <Check className="h-4 w-4 text-[#5b21b6]" /> Modernes, individuelles Design
                      </li>
                      <li className="flex items-center gap-2 text-[13px] text-navy">
                        <Check className="h-4 w-4 text-[#5b21b6]" /> Ideal für Neugründungen oder Relaunches
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
                        <h4 className="text-base font-bold text-[#1d6fd8]">Rundum-Sorglos-Paket?</h4>
                        <p className="mt-1 text-[13px] text-muted">
                          Kombinieren Sie die Erstellung mit unserer monatlichen Betreuung für maximale Sicherheit.
                        </p>
                      </div>
                    </div>
                    <ul className="mt-6 space-y-2">
                      <li className="flex items-center gap-2 text-[13px] text-navy">
                        <Check className="h-4 w-4 text-[#1d6fd8]" /> Website immer auf dem neuesten Stand
                      </li>
                      <li className="flex items-center gap-2 text-[13px] text-navy">
                        <Check className="h-4 w-4 text-[#1d6fd8]" /> Technische Updates und Sicherheitsaktualisierungen
                      </li>
                      <li className="flex items-center gap-2 text-[13px] text-navy">
                        <Check className="h-4 w-4 text-[#1d6fd8]" /> {websiteBetreuungContentChangeScope}
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
                    {" "}
                    <span className="text-3xl font-extrabold text-[#ca8a04]">5.499 €</span>
                  </div>
                  <div className="mt-1.5 inline-block rounded bg-[#fef08a] px-2 py-0.5 text-[11px] font-bold text-[#a16207]">
                    Sie sparen 3.500 €
                  </div>
                </div>
                <div className="shrink-0 w-full md:w-auto">
                  <a href={erstgespraechUrl("kombi")} className="block w-full rounded-md bg-[#ca8a04] px-6 py-3 text-sm font-bold text-white hover:bg-[#a16207] transition-colors text-center">
                    {primaryCtaLabel}
                  </a>
                </div>
              </div>

              {/* Footer Bar */}
              <div className="mt-4 flex flex-col md:flex-row items-center justify-center gap-4 border-t border-border pt-6">
                <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[13px] text-muted">
                  <span className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-[#5b21b6]" /> 100 % transparent</span>
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
      <ClosingCtaSection leistung="website" />
      <Footer />
    </>
  );
}
