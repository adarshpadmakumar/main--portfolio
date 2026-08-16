import Eyebrow from "./Eyebrow";
import CalendlyEmbed from "./CalendlyEmbed";
import { siteConfig } from "@/lib/site-config";

const CONTACT_LINKS = [
  { label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  {
    label: "Phone & WhatsApp",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phoneHref}`,
  },
  {
    label: "LinkedIn",
    value: siteConfig.linkedinLabel,
    href: siteConfig.linkedinUrl,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-h"
      className="bg-ink-dark text-cream"
    >
      <div className="mx-auto grid max-w-[1180px] grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))] items-center gap-[clamp(40px,5vw,72px)] px-[clamp(20px,4vw,40px)] py-[clamp(64px,9vw,104px)]">
        <div className="flex flex-col gap-5">
          <Eyebrow className="text-gold">Contact</Eyebrow>
          <h2
            id="contact-h"
            className="font-display text-[clamp(30px,4vw,46px)] font-normal leading-[1.12] tracking-[-0.012em] text-cream"
          >
            Tell me what&apos;s late.
          </h2>
          <p className="max-w-[56ch] text-[15px] leading-[1.8] text-cream/[0.76]">
            Thirty minutes, no pitch deck. You describe the project, and I
            tell you what I&apos;d do first and whether I&apos;m the right
            person for it. If I&apos;m not, I&apos;ll say so and point you
            somewhere better.
          </p>
          <div className="mt-2 flex flex-col">
            {CONTACT_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="flex items-center gap-3.5 border-b border-cream/[0.16] py-[18px] text-cream hover:text-gold"
              >
                <span className="h-1.5 w-1.5 flex-none rounded-full bg-gold" />
                <span className="flex flex-col gap-1">
                  <span className="text-[9.5px] font-medium uppercase tracking-[0.18em] text-cream/45">
                    {link.label}
                  </span>
                  <span className="font-display text-[19px] font-medium">
                    {link.value}
                  </span>
                </span>
              </a>
            ))}
          </div>
          <div className="mt-3.5 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.16em] text-cream/[0.68]">
            <span className="h-2 w-2 flex-none rounded-full bg-gold" />
            Two project slots open from October 2026
          </div>
        </div>

        <div className="rounded-2xl border border-gold/30 bg-ink p-[clamp(16px,2vw,24px)]">
          <CalendlyEmbed />
        </div>
      </div>
    </section>
  );
}
