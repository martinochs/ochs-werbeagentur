import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { siteConfig } from "@/lib/seo/config";

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
                {siteConfig.address.street} <br />
                {siteConfig.address.postalCode} {siteConfig.address.city}
              </p>

              <h2 className="mt-8 text-xl font-bold text-navy">Kontakt</h2>
              <p className="mt-2">
                Telefon: {siteConfig.phoneDisplay} <br />
                E-Mail: {siteConfig.email}
              </p>

              <h2 className="mt-8 text-xl font-bold text-navy">Umsatzsteuer-ID</h2>
              <p className="mt-2">
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: <br />
                DE XXX XXX XXX {/* Bitte hier die echte USt-ID eintragen */}
              </p>

              <h2 className="mt-8 text-xl font-bold text-navy">Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle</h2>
              <p className="mt-2">
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
