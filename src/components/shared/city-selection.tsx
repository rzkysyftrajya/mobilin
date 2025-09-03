import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import type { Locale } from "@/i18n-config";
import type { City } from "@/lib/cities";

interface CitySelectionProps {
    cities: City[];
    lang: Locale;
    dict: any;
}

export function CitySelection({ cities, lang, dict }: CitySelectionProps) {
    return (
        <Card className="bg-background dark:bg-neutral-900 border-none shadow-lg">
            <CardHeader>
                <CardTitle className="!font-headline text-2xl text-center">{dict.title}</CardTitle>
            </CardHeader>
            <CardContent>
                 <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">{dict.subtitle}</p>
                <div className="columns-2 md:columns-3 lg:columns-4 gap-4">
                    {cities.map(city => (
                        <Link
                            key={city.slug}
                            href={`/${lang}/rental-mobil/${city.provinceSlug}/${city.slug}`}
                            className="flex items-center gap-2 p-2 rounded-md hover:bg-secondary transition-colors mb-2 break-inside-avoid"
                        >
                            <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-sm font-medium text-foreground">{city.name}</span>
                        </Link>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}
