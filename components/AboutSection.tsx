import { ClipboardList, Headphones, MessageCircle, Users } from "lucide-react";
import { ProfilePhoto } from "@/components/ProfilePhoto";
import { siteConfig } from "@/lib/seo/config";

const traits = [
  { icon: Headphones, label: "Direkter Kontakt statt Hotline" },
  { icon: ClipboardList, label: "Klare Angebote ohne versteckte Kosten" },
  { icon: MessageCircle, label: "Verständliche Beratung ohne Fachchinesisch" },
  { icon: Users, label: "Betreuung auch nach dem Launch" },
];

export function AboutSection() {
  const { contactPerson } = siteConfig;

  return (
    <section
      id="ueber-uns"
      className="border-t border-border bg-white py-16 lg:py-20"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-2 lg:items-center lg:gap-14 lg:px-8">
        <ProfilePhoto
          src="/images/mariia-ochs-about.png"
          alt={`${contactPerson} — Ihre Ansprechpartnerin für Praxis-Websites in Mannheim`}
          className="aspect-[3/4] w-full rounded-2xl shadow-xl lg:aspect-[2/3]"
          imageClassName="object-cover object-center"
          sizes="(max-width: 1024px) 100vw, 480px"
        />

        <div>
          <p className="section-label">Persönlich. Erreichbar. Verlässlich.</p>
          <h2
            id="about-heading"
            className="mt-3 text-2xl font-bold text-navy sm:text-[1.75rem]"
          >
            Ihre Ansprechpartnerin: {contactPerson}
          </h2>
          <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted">
            <p>
              Ich begleite Ihre Praxis persönlich — von der ersten Analyse über
              Design und Umsetzung bis zur fertigen Website. Als Spezialistin für
              Arzt- und Zahnarztpraxen verstehe ich, was im medizinischen Umfeld
              wichtig ist: Vertrauen, Klarheit und ein professioneller Auftritt.
            </p>
            <p>
              Sie haben immer dieselbe Ansprechpartnerin — keine Warteschleifen,
              keine wechselnden Projektmanager. Ich erkläre verständlich, was
              sinnvoll ist, und setze um, was Ihrer Praxis wirklich weiterhilft.
            </p>
          </div>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {traits.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-start gap-3 text-sm text-navy">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-soft">
                  <Icon className="h-4 w-4 text-accent" aria-hidden="true" />
                </div>
                <span className="pt-1.5 leading-snug">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
