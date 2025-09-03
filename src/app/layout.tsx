import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Providers } from '@/components/providers';
import { Poppins, PT_Sans } from 'next/font/google';
import type { Metadata, Viewport } from 'next';
import { i18n } from '@/i18n-config';

const fontPoppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-headline',
});

const fontPtSans = PT_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-body',
});

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export const metadata: Metadata = {
  metadataBase: new URL('https://www.mobilinaja.com'),
  title: {
    default: 'Mobilin - Sewa Mobil Jadi Gampang',
    template: `%s - Mobilin`,
  },
  description: 'Mau Kemana Aja? Mobilin Aja! Rental mobil praktis & terjangkau di seluruh Indonesia.',
  keywords: ['rental mobil', 'sewa mobil', 'mobilin', 'mobilin aja', 'rental mobil murah'],
  openGraph: {
    title: {
      default: 'Mobilin - Sewa Mobil Jadi Gampang',
      template: `%s - Mobilin`,
    },
    description: 'Mau Kemana Aja? Mobilin Aja!',
    url: '/',
    siteName: 'Mobilin',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mobilin - Rental Mobil',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: {
      default: 'Mobilin - Sewa Mobil Jadi Gampang',
      template: `%s - Mobilin`,
    },
    description: 'Mau Kemana Aja? Mobilin Aja!',
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};


export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#1ABC9C' },
    { media: '(prefers-color-scheme: dark)', color: '#0D1117' },
  ]
};

export default function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: { lang: string }
}>) {
  return (
    <html lang={params.lang ?? i18n.defaultLocale} className="scroll-smooth" suppressHydrationWarning>
      <head>
         <link rel="preconnect" href="https://images.unsplash.com" />
      </head>
      <body
        className={`${fontPoppins.variable} ${fontPtSans.variable} min-h-screen bg-background font-body antialiased flex flex-col`}
      >
        <Providers>
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
