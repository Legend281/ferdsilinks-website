import type { Metadata } from "next";
import { Manrope, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";
import { GoogleTranslateProvider } from "@/components/GoogleTranslateProvider";
import FloatingTranslateButton from "@/components/FloatingTranslateButton";
import { PageTransitionProvider } from "@/components/PageTransitionProvider";
import { MainLayout } from "@/components/layout/MainLayout";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className={`${manrope.variable} ${inter.variable} ${spaceGrotesk.variable} h-full antialiased bg-surface font-body text-on-surface architect-grid selection:bg-tertiary-fixed selection:text-on-tertiary-fixed-variant`}>
        <TrackVisitor />
        <GoogleTranslateProvider>
          <LanguageProvider>
            <PageTransitionProvider>
              <MainLayout>
                {children}
              </MainLayout>
              <FloatingTranslateButton />
            </PageTransitionProvider>
          </LanguageProvider>
        </GoogleTranslateProvider>
      </body>
    </html>
  );
}
