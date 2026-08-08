import type { Metadata } from "next";
import { AnalyseProcessSteps } from "@/components/AnalyseProcessSteps";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PraxisanalyseForm } from "@/components/PraxisanalyseForm";
import { parseLeistungSlug } from "@/lib/cta";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Kostenlose Website-Analyse",
  description:
    "Fordern Sie eine kostenlose Website-Analyse für Ihre Arzt- oder Zahnarztpraxis an — wir prüfen Ihren Auftritt und senden Ihnen eine erste Einschätzung per E-Mail.",
};

type PraxisanalysePageProps = {
  searchParams: Promise<{ leistung?: string }>;
};

function getPageHeading(initialLeistung: ReturnType<typeof parseLeistungSlug>): string {
  if (initialLeistung === "kombi") {
    return "Kostenlose Analyse für Website + Google Ads anfordern";
  }
  return "Kostenlose Website-Analyse anfordern";
}

export default async function PraxisanalysePage({ searchParams }: PraxisanalysePageProps) {
  const params = await searchParams;
  const initialLeistung = parseLeistungSlug(params.leistung);

  return (
    <>
      <Header />
      <main className="bg-surface py-12 lg:py-16">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">
            Kostenlos & unverbindlich
          </p>
          <h1 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">
            {getPageHeading(initialLeistung)}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Senden Sie uns einige Angaben zu Ihrer Praxis — wir prüfen Ihre Website und
            melden uns mit einer ersten Einschätzung per E-Mail. Ein persönliches Erstgespräch
            folgt erst danach, wenn Sie möchten.
          </p>
          <p className="mt-4 rounded-lg border border-border bg-white px-4 py-3 text-sm leading-relaxed text-muted">
            Ob neue Praxis-Website, Google Ads, SEO oder laufende Betreuung: In der Analyse
            schauen wir uns Ihren aktuellen Auftritt an und zeigen Ihnen, wo Potenzial liegt.
            Die Anfrage ist kostenlos, unverbindlich und ohne Kaufverpflichtung.
          </p>

          <div className="mt-8">
            <AnalyseProcessSteps />
          </div>

          <div className="mt-10 rounded-2xl border border-border bg-white p-6 shadow-[0_4px_24px_rgba(10,37,64,0.06)] lg:p-8">
            <PraxisanalyseForm initialLeistung={initialLeistung} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
