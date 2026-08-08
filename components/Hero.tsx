import { ArrowRight, Calendar, Check, CheckCircle2, Stethoscope } from "lucide-react";
import { ProfilePhoto } from "@/components/ProfilePhoto";
import { erstgespraechUrl, primaryCtaLabel } from "@/lib/cta";

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
    title: "Passende Patienten gewinnen und Vertrauen schaffen",
    text: "Moderner Auftritt und gezielte SEO verbessern Ihre digitale Sichtbarkeit." 
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
              className="text-[1.65rem] font-bold leading-tight text-navy sm:text-3xl lg:text-[2.35rem] lg:leading-[1.15] max-w-xl text-balance"
            >
              Praxis-Websites, die Ihr Team entlasten und neue Patienten überzeugen
            </h1>
            <p className="mt-5 text-[15px] leading-relaxed text-muted max-w-lg">
              Individuell entwickelt für Arzt- und Zahnarztpraxen – mit Online-Terminbuchung, lokaler Google-Sichtbarkeit und persönlicher Betreuung.
            </p>
            <p className="mt-3 text-sm font-medium text-navy">
              Bundesweit für Arzt- und Zahnarztpraxen – persönlich betreut.
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

            <div className="mt-10 flex flex-col gap-3">
              <div className="flex flex-col gap-4 sm:flex-row">
                <a href={erstgespraechUrl()} className="btn-primary flex items-center justify-center gap-2 px-6 py-3.5 text-base">
                  {primaryCtaLabel}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a href="/leistungen" className="flex items-center justify-center gap-2 rounded-lg border-2 border-navy bg-white px-6 py-3.5 text-base font-semibold text-navy transition-colors hover:bg-slate-50">
                  Leistungen und Preise ansehen
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
              <p className="max-w-lg text-sm text-muted">
                In einem kostenlosen und unverbindlichen Erstgespräch besprechen wir Ihre
                Ziele und welche digitale Lösung zu Ihrer Praxis passt.
              </p>
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
