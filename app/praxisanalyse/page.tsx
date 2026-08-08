import type { Metadata } from "next";
import { AnalyseProcessSteps } from "@/components/AnalyseProcessSteps";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PraxisanalyseForm } from "@/components/PraxisanalyseForm";
import { parseLeistungSlug } from "@/lib/cta";

export const metadata: Metadata = {
  title: "Kostenlose Website-Analyse",
  description:
    "Fordern Sie eine kostenlose Website-Analyse für Ihre Arzt- oder Zahnarztpraxis an — wir prüfen Ihre Online-Präsenz und melden uns mit einer ersten Einschätzung.",
};

type PraxisanalysePageProps = {
  searchParams: Promise<{ leistung?: string }>;
};

export default async function PraxisanalysePage({ searchParams }: PraxisanalysePageProps) {
  const params = await searchParams;
  const initialLeistung = parseLeistungSlug(params.leistung);

  return (
    <>
      <Header />
      <main className="bg-surface py-12 lg:py-16">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-3xl font-bold text-navy sm:text-4xl">
              Kostenlose Website-Analyse anfordern
            </h1>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Wir werfen einen ersten Blick auf Ihre Website und zeigen Ihnen konkrete
              Verbesserungspotenziale. Anschließend besprechen wir die Ergebnisse persönlich
              mit Ihnen.
            </p>
            <p className="mt-3 text-sm text-muted">
              Kostenlos & unverbindlich · Speziell für Arzt- und Zahnarztpraxen
            </p>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_320px] lg:items-start">
            <div className="order-2 rounded-2xl border border-border bg-white p-6 shadow-[0_4px_24px_rgba(10,37,64,0.06)] lg:order-1 lg:p-8">
              <PraxisanalyseForm initialLeistung={initialLeistung} />
            </div>
            <div className="order-1 lg:order-2">
              <AnalyseProcessSteps />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
