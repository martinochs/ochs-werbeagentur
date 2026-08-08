import { analyseProcessSteps } from "@/lib/content/praxisanalyse-form";

export function AnalyseProcessSteps() {
  return (
    <aside
      className="rounded-2xl border border-border bg-[#f8fafc] p-6 lg:p-7"
      aria-labelledby="analyse-process-heading"
    >
      <h2 id="analyse-process-heading" className="text-lg font-bold text-navy">
        So geht es weiter
      </h2>
      <ol className="mt-5 space-y-5">
        {analyseProcessSteps.map((item) => (
          <li key={item.step} className="flex gap-3.5">
            <span
              className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-white"
              aria-hidden="true"
            >
              {item.step}
            </span>
            <div className="min-w-0 pt-0.5">
              <p className="text-sm font-semibold text-navy">{item.title}</p>
              <p className="mt-1 text-xs leading-relaxed text-muted">{item.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </aside>
  );
}
