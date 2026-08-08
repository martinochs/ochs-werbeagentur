import type { Metadata } from "next";
import { HautarztDemoPageContent } from "@/components/demo/HautarztDemoPageContent";

export const metadata: Metadata = {
  title: "Webdesign-Beispiel Hautarztpraxis",
  description:
    "Fiktives Webdesign-Beispiel von OCHS Digital Consulting für eine moderne Hautarztpraxis – mit Leistungen, Hautkrebsvorsorge, Ästhetik und Einbindung eines Terminbuchungssystems.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function HautarztExamplePage() {
  return <HautarztDemoPageContent />;
}
