"use client";

import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { praxisanalysePrivacyNote } from "@/lib/content/praxisanalyse-form";
import type { QuickInquiryServiceCategory } from "@/lib/quick-inquiry/config";
import { trackQuickInquirySubmit } from "@/lib/quick-inquiry/tracking";

const formId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID ?? "kqerngya";

const inputClassName =
  "mt-1.5 w-full rounded-lg border border-border bg-white px-3.5 py-2.5 text-sm text-navy outline-none transition-shadow focus:border-accent focus:ring-2 focus:ring-accent/20";

const labelClassName = "text-sm font-medium text-navy";

function serviceCategoryToLeistung(category: QuickInquiryServiceCategory): string {
  switch (category) {
    case "website":
      return "Website / Relaunch";
    case "google-ads":
      return "Google Ads";
    default:
      return "Noch unsicher — Beratung gewünscht";
  }
}

type QuickInquiryFormProps = {
  pageUrl: string;
  pageTitle: string;
  serviceCategory: QuickInquiryServiceCategory;
  onSuccess?: () => void;
};

export function QuickInquiryForm({
  pageUrl,
  pageTitle,
  serviceCategory,
  onSuccess,
}: QuickInquiryFormProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

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

      trackQuickInquirySubmit({
        pageUrl,
        pageTitle,
        serviceCategory,
      });

      setStatus("success");
      event.currentTarget.reset();
      onSuccess?.();
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
      <div className="rounded-xl border border-accent/20 bg-accent-soft px-5 py-8 text-center">
        <CheckCircle2 className="mx-auto h-10 w-10 text-accent" aria-hidden="true" />
        <p className="mt-4 text-base font-bold text-navy">Vielen Dank für Ihre Anfrage</p>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          Wir melden uns persönlich bei Ihnen — in der Regel innerhalb von 1–2 Werktagen.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" data-form="quick-inquiry">
      <input type="hidden" name="formular_typ" value="kurzanfrage" />
      <input type="hidden" name="page_url" value={pageUrl} />
      <input type="hidden" name="page_title" value={pageTitle} />
      <input type="hidden" name="service_category" value={serviceCategory} />
      <input type="hidden" name="gewuenschte_leistung" value={serviceCategoryToLeistung(serviceCategory)} />
      <input type="hidden" name="_subject" value={`Kurzanfrage – ${pageTitle}`} />

      <p className="rounded-lg border border-border bg-surface px-3 py-2.5 text-xs leading-relaxed text-muted">
        {praxisanalysePrivacyNote}
      </p>

      <label className="block">
        <span className={labelClassName}>Name *</span>
        <input type="text" name="ansprechpartner" required autoComplete="name" className={inputClassName} />
      </label>

      <label className="block">
        <span className={labelClassName}>Praxisname *</span>
        <input type="text" name="praxisname" required className={inputClassName} />
      </label>

      <label className="block">
        <span className={labelClassName}>E-Mail oder Telefonnummer *</span>
        <input
          type="text"
          name="kontakt"
          required
          autoComplete="email tel"
          placeholder="z. B. info@praxis.de oder 0621 …"
          className={inputClassName}
        />
      </label>

      <label className="block">
        <span className={labelClassName}>Aktuelle Website</span>
        <input
          type="url"
          name="website_url"
          placeholder="https://… (optional)"
          className={inputClassName}
        />
      </label>

      <label className="block">
        <span className={labelClassName}>Kurze Nachricht</span>
        <textarea
          name="nachricht"
          rows={3}
          placeholder="Optional – Was möchten Sie erreichen?"
          className={inputClassName}
        />
      </label>

      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" />

      <label className="flex items-start gap-3 rounded-lg border border-border bg-surface px-3 py-2.5 text-xs text-muted">
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
        <p className="rounded-lg border border-red-200 bg-red-50 px-3 py-2.5 text-sm text-red-800">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            Wird gesendet …
          </>
        ) : (
          <>
            Kostenlose Einschätzung anfordern
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </>
        )}
      </button>
    </form>
  );
}
