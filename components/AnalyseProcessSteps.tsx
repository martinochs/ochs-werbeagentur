import { analyseProcessSteps } from "@/lib/content/analyse-process";

export function AnalyseProcessSteps() {
  return (
    <div className="rounded-2xl border border-border bg-white p-6 lg:p-8">
      <h2 className="text-base font-bold text-navy">So geht es weiter:</h2>
      <ol className="mt-5 space-y-5">
        {analyseProcessSteps.map((item) => (
          <li key={item.step} className="flex gap-4">
            <span
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-soft text-sm font-bold text-accent"
              aria-hidden="true"
            >
              {item.step}
            </span>
            <div>
              <p className="text-sm font-bold text-navy">
                {item.step}. {item.title}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-muted">{item.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
