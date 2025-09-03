import { getDictionary } from "@/lib/dictionary";
import { cars } from "@/lib/data";
import { notFound } from "next/navigation";
import { Car } from "@/lib/types";
import { Locale } from "@/i18n-config";
import CarDetailView from "@/components/shared/car-detail-view";
import type { Metadata } from "next";
import ScrollAnimationWrapper from "@/components/shared/scroll-animation-wrapper";
import CarCard from "@/components/shared/car-card";

type Props = {
  params: { slug: string, lang: Locale };
};

async function getCarData(slug: string): Promise<Car | undefined> {
  return cars.find(c => c.name.toLowerCase().replace(/ /g, '-') === slug);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const car = await getCarData(params.slug);

  if (!car) {
    return {};
  }
  
  const dict = await getDictionary(params.lang);

  const priceMatic = car.price.matic ? `Matic: ${car.price.matic}` : '';
  const priceManual = car.price.manual ? `Manual: ${car.price.manual}` : '';

  return {
    title: `${dict.site.name} - ${car.name}`,
    description: `Sewa mobil ${car.name} di Mobilin. Kapasitas ${car.capacity} penumpang. Harga ${priceManual} ${priceMatic}`,
    alternates: {
      canonical: `/${params.lang}/mobil/${params.slug}`,
    },
     openGraph: {
      title: `Sewa Mobil ${car.name} - ${dict.site.name}`,
      description: `Sewa mobil ${car.name} di Mobilin. Kapasitas ${car.capacity} penumpang.`,
      url: `/${params.lang}/mobil/${params.slug}`,
      images: [
        {
          url: car.image,
          width: 600,
          height: 400,
          alt: car.name,
        },
      ]
    },
  };
}

export default async function CarDetailPage({ params }: Props) {
  const car = await getCarData(params.slug);
  if (!car) {
    notFound();
  }

  const dictionary = await getDictionary(params.lang);
  const similarCars = cars.filter(c => c.category === car.category && c.name !== car.name).slice(0, 2);

  const offers = [];
  if (car.price.manual) {
    offers.push({
      "@type": "Offer",
      "priceCurrency": "IDR",
      "price": car.price.manual,
      "name": "Manual Transmission",
      "availability": "https://schema.org/InStock"
    });
  }
  if (car.price.matic) {
    offers.push({
      "@type": "Offer",
      "priceCurrency": "IDR",
      "price": car.price.matic,
      "name": "Automatic Transmission",
      "availability": "https://schema.org/InStock"
    });
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Car",
    "name": car.name,
    "description": `Sewa mobil ${car.name} di Mobilin. Kapasitas ${car.capacity} penumpang, tahun ${car.year}. Tersedia transmisi manual dan otomatis.`,
    "image": car.image,
    "brand": {
      "@type": "Brand",
      "name": car.name.split(' ')[0]
    },
    "vehicleModelDate": car.year,
    "seatingCapacity": car.capacity.toString(),
    "fuelType": car.fuel,
    "offers": offers
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CarDetailView car={car} dict={dictionary} />
      {similarCars.length > 0 && (
        <ScrollAnimationWrapper>
          <div className="py-12 md:py-20 bg-secondary/30">
            <div className="container">
              <h2 className="text-3xl font-bold !font-headline text-center mb-8">
                {dictionary.car_detail_page.similar_cars_title}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {similarCars.map((similarCar) => (
                  <CarCard key={similarCar.name} car={similarCar} lang={params.lang} dict={dictionary.popular_cars} buttonText={dictionary.buttons.see_details}/>
                ))}
              </div>
            </div>
          </div>
        </ScrollAnimationWrapper>
      )}
    </>
  );
}
