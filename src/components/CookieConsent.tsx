"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Script from "next/script";
import {
  NOTICE_KEY,
  OPEN_PREFERENCES_EVENT,
  NOTICE_DISMISSED_EVENT,
} from "@/lib/cookie-notice";

const GA_MEASUREMENT_ID = "G-0ED5L9DVY8";
const CLARITY_PROJECT_ID = "y3cjx31stt";

export default function CookieConsent() {
  const [bannerOpen, setBannerOpen] = useState(false);

  useEffect(() => {
    // Reads localStorage (an external system) on mount; can't be done
    // during render since it isn't available server-side.
    const dismissed = window.localStorage.getItem(NOTICE_KEY);
    if (dismissed !== "true") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setBannerOpen(true);
    }

    const openPreferences = () => setBannerOpen(true);
    window.addEventListener(OPEN_PREFERENCES_EVENT, openPreferences);
    return () =>
      window.removeEventListener(OPEN_PREFERENCES_EVENT, openPreferences);
  }, []);

  function dismiss() {
    window.localStorage.setItem(NOTICE_KEY, "true");
    setBannerOpen(false);
    window.dispatchEvent(new Event(NOTICE_DISMISSED_EVENT));
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
      <Script id="microsoft-clarity" strategy="afterInteractive">
        {`
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "${CLARITY_PROJECT_ID}");
        `}
      </Script>

      {bannerOpen && (
        <div
          role="dialog"
          aria-label="Cookie notice"
          aria-describedby="cookie-notice-text"
          className="fixed inset-x-0 bottom-0 z-[300] border-t border-gold/30 bg-ink-dark text-cream"
        >
          <div className="mx-auto flex max-w-[1180px] flex-col items-start gap-4 px-[clamp(20px,4vw,40px)] py-6 sm:flex-row sm:items-center sm:justify-between">
            <p
              id="cookie-notice-text"
              className="max-w-[62ch] text-[13px] leading-[1.7] text-cream/80"
            >
              This site uses analytics cookies (Google Analytics and
              Microsoft Clarity) to understand how visitors use it. See the{" "}
              <Link href="/cookie-policy" className="text-gold underline">
                Cookie Policy
              </Link>{" "}
              for details.
            </p>
            <div className="flex flex-none items-center gap-3">
              <button
                type="button"
                onClick={dismiss}
                className="inline-flex min-h-11 items-center rounded-2xl bg-gold px-6 py-3 text-[10px] font-medium uppercase tracking-[0.16em] text-ink hover:bg-gold-light"
              >
                Got it
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
