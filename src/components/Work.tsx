import Image from "next/image";
import Eyebrow from "./Eyebrow";

const FEATURED_RESULTS = [
  "+10.1% organic clicks vs June, +28.4% vs May — the strongest month in the 2-month window.",
  "3.49% avg. CTR, up 0.20 pts, with 65.5% organic engagement rate.",
  "2,075+ additional monthly clicks identified via CTR fixes alone, no ranking change needed.",
  "10,587 clicks from India, led by strong local demand out of Kochi and Thrissur — the core Kerala market showing consistent month-on-month growth.",
];

const SECONDARY_CASES = [
  {
    date: "Oct 2025",
    status: "Delivered",
    title: "SIMS Capital — financial services site design & development",
    description:
      "SIMS Capital, an RBI-registered NBFC in Palakkad offering gold loans, mortgage, personal, and vehicle loans plus NCD investments, had no functioning site to bring customers online. Designed and built one from scratch — a live gold-rate ticker, an interactive loan calculator, and a full product and application flow across five loan types — taking them from zero digital presence to a working acquisition channel.",
    stats: [
      { label: "Digital presence", value: "0 → Live" },
      { label: "Service pages shipped", value: "10" },
      { label: "Duration", value: "2 mo" },
    ],
    image: "/work/sims-capital.jpeg",
  },
  {
    date: "Aug 2026",
    status: "Active",
    title:
      "MBI Lifestyle — redesign & redevelopment of a legacy WooCommerce site",
    description:
      "MBI Lifestyle, a 12-year-old ISO-certified acoustic panel manufacturer, was running a dated WooCommerce catalogue across nine product lines. A full audit, redesign and rebuild are underway — case study details and results to follow at launch.",
    stats: null,
    image: "/work/mbi-lifestyle.jpeg",
  },
];

export default function Work() {
  return (
    <section
      id="work"
      aria-labelledby="work-h"
      className="mx-auto max-w-[1180px] px-[clamp(20px,4vw,40px)] pt-[clamp(64px,9vw,104px)] pb-10"
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
        <div className="group grid grid-cols-[repeat(auto-fit,minmax(min(100%,340px),1fr))]">
          <div className="flex flex-col gap-3.5 p-[clamp(26px,3.4vw,44px)]">
            <span className="self-start bg-gold px-3.5 py-[7px] text-[10px] font-medium uppercase tracking-[0.14em] text-ink">
              Latest · July 2026
            </span>
            <h3 className="mt-2 font-display text-[clamp(24px,3vw,32px)] font-medium leading-[1.18] text-ink">
              Atreya Hospital — SEO performance audit &amp; growth roadmap
            </h3>
            <div className="text-[10px] font-medium uppercase leading-[1.7] tracking-[0.14em] text-ink/50">
              Growth marketing (SEO) · 30-day roadmap · Thrissur, Kerala
            </div>
            <p className="mt-1.5 text-[15px] leading-[1.8] text-ink/[0.78]">
              Ran the July 2026 SEO performance audit for Atreya Hospital, a
              NABH-accredited multispeciality hospital in Thrissur, pulling
              data across Search Console and GA4 to diagnose why a
              strong-traffic month was converting almost nobody. Delivered a
              root-cause analysis on a late-July traffic dip, flagged the
              technical debt suppressing performance, and built a 30-day
              action roadmap with quick-win fixes this week, structural
              fixes this month, and the case for a full site rebuild.
            </p>
            <ul className="mt-3 flex flex-col gap-2.5 border-t border-ink/[0.16] pt-[26px]">
              {FEATURED_RESULTS.map((result) => (
                <li key={result} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-gold" />
                  <span className="text-sm leading-[1.7] text-ink/80">
                    {result}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative min-h-[360px] overflow-hidden bg-ink">
            <Image
              src="/work/atreya-gsc.jpeg"
              alt="Google Search Console performance report for the Atreya Hospital SEO audit"
              fill
              className="object-cover object-top"
              sizes="(min-width: 1024px) 560px, 100vw"
            />
            <Image
              src="/work/atreya-ga4.jpeg"
              alt="Google Analytics 4 dashboard for the Atreya Hospital SEO audit"
              fill
              className="object-cover object-top opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              sizes="(min-width: 1024px) 560px, 100vw"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent p-[18px] text-[9.5px] font-medium uppercase tracking-[0.13em] text-cream/80">
              <span className="transition-opacity duration-500 group-hover:opacity-0">
                Search Console
              </span>
              <span className="absolute bottom-[18px] left-[18px] opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                Google Analytics 4
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] gap-6">
        {SECONDARY_CASES.map((item) => (
          <div key={item.title} className="group [perspective:1500px]">
            <div className="relative h-[500px] transition-transform duration-700 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 flex flex-col gap-3 overflow-hidden border border-ink/[0.16] bg-card p-[34px] [backface-visibility:hidden]">
                <div className="flex items-center justify-between gap-3 text-[10px] font-medium uppercase tracking-[0.14em] text-ink/50">
                  <span>{item.date}</span>
                  <span
                    className={
                      item.status === "Active"
                        ? "border border-gold/50 px-[11px] py-[5px] text-gold"
                        : "border border-ink/30 px-[11px] py-[5px] text-ink"
                    }
                  >
                    {item.status}
                  </span>
                </div>
                <h3 className="mt-1.5 font-display text-[25px] font-medium leading-[1.2] text-ink">
                  {item.title}
                </h3>
                <p className="text-[14.5px] leading-[1.8] text-ink/[0.76]">
                  {item.description}
                </p>
                {item.stats && (
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
                )}
                <span className="mt-auto text-[9.5px] font-medium uppercase tracking-[0.14em] text-ink/40">
                  Hover to see the site →
                </span>
              </div>

              <div className="absolute inset-0 overflow-hidden border border-ink/[0.16] [backface-visibility:hidden] [transform:rotateY(180deg)]">
                <Image
                  src={item.image}
                  alt={`${item.title} — website screenshot`}
                  fill
                  className="object-cover object-top"
                  sizes="(min-width: 1024px) 560px, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-[34px]">
                  <span className="text-[13px] font-medium leading-[1.4] text-cream">
                    {item.title}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
