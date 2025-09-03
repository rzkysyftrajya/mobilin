"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { staticFaqs } from "@/lib/data";
import { Locale } from "@/i18n-config";
import Link from "next/link";

export default function FaqSection({ dict, lang, buttonText }: { dict: any, lang: Locale, buttonText: string }) {
  const previewFaqs = staticFaqs.slice(0, 3);
  return (
    <section id="faq" className="py-16 md:py-24 bg-secondary/30 dark:bg-secondary/10">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold !font-headline mb-4">
            {dict.title}
          </h2>
          <p className="text-muted-foreground mb-8">
            {dict.subtitle}
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full mb-8">
          {previewFaqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-background rounded-lg mb-2 shadow-sm">
              <AccordionTrigger className="px-6 text-left hover:no-underline">{faq.question}</AccordionTrigger>
              <AccordionContent className="px-6 pb-6 text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
         <div className="text-center">
            <Button size="lg" variant="outline" asChild>
                <Link href={`/${lang}/faq`}>{buttonText}</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
