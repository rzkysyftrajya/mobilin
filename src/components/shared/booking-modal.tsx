"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar, Clock, Users, Car, MessageCircle } from "lucide-react";
import { Car as CarType } from "@/lib/types";

interface BookingModalProps {
  trigger: React.ReactNode;
  selectedCar?: CarType;
  cars?: CarType[];
}

export default function BookingModal({
  trigger,
  selectedCar,
  cars,
}: BookingModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    pickupDate: "",
    pickupTime: "",
    duration: "",
    passengers: "",
    selectedCar: selectedCar?.id.toString() || "",
    specialRequests: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const car =
      selectedCar ||
      cars?.find((c) => c.id.toString() === formData.selectedCar);
    const carName = car ? car.name : "mobil pilihan";

    const message = `*Booking Rental Mobil Batam*

Nama: ${formData.name}
No. HP: ${formData.phone}
Email: ${formData.email}

*Detail Sewa:*
Mobil: ${carName}
Tanggal Jemput: ${formData.pickupDate}
Waktu Jemput: ${formData.pickupTime}
Durasi: ${formData.duration} hari
Jumlah Penumpang: ${formData.passengers}

*Permintaan Khusus:*
${formData.specialRequests || "Tidak ada"}

Mohon konfirmasi ketersediaan dan harga. Terima kasih!`;

    const whatsappUrl = `https://wa.me/6281342222747?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <Car className="w-6 h-6 text-blue-500" />
            Booking Rental Mobil Batam
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nama Lengkap *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                placeholder="Masukkan nama lengkap"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">No. Handphone *</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                placeholder="08123456789"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              placeholder="email@example.com"
            />
          </div>

          {/* Booking Details */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="pickupDate" className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Tanggal Jemput *
              </Label>
              <Input
                id="pickupDate"
                type="date"
                value={formData.pickupDate}
                onChange={(e) =>
                  handleInputChange("pickupDate", e.target.value)
                }
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="pickupTime" className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Waktu Jemput *
              </Label>
              <Select
                value={formData.pickupTime}
                onValueChange={(value) =>
                  handleInputChange("pickupTime", value)
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Pilih waktu" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="08:00">08:00</SelectItem>
                  <SelectItem value="09:00">09:00</SelectItem>
                  <SelectItem value="10:00">10:00</SelectItem>
                  <SelectItem value="11:00">11:00</SelectItem>
                  <SelectItem value="12:00">12:00</SelectItem>
                  <SelectItem value="13:00">13:00</SelectItem>
                  <SelectItem value="14:00">14:00</SelectItem>
                  <SelectItem value="15:00">15:00</SelectItem>
                  <SelectItem value="16:00">16:00</SelectItem>
                  <SelectItem value="17:00">17:00</SelectItem>
                  <SelectItem value="18:00">18:00</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="duration">Durasi Sewa (Hari) *</Label>
              <Select
                value={formData.duration}
                onValueChange={(value) => handleInputChange("duration", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Pilih durasi" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 hari</SelectItem>
                  <SelectItem value="2">2 hari</SelectItem>
                  <SelectItem value="3">3 hari</SelectItem>
                  <SelectItem value="4">4 hari</SelectItem>
                  <SelectItem value="5">5 hari</SelectItem>
                  <SelectItem value="7">1 minggu</SelectItem>
                  <SelectItem value="14">2 minggu</SelectItem>
                  <SelectItem value="30">1 bulan</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="passengers" className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                Jumlah Penumpang *
              </Label>
              <Select
                value={formData.passengers}
                onValueChange={(value) =>
                  handleInputChange("passengers", value)
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Pilih jumlah" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-2">1-2 orang</SelectItem>
                  <SelectItem value="3-5">3-5 orang</SelectItem>
                  <SelectItem value="6-10">6-10 orang</SelectItem>
                  <SelectItem value="11-15">11-15 orang</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Car Selection */}
          {!selectedCar && cars && (
            <div className="space-y-2">
              <Label htmlFor="selectedCar">Pilih Mobil</Label>
              <Select
                value={formData.selectedCar}
                onValueChange={(value) =>
                  handleInputChange("selectedCar", value)
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Pilih mobil yang diinginkan" />
                </SelectTrigger>
                <SelectContent>
                  {cars.map((car) => (
                    <SelectItem key={car.id} value={car.id.toString()}>
                      {car.name} - {car.capacity} penumpang
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}

          {/* Special Requests */}
          <div className="space-y-2">
            <Label htmlFor="specialRequests">Permintaan Khusus</Label>
            <Textarea
              id="specialRequests"
              value={formData.specialRequests}
              onChange={(e) =>
                handleInputChange("specialRequests", e.target.value)
              }
              placeholder="Contoh: Butuh kursi bayi, antar ke bandara, dll."
              rows={3}
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Kirim Booking via WhatsApp
          </Button>

          <p className="text-sm text-gray-600 text-center">
            Setelah mengirim, tim kami akan menghubungi Anda dalam 5-10 menit
            untuk konfirmasi.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}
