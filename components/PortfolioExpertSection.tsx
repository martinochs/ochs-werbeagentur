import { ArrowRight, Check, ExternalLink, Mail, Phone } from "lucide-react";

import Link from "next/link";

import { ProfilePhoto } from "@/components/ProfilePhoto";

import { portfolioExamples } from "@/lib/content/portfolio-examples";

import { siteConfig } from "@/lib/seo/config";



function WebsiteMockup({

  title,

  gradient,

}: {

  title: string;

  gradient: string;

}) {

  return (

    <div

      className={`overflow-hidden rounded-lg bg-gradient-to-br ${gradient} p-3 shadow-md ring-1 ring-black/5`}

      role="img"

      aria-label={`Webdesign-Beispiel ${title}`}

    >

      <div className="rounded bg-white/95 p-2.5">

        <div className="mb-2 flex gap-1">

          <span className="h-1.5 w-1.5 rounded-full bg-red-400" />

          <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />

          <span className="h-1.5 w-1.5 rounded-full bg-green-400" />

        </div>

        <div className="text-xs font-semibold text-navy">{title}</div>

        <div className="mt-2 h-16 rounded bg-accent-soft/70" />

        <div className="mt-2 grid grid-cols-3 gap-1">

          <div className="h-3 rounded bg-surface" />

          <div className="h-3 rounded bg-surface" />

          <div className="h-3 rounded bg-surface" />

        </div>

      </div>

    </div>

  );

}



const traits = [

  "Persönliche Betreuung von Anfang bis Launch",

  "Spezialisiert auf Arzt- und Zahnarztpraxen",

  "Transparente Festpreise ohne versteckte Kosten",

];



function ExampleCard({

  title,

  subtitle,

  gradient,

  href,

}: (typeof portfolioExamples)[number]) {

  const content = (

    <>

      <WebsiteMockup title={title} gradient={gradient} />

      <div className="flex flex-col justify-center">

        <h3 className="text-sm font-semibold text-navy">{title}</h3>

        <p className="mt-1 text-sm text-muted">{subtitle}</p>

        {href && (

          <p className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-accent">

            Beispiel ansehen

            <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />

          </p>

        )}

      </div>

    </>

  );



  if (href) {

    return (

      <Link

        href={href}

        className="group grid gap-4 rounded-xl border border-transparent p-2 transition-colors hover:border-border hover:bg-surface/60 sm:grid-cols-[180px_1fr]"

      >

        {content}

      </Link>

    );

  }



  return (

    <article className="grid gap-4 sm:grid-cols-[180px_1fr]">

      {content}

    </article>

  );

}



export function PortfolioExpertSection() {

  const { contactPerson, phone, phoneDisplay, email } = siteConfig;



  return (

    <section

      className="bg-white py-16 lg:py-20"

      aria-labelledby="portfolio-heading"

    >

      <div className="mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-2 lg:gap-14 lg:px-8">

        <div id="designbeispiele">

          <h2

            id="portfolio-heading"

            className="text-xl font-bold text-navy sm:text-2xl"

          >

            Webdesign-Beispiele für Arzt- und Zahnarztpraxen

          </h2>

          <p className="mt-3 text-sm leading-relaxed text-muted">

            Individuelle Design-Konzepte — modern, vertrauensvoll und auf Ihre

            Fachrichtung zugeschnitten.

          </p>

          <div className="mt-8 space-y-5">

            {portfolioExamples.map((item) => (

              <ExampleCard key={item.title} {...item} />

            ))}

          </div>

        </div>



        <div id="ueber-uns">

          <ProfilePhoto

            src="/images/mariia-ochs-about.png"

            alt={`${contactPerson} — Ihre persönliche Ansprechpartnerin`}

            className="aspect-[3/4] w-full max-w-sm rounded-2xl shadow-xl"

            imageClassName="object-cover object-center"

            sizes="(max-width: 1024px) 100vw, 400px"

          />

          <h2 className="mt-6 text-xl font-bold text-navy sm:text-2xl">

            Ihre persönliche Ansprechpartnerin

          </h2>

          <p className="mt-1 text-sm font-medium text-accent">{contactPerson}</p>

          <p className="mt-4 text-sm leading-relaxed text-muted">

            Gründerin und Expertin für Praxis-Websites in Mannheim. Ich begleite

            Sie persönlich — von der ersten Analyse über Design und Umsetzung

            bis zur fertigen Website und optionalen laufenden Betreuung.

          </p>

          <ul className="mt-6 space-y-2.5">

            {traits.map((item) => (

              <li key={item} className="flex items-start gap-2 text-sm text-navy">

                <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />

                {item}

              </li>

            ))}

          </ul>

          <div className="mt-6 space-y-2 text-sm">

            {phone && phoneDisplay && (

              <a

                href={`tel:${phone.replace(/\s/g, "")}`}

                className="flex items-center gap-2 font-medium text-navy hover:text-accent"

              >

                <Phone className="h-4 w-4" aria-hidden="true" />

                {phoneDisplay}

              </a>

            )}

            {email && (

              <a

                href={`mailto:${email}`}

                className="flex items-center gap-2 text-muted hover:text-navy"

              >

                <Mail className="h-4 w-4" aria-hidden="true" />

                {email}

              </a>

            )}

            {!phone && !email && (

              <p className="text-xs text-muted">Telefon und E-Mail folgen in Kürze.</p>

            )}

          </div>

          <a href="/praxisanalyse" className="btn-primary mt-6">

            Erstgespräch mit Mariia vereinbaren

            <ArrowRight className="h-4 w-4" aria-hidden="true" />

          </a>

        </div>

      </div>

    </section>

  );

}


