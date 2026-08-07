"use client";

import { DemoAppointmentModal } from "@/components/demo/DemoAppointmentModal";
import { erstgespraechUrl } from "@/lib/cta";
import { siteConfig } from "@/lib/seo/config";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  Heart,
  Leaf,
  Mail,
  MapPin,
  Monitor,
  Phone,
  Scan,
  Scissors,
  Shield,
  Sparkles,
  Star,
  Sun,
  User,
} from "lucide-react";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const hautarztDemoServices = [
  "Allgemeine dermatologische Untersuchung",
  "Hautkrebsvorsorge",
  "Ästhetische Beratung",
  "Allergologische Beratung",
] as const;

const navLinks = [
  { href: "#start", label: "Startseite" },
  { href: "#leistungen", label: "Leistungen" },
  { href: "#aesthetik", label: "Ästhetik" },
  { href: "#vorsorge", label: "Hautkrebsvorsorge" },
  { href: "#praxis", label: "Praxis" },
  { href: "#kontakt", label: "Kontakt" },
];

const featuredSpecialties = [
  {
    icon: Scan,
    title: "Hautkrebsvorsorge",
    description: "Muttermal-Check & Früherkennung.",
    featured: true,
  },
  {
    icon: Sparkles,
    title: "Ästhetische Dermatologie",
    description: "Natürliche Ergebnisse, sichtbare Frische.",
    featured: true,
  },
  {
    icon: Sun,
    title: "Lasertherapie",
    description: "Schonende Behandlung mit moderner medizinischer Technik.",
    featured: true,
  },
];

const otherSpecialties = [
  {
    icon: User,
    title: "Klassische Dermatologie",
    description: "Diagnose & Therapie häufiger Hauterkrankungen.",
  },
  {
    icon: Leaf,
    title: "Allergologie",
    description: "Allergietests & individuelle Beratung.",
  },
  {
    icon: Scissors,
    title: "Ambulante Operationen",
    description: "Kleine Eingriffe in vertrauter Umgebung.",
  },
];

const trustPoints = [
  {
    icon: Heart,
    title: "Persönliche Betreuung",
    description: "Zeit für Ihre Fragen und individuelle Beratung.",
  },
  {
    icon: Monitor,
    title: "Moderne Diagnostik",
    description: "Aktuelle Verfahren für präzise Befunde.",
  },
  {
    icon: Shield,
    title: "Individuelle Therapie",
    description: "Behandlungen abgestimmt auf Ihre Haut.",
  },
  {
    icon: Clock,
    title: "Gut organisierte Terminplanung",
    description: "Effiziente Abläufe für mehr Komfort.",
  },
];

const aestheticServices = [
  "Faltenbehandlung",
  "Hautverjüngung",
  "Medizinische Kosmetik",
];

const testimonials = [
  {
    quote:
      "Sehr einfühlsame Beratung und eine Praxis, in der man sich sofort wohlfühlt.",
    author: "Claudia R.",
  },
  {
    quote:
      "Die Hautkrebsvorsorge war gründlich und verständlich erklärt. Absolute Empfehlung.",
    author: "Michael B.",
  },
  {
    quote:
      "Ästhetische Behandlung mit natürlichem Ergebnis — genau so, wie ich es mir gewünscht habe.",
    author: "Sarah L.",
  },
];

function MonogramLogo() {
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#b0946b]/40 text-sm font-semibold tracking-wide text-[#5a6e5a]">
      MW
    </div>
  );
}

function DemoBookButton({
  className,
  children,
  onOpenDemo,
}: {
  className: string;
  children: React.ReactNode;
  onOpenDemo: () => void;
}) {
  return (
    <button type="button" onClick={onOpenDemo} className={className}>
      {children}
    </button>
  );
}

export function HautarztDemoPageContent() {
  const [demoOpen, setDemoOpen] = useState(false);
  const openDemo = useCallback(() => setDemoOpen(true), []);
  const closeDemo = useCallback(() => setDemoOpen(false), []);

  return (
    <div className="bg-[#f5f3ef] text-[#3d4a3d]">
      <div className="border-b border-[#5a6e5a]/10 bg-[#eef1eb] px-4 py-3">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 sm:flex-row">
          <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-[#5a6e5a]/80 transition-colors hover:text-[#5a6e5a]"
            >
              <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
              Zurück zu OCHS Digital
            </Link>
            <span className="hidden h-4 w-px bg-[#5a6e5a]/15 sm:block" aria-hidden="true" />
            <p className="text-center text-xs font-semibold text-[#3d4a3d] sm:text-left">
              Fiktives Design-Beispiel – keine echte Hautarztpraxis
            </p>
          </div>
          <Link
            href={erstgespraechUrl("website")}
            className="inline-flex shrink-0 items-center gap-1.5 rounded-md bg-[#5a6e5a] px-4 py-2 text-xs font-semibold text-white transition-opacity hover:opacity-90"
          >
            So eine Website anfragen
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-[#5a6e5a]/10 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3.5 lg:px-8">
          <div className="flex items-center gap-3">
            <MonogramLogo />
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#5a6e5a]">
                Hautärztin
              </p>
              <p className="text-xs font-bold uppercase tracking-wide text-[#3d4a3d] sm:text-sm">
                Dr. med. Maria Weiss
              </p>
            </div>
          </div>

          <nav className="hidden items-center gap-4 text-[11px] font-medium uppercase tracking-wide text-[#5a6e5a]/80 xl:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-[#5a6e5a]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <DemoBookButton
            onOpenDemo={openDemo}
            className="inline-flex shrink-0 items-center gap-2 rounded-md bg-[#5a6e5a] px-4 py-2.5 text-[11px] font-semibold uppercase tracking-wide text-white transition-opacity hover:opacity-90"
          >
            <Calendar className="h-4 w-4" aria-hidden="true" />
            <span className="hidden sm:inline">Termin online vereinbaren</span>
            <span className="sm:hidden">Termin</span>
          </DemoBookButton>
        </div>
      </header>

      <main id="start">
        <section className="relative overflow-hidden bg-[#ebe8e2]">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1600&q=80"
              alt=""
              fill
              className="object-cover opacity-30 blur-sm"
              sizes="100vw"
              priority
            />
          </div>

          <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-20">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b0946b]">
                Moderne Dermatologie mit persönlicher Betreuung
              </p>
              <h1
                className={`${playfair.className} mt-4 text-3xl font-semibold leading-[1.15] text-[#3d4a3d] sm:text-4xl lg:text-[2.75rem]`}
              >
                Moderne Dermatologie für gesunde und schöne Haut
              </h1>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-[#3d4a3d]/70">
                Fachärztliche Betreuung, moderne Diagnostik und ein einfühlsames
                Team — für Vorsorge, Therapie und ästhetische Behandlungen in
                vertrauensvoller Atmosphäre.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <DemoBookButton
                  onOpenDemo={openDemo}
                  className="inline-flex items-center gap-2 rounded-md bg-[#5a6e5a] px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  Terminanfrage
                </DemoBookButton>
                <a
                  href="#praxis"
                  className="inline-flex items-center gap-2 rounded-md border border-[#5a6e5a]/25 bg-white/60 px-5 py-3 text-sm font-semibold text-[#5a6e5a] backdrop-blur transition-colors hover:bg-white"
                >
                  Praxis kennenlernen
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              <div className="overflow-hidden rounded-2xl shadow-[0_24px_60px_rgba(61,74,61,0.15)] ring-1 ring-[#5a6e5a]/10">
                <Image
                  src="/beispiele/hautarzt-hero.png"
                  alt="Fiktive Hautärztin in moderner dermatologischer Praxis – Webdesign-Beispiel"
                  width={1024}
                  height={682}
                  className="aspect-[4/5] w-full object-cover object-[35%_20%]"
                  sizes="(max-width: 1024px) 100vw, 480px"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section id="leistungen" className="bg-white py-14 lg:py-16">
          <div className="mx-auto max-w-6xl px-4 lg:px-8">
            <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#b0946b]">
              Unsere Schwerpunkte
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {featuredSpecialties.map(({ icon: Icon, title, description }) => (
                <article
                  key={title}
                  className="rounded-xl border-2 border-[#5a6e5a]/20 bg-[#f5f3ef] p-6 text-center shadow-sm"
                >
                  <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#5a6e5a]/25 bg-white text-[#5a6e5a]">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h2 className="mt-4 text-sm font-bold text-[#3d4a3d]">{title}</h2>
                  <p className="mt-2 text-xs leading-relaxed text-[#3d4a3d]/60">
                    {description}
                  </p>
                </article>
              ))}
            </div>
            <div className="mt-8 grid gap-8 sm:grid-cols-3">
              {otherSpecialties.map(({ icon: Icon, title, description }) => (
                <div key={title} className="text-center">
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#5a6e5a]/20 bg-[#f5f3ef] text-[#5a6e5a]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h2 className="mt-4 text-sm font-bold text-[#3d4a3d]">{title}</h2>
                  <p className="mt-2 text-xs leading-relaxed text-[#3d4a3d]/60">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-[#5a6e5a]/10 bg-[#ebe8e2] py-8">
          <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
            {trustPoints.map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#5a6e5a] shadow-sm">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-bold text-[#3d4a3d]">{title}</p>
                  <p className="text-xs text-[#3d4a3d]/60">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="praxis" className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-6xl px-4 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-stretch">
              <div className="flex flex-col justify-center lg:col-span-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b0946b]">
                  Unsere Praxis
                </p>
                <h2
                  className={`${playfair.className} mt-3 text-2xl font-semibold text-[#3d4a3d] sm:text-3xl`}
                >
                  Individuelle Medizin statt Standardlösungen
                </h2>
                <p className="mt-3 rounded-lg border border-[#5a6e5a]/20 bg-[#f5f3ef] px-3 py-2 text-xs font-medium text-[#3d4a3d]/75">
                  Beispielprofil – Name und dargestellte Person sind fiktiv.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-[#3d4a3d]/65">
                  In unserer modernen Praxis verbinden wir fachliche Expertise mit
                  Zeit für das Gespräch — damit Sie verstehen, welche Behandlung
                  für Ihre Haut am sinnvollsten ist.
                </p>
                <a
                  href="#praxis"
                  className="mt-6 inline-flex w-fit items-center gap-2 rounded-md border border-[#5a6e5a] px-5 py-3 text-sm font-semibold text-[#5a6e5a] transition-colors hover:bg-[#5a6e5a]/5"
                >
                  Mehr über uns
                </a>
              </div>

              <div className="overflow-hidden rounded-xl shadow-md ring-1 ring-[#5a6e5a]/10 lg:col-span-4">
                <Image
                  src="/beispiele/hautarzt-empfang.png"
                  alt="Beispielbild: Empfangsbereich einer fiktiven Hautarztpraxis"
                  width={600}
                  height={800}
                  className="h-full min-h-[320px] w-full object-cover lg:min-h-[420px]"
                />
              </div>

              <div
                id="aesthetik"
                className="grid overflow-hidden rounded-xl shadow-md ring-1 ring-[#5a6e5a]/10 lg:col-span-4 lg:grid-cols-2"
              >
                <div className="flex flex-col justify-center bg-[#5a6e5a] p-6 text-white lg:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d4c4a8]">
                    Ästhetische Dermatologie
                  </p>
                  <h2
                    className={`${playfair.className} mt-3 text-xl font-semibold leading-snug`}
                  >
                    Natürliche Ergebnisse. Sichtbare Frische.
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-white/80">
                    Von Faltenbehandlung bis Hautverjüngung — individuell
                    abgestimmt auf Ihre Wünsche und Ihren Hauttyp.
                  </p>
                  <ul
                    id="aesthetik-leistungen"
                    className="mt-4 space-y-2 border-t border-white/15 pt-4"
                  >
                    {aestheticServices.map((service) => (
                      <li
                        key={service}
                        className="flex items-center gap-2 text-sm text-white/90"
                      >
                        <Sparkles className="h-3.5 w-3.5 shrink-0 text-[#d4c4a8]" aria-hidden="true" />
                        {service}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#aesthetik-leistungen"
                    className="mt-5 inline-flex w-fit items-center gap-2 rounded-md bg-[#b0946b] px-4 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                  >
                    Mehr erfahren
                  </a>
                </div>
                <div className="relative min-h-[240px] lg:min-h-full">
                  <Image
                    src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80"
                    alt="Beispielbild: Gesunde Haut"
                    fill
                    sizes="(max-width: 1024px) 100vw, 250px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="vorsorge" className="bg-[#f5f3ef] py-14 lg:py-16">
          <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b0946b]">
              Hautkrebsvorsorge
            </p>
            <h2
              className={`${playfair.className} mt-3 text-2xl font-semibold text-[#3d4a3d] sm:text-3xl`}
            >
              Hautveränderungen frühzeitig erkennen
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#3d4a3d]/65">
              Regelmäßige Hautkrebsvorsorge zur frühzeitigen Erkennung auffälliger
              Hautveränderungen.
            </p>
          </div>
        </section>

        <section id="bewertungen" className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-6xl px-4 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b0946b]">
                Das sagen unsere Patienten
              </p>
              <p className="mt-4 rounded-lg border border-[#5a6e5a]/15 bg-[#f5f3ef] px-4 py-3 text-sm text-[#3d4a3d]/80">
                Beispielbewertungen – sämtliche dargestellten Bewertungen und Namen sind fiktiv.
              </p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {testimonials.map(({ quote, author }) => (
                <blockquote
                  key={author}
                  className="rounded-xl border border-[#5a6e5a]/10 bg-[#f5f3ef] p-6"
                >
                  <div className="flex gap-0.5 text-[#b0946b]" aria-hidden="true">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p
                    className={`${playfair.className} mt-4 text-sm italic leading-relaxed text-[#3d4a3d]/80`}
                  >
                    „{quote}"
                  </p>
                  <footer className="mt-4 text-sm font-semibold text-[#5a6e5a]">
                    {author}
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <section id="kontakt" className="bg-[#5a6e5a] py-12 text-white lg:py-14">
          <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 lg:grid-cols-[1fr_auto_1fr] lg:px-8">
            <div>
              <h2
                className={`${playfair.className} text-xl font-semibold sm:text-2xl`}
              >
                Vereinbaren Sie Ihren Termin
              </h2>
              <p className="mt-2 text-sm text-white/75">
                Online buchen — schnell und unkompliziert.
              </p>
            </div>
            <DemoBookButton
              onOpenDemo={openDemo}
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-[#b0946b] px-6 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              <Calendar className="h-4 w-4" aria-hidden="true" />
              Jetzt Termin buchen
            </DemoBookButton>
            <div className="space-y-3 text-sm text-white/85 lg:text-right">
              <p className="flex items-start gap-2 lg:justify-end">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#d4c4a8]" aria-hidden="true" />
                Musterstraße 12
                <br />
                12345 Musterstadt
              </p>
              <p className="flex items-center gap-2 lg:justify-end">
                <Phone className="h-4 w-4 shrink-0 text-[#d4c4a8]" aria-hidden="true" />
                Telefon: Beispielnummer
              </p>
              <p className="flex items-center gap-2 lg:justify-end">
                <Mail className="h-4 w-4 shrink-0 text-[#d4c4a8]" aria-hidden="true" />
                praxis@example.com
              </p>
              <p className="text-xs text-white/60 lg:text-right">
                Beispielstandort: Mannheim
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#3d4a3d] px-4 py-5">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 sm:flex-row">
          <div className="flex items-center gap-2 text-white/70">
            <MonogramLogo />
            <span className="text-xs font-semibold uppercase tracking-wide">
              Dr. med. Maria Weiss
            </span>
          </div>
          <p className="text-center text-xs text-white/40">
            Fiktives Design-Beispiel · erstellt von{" "}
            <Link href="/" className="text-white/60 hover:text-white">
              {siteConfig.name}
            </Link>
          </p>
        </div>
      </footer>

      <section className="border-t border-border bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#16a34a]">
            OCHS Digital Consulting
          </p>
          <h2 className="mt-4 text-2xl font-bold text-navy sm:text-3xl">
            Gefällt Ihnen dieses Design?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted">
            Wir entwickeln Ihre Praxis-Website individuell für Ihre Fachrichtung,
            Ihre Leistungen und Ihre Patienten.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href={erstgespraechUrl("website")}
              className="btn-primary inline-flex w-full items-center justify-center gap-2 px-6 py-3.5 text-base sm:w-auto"
            >
              Kostenloses Erstgespräch vereinbaren
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="/#designbeispiele"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg border-2 border-navy bg-white px-6 py-3.5 text-base font-semibold text-navy transition-colors hover:bg-slate-50 sm:w-auto"
            >
              Weitere Praxis-Beispiele ansehen
            </Link>
          </div>
        </div>
      </section>

      <DemoAppointmentModal
        open={demoOpen}
        onClose={closeDemo}
        services={hautarztDemoServices}
      />
    </div>
  );
}
