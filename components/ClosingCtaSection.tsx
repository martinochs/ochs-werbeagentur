import { ArrowRight } from "lucide-react";
import type { LeistungSlug } from "@/lib/cta";
import { erstgespraechUrl, primaryCtaLabel } from "@/lib/cta";

type ClosingCtaSectionProps = {
  leistung?: LeistungSlug;
};

export function ClosingCtaSection({ leistung }: ClosingCtaSectionProps = {}) {
  return (
    <section
      id="kontakt"
      className="scroll-mt-28 border-t border-border bg-white py-16 lg:py-20"
      aria-labelledby="closing-cta-heading"
    >
      <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
        <h2 id="closing-cta-heading" className="text-2xl font-bold text-navy sm:text-3xl">
          Lassen Sie uns über Ihre Praxis sprechen
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted">
          Fordern Sie eine kostenlose Website-Analyse an. Wir prüfen Ihren Auftritt und
          senden Ihnen eine erste Einschätzung per E-Mail — danach können Sie bequem
          einen Termin für Ihr persönliches Erstgespräch auswählen.
        </p>
        <a
          href={erstgespraechUrl(leistung)}
          className="btn-primary mt-8 inline-flex px-6 py-3.5 text-base"
        >
          {primaryCtaLabel}
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
