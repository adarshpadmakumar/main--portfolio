import Link from "next/link";
import Logo from "./Logo";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gold/[0.28] bg-ink">
      <div className="mx-auto flex min-h-[68px] max-w-[1180px] flex-wrap items-center justify-between gap-5 px-[clamp(20px,4vw,40px)] py-3">
        <Link href="#home" className="flex items-center gap-3">
          <Logo size={22} />
          <span className="h-[26px] w-px bg-cream/[0.28]" />
          <span className="flex flex-col gap-[3px]">
            <span className="font-display text-[17px] font-medium tracking-[0.01em] text-cream">
              Adarsh P Kumar
            </span>
            <span className="flex items-center gap-[7px] text-[7.5px] font-medium uppercase tracking-[0.26em] text-gold/90">
              BUILD
              <span className="h-[3px] w-[3px] rounded-full bg-gold" />
              CREATE
              <span className="h-[3px] w-[3px] rounded-full bg-gold" />
              GROW
            </span>
          </span>
        </Link>
        <nav aria-label="Primary" className="flex flex-wrap items-center gap-[clamp(14px,2vw,30px)]">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="inline-flex min-h-11 items-center text-[10px] font-medium uppercase tracking-[0.18em] text-cream/[0.78] hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            className="inline-flex min-h-11 items-center border border-gold px-5 py-[11px] text-[10px] font-medium uppercase tracking-[0.18em] text-cream hover:bg-gold/[0.16]"
          >
            Book a call
          </Link>
        </nav>
      </div>
    </header>
  );
}
