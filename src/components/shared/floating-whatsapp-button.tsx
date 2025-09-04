"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export default function FloatingWhatsappButton({ text }: { text: string }) {
  const [isTooltipVisible, setIsTooltipVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTooltipVisible(false);
    }, 5000); // Hide after 5 seconds

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  return (
    <a
      href="https://wa.me/6285177262716?text=Halo%20Mobilin,%20saya%20tertarik%20untuk%20menyewa%20mobil."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Pesan Sekarang via WhatsApp"
      className="fixed bottom-6 right-6 z-40 group flex items-center gap-3"
    >
      <div
        className={cn(
          "bg-background px-4 py-2 rounded-md shadow-lg whitespace-nowrap transition-all duration-300",
          isTooltipVisible ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        )}
      >
        <span className="font-semibold text-foreground">{text}</span>
      </div>
      <div className="relative flex items-center justify-center rounded-full shadow-lg h-16 w-16 bg-green-500 hover:bg-green-600 transition-transform duration-300 ease-in-out hover:scale-110">
        <span className="absolute inline-flex h-full w-full rounded-full bg-primary animate-sonar opacity-75"></span>
        <Image
          src="/icon/whatsapp.png"
          alt="WhatsApp Icon"
          width={40}
          height={40}
          className="rounded-full relative"
          unoptimized
        />
      </div>
    </a>
  );
}
