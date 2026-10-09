"use client";

import { DemoAppointmentModal } from "@/components/demo/DemoAppointmentModal";
import { erstgespraechUrl, primaryCtaLabel } from "@/lib/cta";
import { siteConfig } from "@/lib/seo/config";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Check,
  Cpu,
  Globe,
  Heart,
  Mail,
  MapPin,
  Phone,
  Sun,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";

const navLinks = [
  { href: "#leistungen", label: "Leistungen" },
  { href: "#praxis", label: "Praxis" },
  { href: "#team", label: "Team" },
  { href: "#patienten", label: "Patienten" },
  { href: "#kontakt", label: "Kontakt" },
];

const usps = [
  {
    icon: Heart,
    title: "Ein fürsorgliches Team",
    description: "Wir nehmen uns Zeit für Sie und Ihre Anliegen.",
  },
  {
    icon: Cpu,
    title: "Moderne Technik",
    description: "Schonende Behandlung mit neuester Technologie.",
  },
  {
    icon: Sun,
    title: "Angenehme Atmosphäre",
    description: "Wohlfühlen in einer modernen und entspannten Umgebung.",
  },
  {
    icon: Calendar,
    title: "Flexible Termine",
    description: "Online-Terminbuchung und kurze Wartezeiten.",
  },
];

const services = [
  {
    title: "Zahnvorsorge",
    description: "Professionelle Prophylaxe und regelmäßige Kontrollen für langfristige Zahngesundheit.",
    image:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Ästhetische Zahnmedizin",
    description: "Veneers, Bleaching und harmonische Korrekturen für ein strahlendes Lächeln.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Implantologie",
    description: "Fester Zahnersatz mit modernen Implantatsystemen für natürliche Funktion.",
    image:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Zahnersatz",
    description: "Kronen, Brücken und Prothesen — passgenau und ästhetisch.",
    image:
      "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Wurzelbehandlung",
    description: "Schmerzarme Endodontie zur Erhaltung Ihrer natürlichen Zähne.",
    image:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=80",
  },
];

const practiceFeatures = [
  "Helle, freundliche Behandlungsräume",
  "Moderne Ausstattung",
  "Individuelle Beratung und Betreuung",
  "Sanfte und schonende Behandlungsmethoden",
];

const team = [
  {
    name: "Dr. Maximilian Berger",
    role: "Zahnarzt & Praxisinhaber",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Dr. Julia Hoffmann",
    role: "Zahnärztin",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Anna-Lena Müller",
    role: "Zahnmedizinische Fachangestellte",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Sophie König",
    role: "Prophylaxe & Assistenz",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
  },
];

const demoServices = [
  "Kontrolluntersuchung",
  "Professionelle Zahnreinigung",
  "Erstberatung Implantologie",
] as const;

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
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
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

export function ZahnarztAmSeeDemoPageContent() {
  const [demoOpen, setDemoOpen] = useState(false);
  const openDemo = useCallback(() => setDemoOpen(true), []);
  const closeDemo = useCallback(() => setDemoOpen(false), []);

  return (
    <div className="bg-white text-[#1E3A5F]">
      <div className="border-b border-[#1E3A5F]/10 bg-[#F5F7FA] px-4 py-2">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 sm:flex-row">
          <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-[11px] font-medium text-[#6B7280] transition-colors hover:text-[#1E3A5F]"
            >
              <ArrowLeft className="h-3 w-3" aria-hidden="true" />
              Zurück zu OCHS Digital
            </Link>
            <span className="hidden h-3 w-px bg-[#1E3A5F]/15 sm:block" aria-hidden="true" />
            <p className="text-center text-[11px] font-medium uppercase tracking-wide text-[#6B7280] sm:text-left">
              Fiktives Design-Beispiel – keine echte Zahnarztpraxis
            </p>
          </div>
          <Link
            href={erstgespraechUrl("website")}
            className="inline-flex shrink-0 items-center gap-1.5 rounded-md bg-[#1E3A5F] px-3 py-1.5 text-[11px] font-semibold text-white transition-opacity hover:opacity-90"
          >
            So eine Website anfragen
            <ArrowRight className="h-3 w-3" aria-hidden="true" />
          </Link>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-[#1E3A5F]/8 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 lg:px-8">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center text-[#00BFA9]">
              <ToothLogo className="h-7 w-7" />
            </div>
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#1E3A5F] sm:text-sm">
              Zahnarztpraxis am See
            </p>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-[#6B7280] lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-[#00BFA9]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <DemoBookButton
            onOpenDemo={openDemo}
            className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-[#00BFA9] px-4 py-2.5 text-xs font-semibold uppercase tracking-wide text-white shadow-sm transition-opacity hover:opacity-90 sm:text-sm sm:normal-case sm:tracking-normal"
          >
            <Calendar className="h-4 w-4" aria-hidden="true" />
            <span className="hidden sm:inline">Termin vereinbaren</span>
            <span className="sm:hidden">Termin</span>
          </DemoBookButton>
        </div>
      </header>

      <main id="start">
        <section className="bg-[#F5F7FA] py-12 lg:py-16">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 lg:grid-cols-2 lg:gap-14 lg:px-8">
            <div>
              <h1 className="text-3xl font-bold leading-tight text-[#0D2B45] sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
                Zahnmedizin mit{" "}
                <span className="text-[#00BFA9]">Herz und Kompetenz</span>
              </h1>
              <p className="mt-5 text-base leading-relaxed text-[#6B7280]">
                Moderne Behandlungsmethoden, persönliche Betreuung und ein Lächeln,
                auf das Sie vertrauen können.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <DemoBookButton
                  onOpenDemo={openDemo}
                  className="inline-flex items-center gap-2 rounded-lg bg-[#00BFA9] px-5 py-3 text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-90"
                >
                  <Calendar className="h-4 w-4" aria-hidden="true" />
                  Termin online buchen
                </DemoBookButton>
                <a
                  href="#praxis"
                  className="inline-flex items-center gap-2 rounded-lg border-2 border-[#00BFA9] bg-white px-5 py-3 text-sm font-semibold text-[#1E3A5F] transition-colors hover:bg-[#F5F7FA]"
                >
                  Praxis kennenlernen
                </a>
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80"
                alt="Beispielbild: Empfangsbereich einer modernen Zahnarztpraxis"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section className="border-y border-[#1E3A5F]/8 bg-white py-10">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
            {usps.map(({ icon: Icon, title, description }) => (
              <div key={title} className="text-center">
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg border border-[#00BFA9]/20 bg-[#F5F7FA] text-[#00BFA9]">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h2 className="mt-3 text-sm font-bold text-[#0D2B45]">{title}</h2>
                <p className="mt-1.5 text-sm leading-relaxed text-[#6B7280]">{description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="leistungen" className="bg-[#F5F7FA] py-16 lg:py-20">
          <div className="mx-auto max-w-6xl px-4 lg:px-8">
            <div className="text-center">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#00BFA9]">
                Unsere Leistungen
              </p>
              <h2 className="mt-3 text-2xl font-bold text-[#0D2B45] sm:text-3xl">
                Für Ihre Zahngesundheit
              </h2>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {services.map(({ title, description, image }) => (
                <article
                  key={title}
                  className="overflow-hidden rounded-lg border border-[#1E3A5F]/8 bg-white shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={image}
                      alt={`Beispielbild: ${title}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-bold text-[#0D2B45]">{title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-[#6B7280]">
                      {description}
                    </p>
                    <a
                      href="#kontakt"
                      className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-[#00BFA9] transition-colors hover:text-[#1E3A5F]"
                    >
                      Mehr erfahren
                      <ArrowRight className="h-3 w-3" aria-hidden="true" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="praxis" className="bg-white py-16 lg:py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 lg:grid-cols-2 lg:gap-14 lg:px-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#00BFA9]">
                Unsere Praxis
              </p>
              <h2 className="mt-3 text-2xl font-bold text-[#0D2B45] sm:text-3xl">
                Moderne Praxis – für Ihr Wohlbefinden
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[#6B7280]">
                In hellen, freundlichen Räumen verbinden wir moderne Zahnmedizin mit
                persönlicher Betreuung — damit Sie sich von Anfang an wohlfühlen und
                bestens informiert sind.
              </p>
              <ul className="mt-6 space-y-3">
                {practiceFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-[#1E3A5F]">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#00BFA9]/15 text-[#00BFA9]">
                      <Check className="h-3 w-3" aria-hidden="true" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#team"
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#00BFA9] px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                Mehr über unsere Praxis
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80"
                alt="Beispielbild: Moderner Behandlungsraum mit Behandlungsstuhl"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section id="team" className="bg-[#F5F7FA] py-16 lg:py-20">
          <div className="mx-auto max-w-6xl px-4 lg:px-8">
            <div className="text-center">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#00BFA9]">
                Unser Team
              </p>
              <h2 className="mt-3 text-2xl font-bold text-[#0D2B45] sm:text-3xl">
                Kompetenz, die Vertrauen schafft
              </h2>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {team.map(({ name, role, image }) => (
                <article
                  key={name}
                  className="overflow-hidden rounded-lg border border-[#1E3A5F]/8 bg-white text-center shadow-sm"
                >
                  <div className="relative aspect-square">
                    <Image
                      src={image}
                      alt={`Beispielbild: ${name}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-bold text-[#0D2B45]">{name}</h3>
                    <p className="mt-1 text-xs text-[#6B7280]">{role}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="patienten" className="bg-white py-14 lg:py-16">
          <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#00BFA9]">
              Für Patienten
            </p>
            <h2 className="mt-3 text-2xl font-bold text-[#0D2B45] sm:text-3xl">
              Ihr Weg zu uns
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#6B7280]">
              Ob Erstbesuch oder laufende Behandlung — wir begleiten Sie transparent
              durch jeden Schritt. Termine buchen Sie bequem online oder telefonisch.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <DemoBookButton
                onOpenDemo={openDemo}
                className="inline-flex items-center gap-2 rounded-lg bg-[#00BFA9] px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                <Calendar className="h-4 w-4" aria-hidden="true" />
                Termin online buchen
              </DemoBookButton>
              <a
                href="#kontakt"
                className="inline-flex items-center gap-2 rounded-lg border border-[#1E3A5F]/15 px-5 py-3 text-sm font-semibold text-[#1E3A5F] transition-colors hover:bg-[#F5F7FA]"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Kontakt aufnehmen
              </a>
            </div>
          </div>
        </section>

        <section id="kontakt" className="bg-[#0D2B45] py-16 text-white lg:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-3 lg:gap-8 lg:px-8">
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 text-[#00BFA9]">
                <Calendar className="h-6 w-6" aria-hidden="true" />
              </span>
              <h2 className="mt-4 text-lg font-bold">Online Terminvereinbarung</h2>
              <p className="mt-2 text-sm text-white/70">
                Schnell und unkompliziert — rund um die Uhr verfügbar.
              </p>
              <DemoBookButton
                onOpenDemo={openDemo}
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#00BFA9] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                Jetzt Termin buchen
              </DemoBookButton>
            </div>

            <div className="space-y-4 text-sm">
              <h2 className="text-lg font-bold">Kontakt</h2>
              <p className="flex items-start gap-3 text-white/80">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#00BFA9]" aria-hidden="true" />
                Seestraße 45
                <br />
                12345 Musterstadt
              </p>
              <p className="flex items-center gap-3 text-white/80">
                <Phone className="h-4 w-4 shrink-0 text-[#00BFA9]" aria-hidden="true" />
                0123 / 456 78 90
              </p>
              <p className="flex items-center gap-3 text-white/80">
                <Mail className="h-4 w-4 shrink-0 text-[#00BFA9]" aria-hidden="true" />
                info@zahnarztpraxis-am-see.de
              </p>
              <p className="flex items-center gap-3 text-white/80">
                <Globe className="h-4 w-4 shrink-0 text-[#00BFA9]" aria-hidden="true" />
                www.zahnarztpraxis-am-see.de
              </p>
            </div>

            <div className="overflow-hidden rounded-lg border border-white/10 bg-[#1E3A5F] shadow-sm">
              <div className="relative aspect-[4/3]">
                <div className="absolute inset-0 bg-[#1a3a5c]" />
                <div className="absolute inset-0 opacity-30">
                  <div className="grid h-full w-full grid-cols-6 grid-rows-6">
                    {Array.from({ length: 36 }).map((_, i) => (
                      <div
                        key={i}
                        className={`border border-white/5 ${i % 3 === 0 ? "bg-white/5" : ""}`}
                      />
                    ))}
                  </div>
                </div>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-full">
                  <MapPin className="h-8 w-8 text-[#00BFA9] drop-shadow-lg" aria-hidden="true" />
                </div>
                <p className="absolute bottom-3 left-3 right-3 text-center text-[10px] text-white/50">
                  Beispiel-Kartenansicht
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#071a2e] px-4 py-6 text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2">
            <ToothLogo className="h-5 w-5 text-[#00BFA9]" />
            <span className="text-sm font-bold">Zahnarztpraxis am See</span>
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
        <p className="mx-auto mt-4 max-w-6xl text-center text-xs text-white/40">
          Design-Beispiel · erstellt von{" "}
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
              {primaryCtaLabel}
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
        services={demoServices}
      />
    </div>
  );
}
