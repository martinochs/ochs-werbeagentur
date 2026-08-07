import {

  ArrowRight,

  Calendar,

  Check,

  Monitor,

  Pencil,

  Rocket,

  Search,

} from "lucide-react";



const processNavy = "#0a2540";



const steps = [

  {

    icon: Search,

    title: "Analyse & Strategie",

    text: "Wir besprechen Ihre Ziele, Zielgruppe und den aktuellen Auftritt — unverbindlich und persönlich.",

  },

  {

    icon: Pencil,

    title: "Konzept & Design",

    text: "Individuelles Design-Konzept mit klarer Struktur, Vertrauenselementen und Festpreis-Angebot.",

  },

  {

    icon: Monitor,

    title: "Umsetzung & Inhalte",

    text: "Technische Umsetzung, SEO-Grundlagen und Unterstützung bei Texten und Bildern — DSGVO-konform.",

  },

  {

    icon: Rocket,

    title: "Launch & Betreuung",

    text: "Veröffentlichung, Einweisung und optional laufende Betreuung — damit Ihre Website dauerhaft überzeugt.",

  },

];



const highlights = [

  "Individuelles Design für Ihre Fachrichtung",

  "DSGVO-konform & mobil optimiert",

  "Festpreis nach kostenloser Analyse",

];



function WebsiteMockup() {

  return (

    <div className="mx-auto w-full max-w-[280px] lg:mx-0 lg:max-w-none">

      <div className="rounded-2xl border border-border bg-white p-4 shadow-[0_8px_32px_rgba(10,37,64,0.1)]">

        <div className="flex items-center gap-1.5 rounded-t-lg bg-surface px-3 py-2">

          <div className="h-2 w-2 rounded-full bg-red-400" aria-hidden="true" />

          <div className="h-2 w-2 rounded-full bg-yellow-400" aria-hidden="true" />

          <div className="h-2 w-2 rounded-full bg-green-400" aria-hidden="true" />

          <div className="ml-2 flex-1 rounded bg-white px-2 py-0.5 text-[9px] text-muted">

            praxis-beispiel.de

          </div>

        </div>



        <div className="rounded-b-lg border border-t-0 border-border bg-white p-3">

          <div className="flex items-center justify-between">

            <div className="h-2 w-16 rounded bg-navy/15" aria-hidden="true" />

            <div className="flex gap-1" aria-hidden="true">

              <div className="h-1.5 w-6 rounded bg-navy/10" />

              <div className="h-1.5 w-6 rounded bg-navy/10" />

              <div className="h-1.5 w-6 rounded bg-navy/10" />

            </div>

          </div>



          <div className="mt-3 rounded-lg bg-gradient-to-br from-navy/5 to-accent-soft p-3">

            <div className="h-2 w-3/4 rounded bg-navy/20" aria-hidden="true" />

            <div className="mt-2 h-1.5 w-full rounded bg-navy/10" aria-hidden="true" />

            <div className="mt-1 h-1.5 w-2/3 rounded bg-navy/10" aria-hidden="true" />

            <div className="mt-3 inline-block rounded bg-navy px-2 py-1 text-[8px] font-medium text-white">

              Termin buchen

            </div>

          </div>



          <div className="mt-3 grid grid-cols-3 gap-1.5" aria-hidden="true">

            <div className="rounded bg-surface p-2">

              <div className="h-1.5 w-full rounded bg-navy/10" />

              <div className="mt-1.5 h-4 rounded bg-navy/5" />

            </div>

            <div className="rounded bg-surface p-2">

              <div className="h-1.5 w-full rounded bg-navy/10" />

              <div className="mt-1.5 h-4 rounded bg-navy/5" />

            </div>

            <div className="rounded bg-surface p-2">

              <div className="h-1.5 w-full rounded bg-navy/10" />

              <div className="mt-1.5 h-4 rounded bg-navy/5" />

            </div>

          </div>

        </div>



        <div className="mt-3 flex items-center gap-2 rounded-xl border border-border bg-surface px-3 py-2">

          <Calendar className="h-3.5 w-3.5 text-accent" aria-hidden="true" />

          <div>

            <p className="text-[10px] font-semibold text-navy">Online-Terminbuchung</p>

            <p className="text-[9px] text-muted">24/7 verfügbar für Patienten</p>

          </div>

        </div>

      </div>

    </div>

  );

}



function StepContent({

  icon: Icon,

  title,

  text,

}: (typeof steps)[number]) {

  return (

    <>

      <div

        className="mx-auto flex h-11 w-11 items-center justify-center rounded-full text-white"

        style={{ backgroundColor: processNavy }}

      >

        <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />

      </div>

      <h3 className="mt-4 text-sm font-bold" style={{ color: processNavy }}>

        {title}

      </h3>

      <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>

    </>

  );

}



export function ProcessSection() {

  return (

    <section

      id="ablauf"

      className="scroll-mt-28 border-t border-border bg-white py-10 lg:py-14"

      aria-labelledby="process-heading"

    >

      <div className="mx-auto max-w-6xl px-4 lg:px-8">

        <div className="relative overflow-hidden rounded-2xl bg-[#f0f4f9] px-6 py-10 ring-1 ring-black/[0.04] lg:px-10 lg:py-12">

          <div className="grid gap-10 lg:grid-cols-[1fr_260px] lg:items-start lg:gap-8">

            <div>

              <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:text-left">

                <h2

                  id="process-heading"

                  className="text-xl font-bold sm:text-2xl"

                  style={{ color: processNavy }}

                >

                  Praxis-Website erstellen lassen — in vier klaren Schritten

                </h2>

                <p className="mt-3 text-sm leading-relaxed text-muted">

                  Vom ersten Gespräch bis zum Go-live: Wir begleiten Sie

                  strukturiert zum neuen Internetauftritt — ohne Technik-Stress

                  und mit transparentem Festpreis.

                </p>

              </div>



              <ol className="mt-10 flex list-none flex-col gap-8 lg:flex-row lg:items-start lg:gap-0">
                {steps.map((step, index) => (
                  <li
                    key={step.title}
                    className="flex flex-1 flex-col items-center text-center lg:flex-row lg:items-start"
                  >
                    <div className="flex-1">
                      <StepContent {...step} />
                    </div>
                    {index < steps.length - 1 && (
                      <span
                        className="mt-4 flex justify-center lg:mt-0 lg:shrink-0 lg:items-start lg:px-1 lg:pt-3"
                        aria-hidden="true"
                      >
                        <ArrowRight className="h-4 w-4 rotate-90 text-navy/25 lg:rotate-0" />
                      </span>
                    )}
                  </li>
                ))}
              </ol>



              <div className="mt-10 flex flex-col gap-6 border-t border-navy/10 pt-8 lg:flex-row lg:items-center lg:justify-between">

                <ul className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2">

                  {highlights.map((item) => (

                    <li

                      key={item}

                      className="flex items-center gap-2 text-sm text-navy"

                    >

                      <Check

                        className="h-4 w-4 shrink-0 text-accent"

                        strokeWidth={2.5}

                        aria-hidden="true"

                      />

                      {item}

                    </li>

                  ))}

                </ul>

                <a

                  href="#preise"

                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"

                  style={{ backgroundColor: processNavy }}

                >

                  Preise &amp; Pakete ansehen

                  <ArrowRight className="h-4 w-4" aria-hidden="true" />

                </a>

              </div>

            </div>



            <div className="lg:pt-2">

              <WebsiteMockup />

            </div>

          </div>

        </div>

      </div>

    </section>

  );

}


