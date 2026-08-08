import { WebsitePackageScope } from "@/components/WebsitePackageScope";
import {
  Calendar,
  Layers,
  Layout,
  MonitorSmartphone,
  PenLine,
  Search,
} from "lucide-react";

const features = [
  {
    icon: Layout,
    title: "Individuelles Praxis-Design",
  },
  {
    icon: Layers,
    title: "Bis zu 10 Inhaltsseiten",
  },
  {
    icon: MonitorSmartphone,
    title: "Optimiert für Smartphone, Tablet und Desktop",
  },
  {
    icon: Search,
    title: "SEO-Grundoptimierung",
  },
  {
    icon: Calendar,
    title: "Integration bestehendes Terminbuchungssystem",
  },
  {
    icon: PenLine,
    title: "Texte auf Basis Ihrer Praxisinformationen",
  },
];

export function WebsiteFeaturesSection() {
  return (
    <section
      id="website-leistungen"
      className="scroll-mt-28 border-t border-border bg-[#f8fafc] py-16 lg:py-20"
      aria-labelledby="website-features-heading"
    >
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="website-features-heading"
            className="text-2xl font-bold text-navy sm:text-3xl lg:text-4xl"
          >
            Wichtige Bausteine Ihrer Praxis-Website
          </h2>
          <p className="mt-4 text-base text-muted">
            Die zentralen Leistungen im Überblick — der genaue Festpreis-Umfang steht bei unseren
            Preisen.
          </p>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {features.map(({ icon: Icon, title }) => (
            <li
              key={title}
              className="flex items-start gap-4 rounded-2xl border border-border bg-white p-5 shadow-sm"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#eff6ff] text-[#1d6fd8]">
                <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
              </div>
              <p className="pt-2 text-[15px] font-semibold leading-snug text-navy">{title}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
