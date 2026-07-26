import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PraxisanalyseForm } from "@/components/PraxisanalyseForm";
import { siteConfig } from "@/lib/seo/config";

export const metadata: Metadata = {
  title: "Kostenlose Praxisanalyse anfordern",
  description:
    "Unverbindlicher Fragebogen für Arzt- und Zahnarztpraxen — wir melden uns persönlich mit einer Einschätzung für Ihre Praxis-Website.",
};

export default function PraxisanalysePage() {
  return (
    <>
      <Header />
      <main className="bg-surface py-12 lg:py-16">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">
            Kostenlos & unverbindlich
          </p>
          <h1 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">
            Kostenlose Praxisanalyse anfordern
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Beantworten Sie ein paar kurze Fragen — {siteConfig.contactPerson}{" "}
            meldet sich persönlich mit einer ehrlichen Einschätzung und den nächsten
            Schritten für Ihre Praxis-Website.
          </p>

          <div className="mt-10 rounded-2xl border border-border bg-white p-6 shadow-[0_4px_24px_rgba(10,37,64,0.06)] lg:p-8">
            <PraxisanalyseForm />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
