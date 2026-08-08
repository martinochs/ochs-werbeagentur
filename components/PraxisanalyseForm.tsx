"use client";

import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import {
  fachrichtungen,
  gewuenschteLeistungen,
  leistungSlugToFormValue,
} from "@/lib/content/praxisanalyse-form";
import { formSubmitLabel } from "@/lib/cta";
import type { LeistungSlug } from "@/lib/cta";

type FormStatus = "idle" | "submitting" | "success" | "error";

const formId =
  process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID ?? "kqerngya";

const inputClassName =
  "mt-1.5 w-full rounded-lg border border-border bg-white px-3.5 py-2.5 text-sm text-navy outline-none transition-shadow focus:border-accent focus:ring-2 focus:ring-accent/20";

const labelClassName = "text-sm font-medium text-navy";

type PraxisanalyseFormProps = {
  initialLeistung?: LeistungSlug;
};

function getDefaultLeistung(initialLeistung?: LeistungSlug): string {
  if (!initialLeistung) return "";
  return leistungSlugToFormValue[initialLeistung] ?? "";
}

export function PraxisanalyseForm({ initialLeistung }: PraxisanalyseFormProps) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [hatWebsite, setHatWebsite] = useState<"ja" | "nein" | "">("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!formId) {
      setStatus("error");
      setErrorMessage(
        "Das Formular ist noch nicht konfiguriert. Bitte FORMSPREE_FORM_ID in .env.local eintragen.",
      );
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

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
        <h2 className="mt-4 text-xl font-bold text-navy">
          Vielen Dank – wir schauen uns Ihre Website an.
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted">
          Ihre Anfrage ist bei uns eingegangen. Wir prüfen Ihre Website und senden Ihnen
          anschließend eine erste Einschätzung per E-Mail. Danach können Sie bequem einen
          Termin für Ihr persönliches Erstgespräch auswählen.
        </p>
        <Link href="/" className="btn-primary mt-6 inline-flex">
          Zurück zur Startseite
        </Link>
      </div>
    );
  }

  return (
    <form
      key={initialLeistung ?? "default"}
      onSubmit={handleSubmit}
      className="space-y-8"
    >
      {!formId && (
        <p className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
          Hinweis für die Einrichtung: Formspree-Formular-ID fehlt noch in{" "}
          <code className="text-xs">.env.local</code>.
        </p>
      )}

      <fieldset className="space-y-4">
        <legend className="text-base font-bold text-navy">Ihre Angaben</legend>

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

        <label className="block">
          <span className={labelClassName}>Gewünschte Leistung *</span>
          <select
            name="gewuenschte_leistung"
            required
            className={inputClassName}
            defaultValue={getDefaultLeistung(initialLeistung)}
          >
            <option value="" disabled>
              Bitte wählen
            </option>
            {gewuenschteLeistungen.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      </fieldset>

      <fieldset className="space-y-4">
        <legend className="text-base font-bold text-navy">Optional</legend>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className={labelClassName}>Fachrichtung</span>
            <select name="fachrichtung" className={inputClassName} defaultValue="">
              <option value="">Optional</option>
              {fachrichtungen.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className={labelClassName}>Standort (PLZ & Ort)</span>
            <input
              type="text"
              name="standort"
              placeholder="z. B. 68259 Mannheim"
              className={inputClassName}
            />
          </label>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className={labelClassName}>Haben Sie bereits eine Website?</span>
            <select
              name="hat_website"
              className={inputClassName}
              value={hatWebsite}
              onChange={(event) =>
                setHatWebsite(event.target.value as "ja" | "nein" | "")
              }
            >
              <option value="">Optional</option>
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

        <label className="block">
          <span className={labelClassName}>Kurze Nachricht</span>
          <textarea
            name="nachricht"
            rows={3}
            className={inputClassName}
            placeholder="Was möchten Sie erreichen? Gibt es Besonderheiten, die wir wissen sollten?"
          />
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
          zur Kenntnis genommen. *
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
            {formSubmitLabel}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </>
        )}
      </button>
    </form>
  );
}
