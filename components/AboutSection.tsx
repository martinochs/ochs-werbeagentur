import { Check } from "lucide-react";
import { ProfilePhoto } from "@/components/ProfilePhoto";
import { siteConfig } from "@/lib/seo/config";

const traits = [
  "Spezialisiert auf Arzt- und Zahnarztpraxen",
  "Persönliche Betreuung von der Analyse bis zum Launch",
  "Websites und Google Ads aus einer Hand",
];

export function AboutSection() {
  const { contactPerson } = siteConfig;

  return (
    <section
      id="ansprechpartnerin"
      className="scroll-mt-28 border-t border-border bg-white py-14 lg:py-16"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[280px_1fr] lg:items-center lg:gap-12">
          <ProfilePhoto
            src="/images/mariia-ochs-about.png"
            alt={`${contactPerson} — Ihre persönliche Ansprechpartnerin`}
            className="mx-auto aspect-[4/5] w-full max-w-[280px] rounded-2xl shadow-xl lg:mx-0"
            imageClassName="object-cover object-center"
            sizes="(max-width: 1024px) 280px, 280px"
          />
          <div>
            <h2 id="about-heading" className="text-2xl font-bold text-navy sm:text-3xl">
              Ihre persönliche Ansprechpartnerin
            </h2>
            <p className="mt-2 text-base font-semibold text-[#16a34a]">{contactPerson}</p>
            <p className="text-sm font-medium text-navy">Inhaberin, OCHS Digital Consulting</p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
              Ihre persönliche Ansprechpartnerin für moderne Praxis-Websites und Google Ads.
              Ich begleite Sie deutschlandweit persönlich — von der ersten Analyse bis zur
              fertigen Website und optionalen laufenden Betreuung.
            </p>
            <ul className="mt-6 space-y-2.5">
              {traits.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-navy">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#16a34a]" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
