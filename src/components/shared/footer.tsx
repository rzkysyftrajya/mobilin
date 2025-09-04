import Link from "next/link";
import { MobilinLogo } from "@/components/icons";
import { provinces } from "@/lib/provinces";
import { Locale } from "@/i18n-config";
import Image from "next/image";

const socialLinks = [
  {
    href: "https://wa.me/6285177262716",
    imageUrl: "/icon/whatsapp.png",
    label: "WhatsApp",
  },
  {
    href: "#",
    imageUrl: "/icon/tik-tok.png",
    label: "TikTok",
  },
  {
    href: "#",
    imageUrl: "/icon/instagram.png",
    label: "Instagram",
  },
  {
    href: "#",
    imageUrl: "/icon/youtube.png",
    label: "YouTube",
  },
  {
    href: "#",
    imageUrl: "/icon/facebook.png",
    label: "Facebook",
  },
  {
    href: "#",
    imageUrl: "/icon/twitter.png",
    label: "Twitter",
  },
];

export default async function Footer({
  dict,
  lang,
}: {
  dict: any;
  lang: Locale;
}) {
  const footerDict = dict.footer;
  const popularProvinces = provinces.filter((p) =>
    [
      "jakarta",
      "jawa-barat",
      "jawa-tengah",
      "jawa-timur",
      "bali",
      "yogyakarta",
    ].includes(p.slug)
  );

  const navLinks = [
    { href: `/${lang}/tentang-kami`, label: footerDict.about_us },
    { href: `/${lang}/daftar-mobil`, label: footerDict.car_list },
    { href: `/${lang}/layanan`, label: footerDict.services },
    { href: `/${lang}/destinasi`, label: footerDict.destinations },
    { href: `/${lang}/faq`, label: footerDict.faq },
    { href: `/${lang}/kontak`, label: footerDict.contact_us },
    { href: `/${lang}/blog`, label: footerDict.blog },
  ];

  const companyLinks = [
    { href: `/${lang}/testimonial`, label: footerDict.testimonials },
    { href: `/${lang}/karier`, label: footerDict.careers },
    { href: `/${lang}/kebijakan-privasi`, label: footerDict.privacy_policy },
    { href: `/${lang}/syarat-ketentuan`, label: footerDict.terms_conditions },
  ];

  return (
    <footer className="bg-secondary/50 border-t mt-auto">
      <div className="container py-12">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          <div className="space-y-4 col-span-2">
            <MobilinLogo />
            <p className="text-sm text-muted-foreground font-headline italic">
              {footerDict.tagline}
            </p>
            <p className="text-sm text-muted-foreground">
              {footerDict.description}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:opacity-80"
                  aria-label={social.label}
                >
                  <Image
                    src={social.imageUrl}
                    alt={social.label}
                    width={24}
                    height={24}
                    className="rounded-full"
                  />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">{footerDict.navigation}</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">{footerDict.company}</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">{footerDict.popular_areas}</h3>
            <ul className="space-y-2">
              {popularProvinces.map((province) => (
                <li key={province.slug}>
                  <Link
                    href={`/${lang}/rental-mobil/${province.slug}`}
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    Rental Mobil {province.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">{footerDict.contact}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="mailto:halo@mobilinaja.com"
                  className="hover:text-primary"
                >
                  mobilin809@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:085177262716" className="hover:text-primary">
                  0851-7726-2716
                </a>
              </li>
              <li>
                Jalan Sempurna Gang Mawar 6 medan Sumatera Utara 20371 Indonesia
              </li>
            </ul>
          </div>
        </div>
        <div
          className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground"
          dangerouslySetInnerHTML={{ __html: footerDict.copyright }}
        />
      </div>
    </footer>
  );
}
