import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FaqSection } from "@/components/FaqSection";
import { siteConfig } from "@/lib/seo/config";
import { faqItems } from "@/lib/content/faq";

export const metadata = {
  title: `FAQ - Häufig gestellte Fragen | ${siteConfig.name}`,
  description: "Antworten auf die häufigsten Fragen rund um Praxis-Websites, Google Ads, Kosten und Ablauf der Zusammenarbeit.",
};

export default function FaqPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-white">
        <div className="pt-16 lg:pt-24">
          <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
            <h1 className="text-3xl font-bold text-navy sm:text-4xl lg:text-5xl">
              Häufig gestellte Fragen
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              Hier finden Sie Antworten auf die wichtigsten Fragen rund um unsere Leistungen, 
              Kosten und den Ablauf der Zusammenarbeit.
            </p>
          </div>
        </div>
        {/* We reuse the FaqSection but hide its internal title since we have the h1 above */}
        <FaqSection items={faqItems} title="" id="faq-list" />
      </main>
      <Footer />
    </>
  );
}
