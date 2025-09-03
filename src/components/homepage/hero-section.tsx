"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState, useEffect } from "react";
import ScrollAnimationWrapper from "@/components/shared/scroll-animation-wrapper";

export default function HeroSection({
  dict,
  buttonText,
}: {
  dict: any;
  buttonText: string;
}) {
  const [currentSlogan, setCurrentSlogan] = useState(dict.slogans[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % dict.slogans.length);
    }, 3000); // Change slogan every 3 seconds

    return () => clearInterval(interval);
  }, [dict.slogans.length]);

  useEffect(() => {
    setCurrentSlogan(dict.slogans[index]);
  }, [index, dict.slogans]);

  return (
    <section className="relative h-[80vh] min-h-[500px] flex items-center text-white overflow-hidden">
      <Image
        src="/hero-section.webp"
        alt="Jalanan perkotaan yang sibuk dengan mobil"
        data-ai-hint="scenic road car"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative container mx-auto text-center z-10">
        <ScrollAnimationWrapper>
          <h1 className="text-4xl md:text-6xl font-extrabold !font-headline tracking-tight drop-shadow-lg">
            {dict.title}
          </h1>
          <p
            key={currentSlogan}
            className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-neutral-200 drop-shadow-md h-8 transition-opacity duration-500 animate-in fade-in slide-in-from-bottom-4"
          >
            {currentSlogan}
          </p>
          <Button
            size="lg"
            className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-8 py-6 mx-auto"
            asChild
          >
            <a
              href="https://wa.me/6285177262716?text=Halo%20Mobilin,%20saya%20tertarik%20untuk%20menyewa%20mobil."
              target="_blank"
              rel="noopener noreferrer"
            >
              {buttonText}
            </a>
          </Button>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
}
