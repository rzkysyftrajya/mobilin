import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { staticFaqs } from "@/lib/data";
import type { Metadata } from "next";
import ScrollAnimationWrapper from "@/components/shared/scroll-animation-wrapper";
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/lib/dictionary";
import Link from "next/link";

export async function generateMetadata({ params: { lang } }: { params: { lang: Locale } }): Promise<Metadata> {
  const dict = await getDictionary(lang);
  return {
    title: dict.footer.faq,
    description: 'Temukan jawaban untuk semua pertanyaan Anda tentang layanan rental mobil Mobilin, mulai dari syarat sewa, pembayaran, hingga kebijakan asuransi.',
  }
};

export default function FaqPage({ params: { lang } }: { params: { lang: Locale }}) {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": staticFaqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section id="faq" className="py-16 md:py-24 bg-secondary/30">
        <div className="container max-w-4xl mx-auto">
          <ScrollAnimationWrapper>
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold !font-headline mb-4">
                Pertanyaan Umum (FAQ)
              </h1>
              <p className="text-muted-foreground mb-8">
                Tidak menemukan jawaban yang Anda cari? Jangan ragu untuk <Link href={`/${lang}/kontak`} className="text-primary hover:underline">menghubungi kami</Link>.
              </p>
            </div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper>
            <Accordion type="single" collapsible className="w-full">
              {staticFaqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-background rounded-lg mb-2 shadow-sm">
                  <AccordionTrigger className="px-6 text-left hover:no-underline">{faq.question}</AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollAnimationWrapper>
        </div>
      </section>
    </>
  );
}
