import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ScrollAnimationWrapper from "@/components/shared/scroll-animation-wrapper";
import {
  ArrowRight,
  CheckCircle,
  MapPin,
  Star,
  Phone,
  Clock,
  Shield,
  Users,
  Car,
  Zap,
  MessageCircle,
  Mail,
  Calendar,
  Award,
  ThumbsUp,
  BadgeCheck,
  TrendingDown,
  Headphones,
  Percent,
  CreditCard,
  FileText,
  Gift,
  Target,
  Activity,
  BarChart3,
  DollarSign,
  Gauge,
  Heart,
  Video,
  Image as ImageIcon,
  Briefcase,
  Home,
  Plane,
  Building2,
} from "lucide-react";
import Link from "next/link";
import { getDictionary } from "@/lib/dictionary";
import { Breadcrumb } from "@/components/shared/breadcrumb";
import { ElementType } from "react";
import { cars, testimonials, staticFaqs } from "@/lib/data";
import { destinationAreas } from "@/lib/data";

export async function generateMetadata(): Promise<Metadata | undefined> {
  const dict = await getDictionary("id");
  const title =
    "Rental Mobil Jakarta Murah Mulai 300rb/Hari | Booking Instant 24 Jam | Sopir Profesional";
  const description =
    "✓ Harga Mulai 300rb/hari ✓ Sopir Profesional ✓ Mobil Terawat ✓ Booking Instant via WA ✓ Tanpa Deposit ✓ Proses Cepat. Rental mobil Jakarta untuk wisata, bisnis, wedding, airport transfer & keperluan keluarga. Promo spesial hari ini! Armada lengkap: Avanza, Innova, Alphard, Hiace, dll.";

  return {
    title,
    description,
    keywords:
      "rental mobil jakarta, sewa mobil jakarta murah, rental mobil jakarta 24 jam, sewa mobil jakarta dengan sopir, harga rental mobil jakarta, booking mobil jakarta, rental mobil jakarta murah lepas kunci, sewa mobil bulanan jakarta, rental alphard jakarta, rental innova jakarta, rental avanza jakarta, sewa mobil bandara jakarta, rental mobil wedding jakarta, sewa mobil wisata jakarta, rental mobil keluarga jakarta",
    alternates: {
      canonical: `/rental-mobil-jakarta`,
    },
    openGraph: {
      title,
      description,
      url: `/rental-mobil-jakarta`,
      type: "website",
      images: [
        {
          url: `https://placehold.co/1200x630/1abc9c/ffffff?text=Rental+Mobil+Jakarta+Murah`,
          width: 1200,
          height: 630,
          alt: `Rental Mobil Jakarta Murah & Terpercaya`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
  };
}

export default async function JakartaAdsPage() {
  const dict = await getDictionary("id");
  const cityName = "Jakarta";

  const bookingText =
    "Halo, saya ingin memesan rental mobil di Jakarta. Saya tertarik dengan promo yang ada.";

  const breadcrumbItems = [
    { label: "Home", href: `/id` },
    { label: "Rental Mobil Jakarta" },
  ];

  // Enhanced hero benefits
  const heroBenefits = [
    { icon: TrendingDown, text: "Harga Mulai 300rb/Hari", color: "text-green-500" },
    { icon: BadgeCheck, text: "Sopir Profesional & Ramah", color: "text-blue-500" },
    { icon: Clock, text: "Layanan 24 Jam Non-Stop", color: "text-purple-500" },
    { icon: MessageCircle, text: "Booking Instant via WhatsApp", color: "text-orange-500" },
  ];

  // Why choose us with more compelling reasons
  const whyChooseUs = [
    {
      icon: Shield,
      title: "Terpercaya & Aman",
      desc: "Ribuan pelanggan puas sejak 2015, armada terawat dengan asuransi lengkap dan legalitas resmi",
    },
    {
      icon: TrendingDown,
      title: "Harga Transparan",
      desc: "Tidak ada biaya tersembunyi, harga sudah termasuk sopir. Bandingkan dengan competitor!",
    },
    {
      icon: Users,
      title: "Sopir Berpengalaman",
      desc: "Sopir profesional dengan sertifikat, ramah, dan menguasai rute Jakarta & sekitarnya",
    },
    {
      icon: Zap,
      title: "Proses Cepat",
      desc: "Booking mudah via WhatsApp, konfirmasi instant dalam 5 menit. Tanpa ribet!",
    },
    {
      icon: Car,
      title: "Armada Lengkap & Terawat",
      desc: "50+ unit dari city car hingga luxury. Service rutin & kebersihan terjamin",
    },
    {
      icon: Headphones,
      title: "Customer Service 24/7",
      desc: "Tim support siap membantu kapan saja, termasuk hari libur dan tanggal merah",
    },
  ];

  // Enhanced popular cars with more details
  const popularCars = [
    {
      name: "Honda Brio",
      capacity: "4-5 Penumpang",
      price: "Mulai 300rb/hari",
      oldPrice: "450rb/hari",
      features: ["Lincah di Macet", "Irit BBM (20km/L)", "AC Dingin", "Audio System"],
      image: "https://placehold.co/400x300/f3e5f5/7b1fa2?text=Honda+Brio",
      badge: "TERLARIS",
      use: "City Tour • Shopping • Couple",
    },
    {
      name: "Toyota Avanza",
      capacity: "6-7 Penumpang",
      price: "Mulai 350rb/hari",
      oldPrice: "500rb/hari",
      features: ["Keluarga 7 Orang", "BBM Irit", "Bagasi Luas", "Nyaman"],
      image: "https://placehold.co/400x300/e3f2fd/1976d2?text=Toyota+Avanza",
      badge: "REKOMENDASI",
      use: "Family Trip • Wisata • Airport",
    },
    {
      name: "Toyota Innova Reborn",
      capacity: "6-7 Penumpang",
      price: "Mulai 500rb/hari",
      oldPrice: "700rb/hari",
      features: ["Kabin Luas Premium", "Kenyamanan Extra", "Bagasi Besar", "Captain Seat"],
      image: "https://placehold.co/400x300/e8f5e9/388e3c?text=Innova+Reborn",
      badge: "PREMIUM",
      use: "Business • VIP Guest • Long Trip",
    },
    {
      name: "Toyota Alphard",
      capacity: "6-7 Penumpang",
      price: "Mulai 1.5jt/hari",
      oldPrice: "2jt/hari",
      features: ["Luxury Interior", "Captain Seat Premium", "Entertainment System", "Privacy Glass"],
      image: "https://placehold.co/400x300/fff3e0/f57c00?text=Toyota+Alphard",
      badge: "LUXURY",
      use: "Wedding • Corporate • VIP Event",
    },
  ];

  // Service packages
  const servicePackages = [
    {
      icon: Briefcase,
      name: "Business & Corporate",
      desc: "Layanan rental untuk kebutuhan bisnis, meeting, airport transfer corporate",
      features: ["Invoice & Faktur", "Driver Profesional", "Flexible Schedule"],
    },
    {
      icon: Home,
      name: "Family & Wisata",
      desc: "Paket family trip, wisata keliling Jakarta & sekitarnya dengan nyaman",
      features: ["Full Day Tour", "Destination Advice", "Child Seat Available"],
    },
    {
      icon: Heart,
      name: "Wedding & Event",
      desc: "Mobil pengantin, tamu VIP, dan kebutuhan acara spesial lainnya",
      features: ["Decorated Option", "Multiple Cars", "Photo Session Ready"],
    },
    {
      icon: Plane,
      name: "Airport Transfer",
      desc: "Jemputan & antar bandara Soekarno-Hatta, Halim dengan tracking flight",
      features: ["Flight Tracking", "Meet & Greet", "24/7 Available"],
    },
  ];

  // Expanded service areas with more detail
  const serviceAreas = [
    { name: "Jakarta Pusat", popular: true },
    { name: "Jakarta Selatan", popular: true },
    { name: "Jakarta Utara", popular: false },
    { name: "Jakarta Barat", popular: false },
    { name: "Jakarta Timur", popular: false },
    { name: "Tangerang & BSD", popular: true },
    { name: "Bekasi", popular: false },
    { name: "Depok", popular: false },
    { name: "Bogor & Puncak", popular: true },
    { name: "Bandara Soekarno-Hatta", popular: true },
    { name: "Bandung", popular: false },
    { name: "Anyer & Carita", popular: false },
  ];

  // Payment methods
  const paymentMethods = [
    { name: "Transfer Bank", icon: CreditCard, available: true },
    { name: "Cash", icon: DollarSign, available: true },
    { name: "QRIS", icon: Zap, available: true },
    { name: "E-Wallet", icon: Phone, available: true },
  ];

  // Booking steps
  const bookingSteps = [
    {
      number: 1,
      title: "Hubungi via WhatsApp",
      desc: "Klik tombol WhatsApp dan sampaikan kebutuhan Anda",
      icon: MessageCircle,
    },
    {
      number: 2,
      title: "Pilih Mobil & Tanggal",
      desc: "Tim kami akan bantu pilihkan mobil terbaik sesuai kebutuhan",
      icon: Car,
    },
    {
      number: 3,
      title: "Konfirmasi & Bayar",
      desc: "Konfirmasi booking dan lakukan pembayaran (tanpa deposit untuk member)",
      icon: CheckCircle,
    },
    {
      number: 4,
      title: "Mobil Siap Dipakai",
      desc: "Sopir & mobil akan tiba tepat waktu sesuai jadwal",
      icon: Zap,
    },
  ];

  // Special offers
  const specialOffers = [
    {
      icon: Percent,
      title: "Diskon 15% Hari Ini",
      desc: "Untuk booking dalam 2 jam",
      color: "from-red-500 to-orange-500",
    },
    {
      icon: Gift,
      title: "Gratis 2 Jam Extra",
      desc: "Untuk rental minimal 12 jam",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Users,
      title: "Paket Rombongan",
      desc: "Diskon 20% untuk 3+ mobil",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Calendar,
      title: "Sewa Bulanan Hemat",
      desc: "Harga spesial rental bulanan",
      color: "from-purple-500 to-pink-500",
    },
  ];

  // Popular destinations from Jakarta
  const popularDestinations = [
    { name: "Puncak & Bogor", distance: "60-80 km", time: "2-3 jam" },
    { name: "Bandung", distance: "150 km", time: "3-4 jam" },
    { name: "Anyer & Carita", distance: "140 km", time: "3-4 jam" },
    { name: "Pelabuhan Ratu", distance: "180 km", time: "4-5 jam" },
    { name: "Taman Safari Cisarua", distance: "70 km", time: "2-3 jam" },
    { name: "Tangkuban Perahu", distance: "160 km", time: "4 jam" },
  ];

  return (
    <div className="bg-secondary/30 dark:bg-background">
      {/* Urgent Banner with Countdown */}
      <div className="bg-gradient-to-r from-red-600 via-orange-600 to-red-600 text-white py-3 text-center font-semibold text-sm md:text-base animate-pulse">
        🔥 PROMO SPESIAL HARI INI! Diskon hingga 15% + GRATIS 2 Jam Extra • Booking Sekarang! ⚡
      </div>

      {/* Hero Section - Highly Optimized */}
      <ScrollAnimationWrapper>
        <div className="relative bg-gradient-to-br from-primary/10 via-background to-accent/10 py-12 md:py-20 overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute top-40 right-20 w-24 h-24 bg-accent/20 rounded-full blur-xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-primary/10 rounded-full blur-2xl animate-pulse delay-500"></div>
          </div>

          <div className="absolute inset-0 bg-gradient-to-r from-background/20 via-transparent to-background/20 backdrop-blur-sm"></div>

          <div className="container relative z-10">
            <div className="mb-4">
              <Breadcrumb items={breadcrumbItems} lang="id" />
            </div>

            <div className="grid lg:grid-cols-2 gap-10 items-center">
              {/* Left Column - Enhanced CTA */}
              <div className="space-y-6">
                {/* Trust Badge */}
                <div className="flex flex-wrap gap-3 mb-4">
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-sm text-primary px-4 py-2 rounded-full text-sm font-semibold border border-primary/20 shadow-lg">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    Rating 4.9/5 • 2000+ Review
                  </div>
                  <div className="inline-flex items-center gap-2 bg-green-500/20 backdrop-blur-sm text-green-600 dark:text-green-400 px-4 py-2 rounded-full text-sm font-semibold border border-green-500/20">
                    <Activity className="w-4 h-4" />
                    Online • Respon Cepat
                  </div>
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold !font-headline text-foreground leading-tight">
                  Rental Mobil Jakarta
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Untuk Setiap Kebutuhan
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Kami menyediakan solusi rental mobil untuk berbagai keperluan Anda
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {servicePackages.map((pkg, index) => (
                <Card
                  key={index}
                  className="group bg-background/80 backdrop-blur-sm border-2 border-primary/10 hover:border-primary/30 shadow-lg hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-2"
                >
                  <CardContent className="p-6">
                    <div className="bg-gradient-to-br from-primary/20 to-accent/20 w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 border border-primary/20">
                      <pkg.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors">
                      {pkg.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 group-hover:text-foreground transition-colors">
                      {pkg.desc}
                    </p>
                    <ul className="space-y-2">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className="w-full mt-4 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 transition-all duration-300"
                      size="sm"
                      asChild
                    >
                      <a
                        href={`https://wa.me/6281342222747?text=${encodeURIComponent(
                    "Halo, saya punya pertanyaan tentang rental mobil Jakarta"
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 w-5 h-5" />
                  Tanya via WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </ScrollAnimationWrapper>

        {/* Trust Badges & Certifications */}
        <ScrollAnimationWrapper>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold !font-headline mb-4">
                Jaminan{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Kualitas & Keamanan
                </span>
              </h2>
              <p className="text-muted-foreground">
                Komitmen kami untuk memberikan layanan terbaik dan aman
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <Card className="group bg-background/80 backdrop-blur-sm border-2 border-primary/10 hover:border-primary/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <p className="font-bold text-lg mb-1">Asuransi</p>
                  <p className="text-sm text-muted-foreground">All Risk Coverage</p>
                </CardContent>
              </Card>

              <Card className="group bg-background/80 backdrop-blur-sm border-2 border-primary/10 hover:border-primary/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-8 h-8 text-green-600 dark:text-green-400" />
                  </div>
                  <p className="font-bold text-lg mb-1">Sopir</p>
                  <p className="text-sm text-muted-foreground">Bersertifikat SIM A/B1</p>
                </CardContent>
              </Card>

              <Card className="group bg-background/80 backdrop-blur-sm border-2 border-primary/10 hover:border-primary/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <ThumbsUp className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                  </div>
                  <p className="font-bold text-lg mb-1">Mobil</p>
                  <p className="text-sm text-muted-foreground">Service Rutin & Bersih</p>
                </CardContent>
              </Card>

              <Card className="group bg-background/80 backdrop-blur-sm border-2 border-primary/10 hover:border-primary/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Headphones className="w-8 h-8 text-orange-600 dark:text-orange-400" />
                  </div>
                  <p className="font-bold text-lg mb-1">Support</p>
                  <p className="text-sm text-muted-foreground">24/7 Customer Care</p>
                </CardContent>
              </Card>
            </div>

            {/* Additional Trust Indicators */}
            <div className="mt-10 grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl border border-primary/10">
                <div className="text-4xl font-bold text-primary mb-2">10+</div>
                <p className="text-sm text-muted-foreground">Tahun Pengalaman</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl border border-primary/10">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <p className="text-sm text-muted-foreground">Armada Terawat</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl border border-primary/10">
                <div className="text-4xl font-bold text-primary mb-2">98%</div>
                <p className="text-sm text-muted-foreground">Tingkat Kepuasan</p>
              </div>
            </div>
          </div>
        </ScrollAnimationWrapper>

        {/* CTA Section - Final Push */}
        <ScrollAnimationWrapper>
          <div className="max-w-4xl mx-auto text-center">
            <Card className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 border-2 border-primary/20 shadow-2xl hover:shadow-3xl transition-all duration-500">
              {/* Animated Background Elements */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-10 left-10 w-32 h-32 bg-primary/30 rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent/30 rounded-full blur-2xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse delay-500"></div>
              </div>

              {/* Glassmorphism Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-background/10 via-transparent to-background/10 backdrop-blur-sm"></div>

              <CardContent className="p-10 md:p-16 relative z-10">
                {/* Urgency Badge */}
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-orange-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg animate-bounce-slow">
                  <Clock className="w-5 h-5" />
                  Promo Terbatas! Booking Hari Ini
                </div>

                <h2 className="text-3xl md:text-5xl font-bold !font-headline mb-4">
                  Siap Memesan{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                    Rental Mobil Jakarta?
                  </span>
                </h2>
                
                <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                  Hubungi kami sekarang untuk mendapatkan penawaran terbaik dan layanan rental mobil Jakarta yang profesional. Tim kami siap membantu 24/7!
                </p>

                {/* Feature Highlights */}
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                  <div className="flex items-center gap-2 bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/20">
                    <Zap className="w-5 h-5 text-primary" />
                    <span className="font-semibold">Respon 5 Menit</span>
                  </div>
                  <div className="flex items-center gap-2 bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/20">
                    <TrendingDown className="w-5 h-5 text-green-500" />
                    <span className="font-semibold">Harga Terbaik</span>
                  </div>
                  <div className="flex items-center gap-2 bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/20">
                    <Shield className="w-5 h-5 text-blue-500" />
                    <span className="font-semibold">Aman & Terpercaya</span>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white h-16 text-lg font-bold shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-110 animate-pulse-slow"
                    asChild
                  >
                    <a
                      href={`https://wa.me/6281342222747?text=${encodeURIComponent(
                        bookingText
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="mr-2 w-6 h-6" />
                      💬 Chat WhatsApp Sekarang
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground h-16 text-lg font-bold hover:scale-105 transition-all duration-300"
                    asChild
                  >
                    <a href="tel:+6281342222747">
                      <Phone className="mr-2 w-6 h-6" />
                      📞 0813-4222-2747
                    </a>
                  </Button>
                </div>

                {/* Trust Line */}
                <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Tanpa Deposit</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Booking Instant</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Proses Mudah</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Sopir Profesional</span>
                  </div>
                </div>

                {/* Urgency Message */}
                <div className="mt-8 inline-block bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 text-yellow-700 dark:text-yellow-300 px-6 py-3 rounded-lg font-semibold">
                  ⚡ Hanya tersisa <span className="text-xl font-bold">5 unit</span> untuk weekend ini!
                </div>
              </CardContent>
            </Card>
          </div>
        </ScrollAnimationWrapper>

        {/* Contact Information */}
        <ScrollAnimationWrapper>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/20">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">Hubungi Kami</h3>
                  <p className="text-muted-foreground">
                    Tim customer service kami siap membantu Anda 24/7
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-background/80 rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                    <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MessageCircle className="w-7 h-7 text-green-600 dark:text-green-400" />
                    </div>
                    <p className="font-bold mb-2">WhatsApp</p>
                    <a
                      href={`https://wa.me/6281342222747?text=${encodeURIComponent(
                        bookingText
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-accent transition-colors font-semibold"
                    >
                      +62 813-4222-2747
                    </a>
                    <p className="text-xs text-muted-foreground mt-1">
                      Chat Langsung
                    </p>
                  </div>

                  <div className="text-center p-6 bg-background/80 rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                    <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Phone className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                    </div>
                    <p className="font-bold mb-2">Telepon</p>
                    <a
                      href="tel:+6281342222747"
                      className="text-primary hover:text-accent transition-colors font-semibold"
                    >
                      0813-4222-2747
                    </a>
                    <p className="text-xs text-muted-foreground mt-1">
                      24 Jam Aktif
                    </p>
                  </div>

                  <div className="text-center p-6 bg-background/80 rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                    <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Clock className="w-7 h-7 text-purple-600 dark:text-purple-400" />
                    </div>
                    <p className="font-bold mb-2">Jam Operasional</p>
                    <p className="text-primary font-semibold">24/7</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Setiap Hari
                    </p>
                  </div>
                </div>

                <div className="mt-8 text-center p-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg border border-primary/20">
                  <p className="text-sm">
                    <strong>Office:</strong> Jakarta Selatan • <strong>Melayani:</strong> Seluruh Jakarta, Tangerang, Bekasi, Depok, Bogor & Sekitarnya
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </ScrollAnimationWrapper>

        {/* SEO-Friendly Content Section */}
        <ScrollAnimationWrapper>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-background/80 backdrop-blur-sm border-2 border-primary/10">
              <CardContent className="p-8 prose prose-lg dark:prose-invert max-w-none">
                <h2 className="text-2xl font-bold mb-4">
                  Rental Mobil Jakarta - Solusi Transportasi Terpercaya
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Mencari <strong>rental mobil Jakarta</strong> yang murah, terpercaya, dan profesional? Anda berada di tempat yang tepat! Kami menyediakan layanan <strong>sewa mobil Jakarta</strong> dengan sopir berpengalaman untuk berbagai kebutuhan: wisata, bisnis, acara keluarga, wedding, hingga airport transfer.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Dengan armada lengkap mulai dari city car seperti Honda Brio hingga mobil mewah seperti Toyota Alphard, kami siap melayani Anda 24 jam non-stop. <strong>Harga rental mobil Jakarta</strong> kami sangat kompetitif mulai dari 300rb/hari sudah termasuk sopir profesional.
                </p>
                
                <h3 className="text-xl font-bold mb-3 mt-6">
                  Keunggulan Rental Mobil Jakarta Kami
                </h3>
                <ul className="space-y-2 text-muted-foreground mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span><strong>Harga Transparan:</strong> Tidak ada biaya tersembunyi, harga sudah termasuk sopir</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span><strong>Armada Terawat:</strong> Service rutin, bersih, wangi, dan dalam kondisi prima</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span><strong>Sopir Berpengalaman:</strong> Ramah, profesional, dan menguasai rute Jakarta</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span><strong>Booking Mudah:</strong> Pesan via WhatsApp, konfirmasi dalam 5 menit</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span><strong>Layanan 24/7:</strong> Siap melayani kapan saja termasuk hari libur</span>
                  </li>
                </ul>

                <h3 className="text-xl font-bold mb-3 mt-6">
                  Area Layanan Rental Mobil Jakarta
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Kami melayani <strong>rental mobil di Jakarta</strong> dan sekitarnya termasuk Jakarta Pusat, Jakarta Selatan, Jakarta Utara, Jakarta Barat, Jakarta Timur, Tangerang, BSD, Bekasi, Depok, Bogor, dan Bandara Soekarno-Hatta. Untuk perjalanan luar kota seperti Bandung, Anyer, atau Puncak juga tersedia dengan harga special.
                </p>

                <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl border border-primary/20">
                  <h4 className="text-lg font-bold mb-3">
                    Cara Booking Rental Mobil Jakarta:
                  </h4>
                  <ol className="space-y-2 text-muted-foreground list-decimal list-inside">
                    <li>Hubungi kami via WhatsApp atau telepon</li>
                    <li>Sampaikan kebutuhan Anda (jenis mobil, tanggal, tujuan)</li>
                    <li>Dapatkan penawaran harga terbaik</li>
                    <li>Konfirmasi booking (tanpa deposit untuk member)</li>
                    <li>Mobil dan sopir siap melayani tepat waktu</li>
                  </ol>
                </div>

                <p className="text-muted-foreground leading-relaxed mt-6">
                  Jangan ragu untuk menghubungi kami kapan saja. Tim customer service kami siap membantu Anda menemukan <strong>rental mobil Jakarta murah</strong> yang sesuai dengan kebutuhan dan budget Anda. Pesan sekarang dan dapatkan promo special hari ini!
                </p>
              </CardContent>
            </Card>
          </div>
        </ScrollAnimationWrapper>

        {/* Schema/Structured Data Info */}
        <div className="text-center text-xs text-muted-foreground mt-12">
          <p>
            © 2025 Rental Mobil Jakarta | Layanan Sewa Mobil Jakarta Terpercaya | 
            Harga Mulai 300rb/Hari
          </p>
        </div>
      </div>
    </div>
  );
}
                          `Halo, saya tertarik dengan paket ${pkg.name}`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Tanya Paket Ini
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </ScrollAnimationWrapper>

        {/* Popular Cars Enhanced */}
        <ScrollAnimationWrapper>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold !font-headline mb-4">
                Pilihan Mobil &{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Harga Terbaik
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Berbagai pilihan armada terawat dengan harga transparan. Sudah termasuk sopir!
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {popularCars.map((car, index) => (
                <Card
                  key={index}
                  className="group bg-background/80 backdrop-blur-sm border-2 border-primary/20 shadow-lg hover:shadow-2xl hover:shadow-primary/30 hover:border-primary/40 transition-all duration-500 overflow-hidden hover:-translate-y-3"
                >
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img
                      src={car.image}
                      alt={car.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Badge */}
                    <div className="absolute top-3 left-3 bg-gradient-to-r from-red-600 to-orange-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      {car.badge}
                    </div>

                    {/* Old Price Badge */}
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <div className="bg-black/70 backdrop-blur-sm text-white px-2 py-1 rounded text-xs line-through">
                        {car.oldPrice}
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-5">
                    <h3 className="font-bold text-xl mb-1 group-hover:text-primary transition-colors duration-300">
                      {car.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2 flex items-center gap-1">
                      <Users className="w-4 h-4 text-primary" />
                      {car.capacity}
                    </p>
                    
                    {/* Use Case Tags */}
                    <div className="flex flex-wrap gap-1 mb-3">
                      {car.use.split('•').map((use, i) => (
                        <span
                          key={i}
                          className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full"
                        >
                          {use.trim()}
                        </span>
                      ))}
                    </div>

                    {/* Pricing */}
                    <div className="relative mb-4">
                      <div className="bg-gradient-to-r from-accent/20 to-primary/20 text-accent px-4 py-3 rounded-lg font-bold text-xl text-center border border-primary/10 group-hover:scale-105 transition-transform duration-300">
                        {car.price}
                      </div>
                      <div className="text-center mt-1">
                        <span className="text-xs text-muted-foreground line-through">
                          {car.oldPrice}
                        </span>
                        <span className="text-xs text-green-600 dark:text-green-400 font-semibold ml-2">
                          Hemat {parseInt(car.oldPrice.replace(/\D/g, '')) - parseInt(car.price.split(' ')[1].replace(/\D/g, ''))}rb!
                        </span>
                      </div>
                    </div>

                    {/* Features */}
                    <ul className="space-y-2 mb-4">
                      {car.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-sm group-hover:text-foreground transition-colors duration-300"
                        >
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <Button
                      className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white hover:scale-105 transition-all duration-300 shadow-lg"
                      asChild
                    >
                      <a
                        href={`https://wa.me/6281342222747?text=${encodeURIComponent(
                          `Halo, saya tertarik dengan ${car.name} (${car.price}) untuk rental di Jakarta.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Pesan {car.name}
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-10 space-y-4">
              <p className="text-muted-foreground">
                *Harga sudah termasuk sopir. Belum termasuk BBM, tol, dan parkir.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  size="lg"
                  variant="outline"
                  className="hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all duration-300"
                  asChild
                >
                  <Link href={`/id/daftar-mobil`}>
                    Lihat Semua Armada <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 hover:scale-105 transition-all duration-300"
                  asChild
                >
                  <a
                    href={`https://wa.me/6281342222747?text=${encodeURIComponent(
                      "Halo, saya mau tanya harga rental mobil lainnya di Jakarta"
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 w-5 h-5" />
                    Tanya Mobil Lain
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </ScrollAnimationWrapper>

        {/* Booking Steps */}
        <ScrollAnimationWrapper>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold !font-headline mb-4">
                Cara Booking{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Super Mudah!
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Hanya 4 langkah sederhana, mobil siap digunakan
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {bookingSteps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Connector Line */}
                  {index < bookingSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/4 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary to-accent -z-10"></div>
                  )}
                  
                  <Card className="group bg-background/80 backdrop-blur-sm border-2 border-primary/10 hover:border-primary/30 shadow-lg hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-2">
                    <CardContent className="p-6 text-center">
                      <div className="relative inline-block mb-4">
                        <div className="bg-gradient-to-br from-primary to-accent w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg">
                          <step.icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="absolute -top-2 -right-2 bg-accent text-accent-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm border-2 border-background">
                          {step.number}
                        </div>
                      </div>
                      <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                        {step.desc}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white h-16 text-lg font-bold shadow-2xl hover:shadow-green-500/50 hover:scale-105 transition-all duration-300"
                asChild
              >
                <a
                  href={`https://wa.me/6281342222747?text=${encodeURIComponent(
                    bookingText
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 w-6 h-6" />
                  Mulai Booking Sekarang
                </a>
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                ⚡ Proses cepat • ✅ Tanpa ribet • 💯 Terpercaya
              </p>
            </div>
          </div>
        </ScrollAnimationWrapper>

        {/* Why Choose Us */}
        <ScrollAnimationWrapper>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold !font-headline mb-4">
                Kenapa Harus Pilih{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Mobilin Jakarta?
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Kami memberikan layanan terbaik dengan harga paling kompetitif di Jakarta
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyChooseUs.map((item, index) => (
                <Card
                  key={index}
                  className="group bg-background/80 backdrop-blur-sm dark:bg-neutral-900 border-2 border-primary/10 hover:border-primary/30 shadow-lg hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-2"
                >
                  <CardContent className="p-6">
                    <div className="bg-gradient-to-br from-primary/20 to-accent/20 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 border border-primary/20">
                      <item.icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors duration-300" />
                    </div>
                    <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      {item.desc}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </ScrollAnimationWrapper>

        {/* Service Areas Enhanced */}
        <ScrollAnimationWrapper>
          <div className="max-w-6xl mx-auto">
            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/20 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold !font-headline mb-3">
                    Jangkauan Layanan di{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                      Jakarta & Sekitarnya
                    </span>
                  </h2>
                  <p className="text-muted-foreground">
                    Kami melayani rental mobil di seluruh area Jakarta dan sekitarnya
                  </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {serviceAreas.map((area, index) => (
                    <div
                      key={index}
                      className="group relative flex items-center gap-2 bg-background/80 backdrop-blur-sm p-4 rounded-lg shadow-sm hover:shadow-lg border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:scale-105"
                    >
                      <MapPin className="w-5 h-5 text-primary flex-shrink-0 group-hover:animate-bounce" />
                      <span className="font-medium text-sm group-hover:text-primary transition-colors duration-300">
                        {area.name}
                      </span>
                      {area.popular && (
                        <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs px-2 py-0.5 rounded-full font-bold">
                          ⭐
                        </span>
                      )}
                    </div>
                  ))}
                </div>
                
                {/* Popular Destinations */}
                <div className="mt-10 pt-8 border-t border-primary/20">
                  <h3 className="text-2xl font-bold text-center mb-6">
                    Destinasi Populer dari Jakarta
                  </h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {popularDestinations.map((dest, index) => (
                      <div
                        key={index}
                        className="bg-background/80 backdrop-blur-sm p-4 rounded-lg border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
                      >
                        <div className="flex items-start gap-3">
                          <div className="bg-gradient-to-br from-primary/20 to-accent/20 p-2 rounded-lg">
                            <Target className="w-5 h-5 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-bold mb-1">{dest.name}</h4>
                            <div className="flex items-center gap-3 text-sm text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <Gauge className="w-4 h-4" />
                                {dest.distance}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {dest.time}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </ScrollAnimationWrapper>

        {/* Payment Methods */}
        <ScrollAnimationWrapper>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold !font-headline mb-4">
                Metode{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Pembayaran Lengkap
                </span>
              </h2>
              <p className="text-muted-foreground">
                Kami menerima berbagai metode pembayaran untuk kemudahan Anda
              </p>
            </div>

            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/20">
              <CardContent className="p-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {paymentMethods.map((method, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center text-center group"
                    >
                      <div className="bg-gradient-to-br from-primary/20 to-accent/20 w-16 h-16 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 border border-primary/20">
                        <method.icon className="w-8 h-8 text-primary" />
                      </div>
                      <p className="font-semibold group-hover:text-primary transition-colors">
                        {method.name}
                      </p>
                      <p className="text-xs text-green-600 dark:text-green-400 font-semibold mt-1">
                        ✓ Tersedia
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center p-4 bg-background/80 rounded-lg border border-primary/10">
                  <p className="text-sm text-muted-foreground">
                    💡 <strong>Tips:</strong> Untuk member setia, kami menyediakan opsi <strong>Tanpa Deposit</strong> dan <strong>Bayar Belakangan</strong>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </ScrollAnimationWrapper>

        {/* Testimonials Enhanced */}
        <ScrollAnimationWrapper>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold !font-headline mb-4">
                Apa Kata{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Pelanggan Kami?
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Ribuan pelanggan puas telah mempercayai layanan rental mobil kami sejak 2015
              </p>
              
              {/* Overall Rating */}
              <div className="mt-6 inline-flex items-center gap-4 bg-gradient-to-r from-primary/10 to-accent/10 px-8 py-4 rounded-full border border-primary/20">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">4.9</div>
                  <div className="flex gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>
                <div className="text-left">
                  <p className="font-bold">Excellent</p>
                  <p className="text-sm text-muted-foreground">dari 2000+ review</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.slice(0, 6).map((testimonial, index) => (
                <Card
                  key={index}
                  className="group bg-background/80 backdrop-blur-sm dark:bg-neutral-900 border-2 border-primary/10 hover:border-primary/30 shadow-md hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-2"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                      <div className="bg-green-500/20 text-green-600 dark:text-green-400 px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Verified
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4 italic line-clamp-4 group-hover:text-foreground transition-colors duration-300">
                      "{testimonial.review}"
                    </p>
                    <div className="flex items-center gap-3 pt-4 border-t border-primary/10">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-primary/20 group-hover:border-primary/40 group-hover:scale-110 transition-all duration-300"
                      />
                      <div>
                        <span className="font-semibold block group-hover:text-primary transition-colors duration-300">
                          {testimonial.name}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          Pelanggan Setia
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-10">
              <Button
                variant="outline"
                size="lg"
                className="hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all duration-300"
                asChild
              >
                <a
                  href={`https://wa.me/6281342222747?text=${encodeURIComponent(
                    "Halo, saya mau lihat review lengkap dari pelanggan lain"
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Lihat Semua Review <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </ScrollAnimationWrapper>

        {/* FAQ Enhanced */}
        <ScrollAnimationWrapper>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold !font-headline mb-4">
                Pertanyaan yang Sering{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Ditanyakan
                </span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Temukan jawaban atas pertanyaan umum seputar rental mobil Jakarta
              </p>
            </div>
            <div className="space-y-4">
              {staticFaqs.slice(0, 10).map((faq, index) => (
                <Card
                  key={index}
                  className="group bg-background/80 backdrop-blur-sm dark:bg-neutral-900 border-2 border-primary/10 hover:border-primary/30 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg text-primary mb-3 flex items-start gap-3 group-hover:text-accent transition-colors duration-300">
                      <span className="bg-gradient-to-r from-primary/20 to-accent/20 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 text-sm border border-primary/20 group-hover:scale-110 transition-transform duration-300 font-bold">
                        {index + 1}
                      </span>
                      {faq.question}
                    </h3>
                    <p className="text-muted-foreground ml-11 group-hover:text-foreground transition-colors duration-300">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-10">
              <p className="text-muted-foreground mb-4">
                Masih ada pertanyaan lain?
              </p>
              <Button
                size="lg"
                variant="outline"
                className="hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all duration-300"
                asChild
              >
                <a
                  href={`https://wa.me/6281342222747?text=${encodeURIComponent(
                ="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary bg-300% animate-gradient-x block mt-2">
                    Mulai 300rb/Hari
                  </span>
                </h1>

                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                  🚗 Sopir Profesional • ✅ Mobil Terawat • ⚡ Booking Instant 24 Jam • 💯 Tanpa Deposit
                </p>

                {/* Enhanced Quick Benefits Grid */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {heroBenefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 bg-background/80 backdrop-blur-sm p-4 rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:scale-105 group"
                    >
                      <div className="bg-gradient-to-br from-primary/20 to-accent/20 p-2.5 rounded-lg border border-primary/20 group-hover:scale-110 transition-transform">
                        <benefit.icon className={`w-5 h-5 ${benefit.color}`} />
                      </div>
                      <span className="text-sm font-semibold group-hover:text-primary transition-colors">
                        {benefit.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Enhanced CTA Buttons */}
                <div className="space-y-4">
                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white h-16 text-lg font-bold shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-105 animate-bounce-slow"
                    asChild
                  >
                    <a
                      href={`https://wa.me/6281342222747?text=${encodeURIComponent(
                        bookingText
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="mr-2 w-6 h-6" />
                      💬 Chat WhatsApp - Respon 5 Menit
                    </a>
                  </Button>

                  <div className="flex gap-3">
                    <Button
                      size="lg"
                      variant="outline"
                      className="flex-1 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground h-14 text-base font-bold hover:scale-105 transition-all duration-300"
                      asChild
                    >
                      <a href="tel:+6281342222747">
                        <Phone className="mr-2 w-5 h-5" />
                        Telepon Sekarang
                      </a>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="flex-1 border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground h-14 text-base font-bold hover:scale-105 transition-all duration-300"
                      asChild
                    >
                      <a href="#promo">
                        <Gift className="mr-2 w-5 h-5" />
                        Lihat Promo
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Trust Indicators */}
                <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-primary/10">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm font-medium">Respon 5 Menit</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm font-medium">Tanpa Deposit</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm font-medium">Proses Mudah</span>
                  </div>
                </div>
              </div>

              {/* Right Column - Enhanced Trust Signals */}
              <div className="space-y-6">
                <Card className="bg-background/80 backdrop-blur-md border-2 border-primary/20 shadow-2xl hover:shadow-primary/30 transition-all duration-500 hover:scale-105">
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      {/* Stats */}
                      <div className="text-center pb-6 border-b border-primary/20">
                        <div className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                          2000+
                        </div>
                        <div className="text-muted-foreground font-medium">
                          Pelanggan Puas Sejak 2015
                        </div>
                      </div>

                      {/* Quick Stats Grid */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-5 rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-300 text-center">
                          <div className="text-3xl font-bold text-primary mb-1">50+</div>
                          <div className="text-sm text-muted-foreground">Unit Mobil</div>
                        </div>
                        <div className="bg-gradient-to-br from-accent/10 to-primary/10 p-5 rounded-xl border border-accent/10 hover:border-accent/30 transition-all duration-300 text-center">
                          <div className="text-3xl font-bold text-primary mb-1">24/7</div>
                          <div className="text-sm text-muted-foreground">Siap Melayani</div>
                        </div>
                        <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 p-5 rounded-xl border border-green-500/10 hover:border-green-500/30 transition-all duration-300 text-center">
                          <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-1">98%</div>
                          <div className="text-sm text-muted-foreground">Repeat Order</div>
                        </div>
                        <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 p-5 rounded-xl border border-blue-500/10 hover:border-blue-500/30 transition-all duration-300 text-center">
                          <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">10+</div>
                          <div className="text-sm text-muted-foreground">Tahun Pengalaman</div>
                        </div>
                      </div>

                      {/* Featured Review */}
                      <div className="bg-gradient-to-r from-accent/10 to-primary/10 p-5 rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-300">
                        <div className="flex items-center gap-2 mb-3">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-5 h-5 fill-yellow-400 text-yellow-400"
                            />
                          ))}
                        </div>
                        <p className="text-sm text-muted-foreground italic mb-3">
                          "Pelayanan excellent! Sopir ramah, mobil bersih dan wangi. Harga juga sangat reasonable. Highly recommended untuk rental mobil di Jakarta!"
                        </p>
                        <div className="flex items-center gap-3">
                          <img
                            src="https://placehold.co/40x40/1abc9c/ffffff?text=BS"
                            alt="Reviewer"
                            className="w-10 h-10 rounded-full border-2 border-primary/20"
                          />
                          <div>
                            <p className="font-semibold text-sm">Budi Santoso</p>
                            <p className="text-xs text-muted-foreground">CEO Startup Jakarta</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Live Status Indicator */}
                <Card className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-2 border-green-500/30">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                          <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                        </div>
                        <div>
                          <p className="font-bold text-green-700 dark:text-green-300">
                            Customer Service Online
                          </p>
                          <p className="text-xs text-muted-foreground">
                            Rata-rata respon: 3 menit
                          </p>
                        </div>
                      </div>
                      <Headphones className="w-8 h-8 text-green-600" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimationWrapper>

      <div className="container py-12 md:py-16 space-y-16 md:space-y-20">
        {/* Special Offers Section */}
        <ScrollAnimationWrapper>
          <div id="promo" className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold !font-headline mb-4">
                🎁 Promo Spesial{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Hari Ini!
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Dapatkan penawaran terbaik untuk rental mobil Jakarta. Stok terbatas!
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {specialOffers.map((offer, index) => (
                <Card
                  key={index}
                  className="group relative overflow-hidden bg-background/80 backdrop-blur-sm border-2 border-primary/20 hover:border-primary/40 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${offer.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
                  <CardContent className="p-6 relative z-10">
                    <div className={`bg-gradient-to-br ${offer.color} w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <offer.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-bold text-xl mb-2">{offer.title}</h3>
                    <p className="text-muted-foreground">{offer.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent text-accent-foreground h-14 text-lg font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                asChild
              >
                <a
                  href={`https://wa.me/6281342222747?text=${encodeURIComponent(
                    "Halo, saya mau tanya promo hari ini untuk rental mobil Jakarta"
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Gift className="mr-2 w-6 h-6" />
                  Klaim Promo Sekarang
                </a>
              </Button>
            </div>
          </div>
        </ScrollAnimationWrapper>

        {/* Service Packages */}
        <ScrollAnimationWrapper>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold !font-headline mb-4">
                Paket Layanan{" "}
                <span className
