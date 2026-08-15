const FACTS = [
  {
    strong: "13 years of delivery experience",
    rest: " across agency-side and independent work, spanning UI/UX, web and enterprise development, SaaS, growth marketing, branding, and AI automation.",
  },
  {
    strong: "98% of freelance clients return",
    rest: " for a second project or move on to a retainer after the first engagement ends.",
  },
  {
    strong:
      "Every project gets a written scope, a weekly status note, and one named point of contact",
    rest: ", with no silent weeks and no surprise invoices.",
  },
];

export default function KeyFacts() {
  return (
    <section
      aria-label="Key facts"
      className="border-t border-gold/[0.18] bg-ink-dark text-cream"
    >
      <div className="mx-auto grid max-w-[1180px] grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] px-[clamp(20px,4vw,40px)]">
        {FACTS.map((fact, i) => (
          <div
            key={fact.strong}
            className={`flex items-start gap-3.5 py-14 ${
              i === 0
                ? "pr-[56px] pl-0"
                : i === FACTS.length - 1
                  ? "border-l border-cream/[0.12] pl-[56px] pr-0"
                  : "border-l border-cream/[0.12] px-[56px]"
            }`}
          >
            <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-gold" />
            <p className="text-sm leading-[1.7] text-cream/80">
              <span className="font-medium text-cream">{fact.strong}</span>
              {fact.rest}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
