import type { Metadata } from "next";
import { ZahnarztLeonhardDemoPageContent } from "@/components/demo/ZahnarztLeonhardDemoPageContent";

export const metadata: Metadata = {
  title: "Zahnarztpraxis Dr. Leonhard — Webdesign-Beispiel",
  description:
    "Design-Beispiel einer Premium-Zahnarztpraxis-Website mit warmer Farbwelt, Serif-Typografie und hochwertigem Interior-Auftritt.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function ZahnarztLeonhardExamplePage() {
  return <ZahnarztLeonhardDemoPageContent />;
}
