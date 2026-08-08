"use client";

import { Calendar, Check, X } from "lucide-react";
import { useEffect, useState } from "react";

const defaultDemoServices = [
  "Kontrolluntersuchung",
  "Professionelle Zahnreinigung",
  "Erstberatung Implantologie",
] as const;

const demoSlots = [
  "Montag, 10:00 Uhr",
  "Montag, 14:30 Uhr",
  "Dienstag, 09:15 Uhr",
] as const;

type DemoAppointmentModalProps = {
  open: boolean;
  onClose: () => void;
  services?: readonly string[];
};

export function DemoAppointmentModal({
  open,
  onClose,
  services = defaultDemoServices,
}: DemoAppointmentModalProps) {
  const [selectedService, setSelectedService] = useState<string>("");
  const [selectedSlot, setSelectedSlot] = useState<string>("");
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    if (!open) {
      setSelectedService("");
      setSelectedSlot("");
      setCompleted(false);
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  if (!open) return null;

  function handleClose() {
    onClose();
  }

  function handleComplete() {
    if (selectedService && selectedSlot) {
      setCompleted(true);
    }
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-[#0a2540]/50 p-4 sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="demo-appointment-title"
    >
      <button
        type="button"
        className="absolute inset-0 cursor-default"
        aria-label="Demo schließen"
        onClick={handleClose}
      />

      <div className="relative w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl">
        <div className="flex items-start justify-between border-b border-[#0a2540]/10 px-5 py-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-[#2a9d8f]">
              Demo-Terminbuchung
            </p>
            <h2 id="demo-appointment-title" className="mt-1 text-lg font-bold text-[#0a2540]">
              Termin auswählen
            </h2>
            <p className="mt-1 text-xs text-[#0a2540]/60">
              Dies ist eine Beispieldarstellung. Es wird kein echter Termin gebucht.
            </p>
          </div>
          <button
            type="button"
            onClick={handleClose}
            className="rounded-md p-1.5 text-[#0a2540]/60 transition-colors hover:bg-[#eef6f4] hover:text-[#0a2540]"
            aria-label="Schließen"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <div className="px-5 py-5">
          {completed ? (
            <div className="text-center">
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#eef6f4] text-[#2a9d8f]">
                <Check className="h-6 w-6" aria-hidden="true" />
              </span>
              <p className="mt-4 text-sm font-semibold text-[#0a2540]">
                So könnte die Einbindung Ihres Terminbuchungssystems auf Ihrer Praxis-Website aussehen.
              </p>
              <p className="mt-2 text-xs text-[#0a2540]/60">
                Ausgewählt: {selectedService} · {selectedSlot}
              </p>
              <button
                type="button"
                onClick={handleClose}
                className="mt-6 w-full rounded-lg bg-[#2a9d8f] px-4 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                Demo schließen
              </button>
            </div>
          ) : (
            <>
              <div>
                <p className="text-sm font-semibold text-[#0a2540]">Leistung wählen</p>
                <div className="mt-3 space-y-2">
                  {services.map((service) => (
                    <button
                      key={service}
                      type="button"
                      onClick={() => setSelectedService(service)}
                      className={`w-full rounded-lg border px-4 py-3 text-left text-sm transition-colors ${
                        selectedService === service
                          ? "border-[#2a9d8f] bg-[#eef6f4] font-semibold text-[#0a2540]"
                          : "border-[#0a2540]/10 text-[#0a2540]/75 hover:border-[#2a9d8f]/40"
                      }`}
                    >
                      {service}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <p className="text-sm font-semibold text-[#0a2540]">Freier Termin</p>
                <div className="mt-3 space-y-2">
                  {demoSlots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setSelectedSlot(slot)}
                      disabled={!selectedService}
                      className={`flex w-full items-center gap-2 rounded-lg border px-4 py-3 text-left text-sm transition-colors disabled:cursor-not-allowed disabled:opacity-45 ${
                        selectedSlot === slot
                          ? "border-[#2a9d8f] bg-[#eef6f4] font-semibold text-[#0a2540]"
                          : "border-[#0a2540]/10 text-[#0a2540]/75 hover:border-[#2a9d8f]/40"
                      }`}
                    >
                      <Calendar className="h-4 w-4 shrink-0 text-[#2a9d8f]" aria-hidden="true" />
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={handleComplete}
                disabled={!selectedService || !selectedSlot}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-[#2a9d8f] px-4 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Demo abschließen
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
