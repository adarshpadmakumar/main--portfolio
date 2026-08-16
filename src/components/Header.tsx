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
      <div className="mx-auto flex min-h-[68px] max-w-[1180px] flex-nowrap items-center gap-3 px-[clamp(20px,4vw,40px)] py-3 sm:gap-5">
        <Link href="#home" className="flex items-center gap-2 sm:gap-3">
          <Logo size={19} />
          <span className="h-[22px] w-px bg-cream/[0.28] sm:h-[26px]" />
          <span className="flex flex-col gap-[3px]">
            <span className="font-display text-[13px] font-medium tracking-[0.01em] whitespace-nowrap text-cream sm:text-[17px]">
              Adarsh P Kumar
            </span>
            <span className="flex items-center gap-[4px] text-[6px] font-medium uppercase tracking-[0.14em] whitespace-nowrap text-gold/90 sm:gap-[7px] sm:text-[7.5px] sm:tracking-[0.26em]">
              BUILD
              <span className="h-[2px] w-[2px] rounded-full bg-gold sm:h-[3px] sm:w-[3px]" />
              CREATE
              <span className="h-[2px] w-[2px] rounded-full bg-gold sm:h-[3px] sm:w-[3px]" />
              GROW
            </span>
          </span>
        </Link>
        <nav aria-label="Primary" className="ml-auto flex flex-none items-center gap-[clamp(14px,2vw,30px)]">
          <div className="hidden items-center gap-[clamp(14px,2vw,30px)] md:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex min-h-11 items-center text-[10px] font-medium uppercase tracking-[0.18em] text-cream/[0.78] hover:text-gold"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Link
            href="#contact"
            className="inline-flex min-h-11 items-center whitespace-nowrap border border-gold px-3 py-[11px] text-[9px] font-medium uppercase tracking-[0.12em] text-cream hover:bg-gold/[0.16] sm:px-5 sm:text-[10px] sm:tracking-[0.18em]"
          >
            Book a call
          </Link>
        </nav>
      </div>
    </header>
  );
}
