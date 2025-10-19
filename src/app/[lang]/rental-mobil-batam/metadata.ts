import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata | undefined> {
  const title =
    "Rental Mobil Batam Premium & Cepat 2024 | Sewa Mobil Batam + Sopir | Angin Mammiri";
  const description =
    "🚗 Rental Mobil Batam terpercaya dari Angin Mammiri. Armada premium (Innova, Pajero, Alphard) mulai Rp 450rb. Sopir profesional, booking instan 24/7. Ideal untuk wisata, bisnis, dan antar-jemput Bandara Hang Nadim. Pesan sekarang!";

  return {
    title,
    description,
    keywords:
      "rental mobil batam, sewa mobil batam, rental mobil batam murah, sewa mobil batam dengan sopir, sewa mobil batam 24 jam, rental mobil batam premium, sewa mobil alphard batam, sewa mobil pajero batam, antar jemput bandara hang nadim, sewa mobil wisata batam",
    alternates: {
      canonical: `/rental-mobil-batam`,
    },
    openGraph: {
      title,
      description,
      url: `/rental-mobil-batam`,
      siteName: "Angin Mammiri Rentcar",
      locale: "id_ID",
      type: "website",
      images: [
        {
          url: "/og-image-batam.png", // Use a specific OG image for Batam
          width: 1200,
          height: 630,
          alt: "Rental Mobil Premium di Batam",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
