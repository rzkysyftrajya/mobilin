import {
  provinces,
  getProvinceNameBySlug,
  getProvinceContent,
} from "@/lib/provinces";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ScrollAnimationWrapper from "@/components/shared/scroll-animation-wrapper";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/lib/dictionary";
import { CitySelection } from "@/components/shared/city-selection";
import { cities } from "@/lib/cities";

type Props = {
  params: Promise<{ province: string; lang: Locale }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const { province: provinceSlug, lang } = params; // ✅ ga usah pakai await

  const provinceData = getProvinceNameBySlug(provinceSlug);

  if (!provinceData) {
    return {};
  }

  const provinceName = provinceData.name;
  const dict = await getDictionary(lang);

  const title = dict.province_page.meta_title.replace(
    "{{provinceName}}",
    provinceName
  );
  const description = dict.province_page.meta_description.replace(
    "{{provinceName}}",
    provinceName
  );

  return {
    title,
    description,
    alternates: {
      canonical: `/${lang}/rental-mobil/${provinceSlug}`,
    },
    openGraph: {
      title,
      description,
      url: `/${lang}/rental-mobil/${provinceSlug}`,
      images: [
        {
          url: `https://placehold.co/1200x630/1abc9c/ffffff?text=Rental+Mobil+${encodeURIComponent(
            provinceName
          )}`,
          width: 1200,
          height: 630,
          alt: `Layanan Rental Mobil Mobilin di ${provinceName}`,
        },
      ],
    },
  };
}

export default async function ProvincePage(props: Props) {
  const params = await props.params;
  const { province: provinceSlug, lang } = params; // ✅ langsung destructure
  const provinceData = getProvinceNameBySlug(provinceSlug);

  if (!provinceData) {
    notFound();
  }

  const dict = await getDictionary(lang);
  const provinceName = provinceData.name;
  const content = getProvinceContent(provinceSlug, dict);

  const provinceCities = cities.filter((c) => c.provinceSlug === provinceSlug);
  const bookingText = dict.province_page.whatsapp_text.replace(
    "{{provinceName}}",
    provinceName
  );

  return (
    <div className="bg-secondary/30 dark:bg-background">
      {/* Hero Section */}
      <ScrollAnimationWrapper>
        <div className="relative bg-background py-12 md:py-20 text-center">
          <div className="container">
            <p className="text-primary font-semibold">
              {dict.province_page.hero_subtitle.replace(
                /{{provinceName}}/g,
                provinceName
              )}
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold !font-headline text-foreground mt-2 mb-2">
              {content.h1.replace(/{{provinceName}}/g, provinceName)}
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold !font-headline text-accent">
              {content.tagline.replace(/{{provinceName}}/g, provinceName)}
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
                {content.intro.p1.replace(/{{provinceName}}/g, provinceName)}
              </p>
              <p className="text-muted-foreground">
                {content.intro.p2.replace(/{{provinceName}}/g, provinceName)}
              </p>
            </CardContent>
          </Card>
        </ScrollAnimationWrapper>

        {/* City Selection Section */}
        {provinceCities.length > 0 && (
          <ScrollAnimationWrapper>
            <CitySelection
              cities={provinceCities}
              lang={lang} // ✅ sudah string biasa
              dict={dict.city_selection}
            />
          </ScrollAnimationWrapper>
        )}

        {/* Why Us Section */}
        <ScrollAnimationWrapper>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold !font-headline text-center mb-4">
              {content.whyUs.title.replace(/{{provinceName}}/g, provinceName)}
            </h2>
            <p className="text-center text-muted-foreground mb-10 max-w-3xl mx-auto">
              {content.whyUs.p1.replace(/{{provinceName}}/g, provinceName)}
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {content.whyUs.points.map((point, index) => {
                const Icon = point.icon as React.ComponentType<{
                  className?: string;
                }>;
                return (
                  <Card
                    key={index}
                    className="bg-background dark:bg-neutral-900 border-none shadow-md"
                  >
                    <CardContent className="p-6 flex items-center gap-4">
                      <div className="flex-shrink-0 bg-primary/10 text-primary p-3 rounded-full">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="font-semibold text-foreground">
                        {point.text}
                      </span>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </ScrollAnimationWrapper>

        {/* Armada Section */}
        <ScrollAnimationWrapper>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold !font-headline text-center mb-4">
              {content.armada.title.replace(/{{provinceName}}/g, provinceName)}
            </h2>
            <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
              {content.armada.p1.replace(/{{provinceName}}/g, provinceName)}
            </p>
            <div className="space-y-4">
              {content.armada.cars.map((car, index) => (
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
              ))}
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

        {/* Use Case Section */}
        <ScrollAnimationWrapper>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold !font-headline text-center mb-10">
              {content.useCase.title.replace(/{{provinceName}}/g, provinceName)}
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {content.useCase.cases.map((useCase, index) => {
                const Icon = useCase.icon as React.ComponentType<{
                  className?: string;
                }>;
                return (
                  <Card
                    key={index}
                    className="bg-background dark:bg-neutral-900 border-none shadow-md flex flex-col"
                  >
                    <CardHeader className="items-center">
                      <div className="p-4 bg-primary/10 rounded-full mb-3">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <CardTitle className="text-xl !font-headline text-center">
                        {useCase.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-center text-muted-foreground flex-grow">
                      <p>
                        {useCase.desc.replace(
                          /{{provinceName}}/g,
                          provinceName
                        )}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </ScrollAnimationWrapper>

        {/* Tips Section */}
        <ScrollAnimationWrapper>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold !font-headline text-center mb-4">
              {content.tips.title.replace(/{{provinceName}}/g, provinceName)}
            </h2>
            <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
              {content.tips.p1.replace(/{{provinceName}}/g, provinceName)}
            </p>
            <div className="space-y-4">
              {content.tips.items.map((tip, index) => {
                const Icon = tip.icon as React.ComponentType<{
                  className?: string;
                }>;
                return (
                  <Card
                    key={index}
                    className="bg-background dark:bg-neutral-900 border-none shadow-md"
                  >
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <Icon className="w-8 h-8 text-primary mt-1" />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground">
                          {tip.title}
                        </h3>
                        <p className="text-muted-foreground">{tip.desc}</p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
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
                {content.pricing.p1.replace(/{{provinceName}}/g, provinceName)}
              </p>
              <p className="mb-8 opacity-90">{content.pricing.p2}</p>

              <h3 className="text-2xl font-bold !font-headline mt-8 mb-4 text-accent">
                {content.cta.text.replace(/{{provinceName}}/g, provinceName)}
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
                      provinceName
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
