import { ArrowRight, Mail, Phone } from "lucide-react";
import { ProfilePhoto } from "@/components/ProfilePhoto";
import { siteConfig } from "@/lib/seo/config";

export function ClosingCtaSection() {
  const { contactPerson, phone, phoneDisplay, email } = siteConfig;

  return (
    <section
      id="kontakt"
      className="scroll-mt-28 border-t border-border bg-white py-16 lg:py-20"
      aria-labelledby="closing-cta-heading"
    >
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="rounded-[2rem] border border-border bg-[#f8fafc] p-6 sm:p-10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[220px_1fr] lg:items-center lg:gap-12">
            <ProfilePhoto
              src="/images/mariia-ochs-about.png"
              alt={`${contactPerson} — Ansprechpartnerin`}
              className="mx-auto aspect-square w-full max-w-[220px] rounded-2xl shadow-lg lg:mx-0"
              imageClassName="object-cover object-center"
              sizes="220px"
            />

            <div>
              <h2 id="closing-cta-heading" className="text-2xl font-bold text-navy sm:text-3xl">
                Bereit für Ihre neue Praxis-Website?
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
                Lernen Sie uns in einem unverbindlichen Erstgespräch kennen und erfahren Sie,
                welche Lösung zu Ihrer Praxis passt.
              </p>

              <div className="mt-6">
                <p className="text-base font-semibold text-navy">{contactPerson}</p>
                <p className="text-sm text-muted">Ihre Ansprechpartnerin</p>
              </div>

              {(phone && phoneDisplay) || email ? (
                <div className="mt-4 space-y-2 text-sm">
                  {phone && phoneDisplay && (
                    <a
                      href={`tel:${phone.replace(/\s/g, "")}`}
                      className="flex items-center gap-2 font-semibold text-navy hover:text-[#16a34a]"
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
                </div>
              ) : null}

              <a
                href="/praxisanalyse"
                className="btn-primary mt-8 inline-flex px-6 py-3.5 text-base"
              >
                Kostenloses Erstgespräch vereinbaren
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
