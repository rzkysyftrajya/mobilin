import ScrollAnimationWrapper from "@/components/shared/scroll-animation-wrapper";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { testimonials } from "@/lib/data";
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/lib/dictionary";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export async function generateMetadata(props: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
    const params = await props.params;

    const {
        lang
    } = params;

    const dict = await getDictionary(lang);
    return {
      title: dict.footer.testimonials,
      description: 'Baca apa kata pelanggan kami tentang pengalaman mereka menyewa mobil di Mobilin. Kepuasan Anda adalah prioritas kami.',
    }
};

export default async function TestimonialPage(props: { params: Promise<{ lang: Locale }>}) {
    const params = await props.params;

    const {
        lang
    } = params;

    const dict = await getDictionary(lang);
    const pageDict = dict.testimonial_page;

    return (
      <>
        <div className="container py-12 md:py-20 text-center">
          <ScrollAnimationWrapper>
              <h1 className="text-4xl md:text-5xl font-extrabold !font-headline mb-4">
                  {pageDict.title}
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
                  {pageDict.subtitle}
              </p>
          </ScrollAnimationWrapper>
        </div>
        
        <div className="container">
          <ScrollAnimationWrapper>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
                  {testimonials.map((testimonial, index) => (
                      <Card key={index} className="overflow-hidden group shadow-lg hover:shadow-primary/20 transition-all duration-300">
                          <CardContent className="p-0 relative">
                              <div className="aspect-w-1 aspect-h-1">
                                  <Image 
                                      src={testimonial.avatar}
                                      alt={`Testimoni Pelanggan ${index + 1}`}
                                      fill
                                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                                      data-ai-hint={testimonial['data-ai-hint']}
                                      sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                                  />
                              </div>
                              <div className="absolute bottom-2 right-2 bg-background/80 backdrop-blur-sm p-1.5 rounded-full flex items-center gap-1">
                                  {[...Array(testimonial.rating)].map((_, i) => (
                                      <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                                  ))}
                              </div>
                          </CardContent>
                      </Card>
                  ))}
              </div>
          </ScrollAnimationWrapper>
        </div>

         <div className="container py-12 md:py-20 text-center">
          <ScrollAnimationWrapper>
               <h2 className="text-3xl font-bold !font-headline mb-4">{pageDict.next_customer_title}</h2>
               <p className="text-muted-foreground mb-8">{pageDict.next_customer_subtitle}</p>
               <Button size="lg" className="bg-accent hover:bg-accent/90" asChild>
                  <Link href={`/${lang}/daftar-mobil`}>
                     {dict.buttons.view_car_options}
                  </Link>
              </Button>
          </ScrollAnimationWrapper>
        </div>
      </>
    );
}
