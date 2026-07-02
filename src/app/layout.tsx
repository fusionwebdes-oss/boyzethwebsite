import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import LocalBusinessSchema from "@/components/LocalBusinessSchema"
import WhatsAppWidget from "@/components/WhatsAppWidget"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.boyzethsolutions.com"),
  title: {
    default: "Boyzeth Solutions | Web Development & Digital Marketing Agency in Lagos, Nigeria",
    template: "%s | Boyzeth Solutions",
  },
  description:
    "Boyzeth Solutions is a Lagos-based digital agency specializing in web development, social media management, SEO, Google Business Profile optimization, paid advertising, and content creation. We help businesses scale with custom digital strategies.",
  keywords: [
    "web development agency Lagos",
    "digital marketing Nigeria",
    "SEO services Lagos",
    "social media management Nigeria",
    "Google Business Profile optimization",
    "paid advertising Nigeria",
    "content creation services",
    "Lagos web developer",
    "Nigeria digital agency",
    "Boyzeth Solutions",
    "website design Lagos",
    "digital marketing agency Nigeria",
    "local SEO Nigeria",
    "Bing business management",
  ],
  authors: [{ name: "Boyzeth Solutions" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Boyzeth Solutions",
    title: "Boyzeth Solutions | Web Development & Digital Marketing Agency in Lagos, Nigeria",
    description:
      "Custom websites, social media management, SEO content, Google Business Profile management, paid ads, and strategic growth campaigns for Nigerian businesses.",
    url: "https://www.boyzethsolutions.com",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Boyzeth Solutions - Digital Growth Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Boyzeth Solutions | Web Development & Digital Marketing Agency",
    description:
      "Web development, social media management, SEO, Google Business Profile, paid ads, and digital growth strategies for Nigerian businesses.",
    images: ["/og-image.jpg"],
  },
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
  verification: {
    google: "your-verification-code",
  },
  alternates: {
    canonical: "https://www.boyzethsolutions.com",
  },
  category: "technology",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#0F172A" />
        <meta name="google-site-verification" content="your-verification-code" />
      </head>
      <body className="min-h-full flex flex-col font-sans antialiased">
        <LocalBusinessSchema />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppWidget />
      </body>
    </html>
  )
}
