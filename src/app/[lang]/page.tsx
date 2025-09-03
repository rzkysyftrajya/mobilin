import FaqSection from "@/components/homepage/faq-section";
import FeaturesSection from "@/components/homepage/features-section";
import HeroSection from "@/components/homepage/hero-section";
import PopularCarsSection from "@/components/homepage/popular-cars-section";
import TestimonialCtaSection from "@/components/homepage/testimonial-cta-section";
import ScrollAnimationWrapper from "@/components/shared/scroll-animation-wrapper";
import DestinationsSection from "@/components/homepage/destinations-section";
import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/i18n-config";
import PopularLocationsSection from "@/components/homepage/popular-locations-section";

export default async function Home({ params }: { params: { lang: Locale } }) {
  // Jangan destruct langsung di parameter
  const lang = params.lang;
  const dict = await getDictionary(lang);

  return (
    <>
      <HeroSection dict={dict.hero} buttonText={dict.buttons.whatsapp} />
      <ScrollAnimationWrapper>
        <FeaturesSection dict={dict.features} />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
        <PopularCarsSection
          dict={dict.popular_cars}
          lang={lang}
          buttons={dict.buttons}
        />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
        <DestinationsSection
          dict={dict.destinations}
          lang={lang}
          buttonText={dict.buttons.explore_now}
          viewAllText={dict.buttons.view_all_destinations}
        />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
        <TestimonialCtaSection
          dict={dict.testimonials}
          lang={lang}
          buttonText={dict.buttons.view_all_testimonials}
        />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
        <PopularLocationsSection dict={dict.popular_locations} lang={lang} />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
        <FaqSection
          dict={dict.faq}
          lang={lang}
          buttonText={dict.buttons.view_all_faqs}
        />
      </ScrollAnimationWrapper>
    </>
  );
}
