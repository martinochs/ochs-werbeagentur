import {
  Globe,
  Headphones,
  Layout,
  Megaphone,
  Pencil,
} from "lucide-react";

const services = [
  {
    icon: Layout,
    title: "Webdesign",
    text: "Individuelle, vertrauenswürdige Praxis-Websites — modern, übersichtlich und auf Ihre Fachrichtung zugeschnitten.",
  },
  {
    icon: Megaphone,
    title: "Google Ads",
    text: "Gezielte Anzeigen für Ihre Praxis — messbar, regional ausgerichtet und auf neue Patientenanfragen optimiert.",
  },
  {
    icon: Globe,
    title: "Hosting & Wartung",
    text: "Sicheres Hosting Ihrer Praxis-Website in Deutschland mit regelmäßigen Updates, Backups und technischer Wartung — datenschutzfreundlich umgesetzt.",
  },
  {
    icon: Headphones,
    title: "Persönlicher Support",
    text: "Schnelle Hilfe bei Fragen — direkt bei Mariia Ochs, ohne Warteschleifen oder wechselnde Ansprechpartner.",
  },
  {
    icon: Pencil,
    title: "Inhalte & Anpassungen",
    text: "Texte, Bilder und kleine Änderungen — damit Ihre Praxis-Website aktuell bleibt, ohne dass Sie alles selbst machen.",
  },
];

export function ServicesSection() {
  return (
    <section
      id="leistungen"
      className="border-t border-border bg-surface py-16 lg:py-20"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <h2 id="services-heading" className="section-label">
          Unsere Leistungen
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="rounded-xl border border-border bg-white p-6 shadow-sm"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-accent-soft">
                <Icon className="h-5 w-5 text-accent" aria-hidden="true" />
              </div>
              <h3 className="text-base font-semibold text-navy">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
