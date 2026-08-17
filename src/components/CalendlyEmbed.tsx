"use client";

import { useEffect } from "react";
import Script from "next/script";
import { trackEvent } from "@/lib/analytics";

export default function CalendlyEmbed() {
  useEffect(() => {
    function handleCalendlyMessage(event: MessageEvent) {
      if (
        event.origin === "https://calendly.com" &&
        typeof event.data === "object" &&
        event.data?.event === "calendly.event_scheduled"
      ) {
        trackEvent("booking_scheduled", { method: "calendly" });
      }
    }

    window.addEventListener("message", handleCalendlyMessage);
    return () => window.removeEventListener("message", handleCalendlyMessage);
  }, []);

  return (
    <>
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/adarshpk-51/30min?background_color=0f2e23&text_color=f4f1f1&primary_color=f5f1e8"
        style={{ minWidth: "320px", height: "700px" }}
      />
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />
    </>
  );
}
