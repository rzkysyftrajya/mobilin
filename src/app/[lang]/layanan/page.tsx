import ScrollAnimationWrapper from "@/components/shared/scroll-animation-wrapper";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/lib/dictionary";
import { services } from "@/lib/services";

export async function generateMetadata({ params: { lang } }: { params: { lang: Locale } }): Promise<Metadata> {
  const dict = await getDictionary(lang);
  return {
    title: dict.footer.services,
    description: 'Apapun kebutuhan perjalanan Anda, Mobilin punya solusinya. Dari sewa harian, bulanan, antar-jemput bandara, hingga mobil pernikahan.',
  }
};

export default async function LayananPage({ params: { lang } }: { params: { lang: Locale }}) {
    const dict = await getDictionary(lang);
    const pageDict = dict.service_page;

  return (
    <div className="container py-12 md:py-20">
      <ScrollAnimationWrapper>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold !font-headline">
            {pageDict.title}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            {pageDict.subtitle}
          </p>
        </div>
      </ScrollAnimationWrapper>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
                <ScrollAnimationWrapper key={index} delay={index * 0.1}>
                    <Card className="h-full flex flex-col hover:shadow-lg hover:border-primary/50 transition-all duration-300">
                        <CardHeader className="items-center text-center">
                             <div className="p-4 bg-primary/10 rounded-full mb-3 text-primary">
                                <service.icon className="w-8 h-8"/>
                             </div>
                            <CardTitle className="!font-headline text-xl">{service.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="text-center flex-grow">
                            <CardDescription>{service.description}</CardDescription>
                        </CardContent>
                        <CardFooter className="p-6 pt-0 bg-gray-50 dark:bg-neutral-800 justify-center">
                            <Link href={`/${lang}/layanan/${service.slug}`} className="font-semibold text-sm text-primary hover:text-accent flex items-center gap-2">
                                {dict.buttons.learn_more} <ArrowRight className="w-4 h-4" />
                            </Link>
                        </CardFooter>
                    </Card>
                </ScrollAnimationWrapper>
            ))}
        </div>

        <ScrollAnimationWrapper>
            <div className="text-center mt-16 p-8 bg-secondary/30 rounded-lg">
                 <h3 className="text-2xl font-bold !font-headline mb-3">{pageDict.specific_service_title}</h3>
                 <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">{pageDict.specific_service_subtitle}</p>
                 <Button size="lg" asChild className="bg-accent hover:bg-accent/90">
                    <a href="https://wa.me/6285177262716?text=Halo%20Mobilin,%20saya%20punya%20kebutuhan%20sewa%20mobil%20khusus." target="_blank" rel="noopener noreferrer">{dict.buttons.contact_us_whatsapp}</a>
                 </Button>
            </div>
        </ScrollAnimationWrapper>
    </div>
  );
}
