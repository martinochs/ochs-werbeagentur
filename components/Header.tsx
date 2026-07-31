"use client";

import { Gift, Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "@/components/Logo";
import { siteConfig } from "@/lib/seo/config";

const navLinks = [
  { hash: "#leistungen", label: "Leistungen" },
  { hash: "#fuer-praxen", label: "Für Praxen" },
  { hash: "#designbeispiele", label: "Praxis-Beispiele" },
  { hash: "#ueber-uns", label: "Über uns" },
  { hash: "#ablauf", label: "Ablauf" },
  { hash: "#faq", label: "FAQ" },
  { hash: "#kontakt", label: "Kontakt" },
];

function sectionHref(pathname: string, hash: string) {
  return pathname === "/" ? hash : `/${hash}`;
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="bg-[#166534] px-4 py-2.5 text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-3 text-center sm:flex-row sm:gap-6 lg:justify-between">
          <div className="flex items-center gap-2 text-sm">
            <Gift className="h-4 w-4 shrink-0 text-[#bbf7d0]" />
            <p className="leading-snug">
              <span className="font-bold text-[#bbf7d0] underline decoration-[#bbf7d0]/50 underline-offset-2">STARTKONDITIONEN BIS 31.10.2026:</span>{" "}
              Premium Praxis-Website oder Google-Ads-Einrichtung jeweils 2.999 € netto
            </p>
          </div>
          <Link
            href="/#preise"
            className="shrink-0 rounded bg-white px-3 py-1.5 text-xs font-bold text-[#166534] transition-colors hover:bg-gray-100"
          >
            ANGEBOT ANSEHEN &rarr;
          </Link>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label={`${siteConfig.name} Startseite`}
        >
          <Logo className="h-9 w-9 shrink-0" />
          <span className="hidden text-[10px] font-bold leading-tight tracking-wide text-navy sm:block">
            OCHS DIGITAL
            <br />
            CONSULTING
          </span>
        </Link>

        <nav className="hidden items-center gap-4 xl:flex" aria-label="Hauptnavigation">
          {navLinks.map((link) => (
            <Link
              key={link.hash}
              href={sectionHref(pathname, link.hash)}
              className="text-sm text-muted transition-colors hover:text-navy"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          {siteConfig.phone && siteConfig.phoneDisplay && (
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-1.5 text-sm font-medium text-navy"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {siteConfig.phoneDisplay}
            </a>
          )}
          <Link href="/praxisanalyse" className="btn-primary flex items-center gap-1.5 px-4 py-2.5">
            Kostenlose Praxisanalyse
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>

        <button
          type="button"
          className="rounded-md p-2 text-navy lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-white px-4 py-4 lg:hidden" aria-label="Mobile Navigation">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.hash}
                href={sectionHref(pathname, link.hash)}
                className="text-sm text-muted"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/praxisanalyse"
              className="btn-primary mt-2 text-center"
              onClick={() => setOpen(false)}
            >
              Kostenlose Praxisanalyse
            </Link>
          </div>
        </nav>
      )}
    </header>
    </>
  );
}
