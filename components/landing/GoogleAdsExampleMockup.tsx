import { Search } from "lucide-react";

type GoogleAdsExampleMockupProps = {
  disclaimer: string;
  searchQuery?: string;
  practiceName?: string;
  adText?: string;
};

export function GoogleAdsExampleMockup({
  disclaimer,
  searchQuery = "Zahnarzt Mannheim",
  practiceName = "Zahnarztpraxis Mannheim",
  adText = "Professionelle Zahnmedizin. Jetzt Termin vereinbaren.",
}: GoogleAdsExampleMockupProps) {
  return (
    <div className="mx-auto w-full max-w-sm">
      <p className="mb-3 text-xs font-semibold text-[#166534]">{disclaimer}</p>
      <div className="rounded-2xl border border-border bg-white p-4 shadow-[0_8px_32px_rgba(10,37,64,0.1)]">
        <div className="flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-2">
          <Search className="h-3.5 w-3.5 text-muted" aria-hidden="true" />
          <span className="text-xs text-muted">{searchQuery}</span>
        </div>

        <div className="mt-4 rounded-xl border border-border bg-white p-3">
          <p className="text-[10px] font-medium uppercase tracking-wide text-muted">Anzeige</p>
          <p className="mt-1 text-sm font-bold text-navy">{practiceName}</p>
          <div className="mt-1 flex items-center gap-1 text-[11px] text-amber-500">
            <span aria-hidden="true">★★★★★</span>
            <span className="font-semibold text-navy">4,9</span>
            <span className="text-muted">(97 Bewertungen)</span>
          </div>
          <p className="mt-2 text-xs leading-relaxed text-muted">{adText}</p>
        </div>
      </div>
    </div>
  );
}
