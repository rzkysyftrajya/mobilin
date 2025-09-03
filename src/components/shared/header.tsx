"use client";

import * as React from "react";
import Link from "next/link";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { MobilinLogo } from "@/components/icons";
import { ThemeToggle } from "./theme-toggle";
import CurrencySelector from "./currency-selector";
import type { Locale } from "@/i18n-config";

export default function Header({ dict, lang }: { dict: any, lang: Locale }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  
  const navLabels = dict.navigation;

  const navLinks = [
    { href: `/${lang}/`, label: navLabels.home },
    { href: `/${lang}/daftar-mobil`, label: navLabels.cars },
    { href: `/${lang}/layanan`, label: navLabels.services },
    { href: `/${lang}/destinasi`, label: navLabels.destinations },
    { href: `/${lang}/testimonial`, label: navLabels.testimonials },
    { href: `/${lang}/blog`, label: navLabels.blog },
    { href: `/${lang}/kontak`, label: navLabels.contact },
  ];

  return (
    <Navbar>
      {/* Desktop Navigation */}
      <NavBody>
        <Link href={`/${lang}/`} className="z-20" aria-label="Mobilin Homepage">
          <MobilinLogo />
        </Link>
        <NavItems items={navLinks} />
        <div className="z-20 flex items-center gap-2">
           <CurrencySelector />
           <ThemeToggle />
          <NavbarButton
            as="a"
            href="https://wa.me/6285177262716?text=Halo%20Mobilin,%20saya%20tertarik%20untuk%20menyewa%20mobil."
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
          >
            {dict.buttons.whatsapp}
          </NavbarButton>
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <Link href={`/${lang}/`} aria-label="Mobilin Homepage">
            <MobilinLogo />
          </Link>
          <div className="flex items-center gap-2">
            <CurrencySelector />
            <ThemeToggle />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </div>
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navLinks.map((item, idx) => (
            <Link
              key={`mobile-link-${idx}`}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="relative text-neutral-600 dark:text-neutral-300"
            >
              <span className="block">{item.label}</span>
            </Link>
          ))}
          <div className="flex w-full flex-col gap-4 pt-4">
            <NavbarButton
              as="a"
              href="https://wa.me/6285177262716?text=Halo%20Mobilin,%20saya%20tertarik%20untuk%20menyewa%20mobil."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              variant="primary"
              className="w-full"
            >
              {dict.buttons.whatsapp}
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
