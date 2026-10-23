"use client";

import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import {
  websiteZahnarztCta,
  websiteZahnarztHeroForm,
  websiteZahnarztLeadQuelle,
} from "@/lib/content/website-zahnarzt";

const formId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID ?? "kqerngya";

const inputClassName =
  "mt-1.5 w-full rounded-lg border border-border bg-white px-3.5 py-2.5 text-sm text-navy outline-none transition-shadow focus:border-[#5b21b6] focus:ring-2 focus:ring-[#5b21b6]/20";

const labelClassName = "text-sm font-medium text-navy";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function WebsiteZahnarztHeroForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
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

    const form = event.currentTarget;
    const formData = new FormData(form);
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

      form.reset();
      setStatus("success");
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
      <div
        className="rounded-2xl border border-[#ddd6fe] bg-white px-6 py-10 text-center shadow-sm sm:px-8"
        data-lp-form-success="true"
        data-lp-quelle={websiteZahnarztLeadQuelle}
      >
        <CheckCircle2 className="mx-auto h-12 w-12 text-[#5b21b6]" aria-hidden="true" />
        <h2 className="mt-4 text-xl font-bold text-navy">{websiteZahnarztHeroForm.successTitle}</h2>
        <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-[#5b6472]">
          {websiteZahnarztHeroForm.successText}
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-border bg-white p-6 shadow-sm sm:p-8"
      data-lp-form="website-zahnarzt-hero"
      data-lp-quelle={websiteZahnarztLeadQuelle}
    >
      <h2 className="text-xl font-bold text-navy sm:text-2xl">{websiteZahnarztHeroForm.title}</h2>
      <p className="mt-2 text-sm leading-relaxed text-[#5b6472]">{websiteZahnarztHeroForm.intro}</p>

      <div className="mt-6 space-y-4">
        <label className="block">
          <span className={labelClassName}>{websiteZahnarztHeroForm.nameLabel} *</span>
          <input
            type="text"
            name="ansprechpartner"
            required
            autoComplete="name"
            maxLength={120}
            className={inputClassName}
          />
        </label>

        <label className="block">
          <span className={labelClassName}>{websiteZahnarztHeroForm.emailLabel} *</span>
          <input
            type="email"
            name="email"
            required
            autoComplete="email"
            maxLength={200}
            className={inputClassName}
          />
        </label>

        <label className="block">
          <span className={labelClassName}>{websiteZahnarztHeroForm.websiteLabel}</span>
          <input
            type="text"
            name="website_url"
            inputMode="url"
            autoComplete="url"
            maxLength={300}
            placeholder={websiteZahnarztHeroForm.websitePlaceholder}
            className={inputClassName}
          />
        </label>
      </div>

      <p className="mt-4 text-xs leading-relaxed text-[#5b6472]">
        {websiteZahnarztHeroForm.privacyLead}{" "}
        <Link
          href="/datenschutz"
          className="font-medium text-[#5b21b6] underline underline-offset-2"
        >
          {websiteZahnarztHeroForm.privacyLinkLabel}
        </Link>.
      </p>

      <input type="hidden" name="quelle" value={websiteZahnarztLeadQuelle} />
      <input type="hidden" name="fachrichtung" value="Zahnarztpraxis" />
      <input type="hidden" name="gewuenschte_leistung" value="Website / Relaunch" />
      <input type="hidden" name="formular_typ" value="website-zahnarzt-hero" />
      <input type="hidden" name="_subject" value="Kostenlose Website-Analyse – Zahnarzt-Landingpage" />
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" />

      {status === "error" && errorMessage && (
        <p className="mt-4 rounded-lg border border-red-200 bg-red-50 px-3 py-2.5 text-sm text-red-800">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary mt-5 w-full py-4 text-base disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            Wird gesendet …
          </>
        ) : (
          <>
            {websiteZahnarztHeroForm.submit}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </>
        )}
      </button>
      <p className="mt-3 text-center text-xs text-[#5b6472]">{websiteZahnarztCta.subline}</p>
    </form>
  );
}
