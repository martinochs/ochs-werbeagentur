import Link from "next/link";
import { Logo } from "@/components/Logo";
import { siteConfig } from "@/lib/seo/config";

type LandingPageHeaderProps = {
  ctaHref: string;
  ctaLabel: string;
};

export function LandingPageHeader({ ctaHref, ctaLabel }: LandingPageHeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-4xl items-center justify-between gap-4 px-4 py-3 lg:px-8">
        <div className="flex items-center gap-3" aria-label={siteConfig.name}>
          <Logo className="h-9 w-9 shrink-0" />
          <span className="hidden text-[10px] font-bold leading-tight tracking-wide text-navy sm:block">
            OCHS DIGITAL
            <br />
            CONSULTING
          </span>
        </div>
        <a href={ctaHref} className="btn-primary shrink-0 px-4 py-2.5 text-sm">
          {ctaLabel}
        </a>
      </div>
    </header>
  );
}

export function LandingPageFooter() {
  return (
    <footer className="border-t border-border bg-navy py-6 text-white">
      <div className="mx-auto max-w-4xl px-4 text-center text-xs text-white/60 lg:px-8">
        <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
          <Link href="/impressum" className="hover:text-white/80">
            Impressum
          </Link>
          <Link href="/datenschutz" className="hover:text-white/80">
            Datenschutz
          </Link>
        </nav>
        <p className="mt-3">
          © {new Date().getFullYear()} {siteConfig.name}
        </p>
      </div>
    </footer>
  );
}
