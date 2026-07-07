import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/shared/SmoothScrollProvider";
import { Preloader } from "@/components/shared/Preloader";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const siteUrl = "https://nexafintech.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "NexaFin Tech — Smart IT Solutions for a Digital Future",
    template: "%s | NexaFin Tech",
  },
  description:
    "NexaFin Tech is a software development company and IT solutions provider delivering secure, scalable, and future-ready digital solutions — software development, cloud, cybersecurity, SAP, AI/ML, and more.",
  keywords: [
    "software development",
    "IT solutions",
    "cloud implementation",
    "cybersecurity",
    "SAP implementation",
    "data analytics",
    "AI ML development",
    "system integration",
    "IT consulting",
  ],
  authors: [{ name: "NexaFin Tech" }],
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "NexaFin Tech — Smart IT Solutions for a Digital Future",
    description:
      "Secure, scalable, and future-ready software development and IT solutions for modern businesses.",
    siteName: "NexaFin Tech",
  },
  twitter: {
    card: "summary_large_image",
    title: "NexaFin Tech — Smart IT Solutions for a Digital Future",
    description:
      "Secure, scalable, and future-ready software development and IT solutions for modern businesses.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${geistSans.variable} ${geistMono.variable} h-full`}
      suppressHydrationWarning
    >
      <body
        className="flex min-h-full flex-col bg-background font-sans text-foreground antialiased"
        suppressHydrationWarning
      >
        {/* Skip the preloader instantly (pre-paint) on repeat visits this session. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{if(sessionStorage.getItem('nx-preloaded')){document.documentElement.setAttribute('data-nx-preloaded','')}}catch(e){}",
          }}
        />
        <Preloader />
        <SmoothScrollProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
