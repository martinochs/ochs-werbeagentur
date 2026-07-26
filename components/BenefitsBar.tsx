import { Heart, Leaf, Search, Smile, Users } from "lucide-react";

const benefits = [
  {
    icon: Users,
    title: "Mehr Privatpatienten",
    text: "Gezielte Sichtbarkeit für Ihre Wunschleistungen und Zielgruppen.",
  },
  {
    icon: Smile,
    title: "Höhere Zufriedenheit",
    text: "Weniger organisatorischer Aufwand für Ihr Praxisteam im Alltag.",
  },
  {
    icon: Heart,
    title: "Effizientere Abläufe",
    text: "Digitale Terminanfragen und klare Patientenführung online.",
  },
  {
    icon: Leaf,
    title: "Stärkere Praxismarke",
    text: "Ein professioneller Auftritt, der Vertrauen schafft.",
  },
  {
    icon: Search,
    title: "Bessere Google-Sichtbarkeit",
    text: "Technisches SEO und strukturierte Inhalte von Anfang an.",
  },
];

export function BenefitsBar() {
  return (
    <section
      id="fuer-praxen"
      className="border-t border-border bg-white py-12 lg:py-14"
      aria-label="Vorteile einer professionellen Praxis-Website"
    >
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {benefits.map(({ icon: Icon, title, text }) => (
            <article key={title} className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-teal/20 bg-teal-soft">
                <Icon className="h-7 w-7 text-teal" aria-hidden="true" />
              </div>
              <h3 className="text-sm font-semibold leading-snug text-navy">
                {title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted">
                {text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
