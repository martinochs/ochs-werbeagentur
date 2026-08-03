"use client";

import { ChevronDown, Gift, Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "@/components/Logo";
import { siteConfig } from "@/lib/seo/config";

type NavLink = {
  path: string;
  label: string;
  children?: { path: string; label: string }[];
};

const navLinks: NavLink[] = [
  {
    path: "/leistungen",
    label: "Leistungen",
    children: [
      { path: "/leistungen/praxis-websites", label: "Praxis-Websites" },
      { path: "/leistungen/google-ads", label: "Google Ads für Arztpraxen" },
      { path: "/leistungen/seo", label: "SEO & KI-Sichtbarkeit" },
      { path: "/leistungen/betreuung", label: "Betreuung & Weiterentwicklung" },
      { path: "/leistungen", label: "Alle Leistungen" },
    ],
  },
  { path: "#fuer-praxen", label: "Für Praxen" },
  { path: "#designbeispiele", label: "Praxis-Beispiele" },
  { path: "/ueber-uns", label: "Über uns" },
  { path: "#ablauf", label: "Ablauf" },
  { path: "/faq", label: "FAQ" },
  { path: "#kontakt", label: "Kontakt" },
  { path: "/impressum", label: "Impressum" },
];

function getHref(pathname: string, path: string) {
  if (path.startsWith("/")) return path;
  return pathname === "/" ? path : `/${path}`;
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 flex flex-col">
      <div className="bg-[#166534] px-4 py-2.5 text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-3 text-center sm:flex-row sm:gap-6 lg:justify-between">
          <div className="flex items-center gap-2 text-sm">
            <Gift className="h-4 w-4 shrink-0 text-[#bbf7d0]" />
            <Link href="/#preise" className="leading-snug transition-opacity hover:opacity-80">
              <span className="font-bold text-[#bbf7d0] underline decoration-[#bbf7d0]/50 underline-offset-2">AKTIONSPREISE BIS 31.10.2026:</span>{" "}
              Premium Praxis-Website oder Google-Ads-Einrichtung jeweils 2.999 € netto
            </Link>
          </div>
          <Link
            href="/#preise"
            className="shrink-0 rounded bg-white px-3 py-1.5 text-xs font-bold text-[#166534] transition-colors hover:bg-gray-100"
          >
            ANGEBOT ANSEHEN &rarr;
          </Link>
        </div>
      </div>

      <header className="border-b border-border bg-white/95 backdrop-blur">
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
            <div key={link.path} className="group relative">
              <Link
                href={getHref(pathname, link.path)}
                className="flex items-center gap-1 text-sm text-muted transition-colors hover:text-navy"
              >
                {link.label}
                {link.children && <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />}
              </Link>
              {link.children && (
                <div className="absolute left-0 top-full hidden pt-4 group-hover:block">
                  <div className="flex w-64 flex-col overflow-hidden rounded-xl border border-border bg-white shadow-lg">
                    {link.children.map((child, index) => (
                      <Link
                        key={child.path}
                        href={getHref(pathname, child.path)}
                        className={`px-4 py-3 text-sm text-muted transition-colors hover:bg-[#f8fafc] hover:text-navy ${
                          index === link.children!.length - 1
                            ? "border-t border-border bg-[#f8fafc] font-semibold text-navy"
                            : ""
                        }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
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
              <div key={link.path} className="flex flex-col gap-2">
                <Link
                  href={getHref(pathname, link.path)}
                  className={`text-sm ${link.children ? "font-semibold text-navy" : "text-muted"}`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="ml-3 flex flex-col gap-2 border-l-2 border-border pl-3">
                    {link.children.map((child) => (
                      <Link
                        key={child.path}
                        href={getHref(pathname, child.path)}
                        className="text-sm text-muted"
                        onClick={() => setOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
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
    </div>
  );
}
