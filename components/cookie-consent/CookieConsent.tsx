"use client";

import Link from "next/link";
import {
  COOKIE_CONSENT_STORAGE_KEY,
  COOKIE_SETTINGS_EVENT,
  type CookieConsentValue,
} from "@/lib/consent/config";
import { loadGoogleAdsTag } from "@/lib/consent/google-ads";
import { useEffect, useState } from "react";

type ConsentState = "unknown" | "pending" | CookieConsentValue;

function readStoredConsent(): CookieConsentValue | null {
  try {
    const value = window.localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);
    if (value === "accepted" || value === "rejected") return value;
  } catch {
    return null;
  }
  return null;
}

function storeConsent(value: CookieConsentValue): void {
  try {
    window.localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, value);
  } catch {
    // Private mode or blocked storage: still apply the choice for this visit.
  }
}

export function CookieConsent() {
  const [status, setStatus] = useState<ConsentState>("unknown");
  const [settingsOpen, setSettingsOpen] = useState(false);

  useEffect(() => {
    const stored = readStoredConsent();
    if (stored === "accepted") {
      loadGoogleAdsTag();
      setStatus("accepted");
      return;
    }
    if (stored === "rejected") {
      setStatus("rejected");
      return;
    }
    setStatus("pending");
  }, []);

  useEffect(() => {
    function onOpenSettings() {
      setSettingsOpen(true);
    }
    window.addEventListener(COOKIE_SETTINGS_EVENT, onOpenSettings);
    return () => window.removeEventListener(COOKIE_SETTINGS_EVENT, onOpenSettings);
  }, []);

  function choose(value: CookieConsentValue) {
    storeConsent(value);
    if (value === "accepted") loadGoogleAdsTag();
    setStatus(value);
    setSettingsOpen(false);
  }

  const visible = status === "pending" || settingsOpen;
  if (!visible) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[70] p-4 md:p-6"
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-text"
    >
      <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-white p-5 ring-1 ring-black/[0.04] sm:p-6">
        <h2
          id="cookie-consent-title"
          className="text-base font-bold text-navy"
        >
          Cookies und Conversion-Messung
        </h2>
        <p
          id="cookie-consent-text"
          className="mt-2 text-sm leading-relaxed text-muted"
        >
          Technisch notwendige Funktionen nutzen wir immer. Für die Messung
          unserer Google-Ads-Kampagnen laden wir das Conversion-Tag nur, wenn
          Sie zustimmen. Details stehen in der{" "}
          <Link
            href="/datenschutz"
            className="font-medium text-navy underline-offset-2 hover:underline"
          >
            Datenschutzerklärung
          </Link>
          .
        </p>
        <div className="mt-5 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
          <button
            type="button"
            className="btn-secondary px-5 py-2.5"
            onClick={() => choose("rejected")}
          >
            Ablehnen
          </button>
          <button
            type="button"
            className="btn-primary px-5 py-2.5"
            onClick={() => choose("accepted")}
          >
            Akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
}
