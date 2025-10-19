"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Car } from "@/lib/types";

interface CarCarouselProps {
  cars: Car[];
  onBook?: (car: Car) => void;
}

export default function CarCarousel({ cars, onBook }: CarCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cars.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cars.length - 1 : prevIndex - 1
    );
  };

  const handleBook = (car: Car) => {
    if (onBook) {
      onBook(car);
    } else {
      const message = `Halo, saya tertarik untuk menyewa mobil ${car.name}.`;
      const whatsappUrl = `https://wa.me/6281342222747?text=${encodeURIComponent(
        message
      )}`;
      window.open(whatsappUrl, "_blank");
    }
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="overflow-hidden rounded-lg shadow-2xl">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {cars.map((car, index) => (
            <div key={car.id} className="w-full flex-shrink-0 relative">
              <div className="relative h-96 md:h-[500px]">
                <Image
                  src={car.image}
                  alt={car.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">
                    {car.name}
                  </h3>
                  <p className="text-lg mb-4 opacity-90">
                    {car.capacity} Penumpang • {car.fuel}
                  </p>
                  <div className="flex gap-3">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="secondary"
                          className="bg-white/20 hover:bg-white/30 backdrop-blur-sm"
                          onClick={() => setSelectedCar(car)}
                        >
                          <ZoomIn className="w-4 h-4 mr-2" />
                          Lihat Detail
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl">
                        {selectedCar && (
                          <div className="grid md:grid-cols-2 gap-6">
                            <div className="relative h-64 md:h-full">
                              <Image
                                src={selectedCar.image}
                                alt={selectedCar.name}
                                fill
                                className="object-cover rounded-lg"
                                sizes="(max-width: 768px) 100vw, 50vw"
                              />
                            </div>
                            <div>
                              <h2 className="text-2xl font-bold mb-4">
                                {selectedCar.name}
                              </h2>
                              <div className="space-y-2 mb-6">
                                <p>
                                  <strong>Kapasitas:</strong>{" "}
                                  {selectedCar.capacity} penumpang
                                </p>
                                <p>
                                  <strong>Bahan Bakar:</strong>{" "}
                                  {selectedCar.fuel}
                                </p>
                                <p>
                                  <strong>Tahun:</strong> {selectedCar.year}
                                </p>
                                <p>
                                  <strong>Spesifikasi:</strong>{" "}
                                  {selectedCar.specs.join(", ")}
                                </p>
                              </div>
                              <Button
                                onClick={() => handleBook(selectedCar)}
                                className="w-full bg-green-600 hover:bg-green-700"
                              >
                                Pesan Sekarang
                              </Button>
                            </div>
                          </div>
                        )}
                      </DialogContent>
                    </Dialog>
                    <Button
                      onClick={() => handleBook(car)}
                      className="bg-green-600 hover:bg-green-700"
                    >
                      Pesan Mobil Ini
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow-lg"
        onClick={prevSlide}
      >
        <ChevronLeft className="w-6 h-6" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow-lg"
        onClick={nextSlide}
      >
        <ChevronRight className="w-6 h-6" />
      </Button>

      {/* Indicators */}
      <div className="flex justify-center mt-4 space-x-2">
        {cars.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? "bg-blue-600" : "bg-gray-300"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
