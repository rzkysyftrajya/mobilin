import { getServiceBySlug, services } from "@/lib/services";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import ScrollAnimationWrapper from "@/components/shared/scroll-animation-wrapper";
import Link from "next/link";
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/lib/dictionary";

type Props = {
  params: Promise<{ slug: string; lang: Locale }>;
};

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const service = getServiceBySlug(params.slug);

  if (!service) {
    return {};
  }

  return {
    title: service.title,
    description: service.description,
    alternates: {
      canonical: `/${params.lang}/layanan/${service.slug}`,
    },
    openGraph: {
      title: service.title,
      description: service.description,
      url: `/${params.lang}/layanan/${service.slug}`,
      images: [
        {
          url: "/hero-section.png",
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },
  };
}

export default async function ServiceDetailPage(props: Props) {
  const params = await props.params;
  const service = getServiceBySlug(params.slug);
  const dict = await getDictionary(params.lang);
  const pageDict = dict.service_page;

  if (!service) {
    notFound();
  }

  const bookingText = `Halo Mobilin, saya ingin bertanya tentang layanan ${service.title}.`;

  const whyPoints = [
    dict.features.items[0].title,
    dict.features.items[1].title,
    dict.features.items[2].title,
    dict.features.items[3].title,
  ];

  return (
    <div className="bg-secondary/20 dark:bg-background">
      {/* Hero Section */}
      <ScrollAnimationWrapper>
        <div className="relative h-[50vh] min-h-[350px] flex items-center justify-center text-white text-center">
          <Image
            src="/hero-section.png"
            alt={`Layanan ${service.title} dari Mobilin`}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 container px-4">
            <div className="p-4 bg-primary/20 backdrop-blur-sm rounded-full mb-4 inline-block border border-primary/50 text-primary">
              <service.icon className="w-10 h-10" />
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold !font-headline tracking-tight drop-shadow-lg mt-2">
              {service.title}
            </h1>
            <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-neutral-200 drop-shadow-md">
              {service.description}
            </p>
          </div>
        </div>
      </ScrollAnimationWrapper>

      {/* Content Section */}
      <div className="container py-12 md:py-20">
        <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
          <div className="lg:col-span-2">
            <ScrollAnimationWrapper>
              <Card className="shadow-lg dark:bg-neutral-900">
                <CardContent className="p-6 md:p-8 text-lg text-muted-foreground">
                  {service.longDescription}
                </CardContent>
              </Card>
            </ScrollAnimationWrapper>
          </div>
          <div className="lg:col-span-1">
            <ScrollAnimationWrapper>
              <Card className="sticky top-24 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold !font-headline mb-4">
                    {pageDict.why_choose_title}
                  </h3>
                  <ul className="space-y-3 mb-6">
                    {whyPoints.map((point) => (
                      <li
                        key={point}
                        className="flex items-center gap-2 text-sm text-foreground"
                      >
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    size="lg"
                    className="w-full mb-3 bg-primary hover:bg-primary/90"
                  >
                    <Link href={`/${params.lang}/daftar-mobil`}>
                      {pageDict.view_our_cars}
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    className="w-full bg-accent hover:bg-accent/90"
                  >
                    <a
                      href={`https://wa.me/6285177262716?text=${encodeURIComponent(
                        bookingText
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {dict.buttons.contact_us_whatsapp}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </div>
    </div>
  );
}
