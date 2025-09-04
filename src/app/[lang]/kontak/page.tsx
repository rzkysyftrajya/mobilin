import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";
import type { Metadata } from "next";
import ScrollAnimationWrapper from "@/components/shared/scroll-animation-wrapper";
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/lib/dictionary";

export async function generateMetadata(props: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
    const params = await props.params;

    const {
        lang
    } = params;

    const dict = await getDictionary(lang);
    return {
      title: dict.footer.contact_us,
      description: 'Hubungi tim Mobilin untuk pertanyaan, pemesanan, atau dukungan. Kami siap melayani Anda 24/7 melalui telepon, WhatsApp, atau email.',
    }
};

export default async function KontakPage(props: { params: Promise<{ lang: Locale }>}) {
    const params = await props.params;

    const {
        lang
    } = params;

    const dict = await getDictionary(lang);
    const pageDict = dict.contact_page;

    return (
      <div className="container py-12 md:py-20">
        <ScrollAnimationWrapper>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold !font-headline">
              {pageDict.title}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              {pageDict.subtitle}
            </p>
          </div>
        </ScrollAnimationWrapper>

        <div className="grid md:grid-cols-2 gap-12">
          <ScrollAnimationWrapper>
            <div className="space-y-8">
                <Card>
                    <CardHeader>
                        <CardTitle className="!font-headline flex items-center gap-3"><Phone className="text-primary"/> {pageDict.phone_title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground mb-2">{pageDict.phone_subtitle}</p>
                        <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-primary hover:underline">+62 812-3456-7890</a>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader>
                        <CardTitle className="!font-headline flex items-center gap-3"><Mail className="text-primary"/> {pageDict.email_title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground mb-2">{pageDict.email_subtitle}</p>
                        <a href="mailto:halo@mobilin.com" className="text-lg font-semibold text-primary hover:underline">halo@mobilin.com</a>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader>
                        <CardTitle className="!font-headline flex items-center gap-3"><MapPin className="text-primary"/> {pageDict.address_title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                         <p className="text-lg text-muted-foreground">Jl. Jenderal Sudirman Kav. 52-53, Jakarta Selatan, 12190</p>
                    </CardContent>
                </Card>
            </div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper delay={0.2}>
              <Card className="p-4">
                  <CardHeader>
                      <CardTitle className="!font-headline">{pageDict.form_title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                      <form className="space-y-4">
                          <div>
                              <Label htmlFor="name">{pageDict.name_label}</Label>
                              <Input id="name" placeholder={pageDict.name_placeholder} />
                          </div>
                           <div>
                              <Label htmlFor="email">{pageDict.email_label}</Label>
                              <Input id="email" type="email" placeholder={pageDict.email_placeholder} />
                          </div>
                           <div>
                              <Label htmlFor="message">{pageDict.message_label}</Label>
                              <Textarea id="message" placeholder={pageDict.message_placeholder} />
                          </div>
                          <Button type="submit" className="w-full bg-accent hover:bg-accent/90">{dict.buttons.submit}</Button>
                      </form>
                  </CardContent>
              </Card>
          </ScrollAnimationWrapper>
        </div>
      </div>
    );
}
