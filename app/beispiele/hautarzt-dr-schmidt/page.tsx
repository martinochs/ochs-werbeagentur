import {
  ArrowLeft,
  Calendar,
  Check,
  Clock,
  Heart,
  MapPin,
  Phone,
  Sun,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/seo/config";

export const metadata: Metadata = {
  title: "Hautarzt Dr. Schmidt — Webdesign-Beispiel",
  description:
    "Design-Beispiel einer Hautarztpraxis-Website mit vertrauensvollem Auftritt, Leistungsübersicht und Terminoption.",
  robots: { index: false, follow: false },
};

const services = [
  "Hautkrebsvorsorge & Muttermal-Check",
  "Akne, Ekzeme & chronische Hauterkrankungen",
  "Allergiediagnostik & Patch-Tests",
  "Ästhetische Dermatologie",
];

const highlights = [
  "Fachärztliche Betreuung",
  "Schnelle Terminvergabe",
  "Verständliche Aufklärung",
  "Diskrete Behandlungsräume",
];

export default function HautarztExamplePage() {
  return (
    <>
      <div className="border-b border-[#14532d]/10 bg-[#ecfdf5] px-4 py-2.5 text-center text-xs text-[#14532d]">
        Design-Beispiel von{" "}
        <Link href="/#designbeispiele" className="font-semibold underline-offset-2 hover:underline">
          {siteConfig.name}
        </Link>
        {" · "}
        <Link
          href="/#designbeispiele"
          className="inline-flex items-center gap-1 font-medium underline-offset-2 hover:underline"
        >
          <ArrowLeft className="h-3 w-3" aria-hidden="true" />
          Zurück zu allen Beispielen
        </Link>
      </div>

      <header className="border-b border-[#14532d]/10 bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-4 lg:px-6">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#059669]">
              Dermatologie
            </p>
            <p className="text-lg font-bold text-[#14532d]">Hautarzt Dr. Schmidt</p>
          </div>
          <nav className="hidden items-center gap-5 text-sm text-[#14532d]/80 sm:flex">
            <a href="#leistungen" className="hover:text-[#14532d]">
              Leistungen
            </a>
            <a href="#praxis" className="hover:text-[#14532d]">
              Praxis
            </a>
            <a href="#kontakt" className="hover:text-[#14532d]">
              Kontakt
            </a>
          </nav>
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 rounded-md bg-[#14532d] px-4 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            <Calendar className="h-4 w-4" aria-hidden="true" />
            Termin buchen
          </a>
        </div>
      </header>

      <main>
        <section className="bg-gradient-to-br from-[#ecfdf5] via-white to-[#f0fdf4] py-14 lg:py-20">
          <div className="mx-auto grid max-w-5xl gap-10 px-4 lg:grid-cols-2 lg:items-center lg:px-6">
            <div>
              <h1 className="text-3xl font-bold leading-tight text-[#14532d] sm:text-4xl">
                Hautarztpraxis mit vertrauensvollem Auftritt
              </h1>
              <p className="mt-4 text-base leading-relaxed text-[#14532d]/75">
                Patienten finden schnell Antworten auf ihre Fragen, verstehen
                Ihre Leistungen und buchen verlässlich einen Termin — ohne
                unnötige Rückfragen.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#kontakt"
                  className="inline-flex items-center gap-2 rounded-md bg-[#059669] px-5 py-3 text-sm font-medium text-white"
                >
                  Online-Termin buchen
                </a>
                <a
                  href="#leistungen"
                  className="inline-flex items-center gap-2 rounded-md border border-[#14532d]/15 bg-white px-5 py-3 text-sm font-medium text-[#14532d]"
                >
                  Leistungen ansehen
                </a>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-[0_12px_40px_rgba(20,83,45,0.12)] ring-1 ring-[#14532d]/5">
              <div className="grid grid-cols-2 gap-3">
                {highlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-xl bg-[#ecfdf5] px-3 py-4 text-sm font-medium text-[#14532d]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="leistungen" className="bg-white py-14 lg:py-16">
          <div className="mx-auto max-w-5xl px-4 lg:px-6">
            <h2 className="text-2xl font-bold text-[#14532d]">Unsere Schwerpunkte</h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#14532d]/70">
              Klar strukturiert — damit Patienten wissen, wobei Ihre Praxis
              unterstützt und wann ein Besuch sinnvoll ist.
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {services.map((service) => (
                <li
                  key={service}
                  className="flex items-start gap-3 rounded-xl border border-[#14532d]/10 bg-[#f0fdf4] px-4 py-4"
                >
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#059669]" aria-hidden="true" />
                  <span className="text-sm font-medium text-[#14532d]">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="praxis" className="bg-[#f0fdf4] py-14 lg:py-16">
          <div className="mx-auto grid max-w-5xl gap-8 px-4 lg:grid-cols-3 lg:px-6">
            <div className="rounded-xl border border-[#14532d]/10 bg-white p-5">
              <Sun className="h-6 w-6 text-[#059669]" aria-hidden="true" />
              <h3 className="mt-3 text-sm font-bold text-[#14532d]">Vorsorge</h3>
              <p className="mt-2 text-sm text-[#14532d]/70">
                Regelmäßige Hautchecks und individuelle Beratung für ein
                gutes Gefühl bei Ihren Patienten.
              </p>
            </div>
            <div className="rounded-xl border border-[#14532d]/10 bg-white p-5">
              <Heart className="h-6 w-6 text-[#059669]" aria-hidden="true" />
              <h3 className="mt-3 text-sm font-bold text-[#14532d]">Betreuung</h3>
              <p className="mt-2 text-sm text-[#14532d]/70">
                Zeit für Gespräche, verständliche Erklärungen und eine
                einfühlsame Behandlung.
              </p>
            </div>
            <div className="rounded-xl border border-[#14532d]/10 bg-white p-5">
              <Clock className="h-6 w-6 text-[#059669]" aria-hidden="true" />
              <h3 className="mt-3 text-sm font-bold text-[#14532d]">Termine</h3>
              <p className="mt-2 text-sm text-[#14532d]/70">
                Mo–Fr 8:00–17:00 — online oder telefonisch, flexibel und
                unkompliziert.
              </p>
            </div>
          </div>
        </section>

        <section id="kontakt" className="bg-[#14532d] py-14 text-white lg:py-16">
          <div className="mx-auto max-w-5xl px-4 text-center lg:px-6">
            <h2 className="text-2xl font-bold">Termin bei Dr. Schmidt vereinbaren</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/75">
              Online buchen oder anrufen — Ihre Patienten erreichen Sie schnell
              und ohne Umwege.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <span className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-medium text-[#14532d]">
                <Calendar className="h-4 w-4" aria-hidden="true" />
                Termin online buchen
              </span>
              <span className="inline-flex items-center gap-2 text-sm text-white/85">
                <Phone className="h-4 w-4" aria-hidden="true" />
                0621 · Beispielnummer
              </span>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#14532d]/10 bg-white px-4 py-6 text-center text-xs text-[#14532d]/60">
        Fiktives Design-Beispiel · erstellt von{" "}
        <Link href="/" className="font-medium text-[#14532d] hover:underline">
          {siteConfig.name}
        </Link>
      </footer>
    </>
  );
}
