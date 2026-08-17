"use client";

import { useEffect, useRef, useState } from "react";

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

export default function CountUpStat({
  value,
  suffix = "",
  label,
  duration = 1400,
  big = false,
}: {
  value: number;
  suffix?: string;
  label: string;
  duration?: number;
  big?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  // Always renders the real value by default so a visitor never sees "0"
  // if the animation below never triggers (fast scroll, reduced motion,
  // or an IntersectionObserver that never fires). The count-up is a
  // progressive-enhancement flourish layered on top, not a requirement.
  const [count, setCount] = useState(value);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            setCount(0);

            const tick = (now: number) => {
              const progress = Math.min((now - start) / duration, 1);
              setCount(Math.round(value * easeOutCubic(progress)));
              if (progress < 1) requestAnimationFrame(tick);
            };

            requestAnimationFrame(tick);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <div
      ref={ref}
      className={`flex min-w-0 flex-col ${big ? "items-center gap-3 text-center" : "gap-[9px]"}`}
    >
      <span
        className={`font-cinzel font-medium leading-none text-cream tabular-nums ${
          big
            ? "text-[clamp(14px,3.3vw,46px)]"
            : "text-[clamp(22px,5vw,34px)]"
        }`}
      >
        {count}
        <span className="text-gold">{suffix}</span>
      </span>
      <span
        className={`w-full max-w-full whitespace-pre-line break-words font-medium uppercase text-cream/[0.52] ${
          big
            ? "text-[13px] leading-[1.7] tracking-[0.18em]"
            : "text-[9.5px] leading-[1.7] tracking-[0.13em]"
        }`}
      >
        {label}
      </span>
    </div>
  );
}
