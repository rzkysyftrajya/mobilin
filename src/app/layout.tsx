// src/app/layout.tsx
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Providers } from "@/components/providers";
import { Poppins, PT_Sans } from "next/font/google";
import type { Metadata, Viewport } from "next";
import { i18n } from "@/i18n-config";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const fontPoppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-headline",
});

const fontPtSans = PT_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-body",
});

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mobilinaja.com"),
  title: {
    default: "Mobilin - Sewa Mobil Jadi Gampang",
    template: "%s - Mobilin",
  },
  description:
    "Mau Kemana Aja? Mobilin Aja! Rental mobil praktis & terjangkau di seluruh Indonesia.",
  keywords:
    "rental mobil, sewa mobil, mobilin, mobilin aja, rental mobil murah, rental mobil medan, rental mobil bandara",
  openGraph: {
    title: {
      default: "Mobilin - Sewa Mobil Jadi Gampang",
      template: "%s - Mobilin",
    },
    description: "Mau Kemana Aja? Mobilin Aja!",
    url: "/",
    siteName: "Mobilin",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mobilin - Rental Mobil",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: {
      default: "Mobilin - Sewa Mobil Jadi Gampang",
      template: "%s - Mobilin",
    },
    description: "Mau Kemana Aja? Mobilin Aja!",
    images: ["/twitter-image.jpg"],
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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "android-chrome",
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
      },
      {
        rel: "android-chrome",
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
      },
    ],
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#1ABC9C" },
    { media: "(prefers-color-scheme: dark)", color: "#0D1117" },
  ],
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: string };
}>) {
  const lang = params.lang ?? i18n.defaultLocale;

  return (
    <html lang={lang} className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Preconnect untuk gambar */}
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />

        {/* Preload critical resources */}
        <link rel="preload" href="/favicon.ico" as="image" />
        <link rel="preload" href="/logo.png" as="image" />

        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />

        {/* Google site verification */}
        <meta
          name="google-site-verification"
          content="1Bax7aPjj1-VAbhrzPseFaAfIXfasSZoY9RHTi9h-Is"
        />

        {/* Google Ads Global site tag - Defer loading */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17527429112"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17527429112');
            `,
          }}
        />
      </head>
      <body
        className={`${fontPoppins.variable} ${fontPtSans.variable} min-h-screen bg-background font-body antialiased flex flex-col`}
      >
        <Providers>
          {children}
          <Toaster />
          {/* Vercel Analytics */}
          <Analytics />
          {/* Vercel Speed Insights */}
          <SpeedInsights />
        </Providers>
      </body>
    </html>
  );
}
