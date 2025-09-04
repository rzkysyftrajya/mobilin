import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { destinationAreas } from "@/lib/data";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollAnimationWrapper from "@/components/shared/scroll-animation-wrapper";
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/lib/dictionary";

export async function generateMetadata(props: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
  const params = await props.params;

  const {
    lang
  } = params;

  const dict = await getDictionary(lang);
  return {
    title: dict.footer.destinations,
    description: 'Temukan ide-ide perjalanan dan destinasi wisata terbaik di seluruh Indonesia. Rencanakan petualangan Anda berikutnya bersama Mobilin.',
  }
};

export default async function DestinationsPage(props: { params: Promise<{ lang: Locale }> }) {
  const params = await props.params;

  const {
    lang
  } = params;

  const dict = await getDictionary(lang);
  return (
    <div className="container py-12 md:py-20">
      <ScrollAnimationWrapper>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold !font-headline">
            Inspirasi Destinasi
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Indonesia itu luas dan indah. Berikut adalah beberapa panduan wisata menakjubkan yang bisa Anda jelajahi dengan nyaman menggunakan mobil dari kami.
          </p>
        </div>
      </ScrollAnimationWrapper>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {destinationAreas.map((area, index) => (
          <ScrollAnimationWrapper key={area.slug} delay={index * 0.1}>
            <Card className="flex flex-col overflow-hidden shadow-lg hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-300 dark:bg-neutral-900 h-full">
              <CardHeader className="p-0">
                  <Link href={`/${lang}/destinasi/${area.slug}`} className="block relative aspect-video">
                      <Image
                          src={area.heroImage}
                          alt={area.name}
                          fill
                          className="object-cover"
                          data-ai-hint={area['data-ai-hint']}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                  </Link>
              </CardHeader>
              <CardContent className="p-6 flex-grow">
                  <CardTitle className="!font-headline text-xl mb-3">
                      <Link href={`/${lang}/destinasi/${area.slug}`}>{area.name}</Link>
                  </CardTitle>
                  <CardDescription>{area.short_description}</CardDescription>
              </CardContent>
               <CardFooter className="p-6 pt-0 bg-gray-50 dark:bg-neutral-800">
                   <Link href={`/${lang}/destinasi/${area.slug}`} className="font-semibold text-sm text-primary hover:text-accent flex items-center gap-2">
                      {dict.buttons.explore_now} <ArrowRight className="w-4 h-4" />
                  </Link>
              </CardFooter>
            </Card>
          </ScrollAnimationWrapper>
        ))}
      </div>
    </div>
  );
}
