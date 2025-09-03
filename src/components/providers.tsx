"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import { CurrencyProvider } from "@/context/currency-context";

export function Providers({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props} attribute="class" defaultTheme="system" enableSystem>
      <CurrencyProvider>
        {children}
      </CurrencyProvider>
    </NextThemesProvider>
  );
}
