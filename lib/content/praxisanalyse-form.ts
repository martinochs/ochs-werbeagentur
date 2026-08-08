import type { LeistungSlug } from "@/lib/cta";
import type { PraxisanalyseVariantKey } from "@/lib/content/praxisanalyse-variants";

export const fachrichtungen = [
  "Zahnarztpraxis",
  "Allgemeinmedizin / Hausarzt",
  "Hautarzt / Dermatologie",
  "Orthopädie",
  "Gynäkologie",
  "Kinder- und Jugendmedizin",
  "Augenheilkunde",
  "HNO",
  "Urologie",
  "Andere Fachrichtung",
] as const;

export const gewuenschteLeistungen = [
  "Website / Relaunch",
  "Google Ads",
  "Google-Ads-Betreuung",
  "Website + Google Ads",
  "Monatliche Website-Betreuung",
  "Noch unsicher — Beratung gewünscht",
] as const;

export const leistungSlugToFormValue: Record<LeistungSlug, string> = {
  website: "Website / Relaunch",
  "google-ads": "Google Ads",
  betreuung: "Google-Ads-Betreuung",
  kombi: "Website + Google Ads",
};

export const formValueToLeistungSlug: Partial<Record<string, LeistungSlug>> = {
  "Website / Relaunch": "website",
  "Google Ads": "google-ads",
  "Google-Ads-Betreuung": "betreuung",
  "Website + Google Ads": "kombi",
};

export const googleAdsErfahrungOptions = [
  "Noch keine Erfahrung",
  "Wenig Erfahrung",
  "Schon länger aktiv",
] as const;

export function getFormVariantKey(
  initialLeistung: LeistungSlug | undefined,
  selectedFormValue: string,
): PraxisanalyseVariantKey {
  if (selectedFormValue && formValueToLeistungSlug[selectedFormValue]) {
    return formValueToLeistungSlug[selectedFormValue]!;
  }
  return initialLeistung ?? "default";
}

export type FormFieldVisibility = {
  showPraxisname: boolean;
  showFachrichtung: boolean;
  showWebsiteUrl: boolean;
  showStandort: boolean;
  showBeworbeneLeistungen: boolean;
  showGoogleAdsErfahrung: boolean;
  showGoogleAdsAktiv: boolean;
  showWerbebudget: boolean;
  showNachricht: boolean;
};

export function getFormFieldVisibility(
  variantKey: PraxisanalyseVariantKey,
): FormFieldVisibility {
  switch (variantKey) {
    case "google-ads":
      return {
        showPraxisname: true,
        showFachrichtung: true,
        showWebsiteUrl: true,
        showStandort: false,
        showBeworbeneLeistungen: true,
        showGoogleAdsErfahrung: true,
        showGoogleAdsAktiv: false,
        showWerbebudget: false,
        showNachricht: false,
      };
    case "betreuung":
      return {
        showPraxisname: true,
        showFachrichtung: false,
        showWebsiteUrl: true,
        showStandort: false,
        showBeworbeneLeistungen: false,
        showGoogleAdsErfahrung: false,
        showGoogleAdsAktiv: true,
        showWerbebudget: true,
        showNachricht: false,
      };
    case "kombi":
      return {
        showPraxisname: true,
        showFachrichtung: true,
        showWebsiteUrl: true,
        showStandort: false,
        showBeworbeneLeistungen: false,
        showGoogleAdsErfahrung: false,
        showGoogleAdsAktiv: false,
        showWerbebudget: false,
        showNachricht: true,
      };
    case "website":
      return {
        showPraxisname: true,
        showFachrichtung: true,
        showWebsiteUrl: true,
        showStandort: true,
        showBeworbeneLeistungen: false,
        showGoogleAdsErfahrung: false,
        showGoogleAdsAktiv: false,
        showWerbebudget: false,
        showNachricht: true,
      };
    default:
      return {
        showPraxisname: true,
        showFachrichtung: true,
        showWebsiteUrl: true,
        showStandort: true,
        showBeworbeneLeistungen: false,
        showGoogleAdsErfahrung: false,
        showGoogleAdsAktiv: false,
        showWerbebudget: false,
        showNachricht: true,
      };
  }
}
