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
  Briefcase,
  Hotel,
  Ship,
  Mountain,
  Coffee,
  MapPinned,
  Route,
  BookOpen,
  ExternalLink,
  Navigation,
  Palmtree,
  Globe,
  Factory,
  GraduationCap,
  Heart,
} from "lucide-react";
import Link from "next/link";
import { Breadcrumb } from "@/components/shared/breadcrumb";
import Image from "next/image";
import { motion } from "framer-motion";
import CarCarousel from "@/components/shared/car-carousel";
import InteractiveMap from "@/components/shared/interactive-map";
import BookingModal from "@/components/shared/booking-modal";
import CountdownTimer from "@/components/shared/countdown-timer";
import { cars } from "@/lib/data";
import { useEffect } from "react";

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

const destinations = [
  {
    name: "Pantai Nongsa",
    image: "/batam/pantai-nongsa.png",
    description: "Pantai eksotis dengan resort mewah dan aktivitas water sport",
    icon: Waves,
    category: "Wisata Alam",
    duration: "2-3 jam",
    distance: "25 km dari pusat kota",
  },
  {
    name: "Batam Center",
    image: "/batam/batam-centre.png",
    description: "Pusat perbelanjaan modern dan kuliner internasional",
    icon: ShoppingBag,
    category: "Belanja & Kuliner",
    duration: "3-4 jam",
    distance: "Pusat kota",
  },
  {
    name: "Masjid Agung Batam",
    image: "/batam/masjid-agung-batam.png",
    description:
      "Masjid megah dengan arsitektur modern yang menjadi ikon Batam",
    icon: Heart,
    category: "Wisata Religi",
    duration: "1-2 jam",
    distance: "15 km dari pusat kota",
  },
  {
    name: "Barelang Bridge",
    image: "/batam/barelang-bridge.png",
    description:
      "Jembatan terpanjang di Asia Tenggara yang menghubungkan Batam dan Barelang",
    icon: Route,
    category: "Wisata Infrastruktur",
    duration: "2-3 jam",
    distance: "20 km dari pusat kota",
  },
  {
    name: "Nagoya Hill",
    image: "/batam/nagoya-hill.png",
    description: "Tempat nongkrong dengan pemandangan kota dan kuliner Jepang",
    icon: Coffee,
    category: "Kuliner & Lifestyle",
    duration: "3-4 jam",
    distance: "12 km dari pusat kota",
  },
  {
    name: "Maha Vihara Duta Maitreya",
    image: "/batam/maha-vihara.png",
    description:
      "Patung Buddha terbesar di Asia Tenggara dengan kompleks wisata spiritual",
    icon: Heart,
    category: "Wisata Religi",
    duration: "2-3 jam",
    distance: "18 km dari pusat kota",
  },
];

const businessServices = [
  {
    icon: Briefcase,
    title: "Corporate Travel",
    description:
      "Layanan khusus untuk perjalanan bisnis dengan mobil executive dan sopir profesional",
    features: ["Airport Transfer", "Multi-city Tour", "Flexible Schedule"],
  },
  {
    icon: Factory,
    title: "Industrial Site Visit",
    description:
      "Kunjungan ke kawasan industri Batamindo, Bintang, dan area industri lainnya",
    features: [
      "Multiple Stops",
      "Waiting Time Included",
      "Professional Driver",
    ],
  },
  {
    icon: Hotel,
    title: "Hotel Shuttle",
    description: "Antar-jemput hotel untuk tamu bisnis dan konferensi",
    features: ["24/7 Service", "Group Booking", "VIP Treatment"],
  },
  {
    icon: GraduationCap,
    title: "Event & Conference",
    description: "Transportasi untuk event, seminar, dan gathering perusahaan",
    features: ["Fleet Management", "Coordinator Support", "Custom Package"],
  },
];

const travelPackages = [
  {
    name: "Half Day City Tour",
    duration: "6 Jam",
    price: "Rp 450.000",
    includes: ["Batam Center", "Mega Mall", "Nagoya", "Lunch Stop"],
    car: "Avanza/Xpander",
  },
  {
    name: "Full Day Island Hopping",
    duration: "12 Jam",
    price: "Rp 650.000",
    includes: ["Nongsa Beach", "Barelang", "Seafood Lunch", "Sunset View"],
    car: "Innova Reborn",
    popular: true,
  },
  {
    name: "Business Executive Package",
    duration: "12 Jam",
    price: "Rp 1.200.000",
    includes: [
      "Airport Pickup",
      "Multiple Locations",
      "Waiting Time",
      "Mineral Water",
    ],
    car: "Pajero Sport",
  },
  {
    name: "VIP Shopping & Spa",
    duration: "10 Jam",
    price: "Rp 1.000.000",
    includes: [
      "Shopping Malls",
      "Spa Locations",
      "Lunch Recommendation",
      "Personal Assistant",
    ],
    car: "Innova Zenix",
  },
];

const blogPosts = [
  {
    title: "10 Destinasi Wisata Terbaik di Batam yang Wajib Dikunjungi 2025",
    excerpt:
      "Panduan lengkap tempat wisata populer di Batam, dari pantai hingga kuliner khas.",
    image: "/blog/blog1.png",
    link: "/blog/destinasi-wisata-batam-2025",
    category: "Travel Guide",
    readTime: "8 min",
  },
  {
    title: "Tips Sewa Mobil di Batam: Panduan Lengkap untuk Pemula",
    excerpt:
      "Semua yang perlu Anda ketahui sebelum menyewa mobil di Batam untuk liburan atau bisnis.",
    image: "/blog/blog2.png",
    link: "/blog/tips-sewa-mobil-batam",
    category: "Car Rental Tips",
    readTime: "6 min",
  },
  {
    title: "Kuliner Khas Batam: 15 Makanan yang Harus Anda Coba",
    excerpt:
      "Jelajahi kuliner Batam dari seafood segar hingga makanan khas Melayu yang lezat.",
    image: "/blog/blog1.png",
    link: "/blog/kuliner-batam",
    category: "Food & Beverage",
    readTime: "10 min",
  },
  {
    title: "Perjalanan Bisnis ke Batam: Panduan Efisiensi & Produktivitas",
    excerpt:
      "Tips dan trik untuk memaksimalkan perjalanan bisnis Anda di Batam.",
    image: "/blog/blog2.png",
    link: "/blog/business-travel-batam",
    category: "Business Travel",
    readTime: "7 min",
  },
];

const externalLinks = [
  {
    title: "Batam Tourism Official",
    url: "https://visitbatam.id",
    description: "Informasi resmi pariwisata Batam",
    icon: Globe,
  },
  {
    title: "Bandara Hang Nadim",
    url: "https://hangnadim-airport.co.id",
    description: "Jadwal penerbangan & informasi bandara",
    icon: Plane,
  },
  {
    title: "Ferry Batam - Singapore",
    url: "https://batamfast.com",
    description: "Jadwal & booking ferry ke Singapura",
    icon: Ship,
  },
  {
    title: "Batam Free Trade Zone",
    url: "https://batamftz.go.id",
    description: "Informasi kawasan perdagangan bebas",
    icon: Factory,
  },
];

const internalLinks = [
  {
    title: "Rental Mobil Jakarta",
    href: "/rental-mobil-jakarta",
    icon: MapPin,
  },
  { title: "Rental Mobil Bali", href: "/rental-mobil-bali", icon: MapPin },
  {
    title: "Rental Mobil Surabaya",
    href: "/rental-mobil-surabaya",
    icon: MapPin,
  },
  {
    title: "Travel Guide Indonesia",
    href: "/blog/travel-guide",
    icon: BookOpen,
  },
  { title: "Daftar Harga Mobil", href: "/daftar-harga", icon: Car },
  { title: "Syarat & Ketentuan", href: "/syarat-ketentuan", icon: CheckCircle },
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
  {
    q: "Apakah tersedia paket untuk perjalanan bisnis?",
    a: "Ya, kami memiliki paket khusus untuk corporate travel, site visit, dan event dengan harga spesial dan layanan premium.",
  },
  {
    q: "Berapa lama waktu minimal sewa?",
    a: "Minimal sewa adalah 6 jam. Namun kami merekomendasikan paket 12 jam untuk fleksibilitas maksimal.",
  },
];

export default function BatamPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Optimized Hero Section - Reduced Initial Load */}
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

      {/* Hero Section - LCP Optimized with Fallback */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
        <div className="absolute inset-0 z-0">
          <Image
            src="/batam/hero-section.png"
            alt="Sewa Mobil di Batam - Rental Mobil Premium"
            fill
            className="object-cover"
            priority
            quality={90}
            sizes="100vw"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
        </div>

        <div className="relative z-20 container mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full mb-6 font-semibold border border-white/20"
          >
            <MapPin className="w-5 h-5" />
            <span>Rental Mobil Premium Batam</span>
          </motion.div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight max-w-5xl mx-auto">
            Sewa Mobil <span className="text-blue-400">Premium di Batam</span>
            <br />
            <span className="text-2xl md:text-3xl lg:text-4xl font-normal text-gray-200">
              Untuk Bisnis & Liburan
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="text-lg md:text-xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Dari bisnis hingga liburan, kami siap melayani dengan armada
            premium, sopir profesional, dan pelayanan 24/7 di Batam.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4"
          >
            <BookingModal
              trigger={
                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg font-bold shadow-2xl"
                >
                  <Calendar className="w-6 h-6 mr-2" />
                  Booking Sekarang
                </Button>
              }
              cars={cars}
            />
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 px-8 py-6 text-lg font-bold"
            >
              <Link href="https://wa.me/6281342222747?text=Halo,%20saya%20tertarik%20untuk%20sewa%20mobil%20di%20Batam.">
                <MessageCircle className="w-6 h-6 mr-2" />
                WhatsApp Kami
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="mt-8 flex justify-center items-center gap-6 text-gray-300"
          >
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-green-400" />
              <span className="text-base font-semibold">0813-4222-2747</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-blue-400" />
              <span className="text-base">24/7 Available</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <ScrollAnimationWrapper>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {batamWhyChooseUs.map((item, index) => (
                <div key={index} className="text-center md:text-left">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto md:mx-0">
                    <item.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>

      {/* Business Services Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <ScrollAnimationWrapper>
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Layanan Perjalanan Bisnis
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Solusi transportasi profesional untuk kebutuhan bisnis Anda di
                Batam
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {businessServices.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                      <service.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-4">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>

      {/* Car Carousel */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <ScrollAnimationWrapper>
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Pilihan Armada Premium
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Berbagai pilihan mobil premium untuk setiap kebutuhan Anda
              </p>
            </div>

            <CarCarousel cars={cars.slice(0, 6)} />

            <div className="text-center mt-10">
              <Button
                asChild
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6"
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

      {/* Travel Packages */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <ScrollAnimationWrapper>
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Paket Perjalanan Batam
              </h2>
              <p className="text-lg text-gray-600">
                Pilih paket yang sesuai dengan kebutuhan perjalanan Anda
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {travelPackages.map((pkg, index) => (
                <Card
                  key={index}
                  className={`relative ${
                    pkg.popular ? "border-2 border-blue-500" : ""
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                      Paling Populer
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-xl">{pkg.name}</CardTitle>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold text-blue-600">
                        {pkg.price}
                      </span>
                      <span className="text-gray-500">/ {pkg.duration}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                        <Car className="w-4 h-4" />
                        <span>{pkg.car}</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="font-semibold text-sm mb-2">Termasuk:</p>
                      {pkg.includes.map((item, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                    <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700">
                      Pesan Paket Ini
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>

      {/* Comprehensive Destinations */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <ScrollAnimationWrapper>
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Destinasi Populer di Batam
              </h2>
              <p className="text-lg text-gray-600">
                Jelajahi tempat-tempat menarik dengan mobil sewaan premium kami
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {destinations.map((destination, index) => (
                <Card
                  key={index}
                  className="group cursor-pointer hover:shadow-xl transition-all"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={destination.image}
                      alt={destination.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold">
                      {destination.category}
                    </div>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full">
                      <destination.icon className="w-5 h-5 text-blue-600" />
                    </div>
                  </div>
                  <CardContent className="p-5">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                      {destination.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      {destination.description}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{destination.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{destination.distance}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <ScrollAnimationWrapper>
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Panduan & Tips Perjalanan
              </h2>
              <p className="text-lg text-gray-600">
                Baca artikel terbaru tentang wisata dan rental mobil di Batam
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {blogPosts.map((post, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all"
                >
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 25vw"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-blue-600 text-white px-3 py-1 rounded text-xs font-bold">
                      {post.category}
                    </div>
                  </div>
                  <CardContent className="p-5">
                    <h3 className="font-bold mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">
                        {post.readTime} read
                      </span>
                      <Link
                        href={post.link}
                        className="text-blue-600 text-sm font-semibold hover:underline inline-flex items-center gap-1"
                      >
                        Baca Selengkapnya
                        <ChevronRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button asChild variant="outline" size="lg">
                <Link href="/blog">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Lihat Semua Artikel
                </Link>
              </Button>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>

      {/* External & Internal Links */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <ScrollAnimationWrapper>
            <div className="grid lg:grid-cols-2 gap-8">
              {/* External Links */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Sumber Informasi Batam
                </h2>
                <div className="space-y-4">
                  {externalLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all group"
                    >
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <link.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors flex items-center gap-2">
                          {link.title}
                          <ExternalLink className="w-4 h-4" />
                        </h3>
                        <p className="text-sm text-gray-600">
                          {link.description}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Internal Links */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Layanan Rental Mobil Lainnya
                </h2>
                <div className="space-y-4">
                  {internalLinks.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all group"
                    >
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <link.icon className="w-6 h-6 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {link.title}
                        </h3>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>

      {/* Interactive Map */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <ScrollAnimationWrapper>
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Lokasi Layanan di Batam
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Kami hadir di berbagai titik strategis di Batam untuk memudahkan
                kebutuhan transportasi Anda
              </p>
            </div>

            <InteractiveMap locations={[]} />
          </ScrollAnimationWrapper>
        </div>
      </section>

      {/* Route Guide */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <ScrollAnimationWrapper>
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Panduan Rute Perjalanan
              </h2>
              <p className="text-lg text-gray-600">
                Estimasi waktu dan jarak dari lokasi-lokasi penting di Batam
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                {
                  from: "Bandara Hang Nadim",
                  to: "Batam Center",
                  distance: "15 km",
                  time: "20-25 menit",
                },
                {
                  from: "Bandara Hang Nadim",
                  to: "Nagoya",
                  distance: "20 km",
                  time: "25-30 menit",
                },
                {
                  from: "Batam Center",
                  to: "Nongsa Beach",
                  distance: "25 km",
                  time: "35-40 menit",
                },
                {
                  from: "Nagoya",
                  to: "Barelang Bridge",
                  distance: "30 km",
                  time: "40-45 menit",
                },
                {
                  from: "Harbour Bay Ferry",
                  to: "Batam Center",
                  distance: "10 km",
                  time: "15-20 menit",
                },
                {
                  from: "Batam Center",
                  to: "Kawasan Industri",
                  distance: "35 km",
                  time: "45-50 menit",
                },
              ].map((route, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Route className="w-5 h-5 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-gray-900 mb-1">
                          {route.from}
                        </div>
                        <div className="flex items-center gap-2 text-gray-400 mb-2">
                          <Navigation className="w-4 h-4" />
                          <div className="h-px flex-1 bg-gray-300" />
                        </div>
                        <div className="font-bold text-gray-900 mb-3">
                          {route.to}
                        </div>
                        <div className="flex items-center gap-4 text-sm">
                          <span className="flex items-center gap-1 text-gray-600">
                            <MapPin className="w-4 h-4" />
                            {route.distance}
                          </span>
                          <span className="flex items-center gap-1 text-gray-600">
                            <Clock className="w-4 h-4" />
                            {route.time}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <ScrollAnimationWrapper>
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Dipercaya Ratusan Pelanggan
              </h2>
              <p className="text-lg text-gray-600">
                Kepuasan Anda adalah prioritas utama kami
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                {
                  name: "Michael T.",
                  location: "Wisatawan dari Singapura",
                  text: "Servisnya luar biasa! Dijemput di bandara tepat waktu, mobil Pajero-nya bersih dan nyaman. Sopirnya sangat profesional. Sangat direkomendasikan untuk turis.",
                  rating: 5,
                },
                {
                  name: "Riana S.",
                  location: "Kunjungan Bisnis, Jakarta",
                  text: "Sangat membantu untuk perjalanan dinas saya di Batam. Sopir sangat paham jalan dan etika bisnis. Mobil Innova Reborn sangat nyaman untuk meeting.",
                  rating: 5,
                },
                {
                  name: "Budi Hartono",
                  location: "Rombongan Keluarga",
                  text: "Sewa Hiace untuk liburan keluarga. Mobilnya luas, bersih, dan sopirnya ramah. Anak-anak senang karena perjalanan jadi nyaman. Terima kasih!",
                  rating: 5,
                },
              ].map((testimonial, index) => (
                <Card
                  key={index}
                  className="bg-white shadow-md border-l-4 border-blue-500"
                >
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
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
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <ScrollAnimationWrapper>
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Pertanyaan Yang Sering Diajukan
              </h2>
              <p className="text-lg text-gray-600">
                Jawaban cepat untuk pertanyaan Anda
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {batamFaqs.map((faq, index) => (
                <Card
                  key={index}
                  className="border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                >
                  <CardHeader className="cursor-pointer p-5">
                    <CardTitle className="text-lg text-gray-800 flex items-start gap-3">
                      <span className="text-blue-600 font-bold text-xl flex-shrink-0">
                        Q.
                      </span>
                      <span>{faq.q}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-5 pb-5">
                    <div className="flex items-start gap-3">
                      <span className="text-green-600 font-bold text-xl flex-shrink-0">
                        A.
                      </span>
                      <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <ScrollAnimationWrapper>
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Fitur & Layanan Tambahan
              </h2>
              <p className="text-lg text-gray-600">
                Kami berkomitmen memberikan pengalaman terbaik untuk Anda
              </p>
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
              {[
                {
                  icon: Shield,
                  title: "Asuransi Lengkap",
                  description: "Semua kendaraan diasuransikan",
                },
                {
                  icon: Headphones,
                  title: "Customer Support 24/7",
                  description: "Siap membantu kapan saja",
                },
                {
                  icon: Award,
                  title: "Driver Berpengalaman",
                  description: "Min. 5 tahun pengalaman",
                },
                {
                  icon: BadgeCheck,
                  title: "Harga Transparan",
                  description: "No hidden fees",
                },
                {
                  icon: Heart,
                  title: "Sanitasi Rutin",
                  description: "Kebersihan terjamin",
                },
              ].map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800" />
        <div className="absolute inset-0 bg-black/20" />

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

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Siap Memulai Petualangan di Batam?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed">
              Booking sekarang dan dapatkan pengalaman rental mobil premium
              dengan layanan 24/7. Dari bandara hingga destinasi wisata, kami
              siap menemani setiap langkah Anda.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <BookingModal
                trigger={
                  <Button
                    size="lg"
                    className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-6 text-lg font-bold shadow-2xl"
                  >
                    <Calendar className="w-6 h-6 mr-2" />
                    Booking Sekarang
                  </Button>
                }
                cars={cars}
              />
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 px-10 py-6 text-lg font-bold"
              >
                <Link href="https://wa.me/6281342222747?text=Halo,%20saya%20tertarik%20untuk%20sewa%20mobil%20di%20Batam.">
                  <MessageCircle className="w-6 h-6 mr-2" />
                  WhatsApp Kami
                </Link>
              </Button>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center justify-center gap-3">
                <CheckCircle className="w-7 h-7 text-green-400" />
                <span className="text-lg font-semibold">Booking Instan</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Users className="w-7 h-7 text-blue-400" />
                <span className="text-lg font-semibold">Sopir Profesional</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Shield className="w-7 h-7 text-yellow-400" />
                <span className="text-lg font-semibold">Garansi Aman</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
