import { Gift } from "lucide-react";
import {
  googleAdsCreditBadge,
  googleAdsCreditBudgetNote,
  googleAdsCreditFootnoteMain,
  googleAdsCreditHeadline,
} from "@/lib/content/google-ads-credit";

type GoogleAdsCreditBlockProps = {
  variant?: "card" | "featured";
  className?: string;
};

export function GoogleAdsCreditBlock({
  variant = "card",
  className = "",
}: GoogleAdsCreditBlockProps) {
  const isFeatured = variant === "featured";

  return (
    <aside
      className={`overflow-hidden rounded-xl border-2 border-[#93c5fd] bg-gradient-to-br from-[#eff6ff] via-[#dbeafe] to-[#eff6ff] shadow-[0_4px_20px_rgba(29,111,216,0.12)] ring-1 ring-[#1d6fd8]/10 ${
        isFeatured ? "p-6 text-center" : "p-4"
      } ${className}`}
      aria-label={`${googleAdsCreditHeadline.prefix} ${googleAdsCreditHeadline.amount} ${googleAdsCreditHeadline.suffix.replace("¹", "")}`}
    >
      <div
        className={`flex gap-3 ${isFeatured ? "flex-col items-center" : "items-start"}`}
      >
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#1d6fd8] text-white shadow-md">
          <Gift className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
        </div>

        <div className={isFeatured ? "w-full" : "min-w-0 flex-1"}>
          <p className="text-[10px] font-bold uppercase tracking-widest text-[#1d6fd8]">
            {googleAdsCreditBadge}
          </p>
          <p
            className={`mt-1.5 font-extrabold leading-snug text-navy ${
              isFeatured ? "text-lg sm:text-xl" : "text-[15px] sm:text-base"
            }`}
          >
            {googleAdsCreditHeadline.prefix}{" "}
            <span className="text-[#1d6fd8]">{googleAdsCreditHeadline.amount}</span>{" "}
            {googleAdsCreditHeadline.suffix}
          </p>
        </div>
      </div>

      <div
        className={`mt-4 space-y-2 border-t border-[#93c5fd]/60 pt-3 ${
          isFeatured ? "text-left" : ""
        }`}
      >
        <p className="text-[11px] leading-relaxed text-muted">
          {googleAdsCreditFootnoteMain}
        </p>
        <p className="rounded-md bg-white/80 px-3 py-2 text-[11px] font-semibold leading-relaxed text-navy ring-1 ring-[#bfdbfe]">
          {googleAdsCreditBudgetNote}
        </p>
      </div>
    </aside>
  );
}
