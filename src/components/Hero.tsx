import Link from "next/link";

const TAGS = [
  "Website design & development",
  "UI/UX",
  "SaaS delivery",
  "AI & automation",
  "SEO growth",
  "Project rescue",
];

const STATS = [
  { value: "140", suffix: "+", label: "Projects\nshipped" },
  { value: "60", suffix: "+", label: "Web & UI/UX\nbuilds" },
  { value: "25", suffix: "+", label: "SaaS & enterprise\nplatforms" },
  { value: "18", suffix: "+", label: "AI & automation\nrollouts" },
];

export default function Hero() {
  return (
    <main
      id="home"
      className="bg-ink py-[clamp(56px,8vw,96px)] pb-[clamp(48px,7vw,84px)] text-cream"
    >
      <div className="mx-auto grid max-w-[1180px] grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] items-center gap-[clamp(36px,5vw,64px)] px-[clamp(20px,4vw,40px)]">
        <div className="flex flex-col gap-[26px]">
          <div className="flex items-center gap-3.5 text-[10px] font-medium uppercase tracking-[0.22em] text-gold">
            <span className="h-px w-[26px] bg-gold" />
            Freelance project manager · Bengaluru · Working worldwide
          </div>
          <h1 className="text-pretty font-display text-[clamp(34px,5.2vw,60px)] font-normal leading-[1.08] tracking-[-0.015em] text-cream">
            Freelance project manager for{" "}
            <em className="italic text-gold">web, UI/UX, SaaS and AI</em>{" "}
            projects.
          </h1>
          <p className="max-w-[56ch] text-base leading-[1.75] text-cream/[0.82]">
            I&apos;m Adarsh P Kumar. I run website design and development, UI/UX,
            SaaS, enterprise, SEO growth, branding and AI automation projects
            end to end — scope, schedule, budget and launch.{" "}
            <span className="font-medium text-cream">
              140+ projects shipped, 13 years of delivery, 98% client
              retention.
            </span>
          </p>
          <div className="flex flex-wrap gap-2">
            {TAGS.map((tag) => (
              <span
                key={tag}
                className="border border-cream/[0.24] px-3 py-[7px] text-[9.5px] font-medium uppercase tracking-[0.12em] text-cream/[0.78]"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 pt-1">
            <Link
              href="#contact"
              className="inline-flex min-h-12 items-center bg-gold px-[26px] py-4 text-[11px] font-medium uppercase tracking-[0.16em] text-ink hover:bg-gold-light"
            >
              Get a free project quote →
            </Link>
            <Link
              href="#work"
              className="inline-flex min-h-12 items-center border border-cream/[0.42] px-6 py-4 text-[11px] font-medium uppercase tracking-[0.16em] text-cream hover:border-gold"
            >
              See case studies →
            </Link>
          </div>
          <div className="flex flex-wrap gap-[22px] text-[10px] font-medium uppercase tracking-[0.14em] text-cream/[0.55]">
            <span>Reply within 1 working day</span>
            <span>Fixed-fee or retainer</span>
            <span>Clients in IN · US · UK · UAE · AU</span>
          </div>
          <div className="mt-3 grid grid-cols-[repeat(auto-fit,minmax(132px,1fr))] gap-x-7 gap-y-6 border-t border-cream/[0.18] pt-[26px]">
            {STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-[9px]">
                <span className="font-cinzel text-[34px] font-medium leading-none text-cream">
                  {stat.value}
                  <span className="text-gold">{stat.suffix}</span>
                </span>
                <span className="whitespace-pre-line text-[9.5px] font-medium uppercase leading-[1.7] tracking-[0.13em] text-cream/[0.52]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-[18px]">
          <div
            role="img"
            aria-label="Wireframe of a shipped booking interface built on a 34-component design system."
            className="border border-gold/30 bg-ink-dark/[0.55]"
          >
            <div className="flex items-center gap-2.5 border-b border-cream/[0.14] px-[18px] py-[13px]">
              <span className="h-2 w-2 rounded-full bg-cream/[0.28]" />
              <span className="h-2 w-2 rounded-full bg-cream/[0.28]" />
              <span className="h-2 w-2 rounded-full bg-gold" />
              <span className="ml-2 flex-1 border border-cream/[0.16] px-3 py-[5px] text-[9.5px] font-medium uppercase tracking-[0.12em] text-cream/50">
                northbay.health / booking
              </span>
            </div>
            <div className="grid grid-cols-[1.35fr_1fr] gap-[18px] px-[18px] py-[22px]">
              <div className="flex flex-col gap-[9px]">
                <span className="block h-3 w-[62%] bg-gold/75" />
                <span className="block h-[7px] w-[88%] bg-cream/20" />
                <span className="block h-[7px] w-[74%] bg-cream/[0.14]" />
                <span className="mt-1.5 block h-[26px] w-[40%] border border-gold" />
              </div>
              <div className="flex flex-col gap-2">
                <span className="block h-[46px] border border-cream/[0.12] bg-cream/[0.08]" />
                <div className="grid grid-cols-2 gap-2">
                  <span className="block h-[26px] border border-cream/[0.12] bg-cream/[0.06]" />
                  <span className="block h-[26px] border border-cream/[0.12] bg-cream/[0.06]" />
                </div>
              </div>
            </div>
            <div className="flex justify-between gap-2.5 border-t border-cream/[0.14] px-[18px] py-[11px] text-[9px] font-medium uppercase tracking-[0.14em] text-cream/[0.42]">
              <span>Design system · 34 components</span>
              <span className="text-gold">Shipped</span>
            </div>
          </div>

          <div className="flex flex-col gap-4 border border-gold/30 bg-ink-dark/[0.55] px-[18px] py-[22px]">
            <div className="flex items-center justify-between gap-3">
              <span className="text-[9.5px] font-medium uppercase tracking-[0.18em] text-cream/[0.62]">
                AI workflow · in production
              </span>
              <span className="border border-gold/50 px-[11px] py-[5px] text-[9px] font-medium uppercase tracking-[0.14em] text-gold">
                Live
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {["Intake", "Classify", "Draft"].map((step) => (
                <span key={step} className="contents">
                  <span className="border border-cream/20 px-[11px] py-2 text-[9px] font-medium uppercase tracking-[0.1em] text-cream/[0.78]">
                    {step}
                  </span>
                  <span className="text-xs text-gold">→</span>
                </span>
              ))}
              <span className="border border-gold px-[11px] py-2 text-[9px] font-medium uppercase tracking-[0.1em] text-gold">
                Human review
              </span>
            </div>
            <div className="grid grid-cols-3 gap-3.5 border-t border-cream/[0.14] pt-3.5">
              <div className="flex flex-col gap-1.5">
                <span className="font-cinzel text-[22px] font-medium leading-none text-cream">
                  72%
                </span>
                <span className="text-[8.5px] font-medium uppercase leading-[1.6] tracking-[0.13em] text-cream/45">
                  Manual steps
                  <br />
                  removed
                </span>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="font-cinzel text-[22px] font-medium leading-none text-cream">
                  4 wks
                </span>
                <span className="text-[8.5px] font-medium uppercase leading-[1.6] tracking-[0.13em] text-cream/45">
                  Pilot to
                  <br />
                  production
                </span>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="font-cinzel text-[22px] font-medium leading-none text-cream">
                  100%
                </span>
                <span className="text-[8.5px] font-medium uppercase leading-[1.6] tracking-[0.13em] text-cream/45">
                  Customer output
                  <br />
                  reviewed
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
