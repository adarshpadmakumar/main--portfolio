"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";

export default function CalendlyEmbed() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: "600px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ minWidth: "320px", height: "700px" }}>
      {visible && (
        <>
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/adarshpk-51/30min?background_color=0f2e23&text_color=f4f1f1&primary_color=f5f1e8"
            style={{ minWidth: "320px", height: "700px" }}
          />
          <Script
            src="https://assets.calendly.com/assets/external/widget.js"
            strategy="lazyOnload"
          />
        </>
      )}
    </div>
  );
}
