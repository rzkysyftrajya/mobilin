import { destinationAreas } from "@/lib/data";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Locale } from "@/i18n-config";

export default function DestinationsSection({ dict, lang, buttonText, viewAllText }: { dict: any, lang: Locale, buttonText: string, viewAllText: string }) {
  const popularDestinations = destinationAreas.slice(0, 3);

  return (
    <section id="destinasi" className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold !font-headline">
            {dict.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {dict.subtitle}
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularDestinations.map(area => (
                <Card key={area.slug} className="flex flex-col overflow-hidden shadow-lg hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-300 dark:bg-neutral-900 h-full">
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
                            {buttonText} <ArrowRight className="w-4 h-4" />
                        </Link>
                    </CardFooter>
                </Card>
            ))}
        </div>
        <div className="text-center mt-12">
            <Button size="lg" asChild>
                <Link href={`/${lang}/destinasi`}>{viewAllText}</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
