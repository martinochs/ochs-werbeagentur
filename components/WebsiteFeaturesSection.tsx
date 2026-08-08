import { terminbuchungFeatureTitle } from "@/lib/content/terminbuchung";
import { TerminbuchungDisclaimer } from "@/components/TerminbuchungDisclaimer";
import {
  Calendar,
  Image,
  Layout,
  MonitorSmartphone,
  Search,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: Layout,
    title: "Individuelles Praxis-Design",
  },
  {
    icon: MonitorSmartphone,
    title: "Optimiert für Smartphone, Tablet und Desktop",
  },
  {
    icon: Calendar,
    title: terminbuchungFeatureTitle,
  },
  {
    icon: Search,
    title: "SEO-Grundoptimierung",
  },
  {
    icon: Zap,
    title: "Schnelle und moderne technische Umsetzung",
  },
  {
    icon: Image,
    title: "Unterstützung bei Texten und Bildern",
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
            Alles, was eine moderne Praxis-Website braucht
          </h2>
          <p className="mt-4 text-base text-muted">
            Die wichtigsten Bestandteile im Überblick — klar, übersichtlich und ohne versteckte Extras.
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

        <TerminbuchungDisclaimer variant="full" className="mx-auto mt-8 max-w-3xl" />
      </div>
    </section>
  );
}
