"use client";

import { useEffect } from "react";

export function ScrollToTop() {
  useEffect(() => {
    // Force scroll to top immediately when the component mounts
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return null;
}
