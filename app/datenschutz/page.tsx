import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import {
  aufsichtsbehoerde,
  datenschutzSections,
  datenschutzStand,
} from "@/lib/content/datenschutz";
import { formatAddress, siteConfig } from "@/lib/seo/config";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description:
    "Informationen zur Verarbeitung personenbezogener Daten auf der Website von OCHS Digital Consulting.",
  robots: { index: true, follow: true },
};

function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-navy underline-offset-2 hover:underline"
    >
      {children}
    </a>
  );
}

export default function DatenschutzPage() {
  const { legalName, contactPerson, email } = siteConfig;

  return (
    <>
      <Header />
      <main className="py-12 lg:py-16">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <h1 className="text-3xl font-bold text-navy">Datenschutzerklärung</h1>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Stand: {datenschutzStand}
          </p>

          <div className="mt-8 space-y-8 text-sm leading-relaxed text-muted">
            {datenschutzSections.map((section) => (
              <section key={section.id} aria-labelledby={section.id}>
                <h2
                  id={section.id}
                  className="text-lg font-bold text-navy"
                >
                  {section.title}
                </h2>

                {section.id === "verantwortlicher" ? (
                  <div className="mt-3 space-y-3">
                    <p>
                      {legalName}
                      <br />
                      {contactPerson}
                      <br />
                      {formatAddress()}
                      <br />
                      Deutschland
                    </p>
                    {email ? (
                      <p>
                        E-Mail:{" "}
                        <a
                          href={`mailto:${email}`}
                          className="text-navy underline-offset-2 hover:underline"
                        >
                          {email}
                        </a>
                      </p>
                    ) : (
                      <p>
                        Für Datenschutzanfragen können Sie uns schriftlich an
                        die oben genannte Postadresse wenden.
                      </p>
                    )}
                  </div>
                ) : section.id === "kontaktformular" ? (
                  <div className="mt-3 space-y-3">
                    <p>
                      Wenn Sie uns über das Formular auf der Seite{" "}
                      <Link
                        href="/praxisanalyse"
                        className="text-navy underline-offset-2 hover:underline"
                      >
                        Kostenloses Erstgespräch
                      </Link>{" "}
                      kontaktieren, verarbeiten wir die von Ihnen eingegebenen
                      Daten zur Bearbeitung Ihrer Anfrage, zur Vorbereitung
                      eines unverbindlichen Erstgesprächs sowie für mögliche
                      Anschlussfragen.
                    </p>
                    {section.paragraphs.slice(1).map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                ) : section.id === "formspree" ? (
                  <div className="mt-3 space-y-3">
                    {section.paragraphs.slice(0, 2).map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                    <p>
                      Weitere Informationen finden Sie in der Datenschutzerklärung
                      von Formspree unter{" "}
                      <ExternalLink href="https://formspree.io/legal/privacy-policy">
                        formspree.io/legal/privacy-policy
                      </ExternalLink>
                      .
                    </p>
                  </div>
                ) : section.id === "beschwerde" ? (
                  <div className="mt-3 space-y-3">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                    <p>
                      {aufsichtsbehoerde.name}
                      <br />
                      {aufsichtsbehoerde.address}
                      <br />
                      <ExternalLink href={aufsichtsbehoerde.website}>
                        {aufsichtsbehoerde.website.replace(/^https:\/\//, "")}
                      </ExternalLink>
                    </p>
                  </div>
                ) : (
                  <div className="mt-3 space-y-3">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                )}

                {section.bullets && section.id !== "verantwortlicher" && (
                  <ul className="mt-3 list-disc space-y-1.5 pl-5">
                    {section.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          <Link href="/" className="btn-secondary mt-6 inline-flex">
            Zurück zur Startseite
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
