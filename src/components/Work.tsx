import Eyebrow from "./Eyebrow";

const PROGRESS_ROWS = [
  { label: "Research", left: 0, width: 18, color: "bg-gold" },
  { label: "Design sys", left: 15, width: 26, color: "bg-gold/80" },
  { label: "Build", left: 34, width: 44, color: "bg-gold/55" },
  { label: "QA", left: 70, width: 16, color: "bg-cream/[0.42]" },
  { label: "SEO & ads", left: 82, width: 18, color: "bg-gold" },
];

const SECONDARY_CASES = [
  {
    date: "Feb 2026",
    title: "Kestrel Supply — B2B platform & demand-gen programme",
    description:
      "Replatformed a 400-page industrial catalogue onto a headless CMS and ran the first two quarters of technical SEO and paid search behind it. Migration shipped with redirects mapped one to one, so rankings held through the switch.",
    stats: [
      { label: "Organic traffic", value: "+118%" },
      { label: "Qualified leads", value: "3.2×" },
      { label: "Duration", value: "16 wks" },
    ],
  },
  {
    date: "Oct 2025",
    title: "Studio Marrow — rescue of a stalled SaaS build",
    description:
      "Taken over at month seven of a four-month project. Two-week audit, scope cut by a third, a re-baselined plan the client agreed to in writing, and a live release nine weeks later.",
    stats: [
      { label: "Scope reduced", value: "−34%" },
      { label: "To launch", value: "9 wks" },
      { label: "Budget saved", value: "₹18L" },
    ],
  },
];

export default function Work() {
  return (
    <section
      id="work"
      aria-labelledby="work-h"
      className="mx-auto max-w-[1180px] px-[clamp(20px,4vw,40px)] py-[clamp(64px,9vw,104px)]"
    >
      <div className="mb-[60px] flex max-w-[760px] flex-col gap-[18px]">
        <Eyebrow className="text-ink">Selected work</Eyebrow>
        <h2
          id="work-h"
          className="font-display text-[clamp(30px,4vw,46px)] font-normal leading-[1.12] tracking-[-0.012em] text-ink"
        >
          Most recent delivery.
        </h2>
        <p className="max-w-[62ch] text-[15px] leading-[1.8] text-ink/[0.74]">
          One project in detail, then two more from the last eighteen
          months. Names and numbers shared with client permission.
        </p>
      </div>

      <div className="border border-ink/[0.16] bg-card">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,340px),1fr))]">
          <div className="flex flex-col gap-3.5 p-[clamp(26px,3.4vw,44px)]">
            <span className="self-start bg-gold px-3.5 py-[7px] text-[10px] font-medium uppercase tracking-[0.14em] text-ink">
              Latest · Shipped June 2026
            </span>
            <h3 className="mt-2 font-display text-[clamp(24px,3vw,32px)] font-medium leading-[1.18] text-ink">
              Northbay Health — booking platform rebuild &amp; launch
              campaign
            </h3>
            <div className="text-[10px] font-medium uppercase leading-[1.7] tracking-[0.14em] text-ink/50">
              UI/UX · Web development · Growth marketing · 22 weeks · Team
              of 9
            </div>
            <p className="mt-1.5 text-[15px] leading-[1.8] text-ink/[0.78]">
              A clinic group with eleven locations was losing bookings to a
              checkout that took nine steps. I ran the full rebuild —
              research, design system, React front end, integration with
              their practice management system — then the SEO and paid
              launch on top of it. Two agencies, four freelancers and an
              in-house team, one schedule, one weekly status.
            </p>
            <div className="mt-3 grid grid-cols-3 gap-[18px] border-t border-ink/[0.16] pt-[26px]">
              <div className="flex flex-col gap-2">
                <span className="font-cinzel text-[30px] font-medium leading-none text-ink">
                  +64%
                </span>
                <span className="text-[9.5px] font-medium uppercase tracking-[0.14em] text-ink/[0.52]">
                  Online bookings
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-cinzel text-[30px] font-medium leading-none text-ink">
                  −41%
                </span>
                <span className="text-[9.5px] font-medium uppercase tracking-[0.14em] text-ink/[0.52]">
                  Cost per acquisition
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-cinzel text-[30px] font-medium leading-none text-ink">
                  0
                </span>
                <span className="text-[9.5px] font-medium uppercase tracking-[0.14em] text-ink/[0.52]">
                  Days past deadline
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-3 bg-ink p-[34px]">
            {PROGRESS_ROWS.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-[78px_1fr] items-center gap-3"
              >
                <span className="text-[9px] font-medium uppercase tracking-[0.12em] text-cream/55">
                  {row.label}
                </span>
                <span className="relative block h-[11px] bg-cream/[0.08]">
                  <span
                    className={`absolute top-0 h-full ${row.color}`}
                    style={{ left: `${row.left}%`, width: `${row.width}%` }}
                  />
                </span>
              </div>
            ))}
            <div className="mt-3.5 border-t border-cream/[0.16] pt-4 text-[9.5px] font-medium uppercase leading-[1.8] tracking-[0.13em] text-cream/45">
              22 weeks planned · 22 weeks actual · 3% under budget
            </div>
          </div>
        </div>

        <div className="flex items-start gap-[18px] border-t border-ink/[0.16] p-[clamp(24px,3vw,32px)] px-[clamp(26px,3.4vw,44px)]">
          <span className="flex-none font-display text-[46px] leading-[0.8] text-gold">
            &ldquo;
          </span>
          <blockquote className="flex flex-col gap-3">
            <span className="font-display text-xl italic leading-[1.55] text-ink/[0.88]">
              We&apos;d already failed this rebuild once with another team.
              The difference the second time was that somebody told us on a
              Friday when something had slipped, instead of on the Monday it
              was due.
            </span>
            <cite className="text-[10px] font-medium not-italic uppercase tracking-[0.14em] text-ink/50">
              Priya Raghunathan · Operations Director, Northbay Health
            </cite>
          </blockquote>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] gap-6">
        {SECONDARY_CASES.map((item) => (
          <div
            key={item.title}
            className="flex flex-col gap-3 border border-ink/[0.16] bg-card p-[34px]"
          >
            <div className="flex items-center justify-between gap-3 text-[10px] font-medium uppercase tracking-[0.14em] text-ink/50">
              <span>{item.date}</span>
              <span className="border border-ink/30 px-[11px] py-[5px] text-ink">
                Delivered
              </span>
            </div>
            <h3 className="mt-1.5 font-display text-[25px] font-medium leading-[1.2] text-ink">
              {item.title}
            </h3>
            <p className="text-[14.5px] leading-[1.8] text-ink/[0.76]">
              {item.description}
            </p>
            <div className="mt-2.5 grid grid-cols-3 gap-3.5 border-t border-ink/[0.16] pt-[22px]">
              {item.stats.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1.5">
                  <span className="text-[9px] font-medium uppercase tracking-[0.13em] text-ink/[0.48]">
                    {stat.label}
                  </span>
                  <span className="font-cinzel text-[22px] font-medium leading-none text-ink">
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
