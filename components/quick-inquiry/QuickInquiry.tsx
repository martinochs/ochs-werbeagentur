"use client";

import { QuickInquiryForm } from "@/components/quick-inquiry/QuickInquiryForm";
import {
  getQuickInquirySettings,
  getQuickInquiryTabLabel,
} from "@/lib/quick-inquiry/config";
import { Mail, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useId, useState } from "react";

const SCROLL_THRESHOLD = 0.08;
const TIME_THRESHOLD_MS = 5_000;
const NON_SCROLLABLE_DELAY_MS = 2_000;

export function QuickInquiry() {
  const pathname = usePathname();
  const settings = getQuickInquirySettings(pathname ?? "");
  const panelTitleId = useId();

  const [triggerVisible, setTriggerVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [pageMeta, setPageMeta] = useState({ url: "", title: "" });

  const tabLabel = settings ? getQuickInquiryTabLabel(settings.serviceCategory) : "";

  useEffect(() => {
    if (!settings) return;
    setPageMeta({
      url: window.location.href,
      title: document.title,
    });
  }, [settings, pathname]);

  useEffect(() => {
    if (!settings) return;

    setTriggerVisible(false);
    setOpen(false);

    let nonScrollableTimer: number | undefined;

    function checkScroll() {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 32) {
        if (!nonScrollableTimer) {
          nonScrollableTimer = window.setTimeout(
            () => setTriggerVisible(true),
            NON_SCROLLABLE_DELAY_MS,
          );
        }
        return;
      }
      const progress = window.scrollY / docHeight;
      if (progress >= SCROLL_THRESHOLD) {
        setTriggerVisible(true);
      }
    }

    const timer = window.setTimeout(() => setTriggerVisible(true), TIME_THRESHOLD_MS);
    window.addEventListener("scroll", checkScroll, { passive: true });
    checkScroll();

    return () => {
      window.clearTimeout(timer);
      if (nonScrollableTimer) window.clearTimeout(nonScrollableTimer);
      window.removeEventListener("scroll", checkScroll);
    };
  }, [settings, pathname]);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const close = useCallback(() => setOpen(false), []);
  const openPanel = useCallback(() => setOpen(true), []);

  if (!settings) return null;

  const triggerClassName = triggerVisible
    ? "pointer-events-auto translate-x-0 opacity-100"
    : "pointer-events-none translate-x-4 opacity-0 md:translate-x-3";

  return (
    <>
      {/* Desktop: Seitenreiter */}
      <button
        type="button"
        onClick={openPanel}
        aria-label={tabLabel}
        className={`fixed right-0 top-1/2 z-[55] hidden -translate-y-1/2 flex-col items-center gap-2 rounded-l-md bg-navy px-2.5 py-4 text-white shadow-lg transition-all duration-300 hover:bg-navy-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy md:flex ${triggerClassName}`}
      >
        <Mail className="h-4 w-4 shrink-0 opacity-90" aria-hidden="true" />
        <span
          className="text-[11px] font-semibold leading-tight tracking-wide [writing-mode:vertical-rl]"
          style={{ textOrientation: "mixed" }}
        >
          {tabLabel}
        </span>
      </button>

      {/* Mobile: Sticky-CTA unten */}
      <button
        type="button"
        onClick={openPanel}
        className={`fixed inset-x-4 bottom-4 z-[55] flex items-center justify-center gap-2 rounded-lg bg-navy px-4 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-navy-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy md:hidden ${triggerClassName}`}
        style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
      >
        <Mail className="h-4 w-4 shrink-0 opacity-90" aria-hidden="true" />
        Kurzanfrage
      </button>

      {open && (
        <div className="fixed inset-0 z-50" role="presentation">
          <button
            type="button"
            className="absolute inset-0 bg-navy/40"
            aria-label="Kurzanfrage schließen"
            onClick={close}
          />

          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={panelTitleId}
            className="absolute inset-x-0 bottom-0 flex max-h-[92vh] flex-col rounded-t-2xl bg-white shadow-2xl md:inset-x-auto md:bottom-0 md:right-0 md:top-0 md:max-h-none md:w-full md:max-w-md md:rounded-none md:rounded-l-2xl"
          >
            <div className="flex items-start justify-between border-b border-border px-5 py-4">
              <div>
                <h2 id={panelTitleId} className="text-lg font-bold text-navy">
                  Kurze Anfrage
                </h2>
                <p className="mt-1 text-sm text-muted">
                  Wir melden uns persönlich bei Ihnen. Dauert weniger als 1 Minute.
                </p>
              </div>
              <button
                type="button"
                onClick={close}
                className="rounded-md p-1.5 text-muted transition-colors hover:bg-surface hover:text-navy"
                aria-label="Schließen"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <div className="overflow-y-auto px-5 py-5">
              <QuickInquiryForm
                pageUrl={pageMeta.url || pathname || ""}
                pageTitle={pageMeta.title}
                serviceCategory={settings.serviceCategory}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
