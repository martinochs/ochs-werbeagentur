import {

  ArrowLeft,

  ArrowRight,

  Calendar,

  Clock,

  Heart,

  MapPin,

  Shield,

  ShieldCheck,

  Smile,

  Sparkles,

  Stethoscope,

  Users,

} from "lucide-react";

import type { Metadata } from "next";

import Image from "next/image";

import Link from "next/link";

import { siteConfig } from "@/lib/seo/config";



export const metadata: Metadata = {

  title: "Zahnarztpraxis — Webdesign-Beispiel",

  description:

    "Design-Beispiel einer modernen Zahnarztpraxis-Website mit Leistungsübersicht, Terminoption und vertrauensvollem Auftritt.",

  robots: { index: false, follow: false },

};



const navLinks = [

  { href: "#leistungen", label: "Leistungen" },

  { href: "#praxis", label: "Praxis" },

  { href: "#ueber-uns", label: "Über uns" },

  { href: "#kontakt", label: "Kontakt" },

];



const heroTrust = [

  "Moderne Technik",

  "Persönliche Betreuung",

  "Für die ganze Familie",

];



const heroFeatures = [

  { icon: Stethoscope, label: "Moderne Behandlungsräume" },

  { icon: Calendar, label: "Online-Terminbuchung" },

  { icon: ShieldCheck, label: "Transparente Kostenaufklärung" },

  { icon: Heart, label: "Schmerzarme Behandlung" },

];



const services = [

  {

    icon: Sparkles,

    title: "Prophylaxe & Zahnreinigung",

    description:

      "Professionelle Vorsorge und gründliche Reinigung für langfristig gesunde Zähne.",

  },

  {

    icon: Shield,

    title: "Füllungen & Zahnerhaltung",

    description:

      "Hochwertige Materialien und schonende Behandlungen zum Erhalt Ihrer natürlichen Zähne.",

  },

  {

    icon: Smile,

    title: "Implantate & Prothetik",

    description:

      "Festsitzender Zahnersatz und Implantate — für ein natürliches Lächeln und volle Funktion.",

  },

  {

    icon: Sparkles,

    title: "Ästhetische Zahnmedizin",

    description:

      "Bleaching, Veneers und harmonische Korrekturen für Ihr Wunsch-Lächeln.",

  },

];



const infoCards = [

  {

    icon: Clock,

    title: "Sprechzeiten",

    description: (

      <>

        Mo–Do 8:00–18:00

        <br />

        Fr 8:00–14:00

      </>

    ),

    link: "Alle Zeiten ansehen",

    href: "#praxis",

  },

  {

    icon: Shield,

    title: "Vertrauen",

    description:

      "Erfahrenes Team, moderne Technik und eine Atmosphäre, in der sich Patienten wohlfühlen.",

    link: "Unser Team kennenlernen",

    href: "#ueber-uns",

  },

  {

    icon: MapPin,

    title: "Anfahrt",

    description:

      "Zentral gelegen mit Parkmöglichkeiten in der Nähe — ideal für Patienten aus der Region.",

    link: "Route planen",

    href: "#kontakt",

  },

];



const footerUsps = [

  {

    icon: Users,

    title: "Kompetentes Team",

    description: "Erfahrene Zahnärzte und ein einfühlsames Praxisteam.",

  },

  {

    icon: ShieldCheck,

    title: "Moderne Technologien",

    description: "Aktuelle Diagnostik und schonende Behandlungsmethoden.",

  },

  {

    icon: Heart,

    title: "Patienten im Mittelpunkt",

    description: "Individuelle Beratung und Zeit für Ihre Fragen.",

  },

  {

    icon: Calendar,

    title: "Einfache Terminbuchung",

    description: "Online buchen oder telefonisch — ganz wie es Ihnen passt.",

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



export default function ZahnarztpraxisExamplePage() {

  return (

    <div className="bg-white text-[#0c3d5c]">

      <div className="border-b border-[#0c3d5c]/10 bg-[#eef6fa] px-4 py-2.5 text-center text-xs text-[#0c3d5c]/80">

        Design-Beispiel von{" "}

        <Link

          href="/#designbeispiele"

          className="font-semibold underline-offset-2 hover:underline"

        >

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



      <header className="border-b border-[#0c3d5c]/8 bg-white">

        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 lg:px-8">

          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0c3d5c]/8 text-[#0c3d5c]">

              <ToothLogo className="h-6 w-6" />

            </div>

            <div>

              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#2b9fd4]">

                Zahnmedizin

              </p>

              <p className="text-base font-bold leading-tight text-[#0c3d5c] sm:text-lg">

                Zahnarztpraxis

              </p>

            </div>

          </div>



          <nav className="hidden items-center gap-6 text-sm text-[#0c3d5c]/75 md:flex">

            {navLinks.map((link) => (

              <a

                key={link.href}

                href={link.href}

                className="transition-colors hover:text-[#0c3d5c]"

              >

                {link.label}

              </a>

            ))}

          </nav>



          <a

            href="#kontakt"

            className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-[#0c3d5c] px-4 py-2.5 text-sm font-medium text-white shadow-sm transition-opacity hover:opacity-90"

          >

            <Calendar className="h-4 w-4" aria-hidden="true" />

            <span className="hidden sm:inline">Termin buchen</span>

            <span className="sm:hidden">Termin</span>

          </a>

        </div>

      </header>



      <main>

        <section className="overflow-hidden bg-gradient-to-b from-[#f5f9fc] to-white pb-16 pt-10 lg:pb-20 lg:pt-14">

          <div className="mx-auto max-w-6xl px-4 lg:px-8">

            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">

              <div>

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2b9fd4]">

                  Ihre Zahnarztpraxis

                </p>

                <h1 className="mt-3 text-3xl font-bold leading-[1.15] text-[#0c3d5c] sm:text-4xl lg:text-[2.65rem]">

                  Moderne Zahnmedizin für Ihr schönstes Lächeln

                </h1>

                <p className="mt-4 max-w-lg text-base leading-relaxed text-[#0c3d5c]/70">

                  Vertrauensvoller Auftritt, klare Leistungsübersicht und einfache

                  Terminvereinbarung — damit Patienten sich online informieren und

                  direkt einen Termin buchen können.

                </p>



                <div className="mt-8 flex flex-wrap gap-3">

                  <a

                    href="#kontakt"

                    className="inline-flex items-center gap-2 rounded-lg bg-[#0c3d5c] px-5 py-3 text-sm font-medium text-white shadow-sm transition-opacity hover:opacity-90"

                  >

                    Online-Termin buchen

                  </a>

                  <a

                    href="#leistungen"

                    className="inline-flex items-center gap-2 rounded-lg border border-[#0c3d5c]/15 bg-white px-5 py-3 text-sm font-medium text-[#0c3d5c] transition-colors hover:border-[#0c3d5c]/30"

                  >

                    Leistungen ansehen

                  </a>

                </div>



                <ul className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2">

                  {heroTrust.map((item) => (

                    <li

                      key={item}

                      className="flex items-center gap-2 text-sm text-[#0c3d5c]/80"

                    >

                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#2b9fd4]/15 text-[#2b9fd4]">

                        <Heart className="h-3 w-3" aria-hidden="true" />

                      </span>

                      {item}

                    </li>

                  ))}

                </ul>

              </div>



              <div className="relative">

                <div className="overflow-hidden rounded-2xl shadow-[0_20px_50px_rgba(12,61,92,0.15)] ring-1 ring-[#0c3d5c]/8">

                  <Image

                    src="/beispiele/zahnarzt-behandlungsraum.png"

                    alt="Moderner Behandlungsraum mit Zahnarztstuhl in einer hellen Zahnarztpraxis"

                    width={1200}

                    height={800}

                    className="aspect-[4/3] w-full object-cover"

                    priority

                  />

                </div>

              </div>

            </div>



            <div className="relative z-10 mx-auto mt-8 max-w-5xl rounded-2xl border border-[#0c3d5c]/8 bg-white px-4 py-5 shadow-[0_16px_40px_rgba(12,61,92,0.1)] sm:px-6 lg:mt-10">

              <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4 xl:gap-6">

                {heroFeatures.map(({ icon: Icon, label }) => (

                  <div

                    key={label}

                    className="flex min-w-0 items-start gap-3 text-sm font-medium text-[#0c3d5c]"

                  >

                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#eef6fa] text-[#2b9fd4]">

                      <Icon className="h-5 w-5" aria-hidden="true" />

                    </span>

                    <span className="min-w-0 flex-1 leading-snug">{label}</span>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </section>



        <section id="leistungen" className="bg-white py-16 lg:py-20">

          <div className="mx-auto max-w-6xl px-4 lg:px-8">

            <div className="mx-auto max-w-2xl text-center">

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2b9fd4]">

                Unsere Leistungen

              </p>

              <h2 className="mt-3 text-2xl font-bold text-[#0c3d5c] sm:text-3xl">

                Alles für Ihre Zahngesundheit

              </h2>

              <p className="mt-3 text-sm leading-relaxed text-[#0c3d5c]/65">

                Übersichtlich dargestellt — damit Patienten wissen, welche

                Behandlungen Sie anbieten, bevor sie anrufen.

              </p>

            </div>



            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

              {services.map(({ icon: Icon, title, description }) => (

                <article

                  key={title}

                  className="flex flex-col rounded-2xl border border-[#0c3d5c]/8 bg-white p-6 shadow-[0_8px_30px_rgba(12,61,92,0.06)] transition-shadow hover:shadow-[0_12px_36px_rgba(12,61,92,0.1)]"

                >

                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#eef6fa] text-[#2b9fd4]">

                    <Icon className="h-6 w-6" aria-hidden="true" />

                  </span>

                  <h3 className="mt-4 text-base font-bold text-[#0c3d5c]">{title}</h3>

                  <p className="mt-2 flex-1 text-sm leading-relaxed text-[#0c3d5c]/65">

                    {description}

                  </p>

                  <a

                    href="#kontakt"

                    className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[#2b9fd4] transition-colors hover:text-[#0c3d5c]"

                  >

                    Mehr erfahren

                    <ArrowRight className="h-4 w-4" aria-hidden="true" />

                  </a>

                </article>

              ))}

            </div>

          </div>

        </section>



        <section className="px-4 py-4 lg:px-8">

          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 rounded-2xl bg-[#0c3d5c] px-6 py-8 sm:flex-row sm:px-10 lg:py-10">

            <div className="flex items-center gap-4 text-center sm:text-left">

              <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white sm:flex">

                <Calendar className="h-6 w-6" aria-hidden="true" />

              </span>

              <div>

                <p className="text-lg font-bold text-white sm:text-xl">

                  Wunschtermin online buchen — schnell und unkompliziert

                </p>

                <p className="mt-1 text-sm text-white/70">

                  In wenigen Klicks zum nächsten freien Termin.

                </p>

              </div>

            </div>

            <a

              href="#kontakt"

              className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-[#0c3d5c] transition-opacity hover:opacity-90"

            >

              Jetzt Termin buchen

            </a>

          </div>

        </section>



        <section id="praxis" className="bg-[#f5f9fc] py-16 lg:py-20">

          <div className="mx-auto grid max-w-6xl gap-5 px-4 sm:grid-cols-2 lg:grid-cols-3 lg:px-8">

            {infoCards.map(({ icon: Icon, title, description, link, href }) => (

              <article

                key={title}

                className="rounded-2xl border border-[#0c3d5c]/8 bg-white p-6 shadow-sm"

              >

                <Icon className="h-7 w-7 text-[#2b9fd4]" aria-hidden="true" />

                <h3 className="mt-4 text-base font-bold text-[#0c3d5c]">{title}</h3>

                <p className="mt-2 text-sm leading-relaxed text-[#0c3d5c]/65">

                  {description}

                </p>

                <a

                  href={href}

                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#2b9fd4] transition-colors hover:text-[#0c3d5c]"

                >

                  {link}

                  <ArrowRight className="h-4 w-4" aria-hidden="true" />

                </a>

              </article>

            ))}

          </div>

        </section>



        <section id="ueber-uns" className="border-t border-[#0c3d5c]/8 bg-white py-14 lg:py-16">

          <div className="mx-auto max-w-6xl px-4 lg:px-8">

            <div className="mx-auto max-w-2xl text-center">

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2b9fd4]">

                Über uns

              </p>

              <h2 className="mt-3 text-2xl font-bold text-[#0c3d5c]">

                Ihre Praxis — persönlich & modern

              </h2>

              <p className="mt-3 text-sm leading-relaxed text-[#0c3d5c]/65">

                Ein erfahrenes Team, das Zeit für Beratung nimmt und moderne

                Zahnmedizin mit einem Gefühl von Vertrauen und Wohlbefinden

                verbindet.

              </p>

            </div>

          </div>

        </section>



        <section id="kontakt" className="border-t border-[#0c3d5c]/8 bg-[#f5f9fc] py-14 lg:py-16">

          <div className="mx-auto max-w-6xl px-4 lg:px-8">

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

              {footerUsps.map(({ icon: Icon, title, description }) => (

                <div key={title} className="text-center">

                  <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[#2b9fd4] shadow-sm ring-1 ring-[#0c3d5c]/8">

                    <Icon className="h-6 w-6" aria-hidden="true" />

                  </span>

                  <h3 className="mt-4 text-sm font-bold text-[#0c3d5c]">{title}</h3>

                  <p className="mt-2 text-sm leading-relaxed text-[#0c3d5c]/60">

                    {description}

                  </p>

                </div>

              ))}

            </div>

          </div>

        </section>

      </main>



      <footer className="border-t border-[#0c3d5c]/8 bg-white px-4 py-8 text-center">

        <p className="text-xs text-[#0c3d5c]/55">

          Fiktives Design-Beispiel · erstellt von{" "}

          <Link href="/" className="font-medium text-[#0c3d5c] hover:underline">

            {siteConfig.name}

          </Link>

        </p>

      </footer>

    </div>

  );

}


