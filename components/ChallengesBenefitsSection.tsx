import {
  BarChart3,
  Calendar,
  ChevronRight,
  Headphones,
  Monitor,
  Phone,
  Star,
  User,
} from "lucide-react";

const challenges = [
  {
    icon: Phone,
    title: "Zu viele Telefonate und Unterbrechungen",
    text: "Ihr Team ist ständig gestört und kann sich nicht auf die Patienten konzentrieren.",
  },
  {
    icon: Headphones,
    title: "Unpassende Anfragen und Rückfragen",
    text: "Falsche Erwartungen und unklare Informationen kosten Zeit und Nerven.",
  },
  {
    icon: BarChart3,
    title: "Veraltete Praxis-Website und schwache Sichtbarkeit",
    text: "Ihre Website wird online nicht gefunden oder vermittelt keinen professionellen Eindruck.",
  },
  {
    icon: User,
    title: "Zu wenig Zeit für das Wesentliche",
    text: "Organisatorische Aufgaben nehmen Zeit in Anspruch, die für Ihre Patienten und Ihr Team fehlt.",
  },
];

const benefits = [
  {
    icon: Calendar,
    title: "Patienten buchen Termine online – rund um die Uhr",
    text: "Eine integrierte Online-Terminbuchung entlastet den Empfang und erleichtert die Terminvergabe.",
  },
  {
    icon: User,
    title: "Klare Informationen, weniger Rückfragen",
    text: "Leistungen, Abläufe und Kosten sind verständlich dargestellt.",
  },
  {
    icon: Monitor,
    title: "Moderner Auftritt und bessere Google-Sichtbarkeit",
    text: "Ein professionelles Erscheinungsbild und SEO bringen Ihre Praxis nach vorne.",
  },
  {
    icon: Star,
    title: "Mehr Zeit für Patienten",
    text: "Digitale Prozesse reduzieren den Verwaltungsaufwand und schaffen Freiräume für die medizinische Betreuung.",
  },
];

export function ChallengesBenefitsSection() {
  return (
    <section
      id="fuer-praxen"
      className="bg-white pb-8 pt-12 lg:pb-10 lg:pt-16"
      aria-labelledby="challenges-heading"
    >
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          <div className="rounded-2xl bg-[#fdf3f3] px-6 py-7 lg:px-8 lg:py-8">
            <h2
              id="challenges-heading"
              className="text-lg font-bold text-[#dc2626] sm:text-xl"
            >
              Die Herausforderungen im Praxisalltag
            </h2>
            <ul className="mt-6">
              {challenges.map(({ icon: Icon, title, text }, index) => (
                <li
                  key={title}
                  className={`flex items-center gap-4 py-5 ${
                    index > 0 ? "border-t border-red-100/80" : ""
                  }`}
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-[1.5px] border-[#f87171] bg-white/60 text-[#ef4444]">
                    <Icon className="h-[18px] w-[18px]" strokeWidth={1.75} aria-hidden="true" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-[15px] font-bold leading-snug text-navy">
                      {title}
                    </h3>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-muted">
                      {text}
                    </p>
                  </div>
                  <span
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-navy shadow-[0_2px_8px_rgba(0,0,0,0.08)] ring-1 ring-black/5"
                    aria-hidden="true"
                  >
                    <ChevronRight className="h-4 w-4" strokeWidth={2} />
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl bg-[#f0faf4] px-6 py-7 lg:px-8 lg:py-8">
            <h2 className="text-lg font-bold text-[#15803d] sm:text-xl">
              Die Vorteile einer modernen Praxis-Website
            </h2>
            <ul className="mt-6">
              {benefits.map(({ icon: Icon, title, text }, index) => (
                <li
                  key={title}
                  className={`flex items-start gap-4 py-5 ${
                    index > 0 ? "border-t border-green-100/90" : ""
                  }`}
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-[1.5px] border-[#4ade80] bg-white/60 text-[#16a34a]">
                    <Icon className="h-[18px] w-[18px]" strokeWidth={1.75} aria-hidden="true" />
                  </div>
                  <div className="min-w-0 flex-1 pt-0.5">
                    <h3 className="text-[15px] font-bold leading-snug text-[#15803d]">
                      {title}
                    </h3>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-muted">
                      {text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
