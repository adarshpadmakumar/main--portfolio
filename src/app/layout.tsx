import type { Metadata } from "next";
import { Cinzel, Cormorant_Garamond, Montserrat } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";

const GA_MEASUREMENT_ID = "G-EWEFEMWG2R";

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
  title:
    "Adarsh P Kumar — Freelance Project Manager for Web, UI/UX, SaaS & AI | Bengaluru",
  description:
    "Freelance project manager running web, UI/UX, SaaS, enterprise and AI projects end to end. 140+ projects shipped, 13 years delivery, 98% client retention. Clients in IN, US, UK, UAE, AU.",
  themeColor: "#0F2E23",
};

const AREA_SERVED = [
  "India",
  "United States",
  "United Kingdom",
  "United Arab Emirates",
  "Australia",
];

const professionalServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Adarsh P Kumar — Freelance Project Management",
  description:
    "Freelance project management for website design and development, UI/UX, SaaS, enterprise applications, SEO growth, branding, and AI and automation projects.",
  areaServed: AREA_SERVED,
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

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Adarsh P Kumar",
  jobTitle: "Freelance Project Manager",
  worksFor: {
    "@type": "Organization",
    name: "Self-employed",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    addressCountry: "IN",
  },
  email: `mailto:${siteConfig.email}`,
  telephone: siteConfig.phone,
  url: "https://adarshpkumar.com",
  sameAs: [siteConfig.linkedinUrl],
  knowsAbout: [
    "UI/UX design",
    "Web development",
    "Enterprise applications",
    "SaaS product delivery",
    "Growth marketing",
    "Technical SEO",
    "Branding",
    "AI and automation",
  ],
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
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(professionalServiceJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="bg-cream">
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
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
