import type { Metadata } from "next";
import { Cinzel, Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Freelance Project Manager for Web, UI/UX, SaaS & AI Projects | Adarsh P Kumar",
  description:
    "Adarsh P Kumar is a freelance project manager in Bengaluru running website design and development, UI/UX, SaaS, enterprise, SEO growth, branding and AI automation projects end to end. 140+ projects shipped, 98% client retention.",
  themeColor: "#0F2E23",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Adarsh P Kumar — Freelance Project Management",
  description:
    "Freelance project management for website design and development, UI/UX, SaaS, enterprise applications, SEO growth, branding, and AI and automation projects.",
  areaServed: ["India", "United States", "United Kingdom", "United Arab Emirates", "Australia"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    addressCountry: "IN",
  },
  priceRange: "$$",
  founder: {
    "@type": "Person",
    name: "Adarsh P Kumar",
    jobTitle: "Project Manager",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${cormorant.variable} ${montserrat.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-cream">
        <a
          href="#home"
          className="absolute left-[-9999px] top-0 z-[200] bg-gold px-5 py-3 text-[11px] font-medium uppercase tracking-[0.14em] text-ink focus:left-3 focus:top-3"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
