import { destinationAreas } from "@/lib/data";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, ArrowRight } from "lucide-react";
import ScrollAnimationWrapper from "@/components/shared/scroll-animation-wrapper";
import Link from "next/link";
import { Locale } from "@/i18n-config";

type Props = {
  params: { slug: string, lang: Locale };
};

function formatProvinceName(slug: string) {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const area = destinationAreas.find(d => d.slug === params.slug);

  if (!area) {
    return {};
  }

  return {
    title: area.name,
    description: area.short_description,
    alternates: {
      canonical: `/${params.lang}/destinasi/${params.slug}`,
    },
     openGraph: {
      title: area.name,
      description: area.short_description,
      url: `/${params.lang}/destinasi/${params.slug}`,
      images: [
        {
          url: area.heroImage,
          width: 1200,
          height: 630,
          alt: area.name,
        },
      ]
    },
  };
}


export default function DestinationAreaPage({ params }: Props) {
  const area = destinationAreas.find(p => p.slug === params.slug);

  if (!area) {
    notFound();
  }

  const provinceName = formatProvinceName(area.province);
  const bookingText = `Halo Mobilin, saya ingin sewa mobil untuk liburan di area ${area.name}. Bisa bantu?`;

  return (
    <div className="bg-secondary/20 dark:bg-background">
        {/* Hero Section */}
        <ScrollAnimationWrapper>
            <div className="relative h-[60vh] min-h-[400px] flex items-center justify-center text-white text-center">
                <Image
                    src={area.heroImage}
                    alt={`Pemandangan indah di ${area.name}`}
                    fill
                    priority
                    className="object-cover"
                    data-ai-hint={area['data-ai-hint']}
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10 container">
                    <p className="flex items-center justify-center gap-2 font-semibold text-accent">
                        <MapPin className="w-5 h-5" />
                        {provinceName}
                    </p>
                    <h1 className="text-4xl md:text-6xl font-extrabold !font-headline tracking-tight drop-shadow-lg mt-2">
                        {area.name}
                    </h1>
                     <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-neutral-200 drop-shadow-md">
                        {area.short_description}
                    </p>
                </div>
            </div>
        </ScrollAnimationWrapper>

        {/* Content Section */}
        <div className="container py-12 md:py-20">
            <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
                <div className="lg:col-span-2 space-y-8">
                    {area.destinations.map((destination, index) => (
                        <ScrollAnimationWrapper key={index} delay={index * 0.15}>
                            <Card className="overflow-hidden md:flex md:items-center shadow-lg dark:bg-neutral-900 transition-all duration-300 hover:border-primary/50">
                                <div className="md:w-1/3">
                                    <div className="relative aspect-video md:aspect-square">
                                        <Image 
                                            src={destination.image} 
                                            alt={destination.name}
                                            fill
                                            className="object-cover"
                                            data-ai-hint={destination['data-ai-hint']}
                                        />
                                    </div>
                                </div>
                                <div className="md:w-2/3">
                                    <CardHeader>
                                        <CardTitle className="!font-headline">{destination.name}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription>{destination.description}</CardDescription>
                                    </CardContent>
                                </div>
                            </Card>
                        </ScrollAnimationWrapper>
                    ))}
                </div>
                <div className="lg:col-span-1">
                     <ScrollAnimationWrapper>
                        <Card className="sticky top-24 shadow-lg">
                            <CardContent className="p-6">
                                <h3 className="text-xl font-bold !font-headline mb-4">
                                    Jelajahi {provinceName} Dengan Nyaman
                                </h3>
                                <p className="text-muted-foreground text-sm mb-6">
                                    Cara terbaik untuk menikmati semua destinasi di atas adalah dengan kebebasan berkendara. Pesan mobil Anda sekarang!
                                </p>
                                <Button asChild size="lg" className="w-full mb-3 bg-primary hover:bg-primary/90">
                                    <Link href={`/${params.lang}/rental-mobil/${area.province}`}>
                                        Rental Mobil di {provinceName}
                                    </Link>
                                </Button>
                                <Button asChild size="lg" className="w-full bg-accent hover:bg-accent/90">
                                     <a href={`https://wa.me/6285177262716?text=${encodeURIComponent(bookingText)}`} target="_blank" rel="noopener noreferrer">
                                        Hubungi via WhatsApp
                                    </a>
                                </Button>
                            </CardContent>
                        </Card>
                    </ScrollAnimationWrapper>
                </div>
            </div>
        </div>
    </div>
  )
}
