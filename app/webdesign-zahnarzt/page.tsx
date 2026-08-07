import type { Metadata } from "next";
import { ZahnarztDemoPageContent } from "@/components/demo/ZahnarztDemoPageContent";

export const metadata: Metadata = {
  title: "Webdesign-Beispiel Zahnarztpraxis",
  description:
    "Fiktives Webdesign-Beispiel von OCHS Digital Consulting für eine moderne Zahnarztpraxis – mit Leistungen, Team, Online-Terminbuchung und Patientenkommunikation.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function ZahnarztpraxisExamplePage() {
  return <ZahnarztDemoPageContent />;
}
