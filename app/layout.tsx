import type { Metadata, Viewport } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SITE } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Velunix Studio | Site-uri de prezentare pentru afaceri locale",
    template: "%s | Velunix Studio",
  },
  description: SITE.description,
  applicationName: SITE.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ro_RO",
    siteName: SITE.name,
    url: "/",
    title: "Velunix Studio | Site-uri de prezentare pentru afaceri locale",
    description: SITE.description,
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#0E0E10",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE.name,
  url: `${SITE.url}/`,
  email: SITE.email,
  telephone: SITE.phoneTel,
  logo: `${SITE.url}/brand/velunix-studio-logo-on-light.svg`,
  description:
    "Site-uri de prezentare programate manual pentru afaceri locale: design personalizat, SEO, mentenanță și suport.",
  areaServed: { "@type": "Country", name: "România" },
  knowsLanguage: "ro",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro">
      <head>
        <link rel="preload" href="/fonts/jost-latin-wght-normal.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/instrument-sans-latin-wght-normal.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <a className="skip" href="#main">Sari la conținut</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
