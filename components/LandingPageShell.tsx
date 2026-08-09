import Link from "next/link";
import { Logo } from "@/components/Logo";
import { siteConfig } from "@/lib/seo/config";
import { Mail, Phone } from "lucide-react";

type LandingPageHeaderProps = {
  ctaHref: string;
  trustHint: string;
  ctaLabel: string;
};

export function LandingPageHeader({ ctaHref, trustHint, ctaLabel }: LandingPageHeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3 lg:px-8">
        <div className="flex min-w-0 items-center gap-3">
          <a
            href="/"
            className="relative z-10 flex shrink-0 items-center gap-3 rounded-md transition-opacity hover:opacity-80"
            aria-label={`${siteConfig.name} Startseite`}
          >
            <Logo className="h-9 w-9 shrink-0" />
            <span className="hidden text-[10px] font-bold leading-tight tracking-wide text-navy sm:block">
              OCHS DIGITAL
              <br />
              CONSULTING
            </span>
          </a>
          <span className="hidden truncate text-xs font-medium text-[#5b21b6] md:inline">
            {trustHint}
          </span>
        </div>
        <a
          href={ctaHref}
          data-lp-cta="website-analyse"
          data-lp-section="header"
          className="btn-primary shrink-0 px-3 py-2.5 text-xs sm:px-4 sm:text-sm"
        >
          {ctaLabel}
        </a>
      </div>
    </header>
  );
}

export function LandingPageFooter() {
  const { name, email, phone, phoneDisplay } = siteConfig;

  return (
    <footer className="border-t border-border bg-navy py-8 text-white">
      <div className="mx-auto max-w-5xl px-4 lg:px-8">
        <p className="text-sm font-semibold text-white">{name}</p>
        <div className="mt-4 flex flex-col gap-3 text-sm text-white/75">
          {email && (
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 hover:text-white"
            >
              <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
              {email}
            </a>
          )}
          {phone && phoneDisplay && (
            <a
              href={`tel:${phone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 hover:text-white"
            >
              <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
              {phoneDisplay}
            </a>
          )}
        </div>
        <nav className="mt-6 flex flex-wrap gap-x-4 gap-y-1 text-xs text-white/60">
          <Link href="/impressum" className="hover:text-white/80">
            Impressum
          </Link>
          <Link href="/datenschutz" className="hover:text-white/80">
            Datenschutz
          </Link>
        </nav>
        <p className="mt-4 text-xs text-white/45">
          © {new Date().getFullYear()} {name}
        </p>
      </div>
    </footer>
  );
}
