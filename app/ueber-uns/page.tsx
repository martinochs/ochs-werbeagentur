import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { siteConfig } from "@/lib/seo/config";

export const metadata = {
  title: `Über uns | ${siteConfig.name}`,
  description: "Erfahren Sie mehr über Ochs Digital Consulting und unsere Mission, Arztpraxen digital erfolgreich zu machen.",
};

export default function AboutPage() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main className="flex-1 bg-white">
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
            <h1 className="text-3xl font-bold text-navy sm:text-4xl lg:text-5xl">
              Über uns
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              Wir sind Ihre spezialisierte Agentur für digitales Praxismarketing. 
              Hier entsteht in Kürze unsere ausführliche Seite mit weiteren 
              Informationen zu unserer Mission, unseren Werten und unserem Team.
            </p>
            <div className="mt-12 rounded-2xl border border-border bg-[#f8fafc] p-8 text-center">
              <p className="font-medium text-navy">Möchten Sie uns direkt kennenlernen?</p>
              <a href="/praxisanalyse" className="btn-primary mt-4 inline-flex px-6 py-3">
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
