import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { portfolioExamples } from "@/lib/content/portfolio-examples";



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
        className="group flex h-full flex-col gap-3 rounded-2xl border border-border bg-white p-4 shadow-sm transition-all hover:shadow-md hover:ring-1 hover:ring-black/5"
      >
        {content}
      </Link>
    );
  }

  return (
    <article className="flex h-full flex-col gap-3 rounded-2xl border border-border bg-white p-4 shadow-sm">
      {content}
    </article>
  );
}

export function PortfolioExpertSection() {
  return (
    <section
      id="designbeispiele"
      className="scroll-mt-28 border-t border-border bg-white py-16 lg:py-24"
      aria-labelledby="portfolio-heading"
    >
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        
        {/* Portfolio Section */}
        <div>
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
            <p className="mx-auto mt-3 max-w-2xl rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm font-medium text-amber-900">
              Fiktive Designkonzepte zur Veranschaulichung – keine echten Kundenprojekte.
            </p>
          </div>
          <div className="scrollbar-hide -mx-4 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-6 sm:-mx-8 sm:px-8 lg:mx-0 lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible lg:px-0 lg:pb-0">
            {portfolioExamples.map((item) => (
              <div key={item.title} className="w-[85vw] shrink-0 snap-center sm:w-[50vw] lg:w-auto">
                <ExampleCard {...item} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}


