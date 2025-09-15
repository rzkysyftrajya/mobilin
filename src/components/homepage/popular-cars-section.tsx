import { cars } from "@/lib/data";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import CarCard from "@/components/shared/car-card";
import { Locale } from "@/i18n-config";

export default function PopularCarsSection({
  dict,
  lang,
  buttons,
}: {
  dict: any;
  lang: Locale;
  buttons: any;
}) {
  const popularCars = cars.slice(0, 3);

  return (
    <section
      id="mobil"
      className="py-16 md:py-24 bg-secondary/30 dark:bg-secondary/10"
    >
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold !font-headline">
            {dict.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">{dict.subtitle}</p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularCars.map((car) => (
            <CarCard
              key={car.name}
              car={car}
              lang={lang}
              dict={dict}
              buttonText={buttons.see_details}
            />
          ))}
        </div>
        <div className="text-center mt-12">
          <Button size="lg" asChild>
            <Link href={`/${lang}/daftar-mobil`}>{buttons.view_all_cars}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
