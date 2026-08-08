import { Info } from "lucide-react";
import {
  terminbuchungDisclaimer,
  terminbuchungIntegrationNote,
  terminbuchungScopeNote,
} from "@/lib/content/terminbuchung";

type TerminbuchungDisclaimerProps = {
  variant?: "compact" | "full";
  className?: string;
};

export function TerminbuchungDisclaimer({
  variant = "compact",
  className = "",
}: TerminbuchungDisclaimerProps) {
  return (
    <div
      className={`rounded-lg border border-border bg-surface px-4 py-3 text-sm leading-relaxed text-muted ${className}`}
    >
      <div className="flex items-start gap-2.5">
        <Info className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
        <div className="space-y-2">
          {variant === "full" && <p>{terminbuchungIntegrationNote}</p>}
          <p className="font-medium text-navy">{terminbuchungDisclaimer}</p>
          {variant === "full" && <p>{terminbuchungScopeNote}</p>}
        </div>
      </div>
    </div>
  );
}
