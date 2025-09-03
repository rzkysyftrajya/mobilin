import ScrollAnimationWrapper from "@/components/shared/scroll-animation-wrapper";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, MapPin, Clock } from "lucide-react";
import type { Metadata } from "next";
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/lib/dictionary";

export async function generateMetadata({ params: { lang } }: { params: { lang: Locale } }): Promise<Metadata> {
    const dict = await getDictionary(lang);
    return {
        title: dict.footer.careers,
        description: 'Bergabunglah dengan tim kami yang dinamis dan bantu kami merevolusi industri rental mobil di Indonesia. Lihat lowongan yang tersedia di Mobilin.',
    }
};

const jobOpenings = [
    {
        title: "Customer Service Representative",
        location: "Jakarta (Remote)",
        type: "Full-time",
        description: "Menjadi garda terdepan dalam melayani pelanggan kami, menjawab pertanyaan, dan membantu proses booking."
    },
    {
        title: "Digital Marketing Specialist",
        location: "Jakarta",
        type: "Full-time",
        description: "Mengembangkan dan mengeksekusi strategi pemasaran digital untuk meningkatkan brand awareness dan akuisisi pelanggan."
    },
    {
        title: "Operations Manager",
        location: "Bali",
        type: "Full-time",
        description: "Mengelola operasional harian armada Mobilin di Bali, memastikan semua unit dalam kondisi prima dan siap jalan."
    }
]

export default async function KarierPage({ params: { lang } }: { params: { lang: Locale }}) {
    const dict = await getDictionary(lang);
    const pageDict = dict.career_page;

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

      <div className="max-w-4xl mx-auto">
        <ScrollAnimationWrapper>
            <h2 className="text-3xl font-bold !font-headline mb-8 text-center">{pageDict.available_positions}</h2>
        </ScrollAnimationWrapper>
        <div className="space-y-6">
            {jobOpenings.map((job, index) => (
                <ScrollAnimationWrapper key={index} delay={index * 0.1}>
                    <Card className="hover:shadow-lg transition-shadow duration-300">
                        <CardHeader>
                            <CardTitle className="!font-headline text-2xl">{job.title}</CardTitle>
                             <div className="flex items-center gap-6 text-sm text-muted-foreground pt-2">
                                <div className="flex items-center gap-1.5"><Briefcase className="w-4 h-4 text-primary"/>{job.type}</div>
                                <div className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-primary"/>{job.location}</div>
                             </div>
                        </CardHeader>
                        <CardContent>
                            <CardDescription>{job.description}</CardDescription>
                        </CardContent>
                    </Card>
                </ScrollAnimationWrapper>
            ))}
        </div>
         <ScrollAnimationWrapper>
            <div className="text-center mt-12 p-8 bg-secondary/30 rounded-lg">
                 <h3 className="text-2xl font-bold !font-headline mb-3">{pageDict.no_position_title}</h3>
                 <p className="text-muted-foreground mb-6">{pageDict.no_position_subtitle}</p>
                 <Button asChild className="bg-accent hover:bg-accent/90">
                    <a href="mailto:hr@mobilin.com">{dict.buttons.apply_open}</a>
                 </Button>
            </div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
}
