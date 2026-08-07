import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { formatRegisteredOffice, siteConfig } from "@/lib/seo/config";

export const metadata = {
  title: "Impressum",
  description: "Impressum und rechtliche Angaben.",
};

export default function ImpressumPage() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main className="flex-1 bg-white">
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-3xl px-4 lg:px-8">
            <h1 className="text-3xl font-bold text-navy sm:text-4xl">
              Impressum
            </h1>
            <div className="mt-8 text-base leading-relaxed text-muted">
              <h2 className="mt-6 text-xl font-bold text-navy">Angaben gemäß § 5 TMG</h2>
              <p className="mt-2">
                {siteConfig.contactPerson} <br />
                {siteConfig.name} <br />
                Betriebssitz {formatRegisteredOffice()}
              </p>

              <h2 className="mt-8 text-xl font-bold text-navy">Kontakt</h2>
              <p className="mt-2">
                {siteConfig.phoneDisplay && (
                  <>
                    Telefon: {siteConfig.phoneDisplay}
                    <br />
                  </>
                )}
                E-Mail:{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-navy underline-offset-2 hover:underline"
                >
                  {siteConfig.email}
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
