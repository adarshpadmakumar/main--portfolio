"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Script from "next/script";

const GA_MEASUREMENT_ID = "G-0ED5L9DVY8";
const CLARITY_PROJECT_ID = "y3cjx31stt";
const CONSENT_KEY = "cookie-consent";
const OPEN_PREFERENCES_EVENT = "open-cookie-preferences";

type Consent = "accepted" | "rejected";

export default function CookieConsent() {
  const [consent, setConsent] = useState<Consent | null>(null);
  const [bannerOpen, setBannerOpen] = useState(false);

  useEffect(() => {
    // Reads localStorage (an external system) on mount; can't be done
    // during render since it isn't available server-side.
    const stored = window.localStorage.getItem(CONSENT_KEY);
    if (stored === "accepted" || stored === "rejected") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setConsent(stored);
    } else {
      setBannerOpen(true);
    }

    const openPreferences = () => setBannerOpen(true);
    window.addEventListener(OPEN_PREFERENCES_EVENT, openPreferences);
    return () =>
      window.removeEventListener(OPEN_PREFERENCES_EVENT, openPreferences);
  }, []);

  function choose(value: Consent) {
    window.localStorage.setItem(CONSENT_KEY, value);
    setConsent(value);
    setBannerOpen(false);
  }

  return (
    <>
      {consent === "accepted" && (
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
        </>
      )}

      {bannerOpen && (
        <div
          role="dialog"
          aria-label="Cookie consent"
          aria-describedby="cookie-consent-text"
          className="fixed inset-x-0 bottom-0 z-[300] border-t border-gold/30 bg-ink-dark text-cream"
        >
          <div className="mx-auto flex max-w-[1180px] flex-col items-start gap-4 px-[clamp(20px,4vw,40px)] py-6 sm:flex-row sm:items-center sm:justify-between">
            <p
              id="cookie-consent-text"
              className="max-w-[62ch] text-[13px] leading-[1.7] text-cream/80"
            >
              This site uses cookies for analytics (Google Analytics and
              Microsoft Clarity) to understand how visitors use it. No
              analytics cookies are set until you accept. See the{" "}
              <Link href="/cookie-policy" className="text-gold underline">
                Cookie Policy
              </Link>{" "}
              for details.
            </p>
            <div className="flex flex-none items-center gap-3">
              <button
                type="button"
                onClick={() => choose("rejected")}
                className="inline-flex min-h-11 items-center rounded-2xl border border-cream/[0.42] px-5 py-3 text-[10px] font-medium uppercase tracking-[0.16em] text-cream hover:border-gold"
              >
                Reject
              </button>
              <button
                type="button"
                onClick={() => choose("accepted")}
                className="inline-flex min-h-11 items-center rounded-2xl bg-gold px-6 py-3 text-[10px] font-medium uppercase tracking-[0.16em] text-ink hover:bg-gold-light"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
