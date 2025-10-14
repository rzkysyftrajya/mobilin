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
import { Users, Fuel, Calendar, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Car } from "@/lib/types";
import { Locale } from "@/i18n-config";
import { useState } from "react";

interface CarCardProps {
  car: Car;
  lang: Locale;
  dict: any;
  buttonText: string;
}

export default function CarCard({ car, lang, dict, buttonText }: CarCardProps) {
  const carSlug = car.name.toLowerCase().replace(/ /g, "-");
  const [isFavorited, setIsFavorited] = useState(false);

  return (
    <Card className="group flex flex-col overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-3 hover:rotate-1 transition-all duration-500 dark:bg-neutral-900 h-full bg-background/80 backdrop-blur-sm border-2 border-primary/10 hover:border-primary/30">
      {/* Gambar */}
      <CardHeader className="p-0 relative">
        <Link
          href={`/${lang}/mobil/${carSlug}`}
          className="block relative aspect-video overflow-hidden"
        >
          <Image
            src={car.image}
            alt={car.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            data-ai-hint={car["data-ai-hint"]}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          {/* Favorite Icon */}
          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            <button
              onClick={(e) => {
                e.preventDefault();
                setIsFavorited(!isFavorited);
              }}
              className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors duration-200"
            >
              <Heart
                className={`w-5 h-5 ${
                  isFavorited ? "text-red-500 fill-red-500" : "text-white"
                } transition-colors duration-200`}
              />
            </button>
          </div>
        </Link>
      </CardHeader>

      {/* Konten */}
      <CardContent className="flex-grow p-6">
        <CardTitle className="!font-headline text-xl mb-4 group-hover:text-primary transition-colors duration-300">
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
      <CardFooter className="grid grid-cols-2 gap-2 p-6 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-neutral-800 dark:to-neutral-700 mt-auto group-hover:from-primary/5 group-hover:to-accent/5 transition-all duration-300">
        {/* Tombol detail */}
        <Button
          asChild
          className="w-full bg-accent hover:bg-accent/90 hover:scale-105 transition-all duration-300"
        >
          <Link href={`/${lang}/mobil/${carSlug}`}>{buttonText}</Link>
        </Button>

        {/* Tombol harga spesial (warna hijau) */}
        <Button
          asChild
          className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white hover:scale-105 transition-all duration-300"
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
