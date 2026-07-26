import { Clock, MousePointerClick, Search, Smartphone, Users } from "lucide-react";

const stats = [
  {
    icon: Search,
    value: "71%",
    label: "der Patienten informieren sich online, bevor sie einen Arzt wählen.",
  },
  {
    icon: MousePointerClick,
    value: "10x",
    label: "mehr Klicks für das erste organische Google-Ergebnis.",
  },
  {
    icon: Smartphone,
    value: "53%",
    label: "der mobilen Besucher verlassen die Seite bei Ladezeiten über 3 Sekunden.",
  },
  {
    icon: Clock,
    value: "34%",
    label: "geringere No-Show-Rate mit digitalen Terminerinnerungen.",
  },
  {
    icon: Users,
    value: "Über 60%",
    label: "der Patienten suchen zuerst online nach einer Praxis.",
  },
];

export function StatsSection() {
  return (
    <section
      className="bg-navy py-10 text-white lg:py-12"
      aria-label="Zahlen, die den Unterschied machen"
    >
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          {stats.map(({ icon: Icon, value, label }, index) => (
            <article key={index} className="text-center lg:text-left">
              <Icon
                className="mx-auto mb-3 h-6 w-6 text-teal-light lg:mx-0"
                aria-hidden="true"
              />
              <p className="text-2xl font-bold text-teal-light sm:text-3xl">
                {value}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-white/75">
                {label}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
