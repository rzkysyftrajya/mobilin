import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";
import FloatingWhatsappButton from "@/components/shared/floating-whatsapp-button";
import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/i18n-config";

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  // Jangan destruct langsung di parameter, ambil di dalam fungsi
  const lang = params.lang;
  const dict = await getDictionary(lang);

  return (
    <>
      <Header dict={dict} lang={lang} />
      <main className="flex-1">{children}</main>
      <Footer dict={dict} lang={lang} />
      <FloatingWhatsappButton text={dict.buttons.book_now} />
    </>
  );
}
