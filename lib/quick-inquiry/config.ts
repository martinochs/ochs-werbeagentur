/**
 * Kurzanfrage – Seitenfreigabe
 *
 * Standard: Keine Kurzanfrage, wenn eine Route nicht explizit aufgeführt ist.
 * Neue Seiten erhalten die Kurzanfrage nur nach Eintrag mit `showQuickInquiry: true`.
 *
 * Zum Deaktivieren: `showQuickInquiry: false` setzen oder Eintrag entfernen.
 */

export type QuickInquiryServiceCategory = "general" | "website" | "google-ads";

export type QuickInquiryPageSettings = {
  showQuickInquiry: boolean;
  serviceCategory: QuickInquiryServiceCategory;
};

/** Explizite Freigabe pro Route (exakter Pfad, ohne trailing slash). */
export const QUICK_INQUIRY_PAGES: Record<string, QuickInquiryPageSettings> = {
  "/": { showQuickInquiry: true, serviceCategory: "general" },
  "/ueber-uns": { showQuickInquiry: true, serviceCategory: "general" },
  "/leistungen": { showQuickInquiry: true, serviceCategory: "general" },
  "/leistungen/praxis-websites": { showQuickInquiry: true, serviceCategory: "website" },
  "/leistungen/google-ads": { showQuickInquiry: true, serviceCategory: "google-ads" },
  "/leistungen/betreuung": { showQuickInquiry: true, serviceCategory: "general" },
  "/website-zahnarzt": { showQuickInquiry: true, serviceCategory: "website" },
  "/website-arztpraxis": { showQuickInquiry: true, serviceCategory: "website" },
  "/google-ads-zahnarzt": { showQuickInquiry: true, serviceCategory: "google-ads" },
  "/google-ads-arztpraxis": { showQuickInquiry: true, serviceCategory: "google-ads" },
};

/** Zusätzliche Sperren – haben Vorrang vor der Allowlist. */
const QUICK_INQUIRY_DENIED_PREFIXES = ["/webdesign-"] as const;

const QUICK_INQUIRY_DENIED_EXACT = new Set([
  "/impressum",
  "/datenschutz",
  "/faq",
  "/praxisanalyse",
]);

export function normalizePathname(pathname: string): string {
  if (!pathname || pathname === "/") return "/";
  return pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
}

export function getQuickInquirySettings(
  pathname: string,
): QuickInquiryPageSettings | null {
  const path = normalizePathname(pathname);

  if (QUICK_INQUIRY_DENIED_EXACT.has(path)) return null;
  if (QUICK_INQUIRY_DENIED_PREFIXES.some((prefix) => path.startsWith(prefix))) {
    return null;
  }

  const settings = QUICK_INQUIRY_PAGES[path];
  if (!settings?.showQuickInquiry) return null;

  return settings;
}

export function getQuickInquiryTabLabel(
  serviceCategory: QuickInquiryServiceCategory,
): string {
  switch (serviceCategory) {
    case "website":
      return "Kurzanfrage Website";
    case "google-ads":
      return "Kurzanfrage Google Ads";
    default:
      return "Kurzanfrage";
  }
}
