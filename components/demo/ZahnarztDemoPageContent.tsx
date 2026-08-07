"use client";

import { DemoAppointmentModal } from "@/components/demo/DemoAppointmentModal";
import { erstgespraechUrl } from "@/lib/cta";
import { siteConfig } from "@/lib/seo/config";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  Calendar,
  Clock,
  Heart,
  Mail,
  MapPin,
  Phone,
  Shield,
  Smile,
  Sparkles,
  Star,
  Stethoscope,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";

const navLinks = [
  { href: "#start", label: "Startseite" },
  { href: "#leistungen", label: "Leistungen" },
  { href: "#praxis", label: "Praxis" },
  { href: "#team", label: "Team" },
  { href: "#bewertungen", label: "Bewertungen" },
  { href: "#kontakt", label: "Kontakt" },
];

const benefits = [
  {
    icon: Clock,
    title: "Kurze Wartezeiten",
    description: "Effiziente Terminplanung für mehr Komfort.",
  },
  {
    icon: Stethoscope,
    title: "Moderne Ausstattung",
    description: "Aktuelle Technik für präzise Behandlungen.",
  },
  {
    icon: Heart,
    title: "Persönliche Betreuung",
    description: "Zeit für Ihre Fragen und individuelle Beratung.",
  },
  {
    icon: Shield,
    title: "Höchste Qualität",
    description: "Sorgfältige Arbeit nach aktuellen Standards.",
  },
];

const services = [
  { icon: Sparkles, title: "Prophylaxe", description: "Professionelle Zahnreinigung und Vorsorge." },
  { icon: Shield, title: "Implantologie", description: "Fester Zahnersatz für natürliche Funktion." },
  { icon: Smile, title: "Bleaching", description: "Schonende Aufhellung für strahlend weiße Zähne." },
  { icon: Stethoscope, title: "Zahnersatz", description: "Kronen, Brücken und Prothesen passgenau." },
  { icon: Shield, title: "Füllungen", description: "Zahnerhaltung mit hochwertigen Materialien." },
  { icon: Users, title: "Kinderzahnheilkunde", description: "Einfühlsame Behandlung für junge Patienten." },
  { icon: Sparkles, title: "Wurzelbehandlung", description: "Schmerzarme Therapie zur Zahnerhaltung." },
  { icon: Smile, title: "Ästhetische Zahnmedizin", description: "Veneers und harmonische Korrekturen." },
];

const team = [
  {
    name: "Dr. med. dent. Markus Schmidt",
    role: "Zahnarzt & Praxisinhaber",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Dr. med. dent. Anna Weber",
    role: "Zahnärztin",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Julia Klein",
    role: "Prophylaxe-Assistentin",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=400&q=80",
  },
];

const testimonials = [
  {
    quote:
      "Sehr freundliches Team und moderne Praxis. Ich fühle mich hier bestens aufgehoben.",
    author: "Sabine M.",
  },
  {
    quote:
      "Die Online-Terminbuchung ist super einfach. Behandlung war schmerzarm und professionell.",
    author: "Thomas K.",
  },
  {
    quote:
      "Endlich eine Praxis, die sich Zeit nimmt. Klare Empfehlung für die ganze Familie.",
    author: "Familie Hoffmann",
  },
];

function ToothLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M16 4C12.5 4 10 6.2 10 9.5c0 2.2.8 4.2 2 5.8-.3 2.5-.8 5.5-1.2 8.2-.3 1.8.9 3.5 2.7 3.5h.8c1.4 0 2.6-1 2.7-2.4l.3-3.6c.1-.8.7-1.4 1.5-1.4s1.4.6 1.5 1.4l.3 3.6c.1 1.4 1.3 2.4 2.7 2.4h.8c1.8 0 3-1.7 2.7-3.5-.4-2.7-.9-5.7-1.2-8.2 1.2-1.6 2-3.6 2-5.8C22 6.2 19.5 4 16 4Z"
        fill="currentColor"
      />
    </svg>
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

export function ZahnarztDemoPageContent() {
  const [demoOpen, setDemoOpen] = useState(false);
  const openDemo = useCallback(() => setDemoOpen(true), []);
  const closeDemo = useCallback(() => setDemoOpen(false), []);

  return (
    <div className="bg-white text-[#0a2540]">
      <div className="border-b border-[#0a2540]/10 bg-[#eef6f4] px-4 py-3">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 sm:flex-row">
          <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-[#0a2540]/75 transition-colors hover:text-[#0a2540]"
            >
              <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
              Zurück zu OCHS Digital
            </Link>
            <span className="hidden h-4 w-px bg-[#0a2540]/15 sm:block" aria-hidden="true" />
            <p className="text-center text-xs font-semibold text-[#0a2540] sm:text-left">
              Fiktives Design-Beispiel – keine echte Zahnarztpraxis
            </p>
          </div>
          <Link
            href={erstgespraechUrl("website")}
            className="inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-[#0a2540] px-4 py-2 text-xs font-semibold text-white transition-opacity hover:opacity-90"
          >
            So eine Website anfragen
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-[#0a2540]/8 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3.5 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#2a9d8f]/10 text-[#2a9d8f]">
              <ToothLogo className="h-5 w-5" />
            </div>
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#2a9d8f]">
                Zahnarztpraxis
              </p>
              <p className="text-sm font-bold leading-tight text-[#0a2540] sm:text-base">
                Dr. Schmidt
              </p>
            </div>
          </div>

          <nav className="hidden items-center gap-5 text-sm text-[#0a2540]/70 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-[#2a9d8f]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <DemoBookButton
            onOpenDemo={openDemo}
            className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-[#2a9d8f] px-4 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            <Calendar className="h-4 w-4" aria-hidden="true" />
            <span className="hidden sm:inline">Online Termin buchen</span>
            <span className="sm:hidden">Termin</span>
          </DemoBookButton>
        </div>
      </header>

      <main id="start">
        <section className="relative min-h-[520px] overflow-hidden lg:min-h-[580px]">
          <Image
            src="/beispiele/zahnarzt-behandlungsraum.png"
            alt="Beispielbild: Moderner Behandlungsraum in einer fiktiven Zahnarztpraxis"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a2540]/88 via-[#0a2540]/55 to-[#0a2540]/20" />

          <div className="relative mx-auto flex min-h-[520px] max-w-6xl items-center px-4 py-16 lg:min-h-[580px] lg:px-8">
            <div className="max-w-xl text-white">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#7dd3c0]">
                Moderne Zahnmedizin
              </p>
              <h1 className="mt-4 text-3xl font-bold leading-[1.12] sm:text-4xl lg:text-5xl">
                Ihr Lächeln in den besten Händen
              </h1>
              <p className="mt-4 text-base leading-relaxed text-white/80">
                Willkommen in unserer modernen Zahnarztpraxis — persönliche
                Betreuung, schonende Behandlungen und ein Team, das sich Zeit
                für Sie nimmt.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <DemoBookButton
                  onOpenDemo={openDemo}
                  className="inline-flex items-center gap-2 rounded-lg bg-[#2a9d8f] px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                >
                  <Calendar className="h-4 w-4" aria-hidden="true" />
                  Online Termin buchen
                </DemoBookButton>
                <span className="inline-flex items-center gap-2 rounded-lg border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Telefon: Beispielnummer
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-[#0a2540]/8 bg-white py-10">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
            {benefits.map(({ icon: Icon, title, description }) => (
              <div key={title} className="text-center">
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#eef6f4] text-[#2a9d8f]">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h2 className="mt-3 text-sm font-bold text-[#0a2540]">{title}</h2>
                <p className="mt-1 text-sm text-[#0a2540]/60">{description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="leistungen" className="bg-[#f7faf9] py-16 lg:py-20">
          <div className="mx-auto max-w-6xl px-4 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2a9d8f]">
                Unsere Leistungen
              </p>
              <h2 className="mt-3 text-2xl font-bold text-[#0a2540] sm:text-3xl">
                Für Ihre Zahngesundheit
              </h2>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {services.map(({ icon: Icon, title, description }) => (
                <article
                  key={title}
                  className="rounded-xl border border-[#2a9d8f]/15 bg-white p-5 transition-shadow hover:shadow-md"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#eef6f4] text-[#2a9d8f]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-sm font-bold text-[#0a2540]">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#0a2540]/60">
                    {description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="team" className="bg-white py-16 lg:py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 lg:grid-cols-2 lg:gap-14 lg:px-8">
            <div id="praxis">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2a9d8f]">
                Unser Team
              </p>
              <h2 className="mt-3 text-2xl font-bold text-[#0a2540] sm:text-3xl">
                Erfahren. Einfühlsam. Für Sie da.
              </h2>
              <p className="mt-3 rounded-lg border border-[#2a9d8f]/20 bg-[#eef6f4] px-3 py-2 text-xs font-medium text-[#0a2540]/75">
                Beispielteam – Namen und dargestellte Personen sind fiktiv.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[#0a2540]/65">
                Unser erfahrenes Team verbindet moderne Zahnmedizin mit
                persönlicher Betreuung — damit Sie sich von Anfang an wohlfühlen
                und bestens informiert sind.
              </p>
              <a
                href="#team-mitglieder"
                className="mt-6 inline-flex items-center gap-2 rounded-lg border border-[#2a9d8f]/30 bg-white px-5 py-3 text-sm font-semibold text-[#2a9d8f] transition-colors hover:bg-[#eef6f4]"
              >
                Mehr über unser Team
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>

            <div id="team-mitglieder" className="grid gap-4 sm:grid-cols-3">
              {team.map((member) => (
                <article
                  key={member.name}
                  className="overflow-hidden rounded-xl border border-[#0a2540]/8 bg-white shadow-sm"
                >
                  <div className="relative aspect-[3/4]">
                    <Image
                      src={member.image}
                      alt={`Beispielbild: ${member.name}`}
                      fill
                      sizes="(max-width: 640px) 100vw, 200px"
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="text-xs font-bold leading-snug text-[#0a2540]">
                      {member.name}
                    </h3>
                    <p className="mt-1 text-[11px] text-[#0a2540]/60">{member.role}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="bewertungen" className="bg-[#0a2540] py-16 text-white lg:py-20">
          <div className="mx-auto max-w-6xl px-4 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#7dd3c0]">
                Das sagen unsere Patienten
              </p>
              <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
                Vertrauen, das uns motiviert
              </h2>
              <p className="mt-4 rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-sm text-white/85">
                Beispielbewertungen – sämtliche dargestellten Bewertungen und Namen sind fiktiv.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {testimonials.map(({ quote, author }) => (
                <article
                  key={author}
                  className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur"
                >
                  <div className="flex gap-0.5 text-[#7dd3c0]" aria-hidden="true">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-white/85">„{quote}"</p>
                  <p className="mt-4 text-sm font-semibold text-[#7dd3c0]">{author}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="kontakt" className="bg-[#f7faf9] py-16 lg:py-20">
          <div className="mx-auto max-w-6xl px-4 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-10">
              <div className="space-y-4">
                <p className="flex items-center gap-3 text-sm text-[#0a2540]/75">
                  <Phone className="h-5 w-5 shrink-0 text-[#2a9d8f]" aria-hidden="true" />
                  Telefon: Beispielnummer
                </p>
                <p className="flex items-center gap-3 text-sm text-[#0a2540]/75">
                  <Mail className="h-5 w-5 shrink-0 text-[#2a9d8f]" aria-hidden="true" />
                  praxis@example.com
                </p>
                <p className="flex items-start gap-3 text-sm text-[#0a2540]/75">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#2a9d8f]" aria-hidden="true" />
                  Musterstraße 12
                  <br />
                  12345 Musterstadt
                </p>
                <p className="flex items-start gap-3 text-sm text-[#0a2540]/75">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-[#2a9d8f]" aria-hidden="true" />
                  Mo–Do 8:00–18:00 · Fr 8:00–14:00
                </p>
              </div>

              <div className="text-center">
                <Award className="mx-auto h-8 w-8 text-[#2a9d8f]" aria-hidden="true" />
                <h2 className="mt-3 text-lg font-bold text-[#0a2540]">
                  Jetzt Termin vereinbaren
                </h2>
                <p className="mt-2 text-sm text-[#0a2540]/60">
                  Online buchen — schnell und unkompliziert.
                </p>
                <DemoBookButton
                  onOpenDemo={openDemo}
                  className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#2a9d8f] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                >
                  <Calendar className="h-4 w-4" aria-hidden="true" />
                  Online Termin buchen
                </DemoBookButton>
              </div>

              <div className="overflow-hidden rounded-xl border border-[#0a2540]/10 bg-[#e8ecea] shadow-sm">
                <div className="flex aspect-[4/3] flex-col items-center justify-center p-6 text-center">
                  <MapPin className="h-8 w-8 text-[#2a9d8f]" aria-hidden="true" />
                  <p className="mt-3 text-sm font-semibold text-[#0a2540]">
                    Praxis Dr. Schmidt
                  </p>
                  <p className="mt-1 text-xs text-[#0a2540]/55">
                    Beispielstandort: Mannheim
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#071a2e] px-4 py-8 text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2">
            <ToothLogo className="h-5 w-5 text-[#2a9d8f]" />
            <span className="text-sm font-bold">Zahnarztpraxis Dr. Schmidt</span>
          </div>
          <nav className="flex flex-wrap justify-center gap-4 text-xs text-white/60">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-white">
                {link.label}
              </a>
            ))}
            <span>Impressum</span>
            <span>Datenschutz</span>
          </nav>
        </div>
        <p className="mx-auto mt-6 max-w-6xl text-center text-xs text-white/40">
          Fiktives Design-Beispiel · erstellt von{" "}
          <Link href="/" className="text-white/60 hover:text-white">
            {siteConfig.name}
          </Link>
        </p>
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

      <DemoAppointmentModal open={demoOpen} onClose={closeDemo} />
    </div>
  );
}
