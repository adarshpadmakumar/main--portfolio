const CHART_POINTS = [
  [0, 78],
  [40, 70],
  [80, 74],
  [120, 58],
  [160, 50],
  [200, 30],
  [240, 14],
] as const;

const BASELINE_Y = 88;
const LINE_PATH = `M${CHART_POINTS.map((p) => p.join(",")).join(" L")}`;
const AREA_PATH = `${LINE_PATH} L240,${BASELINE_Y} L0,${BASELINE_Y} Z`;
const [endX, endY] = CHART_POINTS[CHART_POINTS.length - 1];

const STATS = [
  { label: "Organic clicks", value: "+28.4%" },
  { label: "Avg. CTR", value: "3.49%" },
  { label: "Add'l clicks", value: "2,075+" },
];

export default function AboutIllustration() {
  return (
    <div
      role="img"
      aria-label="Miniature SEO analytics dashboard showing organic traffic trending upward, with click and CTR stats"
      className="group mt-2 flex flex-1"
    >
      <div className="flex h-full w-full flex-col gap-4 rounded-2xl border border-ink/[0.16] p-5 transition-colors duration-500 group-hover:border-gold/50">
        <div className="flex items-center justify-between gap-3">
          <span className="text-[9px] font-medium uppercase tracking-[0.18em] text-ink/50">
            SEO performance
          </span>
          <span className="rounded-full border border-gold/50 px-[9px] py-[3px] text-[9px] font-medium uppercase tracking-[0.12em] text-gold">
            ↑ Trending up
          </span>
        </div>

        <div className="flex flex-1 flex-col justify-center gap-2">
          <svg viewBox="0 0 240 92" className="w-full" aria-hidden="true">
            <defs>
              <linearGradient id="seo-chart-fill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
              </linearGradient>
            </defs>

            {[20, 44, 68].map((y) => (
              <line
                key={y}
                x1="0"
                y1={y}
                x2="240"
                y2={y}
                stroke="#0F2E23"
                strokeOpacity="0.1"
              />
            ))}

            <path d={AREA_PATH} fill="url(#seo-chart-fill)" />
            <path
              d={LINE_PATH}
              fill="none"
              stroke="#D4AF37"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <line
              y1="8"
              y2={BASELINE_Y}
              stroke="#D4AF37"
              strokeWidth="1"
              className="motion-safe:animate-[scan-line_3.2s_ease-in-out_infinite]"
            />

            <circle
              cx={endX}
              cy={endY}
              r="3.5"
              fill="#D4AF37"
              className="motion-safe:animate-[node-pulse_2.4s_ease-in-out_infinite]"
              style={{ transformBox: "fill-box", transformOrigin: "center" }}
            />
          </svg>

          <div className="flex justify-between text-[7.5px] font-medium uppercase tracking-[0.14em] text-ink/40">
            <span>May</span>
            <span>Jun</span>
            <span>Jul</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 border-t border-ink/[0.12] pt-3.5">
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <span className="font-cinzel text-[15px] font-medium leading-none text-ink">
                {stat.value}
              </span>
              <span className="text-[7.5px] font-medium uppercase leading-[1.5] tracking-[0.1em] text-ink/45">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
