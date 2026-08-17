"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/site-config";
import { trackEvent } from "@/lib/analytics";
import {
  NOTICE_KEY,
  OPEN_PREFERENCES_EVENT,
  NOTICE_DISMISSED_EVENT,
} from "@/lib/cookie-notice";

export default function WhatsAppWidget() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Reads localStorage (an external system) on mount; can't be done
    // during render since it isn't available server-side. Stays hidden
    // while the cookie notice is open so the two floating elements
    // never overlap.
    const dismissed = window.localStorage.getItem(NOTICE_KEY);
    if (dismissed === "true") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setVisible(true);
    }

    const onDismissed = () => setVisible(true);
    const onReopened = () => setVisible(false);
    window.addEventListener(NOTICE_DISMISSED_EVENT, onDismissed);
    window.addEventListener(OPEN_PREFERENCES_EVENT, onReopened);
    return () => {
      window.removeEventListener(NOTICE_DISMISSED_EVENT, onDismissed);
      window.removeEventListener(OPEN_PREFERENCES_EVENT, onReopened);
    };
  }, []);

  if (!visible) return null;

  return (
    <a
      href={siteConfig.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent("whatsapp_widget_click")}
      aria-label="Chat on WhatsApp"
      className="group fixed right-5 bottom-5 z-[250] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-[0_8px_24px_-6px_rgba(0,0,0,0.45)] transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold sm:h-16 sm:w-16"
    >
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-60 motion-reduce:hidden" />
      <svg
        viewBox="0 0 32 32"
        className="relative h-7 w-7 sm:h-8 sm:w-8"
        fill="#FFFFFF"
        aria-hidden="true"
      >
        <path d="M16.004 3C9.096 3 3.49 8.605 3.49 15.512c0 2.36.657 4.58 1.8 6.47L3 29l7.19-2.246a12.44 12.44 0 0 0 5.814 1.457h.005c6.907 0 12.512-5.605 12.512-12.512C28.52 8.605 22.912 3 16.004 3Zm0 22.75h-.004a10.34 10.34 0 0 1-5.27-1.443l-.378-.224-3.917 1.224 1.245-3.816-.246-.392a10.31 10.31 0 0 1-1.582-5.487c0-5.71 4.646-10.356 10.357-10.356 2.766 0 5.365 1.079 7.322 3.037a10.28 10.28 0 0 1 3.032 7.325c0 5.71-4.647 10.132-10.559 10.132Zm5.68-7.735c-.31-.155-1.84-.908-2.125-1.012-.285-.104-.492-.155-.699.155-.207.31-.802 1.012-.983 1.22-.181.207-.362.233-.673.078-.31-.155-1.31-.483-2.496-1.54-.923-.823-1.546-1.84-1.727-2.15-.181-.31-.02-.478.136-.633.14-.14.31-.362.465-.544.155-.181.207-.31.31-.517.104-.207.052-.388-.026-.543-.078-.155-.699-1.684-.958-2.306-.252-.606-.508-.524-.699-.534-.181-.008-.388-.01-.595-.01-.207 0-.543.078-.828.388-.284.31-1.087 1.063-1.087 2.592s1.113 3.007 1.268 3.215c.155.207 2.19 3.345 5.308 4.69.742.32 1.32.512 1.771.655.744.237 1.42.203 1.955.123.596-.089 1.84-.752 2.1-1.478.258-.725.258-1.347.181-1.478-.078-.13-.284-.207-.594-.362Z" />
      </svg>
    </a>
  );
}
