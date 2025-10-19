"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Car } from "lucide-react";

interface Location {
  id: string;
  name: string;
  lat: number;
  lng: number;
  description: string;
  services: string[];
  contact?: string;
  hours?: string;
}

interface InteractiveMapProps {
  locations: Location[];
}

export default function InteractiveMap({ locations }: InteractiveMapProps) {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(
    null
  );

  const batamLocations: Location[] = [
    {
      id: "airport",
      name: "Bandara Hang Nadim",
      lat: 1.121,
      lng: 104.1181,
      description:
        "Layanan antar-jemput 24 jam dari/ke bandara. Sopir profesional siap melayani.",
      services: [
        "Antar Jemput Bandara",
        "Mobil Premium",
        "Sopir Berpengalaman",
      ],
      contact: "+62 813-4222-2747",
      hours: "24 Jam",
    },
    {
      id: "city-center",
      name: "Pusat Kota Batam",
      lat: 1.0828,
      lng: 104.0305,
      description:
        "Area bisnis dan perbelanjaan. Ideal untuk perjalanan bisnis atau wisata kota.",
      services: ["Rental Harian", "Mobil Mewah", "Tur Kota"],
      contact: "+62 813-4222-2747",
      hours: "08:00 - 22:00",
    },
    {
      id: "nongsa",
      name: "Nongsa Point Marina",
      lat: 1.1833,
      lng: 104.0833,
      description:
        "Area wisata premium dengan marina dan resort. Layanan VIP tersedia.",
      services: ["Mobil VIP", "Chauffeur Service", "Tur Wisata"],
      contact: "+62 813-4222-2747",
      hours: "07:00 - 23:00",
    },
    {
      id: "batam-center",
      name: "Batam Center",
      lat: 1.13,
      lng: 104.05,
      description:
        "Pusat perbelanjaan dan hiburan terbesar di Batam. Mudah diakses dari Singapura.",
      services: ["Rental Jangka Pendek", "Mobil Keluarga", "Antar Mall"],
      contact: "+62 813-4222-2747",
      hours: "09:00 - 21:00",
    },
  ];

  const handleLocationClick = (location: Location) => {
    setSelectedLocation(location);
  };

  const handleBookFromLocation = (location: Location) => {
    const message = `Halo, saya tertarik rental mobil di area ${location.name}, Batam.`;
    const whatsappUrl = `https://wa.me/6281342222747?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="w-full">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Map Placeholder */}
        <div className="relative h-96 md:h-[500px] bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg overflow-hidden shadow-lg">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-gray-600">
              <MapPin className="w-16 h-16 mx-auto mb-4 text-blue-500" />
              <h3 className="text-xl font-semibold mb-2">
                Peta Interaktif Batam
              </h3>
              <p className="text-sm">Klik marker untuk detail lokasi</p>
            </div>
          </div>

          {/* Simulated Markers */}
          {batamLocations.map((location, index) => (
            <button
              key={location.id}
              className={`absolute w-6 h-6 rounded-full border-2 border-white shadow-lg transition-all duration-300 hover:scale-110 ${
                selectedLocation?.id === location.id
                  ? "bg-red-500"
                  : "bg-blue-500"
              }`}
              style={{
                left: `${20 + index * 15}%`,
                top: `${20 + index * 20}%`,
              }}
              onClick={() => handleLocationClick(location)}
            >
              <MapPin className="w-4 h-4 text-white absolute -top-1 -left-1" />
            </button>
          ))}
        </div>

        {/* Location Details */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-gray-900">
            Lokasi Layanan di Batam
          </h3>
          <p className="text-gray-600">
            Kami menyediakan layanan rental mobil di berbagai lokasi strategis
            di Batam. Klik marker di peta untuk melihat detail.
          </p>

          {selectedLocation ? (
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-blue-500" />
                  {selectedLocation.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">{selectedLocation.description}</p>

                <div className="grid grid-cols-1 gap-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Car className="w-4 h-4 text-green-500" />
                    <span className="font-medium">Layanan:</span>
                    <span>{selectedLocation.services.join(", ")}</span>
                  </div>

                  {selectedLocation.contact && (
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="w-4 h-4 text-blue-500" />
                      <span className="font-medium">Kontak:</span>
                      <span>{selectedLocation.contact}</span>
                    </div>
                  )}

                  {selectedLocation.hours && (
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4 text-purple-500" />
                      <span className="font-medium">Jam Operasional:</span>
                      <span>{selectedLocation.hours}</span>
                    </div>
                  )}
                </div>

                <Button
                  onClick={() => handleBookFromLocation(selectedLocation)}
                  className="w-full bg-green-600 hover:bg-green-700"
                >
                  Pesan dari Lokasi Ini
                </Button>
              </CardContent>
            </Card>
          ) : (
            <Card className="shadow-lg">
              <CardContent className="py-8 text-center">
                <MapPin className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                <h4 className="text-lg font-semibold mb-2">Pilih Lokasi</h4>
                <p className="text-gray-600">
                  Klik salah satu marker di peta untuk melihat detail lokasi
                  layanan kami.
                </p>
              </CardContent>
            </Card>
          )}

          {/* Quick Location List */}
          <div className="grid grid-cols-2 gap-2">
            {batamLocations.map((location) => (
              <Button
                key={location.id}
                variant={
                  selectedLocation?.id === location.id ? "default" : "outline"
                }
                size="sm"
                onClick={() => handleLocationClick(location)}
                className="text-xs h-auto py-2 px-3"
              >
                {location.name}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
