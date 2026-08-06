import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { siteConfig } from "@/lib/seo/config";
import { ArrowRight, Monitor, BarChart3, Search, Settings } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Leistungen",
  description: "Unsere Leistungen für Arzt- und Zahnarztpraxen: Praxis-Websites, Google Ads, SEO und laufende Betreuung.",
};

const services = [
  {
    id: "praxis-websites",
    title: "Praxis-Websites",
    description: "Moderne, DSGVO-konforme Websites mit Online-Terminbuchung. Perfekt auf Ihre Fachrichtung zugeschnitten und optimiert für Patienten.",
    icon: Monitor,
    color: "bg-[#5b21b6]",
    href: "/leistungen/praxis-websites",
  },
  {
    id: "google-ads",
    title: "Google Ads für Arztpraxen",
    description: "Gezielte Patientengewinnung durch Suchmaschinenwerbung. Wir erreichen genau die Patienten, die in Ihrer Region nach Ihren Leistungen suchen.",
    icon: BarChart3,
    color: "bg-[#166534]",
    href: "/leistungen/google-ads",
  },
  {
    id: "seo",
    title: "SEO & KI-Sichtbarkeit",
    description: "Langfristige Sichtbarkeit bei Google und in KI-Suchen. Wir optimieren Ihre Praxis für lokale Suchanfragen und relevante Behandlungen.",
    icon: Search,
    color: "bg-[#1d6fd8]",
    href: "/leistungen/seo",
  },
  {
    id: "betreuung",
    title: "Betreuung & Weiterentwicklung",
    description: "Wir kümmern uns um Updates, Backups und inhaltliche Anpassungen, damit Ihre Website immer aktuell und sicher bleibt.",
    icon: Settings,
    color: "bg-[#0a2540]",
    href: "/leistungen/betreuung",
  },
];

export default function LeistungenPage() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main className="flex-1 bg-white">
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-6xl px-4 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-3xl font-bold text-navy sm:text-4xl lg:text-5xl">
                Unsere Leistungen für Ihre Praxis
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted">
                Von der modernen Praxis-Website bis zur gezielten Patientengewinnung: 
                Wir bieten Ihnen alle digitalen Bausteine aus einer Hand — spezialisiert 
                auf Ärzte und Zahnärzte.
              </p>
            </div>

            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:gap-8">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <Link 
                    key={service.id}
                    href={service.href}
                    className="group flex flex-col rounded-2xl border border-border bg-white p-6 shadow-sm transition-all hover:shadow-md hover:ring-1 hover:ring-black/5 sm:p-8"
                  >
                    <div className={`flex h-14 w-14 items-center justify-center rounded-full text-white ${service.color}`}>
                      <Icon className="h-6 w-6" strokeWidth={2} aria-hidden="true" />
                    </div>
                    <h2 className="mt-6 text-xl font-bold text-navy">
                      {service.title}
                    </h2>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                      {service.description}
                    </p>
                    <div className="mt-6 flex items-center gap-1.5 text-sm font-semibold text-[#1d6fd8]">
                      Details ansehen
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </div>
                  </Link>
                );
              })}
            </div>

            <div className="mt-16 rounded-2xl bg-[#f8fafc] p-8 text-center sm:p-12">
              <h3 className="text-xl font-bold text-navy sm:text-2xl">
                Unsicher, welche Leistung die richtige ist?
              </h3>
              <p className="mx-auto mt-4 max-w-2xl text-base text-muted">
                Lassen Sie uns in einer kostenlosen Praxisanalyse gemeinsam herausfinden, 
                wo Ihre Praxis aktuell steht und welche digitalen Schritte am meisten Sinn machen.
              </p>
              <a href="/praxisanalyse" className="btn-primary mt-8 inline-flex px-6 py-3.5 text-base">
                Kostenlose Praxisanalyse anfordern
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
