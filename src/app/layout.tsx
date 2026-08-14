import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const SITE_URL = "https://246impex.com.np";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "246 Impex — Genuine Imported Electronics in Nepal",
    template: "%s · 246 Impex",
  },
  description:
    "246 Impex brings genuine imported electronics to Nepal — smartphones, laptops, audio & wearables, appliances and accessories from the world's best brands. 100% original products, official 1-year warranty, easy EMI and fast delivery across Nepal.",
  keywords: [
    "246 Impex",
    "imported electronics Nepal",
    "genuine electronics Nepal",
    "buy smartphone Nepal EMI",
    "laptops Nepal",
    "Apple Samsung JBL Nepal",
    "electronics warranty Nepal",
  ],
  authors: [{ name: "246 Impex Pvt. Ltd." }],
  creator: "246 Impex Pvt. Ltd.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_NP",
    url: SITE_URL,
    siteName: "246 Impex",
    title: "246 Impex — Genuine Imported Electronics in Nepal",
    description:
      "Genuine imported electronics from the world's best brands. 100% original, official 1-year warranty, easy EMI and fast delivery across Nepal.",
  },
  twitter: {
    card: "summary_large_image",
    title: "246 Impex — Genuine Imported Electronics in Nepal",
    description:
      "Genuine imported electronics from the world's best brands. Official warranty, easy EMI, fast delivery across Nepal.",
  },
  robots: { index: true, follow: true },
  category: "electronics",
};

export const viewport: Viewport = {
  themeColor: "#0c0d10",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Store",
  name: "246 Impex Pvt. Ltd.",
  description:
    "Genuine imported electronics retailer in Nepal — smartphones, laptops, audio, appliances and accessories with official warranty, EMI and delivery across Nepal.",
  url: SITE_URL,
  slogan: "Genuine Imported Electronics",
  areaServed: "NP",
  currenciesAccepted: "NPR",
  sameAs: [
    "https://facebook.com/246Impex",
    "https://instagram.com/246impex",
    "https://www.tiktok.com/@246impex",
    "https://www.youtube.com/@246impexnepal",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    telephone: "+977-9843737799",
    availableLanguage: ["en", "ne"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${spaceMono.variable} antialiased`}
    >
      <body className="flex min-h-screen flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
