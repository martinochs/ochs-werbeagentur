import {
  Activity,
  ArrowLeft,
  Calendar,
  Check,
  MapPin,
  Phone,
  Shield,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/seo/config";

export const metadata: Metadata = {
  title: "Orthopädie am Rhein — Webdesign-Beispiel",
  description:
    "Design-Beispiel einer Orthopädie-Website mit übersichtlicher Patientenführung, Leistungen und Terminoption.",
  robots: { index: false, follow: false },
};

const services = [
  "Diagnostik bei Gelenk- & Rückenschmerzen",
  "Sportorthopädie & Unfallfolgen",
  "Konservative Therapie & Schmerzbehandlung",
  "Nachsorge & Reha-Begleitung",
];

const highlights = [
  "Klare Patientenführung",
  "Leistungen auf einen Blick",
  "Online-Terminbuchung",
  "Verständliche Abläufe",
];

export default function OrthopaedieExamplePage() {
  return (
    <>
      <div className="border-b border-[#1e3a8a]/10 bg-[#eff6ff] px-4 py-2.5 text-center text-xs text-[#1e3a8a]">
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

      <header className="border-b border-[#1e3a8a]/10 bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-4 lg:px-6">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#2563eb]">
              Orthopädie
            </p>
            <p className="text-lg font-bold text-[#1e3a8a]">Orthopädie am Rhein</p>
          </div>
          <nav className="hidden items-center gap-5 text-sm text-[#1e3a8a]/80 sm:flex">
            <a href="#leistungen" className="hover:text-[#1e3a8a]">
              Leistungen
            </a>
            <a href="#praxis" className="hover:text-[#1e3a8a]">
              Praxis
            </a>
            <a href="#kontakt" className="hover:text-[#1e3a8a]">
              Kontakt
            </a>
          </nav>
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 rounded-md bg-[#1e3a8a] px-4 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            <Calendar className="h-4 w-4" aria-hidden="true" />
            Termin buchen
          </a>
        </div>
      </header>

      <main>
        <section className="bg-gradient-to-br from-[#eff6ff] via-white to-[#dbeafe] py-14 lg:py-20">
          <div className="mx-auto grid max-w-5xl gap-10 px-4 lg:grid-cols-2 lg:items-center lg:px-6">
            <div>
              <h1 className="text-3xl font-bold leading-tight text-[#1e3a8a] sm:text-4xl">
                Orthopädie mit klarer Patientenführung online
              </h1>
              <p className="mt-4 text-base leading-relaxed text-[#1e3a8a]/75">
                Von der ersten Information bis zur Terminbuchung — Patienten
                finden schnell, was sie brauchen, und verstehen den Weg in Ihre
                Praxis.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#kontakt"
                  className="inline-flex items-center gap-2 rounded-md bg-[#2563eb] px-5 py-3 text-sm font-medium text-white"
                >
                  Online-Termin buchen
                </a>
                <a
                  href="#leistungen"
                  className="inline-flex items-center gap-2 rounded-md border border-[#1e3a8a]/15 bg-white px-5 py-3 text-sm font-medium text-[#1e3a8a]"
                >
                  Leistungen ansehen
                </a>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-[0_12px_40px_rgba(30,58,138,0.12)] ring-1 ring-[#1e3a8a]/5">
              <div className="grid grid-cols-2 gap-3">
                {highlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-xl bg-[#eff6ff] px-3 py-4 text-sm font-medium text-[#1e3a8a]"
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
            <h2 className="text-2xl font-bold text-[#1e3a8a]">Unsere Leistungen</h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#1e3a8a]/70">
              Strukturiert und verständlich — damit Patienten wissen, welche
              Behandlungen angeboten werden und wie der Ablauf aussieht.
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {services.map((service) => (
                <li
                  key={service}
                  className="flex items-start gap-3 rounded-xl border border-[#1e3a8a]/10 bg-[#f8fbff] px-4 py-4"
                >
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#2563eb]" aria-hidden="true" />
                  <span className="text-sm font-medium text-[#1e3a8a]">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="praxis" className="bg-[#f8fbff] py-14 lg:py-16">
          <div className="mx-auto grid max-w-5xl gap-8 px-4 lg:grid-cols-3 lg:px-6">
            <div className="rounded-xl border border-[#1e3a8a]/10 bg-white p-5">
              <Activity className="h-6 w-6 text-[#2563eb]" aria-hidden="true" />
              <h3 className="mt-3 text-sm font-bold text-[#1e3a8a]">Bewegung</h3>
              <p className="mt-2 text-sm text-[#1e3a8a]/70">
                Individuelle Therapiepläne für mehr Mobilität und weniger
                Schmerzen im Alltag.
              </p>
            </div>
            <div className="rounded-xl border border-[#1e3a8a]/10 bg-white p-5">
              <Shield className="h-6 w-6 text-[#2563eb]" aria-hidden="true" />
              <h3 className="mt-3 text-sm font-bold text-[#1e3a8a]">Sicherheit</h3>
              <p className="mt-2 text-sm text-[#1e3a8a]/70">
                Verlässliche Diagnostik und transparente Empfehlungen für Ihre
                Patienten.
              </p>
            </div>
            <div className="rounded-xl border border-[#1e3a8a]/10 bg-white p-5">
              <MapPin className="h-6 w-6 text-[#2563eb]" aria-hidden="true" />
              <h3 className="mt-3 text-sm font-bold text-[#1e3a8a]">Standort</h3>
              <p className="mt-2 text-sm text-[#1e3a8a]/70">
                Gut erreichbar am Rhein — mit klarer Anfahrt und barrierearmer
                Praxis.
              </p>
            </div>
          </div>
        </section>

        <section id="kontakt" className="bg-[#1e3a8a] py-14 text-white lg:py-16">
          <div className="mx-auto max-w-5xl px-4 text-center lg:px-6">
            <h2 className="text-2xl font-bold">Termin in der Orthopädie vereinbaren</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/75">
              Patienten buchen online oder telefonisch — schnell, übersichtlich
              und ohne Umwege.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <span className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-medium text-[#1e3a8a]">
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

      <footer className="border-t border-[#1e3a8a]/10 bg-white px-4 py-6 text-center text-xs text-[#1e3a8a]/60">
        Fiktives Design-Beispiel · erstellt von{" "}
        <Link href="/" className="font-medium text-[#1e3a8a] hover:underline">
          {siteConfig.name}
        </Link>
      </footer>
    </>
  );
}
