import {
  FileText,
  Headphones,
  RefreshCw,
  Shield,
  TrendingUp,
  Wrench,
} from "lucide-react";

const features = [
  { icon: RefreshCw, label: "Regelmäßige Updates" },
  { icon: Shield, label: "Tägliche Backups" },
  { icon: TrendingUp, label: "Sicherheits-Monitoring" },
  { icon: Wrench, label: "Fehlerbehebung" },
  { icon: FileText, label: "Inhalte & Anpassungen" },
  { icon: Headphones, label: "Persönlicher Support" },
];

export function BenefitsBanner() {
  return (
    <section className="bg-navy py-14 text-white" aria-labelledby="benefits-heading">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <h2
          id="benefits-heading"
          className="max-w-2xl text-2xl font-bold leading-snug sm:text-3xl"
        >
          Während Sie sich um Ihre Patienten kümmern, kümmern wir uns um Ihre Website
        </h2>
        <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {features.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex flex-col items-center rounded-lg bg-white/8 p-4 text-center"
            >
              <Icon className="h-6 w-6 text-accent-light" aria-hidden="true" />
              <span className="mt-2 text-[11px] font-medium leading-snug text-white/90">
                {label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
