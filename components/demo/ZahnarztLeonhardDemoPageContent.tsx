"use client";

import { DemoAppointmentModal } from "@/components/demo/DemoAppointmentModal";
import { erstgespraechUrl, primaryCtaLabel } from "@/lib/cta";
import { siteConfig } from "@/lib/seo/config";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Heart,
  Leaf,
  Mail,
  MapPin,
  Menu,
  Phone,
  Shield,
  Sparkles,
  Star,
  Stethoscope,
  Users,
  X,
} from "lucide-react";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const navLinks = [
  { href: "#praxis", label: "Praxis" },
  { href: "#leistungen", label: "Leistungen" },
  { href: "#aesthetik", label: "Ästhetik" },
  { href: "#team", label: "Team" },
  { href: "#patienteninfo", label: "Patienteninfo" },
  { href: "#kontakt", label: "Kontakt" },
];

const benefits = [
  {
    icon: Heart,
    title: "Persönlich",
    description: "Wir nehmen uns Zeit für Sie.",
  },
  {
    icon: Stethoscope,
    title: "Modern",
    description: "Hochwertige Technik für bestmögliche Ergebnisse.",
  },
  {
    icon: Leaf,
    title: "Schonend",
    description: "Sanfte Behandlung für Ihr Wohlbefinden.",
  },
  {
    icon: Shield,
    title: "Transparent",
    description: "Klare Beratung und faire Preise.",
  },
];

const services = [
  { icon: Sparkles, title: "Prophylaxe", description: "Professionelle Vorsorge für langfristige Zahngesundheit." },
  { icon: Stethoscope, title: "Implantologie", description: "Fester Zahnersatz mit modernen Implantatsystemen." },
  { icon: Star, title: "Ästhetische Zahnmedizin", description: "Natürliche Ergebnisse für ein harmonisches Lächeln." },
  { icon: Shield, title: "Zahnersatz", description: "Kronen, Brücken und Prothesen in höchster Qualität." },
  { icon: Leaf, title: "Parodontologie", description: "Behandlung des Zahnhalteapparats und des Zahnfleisches." },
  { icon: Heart, title: "Endodontie", description: "Schonende Wurzelbehandlung zur Zahnerhaltung." },
];

const aestheticServices = [
  "Bleaching",
  "Veneers",
  "Unsichtbare Zahnkorrektur",
  "Ästhetische Kompositfüllungen",
];

const practiceImages = [
  {
    src: "/beispiele/zahnarzt-leonhard-hero.png",
    alt: "Empfangsbereich der Zahnarztpraxis Dr. Leonhard",
    label: "Empfang",
    className: "lg:col-span-7 lg:row-span-2",
    aspect: "aspect-[4/5] lg:aspect-auto lg:min-h-[520px]",
  },
  {
    src: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=900&q=80",
    alt: "Behandlungsraum der Zahnarztpraxis Dr. Leonhard",
    label: "Behandlungsraum",
    className: "lg:col-span-5",
    aspect: "aspect-[4/3]",
  },
  {
    src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=80",
    alt: "Wartebereich der Zahnarztpraxis Dr. Leonhard",
    label: "Wartebereich",
    className: "lg:col-span-5",
    aspect: "aspect-[4/3]",
  },
];

const team = [
  {
    name: "Dr. Anna Leonhard",
    role: "Zahnärztin",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Dr. Felix Berger",
    role: "Zahnarzt",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Sophie Klein",
    role: "Dentalhygiene",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=500&q=80",
  },
];

const testimonials = [
  {
    quote:
      "Eine Praxis, in der man sich vom ersten Moment an willkommen fühlt. Die Behandlung war sanft und sehr gut erklärt.",
    author: "Claudia R.",
  },
  {
    quote:
      "Endlich eine Zahnarztpraxis, die modern und persönlich zugleich ist. Ich bin mit dem Ergebnis sehr zufrieden.",
    author: "Markus H.",
  },
  {
    quote:
      "Hervorragende Beratung und eine Atmosphäre, die wirklich beruhigt. Klare Empfehlung.",
    author: "Julia W.",
  },
];

const demoServices = [
  "Erstuntersuchung",
  "Professionelle Zahnreinigung",
  "Ästhetische Beratung",
] as const;

/** Demo-Kontaktdaten — kein echter Praxisstandort */
const demoContact = {
  street: "Maximilianstraße 28",
  city: "80539 München",
  phone: "089 / 123 45 67",
  email: "praxis@dr-leonhard.de",
};

function ToothLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <path
        d="M16 4C12.5 4 10 6.2 10 9.5c0 2.2.8 4.2 2 5.8-.3 2.5-.8 5.5-1.2 8.2-.3 1.8.9 3.5 2.7 3.5h.8c1.4 0 2.6-1 2.7-2.4l.3-3.6c.1-.8.7-1.4 1.5-1.4s1.4.6 1.5 1.4l.3 3.6c.1 1.4 1.3 2.4 2.7 2.4h.8c1.8 0 3-1.7 2.7-3.5-.4-2.7-.9-5.7-1.2-8.2 1.2-1.6 2-3.6 2-5.8C22 6.2 19.5 4 16 4Z"
        stroke="currentColor"
        strokeWidth="1.25"
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

function HeroCurve({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 800"
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M0,0 C70,120 85,320 55,480 C35,590 20,690 0,800 L0,0 Z"
        fill="#FAF7F2"
      />
    </svg>
  );
}

export function ZahnarztLeonhardDemoPageContent() {
  const [demoOpen, setDemoOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const openDemo = useCallback(() => {
    setMenuOpen(false);
    setDemoOpen(true);
  }, []);
  const closeDemo = useCallback(() => setDemoOpen(false), []);

  return (
    <div className="bg-[#FAF7F2] text-[#3D3832]">
      <div className="border-b border-[#1F4543]/8 bg-[#F5F0E8] px-4 py-2.5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 sm:flex-row">
          <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-[11px] font-medium text-[#6B6560] transition-colors hover:text-[#1F4543]"
            >
              <ArrowLeft className="h-3 w-3" aria-hidden="true" />
              Zurück zu OCHS Digital
            </Link>
            <span className="hidden h-3 w-px bg-[#1F4543]/10 sm:block" aria-hidden="true" />
            <p className="text-center text-[11px] text-[#6B6560] sm:text-left">
              Design-Beispiel · keine echte Praxis
            </p>
          </div>
          <Link
            href={erstgespraechUrl("website")}
            className="inline-flex shrink-0 items-center gap-1.5 rounded-md bg-[#1F4543] px-3 py-1.5 text-[11px] font-semibold text-[#FAF7F2] transition-opacity hover:opacity-90"
          >
            So eine Website anfragen
            <ArrowRight className="h-3 w-3" aria-hidden="true" />
          </Link>
        </div>
      </div>

      <header className="border-b border-[#1F4543]/8 bg-[#FAF7F2]/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-5 lg:px-8">
          <a href="#start" className="flex min-w-0 items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center text-[#1F4543]">
              <ToothLogo className="h-7 w-7" />
            </div>
            <div className="min-w-0 leading-tight">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#6B6560]">
                Zahnarztpraxis
              </p>
              <p className="truncate text-sm font-semibold tracking-wide text-[#1F4543] sm:text-base">
                Dr. Leonhard
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-6 xl:flex" aria-label="Hauptnavigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[#3D3832]/80 transition-colors hover:text-[#1F4543] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F4543]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <DemoBookButton
              onOpenDemo={openDemo}
              className="hidden items-center gap-2 rounded-md bg-[#1F4543] px-4 py-2.5 text-sm font-medium text-[#FAF7F2] transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F4543] sm:inline-flex"
            >
              <Calendar className="h-4 w-4" aria-hidden="true" />
              Termin vereinbaren
            </DemoBookButton>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-[#1F4543] xl:hidden"
              aria-expanded={menuOpen}
              aria-controls="leonhard-mobile-nav"
              aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav
            id="leonhard-mobile-nav"
            className="border-t border-[#1F4543]/8 px-4 py-4 xl:hidden"
            aria-label="Mobile Navigation"
          >
            <ul className="space-y-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block rounded-md px-3 py-2.5 text-sm font-medium text-[#3D3832] hover:bg-[#F5F0E8]"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <DemoBookButton
                  onOpenDemo={openDemo}
                  className="flex w-full items-center justify-center gap-2 rounded-md bg-[#1F4543] px-4 py-3 text-sm font-medium text-[#FAF7F2]"
                >
                  <Calendar className="h-4 w-4" aria-hidden="true" />
                  Termin vereinbaren
                </DemoBookButton>
              </li>
            </ul>
          </nav>
        )}
      </header>

      <main id="start">
        <section className="relative overflow-hidden bg-[#FAF7F2]">
          <div className="grid lg:grid-cols-2">
            <div className="relative z-10 flex flex-col justify-center px-4 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20 xl:px-16">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#A68B5B]">
                Moderne Zahnheilkunde mit Herz
              </p>
              <h1
                className={`${playfair.className} mt-5 max-w-xl text-[2.35rem] font-semibold leading-[1.08] text-[#1F4543] sm:text-5xl lg:text-[3.35rem] xl:text-[3.75rem]`}
              >
                Für Ihr schönstes{" "}
                <span className="text-[#A68B5B]">Lächeln.</span>
              </h1>
              <p className="mt-6 max-w-md text-base leading-relaxed text-[#6B6560] sm:text-lg">
                Wir verbinden moderne Zahnmedizin mit persönlicher Betreuung – für
                gesunde Zähne und ein gutes Gefühl bei jedem Besuch.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-5">
                <DemoBookButton
                  onOpenDemo={openDemo}
                  className="inline-flex items-center gap-2 rounded-md bg-[#1F4543] px-6 py-3.5 text-sm font-medium text-[#FAF7F2] transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F4543]"
                >
                  <Calendar className="h-4 w-4" aria-hidden="true" />
                  Termin vereinbaren
                </DemoBookButton>
                <a
                  href="#praxis"
                  className="inline-flex items-center gap-2 border-b border-[#A68B5B]/50 pb-0.5 text-sm font-medium text-[#1F4543] transition-colors hover:border-[#1F4543] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1F4543]"
                >
                  Unsere Praxis
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="relative min-h-[340px] sm:min-h-[420px] lg:min-h-[620px]">
              <Image
                src="/beispiele/zahnarzt-leonhard-hero.png"
                alt="Moderner Empfangsbereich der Zahnarztpraxis Dr. Leonhard"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
              <HeroCurve className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-24 lg:block xl:w-28" />
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#FAF7F2] to-transparent lg:hidden"
                aria-hidden="true"
              />
            </div>
          </div>
        </section>

        <section className="border-y border-[#1F4543]/8 bg-white py-10 lg:py-12">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6 lg:px-8">
            {benefits.map(({ icon: Icon, title, description }) => (
              <div key={title} className="text-center lg:text-left">
                <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full border border-[#1F4543]/12 bg-[#FAF7F2] text-[#1F4543] lg:mx-0">
                  <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
                </span>
                <h2 className="mt-4 text-base font-semibold text-[#1F4543]">{title}</h2>
                <p className="mt-1.5 text-sm leading-relaxed text-[#6B6560]">{description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="leistungen" className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#A68B5B]">
                Unsere Leistungen
              </p>
              <h2
                className={`${playfair.className} mt-4 text-3xl font-semibold text-[#1F4543] sm:text-4xl`}
              >
                Zahnmedizin auf höchstem Niveau
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#6B6560]">
                Von Prophylaxe bis Implantologie – wir bieten Ihnen das gesamte
                Spektrum moderner Zahnmedizin unter einem Dach.
              </p>
            </div>
            <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {services.map(({ icon: Icon, title, description }) => (
                <article key={title} className="border-t border-[#1F4543]/10 pt-6">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#1F4543]/12 text-[#1F4543]">
                    <Icon className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-[#1F4543]">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#6B6560]">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="aesthetik" className="bg-white py-16 lg:py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2 lg:gap-16 lg:px-8">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm lg:aspect-[5/6]">
              <Image
                src="https://images.unsplash.com/photo-1598256989808-f780b1277841?auto=format&fit=crop&w=900&q=80"
                alt="Ästhetische Zahnmedizin in der Praxis Dr. Leonhard"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#A68B5B]">
                Ästhetische Zahnmedizin
              </p>
              <h2
                className={`${playfair.className} mt-4 text-3xl font-semibold leading-tight text-[#1F4543] sm:text-4xl`}
              >
                Natürlich schön. Nicht künstlich perfekt.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#6B6560]">
                Von professioneller Zahnaufhellung bis zu hochwertigen Veneers – unser
                Ziel ist ein Ergebnis, das zu Ihnen passt und natürlich wirkt.
              </p>
              <ul className="mt-8 space-y-3">
                {aestheticServices.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 border-b border-[#1F4543]/8 pb-3 text-sm text-[#3D3832]"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#A68B5B]" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="praxis" className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#A68B5B]">
                Unsere Praxis
              </p>
              <h2
                className={`${playfair.className} mt-4 text-3xl font-semibold text-[#1F4543] sm:text-4xl`}
              >
                Eine Praxis, in der Sie sich wohlfühlen
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#6B6560]">
                Warme Materialien, durchdachtes Licht und ruhige Räume schaffen eine
                Atmosphäre, die Vertrauen und Entspannung vermittelt.
              </p>
            </div>
            <div className="mt-12 grid gap-5 lg:grid-cols-12 lg:grid-rows-2 lg:gap-6">
              {practiceImages.map(({ src, alt, label, className, aspect }) => (
                <figure key={label} className={`relative overflow-hidden ${className}`}>
                  <div className={`relative ${aspect}`}>
                    <Image
                      src={src}
                      alt={alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="absolute bottom-4 left-4 bg-[#FAF7F2]/90 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-[#1F4543]">
                    {label}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="team" className="bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#A68B5B]">
                Unser Team
              </p>
              <h2
                className={`${playfair.className} mt-4 text-3xl font-semibold text-[#1F4543] sm:text-4xl`}
              >
                Für Sie da. Persönlich und auf Augenhöhe.
              </h2>
            </div>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {team.map(({ name, role, image }) => (
                <article key={name} className="text-center">
                  <div className="relative mx-auto aspect-[3/4] max-w-[280px] overflow-hidden bg-[#F5F0E8]">
                    <Image
                      src={image}
                      alt={`Porträt: ${name}`}
                      fill
                      sizes="(max-width: 640px) 100vw, 280px"
                      className="object-cover object-top"
                    />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-[#1F4543]">{name}</h3>
                  <p className="mt-1 text-sm text-[#6B6560]">{role}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="patienteninfo" className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#A68B5B]">
                Was unsere Patienten sagen
              </p>
              <h2
                className={`${playfair.className} mt-4 text-3xl font-semibold text-[#1F4543] sm:text-4xl`}
              >
                Vertrauen, das motiviert
              </h2>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {testimonials.map(({ quote, author }) => (
                <blockquote
                  key={author}
                  className="border border-[#1F4543]/10 bg-[#FAF7F2] p-6"
                >
                  <div className="flex gap-0.5 text-[#A68B5B]" aria-hidden="true">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-[#3D3832]">&ldquo;{quote}&rdquo;</p>
                  <footer className="mt-4 text-xs font-semibold text-[#6B6560]">{author}</footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#1F4543] py-16 text-[#FAF7F2] lg:py-20">
          <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
            <h2
              className={`${playfair.className} text-3xl font-semibold sm:text-4xl`}
            >
              Ihr Lächeln verdient die beste Betreuung
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#FAF7F2]/80">
              Vereinbaren Sie jetzt Ihren Termin – wir freuen uns darauf, Sie persönlich
              kennenzulernen.
            </p>
            <DemoBookButton
              onOpenDemo={openDemo}
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-[#FAF7F2] px-6 py-3.5 text-sm font-semibold text-[#1F4543] transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FAF7F2]"
            >
              <Calendar className="h-4 w-4" aria-hidden="true" />
              Termin vereinbaren
            </DemoBookButton>
          </div>
        </section>

        <section id="kontakt" className="border-t border-[#1F4543]/10 bg-[#F5F0E8] py-14">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:grid-cols-2 lg:grid-cols-3 lg:px-8">
            <div>
              <div className="flex items-center gap-2">
                <ToothLogo className="h-5 w-5 text-[#1F4543]" />
                <p className="font-semibold text-[#1F4543]">Zahnarztpraxis Dr. Leonhard</p>
              </div>
              <address
                className="mt-4 space-y-2 not-italic text-sm leading-relaxed text-[#6B6560]"
                data-demo-contact="true"
              >
                <p className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#1F4543]" aria-hidden="true" />
                  {demoContact.street}
                  <br />
                  {demoContact.city}
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4 shrink-0 text-[#1F4543]" aria-hidden="true" />
                  {demoContact.phone}
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="h-4 w-4 shrink-0 text-[#1F4543]" aria-hidden="true" />
                  {demoContact.email}
                </p>
              </address>
            </div>
            <nav className="text-sm text-[#3D3832]" aria-label="Footer Navigation">
              <ul className="space-y-2">
                <li>
                  <span className="text-[#6B6560]">Impressum</span>
                </li>
                <li>
                  <span className="text-[#6B6560]">Datenschutz</span>
                </li>
                <li>
                  <a href="#kontakt" className="hover:text-[#1F4543]">
                    Kontakt
                  </a>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={openDemo}
                    className="hover:text-[#1F4543]"
                  >
                    Termin vereinbaren
                  </button>
                </li>
              </ul>
            </nav>
            <div className="flex items-end">
              <p className="text-xs leading-relaxed text-[#6B6560]">
                <Users className="mb-2 h-4 w-4 text-[#1F4543]" aria-hidden="true" />
                Alle Kontaktdaten sind Beispieldaten für dieses Design-Konzept.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#1F4543]/10 bg-[#173532] px-4 py-6 text-[#FAF7F2]/70">
        <p className="mx-auto max-w-7xl text-center text-xs">
          Design-Beispiel · erstellt von{" "}
          <Link href="/" className="text-[#FAF7F2]/90 hover:text-[#FAF7F2]">
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

      <DemoAppointmentModal open={demoOpen} onClose={closeDemo} services={demoServices} />
    </div>
  );
}
