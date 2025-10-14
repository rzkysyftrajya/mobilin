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
    "Rental Mobil Jakarta Murah Mulai 300rb/Hari | Booking Instant 24 Jam";
  const description =
    "✓ Harga Mulai 300rb/hari ✓ Sopir Profesional ✓ Mobil Terawat ✓ Booking Instant via WA. Rental mobil Jakarta untuk wisata, bisnis & keperluan keluarga. Promo spesial hari ini!";

  return {
    title,
    description,
    keywords:
      "rental mobil jakarta, sewa mobil jakarta murah, rental mobil jakarta 24 jam, sewa mobil jakarta dengan sopir, harga rental mobil jakarta, booking mobil jakarta",
    alternates: {
      canonical: `/rental-mobil-jakarta`,
    },
    openGraph: {
      title,
      description,
      url: `/rental-mobil-jakarta`,
      images: [
        {
          url: `https://placehold.co/1200x630/1abc9c/ffffff?text=Rental+Mobil+Jakarta+Murah`,
          width: 1200,
          height: 630,
          alt: `Rental Mobil Jakarta Murah & Terpercaya`,
        },
      ],
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

  // Benefit points untuk hero section
  const heroBenefits = [
    { icon: TrendingDown, text: "Harga Mulai 300rb/Hari" },
    { icon: BadgeCheck, text: "Sopir Profesional & Ramah" },
    { icon: Clock, text: "Layanan 24 Jam Non-Stop" },
    { icon: MessageCircle, text: "Booking Instant via WhatsApp" },
  ];

  // Why choose us reasons
  const whyChooseUs = [
    {
      icon: Shield,
      title: "Terpercaya & Aman",
      desc: "Ribuan pelanggan puas, armada terawat dengan asuransi lengkap",
    },
    {
      icon: TrendingDown,
      title: "Harga Transparan",
      desc: "Tidak ada biaya tersembunyi, harga sudah termasuk sopir",
    },
    {
      icon: Users,
      title: "Sopir Berpengalaman",
      desc: "Sopir profesional, ramah, dan tahu jalan Jakarta dengan baik",
    },
    {
      icon: Zap,
      title: "Proses Cepat",
      desc: "Booking mudah via WhatsApp, konfirmasi instant dalam 5 menit",
    },
    {
      icon: Car,
      title: "Armada Lengkap",
      desc: "Berbagai pilihan mobil dari city car hingga kelas premium",
    },
    {
      icon: Headphones,
      title: "Customer Service 24/7",
      desc: "Tim support siap membantu kapan saja untuk kebutuhan Anda",
    },
  ];

  // Popular cars with pricing
  const popularCars = [
    {
      name: "Toyota Avanza",
      capacity: "6-7 Penumpang",
      price: "Mulai 350rb/hari",
      features: ["AC Dingin", "Sopir Berpengalaman", "BBM Irit"],
      image: "https://placehold.co/400x300/e3f2fd/1976d2?text=Toyota+Avanza",
    },
    {
      name: "Honda Brio",
      capacity: "4-5 Penumpang",
      price: "Mulai 300rb/hari",
      features: ["Lincah di Macet", "Irit BBM", "Nyaman & Bersih"],
      image: "https://placehold.co/400x300/f3e5f5/7b1fa2?text=Honda+Brio",
    },
    {
      name: "Toyota Innova Reborn",
      capacity: "6-7 Penumpang",
      price: "Mulai 500rb/hari",
      features: ["Kabin Luas", "Kenyamanan Extra", "Bagasi Besar"],
      image: "https://placehold.co/400x300/e8f5e9/388e3c?text=Innova+Reborn",
    },
    {
      name: "Toyota Alphard",
      capacity: "6-7 Penumpang",
      price: "Mulai 1.5jt/hari",
      features: ["Luxury Interior", "Captain Seat", "Entertainment System"],
      image: "https://placehold.co/400x300/fff3e0/f57c00?text=Toyota+Alphard",
    },
  ];

  // Service areas in Jakarta
  const serviceAreas = [
    "Jakarta Pusat",
    "Jakarta Selatan",
    "Jakarta Utara",
    "Jakarta Barat",
    "Jakarta Timur",
    "Tangerang",
    "Bekasi",
    "Depok",
    "Bogor",
    "Bandara Soekarno-Hatta",
  ];

  return (
    <div className="bg-secondary/30 dark:bg-background">
      {/* Urgent Banner */}
      <div className="bg-accent text-accent-foreground py-2 text-center font-semibold text-sm md:text-base">
        🎉 PROMO HARI INI! Diskon hingga 15% untuk booking sekarang • Stok
        Terbatas!
      </div>

      {/* Hero Section - Above the Fold Optimized */}
      <ScrollAnimationWrapper>
        <div className="relative bg-gradient-to-br from-primary/10 via-background to-accent/10 py-10 md:py-16 overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute top-40 right-20 w-24 h-24 bg-accent/20 rounded-full blur-xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-primary/10 rounded-full blur-2xl animate-pulse delay-500"></div>
          </div>

          {/* Glassmorphism Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-background/20 via-transparent to-background/20 backdrop-blur-sm"></div>

          <div className="container relative z-10">
            <div className="mb-3">
              <Breadcrumb items={breadcrumbItems} lang="id" />
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Left Column - Main CTA */}
              <div className="space-y-6">
                <div className="inline-block bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-sm text-primary px-6 py-3 rounded-full text-sm font-semibold mb-4 border border-primary/20 shadow-lg animate-fade-in">
                  ⭐ Rating 4.9/5 dari 2000+ Pelanggan
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold !font-headline text-foreground mb-4 leading-tight animate-slide-up">
                  Rental Mobil Jakarta
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary bg-300% animate-gradient-x block mt-2">
                    Mulai 300rb/Hari
                  </span>
                </h1>

                <p className="text-xl md:text-2xl text-muted-foreground mb-6 leading-relaxed animate-slide-up delay-200">
                  Sopir Profesional • Mobil Terawat • Booking Instant 24 Jam
                </p>

                {/* Quick Benefits */}
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {heroBenefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 bg-background/60 backdrop-blur-sm p-3 rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:scale-105 animate-fade-in"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="bg-gradient-to-br from-primary/20 to-accent/20 p-2 rounded-lg border border-primary/20">
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
                    className="bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent text-accent-foreground h-14 text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in delay-500"
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
                      Pesan Sekarang via WhatsApp
                    </a>
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground h-14 text-lg font-bold hover:scale-105 transition-all duration-300 animate-fade-in delay-700"
                    asChild
                  >
                    <a href="tel:+6281342222747">
                      <Phone className="mr-2 w-6 h-6" />
                      Hubungi: 0813-4222-2747
                    </a>
                  </Button>
                </div>

                <p className="text-sm text-muted-foreground animate-fade-in delay-1000">
                  ✓ Respon dalam 5 menit • ✓ Tanpa deposit • ✓ Proses mudah &
                  cepat
                </p>
              </div>

              {/* Right Column - Trust Signals */}
              <div className="hidden lg:block animate-slide-in-right">
                <Card className="bg-background/80 backdrop-blur-md border-2 border-primary/20 shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:scale-105">
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div className="text-center pb-6 border-b border-primary/20">
                        <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2 animate-count-up">
                          2000+
                        </div>
                        <div className="text-muted-foreground">
                          Pelanggan Puas
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-4 rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-300">
                          <div className="text-3xl font-bold text-primary mb-1 animate-count-up">
                            50+
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Unit Mobil
                          </div>
                        </div>
                        <div className="bg-gradient-to-br from-accent/10 to-primary/10 p-4 rounded-xl border border-accent/10 hover:border-accent/30 transition-all duration-300">
                          <div className="text-3xl font-bold text-primary mb-1">
                            24/7
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Siap Melayani
                          </div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-accent/10 to-primary/10 p-4 rounded-lg border border-primary/10 hover:border-primary/30 transition-all duration-300">
                        <div className="flex items-center gap-2 mb-2">
                          <Star className="w-5 h-5 fill-yellow-400 text-yellow-400 animate-pulse" />
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
        {/* Why Choose Us Section */}
        <ScrollAnimationWrapper>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold !font-headline mb-4">
                Kenapa Harus Pilih{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Mobilin Jakarta?
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Kami memberikan layanan terbaik dengan harga paling kompetitif
                di Jakarta
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyChooseUs.map((item, index) => (
                <Card
                  key={index}
                  className="group bg-background/80 backdrop-blur-sm dark:bg-neutral-900 border-2 border-primary/10 hover:border-primary/30 shadow-lg hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-2"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="bg-gradient-to-br from-primary/20 to-accent/20 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border border-primary/20">
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

        {/* Popular Cars with Pricing */}
        <ScrollAnimationWrapper>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold !font-headline mb-4">
                Pilihan Mobil &{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Harga Terbaik
                </span>
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
                  className="group bg-background/80 backdrop-blur-sm dark:bg-neutral-900 border-2 border-primary/20 shadow-lg hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/40 transition-all duration-500 overflow-hidden hover:-translate-y-2 hover:rotate-1"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img
                      src={car.image}
                      alt={car.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    {/* Price Badge */}
                    <div className="absolute top-3 right-3 bg-accent/90 backdrop-blur-sm text-accent-foreground px-3 py-1 rounded-full text-sm font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      {car.price}
                    </div>
                  </div>
                  <CardContent className="p-5">
                    <h3 className="font-bold text-xl mb-1 group-hover:text-primary transition-colors duration-300">
                      {car.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3 flex items-center gap-1">
                      <Users className="w-4 h-4 text-primary" />
                      {car.capacity}
                    </p>
                    <div className="bg-gradient-to-r from-accent/10 to-primary/10 text-accent px-3 py-2 rounded-lg font-bold text-lg mb-4 text-center border border-primary/10">
                      {car.price}
                    </div>
                    <ul className="space-y-2 mb-4">
                      {car.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-sm group-hover:text-foreground transition-colors duration-300"
                        >
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 animate-pulse" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 hover:scale-105 transition-all duration-300"
                      asChild
                    >
                      <a
                        href={`https://wa.me/6281342222747?text=${encodeURIComponent(
                          `Halo, saya tertarik dengan ${car.name} untuk rental di Jakarta.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Pesan {car.name}
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-muted-foreground mb-4">
                *Harga sudah termasuk sopir. Belum termasuk BBM, tol, dan
                parkir.
              </p>
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
            </div>
          </div>
        </ScrollAnimationWrapper>

        {/* Service Areas */}
        <ScrollAnimationWrapper>
          <div className="max-w-6xl mx-auto">
            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold !font-headline mb-3">
                    Jangkauan Layanan di{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                      Jakarta & Sekitarnya
                    </span>
                  </h2>
                  <p className="text-muted-foreground">
                    Kami melayani rental mobil di seluruh area Jakarta dan
                    sekitarnya
                  </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {serviceAreas.map((area, index) => (
                    <div
                      key={index}
                      className="group flex items-center gap-2 bg-background/80 backdrop-blur-sm p-3 rounded-lg shadow-sm hover:shadow-md border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:scale-105"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <MapPin className="w-5 h-5 text-primary flex-shrink-0 group-hover:animate-bounce" />
                      <span className="font-medium text-sm group-hover:text-primary transition-colors duration-300">
                        {area}
                      </span>
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
                Apa Kata{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Pelanggan Kami?
                </span>
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
                  className="group bg-background/80 backdrop-blur-sm dark:bg-neutral-900 border-2 border-primary/10 hover:border-primary/30 shadow-md hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-2 hover:rotate-1"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-yellow-400 text-yellow-400 group-hover:animate-pulse"
                        />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 italic line-clamp-4 group-hover:text-foreground transition-colors duration-300">
                      "{testimonial.review}"
                    </p>
                    <div className="flex items-center gap-3">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-primary/20 group-hover:border-primary/40 transition-colors duration-300"
                      />
                      <span className="font-semibold group-hover:text-primary transition-colors duration-300">
                        {testimonial.name}
                      </span>
                    </div>
                    {/* Trust Badge */}
                    <div className="mt-4 inline-flex items-center gap-1 bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">
                      <svg
                        className="w-3 h-3"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Verified Review
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </ScrollAnimationWrapper>

        {/* FAQ Section */}
        <ScrollAnimationWrapper>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold !font-headline mb-4">
                Pertanyaan yang Sering{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Ditanyakan
                </span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Temukan jawaban atas pertanyaan umum seputar rental mobil
                Jakarta
              </p>
            </div>
            <div className="space-y-4">
              {staticFaqs.slice(0, 8).map((faq, index) => (
                <Card
                  key={index}
                  className="group bg-background/80 backdrop-blur-sm dark:bg-neutral-900 border-2 border-primary/10 hover:border-primary/30 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg text-primary mb-3 flex items-start gap-2 group-hover:text-accent transition-colors duration-300">
                      <span className="bg-gradient-to-r from-primary/20 to-accent/20 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm mt-0.5 border border-primary/20 group-hover:scale-110 transition-transform duration-300">
                        {index + 1}
                      </span>
                      {faq.question}
                    </h3>
                    <p className="text-muted-foreground ml-8 group-hover:text-foreground transition-colors duration-300">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </ScrollAnimationWrapper>

        {/* CTA Section */}
        <ScrollAnimationWrapper>
          <div className="max-w-4xl mx-auto text-center">
            <Card className="bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 border-2 border-primary/20 shadow-xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
              {/* Background Elements */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-10 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute bottom-10 right-10 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-pulse delay-1000"></div>
              </div>

              <CardContent className="p-8 md:p-12 relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold !font-headline mb-4">
                  Siap Memesan{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                    Rental Mobil Jakarta?
                  </span>
                </h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Hubungi kami sekarang untuk mendapatkan penawaran terbaik dan
                  layanan rental mobil Jakarta yang profesional
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent text-accent-foreground h-14 text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
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
                      Pesan via WhatsApp
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground h-14 text-lg font-bold hover:scale-105 transition-all duration-300"
                    asChild
                  >
                    <a href="tel:+6281342222747">
                      <Phone className="mr-2 w-6 h-6" />
                      Hubungi: 0813-4222-2747
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </ScrollAnimationWrapper>

        {/* Trust Badges */}
        <ScrollAnimationWrapper>
          <div className="max-w-4xl mx-auto text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex flex-col items-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-3">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <p className="font-semibold">Asuransi</p>
                <p className="text-sm text-muted-foreground">Lengkap</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-3">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <p className="font-semibold">Sopir</p>
                <p className="text-sm text-muted-foreground">Berpengalaman</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-3">
                  <ThumbsUp className="w-8 h-8 text-primary" />
                </div>
                <p className="font-semibold">Mobil</p>
                <p className="text-sm text-muted-foreground">Terawat</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-3">
                  <Headphones className="w-8 h-8 text-primary" />
                </div>
                <p className="font-semibold">Support</p>
                <p className="text-sm text-muted-foreground">24/7</p>
              </div>
            </div>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
}
