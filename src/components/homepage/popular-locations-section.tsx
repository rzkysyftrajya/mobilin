import { getPopularCities } from "@/lib/cities";
import Link from "next/link";
import { Locale } from "@/i18n-config";
import { ArrowRight } from "lucide-react";

export default function PopularLocationsSection({ dict, lang }: { dict: any, lang: Locale }) {
  const popularCities = getPopularCities();

  return (
    <section id="popular-locations" className="py-16 md:py-24 bg-secondary/30 dark:bg-secondary/10">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold !font-headline">
            {dict.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {dict.subtitle}
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-4 max-w-5xl mx-auto">
            <Link 
                href={`/rental-mobil-jakarta`} 
                className="text-muted-foreground hover:text-primary hover:underline flex items-center gap-1.5 transition-colors"
            >
                <ArrowRight className="w-3.5 h-3.5" />
                <span>Jakarta</span>
            </Link>
            {popularCities.map(city => (
                <Link 
                    key={city.slug} 
                    href={`/${lang}/rental-mobil/${city.provinceSlug}/${city.slug}`} 
                    className="text-muted-foreground hover:text-primary hover:underline flex items-center gap-1.5 transition-colors"
                >
                    <ArrowRight className="w-3.5 h-3.5" />
                    <span>{city.name}</span>
                </Link>
            ))}
        </div>
      </div>
    </section>
  );
}
