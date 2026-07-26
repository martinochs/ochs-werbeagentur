import { ArrowRight, Calendar, Check, Clock, Phone } from "lucide-react";
import { ProfilePhoto } from "@/components/ProfilePhoto";

const highlights = [
  { icon: Phone, text: "Weniger Telefonaufwand durch klare Online-Informationen" },
  { icon: Calendar, text: "Online-Terminoptionen entlasten Ihr Praxisteam" },
  { icon: Clock, text: "Planbare Patientengewinnung statt Zufallstreffer" },
];

export function Hero() {
  return (
    <section className="bg-white" aria-labelledby="hero-heading">
      <div className="mx-auto max-w-6xl px-4 py-12 lg:px-8 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-12">
          <div>
            <p className="section-label mb-4">
              Spezialisiert auf Arzt- und Zahnarztpraxen
            </p>
            <h1
              id="hero-heading"
              className="text-[1.65rem] font-bold leading-tight text-navy sm:text-3xl lg:text-[2.35rem] lg:leading-[1.15]"
            >
              Webdesign für Arzt- und Zahnarztpraxen: Moderne Praxis-Websites
              mit Online-Terminbuchung, SEO und planbarer Patientengewinnung
            </h1>
            <p className="mt-5 text-[15px] leading-relaxed text-muted">
              Wir entwickeln professionelle Praxis-Websites für Ärzte und
              Zahnärzte in Mannheim — von der Strategie über Design und Umsetzung
              bis zur laufenden Betreuung. Alles aus einer Hand, persönlich
              betreut.
            </p>
            <ul className="mt-6 space-y-3">
              {highlights.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3 text-sm text-navy">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-soft">
                    <Icon className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                  </span>
                  {text}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="/praxisanalyse" className="btn-primary">
                Kostenlose Praxisanalyse anfordern
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a href="#designbeispiele" className="btn-secondary">
                Praxis-Beispiele ansehen
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <ProfilePhoto
              priority
              className="aspect-[4/5] w-full rounded-2xl shadow-xl lg:aspect-[3/4] lg:min-h-[480px]"
              sizes="(max-width: 1024px) 90vw, 520px"
            />

            <div className="absolute bottom-6 right-4 z-20 w-[min(100%,240px)] rounded-xl bg-white p-4 shadow-2xl ring-1 ring-black/5">
              <p className="text-xs font-semibold text-navy">Online-Termin buchen</p>
              <div className="mt-3 flex items-center gap-2 rounded-lg bg-[#eef3f9] px-3 py-2 text-xs text-navy">
                <Check className="h-4 w-4 text-accent" aria-hidden="true" />
                Heute, 10:30 Uhr
              </div>
              <button
                type="button"
                className="btn-primary mt-3 w-full py-2 text-xs"
              >
                Termin bestätigen
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
