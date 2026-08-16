"use client";

import { useState } from "react";
import Eyebrow from "./Eyebrow";

const FAQS = [
  {
    q: "What does Adarsh P Kumar do?",
    a: "He is a freelance project manager who runs UI/UX design, web development, enterprise applications, SaaS products, growth marketing and SEO, branding, and AI and automation projects end to end. He owns scope, schedule, budget, team coordination, and client communication so founders and marketing heads don't have to chase their own project.",
  },
  {
    q: "How much experience does he have?",
    a: "Six-plus years managing design, development, and marketing campaigns in-house and seven-plus years running the same kind of work as a freelancer, with 13 years total, split across agency-side and independent delivery. That overlap is why the process holds up under real deadlines, not just on paper.",
  },
  {
    q: "What does 98% client retention mean?",
    a: "98% of clients who complete one project with him come back for a second or move on to an ongoing retainer. It's tracked from actual repeat bookings, not a marketing estimate. That's evidence the delivery process, not just the launch, is what keeps clients coming back.",
  },
  {
    q: "Which services does he offer?",
    a: "UI/UX design, website and web application development, enterprise application delivery, SaaS product delivery, growth marketing and technical SEO, branding, and AI and automation are run individually or combined under one schedule when a project spans more than one discipline.",
  },
  {
    q: "Is his website design and development affordable?",
    a: "Yes. Fixed fees for scoped projects with a defined deliverable and timeline keep website design and development affordable and predictable, with no agency overhead. A monthly retainer is also available for ongoing work and growth programs. Every engagement starts with a written scope and quote before work begins so there's no ambiguity on cost.",
  },
  {
    q: "Does he work with clients outside India?",
    a: "Yes. Current and past clients are based in India, the US, the UK, the UAE, and Australia, with delivery runs async-first and calls scheduled around overlapping working hours.",
  },
  {
    q: "Can he take over a project that's already late?",
    a: "Yes. Project rescue is one of the most common reasons clients get in touch. It starts with a short paid audit of the current state, then a re-baselined scope and schedule the client signs off on before work restarts.",
  },
  {
    q: "How quickly can a project start?",
    a: "Most projects start within one to two weeks of a signed scope, depending on current capacity. Two project slots are open from October 2026. Book a call to check availability.",
  },
];

const FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

function FAQItem({
  q,
  a,
  isOpen,
  onToggle,
}: {
  q: string;
  a: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <details
      open={isOpen}
      className="group border-b border-ink/[0.16] py-8 [&_summary::-webkit-details-marker]:hidden"
    >
      <summary
        onClick={(e) => {
          e.preventDefault();
          onToggle();
        }}
        className="flex min-h-11 cursor-pointer items-center justify-between gap-6 font-display text-[22px] font-medium leading-[1.3] text-ink sm:text-[28px]"
      >
        {q}
        <span
          aria-hidden="true"
          className="flex-none text-[60px] leading-none text-gold transition-transform group-open:rotate-45"
        >
          +
        </span>
      </summary>
      <p className="mt-4 max-w-[70ch] text-[15px] leading-[1.8] text-ink/[0.76]">
        {a}
      </p>
    </details>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      aria-labelledby="faq-h"
      className="mx-auto min-h-screen max-w-[1180px] px-[clamp(20px,4vw,40px)] pt-6 pb-[clamp(64px,9vw,104px)]"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }}
      />
      <div className="mb-[52px] flex max-w-[760px] flex-col gap-[18px]">
        <Eyebrow className="text-ink">Questions</Eyebrow>
        <h2
          id="faq-h"
          className="font-display text-[clamp(30px,4vw,46px)] font-normal leading-[1.12] tracking-[-0.012em] text-ink"
        >
          Questions clients ask before they hire a freelance project manager.
        </h2>
      </div>
      <div className="flex flex-col">
        {FAQS.map((item, i) => (
          <FAQItem
            key={item.q}
            {...item}
            isOpen={openIndex === i}
            onToggle={() =>
              setOpenIndex((prev) => (prev === i ? null : i))
            }
          />
        ))}
      </div>
    </section>
  );
}
