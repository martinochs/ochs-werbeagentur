import { Check } from "lucide-react";
import {
  websitePackageScopeHeading,
  websitePackageScopeHighlights,
  websitePackageScopeItems,
  websitePackageNoHiddenCostsLabel,
  websitePackageNoHiddenCostsText,
  websitePackageExternalCostsNote,
} from "@/lib/content/website-package";

type WebsitePackageScopeProps = {
  className?: string;
  checkColor?: string;
};

export function WebsitePackageScope({
  className = "",
  checkColor = "text-navy",
}: WebsitePackageScopeProps) {
  return (
    <div
      className={`rounded-2xl border border-border bg-white p-6 shadow-[0_4px_24px_rgba(10,37,64,0.06)] ring-1 ring-black/[0.04] lg:p-8 ${className}`}
      aria-labelledby="website-package-scope-heading"
    >
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <h3
          id="website-package-scope-heading"
          className="text-xl font-bold text-navy sm:text-2xl"
        >
          {websitePackageScopeHeading}
        </h3>
        <ul className="flex flex-wrap gap-2" aria-label="Leistungsumfang auf einen Blick">
          {websitePackageScopeHighlights.map((label) => (
            <li
              key={label}
              className="rounded-full bg-[#eff6ff] px-3 py-1 text-xs font-bold text-[#1d6fd8]"
            >
              {label}
            </li>
          ))}
        </ul>
      </div>

      <ul className="mt-6 grid gap-3 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-3">
        {websitePackageScopeItems.map((item) => (
          <li key={item.text} className="flex items-start gap-2.5">
            <Check
              className={`mt-0.5 h-4 w-4 shrink-0 ${checkColor}`}
              strokeWidth={2.5}
              aria-hidden="true"
            />
            <div>
              <p
                className={`text-sm leading-snug text-navy ${item.emphasis ? "font-bold" : ""}`}
              >
                {item.text}
              </p>
              {item.note && (
                <p className="mt-0.5 text-xs leading-relaxed text-muted">{item.note}</p>
              )}
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-6 space-y-3 border-t border-border pt-6 text-sm leading-relaxed text-muted">
        <p>
          <span className="font-semibold text-navy">{websitePackageNoHiddenCostsLabel}:</span>{" "}
          {websitePackageNoHiddenCostsText}
        </p>
        <p className="font-medium text-navy">{websitePackageExternalCostsNote}</p>
      </div>
    </div>
  );
}
