// src/components/shared/car-card.tsx

"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Users, Fuel, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Car } from "@/lib/types";
import { Locale } from "@/i18n-config";

interface CarCardProps {
  car: Car;
  lang: Locale;
  dict: any;
  buttonText: string;
}

export default function CarCard({ car, lang, dict, buttonText }: CarCardProps) {
  const carSlug = car.name.toLowerCase().replace(/ /g, "-");

  return (
    <Card className="flex flex-col overflow-hidden shadow-lg hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-300 dark:bg-neutral-900 h-full">
      {/* Gambar */}
      <CardHeader className="p-0">
        <Link
          href={`/${lang}/mobil/${carSlug}`}
          className="block relative aspect-video"
        >
          <Image
            src={car.image}
            alt={car.name}
            fill
            className="object-cover"
            data-ai-hint={car["data-ai-hint"]}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </Link>
      </CardHeader>

      {/* Konten */}
      <CardContent className="flex-grow p-6">
        <CardTitle className="!font-headline text-xl mb-4">
          <Link href={`/${lang}/mobil/${carSlug}`}>{car.name}</Link>
        </CardTitle>

        <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-primary" />
            <span>
              {car.capacity} {dict.passengers}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Fuel className="w-4 h-4 text-primary" />
            <span>{car.fuel}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-primary" />
            <span>
              {dict.year} {car.year}
            </span>
          </div>
        </div>
      </CardContent>

      {/* Tombol */}
      <CardFooter className="grid grid-cols-2 gap-2 p-6 bg-gray-50 dark:bg-neutral-800 mt-auto">
        {/* Tombol detail */}
        <Button asChild className="w-full bg-accent hover:bg-accent/90">
          <Link href={`/${lang}/mobil/${carSlug}`}>{buttonText}</Link>
        </Button>

        {/* Tombol harga spesial (warna hijau) */}
        <Button
          asChild
          className="w-full bg-green-600 hover:bg-green-700 text-white"
        >
          <a
            href={`https://wa.me/6285177262716?text=${encodeURIComponent(
              `Halo Mobilin, saya tertarik dengan mobil ${car.name}. Apakah ada harga spesial untuk saya?`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Hubungi kami
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
