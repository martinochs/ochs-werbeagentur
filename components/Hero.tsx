import { ArrowRight, Calendar, Check, CheckCircle2, Clock, Phone, Tag, Stethoscope } from "lucide-react";
import { ProfilePhoto } from "@/components/ProfilePhoto";

const highlights = [
  { 
    title: "Weniger Telefonate, mehr Zeit für Patienten",
    text: "Digitale Abläufe reduzieren Rückfragen und Terminabsprachen." 
  },
  { 
    title: "Online-Termine rund um die Uhr",
    text: "Patienten buchen einfach, schnell und wann es ihnen passt." 
  },
  { 
    title: "Mehr passende Patienten und Vertrauen",
    text: "Moderner Auftritt bringt Ihre Praxis bei Google nach vorne." 
  },
];

export function Hero() {
  return (
    <section className="bg-white" aria-labelledby="hero-heading">
      <div className="mx-auto max-w-6xl px-4 py-12 lg:px-8 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-12">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[#16a34a]">
              Ausschließlich für Arzt- und Zahnarztpraxen
            </p>
            <h1
              id="hero-heading"
              className="text-[1.65rem] font-bold leading-tight text-navy sm:text-3xl lg:text-[2.35rem] lg:leading-[1.15]"
            >
              Webdesign für Arzt- und Zahnarztpraxen: Moderne Praxis-Websites
              mit Online-Terminbuchung, SEO und planbarer Patientengewinnung
            </h1>
            <p className="mt-5 text-[15px] leading-relaxed text-muted">
              Wir entwickeln professionelle Websites für Arztpraxen und Zahnarztpraxen mit
              Online-Terminbuchung, Suchmaschinenoptimierung (SEO), DSGVO-konformer
              Technik und gezielter Patientengewinnung. Von der ersten Analyse bis zur
              laufenden Betreuung erhalten Sie alles aus einer Hand.
            </p>
            <ul className="mt-8 space-y-4">
              {highlights.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#16a34a]" aria-hidden="true" />
                  <div>
                    <p className="text-[15px] font-semibold text-navy">{item.title}</p>
                    <p className="text-sm text-muted">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-xl border border-[#86efac] bg-[#f0fdf4] p-4 sm:p-5">
              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#16a34a] text-white">
                  <Tag className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-[#166534]">
                    Aktionspreis bis 31.10.2026
                  </p>
                  <p className="mt-1 text-base text-navy sm:text-lg">
                    <span className="font-semibold">Premium Praxis-Website für</span>{" "}
                    <span className="text-2xl font-bold text-[#166534] sm:text-3xl">2.999 €</span>{" "}
                    <span className="font-semibold">netto</span>
                  </p>
                  <p className="mt-1 text-[13px] text-muted">
                    Regulär anschließend 4.749 € netto &bull; <span className="font-semibold text-navy">Sie sparen 1.750 €</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href="/praxisanalyse" className="btn-primary flex items-center justify-center gap-2 px-6 py-3.5 text-base">
                Kostenlose Praxisanalyse anfordern
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a href="#preise" className="flex items-center justify-center gap-2 rounded-lg border-2 border-navy bg-white px-6 py-3.5 text-base font-semibold text-navy transition-colors hover:bg-slate-50">
                Aktionsangebot ansehen
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <ProfilePhoto
              priority
              className="aspect-[4/5] w-full rounded-2xl shadow-xl lg:aspect-[3/4] lg:min-h-[480px]"
              sizes="(max-width: 1024px) 90vw, 520px"
            />

            {/* Top Right Floating Badge */}
            <div className="absolute right-4 top-8 z-20 flex flex-col items-center justify-center rounded-xl bg-white/90 p-3 text-center shadow-lg backdrop-blur-sm ring-1 ring-black/5">
              <Stethoscope className="h-6 w-6 text-navy" strokeWidth={1.5} aria-hidden="true" />
              <p className="mt-1 text-[10px] font-bold uppercase tracking-wide text-navy">
                Zahnarztpraxis
                <br />
                Mannheim
              </p>
            </div>

            {/* Bottom Right Floating Widget */}
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
