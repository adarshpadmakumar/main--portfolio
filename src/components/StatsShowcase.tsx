import CountUpStat from "./CountUpStat";
import Eyebrow from "./Eyebrow";

const STATS = [
  { value: 140, suffix: "+", label: "Projects\nshipped" },
  { value: 60, suffix: "+", label: "Web & UI/UX\nbuilds" },
  { value: 25, suffix: "+", label: "SaaS & enterprise\nplatforms" },
  { value: 18, suffix: "+", label: "AI & automation\nrollouts" },
];

export default function StatsShowcase() {
  return (
    <section className="bg-ink px-[clamp(20px,4vw,40px)] pt-6 pb-10 text-cream">
      <div className="mx-auto w-full max-w-[1180px]">
        <div className="mb-10 flex max-w-[680px] flex-col gap-4">
          <Eyebrow className="text-gold">Track record</Eyebrow>
          <h2 className="font-display text-[clamp(11px,1.8vw,20px)] font-normal leading-[1.1] tracking-[-0.015em] text-cream">
            Thirteen years, four numbers that matter.
          </h2>
        </div>
        <div className="border-t border-cream/[0.18] pt-10">
          <div className="grid grid-cols-4 gap-x-4 gap-y-10 sm:gap-x-10 lg:gap-x-16">
            {STATS.map((stat) => (
              <CountUpStat
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                big
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
