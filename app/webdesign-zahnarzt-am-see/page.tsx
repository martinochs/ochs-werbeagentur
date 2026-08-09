import type { Metadata } from "next";
import { ZahnarztAmSeeDemoPageContent } from "@/components/demo/ZahnarztAmSeeDemoPageContent";

export const metadata: Metadata = {
  title: "Zahnarztpraxis am See — Webdesign-Beispiel",
  description:
    "Design-Beispiel einer modernen Zahnarztpraxis-Website mit Leistungen, Team, Praxisvorstellung und Online-Terminvereinbarung.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function ZahnarztAmSeeExamplePage() {
  return <ZahnarztAmSeeDemoPageContent />;
}
