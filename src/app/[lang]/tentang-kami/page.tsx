import FeaturesSection from "@/components/homepage/features-section";
import TestimonialsSection from "@/components/homepage/testimonials-section";
import ScrollAnimationWrapper from "@/components/shared/scroll-animation-wrapper";
import { Button } from "@/components/ui/button";
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/lib/dictionary";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export async function generateMetadata({ params: { lang } }: { params: { lang: Locale } }): Promise<Metadata> {
  const dict = await getDictionary(lang);
  return {
    title: dict.footer.about_us,
    description: 'Kenali lebih jauh tentang Mobilin, misi kami untuk menyediakan layanan rental mobil yang mudah, terjangkau, dan terpercaya di seluruh Indonesia.',
  }
};

export default async function TentangKamiPage({ params: { lang } }: { params: { lang: Locale }}) {
  const dict = await getDictionary(lang);
  const pageDict = dict.about_page;

  return (
    <>
      <div className="container py-12 md:py-20">
        <ScrollAnimationWrapper>
          <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                  <h1 className="text-4xl md:text-5xl font-extrabold !font-headline mb-4">
                      {pageDict.title}
                  </h1>
                  <p className="text-lg text-muted-foreground mb-6">
                      {pageDict.p1}
                  </p>
                  <p className="text-muted-foreground mb-8">
                      {pageDict.p2}
                  </p>
                   <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                      <Link href={`/${lang}/daftar-mobil`}>
                          {dict.buttons.view_car_options}
                      </Link>
                  </Button>
              </div>
               <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
                  <Image 
                      src="https://placehold.co/600x600?text=600x600" 
                      alt={pageDict.team_image_alt}
                      fill
                      className="object-cover"
                      data-ai-hint="happy team diversity"
                  />
              </div>
          </div>
        </ScrollAnimationWrapper>
      </div>
      <ScrollAnimationWrapper>
        <FeaturesSection dict={dict.features} />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
        <TestimonialsSection dict={dict.testimonials} />
      </ScrollAnimationWrapper>
    </>
  );
}
