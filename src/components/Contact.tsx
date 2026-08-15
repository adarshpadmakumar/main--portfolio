import Eyebrow from "./Eyebrow";
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

const inputClass =
  "w-full min-h-12 border border-cream/20 bg-ink-dark/60 px-3.5 py-[13px] text-[15px] text-cream";

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-h"
      className="bg-ink-dark text-cream"
    >
      <div className="mx-auto grid max-w-[1180px] grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))] items-start gap-[clamp(40px,5vw,72px)] px-[clamp(20px,4vw,40px)] py-[clamp(64px,9vw,104px)]">
        <div className="flex flex-col gap-5">
          <Eyebrow className="text-gold">Contact</Eyebrow>
          <h2
            id="contact-h"
            className="font-display text-[clamp(30px,4vw,46px)] font-normal leading-[1.12] tracking-[-0.012em] text-cream"
          >
            Tell me what&apos;s late.
          </h2>
          <p className="max-w-[56ch] text-[15px] leading-[1.8] text-cream/[0.76]">
            Thirty minutes, no pitch deck. You describe the project, I tell
            you what I&apos;d do first and whether I&apos;m the right person
            for it. If I&apos;m not, I&apos;ll say so and point you
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

        <form
          action={siteConfig.formAction}
          method="post"
          className="flex flex-col gap-[18px] border border-cream/[0.18] bg-cream/[0.04] p-[clamp(24px,3vw,38px)]"
        >
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,180px),1fr))] gap-[18px]">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="apk-name"
                className="text-[9.5px] font-medium uppercase tracking-[0.18em] text-cream/60"
              >
                Your name
              </label>
              <input
                id="apk-name"
                name="name"
                type="text"
                required
                autoComplete="name"
                placeholder="Priya Raghunathan"
                className={inputClass}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="apk-email"
                className="text-[9.5px] font-medium uppercase tracking-[0.18em] text-cream/60"
              >
                Work email
              </label>
              <input
                id="apk-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="you@company.com"
                className={inputClass}
              />
            </div>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,180px),1fr))] gap-[18px]">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="apk-type"
                className="text-[9.5px] font-medium uppercase tracking-[0.18em] text-cream/60"
              >
                What kind of project
              </label>
              <select id="apk-type" name="project_type" className={inputClass}>
                <option>Website design &amp; development</option>
                <option>UI/UX design</option>
                <option>Enterprise application</option>
                <option>SaaS product</option>
                <option>Growth marketing / SEO</option>
                <option>Branding</option>
                <option>AI &amp; automation</option>
                <option>Project rescue / audit</option>
                <option>Not sure yet</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="apk-budget"
                className="text-[9.5px] font-medium uppercase tracking-[0.18em] text-cream/60"
              >
                Indicative budget
              </label>
              <select id="apk-budget" name="budget" className={inputClass}>
                <option>Under ₹2L / $2.5k</option>
                <option>₹2L–8L / $2.5k–10k</option>
                <option>₹8L–25L / $10k–30k</option>
                <option>₹25L+ / $30k+</option>
                <option>Monthly retainer</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="apk-msg"
              className="text-[9.5px] font-medium uppercase tracking-[0.18em] text-cream/60"
            >
              What&apos;s the project, and what&apos;s the deadline?
            </label>
            <textarea
              id="apk-msg"
              name="message"
              required
              rows={4}
              placeholder="We're rebuilding our booking flow and need it live before the March campaign. Design is half done, dev hasn't started."
              className={`${inputClass} min-h-[118px] resize-y leading-[1.7]`}
            />
          </div>
          <button
            type="submit"
            className="min-h-[52px] w-full border-0 bg-gold px-6 py-[17px] text-[11px] font-medium uppercase tracking-[0.16em] text-ink hover:bg-gold-light"
          >
            Send project brief →
          </button>
          <p className="text-center text-[10px] font-normal uppercase leading-[1.9] tracking-[0.1em] text-cream/45">
            Replies within one working day.
            <br />
            Your details stay with me — no lists, no forwarding.
          </p>
        </form>
      </div>
    </section>
  );
}
