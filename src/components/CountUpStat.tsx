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
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();

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
      className={`flex flex-col ${big ? "items-center gap-3 text-center" : "gap-[9px]"}`}
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
        className={`whitespace-pre-line font-medium uppercase text-cream/[0.52] ${
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
