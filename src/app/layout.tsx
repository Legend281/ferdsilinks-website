import type { Metadata } from "next";
import { Manrope, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";
import { PageTransitionProvider } from "@/components/PageTransitionProvider";
import TrackVisitor from "@/components/TrackVisitor";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ferdsilinks.com'),
  title: {
    default: "Ferdsilinks Group | Innovation & Digital Architecture",
    template: "%s | Ferdsilinks",
  },
  description: "A tech and data-focused company based in Silicon Mountain, Cameroon, driving African innovation through data and applied tech solutions.",
  keywords: ["Ferdsilinks", "tech company", "Buea", "Cameroon", "Silicon Mountain", "data science", "AI", "software development", "training", "consulting"],
  authors: [{ name: "Ferdsilinks Group" }],
  creator: "Ferdsilinks",
  publisher: "Ferdsilinks Group",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/favicon.svg",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/favicon.svg",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ferdsilinks.com",
    siteName: "Ferdsilinks",
    title: "Ferdsilinks Group | Innovation & Digital Architecture",
    description: "A tech and data-focused company based in Silicon Mountain, Cameroon, driving African innovation through data and applied tech solutions.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Ferdsilinks - Innovation & Digital Architecture",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ferdsilinks Group | Innovation & Digital Architecture",
    description: "A tech and data-focused company based in Silicon Mountain, Cameroon, driving African innovation through data and applied tech solutions.",
    images: ["/og-image.svg"],
    creator: "@ferdsilinks",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    // Organization Schema
    {
      "@type": "Organization",
      "@id": "https://ferdsilinks.com/#organization",
      name: "Ferdsilinks Group",
      url: "https://ferdsilinks.com",
      logo: "https://ferdsilinks.com/logo.svg",
      description: "A tech and data-focused company based in Silicon Mountain, Cameroon, driving African innovation through data and applied tech solutions.",
      foundingLocation: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Buea",
          addressRegion: "Southwest Region",
          addressCountry: "CM",
        },
      },
      areaServed: {
        "@type": "Country",
        name: "Cameroon",
      },
      serviceType: [
        "Data Science Consulting",
        "Software Development",
        "Technical Training",
        "AI Solutions",
        "Digital Transformation",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+237-681XXXXXX",
        contactType: "customer service",
        email: "ferdsilinksinfo@gmail.com",
        availableLanguage: ["English", "French"],
      },
      sameAs: [
        "https://www.youtube.com/@Ferdsilinks",
        "https://www.linkedin.com/company/ferdsilinks",
      ],
    },
    // LocalBusiness Schema
    {
      "@type": "LocalBusiness",
      "@id": "https://ferdsilinks.com/#localbusiness",
      name: "Ferdsilinks Group",
      description: "Tech and data company in Buea, Cameroon offering data science consulting, software development, and technical training.",
      url: "https://ferdsilinks.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Silicon Mountain",
        addressLocality: "Buea",
        addressRegion: "Southwest Region",
        addressCountry: "CM",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "4.1528",
        longitude: "9.2424",
      },
      openingHours: "Mo-Fr 08:00-17:00",
      priceRange: "$$",
      image: "https://ferdsilinks.com/og-image.svg",
    },
    // Website Schema
    {
      "@type": "WebSite",
      "@id": "https://ferdsilinks.com/#website",
      url: "https://ferdsilinks.com",
      name: "Ferdsilinks Group",
      publisher: {
        "@type": "Organization",
        "@id": "https://ferdsilinks.com/#organization",
      },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://ferdsilinks.com/?s={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script type="text/javascript" dangerouslySetInnerHTML={{ __html: `
          function googleTranslateElementInit() {
            new google.translate.TranslateElement({
              pageLanguage: 'en',
              includedLanguages: 'en,fr',
              layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
              autoDisplay: false
            }, 'google_translate_element');
          }
        ` }} />
      </head>
      <body className={`${manrope.variable} ${inter.variable} ${spaceGrotesk.variable} h-full antialiased bg-surface font-body text-on-surface architect-grid selection:bg-tertiary-fixed selection:text-on-tertiary-fixed-variant`}>
        <div id="google_translate_element" className="fixed top-4 right-4 z-[9999] translate-y-12"></div>
        <script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
        <TrackVisitor />
        {children}
      </body>
    </html>
  );
}