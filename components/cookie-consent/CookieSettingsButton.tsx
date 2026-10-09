"use client";

import { COOKIE_SETTINGS_EVENT } from "@/lib/consent/config";

export function CookieSettingsButton({
  className,
}: {
  className?: string;
}) {
  return (
    <button
      type="button"
      className={`bg-transparent p-0 text-inherit ${className ?? ""}`}
      onClick={() => window.dispatchEvent(new Event(COOKIE_SETTINGS_EVENT))}
    >
      Cookie-Einstellungen
    </button>
  );
}
