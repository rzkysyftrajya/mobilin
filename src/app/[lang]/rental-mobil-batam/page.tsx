"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ScrollAnimationWrapper from "@/components/shared/scroll-animation-wrapper";
import {
  CheckCircle,
  MapPin,
  Star,
  Phone,
  Clock,
  Shield,
  Users,
  Zap,
  MessageCircle,
  Award,
  BadgeCheck,
  TrendingDown,
  Headphones,
  Plane,
  Building,
  Camera,
  Waves,
  ShoppingBag,
  Utensils,
  Car,
  Calendar,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import { Breadcrumb } from "@/components/shared/breadcrumb";
import Image from "next/image";
import { motion } from "framer-motion";
import CarCarousel from "@/components/shared/car-carousel";
import InteractiveMap from "@/components/shared/interactive-map";
import BookingModal from "@/components/shared/booking-modal";
import { cars } from "@/lib/data";

const batamWhyChooseUs = [
  {
    icon: Shield,
    title: "Armada Baru & Terawat",
    description:
      "Mobil kami keluaran terbaru, selalu bersih dan dalam kondisi prima untuk kenyamanan maksimal Anda.",
  },
  {
    icon: Users,
    title: "Sopir Profesional & Ramah",
    description:
      "Sopir kami asli Batam, sangat paham rute, dan siap melayani dengan standar tinggi.",
  },
  {
    icon: Zap,
    title: "Booking Cepat & Mudah",
    description:
      "Pesan mobil hanya dalam 5 menit via WhatsApp. Proses cepat, simpel, dan aman.",
  },
  {
    icon: TrendingDown,
    title: "Harga Jujur Tanpa Biaya Siluman",
    description:
      "Harga yang tertera adalah harga final. Tidak ada biaya tambahan tersembunyi.",
  },
];

const batamPricing = [
  {
    type: "Toyota Avanza / Xpander",
    price: "Rp 500.000",
    duration: "/ 12 Jam",
    specs: "7 Penumpang | AC Dingin | USB Port",
    image: "/daftar-mobil/all-new-avanza.png",
  },
  {
    type: "Toyota Innova Reborn",
    price: "Rp 650.000",
    duration: "/ 12 Jam",
    specs: "7 Penumpang | Kabin Lega | Nyaman",
    image: "/daftar-mobil/innova-reborn.png",
    popular: true,
  },
  {
    type: "Mitsubishi Pajero Sport",
    price: "Rp 1.200.000",
    duration: "/ 12 Jam",
    specs: "7 Penumpang | Gagah | Eksklusif",
    image: "/daftar-mobil/mitsubishi-pajero.png",
  },
  {
    type: "Toyota Alphard Transformer",
    price: "Rp 2.500.000",
    duration: "/ 12 Jam",
    specs: "6 Penumpang | VIP Class | Mewah",
    image: "/daftar-mobil/toyota-alphard.png",
  },
  {
    type: "Toyota Hiace Commuter",
    price: "Rp 1.100.000",
    duration: "/ 12 Jam",
    specs: "14 Penumpang | Rombongan | Bagasi Luas",
    image: "/daftar-mobil/hiace-commuter.png",
  },
];

const batamTestimonials = [
  {
    name: "Michael T.",
    location: "Wisatawan dari Singapura",
    text: "Servisnya luar biasa! Dijemput di bandara tepat waktu, mobil Pajero-nya bersih dan nyaman. Sopirnya sangat profesional. Sangat direkomendasikan untuk turis.",
  },
  {
    name: "Riana S.",
    location: "Kunjungan Bisnis, Jakarta",
    text: "Sangat membantu untuk perjalanan dinas saya di Batam. Sopir sangat paham jalan dan etika bisnis. Mobil Innova Reborn sangat nyaman untuk meeting.",
  },
];

const batamFaqs = [
  {
    q: "Berapa harga sewa mobil di Batam?",
    a: "Harga sewa mobil di Batam mulai dari Rp 500.000 untuk 12 jam (All-in: mobil, sopir, BBM). Harga bervariasi tergantung jenis mobil.",
  },
  {
    q: "Apakah bisa antar-jemput di Bandara Hang Nadim?",
    a: "Tentu. Kami menyediakan layanan antar-jemput 24 jam dari/ke Bandara Hang Nadim. Sopir akan menunggu Anda di kedatangan.",
  },
  {
    q: "Bagaimana cara memesan?",
    a: "Sangat mudah. Cukup klik tombol WhatsApp di halaman ini, informasikan kebutuhan Anda, dan tim kami akan merespon dengan cepat.",
  },
  {
    q: "Apakah harga sudah termasuk semuanya?",
    a: "Betul. Harga kami transparan (All-in), sudah termasuk mobil, sopir, dan bahan bakar untuk pemakaian dalam kota Batam.",
  },
];

export default function BatamPage() {
  return (
    <>
      {/* Removed structured data for brevity, assuming it's correct */}

      <div className="min-h-screen bg-white text-gray-800">
        <div className="pt-20">
          <div className="container mx-auto px-4">
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Rental Mobil Batam", href: "/rental-mobil-batam" },
              ]}
              lang="id"
            />
          </div>
        </div>

        {/* Hero Section - Enhanced with Background and Interactive Elements */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/destinasi/batam/batam.png"
              alt="Batam City Skyline"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
          </div>

          {/* Animated Background Elements */}
          <div className="absolute inset-0 z-10">
            <motion.div
              className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-32 right-16 w-32 h-32 bg-green-500/20 rounded-full blur-xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

          {/* Content */}
          <div className="relative z-20 container mx-auto px-4 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full mb-8 font-semibold border border-white/20"
            >
              <MapPin className="w-5 h-5" />
              <span>Rental Mobil Premium Batam</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 leading-tight max-w-5xl mx-auto"
            >
              Sewa Mobil <span className="text-blue-400">Premium di Batam</span>
              <br />
              <span className="text-3xl md:text-4xl lg:text-5xl font-normal text-gray-200">
                Untuk Setiap Petualangan Anda
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              Dari bisnis hingga liburan, kami siap melayani dengan armada
              premium, sopir profesional, dan pelayanan 24/7 di Batam.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row justify-center items-center gap-6"
            >
              <BookingModal
                trigger={
                  <Button
                    size="lg"
                    className="bg-green-600 hover:bg-green-700 text-white px-10 py-8 text-xl font-bold shadow-2xl hover:shadow-green-500/25 transform hover:-translate-y-2 transition-all duration-300 w-full sm:w-auto"
                  >
                    <Calendar className="w-7 h-7 mr-3" />
                    Booking Sekarang
                  </Button>
                }
                cars={cars}
              />
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 px-10 py-8 text-xl font-bold shadow-xl hover:shadow-white/25 transform hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
              >
                <Link href="https://wa.me/6281342222747?text=Halo,%20saya%20tertarik%20untuk%20sewa%20mobil%20di%20Batam.">
                  <MessageCircle className="w-7 h-7 mr-3" />
                  WhatsApp Kami
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-12 flex justify-center items-center gap-8 text-gray-300"
            >
              <div className="flex items-center gap-2">
                <Phone className="w-6 h-6 text-green-400" />
                <span className="text-lg font-semibold">0813-4222-2747</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-6 h-6 text-blue-400" />
                <span className="text-lg">24/7 Available</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="bg-gray-50 py-16 md:py-20">
          <div className="container mx-auto px-4">
            <ScrollAnimationWrapper>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {batamWhyChooseUs.map((item, index) => (
                  <div key={index} className="text-center md:text-left">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto md:mx-0">
                      <item.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </ScrollAnimationWrapper>
          </div>
        </section>

        {/* Interactive Pricing Section - Carousel */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <ScrollAnimationWrapper>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Pilihan Armada Premium
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Jelajahi koleksi mobil premium kami dengan fitur interaktif.
                  Klik untuk detail lengkap dan booking instan.
                </p>
              </div>

              <div className="max-w-7xl mx-auto">
                <CarCarousel
                  cars={cars.slice(0, 6)} // Show first 6 cars
                />
              </div>

              <div className="text-center mt-12">
                <Button
                  asChild
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg"
                >
                  <Link href="/id/rental-mobil">
                    Lihat Semua Mobil
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </div>
            </ScrollAnimationWrapper>
          </div>
        </section>

        {/* Interactive Map Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <ScrollAnimationWrapper>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Lokasi Layanan di Batam
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Kami hadir di berbagai titik strategis di Batam untuk
                  memudahkan kebutuhan transportasi Anda.
                </p>
              </div>

              <InteractiveMap locations={[]} />
            </ScrollAnimationWrapper>
          </div>
        </section>

        {/* Photo Gallery Section */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <ScrollAnimationWrapper>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Galeri Armada Kami
                </h2>
                <p className="text-lg text-gray-600">
                  Lihat koleksi mobil premium siap melayani perjalanan Anda
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {cars.slice(0, 8).map((car, index) => (
                  <motion.div
                    key={car.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="relative aspect-square">
                      <Image
                        src={car.image}
                        alt={car.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center text-white">
                          <h3 className="font-bold text-lg mb-1">{car.name}</h3>
                          <p className="text-sm">{car.capacity} Penumpang</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </ScrollAnimationWrapper>
          </div>
        </section>

        {/* Popular Destinations in Batam */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <ScrollAnimationWrapper>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Destinasi Populer di Batam
                </h2>
                <p className="text-lg text-gray-600">
                  Temukan tempat-tempat menarik yang bisa Anda kunjungi dengan
                  mobil sewaan kami
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    name: "Pantai Nongsa",
                    image: "/destinasi/batam/nongsa-beach.png",
                    description:
                      "Pantai eksotis dengan resort mewah dan aktivitas water sport",
                    icon: Waves,
                  },
                  {
                    name: "Batam Center",
                    image: "/destinasi/batam/batam-center.png",
                    description:
                      "Pusat perbelanjaan modern dan kuliner internasional",
                    icon: ShoppingBag,
                  },
                  {
                    name: "Masjid Agung Batam",
                    image: "/destinasi/batam/masjid-agung.png",
                    description:
                      "Arsitektur megah dengan pemandangan kota yang indah",
                    icon: Building,
                  },
                ].map((destination, index) => (
                  <motion.div
                    key={destination.name}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="group cursor-pointer"
                  >
                    <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={destination.image}
                          alt={destination.name}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-full">
                          <destination.icon className="w-6 h-6 text-blue-600" />
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                          {destination.name}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {destination.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </ScrollAnimationWrapper>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-gray-50 py-16 md:py-20">
          <div className="container mx-auto px-4">
            <ScrollAnimationWrapper>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Dipercaya Ratusan Pelanggan
                </h2>
                <p className="text-lg text-gray-600">
                  Kepuasan Anda adalah prioritas utama kami.
                </p>
              </div>
              <div className="flex flex-col md:flex-row gap-8">
                {batamTestimonials.map((testimonial, index) => (
                  <Card
                    key={index}
                    className="bg-white shadow-md border-l-4 border-blue-500 flex-1"
                  >
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                      <p className="text-gray-600 italic mb-4">
                        "{testimonial.text}"
                      </p>
                      <div className="font-bold text-gray-900">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {testimonial.location}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </ScrollAnimationWrapper>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <ScrollAnimationWrapper>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Pertanyaan Umum (FAQ)
                </h2>
                <p className="text-lg text-gray-600">
                  Jawaban cepat untuk pertanyaan yang paling sering diajukan.
                </p>
              </div>
              <div className="max-w-4xl mx-auto space-y-4">
                {batamFaqs.slice(0, 3).map((faq, index) => (
                  <Card key={index} className="border-gray-200 shadow-sm">
                    <CardHeader className="cursor-pointer p-5">
                      <CardTitle className="text-lg text-gray-800">
                        {faq.q}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="px-5 pb-5">
                      <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </ScrollAnimationWrapper>
          </div>
        </section>

        {/* Enhanced Final CTA with Booking Modal */}
        <section className="relative py-20 overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800" />
          <div className="absolute inset-0 bg-black/20" />

          {/* Animated Elements */}
          <div className="absolute inset-0">
            <motion.div
              className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-10 right-10 w-40 h-40 bg-green-500/20 rounded-full blur-2xl"
              animate={{
                scale: [1.5, 1, 1.5],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

          <div className="relative z-10 container mx-auto px-4 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Siap Memulai Petualangan di Batam?
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-12 leading-relaxed">
                Booking sekarang dan dapatkan pengalaman rental mobil premium
                dengan layanan 24/7. Dari bandara hingga destinasi wisata, kami
                siap menemani setiap langkah Anda.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-col sm:flex-row justify-center items-center gap-6"
              >
                <BookingModal
                  trigger={
                    <Button
                      size="lg"
                      className="bg-white text-blue-600 hover:bg-gray-100 px-12 py-8 text-xl font-bold shadow-2xl hover:shadow-white/25 transform hover:-translate-y-2 transition-all duration-300"
                    >
                      <Calendar className="w-7 h-7 mr-3" />
                      Booking Sekarang
                    </Button>
                  }
                  cars={cars}
                />
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 px-12 py-8 text-xl font-bold shadow-xl hover:shadow-white/25 transform hover:-translate-y-1 transition-all duration-300"
                >
                  <Link href="https://wa.me/6281342222747?text=Halo,%20saya%20tertarik%20untuk%20sewa%20mobil%20di%20Batam.">
                    <MessageCircle className="w-7 h-7 mr-3" />
                    WhatsApp Kami
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"
              >
                <div className="flex items-center justify-center gap-3">
                  <CheckCircle className="w-8 h-8 text-green-400" />
                  <span className="text-lg font-semibold">Booking Instan</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Users className="w-8 h-8 text-blue-400" />
                  <span className="text-lg font-semibold">
                    Sopir Profesional
                  </span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Shield className="w-8 h-8 text-yellow-400" />
                  <span className="text-lg font-semibold">Garansi Aman</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
