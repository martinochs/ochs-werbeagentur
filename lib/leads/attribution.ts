const STORAGE_KEY = "ochs-lead-attribution";

const PAID_MEDIUMS = new Set(["cpc", "ppc", "paid", "paidsearch"]);

export type LeadAttribution = {
  isGoogleAds: boolean;
  gclid: string;
  utmCampaign: string;
};

const emptyAttribution: LeadAttribution = {
  isGoogleAds: false,
  gclid: "",
  utmCampaign: "",
};

function fromSearch(search: string): LeadAttribution | null {
  const params = new URLSearchParams(search);
  const gclid = (params.get("gclid") || params.get("gbraid") || params.get("wbraid") || "").trim();
  const utmSource = (params.get("utm_source") || "").trim().toLowerCase();
  const utmMedium = (params.get("utm_medium") || "").trim().toLowerCase();
  const utmCampaign = (params.get("utm_campaign") || "").trim();
  const isGoogleAds = Boolean(gclid) || (utmSource === "google" && PAID_MEDIUMS.has(utmMedium));

  if (!isGoogleAds) return null;

  return { isGoogleAds: true, gclid, utmCampaign };
}

function readStored(): LeadAttribution | null {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<LeadAttribution>;
    if (!parsed.isGoogleAds) return null;
    return {
      isGoogleAds: true,
      gclid: typeof parsed.gclid === "string" ? parsed.gclid : "",
      utmCampaign: typeof parsed.utmCampaign === "string" ? parsed.utmCampaign : "",
    };
  } catch {
    return null;
  }
}

/** Erkennt einen Google-Ads-Klick an gclid bzw. utm und merkt ihn für diesen Tab. */
export function getLeadAttribution(): LeadAttribution {
  if (typeof window === "undefined") return emptyAttribution;

  const fromUrl = fromSearch(window.location.search);
  if (fromUrl) {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(fromUrl));
    } catch {
      // Der Tab kann die Herkunft nicht speichern; der aktuelle Aufruf bleibt gültig.
    }
    return fromUrl;
  }

  return readStored() ?? emptyAttribution;
}
