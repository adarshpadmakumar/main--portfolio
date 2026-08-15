import Eyebrow from "./Eyebrow";

const ICON_PROPS = {
  width: 28,
  height: 28,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "#D4AF37",
  strokeWidth: 1.2,
  "aria-hidden": true,
} as const;

const SERVICES = [
  {
    title: "UI/UX design",
    description:
      "Research, user flows, wireframes, prototypes and design systems — run from brief to signed-off, developer-ready files with revision rounds capped and every decision logged.",
    tags: ["Research", "Prototypes", "Design systems"],
    icon: (
      <svg {...ICON_PROPS}>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 9h18M8 9v11" />
      </svg>
    ),
  },
  {
    title: "Web development",
    description:
      "Marketing sites, ecommerce and headless CMS builds delivered through sprints, QA gates and managed releases. Core Web Vitals and technical SEO are acceptance criteria, not afterthoughts.",
    tags: ["Sprints", "QA gates", "Releases"],
    icon: (
      <svg {...ICON_PROPS}>
        <path d="m8 6-6 6 6 6M16 6l6 6-6 6" />
      </svg>
    ),
  },
  {
    title: "Enterprise applications",
    description:
      "Internal tools, portals, system integrations and legacy migrations — run with change control, stakeholder sign-off gates and a cutover plan that survives contact with a real user base.",
    tags: ["Integrations", "Migrations", "Change control"],
    icon: (
      <svg {...ICON_PROPS}>
        <rect x="3" y="3" width="7.5" height="7.5" rx="1.4" />
        <rect x="13.5" y="3" width="7.5" height="7.5" rx="1.4" />
        <rect x="3" y="13.5" width="7.5" height="7.5" rx="1.4" />
        <rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.4" />
      </svg>
    ),
  },
  {
    title: "SaaS",
    description:
      "MVP to v2 delivery for SaaS products: roadmap, release trains, multi-tenant rollout and the post-launch iteration loop where most products quietly stall.",
    tags: ["MVP", "Roadmap", "Release trains"],
    icon: (
      <svg {...ICON_PROPS}>
        <ellipse cx="12" cy="6" rx="8" ry="3.2" />
        <path d="M4 6v6c0 1.8 3.6 3.2 8 3.2s8-1.4 8-3.2V6" />
        <path d="M4 12v6c0 1.8 3.6 3.2 8 3.2s8-1.4 8-3.2v-6" />
      </svg>
    ),
  },
  {
    title: "Growth marketing (SEO)",
    description:
      "Technical SEO, content programmes, paid campaigns and analytics run against one plan and one dashboard — so spend, rankings and pipeline sit on the same page instead of in four tools.",
    tags: ["Technical SEO", "Content", "Analytics"],
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M3 17l5-6 4 4 5-8 4 5" />
        <path d="M3 21h18" />
      </svg>
    ),
  },
  {
    title: "Branding",
    description:
      "Identity, naming, messaging and brand guidelines — plus the part most projects skip: rolling the new brand across every touchpoint that already exists, on a tracked schedule.",
    tags: ["Identity", "Messaging", "Rollout"],
    icon: (
      <svg {...ICON_PROPS}>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="3.4" />
        <path d="M12 3v5.6M12 15.4V21" />
      </svg>
    ),
  },
];

const AI_STEPS = ["Manual step", "Mapped", "Piloted", "Human review"];

export default function Services() {
  return (
    <section id="services" className="bg-ink text-cream">
      <div className="mx-auto max-w-[1180px] px-[clamp(20px,4vw,40px)] py-[clamp(64px,9vw,104px)]">
        <div className="mb-[60px] flex max-w-[760px] flex-col gap-[18px]">
          <Eyebrow className="text-gold">Services</Eyebrow>
          <h2 className="font-display text-[clamp(30px,4vw,46px)] font-normal leading-[1.12] tracking-[-0.012em] text-cream">
            Seven things I get hired to run.
          </h2>
          <p className="max-w-[62ch] text-[15px] leading-[1.8] text-cream/[0.76]">
            Most engagements combine two or three — a UI/UX phase feeding a
            web build, or a SaaS release followed by a growth programme. One
            schedule covers all of it.
          </p>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] gap-px border border-cream/[0.16] bg-cream/[0.16]">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="flex flex-col gap-3 bg-ink p-[34px] hover:bg-ink-mid"
            >
              {service.icon}
              <h3 className="mt-2 font-display text-2xl font-medium text-cream">
                {service.title}
              </h3>
              <p className="text-sm leading-[1.75] text-cream/[0.74]">
                {service.description}
              </p>
              <div className="mt-1.5 flex flex-wrap gap-[7px]">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-gold/30 px-2.5 py-[5px] text-[9px] font-medium uppercase tracking-[0.12em] text-gold/90"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}

          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] items-center gap-[clamp(24px,3vw,44px)] bg-ink-mid px-[34px] py-10 [grid-column:1/-1]">
            <div className="flex flex-col gap-3">
              <svg {...ICON_PROPS}>
                <circle cx="5.5" cy="6" r="2.4" />
                <circle cx="18.5" cy="6" r="2.4" />
                <circle cx="12" cy="18" r="2.4" />
                <path d="M5.5 8.4v3.2a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V8.4M12 13.6v2" />
              </svg>
              <h3 className="mt-2 font-display text-[28px] font-medium text-cream">
                AI &amp; automation
              </h3>
              <p className="max-w-[60ch] text-sm leading-[1.75] text-cream/[0.78]">
                Scoping and delivering AI features, internal copilots and
                workflow automation — from pilot to production, with
                evaluation criteria agreed up front and human review built
                into anything that touches a customer.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2.5">
              {AI_STEPS.map((step) => (
                <span key={step} className="contents">
                  <span className="border border-cream/[0.22] px-3 py-2.5 text-[9.5px] font-medium uppercase tracking-[0.12em] text-cream/80">
                    {step}
                  </span>
                  <span className="text-gold">→</span>
                </span>
              ))}
              <span className="border border-gold px-3 py-2.5 text-[9.5px] font-medium uppercase tracking-[0.12em] text-gold">
                In production
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
