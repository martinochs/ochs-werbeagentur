import { Headphones, Search, Star, Users, X } from "lucide-react";

const benefits = [
  {
    icon: Star,
    title: "Hochwertiges Design",
    text: "Professioneller Praxis-Auftritt, der Vertrauen schafft — Patienten fühlen sich online genauso gut aufgehoben wie in Ihrer Praxis.",
  },
  {
    icon: Search,
    title: "Mehr Sichtbarkeit",
    text: "Suchmaschinenoptimierte Websites — damit Patienten Sie bei Google finden, wenn sie einen Arzt oder Zahnarzt in Mannheim suchen.",
  },
  {
    icon: Users,
    title: "Mehr Anfragen & Patienten",
    text: "Klare Struktur, Einbindung Ihres Terminbuchungssystems und überzeugende Inhalte, die Interessenten zur Kontaktaufnahme motivieren.",
  },
  {
    icon: Headphones,
    title: "Persönlicher Support",
    text: "Eine feste Ansprechpartnerin — von der Analyse bis zur laufenden Betreuung Ihrer Praxis-Website.",
  },
];

const painPoints = [
  "Veraltetes Design wirkt unseriös",
  "Schlechte Darstellung auf Smartphones",
  "Kaum Sichtbarkeit bei Google",
  "Keine klare Struktur für Patientenanfragen",
  "Technische Probleme ohne Ansprechpartner",
  "Keine Zeit für die Website neben dem Praxisalltag",
  "Sicherheitsrisiken bei veralteten Systemen",
];

export function WhySection() {
  return (
    <section
      id="fuer-praxen"
      className="border-t border-border bg-white py-16 lg:py-20"
      aria-labelledby="why-heading"
    >
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_320px] lg:gap-12">
          <div>
            <h2 id="why-heading" className="section-label text-center lg:text-left">
              Warum Praxen mit uns zusammenarbeiten
            </h2>
            <div className="mt-10 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
              {benefits.map(({ icon: Icon, title, text }) => (
                <article key={title} className="text-center lg:text-left">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-accent/20 bg-accent-soft lg:mx-0">
                    <Icon className="h-5 w-5 text-accent" aria-hidden="true" />
                  </div>
                  <h3 className="text-sm font-semibold text-navy">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
                </article>
              ))}
            </div>
          </div>

          <aside className="h-fit rounded-xl bg-accent-soft p-6 ring-1 ring-accent/10">
            <h3 className="text-xs font-bold uppercase tracking-wide text-navy">
              Typische Probleme veralteter Websites
            </h3>
            <ul className="mt-5 space-y-3">
              {painPoints.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-sm text-muted">
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-red-500" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
