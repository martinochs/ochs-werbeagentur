import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { erstgespraechUrl, primaryCtaLabel } from "@/lib/cta";
import { analyseCtaSubtext } from "@/lib/content/website-analyse";
import { terminbuchungHeroMention } from "@/lib/content/terminbuchung";
import { siteConfig } from "@/lib/seo/config";

const highlights = [
  { 
    title: "Weniger Telefonate, mehr Zeit für Patienten",
    text: "Digitale Abläufe reduzieren Rückfragen und Terminabsprachen." 
  },
  { 
    title: "Bestehendes Terminbuchungssystem eingebunden",
    text: "Patienten nutzen Ihr vorhandenes System direkt über die Website — rund um die Uhr und ohne zusätzliche Telefonate." 
  },
  { 
    title: "Passende Patienten gewinnen und Vertrauen schaffen",
    text: "Moderner Auftritt und gezielte SEO verbessern Ihre digitale Sichtbarkeit." 
  },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white" aria-labelledby="hero-heading">
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-12 lg:px-8 lg:py-16 lg:min-h-[680px]">
        <div className="max-w-xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[#16a34a]">
            Ausschließlich für Arzt- und Zahnarztpraxen
          </p>
          <h1
            id="hero-heading"
            className="text-[1.65rem] font-bold leading-tight text-navy sm:text-3xl lg:text-[2.35rem] lg:leading-[1.15] text-balance"
          >
            Praxis-Websites, die Ihr Team entlasten und neue Patienten überzeugen
          </h1>
          <p className="mt-5 text-[15px] leading-relaxed text-muted">
            Individuell entwickelt für Arzt- und Zahnarztpraxen – mit {terminbuchungHeroMention}, lokaler Google-Sichtbarkeit und persönlicher Betreuung.
          </p>
          <p className="mt-3 text-sm font-medium text-navy">
            Bundesweit für Arzt- und Zahnarztpraxen – persönlich betreut von{" "}
            <span className="whitespace-nowrap">Mariia Ochs</span>.
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
            <p className="max-w-lg text-sm text-muted">{analyseCtaSubtext}</p>
          </div>
        </div>
      </div>

      <div className="relative h-[520px] sm:h-[640px] lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-[58%]">
        <Image
          src="/images/mariia-ochs-start.jpg"
          alt={`${siteConfig.contactPerson}, Gründerin von ${siteConfig.name}`}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 58vw"
          className="object-cover object-[center_22%]"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,white_0%,rgba(255,255,255,0.72)_16%,transparent_42%)] lg:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0.92)_8%,rgba(255,255,255,0.55)_24%,transparent_46%)]"
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
