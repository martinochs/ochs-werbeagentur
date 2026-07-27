import {
  Activity,
  ArrowLeft,
  ArrowRight,
  Bone,
  Calendar,
  Check,
  ClipboardList,
  Heart,
  MapPin,
  Phone,
  Star,
  Stethoscope,
  Syringe,
  Users,
  Waves,
  Zap,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/seo/config";

export const metadata: Metadata = {
  title: "Orthopädie Dr. Kraft — Webdesign-Beispiel",
  description:
    "Design-Beispiel einer Orthopädie-Website mit Behandlungsschwerpunkten, Diagnostik, Sportmedizin und Terminbuchung.",
  robots: { index: false, follow: false },
};

const navLinks = [
  { href: "#start", label: "Startseite" },
  { href: "#leistungen", label: "Leistungen" },
  { href: "#behandlungen", label: "Behandlungen" },
  { href: "#praxis", label: "Praxis" },
  { href: "#team", label: "Team" },
  { href: "#kontakt", label: "Kontakt" },
];

const bodyAreas = [
  { label: "Kopf & Nacken", top: "8%", left: "50%" },
  { label: "Schulter", top: "18%", left: "68%" },
  { label: "Ellenbogen", top: "32%", left: "72%" },
  { label: "Rücken & Wirbelsäule", top: "28%", left: "50%" },
  { label: "Hüfte", top: "48%", left: "58%" },
  { label: "Knie", top: "68%", left: "52%" },
  { label: "Fuß & Sprunggelenk", top: "88%", left: "48%" },
];

const treatments = [
  { icon: Activity, title: "Sportverletzungen", description: "Schnelle Diagnose & gezielte Therapie." },
  { icon: Bone, title: "Gelenkverschleiß", description: "Schonende Behandlung bei Arthrose." },
  { icon: Syringe, title: "Infiltrationstherapie", description: "Gezielte Schmerzlinderung vor Ort." },
  { icon: Waves, title: "Stoßwellentherapie", description: "Modern & effektiv bei chronischen Beschwerden." },
  { icon: Zap, title: "Regenerative Medizin", description: "Körpereigene Heilung aktivieren." },
  { icon: Stethoscope, title: "Ambulante Eingriffe", description: "Kleine Eingriffe in vertrauter Umgebung." },
];

const diagnostics = [
  "Digitales Röntgen",
  "Hochauflösender Ultraschall",
  "Bewegungsanalyse im 3D-Ganglabor",
  "Sportmedizinische Leistungsdiagnostik",
  "Knochendichtemessung",
  "Computergestützte Wirbelsäulenanalyse",
];

const stats = [
  { icon: Users, value: "15.000+", label: "behandelte Patienten" },
  { icon: Star, value: "20+ Jahre", label: "Erfahrung" },
  { icon: Star, value: "4,9 / 5", label: "Google Bewertungen" },
  { icon: Heart, value: "95 %", label: "Weiterempfehlungsrate" },
];

const processSteps = [
  { icon: Calendar, step: "1", title: "Termin vereinbaren" },
  { icon: Stethoscope, step: "2", title: "Diagnose" },
  { icon: ClipboardList, step: "3", title: "Individueller Therapieplan" },
  { icon: Activity, step: "4", title: "Schmerzfreiheit & Mobilität" },
];

const sportImages = [
  {
    src: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=400&q=80",
    alt: "Laufen",
  },
  {
    src: "https://images.unsplash.com/photo-1622163641175-62a4caffd66c?auto=format&fit=crop&w=400&q=80",
    alt: "Tennis",
  },
  {
    src: "https://images.unsplash.com/photo-1511994298241-608e28f14fde?auto=format&fit=crop&w=400&q=80",
    alt: "Mountainbike",
  },
];

function PracticeLogo({ className }: { className?: string }) {
  return (
    <div
      className={`flex h-10 w-10 items-center justify-center rounded-full bg-[#0d1f33] text-white ${className ?? ""}`}
    >
      <Bone className="h-5 w-5" aria-hidden="true" />
    </div>
  );
}

export default function OrthopaedieExamplePage() {
  return (
    <div className="bg-white text-[#0d1f33]">
      <div className="border-b border-[#0d1f33]/10 bg-[#eef4f8] px-4 py-2.5 text-center text-xs text-[#0d1f33]/75">
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

      <header className="sticky top-0 z-40 border-b border-[#0d1f33]/8 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3.5 lg:px-8">
          <div className="flex items-center gap-3">
            <PracticeLogo />
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-[#0d1f33]">
                Orthopädie Dr. Maximilian Kraft
              </p>
              <p className="text-[10px] text-[#0d1f33]/55">
                Orthopädie · Sportmedizin · Chirotherapie
              </p>
            </div>
          </div>

          <nav className="hidden items-center gap-4 text-[10px] font-semibold uppercase tracking-wide text-[#0d1f33]/70 xl:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="transition-colors hover:text-[#168b9d]">
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#kontakt"
            className="inline-flex shrink-0 items-center gap-2 rounded-md bg-[#0d1f33] px-4 py-2.5 text-[11px] font-semibold uppercase tracking-wide text-white transition-opacity hover:opacity-90"
          >
            <Calendar className="h-4 w-4" aria-hidden="true" />
            <span className="hidden sm:inline">Termin vereinbaren</span>
            <span className="sm:hidden">Termin</span>
          </a>
        </div>
      </header>

      <main id="start">
        <section className="relative min-h-[520px] overflow-hidden lg:min-h-[580px]">
          <Image
            src="/beispiele/orthopaedie-hero.png"
            alt="Sportler in Bewegung — Orthopädie und Sportmedizin"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d1f33]/90 via-[#0d1f33]/55 to-[#0d1f33]/25" />

          <div className="relative mx-auto flex min-h-[520px] max-w-6xl items-center px-4 py-16 lg:min-h-[580px] lg:px-8">
            <div className="max-w-xl text-white">
              <h1 className="text-3xl font-bold leading-[1.12] sm:text-4xl lg:text-5xl">
                Beweglich bleiben.{" "}
                <span className="text-[#4ecbd9]">Schmerzfrei leben.</span>
              </h1>
              <p className="mt-4 text-base leading-relaxed text-white/80">
                Moderne Orthopädie, Sportmedizin und Gelenktherapie für Patienten
                jeden Alters — von der Diagnose bis zur individuellen Therapie.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#kontakt"
                  className="inline-flex items-center gap-2 rounded-md bg-[#168b9d] px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                >
                  <Calendar className="h-4 w-4" aria-hidden="true" />
                  Termin vereinbaren
                </a>
                <a
                  href="#behandlungen"
                  className="inline-flex items-center gap-2 rounded-md border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/15"
                >
                  Behandlungsschwerpunkte
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="leistungen" className="bg-[#f8f9fa] py-14 lg:py-16">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 lg:grid-cols-3 lg:px-8">
            <div id="behandlungen" className="rounded-xl border border-[#0d1f33]/8 bg-white p-6 shadow-sm">
              <h2 className="text-sm font-bold uppercase tracking-wide text-[#168b9d]">
                Beschwerden & Körperbereiche
              </h2>
              <div className="relative mx-auto mt-6 aspect-[3/5] max-w-[180px]">
                <div className="absolute inset-0 rounded-full bg-[#eef4f8]" />
                <svg viewBox="0 0 100 160" className="absolute inset-0 h-full w-full text-[#0d1f33]/15">
                  <ellipse cx="50" cy="18" rx="12" ry="14" fill="currentColor" />
                  <rect x="42" y="30" width="16" height="28" rx="8" fill="currentColor" />
                  <rect x="28" y="34" width="10" height="36" rx="5" fill="currentColor" transform="rotate(12 33 52)" />
                  <rect x="62" y="34" width="10" height="36" rx="5" fill="currentColor" transform="rotate(-12 67 52)" />
                  <rect x="38" y="56" width="12" height="44" rx="6" fill="currentColor" />
                  <rect x="50" y="56" width="12" height="44" rx="6" fill="currentColor" />
                  <rect x="36" y="98" width="10" height="42" rx="5" fill="currentColor" />
                  <rect x="54" y="98" width="10" height="42" rx="5" fill="currentColor" />
                </svg>
                {bodyAreas.map((area) => (
                  <span
                    key={area.label}
                    className="absolute h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#168b9d] ring-2 ring-white"
                    style={{ top: area.top, left: area.left }}
                  />
                ))}
              </div>
              <ul className="mt-6 space-y-2 text-sm text-[#0d1f33]/75">
                {bodyAreas.map((area) => (
                  <li key={area.label}>{area.label}</li>
                ))}
              </ul>
              <a
                href="#kontakt"
                className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#168b9d]"
              >
                Bereich auswählen & mehr erfahren
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>

            <div className="rounded-xl border border-[#0d1f33]/8 bg-white p-6 shadow-sm">
              <h2 className="text-sm font-bold uppercase tracking-wide text-[#168b9d]">
                Unsere Behandlungsschwerpunkte
              </h2>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {treatments.map(({ icon: Icon, title, description }) => (
                  <article
                    key={title}
                    className="rounded-lg border border-[#168b9d]/15 bg-[#f8fbfd] p-4"
                  >
                    <Icon className="h-5 w-5 text-[#168b9d]" aria-hidden="true" />
                    <h3 className="mt-2 text-sm font-bold text-[#0d1f33]">{title}</h3>
                    <p className="mt-1 text-xs text-[#0d1f33]/60">{description}</p>
                  </article>
                ))}
              </div>
            </div>

            <div id="praxis" className="rounded-xl border border-[#0d1f33]/8 bg-white p-6 shadow-sm">
              <h2 className="text-sm font-bold uppercase tracking-wide text-[#168b9d]">
                Moderne Diagnostik auf Klinikniveau
              </h2>
              <div className="mt-4 overflow-hidden rounded-lg">
                <Image
                  src="/beispiele/orthopaedie-diagnostik.png"
                  alt="Moderne orthopädische Diagnostik"
                  width={500}
                  height={280}
                  className="aspect-[16/10] w-full object-cover"
                />
              </div>
              <ul className="mt-4 space-y-2">
                {diagnostics.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#0d1f33]/75">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#168b9d]" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="#kontakt"
                className="mt-5 inline-flex items-center gap-2 rounded-md bg-[#168b9d] px-4 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                Mehr über unsere Technik
              </a>
            </div>
          </div>
        </section>

        <section className="bg-[#0d1f33] py-8 text-white">
          <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#4ecbd9]">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-lg font-bold text-[#4ecbd9]">{value}</p>
                  <p className="text-sm text-white/70">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="team" className="bg-white py-14 lg:py-16">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 lg:grid-cols-2 lg:px-8">
            <div>
              <h2 className="text-xl font-bold text-[#0d1f33] sm:text-2xl">
                Ihr Weg zu mehr Lebensqualität
              </h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {processSteps.map(({ icon: Icon, step, title }) => (
                  <article
                    key={title}
                    className="rounded-xl border border-[#0d1f33]/8 bg-[#f8f9fa] p-4"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#168b9d] text-xs font-bold text-white">
                        {step}
                      </span>
                      <Icon className="h-5 w-5 text-[#168b9d]" aria-hidden="true" />
                    </div>
                    <h3 className="mt-3 text-sm font-bold text-[#0d1f33]">{title}</h3>
                  </article>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-xl bg-[#0d1f33] text-white lg:grid lg:grid-cols-2">
              <div className="flex flex-col justify-center p-6 lg:p-8">
                <h2 className="text-xl font-bold leading-snug">
                  Sportmedizin — Zurück zu voller Leistung
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-white/75">
                  Ob Freizeitsportler oder Leistungsathlet — wir begleiten Sie
                  zurück in Training und Wettkampf.
                </p>
                <a
                  href="#kontakt"
                  className="mt-5 inline-flex w-fit items-center gap-2 rounded-md bg-[#168b9d] px-4 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                >
                  Mehr zur Sportmedizin
                </a>
              </div>
              <div className="grid grid-cols-3 gap-1 p-2">
                {sportImages.map(({ src, alt }) => (
                  <div key={alt} className="relative min-h-[140px] overflow-hidden rounded-lg lg:min-h-[220px]">
                    <Image src={src} alt={alt} fill sizes="150px" className="object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="kontakt" className="bg-[#f8f9fa] py-14 lg:py-16">
          <div className="mx-auto max-w-6xl px-4 text-center lg:px-8">
            <h2 className="text-2xl font-bold text-[#0d1f33]">Termin vereinbaren</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-[#0d1f33]/65">
              Online buchen oder telefonisch — schnell, unkompliziert und persönlich.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#kontakt"
                className="inline-flex items-center gap-2 rounded-md bg-[#168b9d] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                <Calendar className="h-4 w-4" aria-hidden="true" />
                Termin online buchen
              </a>
              <a
                href="tel:0621556677"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#0d1f33]/75 transition-colors hover:text-[#168b9d]"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                0621 556677
              </a>
              <span className="inline-flex items-center gap-2 text-sm text-[#0d1f33]/60">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                Rheinuferstraße 5, Mannheim
              </span>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#0d1f33]/8 bg-[#0d1f33] px-4 py-6 text-center text-xs text-white/50">
        Fiktives Design-Beispiel · erstellt von{" "}
        <Link href="/" className="text-white/70 hover:text-white">
          {siteConfig.name}
        </Link>
      </footer>
    </div>
  );
}
