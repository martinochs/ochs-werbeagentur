import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { formatAddress, mapsUrl, siteConfig } from "@/lib/seo/config";

export function Footer() {
  const { name, email } = siteConfig;

  return (
    <footer id="footer" className="scroll-mt-28 border-t border-border bg-navy text-white">
      <div className="mx-auto max-w-6xl px-4 py-10 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2">
          <div className="flex items-start gap-3 text-sm text-white/80">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-white/60" aria-hidden="true" />
            <div>
              <strong className="font-semibold text-white">Büroadresse</strong>
              <p className="mt-1.5 text-white">{formatAddress()}</p>
              <p className="mt-1.5 max-w-xl leading-relaxed">
                Termine nur nach Vereinbarung.
              </p>
              <a
                href={mapsUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-sm font-medium text-white/90 underline-offset-2 hover:underline"
              >
                In Google Maps öffnen
              </a>
            </div>
          </div>

          {email && (
            <div className="flex items-start gap-3 text-sm text-white/80">
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-white/60" aria-hidden="true" />
              <div>
                <strong className="font-semibold text-white">Kontakt</strong>
                <p className="mt-1.5">
                  <a
                    href={`mailto:${email}`}
                    className="text-white underline-offset-2 hover:underline"
                  >
                    {email}
                  </a>
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="mt-8 flex flex-col items-center gap-3 border-t border-white/10 pt-6 text-center text-xs text-white/45">
          <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
            <Link href="/impressum" className="hover:text-white/70">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-white/70">
              Datenschutz
            </Link>
          </nav>
          <p>
            © {new Date().getFullYear()} {name} · Mannheim, Deutschland
          </p>
        </div>
      </div>
    </footer>
  );
}
