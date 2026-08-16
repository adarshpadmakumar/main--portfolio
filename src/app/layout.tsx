import type { Metadata, Viewport } from "next";
import { Cinzel, Cormorant_Garamond, Montserrat } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";
import { SERVICES } from "@/components/Services";

const GA_MEASUREMENT_ID = "G-0ED5L9DVY8";

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

const TITLE = "Affordable Website Design & Development | Adarsh P Kumar";
const DESCRIPTION =
  "Affordable website design & development with fixed-fee pricing. 140+ projects delivered, 98% client retention, 13 years experience. Get a free quote today.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "freelance project manager",
    "affordable website design",
    "website design and development",
    "UI/UX design",
    "SaaS delivery",
    "enterprise application development",
    "technical SEO",
    "AI and automation",
    "Bengaluru",
  ],
  authors: [{ name: "Adarsh P Kumar", url: siteConfig.siteUrl }],
  alternates: { canonical: siteConfig.siteUrl },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: siteConfig.siteUrl,
    siteName: "Adarsh P Kumar",
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: "#0F2E23",
};

const AREA_SERVED = [
  "India",
  "United States",
  "United Kingdom",
  "United Arab Emirates",
  "Australia",
];

const PERSON_ID = `${siteConfig.siteUrl}/#person`;
const BUSINESS_ID = `${siteConfig.siteUrl}/#business`;
const WEBSITE_ID = `${siteConfig.siteUrl}/#website`;
const OG_IMAGE = `${siteConfig.siteUrl}/opengraph-image`;

const ALL_SERVICES = [
  ...SERVICES.map(({ title, description }) => ({ title, description })),
  {
    title: "AI & automation",
    description:
      "Scoping and delivering AI features, internal copilots, and workflow automation, from pilot to production, with evaluation criteria agreed up front and human review built into anything that touches a customer.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": BUSINESS_ID,
      name: "Adarsh P Kumar, Freelance Project Management",
      description:
        "Freelance project management for website design and development, UI/UX, SaaS, enterprise applications, SEO growth, branding, and AI and automation projects.",
      url: siteConfig.siteUrl,
      image: OG_IMAGE,
      areaServed: AREA_SERVED,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bengaluru",
        addressRegion: "Karnataka",
        addressCountry: "IN",
      },
      priceRange: "$$",
      email: `mailto:${siteConfig.email}`,
      telephone: siteConfig.phone,
      sameAs: [siteConfig.linkedinUrl],
      founder: { "@id": PERSON_ID },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Services",
        itemListElement: ALL_SERVICES.map((service, i) => ({
          "@type": "Offer",
          position: i + 1,
          itemOffered: {
            "@type": "Service",
            name: service.title,
            description: service.description,
            provider: { "@id": BUSINESS_ID },
          },
        })),
      },
    },
    {
      "@type": "Person",
      "@id": PERSON_ID,
      name: "Adarsh P Kumar",
      jobTitle: "Freelance Project Manager",
      worksFor: { "@id": BUSINESS_ID },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bengaluru",
        addressRegion: "Karnataka",
        addressCountry: "IN",
      },
      email: `mailto:${siteConfig.email}`,
      telephone: siteConfig.phone,
      url: siteConfig.siteUrl,
      image: OG_IMAGE,
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
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: siteConfig.siteUrl,
      name: "Adarsh P Kumar, Freelance Project Manager",
      description: DESCRIPTION,
      inLanguage: "en",
      publisher: { "@id": BUSINESS_ID },
    },
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
