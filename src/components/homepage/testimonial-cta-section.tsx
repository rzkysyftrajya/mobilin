import { Locale } from "@/i18n-config";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function TestimonialCtaSection({ dict, lang, buttonText }: { dict: any, lang: Locale, buttonText: string }) {
  return (
    <section id="testimonial-cta" className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto p-8 bg-secondary/30 rounded-lg">
          <h2 className="text-3xl md:text-4xl font-bold !font-headline">
            {dict.title}
          </h2>
          <p className="mt-4 mb-6 text-lg text-muted-foreground">
            {dict.subtitle}
          </p>
          <Button size="lg" asChild>
            <Link href={`/${lang}/testimonial`}>
              {buttonText}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
