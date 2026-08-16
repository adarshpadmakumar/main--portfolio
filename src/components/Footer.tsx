import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import CookiePreferencesButton from "./CookiePreferencesButton";

export default function Footer() {
  return (
    <footer className="border-t border-cream/[0.16] bg-ink-dark text-cream/50">
      <div className="mx-auto flex max-w-[1180px] flex-col items-center gap-4 px-[clamp(20px,4vw,40px)] py-[clamp(40px,5vw,56px)] text-center">
        <span className="font-display text-[19px] font-medium normal-case tracking-normal text-cream">
          Adarsh P Kumar
        </span>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs normal-case tracking-normal">
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-cream/[0.72] hover:text-gold"
          >
            {siteConfig.email}
          </a>
          <a
            href={`tel:${siteConfig.phoneHref}`}
            className="text-cream/[0.72] hover:text-gold"
          >
            {siteConfig.phone}
          </a>
          <a
            href={siteConfig.linkedinUrl}
            className="text-cream/[0.72] hover:text-gold"
          >
            LinkedIn
          </a>
          <Link
            href="/cookie-policy"
            className="text-cream/[0.72] hover:text-gold"
          >
            Cookie Policy
          </Link>
          <CookiePreferencesButton />
        </div>
      </div>
    </footer>
  );
}
