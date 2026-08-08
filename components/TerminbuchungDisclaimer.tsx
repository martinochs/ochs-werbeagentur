import { Info } from "lucide-react";
import {
  terminbuchungFeatureTitle,
  terminbuchungSalesNote,
} from "@/lib/content/terminbuchung";

type TerminbuchungDisclaimerProps = {
  className?: string;
};

export function TerminbuchungDisclaimer({
  className = "",
}: TerminbuchungDisclaimerProps) {
  return (
    <div
      className={`rounded-lg border border-border bg-surface px-4 py-3 text-sm leading-relaxed text-muted ${className}`}
    >
      <div className="flex items-start gap-2.5">
        <Info className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
        <div className="space-y-2">
          <p className="font-medium text-navy">{terminbuchungFeatureTitle}</p>
          <p>{terminbuchungSalesNote}</p>
        </div>
      </div>
    </div>
  );
}
