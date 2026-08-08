import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PraxisanalyseForm } from "@/components/PraxisanalyseForm";
import { parseLeistungSlug } from "@/lib/cta";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Kostenloses Erstgespräch",
  description:
    "Unverbindliches Erstgespräch für Arzt- und Zahnarztpraxen — wir besprechen Ihre Ziele und welche digitale Lösung zu Ihrer Praxis passt.",
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
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">
            Kostenlos & unverbindlich
          </p>
          <h1 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">
            {initialLeistung === "kombi"
              ? "Kostenlose Analyse für Website + Google Ads anfordern"
              : "Kostenloses Erstgespräch für Ihre Praxis"}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Lernen Sie uns unverbindlich kennen. Wir sprechen über Ihre Praxis, Ihre Ziele
            und darüber, welche digitale Lösung für Sie sinnvoll ist.
          </p>
          <p className="mt-4 rounded-lg border border-border bg-white px-4 py-3 text-sm leading-relaxed text-muted">
            Ob neue Praxis-Website, Google Ads, SEO oder laufende Betreuung – im Erstgespräch
            klären wir gemeinsam, welche Lösung zu Ihrer Situation passt. Das Gespräch ist
            kostenlos, unverbindlich und ohne Kaufverpflichtung.
          </p>

          <div className="mt-10 rounded-2xl border border-border bg-white p-6 shadow-[0_4px_24px_rgba(10,37,64,0.06)] lg:p-8">
            <PraxisanalyseForm initialLeistung={initialLeistung} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
