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
    {
      icon: TrendingDown,
      text: "Harga Mulai 300rb/Hari",
      color: "text-green-500",
    },
    {
      icon: BadgeCheck,
      text: "Sopir Profesional & Ramah",
      color: "text-blue-500",
    },
    { icon: Clock, text: "Layanan 24 Jam Non-Stop", color: "text-purple-500" },
    {
      icon: MessageCircle,
      text: "Booking Instant via WhatsApp",
      color: "text-orange-500",
    },
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
      features: [
        "Lincah di Macet",
        "Irit BBM (20km/L)",
        "AC Dingin",
        "Audio System",
      ],
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
      features: [
        "Kabin Luas Premium",
        "Kenyamanan Extra",
        "Bagasi Besar",
        "Captain Seat",
      ],
      image: "https://placehold.co/400x300/e8f5e9/388e3c?text=Innova+Reborn",
      badge: "PREMIUM",
      use: "Business • VIP Guest • Long Trip",
    },
    {
      name: "Toyota Alphard",
      capacity: "6-7 Penumpang",
      price: "Mulai 1.5jt/hari",
      oldPrice: "2jt/hari",
      features: [
        "Luxury Interior",
        "Captain Seat Premium",
        "Entertainment System",
        "Privacy Glass",
      ],
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
    "Jakarta Pusat",
    "Jakarta Selatan",
    "Jakarta Utara",
    "Jakarta Barat",
    "Jakarta Timur",
    "Tangerang & BSD",
    "Bekasi",
    "Depok",
    "Bogor & Puncak",
    "Bandara Soekarno-Hatta",
    "Bandung",
    "Anyer & Carita",
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

  return (
    <div className="bg-secondary/30 dark:bg-background">
      {/* Urgent Banner with Countdown */}
      <div className="bg-gradient-to-r from-red-600 via-orange-600 to-red-600 text-white py-3 text-center font-semibold text-sm md:text-base animate-pulse">
        🔥 PROMO SPESIAL HARI INI! Diskon hingga 15% + GRATIS 2 Jam Extra •
        Booking Sekarang! ⚡
      </div>

      {/* Hero Section - Highly Optimized */}
      <ScrollAnimationWrapper>
        <div className="relative bg-gradient-to-br from-primary/10 via-background to-accent/10 py-10 md:py-16">
          <div className="container">
            <div className="mb-3">
              <Breadcrumb items={breadcrumbItems} lang="id" />
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Left Column - Main CTA */}
              <div>
                <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  ⭐ Rating 4.9/5 dari 2000+ Pelanggan
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold !font-headline text-foreground mb-4 leading-tight">
                  Rental Mobil Jakarta
                  <span className="text-primary block mt-2">
                    Mulai 300rb/Hari
                  </span>
                </h1>

                <p className="text-xl md:text-2xl text-muted-foreground mb-6 leading-relaxed">
                  Sopir Profesional • Mobil Terawat • Booking Instant 24 Jam
                </p>

                {/* Quick Benefits */}
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {heroBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <benefit.icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-sm font-medium">
                        {benefit.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <Button
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground h-14 text-lg font-bold shadow-lg hover:shadow-xl transition-all"
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
                    className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground h-14 text-lg font-bold"
                    asChild
                  >
                    <a href="tel:+6281342222747">
                      <Phone className="mr-2 w-6 h-6" />
                      📞 0813-4222-2747
                    </a>
                  </Button>
                </div>

                <p className="text-sm text-muted-foreground">
                  ✓ Respon dalam 5 menit • ✓ Tanpa deposit • ✓ Proses mudah &
                  cepat
                </p>
              </div>

              {/* Right Column - Trust Signals */}
              <div className="hidden lg:block">
                <Card className="bg-background/80 backdrop-blur border-2 border-primary/20 shadow-2xl">
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div className="text-center pb-6 border-b">
                        <div className="text-4xl font-bold text-primary mb-2">
                          2000+
                        </div>
                        <div className="text-muted-foreground">
                          Pelanggan Puas
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div>
                          <div className="text-3xl font-bold text-primary mb-1">
                            50+
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Unit Mobil
                          </div>
                        </div>
                        <div>
                          <div className="text-3xl font-bold text-primary mb-1">
                            24/7
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Siap Melayani
                          </div>
                        </div>
                      </div>

                      <div className="bg-accent/10 p-4 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                          <span className="font-bold">Rating 4.9/5</span>
                        </div>
                        <p className="text-sm text-muted-foreground italic">
                          "Sopir ramah, mobil bersih, harga terjangkau.
                          Recommended banget!"
                        </p>
                        <p className="text-xs text-muted-foreground mt-2">
                          - Budi S., Jakarta
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimationWrapper>

      <div className="container py-12 md:py-16 space-y-16 md:space-y-20">
        {/* Why Choose Us */}
        <ScrollAnimationWrapper>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold !font-headline mb-4">
                Kenapa Harus Pilih{" "}
                <span className="text-primary">Mobilin Jakarta?</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Kami memberikan layanan terbaik dengan harga paling kompetitif
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyChooseUs.map((item, index) => (
                <Card
                  key={index}
                  className="bg-background dark:bg-neutral-900 border-none shadow-md hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-6">
                    <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                      <item.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
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
                className="hover:bg-primary hover:text-primary-foreground"
                asChild
              >
                <a
                  href={`https://wa.me/6281342222747?text=${encodeURIComponent(
                    "Halo, saya punya pertanyaan tentang rental mobil Jakarta"
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tanya via WhatsApp <MessageCircle className="ml-2 w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </ScrollAnimationWrapper>

        {/* Final CTA Section */}
        <ScrollAnimationWrapper>
          <Card className="max-w-5xl mx-auto bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground shadow-2xl overflow-hidden relative">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
            <CardContent className="p-10 md:p-16 text-center relative z-10">
              <div className="inline-block bg-accent text-accent-foreground px-6 py-2 rounded-full font-bold mb-6 text-lg animate-pulse">
                🔥 PROMO TERBATAS HARI INI!
              </div>

              <h2 className="text-3xl md:text-5xl font-extrabold !font-headline mb-4">
                Siap Rental Mobil di Jakarta?
              </h2>
              <p className="text-xl md:text-2xl mb-3 opacity-95">
                Dapatkan Diskon hingga 15% untuk Booking Hari Ini!
              </p>
              <p className="text-lg mb-8 opacity-90">
                Proses cepat, harga transparan, sopir profesional • Tersedia 24
                jam
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground h-16 text-xl font-bold shadow-xl hover:shadow-2xl transition-all w-full sm:w-auto px-10"
                  asChild
                >
                  <a
                    href={`https://wa.me/6281342222747?text=${encodeURIComponent(
                      bookingText
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-3 w-7 h-7" />
                    Pesan Sekarang via WA
                  </a>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/80 text-white hover:bg-white hover:text-primary h-16 text-xl font-bold w-full sm:w-auto px-10"
                  asChild
                >
                  <a href="tel:+6281342222747">
                    <Phone className="mr-3 w-7 h-7" />
                    0813-4222-2747
                  </a>
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
                <div className="bg-white/10 backdrop-blur p-4 rounded-lg">
                  <Clock className="w-8 h-8 mx-auto mb-2" />
                  <p className="font-bold">Layanan 24 Jam</p>
                </div>
                <div className="bg-white/10 backdrop-blur p-4 rounded-lg">
                  <Zap className="w-8 h-8 mx-auto mb-2" />
                  <p className="font-bold">Booking Instant</p>
                </div>
                <div className="bg-white/10 backdrop-blur p-4 rounded-lg">
                  <BadgeCheck className="w-8 h-8 mx-auto mb-2" />
                  <p className="font-bold">Terpercaya & Aman</p>
                </div>
              </div>

              <p className="mt-8 opacity-75 text-sm">
                Sudah melayani 2000+ pelanggan puas di Jakarta • Rating 4.9/5
              </p>
            </CardContent>
          </Card>
        </ScrollAnimationWrapper>

        {/* SEO Content Section */}
        <ScrollAnimationWrapper>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-background/80 backdrop-blur-sm border-2 border-primary/10">
              <CardContent className="p-8 prose prose-lg dark:prose-invert max-w-none">
                <h2 className="text-2xl font-bold mb-4">
                  Rental Mobil Jakarta - Solusi Transportasi Terpercaya
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Mencari <strong>rental mobil Jakarta</strong> yang murah,
                  terpercaya, dan profesional? Anda berada di tempat yang tepat!
                  Kami menyediakan layanan <strong>sewa mobil Jakarta</strong>{" "}
                  dengan sopir berpengalaman untuk berbagai kebutuhan: wisata,
                  bisnis, acara keluarga, wedding, hingga airport transfer.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Dengan armada lengkap mulai dari city car seperti Honda Brio
                  hingga mobil mewah seperti Toyota Alphard, kami siap melayani
                  Anda 24 jam non-stop.{" "}
                  <strong>Harga rental mobil Jakarta</strong> kami sangat
                  kompetitif mulai dari 300rb/hari sudah termasuk sopir
                  profesional.
                </p>

                <h3 className="text-xl font-bold mb-3 mt-6">
                  Keunggulan Rental Mobil Jakarta Kami
                </h3>
                <ul className="space-y-2 text-muted-foreground mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>
                      <strong>Harga Transparan:</strong> Tidak ada biaya
                      tersembunyi, harga sudah termasuk sopir
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>
                      <strong>Armada Terawat:</strong> Service rutin, bersih,
                      wangi, dan dalam kondisi prima
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>
                      <strong>Sopir Berpengalaman:</strong> Ramah, profesional,
                      dan menguasai rute Jakarta
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>
                      <strong>Booking Mudah:</strong> Pesan via WhatsApp,
                      konfirmasi dalam 5 menit
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>
                      <strong>Layanan 24/7:</strong> Siap melayani kapan saja
                      termasuk hari libur
                    </span>
                  </li>
                </ul>

                <h3 className="text-xl font-bold mb-3 mt-6">
                  Area Layanan Rental Mobil Jakarta
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Kami melayani <strong>rental mobil di Jakarta</strong> dan
                  sekitarnya termasuk Jakarta Pusat, Jakarta Selatan, Jakarta
                  Utara, Jakarta Barat, Jakarta Timur, Tangerang, BSD, Bekasi,
                  Depok, Bogor, dan Bandara Soekarno-Hatta. Untuk perjalanan
                  luar kota seperti Bandung, Anyer, atau Puncak juga tersedia
                  dengan harga special.
                </p>

                <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl border border-primary/20">
                  <h4 className="text-lg font-bold mb-3">
                    Cara Booking Rental Mobil Jakarta:
                  </h4>
                  <ol className="space-y-2 text-muted-foreground list-decimal list-inside">
                    <li>Hubungi kami via WhatsApp atau telepon</li>
                    <li>
                      Sampaikan kebutuhan Anda (jenis mobil, tanggal, tujuan)
                    </li>
                    <li>Dapatkan penawaran harga terbaik</li>
                    <li>Konfirmasi booking (tanpa deposit untuk member)</li>
                    <li>Mobil dan sopir siap melayani tepat waktu</li>
                  </ol>
                </div>

                <p className="text-muted-foreground leading-relaxed mt-6">
                  Jangan ragu untuk menghubungi kami kapan saja. Tim customer
                  service kami siap membantu Anda menemukan{" "}
                  <strong>rental mobil Jakarta murah</strong> yang sesuai dengan
                  kebutuhan dan budget Anda. Pesan sekarang dan dapatkan promo
                  special hari ini!
                </p>
              </CardContent>
            </Card>
          </div>
        </ScrollAnimationWrapper>

        {/* Service Packages */}
        <ScrollAnimationWrapper>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold !font-headline mb-4">
                Layanan Kami{" "}
                <span className="text-primary">Untuk Setiap Kebutuhan</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Kami menyediakan solusi rental mobil untuk berbagai keperluan
                Anda
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {servicePackages.map((pkg, index) => (
                <Card
                  key={index}
                  className="bg-background dark:bg-neutral-900 border-2 border-primary/10 hover:border-primary/30 shadow-lg hover:shadow-xl transition-all"
                >
                  <CardContent className="p-6">
                    <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                      <pkg.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-bold text-xl mb-2">{pkg.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">
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
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </ScrollAnimationWrapper>

        {/* Popular Cars with Pricing */}
        <ScrollAnimationWrapper>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold !font-headline mb-4">
                Pilihan Mobil &{" "}
                <span className="text-primary">Harga Terbaik</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Berbagai pilihan armada untuk kebutuhan Anda dengan harga
                transparan
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {popularCars.map((car, index) => (
                <Card
                  key={index}
                  className="bg-background dark:bg-neutral-900 border-2 border-primary/20 shadow-lg hover:shadow-xl hover:border-primary/40 transition-all overflow-hidden group"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={car.image}
                      alt={car.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-5">
                    <h3 className="font-bold text-xl mb-1">{car.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3 flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {car.capacity}
                    </p>
                    <div className="bg-accent/10 text-accent px-3 py-2 rounded-lg font-bold text-lg mb-4 text-center">
                      {car.price}
                    </div>

                    {/* Features */}
                    <ul className="space-y-2 mb-4">
                      {car.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <Button
                      className="w-full bg-primary hover:bg-primary/90"
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
                *Harga sudah termasuk sopir. Belum termasuk BBM, tol, dan
                parkir.
              </p>
              <Button size="lg" variant="outline" asChild>
                <Link href={`/id/daftar-mobil`}>
                  Lihat Semua Armada <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </ScrollAnimationWrapper>

        {/* Service Areas */}
        <ScrollAnimationWrapper>
          <div className="max-w-6xl mx-auto">
            <Card className="bg-primary/5 border-2 border-primary/20">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold !font-headline mb-3">
                    Jangkauan Layanan di{" "}
                    <span className="text-primary">Jakarta & Sekitarnya</span>
                  </h2>
                  <p className="text-muted-foreground">
                    Kami melayani rental mobil di seluruh area Jakarta dan
                    sekitarnya
                  </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {serviceAreas.map((area, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 bg-background p-3 rounded-lg shadow-sm"
                    >
                      <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="font-medium text-sm">{area}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </ScrollAnimationWrapper>

        {/* Testimonials */}
        <ScrollAnimationWrapper>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold !font-headline mb-4">
                Apa Kata <span className="text-primary">Pelanggan Kami?</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Ribuan pelanggan puas telah mempercayai layanan rental mobil
                kami
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.slice(0, 6).map((testimonial, index) => (
                <Card
                  key={index}
                  className="bg-background dark:bg-neutral-900 border-none shadow-md hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 italic">
                      "{testimonial.review}"
                    </p>
                    <div className="flex items-center gap-3 pt-4 border-t">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <span className="font-semibold">{testimonial.name}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </ScrollAnimationWrapper>

        {/* FAQ */}
        <ScrollAnimationWrapper>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold !font-headline mb-4">
                Pertanyaan yang Sering{" "}
                <span className="text-primary">Ditanyakan</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Temukan jawaban atas pertanyaan umum seputar rental mobil
                Jakarta
              </p>
            </div>
            <div className="space-y-4">
              {staticFaqs.slice(0, 10).map((_faq, index) => (
                <Card
                  key={index}
                  className="bg-background dark:bg-neutral-900 border-none shadow-md"
                >
                  <CardContent className="p-6">
                    <CardHeader>
                      <CardTitle className="text-left">
                        {_faq.question}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-muted-foreground">{_faq.answer}</p>
                    </CardContent>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
}
