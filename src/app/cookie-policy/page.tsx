import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Eyebrow from "@/components/Eyebrow";
import CookiePreferencesButton from "@/components/CookiePreferencesButton";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Cookie Policy | Adarsh P Kumar",
  description:
    "How adarshpk.com uses cookies for analytics, the specific cookies set by Google Analytics, Microsoft Clarity, and Calendly, and how to manage your consent.",
  alternates: { canonical: `${siteConfig.siteUrl}/cookie-policy` },
};

const COOKIE_GROUPS = [
  {
    name: "Strictly necessary",
    consent: "Always active",
    description:
      "This site is static and doesn't use functional or session cookies to operate. Nothing in this group is currently set.",
    cookies: [],
  },
  {
    name: "Analytics",
    consent: "Set only after you accept",
    description:
      "Used to understand how visitors use the site, so pages and content can be improved. Loaded only after you click Accept on the cookie banner, and removed on your next visit if you reject or haven't chosen yet.",
    cookies: [
      {
        name: "_ga, _ga_*",
        provider: "Google Analytics",
        purpose: "Distinguishes users and sessions for traffic reporting.",
        duration: "Up to 2 years",
      },
      {
        name: "_gid",
        provider: "Google Analytics",
        purpose: "Distinguishes users for short-term traffic reporting.",
        duration: "24 hours",
      },
      {
        name: "_clck, _clsk, CLID, ANONCHK, MR, MUID, SM",
        provider: "Microsoft Clarity",
        purpose:
          "Records session behavior (clicks, scroll, page navigation) to understand usability issues.",
        duration: "Up to 1 year",
      },
    ],
  },
  {
    name: "Third-party embeds",
    consent: "Set when you use the feature",
    description:
      'The "Book a call" scheduler on this site is provided by Calendly and loads inside the Contact section. It may set its own cookies to run the booking flow, governed by Calendly\'s own privacy policy.',
    cookies: [
      {
        name: "__cf_bm, calendly_*",
        provider: "Calendly",
        purpose: "Runs the embedded 30-minute call booking widget.",
        duration: "Session to 1 year",
      },
    ],
  },
];

export default function CookiePolicyPage() {
  return (
    <div className="bg-cream">
      <Header />
      <main className="mx-auto max-w-[820px] px-[clamp(20px,4vw,40px)] py-[clamp(64px,9vw,104px)] text-ink">
        <div className="mb-[52px] flex flex-col gap-[18px]">
          <Eyebrow className="text-ink">Legal</Eyebrow>
          <h1 className="font-display text-[clamp(30px,4vw,46px)] font-normal leading-[1.12] tracking-[-0.012em] text-ink">
            Cookie Policy
          </h1>
          <p className="max-w-[62ch] text-[15px] leading-[1.8] text-ink/[0.74]">
            Last updated August 2026. This page explains what cookies{" "}
            {siteConfig.siteUrl.replace("https://", "")} uses, why, and how
            you can control them.
          </p>
        </div>

        <div className="flex flex-col gap-10">
          <section className="flex flex-col gap-3">
            <h2 className="font-display text-2xl font-medium text-ink">
              What cookies are
            </h2>
            <p className="text-[15px] leading-[1.8] text-ink/[0.78]">
              Cookies are small text files a site stores in your browser.
              Some remember your preferences; others let third-party tools
              like analytics or booking widgets work or report back on how
              the site is used.
            </p>
          </section>

          {COOKIE_GROUPS.map((group) => (
            <section key={group.name} className="flex flex-col gap-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-ink/[0.16] pb-3">
                <h2 className="font-display text-2xl font-medium text-ink">
                  {group.name}
                </h2>
                <span className="text-[9.5px] font-medium uppercase tracking-[0.16em] text-ink/50">
                  {group.consent}
                </span>
              </div>
              <p className="text-[15px] leading-[1.8] text-ink/[0.78]">
                {group.description}
              </p>
              {group.cookies.length > 0 && (
                <div className="mt-2 overflow-x-auto">
                  <table className="w-full min-w-[520px] border-collapse text-left text-[13px]">
                    <thead>
                      <tr className="border-b border-ink/[0.16] text-[9.5px] font-medium uppercase tracking-[0.14em] text-ink/50">
                        <th className="py-2.5 pr-4">Cookie</th>
                        <th className="py-2.5 pr-4">Provider</th>
                        <th className="py-2.5 pr-4">Purpose</th>
                        <th className="py-2.5">Duration</th>
                      </tr>
                    </thead>
                    <tbody>
                      {group.cookies.map((cookie) => (
                        <tr
                          key={cookie.name}
                          className="border-b border-ink/[0.1] align-top text-ink/80"
                        >
                          <td className="py-3 pr-4 font-medium">
                            {cookie.name}
                          </td>
                          <td className="py-3 pr-4">{cookie.provider}</td>
                          <td className="py-3 pr-4">{cookie.purpose}</td>
                          <td className="py-3">{cookie.duration}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </section>
          ))}

          <section className="flex flex-col gap-3">
            <h2 className="font-display text-2xl font-medium text-ink">
              Managing your consent
            </h2>
            <p className="text-[15px] leading-[1.8] text-ink/[0.78]">
              You can accept or reject analytics cookies from the banner
              shown on your first visit. To change your choice at any time,
              use the button below or the &quot;Cookie preferences&quot;
              link in the footer. You can also block or delete cookies
              directly in your browser settings, though this may affect how
              some parts of the site work.
            </p>
            <div>
              <CookiePreferencesButton className="inline-flex min-h-11 items-center rounded-2xl border border-ink/[0.42] px-5 py-3 text-[10px] font-medium uppercase tracking-[0.16em] text-ink hover:border-ink" />
            </div>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-display text-2xl font-medium text-ink">
              Contact
            </h2>
            <p className="text-[15px] leading-[1.8] text-ink/[0.78]">
              Questions about this policy can be sent to{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="font-medium text-ink underline"
              >
                {siteConfig.email}
              </a>
              .
            </p>
          </section>

          <Link
            href="/"
            className="text-[11px] font-medium uppercase tracking-[0.16em] text-ink/70 hover:text-ink"
          >
            ← Back to home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
