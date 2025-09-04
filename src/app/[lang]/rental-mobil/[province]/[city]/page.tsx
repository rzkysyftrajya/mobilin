import { getProvinceNameBySlug, getProvinceContent } from "@/lib/provinces";
import { getCityName } from "@/lib/cities";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ScrollAnimationWrapper from "@/components/shared/scroll-animation-wrapper";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/lib/dictionary";
import { Breadcrumb } from "@/components/shared/breadcrumb";
import { ElementType } from "react";

type Props = {
  params: { province: string; city: string; lang: Locale };
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata | undefined> {
  const { province, city, lang } = await params; // ✅ fix

  const provinceData = getProvinceNameBySlug(province);
  const cityData = getCityName(province, city);
  if (!provinceData || !cityData) return undefined;

  const dict = await getDictionary(lang);
  const title = dict.province_page.meta_title.replace(
    "{{provinceName}}",
    cityData.name
  );
  const description = dict.province_page.meta_description.replace(
    "{{provinceName}}",
    cityData.name
  );

  return {
    title,
    description,
    alternates: {
      canonical: `/${lang}/rental-mobil/${province}/${city}`,
    },
    openGraph: {
      title,
      description,
      url: `/${lang}/rental-mobil/${province}/${city}`,
      images: [
        {
          url: `https://placehold.co/1200x630/1abc9c/ffffff?text=Rental+Mobil+${encodeURIComponent(
            cityData.name
          )}`,
          width: 1200,
          height: 630,
          alt: `Layanan Rental Mobil Mobilin di ${cityData.name}`,
        },
      ],
    },
  };
}

export default async function CityPage({ params }: Props) {
  const { province, city, lang } = await params; // ✅ fix

  const provinceData = getProvinceNameBySlug(province);
  const cityData = getCityName(province, city);
  if (!provinceData || !cityData) notFound();

  const dict = await getDictionary(lang);
  const cityName = cityData.name;
  const content = getProvinceContent(province, dict);

  const bookingText = dict.province_page.whatsapp_text.replace(
    "{{provinceName}}",
    cityName
  );

  const breadcrumbItems = [
    { label: dict.navigation.home, href: `/${lang}` },
    {
      label: provinceData.name,
      href: `/${lang}/rental-mobil/${provinceData.slug}`,
    },
    { label: cityName },
  ];

  return (
    <div className="bg-secondary/30 dark:bg-background">
      {/* Hero Section */}
      <ScrollAnimationWrapper>
        <div className="relative bg-background py-12 md:py-20 text-center">
          <div className="container">
            <div className="mb-4">
              <Breadcrumb items={breadcrumbItems} lang={lang} />
            </div>
            <p className="text-primary font-semibold">
              {dict.province_page.hero_subtitle.replace(
                /{{provinceName}}/g,
                cityName
              )}
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold !font-headline text-foreground mt-2 mb-2">
              {content.h1.replace(/{{provinceName}}/g, cityName)}
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold !font-headline text-accent">
              {content.tagline.replace(/{{provinceName}}/g, cityName)}
            </h2>
          </div>
        </div>
      </ScrollAnimationWrapper>

      <div className="container py-12 md:py-16 space-y-12 md:space-y-20">
        {/* Intro Section */}
        <ScrollAnimationWrapper>
          <Card className="max-w-4xl mx-auto shadow-lg border-none bg-background dark:bg-neutral-900">
            <CardContent className="p-6 md:p-8 text-lg">
              <p className="text-muted-foreground mb-4">
                {content.intro.p1.replace(/{{provinceName}}/g, cityName)}
              </p>
              <p className="text-muted-foreground">
                {content.intro.p2.replace(/{{provinceName}}/g, cityName)}
              </p>
            </CardContent>
          </Card>
        </ScrollAnimationWrapper>

        {/* Why Us Section */}
        <ScrollAnimationWrapper>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold !font-headline text-center mb-4">
              {content.whyUs.title.replace(/{{provinceName}}/g, cityName)}
            </h2>
            <p className="text-center text-muted-foreground mb-10 max-w-3xl mx-auto">
              {content.whyUs.p1.replace(/{{provinceName}}/g, cityName)}
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {content.whyUs.points.map(
                (point: { icon: ElementType; text: string }, index: number) => (
                  <Card
                    key={index}
                    className="bg-background dark:bg-neutral-900 border-none shadow-md"
                  >
                    <CardContent className="p-6 flex items-center gap-4">
                      <div className="flex-shrink-0 bg-primary/10 text-primary p-3 rounded-full">
                        <point.icon className="w-6 h-6" />
                      </div>
                      <span className="font-semibold text-foreground">
                        {point.text}
                      </span>
                    </CardContent>
                  </Card>
                )
              )}
            </div>
          </div>
        </ScrollAnimationWrapper>

        {/* Armada Section */}
        <ScrollAnimationWrapper>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold !font-headline text-center mb-4">
              {content.armada.title.replace(/{{provinceName}}/g, cityName)}
            </h2>
            <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
              {content.armada.p1.replace(/{{provinceName}}/g, cityName)}
            </p>
            <div className="space-y-4">
              {content.armada.cars.map(
                (car: { name: string; desc: string }, index: number) => (
                  <Card
                    key={index}
                    className="bg-background dark:bg-neutral-900 border-none shadow-md"
                  >
                    <CardContent className="p-6">
                      <h3 className="font-bold text-lg text-primary">
                        {car.name}
                      </h3>
                      <p className="text-muted-foreground mt-1">{car.desc}</p>
                    </CardContent>
                  </Card>
                )
              )}
            </div>
            <div className="text-center mt-8">
              <Button asChild>
                <Link href={`/${lang}/daftar-mobil`}>
                  {dict.buttons.view_all_cars}{" "}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </ScrollAnimationWrapper>

        {/* Pricing & CTA Section */}
        <ScrollAnimationWrapper>
          <Card className="max-w-4xl mx-auto bg-primary text-primary-foreground shadow-2xl overflow-hidden">
            <CardContent className="p-8 md:p-10 text-center">
              <h2 className="text-3xl font-extrabold !font-headline mb-4">
                {content.pricing.title}
              </h2>
              <p className="mb-2 opacity-90">
                {content.pricing.p1.replace(/{{provinceName}}/g, cityName)}
              </p>
              <p className="mb-8 opacity-90">{content.pricing.p2}</p>

              <h3 className="text-2xl font-bold !font-headline mt-8 mb-4 text-accent">
                {content.cta.text.replace(/{{provinceName}}/g, cityName)}
              </h3>
              <div className="flex justify-center">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground h-12 text-lg font-bold w-full md:w-auto"
                  asChild
                >
                  <a
                    href={`https://wa.me/6285177262716?text=${encodeURIComponent(
                      bookingText
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {content.cta.buttonText.replace(
                      /{{provinceName}}/g,
                      cityName
                    )}
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
}
