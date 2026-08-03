import { ArrowRight, MapPin } from "lucide-react";
import Link from "next/link";
import { formatAddress, mapsUrl, siteConfig } from "@/lib/seo/config";

export function Footer() {
  const { name, contactPerson, address } = siteConfig;

  return (
    <footer id="footer" className="scroll-mt-28 border-t border-border bg-navy text-white">
      <div className="mx-auto max-w-6xl px-4 py-14 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-xl font-bold leading-snug sm:text-2xl">
              Bereit für Ihre neue Praxis-Website?
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Kostenlose und unverbindliche Praxisanalyse — persönlich mit{" "}
              {contactPerson}.
            </p>
            <a href="/praxisanalyse" className="btn-primary mt-6 bg-white text-navy hover:bg-white/90">
              Kostenlose Praxisanalyse anfordern
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <address className="not-italic">
            <a
              href={mapsUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-2 text-sm text-white/80 hover:text-white"
            >
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              <span>
                {contactPerson}
                <br />
                {formatAddress()}, Deutschland
              </span>
            </a>
          </address>
        </div>

        <div className="mt-10 flex flex-col items-center gap-3 border-t border-white/10 pt-6 text-center text-xs text-white/45">
          <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
            <Link href="/datenschutz" className="hover:text-white/70">
              Datenschutz
            </Link>
          </nav>
          <p>
            © {new Date().getFullYear()} {name} · {address.city}, Deutschland
          </p>
        </div>
      </div>
    </footer>
  );
}
