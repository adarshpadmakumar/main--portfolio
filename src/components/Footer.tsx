import Logo from "./Logo";
import { siteConfig } from "@/lib/site-config";

const SERVICE_LINKS = [
  "Website design & development",
  "UI/UX design",
  "SaaS & enterprise delivery",
  "AI & automation",
  "Growth marketing & SEO",
];

const SITE_LINKS = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Case studies" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-cream/[0.16] bg-ink-dark text-cream/50">
      <div className="mx-auto grid max-w-[1180px] grid-cols-[repeat(auto-fit,minmax(min(100%,220px),1fr))] gap-9 px-[clamp(20px,4vw,40px)] pt-[clamp(40px,5vw,56px)]">
        <div className="flex flex-col gap-3.5">
          <span className="self-start">
            <Logo size={24} />
          </span>
          <p className="max-w-[34ch] text-[13px] normal-case leading-[1.8] tracking-normal text-cream/60">
            Freelance project manager for web, UI/UX, SaaS and AI work.
            Bengaluru, working with teams worldwide.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <span className="text-[9.5px] font-medium tracking-[0.18em] text-cream/45">
            Services
          </span>
          {SERVICE_LINKS.map((label) => (
            <a
              key={label}
              href="#services"
              className="text-xs normal-case tracking-normal text-cream/[0.72] hover:text-gold"
            >
              {label}
            </a>
          ))}
        </div>
        <div className="flex flex-col gap-3">
          <span className="text-[9.5px] font-medium tracking-[0.18em] text-cream/45">
            Site
          </span>
          {SITE_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs normal-case tracking-normal text-cream/[0.72] hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex flex-col gap-3">
          <span className="text-[9.5px] font-medium tracking-[0.18em] text-cream/45">
            Get in touch
          </span>
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-xs normal-case tracking-normal text-cream/[0.72] hover:text-gold"
          >
            {siteConfig.email}
          </a>
          <a
            href={`tel:${siteConfig.phoneHref}`}
            className="text-xs normal-case tracking-normal text-cream/[0.72] hover:text-gold"
          >
            {siteConfig.phone}
          </a>
          <a
            href={siteConfig.linkedinUrl}
            className="text-xs normal-case tracking-normal text-cream/[0.72] hover:text-gold"
          >
            LinkedIn
          </a>
        </div>
      </div>
      <div className="mx-auto mt-9 flex max-w-[1180px] flex-wrap items-center justify-between gap-4 border-t border-cream/[0.14] px-[clamp(20px,4vw,40px)] py-[22px] text-[10px] font-normal uppercase tracking-[0.14em]">
        <span>
          © {year} Adarsh P Kumar · Project manager, Bengaluru
        </span>
        <a href="#home" className="text-cream/[0.66] hover:text-gold">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
