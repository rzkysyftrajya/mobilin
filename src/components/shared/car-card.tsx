"use client";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Users, Fuel, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Car } from "@/lib/types";
import { useCurrency } from "@/context/currency-context";
import { Locale } from "@/i18n-config";

interface CarCardProps {
    car: Car;
    lang: Locale;
    dict: any;
    buttonText: string;
}

export default function CarCard({ car, lang, dict, buttonText }: CarCardProps) {
  const carSlug = car.name.toLowerCase().replace(/ /g, '-');
  const { formatPrice } = useCurrency();

  return (
    <Card className="flex flex-col overflow-hidden shadow-lg hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-300 dark:bg-neutral-900 h-full">
      <CardHeader className="p-0">
        <Link href={`/${lang}/mobil/${carSlug}`} className="block relative aspect-video">
          <Image
            src={car.image}
            alt={car.name}
            fill
            className="object-cover"
            data-ai-hint={car['data-ai-hint']}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </Link>
      </CardHeader>
      <CardContent className="flex-grow p-6">
        <CardTitle className="!font-headline text-xl mb-4">
            <Link href={`/${lang}/mobil/${carSlug}`}>{car.name}</Link>
        </CardTitle>
        <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2"><Users className="w-4 h-4 text-primary"/><span>{car.capacity} {dict.passengers}</span></div>
          <div className="flex items-center gap-2"><Fuel className="w-4 h-4 text-primary"/><span>{car.fuel}</span></div>
          <div className="flex items-center gap-2"><Calendar className="w-4 h-4 text-primary"/><span>{dict.year} {car.year}</span></div>
        </div>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 p-6 bg-gray-50 dark:bg-neutral-800 mt-auto">
        <div className="w-full">
            {car.price.manual && (
                 <div className="flex justify-between items-baseline gap-2">
                    <span className="text-sm text-muted-foreground">Manual</span>
                    <span className="text-lg font-bold text-primary">{formatPrice(car.price.manual)}</span>
                </div>
            )}
            {car.price.matic && (
                 <div className="flex justify-between items-baseline gap-2">
                    <span className="text-sm text-muted-foreground">Otomatis</span>
                    <span className="text-lg font-bold text-primary">{formatPrice(car.price.matic)}</span>
                </div>
            )}
        </div>
        <div className="text-xs text-muted-foreground">{dict.price_suffix}</div>
        <Button asChild className="w-full bg-accent hover:bg-accent/90 mt-2">
          <Link href={`/${lang}/mobil/${carSlug}`}>
            {buttonText}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
