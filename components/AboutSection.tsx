import { ArrowRight, Check, Mail, Phone } from "lucide-react";
import { ProfilePhoto } from "@/components/ProfilePhoto";
import { siteConfig } from "@/lib/seo/config";

const traits = [
  "Persönliche Betreuung von Anfang bis Launch",
  "Spezialisiert auf Arzt- und Zahnarztpraxen",
  "Transparente Festpreise ohne versteckte Kosten",
];

export function AboutSection() {
  const { contactPerson, phone, phoneDisplay, email } = siteConfig;

  return (
    <section
      id="ueber-uns"
      className="scroll-mt-28 border-t border-border bg-white py-16 lg:py-20"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="rounded-[2rem] border border-border bg-[#f8fafc] p-6 sm:p-10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[340px_1fr] lg:items-center lg:gap-16">
            <ProfilePhoto
              src="/images/mariia-ochs-about.png"
              alt={`${contactPerson} — Ihre persönliche Ansprechpartnerin`}
              className="aspect-[3/4] w-full rounded-2xl shadow-xl"
              imageClassName="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 400px"
            />
            <div>
              <h2 id="about-heading" className="text-2xl font-bold text-navy sm:text-3xl">
                Ihre persönliche Ansprechpartnerin
              </h2>
              <p className="mt-2 text-base font-semibold text-[#16a34a]">{contactPerson}</p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Gründerin und Expertin für Praxis-Websites in Mannheim. Ich begleite
                Sie persönlich — von der ersten Analyse über Design und Umsetzung
                bis zur fertigen Website und optionalen laufenden Betreuung.
              </p>
              <ul className="mt-8 space-y-3">
                {traits.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-base text-navy">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#16a34a]" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 space-y-3 text-base">
                {phone && phoneDisplay && (
                  <a
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-2.5 font-semibold text-navy hover:text-[#16a34a]"
                  >
                    <Phone className="h-5 w-5" aria-hidden="true" />
                    {phoneDisplay}
                  </a>
                )}
                {email && (
                  <a
                    href={`mailto:${email}`}
                    className="flex items-center gap-2.5 text-muted hover:text-navy"
                  >
                    <Mail className="h-5 w-5" aria-hidden="true" />
                    {email}
                  </a>
                )}
                {!phone && !email && (
                  <p className="text-sm text-muted">Telefon und E-Mail folgen in Kürze.</p>
                )}
              </div>
              <a href="/praxisanalyse" className="btn-primary mt-8 inline-flex px-6 py-3.5 text-base">
                Erstgespräch mit Mariia vereinbaren
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
