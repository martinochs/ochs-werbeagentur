import { ArrowRight, Check, ExternalLink, Mail, Phone } from "lucide-react";
import Image from "next/image";
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



function ExamplePreview({
  title,
  gradient,
  image,
}: {
  title: string;
  gradient: string;
  image?: string;
}) {
  if (image) {
    return (
      <div
        className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black/5"
        role="img"
        aria-label={`Webdesign-Beispiel ${title}`}
      >
        <div className="flex gap-1 border-b border-border bg-surface px-2.5 py-2">
          <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
          <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
          <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
        </div>
        <div className="relative aspect-[4/3] w-full">
          <Image
            src={image}
            alt={`Design-Beispiel ${title}`}
            fill
            sizes="180px"
            className="object-cover object-top"
          />
        </div>
      </div>
    );
  }

  return <WebsiteMockup title={title} gradient={gradient} />;
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
  image,
}: (typeof portfolioExamples)[number]) {
  const content = (
    <>
      <ExamplePreview title={title} gradient={gradient} image={image} />
      <div className="mt-2 flex flex-col">
        <h3 className="text-base font-bold text-navy">{title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-muted">{subtitle}</p>
        {href && (
          <p className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#16a34a]">
            Beispiel ansehen
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </p>
        )}
      </div>
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="group flex flex-col gap-3 rounded-2xl border border-border bg-white p-4 shadow-sm transition-all hover:shadow-md hover:ring-1 hover:ring-black/5"
      >
        {content}
      </Link>
    );
  }

  return (
    <article className="flex flex-col gap-3 rounded-2xl border border-border bg-white p-4 shadow-sm">
      {content}
    </article>
  );
}

export function PortfolioExpertSection() {
  const { contactPerson, phone, phoneDisplay, email } = siteConfig;

  return (
    <section
      className="border-t border-border bg-white py-16 lg:py-24"
      aria-labelledby="portfolio-heading"
    >
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        
        {/* Portfolio Section */}
        <div id="designbeispiele" className="mb-20 lg:mb-32">
          <div className="text-center">
            <h2
              id="portfolio-heading"
              className="text-2xl font-bold text-navy sm:text-3xl lg:text-4xl"
            >
              Webdesign-Beispiele für Arzt- und Zahnarztpraxen
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted">
              Individuelle Design-Konzepte — modern, vertrauensvoll und auf Ihre
              Fachrichtung zugeschnitten.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {portfolioExamples.map((item) => (
              <ExampleCard key={item.title} {...item} />
            ))}
          </div>
        </div>

        {/* About Section */}
        <div id="ueber-uns" className="mt-20 border-t border-border pt-20 lg:mt-32 lg:pt-32">
          <div className="rounded-[2rem] border border-border bg-[#f8fafc] p-6 sm:p-10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[340px_1fr] lg:items-center lg:gap-16">
            <ProfilePhoto
              src="/images/mariia-ochs-about.png"
              alt={`${contactPerson} — Ihre persönliche Ansprechpartnerin`}
              className="aspect-[3/4] w-full rounded-2xl shadow-xl"
              imageClassName="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 400px"
            />
            <div>
              <h2 className="text-2xl font-bold text-navy sm:text-3xl">
                Ihre persönliche Ansprechpartnerin
              </h2>
              <p className="mt-2 text-base font-semibold text-[#16a34a]">{contactPerson}</p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Gründerin und Expertin für Praxis-Websites in Mannheim. Ich begleite
                Sie persönlich — von der ersten Analyse über Design und Umsetzung
                bis zur fertigen Website und optionalen laufenden Betreuung.
              </p>
              <ul className="mt-8 space-y-3">
                {traits.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-base text-navy">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#16a34a]" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 space-y-3 text-base">
                {phone && phoneDisplay && (
                  <a
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-2.5 font-semibold text-navy hover:text-[#16a34a]"
                  >
                    <Phone className="h-5 w-5" aria-hidden="true" />
                    {phoneDisplay}
                  </a>
                )}
                {email && (
                  <a
                    href={`mailto:${email}`}
                    className="flex items-center gap-2.5 text-muted hover:text-navy"
                  >
                    <Mail className="h-5 w-5" aria-hidden="true" />
                    {email}
                  </a>
                )}
                {!phone && !email && (
                  <p className="text-sm text-muted">Telefon und E-Mail folgen in Kürze.</p>
                )}
              </div>
              <a href="/praxisanalyse" className="btn-primary mt-8 inline-flex px-6 py-3.5 text-base">
                Erstgespräch mit Mariia vereinbaren
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}


