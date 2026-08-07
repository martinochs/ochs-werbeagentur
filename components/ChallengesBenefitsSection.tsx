import {
  AlertCircle,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Eye,
  Headphones,
  Info,
  Phone,
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
    icon: Eye,
    title: "Veraltete Website und schwache Sichtbarkeit",
    text: "Ihre Praxis wird online nicht gefunden oder vermittelt keinen professionellen Eindruck.",
  },
];

const benefits = [
  {
    icon: Calendar,
    title: "Termine online buchen – rund um die Uhr",
    text: "Eine integrierte Online-Terminbuchung entlastet den Empfang und erleichtert die Terminvergabe.",
  },
  {
    icon: Info,
    title: "Klare Informationen, weniger Rückfragen",
    text: "Leistungen, Abläufe und Kosten sind verständlich dargestellt.",
  },
  {
    icon: CheckCircle2,
    title: "Moderner Auftritt und bessere Google-Sichtbarkeit",
    text: "Ein professioneller Auftritt und eine saubere SEO-Grundlage verbessern Ihre Chancen, bei relevanten Suchanfragen gefunden zu werden.",
  },
];

export function ChallengesBenefitsSection() {
  return (
    <section
      id="fuer-praxen"
      className="scroll-mt-28 bg-white pb-12 pt-16 lg:pb-20 lg:pt-24"
      aria-labelledby="challenges-heading"
    >
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="mb-12 text-center lg:mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#16a34a]">
            Für eine erfolgreiche Praxis
          </p>
          <h2
            id="challenges-heading"
            className="mt-4 text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-5xl"
          >
            Herausforderungen meistern. Vorteile nutzen.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted">
            Eine moderne Praxis-Website spart Zeit, entlastet Ihr Team und überzeugt Ihre Patienten.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          <div className="flex flex-col rounded-[2rem] border border-red-100 bg-[#fff5f5] p-6 lg:p-8">
            <div className="flex items-center gap-4 border-b border-red-100 pb-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#ef4444] text-white">
                <AlertCircle className="h-5 w-5" strokeWidth={2.5} aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-[17px] font-bold text-[#dc2626]">
                  Die Herausforderungen im Praxisalltag
                </h3>
              </div>
            </div>

            <ul className="flex-1 py-2">
              {challenges.map(({ icon: Icon, title, text }, index) => (
                <li
                  key={title}
                  className={`flex items-center gap-4 py-5 ${
                    index > 0 ? "border-t border-red-100" : ""
                  }`}
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-[1.5px] border-[#fca5a5] bg-[#fef2f2] text-[#ef4444]">
                    <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-[15px] font-bold leading-snug text-navy">{title}</h4>
                    <p className="mt-1 text-[13px] leading-relaxed text-muted">{text}</p>
                  </div>
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-red-100 bg-white text-[#ef4444] shadow-sm"
                    aria-hidden="true"
                  >
                    <ChevronRight className="h-4 w-4" strokeWidth={2.5} />
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col rounded-[2rem] border border-green-100 bg-[#f0fdf4] p-6 lg:p-8">
            <div className="flex items-center gap-4 border-b border-green-100 pb-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#16a34a] text-white">
                <CheckCircle2 className="h-5 w-5" strokeWidth={2.5} aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-[17px] font-bold text-[#15803d]">
                  Die Vorteile einer modernen Praxis-Website
                </h3>
              </div>
            </div>

            <ul className="flex-1 py-2">
              {benefits.map(({ icon: Icon, title, text }, index) => (
                <li
                  key={title}
                  className={`flex items-center gap-4 py-5 ${
                    index > 0 ? "border-t border-green-100" : ""
                  }`}
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-[1.5px] border-[#86efac] bg-[#f0fdf4] text-[#16a34a]">
                    <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-[15px] font-bold leading-snug text-navy">{title}</h4>
                    <p className="mt-1 text-[13px] leading-relaxed text-muted">{text}</p>
                  </div>
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-green-100 bg-white text-[#16a34a] shadow-sm"
                    aria-hidden="true"
                  >
                    <ChevronRight className="h-4 w-4" strokeWidth={2.5} />
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
