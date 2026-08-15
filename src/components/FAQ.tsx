import Eyebrow from "./Eyebrow";

const FAQ_LEFT = [
  {
    q: "What does Adarsh P Kumar do?",
    a: "He is a freelance project manager who runs UI/UX design, web development, enterprise applications, SaaS products, growth marketing and SEO, branding, and AI and automation projects end to end. He owns scope, schedule, budget, team coordination and client communication so founders and marketing heads don't have to chase their own project.",
  },
  {
    q: "How much experience does he have?",
    a: "Six-plus years managing design, development and digital marketing projects in-market, and seven-plus years running both project types as an independent freelancer. Client retention across the freelance practice is 98%.",
  },
  {
    q: "What does 98% client retention mean?",
    a: "98 out of every 100 clients came back for a second project or stayed on retainer after the first engagement ended. It's measured across seven years of freelance work, not a single year.",
  },
  {
    q: "Which services does he offer?",
    a: "Seven: UI/UX design, web development, enterprise applications, SaaS product delivery, growth marketing and SEO, branding, and AI and automation. Most engagements combine two or three of them.",
  },
];

const FAQ_RIGHT = [
  {
    q: "How does he charge?",
    a: "Three ways: a fixed fee per project when scope is clear, a monthly retainer for ongoing delivery or fractional leadership, and a day rate for audits and short engagements. Every option is quoted in writing before work starts.",
  },
  {
    q: "Does he work with clients outside India?",
    a: "Yes. He's based in Bengaluru and works remotely with clients across the US, UK, UAE and Australia, with a daily overlap window agreed at kickoff for each time zone.",
  },
  {
    q: "Can he take over a project that's already late?",
    a: "Yes — project rescue is standard work. It starts with a paid two-week audit that produces a re-baselined scope, a realistic launch date, and a written list of what has to be cut or added to hit it.",
  },
  {
    q: "How quickly can a project start?",
    a: "Discovery calls happen within two working days of an enquiry. Most projects kick off one to two weeks after a signed scope, depending on current capacity.",
  },
];

function FAQItem({
  q,
  a,
  defaultOpen = false,
}: {
  q: string;
  a: string;
  defaultOpen?: boolean;
}) {
  return (
    <details
      open={defaultOpen}
      className="border-b border-ink/[0.16] py-5 [&_summary::-webkit-details-marker]:hidden"
    >
      <summary className="flex min-h-11 cursor-pointer items-baseline justify-between gap-4 font-display text-xl font-medium leading-[1.35] text-ink">
        {q}
        <span aria-hidden="true" className="flex-none text-[15px] text-gold">
          +
        </span>
      </summary>
      <p className="mt-3 pr-[30px] text-[14.5px] leading-[1.8] text-ink/[0.76]">
        {a}
      </p>
    </details>
  );
}

export default function FAQ() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-h"
      className="mx-auto max-w-[1180px] px-[clamp(20px,4vw,40px)] py-[clamp(64px,9vw,104px)]"
    >
      <div className="mb-[52px] flex max-w-[760px] flex-col gap-[18px]">
        <Eyebrow className="text-ink">Questions</Eyebrow>
        <h2
          id="faq-h"
          className="font-display text-[clamp(30px,4vw,46px)] font-normal leading-[1.12] tracking-[-0.012em] text-ink"
        >
          What clients ask before they hire me.
        </h2>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,340px),1fr))] gap-x-[clamp(28px,4vw,56px)]">
        <div>
          {FAQ_LEFT.map((item, i) => (
            <FAQItem key={item.q} {...item} defaultOpen={i === 0} />
          ))}
        </div>
        <div>
          {FAQ_RIGHT.map((item) => (
            <FAQItem key={item.q} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
