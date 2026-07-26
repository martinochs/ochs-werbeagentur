"use client";

import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import {
  behandlerOptionen,
  fachrichtungen,
  prioritaetOptionen,
  zielOptionen,
  zeitrahmenOptionen,
  zufriedenheitOptionen,
} from "@/lib/content/praxisanalyse-form";

type FormStatus = "idle" | "submitting" | "success" | "error";

const formId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID;

const inputClassName =
  "mt-1.5 w-full rounded-lg border border-border bg-white px-3.5 py-2.5 text-sm text-navy outline-none transition-shadow focus:border-accent focus:ring-2 focus:ring-accent/20";

const labelClassName = "text-sm font-medium text-navy";

export function PraxisanalyseForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [hatWebsite, setHatWebsite] = useState<"ja" | "nein" | "">("");
  const [ziele, setZiele] = useState<string[]>([]);

  function toggleZiel(ziel: string) {
    setZiele((current) =>
      current.includes(ziel) ? current.filter((item) => item !== ziel) : [...current, ziel],
    );
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!formId) {
      setStatus("error");
      setErrorMessage(
        "Das Formular ist noch nicht konfiguriert. Bitte FORMSPREE_FORM_ID in .env.local eintragen.",
      );
      return;
    }

    if (ziele.length === 0) {
      setStatus("error");
      setErrorMessage("Bitte wählen Sie mindestens ein Ziel aus.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());
    payload.ziele = ziele.join(", ");

    try {
      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = (await response.json()) as { error?: string };
        throw new Error(data.error ?? "Beim Senden ist ein Fehler aufgetreten.");
      }

      setStatus("success");
      event.currentTarget.reset();
      setHatWebsite("");
      setZiele([]);
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.",
      );
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-accent/20 bg-accent-soft px-6 py-10 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-accent" aria-hidden="true" />
        <h2 className="mt-4 text-xl font-bold text-navy">Vielen Dank für Ihre Anfrage!</h2>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted">
          Wir haben Ihre Angaben erhalten und melden uns persönlich mit einer
          unverbindlichen Einschätzung und den nächsten Schritten.
        </p>
        <Link href="/" className="btn-primary mt-6 inline-flex">
          Zurück zur Startseite
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {!formId && (
        <p className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
          Hinweis für die Einrichtung: Formspree-Formular-ID fehlt noch in{" "}
          <code className="text-xs">.env.local</code>.
        </p>
      )}

      <fieldset className="space-y-4">
        <legend className="text-base font-bold text-navy">Kontakt</legend>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className={labelClassName}>Ansprechpartner *</span>
            <input
              type="text"
              name="ansprechpartner"
              required
              autoComplete="name"
              className={inputClassName}
            />
          </label>
          <label className="block">
            <span className={labelClassName}>Praxisname *</span>
            <input type="text" name="praxisname" required className={inputClassName} />
          </label>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className={labelClassName}>E-Mail *</span>
            <input
              type="email"
              name="email"
              required
              autoComplete="email"
              className={inputClassName}
            />
          </label>
          <label className="block">
            <span className={labelClassName}>Telefon</span>
            <input
              type="tel"
              name="telefon"
              autoComplete="tel"
              className={inputClassName}
            />
          </label>
        </div>
      </fieldset>

      <fieldset className="space-y-4">
        <legend className="text-base font-bold text-navy">Ihre Praxis</legend>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className={labelClassName}>Fachrichtung *</span>
            <select name="fachrichtung" required className={inputClassName} defaultValue="">
              <option value="" disabled>
                Bitte wählen
              </option>
              {fachrichtungen.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className={labelClassName}>Standort (PLZ & Ort) *</span>
            <input
              type="text"
              name="standort"
              required
              placeholder="z. B. 68259 Mannheim"
              className={inputClassName}
            />
          </label>
        </div>

        <label className="block sm:max-w-xs">
          <span className={labelClassName}>Anzahl Behandler</span>
          <select name="behandler" className={inputClassName} defaultValue="">
            <option value="">Optional</option>
            {behandlerOptionen.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      </fieldset>

      <fieldset className="space-y-4">
        <legend className="text-base font-bold text-navy">Aktuelle Situation</legend>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className={labelClassName}>Haben Sie bereits eine Website? *</span>
            <select
              name="hat_website"
              required
              className={inputClassName}
              value={hatWebsite}
              onChange={(event) =>
                setHatWebsite(event.target.value as "ja" | "nein" | "")
              }
            >
              <option value="" disabled>
                Bitte wählen
              </option>
              <option value="ja">Ja</option>
              <option value="nein">Nein</option>
            </select>
          </label>

          {hatWebsite === "ja" && (
            <label className="block">
              <span className={labelClassName}>Adresse Ihrer Website</span>
              <input
                type="url"
                name="website_url"
                placeholder="https://..."
                className={inputClassName}
              />
            </label>
          )}
        </div>

        {hatWebsite === "ja" && (
          <label className="block sm:max-w-md">
            <span className={labelClassName}>
              Wie zufrieden sind Sie mit Ihrem aktuellen Online-Auftritt?
            </span>
            <select name="zufriedenheit" className={inputClassName} defaultValue="">
              <option value="">Optional</option>
              {zufriedenheitOptionen.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
        )}
      </fieldset>

      <fieldset className="space-y-3">
        <legend className="text-base font-bold text-navy">
          Was möchten Sie erreichen? *
        </legend>
        <p className="text-sm text-muted">Mindestens eine Option auswählen.</p>
        <div className="grid gap-3 sm:grid-cols-2">
          {zielOptionen.map((ziel) => (
            <label
              key={ziel}
              className="flex cursor-pointer items-start gap-3 rounded-lg border border-border bg-white px-3.5 py-3 text-sm text-navy transition-colors hover:border-accent/30"
            >
              <input
                type="checkbox"
                checked={ziele.includes(ziel)}
                onChange={() => toggleZiel(ziel)}
                className="mt-0.5 h-4 w-4 shrink-0 accent-accent"
              />
              {ziel}
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset className="space-y-4">
        <legend className="text-base font-bold text-navy">Priorität & Zeitrahmen</legend>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className={labelClassName}>Was ist Ihnen am wichtigsten? *</span>
            <select name="prioritaet" required className={inputClassName} defaultValue="">
              <option value="" disabled>
                Bitte wählen
              </option>
              {prioritaetOptionen.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className={labelClassName}>Wann möchten Sie starten? *</span>
            <select name="zeitrahmen" required className={inputClassName} defaultValue="">
              <option value="" disabled>
                Bitte wählen
              </option>
              {zeitrahmenOptionen.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
        </div>
      </fieldset>

      <fieldset className="space-y-4">
        <legend className="text-base font-bold text-navy">Optional</legend>

        <label className="block">
          <span className={labelClassName}>
            Was ist Ihre größte Herausforderung online?
          </span>
          <textarea
            name="herausforderung"
            rows={3}
            className={inputClassName}
            placeholder="z. B. wenig Anfragen, veraltetes Design, keine Terminbuchung …"
          />
        </label>

        <label className="block">
          <span className={labelClassName}>Gibt es sonst noch etwas, das wir wissen sollten?</span>
          <textarea name="sonstiges" rows={3} className={inputClassName} />
        </label>
      </fieldset>

      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" />

      <label className="flex items-start gap-3 rounded-lg border border-border bg-surface px-4 py-3 text-sm text-muted">
        <input
          type="checkbox"
          name="datenschutz"
          required
          value="akzeptiert"
          className="mt-0.5 h-4 w-4 shrink-0 accent-accent"
        />
        <span>
          Ich habe die{" "}
          <Link href="/datenschutz" className="font-medium text-navy underline-offset-2 hover:underline">
            Datenschutzerklärung
          </Link>{" "}
          gelesen und bin mit der Verarbeitung meiner Daten zur Bearbeitung meiner
          Anfrage einverstanden. *
        </span>
      </label>

      {status === "error" && errorMessage && (
        <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary w-full sm:w-auto disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            Wird gesendet …
          </>
        ) : (
          <>
            Kostenlose Praxisanalyse anfordern
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </>
        )}
      </button>
    </form>
  );
}
