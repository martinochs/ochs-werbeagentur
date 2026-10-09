export type QuickInquiryTrackingMeta = {
  pageUrl: string;
  pageTitle: string;
  serviceCategory: string;
};

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/** Misst eine Kurzanfrage ohne personenbezogene Formularinhalte. */
export function trackQuickInquirySubmit(meta: QuickInquiryTrackingMeta): void {
  if (typeof window === "undefined") return;

  const payload = {
    event: "quick_inquiry_submit",
    page_url: meta.pageUrl,
    page_title: meta.pageTitle,
    service_category: meta.serviceCategory,
  };

  window.dataLayer?.push(payload);
  window.dispatchEvent(new CustomEvent("quick_inquiry_submit", { detail: payload }));
}
