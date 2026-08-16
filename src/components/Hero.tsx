import Link from "next/link";

const TAGS = [
  "Website design & development",
  "UI/UX",
  "SaaS delivery",
  "AI & automation",
  "SEO growth",
  "Project rescue",
];

export default function Hero() {
  return (
    <main
      id="home"
      className="bg-ink pt-[clamp(18px,2.4vw,36px)] pb-[clamp(32px,5vw,64px)] text-cream"
    >
      <div className="mx-auto grid max-w-[1180px] grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] items-center gap-[clamp(36px,5vw,64px)] px-[clamp(20px,4vw,40px)]">
        <div className="flex flex-col gap-5">
          <div className="text-[9px] font-medium uppercase tracking-[0.1em] text-gold sm:text-[10px] sm:tracking-[0.22em] sm:whitespace-nowrap">
            Freelance project manager · Bengaluru, India · Working worldwide
          </div>
          <h1 className="text-pretty font-display text-[clamp(30px,4.4vw,50px)] font-normal leading-[1.1] tracking-[-0.015em] text-cream">
            Freelance project manager for{" "}
            <em className="italic text-gold">web, UI/UX, SaaS, and AI</em>{" "}
            projects.
          </h1>
          <p className="max-w-[56ch] text-base leading-[1.65] text-cream/[0.82]">
            I&apos;m Adarsh P Kumar, a freelance project manager based in
            Bengaluru, India. I run end-to-end{" "}
            <span className="font-medium text-cream">
              Website design and development
            </span>
            , <span className="font-medium text-cream">UI/UX</span>,{" "}
            <span className="font-medium text-cream">SaaS</span>,{" "}
            <span className="font-medium text-cream">
              Enterprise application
            </span>
            , <span className="font-medium text-cream">SEO growth</span>,{" "}
            <span className="font-medium text-cream">Branding</span>, and{" "}
            <span className="font-medium text-cream">AI automation</span>{" "}
            projects, covering scope, schedule, budget, and launch.
            <span className="mt-2 block font-medium text-cream">
              With over 140 projects shipped and 13 years of delivery
              experience, I have a 98% client-retention rate.
            </span>
          </p>
          <div className="flex flex-wrap gap-2">
            {TAGS.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-cream/[0.24] px-4 py-[7px] text-[9.5px] font-medium uppercase tracking-[0.12em] text-cream/[0.78]"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 pt-1">
            <Link
              href="#contact"
              className="inline-flex min-h-12 items-center rounded-2xl bg-gold px-[26px] py-4 text-[11px] font-medium uppercase tracking-[0.16em] text-ink hover:bg-gold-light"
            >
              Book a 15 minute call →
            </Link>
            <Link
              href="#work"
              className="inline-flex min-h-12 items-center rounded-2xl border border-cream/[0.42] px-6 py-4 text-[11px] font-medium uppercase tracking-[0.16em] text-cream hover:border-gold"
            >
              See case studies →
            </Link>
          </div>
          <div className="flex flex-nowrap items-center gap-2.5 text-[8.5px] font-medium uppercase tracking-[0.06em] text-cream/[0.55] sm:gap-4 sm:text-[9px] sm:tracking-[0.1em] lg:gap-[22px] lg:text-[10px] lg:tracking-[0.14em]">
            <span className="flex-none whitespace-nowrap">
              Reply within 1 working day
            </span>
            <span className="flex-none whitespace-nowrap">
              Fixed-fee or retainer
            </span>
            <span className="flex-none whitespace-nowrap">
              Clients in IN · US · UK · UAE · AU
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div
            role="img"
            aria-label="Wireframe of the SIMS Capital loan calculator and application flow, built from scratch for the site relaunch."
            className="overflow-hidden rounded-2xl border border-gold/30 bg-ink-dark/[0.55]"
          >
            <div className="flex items-center gap-2.5 border-b border-cream/[0.14] px-[18px] py-[13px]">
              <span className="h-2 w-2 rounded-full bg-cream/[0.28]" />
              <span className="h-2 w-2 rounded-full bg-cream/[0.28]" />
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-gold opacity-75 motion-safe:animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
              </span>
              <span className="ml-2 flex-1 border border-cream/[0.16] px-3 py-[5px] text-[9.5px] font-medium uppercase tracking-[0.12em] text-cream/50">
                simscapital.in / loans
              </span>
            </div>
            <div className="grid grid-cols-[1.35fr_1fr] gap-[18px] px-[18px] py-[22px]">
              <div className="flex flex-col gap-[9px]">
                <span className="motion-safe:animate-pulse block h-3 w-[62%] bg-gold/75 [animation-duration:2.6s]" />
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
              <span>Live gold-rate ticker · Loan calculator</span>
              <span className="text-gold">Shipped</span>
            </div>
          </div>

          <div className="flex flex-col gap-4 rounded-2xl border border-gold/30 bg-ink-dark/[0.55] px-[18px] py-[22px]">
            <div className="flex items-center justify-between gap-3">
              <span className="text-[9.5px] font-medium uppercase tracking-[0.18em] text-cream/[0.62]">
                AI workflow · in production
              </span>
              <span className="flex items-center gap-[7px] rounded-full border border-gold/50 px-[11px] py-[5px] text-[9px] font-medium uppercase tracking-[0.14em] text-gold">
                <span className="relative flex h-[5px] w-[5px]">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-gold opacity-75 motion-safe:animate-ping" />
                  <span className="relative inline-flex h-[5px] w-[5px] rounded-full bg-gold" />
                </span>
                Live
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {["Intake", "Classify", "Draft"].map((step, i) => (
                <span key={step} className="contents">
                  <span className="rounded-full border border-cream/20 px-[11px] py-2 text-[9px] font-medium uppercase tracking-[0.1em] text-cream/[0.78]">
                    {step}
                  </span>
                  <span
                    className="motion-safe:animate-pulse text-xs text-gold [animation-duration:1.8s]"
                    style={{ animationDelay: `${i * 0.3}s` }}
                  >
                    →
                  </span>
                </span>
              ))}
              <span className="motion-safe:animate-[glow-pulse_2.4s_ease-in-out_infinite] rounded-full border border-gold px-[11px] py-2 text-[9px] font-medium uppercase tracking-[0.1em] text-gold">
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
