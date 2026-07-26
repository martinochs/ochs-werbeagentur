import Image from "next/image";

import { ArrowRight, Leaf, Stethoscope } from "lucide-react";



const concepts = [

  {

    title: "Zahnarztpraxis",

    tagline: "Ihr Lächeln. Unsere Leidenschaft.",

    practice: "Dr. Weber · Mannheim",

    image: "/beispiele/zahnarzt-behandlungsraum.png",

    icon: null,

  },

  {

    title: "Dermatologie",

    tagline: "Gesunde Haut. Mehr Lebensqualität.",

    practice: "Hautzentrum am Rathaus",

    image: "/images/portfolio/dermatologie.png",

    icon: Leaf,

  },

  {

    title: "Hausarztpraxis",

    tagline: "Ihre Gesundheit. Unser Anliegen.",

    practice: "Hausarztpraxis Dr. Schmidt",

    image: "/images/portfolio/hausarztpraxis.png",

    icon: Stethoscope,

  },

];



export function PortfolioSection() {

  return (

    <section

      id="designbeispiele"

      className="border-t border-border bg-white py-16 lg:py-20"

      aria-labelledby="portfolio-heading"

    >

      <div className="mx-auto max-w-6xl px-4 lg:px-8">

        <h2

          id="portfolio-heading"

          className="text-center text-xl font-bold text-navy sm:text-2xl"

        >

          So könnte Ihre neue Praxis-Website aussehen

        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-muted">

          Individuelle Design-Konzepte für verschiedene Fachrichtungen —

          vertrauensvoll, modern und auf Ihre Zielgruppe zugeschnitten.

        </p>



        <div className="mt-10 grid gap-6 lg:grid-cols-3">

          {concepts.map(({ title, tagline, practice, image, icon: Icon }) => (

            <article

              key={title}

              className="group relative overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5"

            >

              <div className="relative aspect-[4/5] sm:aspect-[3/4]">

                <Image

                  src={image}

                  alt={`Design-Konzept ${title}`}

                  fill

                  sizes="(max-width: 1024px) 100vw, 33vw"

                  className="object-cover transition-transform duration-500 group-hover:scale-105"

                />

                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" />



                <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-6">

                  {Icon && (

                    <Icon

                      className="mb-3 h-6 w-6 text-teal-light"

                      aria-hidden="true"

                    />

                  )}

                  <p className="text-xs font-medium text-teal-light">{title}</p>

                  <h3 className="mt-1 text-lg font-bold leading-snug">

                    {tagline}

                  </h3>

                  <p className="mt-1 text-xs text-white/70">{practice}</p>

                  <a

                    href="/praxisanalyse"

                    className="mt-4 inline-flex items-center gap-1 rounded-md bg-teal px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-teal-dark"

                  >

                    Mehr erfahren

                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />

                  </a>

                </div>

              </div>

            </article>

          ))}

        </div>

      </div>

    </section>

  );

}

