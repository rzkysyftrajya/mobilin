"use client";

import { useState, useMemo } from "react";
import CarCard from "@/components/shared/car-card";
import ScrollAnimationWrapper from "@/components/shared/scroll-animation-wrapper";
import { Locale } from "@/i18n-config";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Car } from "@/lib/types";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { X, Search } from "lucide-react";

type CarCategory = Car["category"];

const carCategories: CarCategory[] = [
  "City Car",
  "MPV",
  "SUV",
  "Mewah",
  "Niaga",
];

const categoryTitles: Record<CarCategory, string> = {
  "City Car": "Lincah di Kota (City Car)",
  MPV: "Favorit Keluarga (MPV)",
  SUV: "Gaya & Tangguh (SUV)",
  Mewah: "Kemewahan & Bisnis (VIP)",
  Niaga: "Rombongan & Kebutuhan Khusus",
};

interface CarFilterViewProps {
  lang: Locale;
  dict: any;
  cars: Car[];
}

export default function CarFilterView({
  lang,
  dict,
  cars,
}: CarFilterViewProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<
    CarCategory | "Semua"
  >("Semua");
  const [capacity, setCapacity] = useState("0");

  const pageDict = dict.car_filter_page;
  const capacityOptions = [
    { value: "0", label: pageDict.capacity_all },
    { value: "2", label: pageDict.capacity_2 },
    { value: "5", label: pageDict.capacity_5 },
    { value: "7", label: pageDict.capacity_7 },
  ];

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("Semua");
    setCapacity("0");
  };

  const filteredCars = useMemo(() => {
    return cars.filter((car) => {
      const searchMatch = car.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const categoryMatch =
        selectedCategory === "Semua" || car.category === selectedCategory;

      const capacityMatch =
        capacity === "0" ||
        (capacity === "2" && car.capacity > 0 && car.capacity <= 4) ||
        (capacity === "5" && car.capacity >= 5 && car.capacity <= 6) ||
        (capacity === "7" && car.capacity >= 7);

      return searchMatch && categoryMatch && capacityMatch;
    });
  }, [searchQuery, selectedCategory, capacity, cars]);

  if (!dict) {
    return (
      <div className="container py-12 md:py-20 text-center">Loading...</div>
    );
  }

  return (
    <div className="container py-12 md:py-20">
      <ScrollAnimationWrapper>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold !font-headline">
            {pageDict.title}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            {pageDict.subtitle}
          </p>
        </div>
      </ScrollAnimationWrapper>

      <div className="grid lg:grid-cols-4 gap-8">
        <aside className="lg:col-span-1">
          <ScrollAnimationWrapper>
            <Card className="sticky top-24 shadow-lg dark:bg-neutral-900">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="!font-headline text-lg">
                  {pageDict.filter_title}
                </CardTitle>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={resetFilters}
                  className="text-accent hover:text-accent/80"
                >
                  <X className="w-4 h-4 mr-1" /> {dict.buttons.reset_filter}
                </Button>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="relative">
                  <Input
                    placeholder={pageDict.search_placeholder}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-9"
                  />
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold mb-3">
                    {pageDict.category_title}
                  </h4>
                  <div className="space-y-2">
                    <Button
                      onClick={() => setSelectedCategory("Semua")}
                      variant={
                        selectedCategory === "Semua" ? "default" : "ghost"
                      }
                      className="w-full justify-start"
                    >
                      {pageDict.all_categories}
                    </Button>
                    {carCategories.map((category) => (
                      <Button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        variant={
                          selectedCategory === category ? "default" : "ghost"
                        }
                        className="w-full justify-start text-left h-auto py-2"
                      >
                        {categoryTitles[category]}
                      </Button>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">
                    {pageDict.capacity_title}
                  </h4>
                  <RadioGroup value={capacity} onValueChange={setCapacity}>
                    {capacityOptions.map((opt) => (
                      <div
                        key={opt.value}
                        className="flex items-center space-x-2"
                      >
                        <RadioGroupItem
                          value={opt.value}
                          id={`capacity-${opt.value}`}
                        />
                        <Label htmlFor={`capacity-${opt.value}`}>
                          {opt.label}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimationWrapper>
        </aside>

        <main className="lg:col-span-3">
          {filteredCars.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {filteredCars.map((car, index) => (
                <ScrollAnimationWrapper
                  key={`${car.name}-${index}`}
                  delay={index * 0.1}
                >
                  <CarCard
                    car={car}
                    lang={lang}
                    dict={dict.popular_cars}
                    buttonText={dict.buttons.see_details}
                  />
                </ScrollAnimationWrapper>
              ))}
            </div>
          ) : (
            <ScrollAnimationWrapper>
              <Card className="text-center py-20 px-6 shadow-lg dark:bg-neutral-900">
                <h3 className="text-2xl font-bold !font-headline mb-2">
                  {pageDict.not_found_title}
                </h3>
                <p className="text-muted-foreground">
                  {pageDict.not_found_subtitle}
                </p>
                <Button
                  onClick={resetFilters}
                  className="mt-6 bg-accent hover:bg-accent/90"
                >
                  {dict.buttons.reset_filter}
                </Button>
              </Card>
            </ScrollAnimationWrapper>
          )}
        </main>
      </div>
    </div>
  );
}
