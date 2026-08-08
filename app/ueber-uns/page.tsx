import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { ProfilePhoto } from "@/components/ProfilePhoto";
import { primaryCtaLabel } from "@/lib/cta";
import { formatAddress, mapsUrl, siteConfig } from "@/lib/seo/config";
import { ArrowRight, Check, Phone, Mail, MapPin, Target, Lightbulb, Users, MessagesSquare, Settings, CheckCircle2, Info } from "lucide-react";

export const metadata = {
  title: "Über uns",
  description: "Erfahren Sie mehr über OCHS Digital Consulting und Mariia Ochs. Wir entwickeln moderne Websites und Google-Ads-Kampagnen speziell für Arzt- und Zahnarztpraxen.",
};

export default function UeberUnsPage() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main className="flex-1 bg-white">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-[#f8fafc] border-b border-border">
          <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
            <p className="text-sm font-bold uppercase tracking-widest text-[#16a34a] mb-4">
              Über OCHS Digital Consulting
            </p>
            <h1 className="text-3xl font-bold text-navy sm:text-4xl lg:text-5xl">
              Digitale Lösungen für moderne Arzt- und Zahnarztpraxen
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              OCHS Digital Consulting entwickelt moderne Websites und Google-Ads-Kampagnen speziell für Arzt- und Zahnarztpraxen.
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted">
              Unser Ziel ist nicht nur ein ansprechendes Design. Ihre Website soll Vertrauen schaffen, Ihre Leistungen verständlich präsentieren und potenziellen Patientinnen und Patienten die Kontaktaufnahme erleichtern.
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-lg font-medium text-navy">
              Dabei verbinden wir modernes Webdesign mit wirtschaftlichem Denken und einer klaren Strategie.
            </p>
            <div className="mt-10">
              <a href="/praxisanalyse" className="btn-primary inline-flex px-8 py-4 text-base">
                {primaryCtaLabel}
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        {/* Persönlich geführt Section */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-6xl px-4 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[1fr_400px] lg:items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-2xl font-bold text-navy sm:text-3xl lg:text-4xl">
                  Persönlich geführt von Mariia Ochs
                </h2>
                <div className="mt-6 space-y-5 text-base leading-relaxed text-muted">
                  <p>
                    Ich bin Mariia Ochs, Inhaberin von OCHS Digital Consulting.
                  </p>
                  <p>
                    Durch meinen Bachelorabschluss in Economics betrachte ich eine Website nicht nur aus gestalterischer, sondern auch aus wirtschaftlicher Sicht. Ein digitaler Auftritt sollte nicht einfach nur schön aussehen. Er sollte einen klaren Zweck erfüllen, Vertrauen aufbauen und Ihre Praxis bei der Gewinnung passender Patientinnen und Patienten unterstützen.
                  </p>
                  <p>
                    Viele Arzt- und Zahnarztpraxen leisten fachlich hervorragende Arbeit. Der bestehende Internetauftritt vermittelt diese Qualität jedoch nicht immer. Veraltete Gestaltung, unübersichtliche Inhalte oder komplizierte Kontaktmöglichkeiten können dazu führen, dass sich potenzielle Patienten für eine andere Praxis entscheiden.
                  </p>
                  <p className="font-medium text-navy">
                    Wir entwickeln digitale Auftritte, die besser zur tatsächlichen Qualität Ihrer Praxis passen.
                  </p>
                </div>
              </div>
              <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                <div className="relative w-full max-w-[340px]">
                  <div className="absolute -inset-4 rounded-[2rem] bg-[#f0fdf4] -z-10 transform rotate-3"></div>
                  <ProfilePhoto
                    src="/images/mariia-ochs-about.png"
                    alt="Mariia Ochs — Inhaberin von OCHS Digital Consulting"
                    className="aspect-[3/4] w-full rounded-2xl shadow-lg ring-1 ring-black/5"
                    imageClassName="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 400px"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Spezialisierung Section */}
        <section className="py-16 lg:py-24 bg-[#0a2540] text-white">
          <div className="mx-auto max-w-6xl px-4 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl">
                  Warum wir uns auf Praxen spezialisiert haben
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-white/80">
                  Bei der Wahl einer Arzt- oder Zahnarztpraxis spielen Vertrauen und der erste Eindruck eine besonders wichtige Rolle.
                </p>
                <p className="mt-4 text-base leading-relaxed text-white/80">
                  Eine erfolgreiche Praxis-Website muss die wichtigsten Fragen potenzieller Patienten innerhalb kurzer Zeit beantworten.
                </p>
                <p className="mt-8 text-base leading-relaxed text-white/90 font-medium">
                  Deshalb konzentrieren wir uns vollständig auf Arzt- und Zahnarztpraxen. Gestaltung, Texte, Nutzerführung und Werbung werden von Anfang an auf die Anforderungen einer modernen Praxis ausgerichtet.
                </p>
                <p className="mt-4 text-base leading-relaxed text-[#4ade80] font-bold">
                  Wir erstellen keine beliebige Unternehmenswebsite, die anschließend lediglich an eine Praxis angepasst wird.
                </p>
              </div>
              
              <div className="rounded-2xl bg-white/10 p-8 backdrop-blur-sm border border-white/10">
                <h3 className="text-xl font-bold mb-6 text-white">
                  Potenzielle Patienten möchten schnell erkennen:
                </h3>
                <ul className="space-y-4">
                  {[
                    "Welche Leistungen bietet die Praxis an?",
                    "Passt die Praxis zu meinem Anliegen?",
                    "Wirkt das Team vertrauenswürdig?",
                    "Wie kann ich einen Termin vereinbaren?",
                    "Ist die Praxis modern und gut organisiert?"
                  ].map((question, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#16a34a] text-white mt-0.5">
                        <Check className="h-4 w-4" strokeWidth={3} />
                      </div>
                      <span className="text-base text-white/90">{question}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Anspruch Section */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
            <Target className="mx-auto h-12 w-12 text-[#16a34a] mb-6" />
            <h2 className="text-2xl font-bold text-navy sm:text-3xl lg:text-4xl">
              Unser Anspruch
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted text-left md:text-center">
              <p>
                Wir möchten digitale Lösungen entwickeln, die modern, verständlich und wirtschaftlich sinnvoll sind.
              </p>
              <p>
                Selbstverständlich berücksichtigen wir Ihre Wünsche, Ihre Praxisphilosophie und das bestehende Erscheinungsbild. Gleichzeitig dürfen Sie von uns eine klare und professionelle Empfehlung erwarten.
              </p>
              <p className="p-6 bg-[#f8fafc] rounded-2xl border border-border text-navy font-medium">
                Wenn wir eine gewünschte Gestaltung oder Funktion für veraltet, unübersichtlich oder ungeeignet halten, setzen wir sie nicht einfach ungeprüft um. Wir erklären Ihnen unsere Einschätzung und zeigen Ihnen eine bessere Alternative.
              </p>
              <p>
                Denn eine neue Website sollte nicht nur Ihre bisherige Seite in einem anderen Design wiederholen. Sie sollte Ihre Praxis digital weiterentwickeln.
              </p>
            </div>
          </div>
        </section>

        {/* Zusammenarbeit Section */}
        <section className="py-16 lg:py-24 bg-[#f8fafc] border-y border-border">
          <div className="mx-auto max-w-6xl px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-2xl font-bold text-navy sm:text-3xl lg:text-4xl">
                So funktioniert die Zusammenarbeit
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {/* Step 1 */}
              <div className="relative flex flex-col rounded-2xl bg-white p-8 shadow-sm border border-border">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#e6f4ea] text-[#166534] mb-6">
                  <MessagesSquare className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">1. Persönliches Erstgespräch</h3>
                <p className="text-sm text-muted leading-relaxed flex-1">
                  Zu Beginn lernen wir Ihre Praxis, Ihre Leistungen und Ihre Ziele kennen. Wir
                  besprechen, welche Patientengruppen Sie ansprechen möchten und ob Sie eine
                  Website, Google Ads oder eine Kombination aus beidem benötigen.
                </p>
                <p className="mt-4 text-xs font-semibold text-[#166534] bg-[#e6f4ea] inline-block px-3 py-1.5 rounded-md w-fit">
                  Bequem telefonisch oder per Video
                </p>
              </div>

              {/* Step 2 */}
              <div className="relative flex flex-col rounded-2xl bg-white p-8 shadow-sm border border-border">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#eff6ff] text-[#1d6fd8] mb-6">
                  <Lightbulb className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">2. Klare Empfehlung</h3>
                <p className="text-sm text-muted leading-relaxed flex-1">
                  Anschließend entwickeln wir eine passende Strategie für Ihre Praxis. Sie erhalten
                  eine klare Empfehlung zum Aufbau der Website, zu den benötigten Inhalten und –
                  sofern gewünscht – zur Ausrichtung Ihrer Google-Ads-Kampagne.
                </p>
              </div>

              {/* Step 3 */}
              <div className="relative flex flex-col rounded-2xl bg-white p-8 shadow-sm border border-border">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f5f3ff] text-[#6d28d9] mb-6">
                  <Settings className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">3. Vollständige Umsetzung</h3>
                <p className="text-sm text-muted leading-relaxed flex-1">
                  Wir übernehmen die technische und gestalterische Umsetzung für Sie. Je nach gewählter Leistung erstellen wir Ihre neue Praxis-Website, integrieren die Terminbuchung oder richten Ihre Google-Ads-Kampagnen einschließlich Erfolgsmessung ein.
                </p>
                <p className="mt-4 text-xs font-semibold text-[#6d28d9] bg-[#f5f3ff] inline-block px-3 py-1.5 rounded-md w-fit">
                  Unkomplizierte Online-Abstimmung
                </p>
              </div>

              {/* Step 4 */}
              <div className="relative flex flex-col rounded-2xl bg-white p-8 shadow-sm border border-border">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#fefce8] text-[#ca8a04] mb-6">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">4. Abstimmung & Veröffentlichung</h3>
                <p className="text-sm text-muted leading-relaxed flex-1">
                  Während der Umsetzung berücksichtigen wir Ihre Wünsche. Nach Ihrer Freigabe veröffentlichen wir die Website beziehungsweise starten die Werbekampagne. Auf Wunsch übernehmen wir anschließend auch die laufende Betreuung.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA & Contact Section */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-6xl px-4 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              
              {/* CTA */}
              <div className="flex flex-col justify-center">
                <h2 className="text-2xl font-bold text-navy sm:text-3xl">
                  Lassen Sie uns über Ihre Praxis sprechen
                </h2>
                <p className="mt-4 text-lg text-muted leading-relaxed">
                  Sie möchten wissen, wie Ihre Praxis online moderner, sichtbarer und überzeugender auftreten kann?
                </p>
                <p className="mt-4 text-lg text-muted leading-relaxed">
                  In einem unverbindlichen Erstgespräch lernen wir Ihre Praxis kennen und besprechen,
                  welche Lösung zu Ihren Zielen passt.
                </p>
                <div className="mt-8">
                  <a href="/praxisanalyse" className="btn-primary inline-flex px-8 py-4 text-base w-full sm:w-auto justify-center">
                    {primaryCtaLabel}
                  </a>
                </div>
              </div>

              {/* Contact Card */}
              <div className="rounded-3xl bg-[#0a2540] p-8 sm:p-10 text-white shadow-xl">
                <h3 className="text-xl font-bold mb-8 text-[#4ade80]">Ihre Ansprechpartnerin</h3>
                
                <div className="flex items-center gap-5 mb-8 pb-8 border-b border-white/10">
                  <div className="h-16 w-16 overflow-hidden rounded-full border-2 border-white/20 shrink-0">
                    <img src="/images/mariia-ochs-about.png" alt="Mariia Ochs" className="h-full w-full object-cover object-top" />
                  </div>
                  <div>
                    <p className="text-lg font-bold">Mariia Ochs</p>
                    <p className="text-sm text-white/70">Inhaberin von OCHS Digital Consulting</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
                      <Phone className="h-5 w-5 text-[#4ade80]" />
                    </div>
                    <div>
                      <p className="text-xs text-white/60 uppercase tracking-wider mb-1">Telefon</p>
                      <p className="text-base font-medium">{siteConfig.phoneDisplay || "Wird in Kürze ergänzt"}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
                      <Mail className="h-5 w-5 text-[#4ade80]" />
                    </div>
                    <div>
                      <p className="text-xs text-white/60 uppercase tracking-wider mb-1">E-Mail</p>
                      <p className="text-base font-medium">{siteConfig.email}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
                      <MapPin className="h-5 w-5 text-[#4ade80]" />
                    </div>
                    <div>
                      <p className="text-xs text-white/60 uppercase tracking-wider mb-1">Büro</p>
                      <p className="text-base font-medium">{formatAddress()}</p>
                      <a
                        href={mapsUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 inline-block text-sm text-[#4ade80] underline-offset-2 hover:underline"
                      >
                        In Google Maps öffnen
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-sm text-white/80 leading-relaxed flex items-start gap-3">
                    <Info className="h-5 w-5 shrink-0 text-[#4ade80] mt-0.5" />
                    Beratung für Arzt- und Zahnarztpraxen deutschlandweit per Telefon oder Videogespräch.
                  </p>
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
