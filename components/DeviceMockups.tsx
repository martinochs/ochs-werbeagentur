export function DeviceMockups({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none ${className}`} aria-hidden="true">
      <div className="absolute bottom-8 left-0 z-20 w-[58%] rounded-lg bg-white p-2 shadow-2xl ring-1 ring-black/5">
        <div className="mb-2 flex items-center gap-1.5 px-1">
          <span className="h-2 w-2 rounded-full bg-red-400" />
          <span className="h-2 w-2 rounded-full bg-yellow-400" />
          <span className="h-2 w-2 rounded-full bg-green-400" />
        </div>
        <div className="overflow-hidden rounded bg-surface">
          <div className="bg-navy px-3 py-2 text-[10px] font-medium text-white">
            Zahnarztpraxis · Mannheim
          </div>
          <div className="space-y-2 p-3">
            <div className="h-2 w-3/4 rounded bg-navy/10" />
            <div className="h-16 rounded bg-gradient-to-r from-accent-light to-white" />
            <div className="grid grid-cols-3 gap-1.5">
              <div className="h-6 rounded bg-white" />
              <div className="h-6 rounded bg-white" />
              <div className="h-6 rounded bg-white" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-16 right-0 z-30 w-[28%] rounded-[1.25rem] bg-navy p-1.5 shadow-2xl ring-1 ring-black/10">
        <div className="overflow-hidden rounded-[1rem] bg-white">
          <div className="bg-accent px-2 py-1.5 text-[8px] font-semibold text-white">
            Termin online
          </div>
          <div className="space-y-1.5 p-2">
            <div className="h-1.5 w-3/4 rounded bg-navy/10" />
            <div className="h-10 rounded bg-accent-light/60" />
            <div className="h-4 rounded bg-surface" />
          </div>
        </div>
      </div>
    </div>
  );
}
