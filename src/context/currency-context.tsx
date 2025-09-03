"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Currency = 'IDR' | 'USD' | 'SGD' | 'MYR';

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  formatPrice: (priceInIdr: number) => string;
  availableCurrencies: { code: Currency; name: string }[];
}

const conversionRates = {
  IDR: 1,
  USD: 1 / 16200, 
  SGD: 1 / 12000,
  MYR: 1 / 3450,
};

const currencyDetails = [
    { code: 'IDR' as Currency, name: 'Indonesian Rupiah' },
    { code: 'USD' as Currency, name: 'US Dollar' },
    { code: 'SGD' as Currency, name: 'Singapore Dollar' },
    { code: 'MYR' as Currency, name: 'Malaysian Ringgit' },
];

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export const CurrencyProvider = ({ children }: { children: ReactNode }) => {
  const [currency, setCurrency] = useState<Currency>('IDR');

  const formatPrice = (priceInIdr: number) => {
    const rate = conversionRates[currency];
    const convertedPrice = priceInIdr * rate;

    const formatters: Record<Currency, (price: number) => string> = {
      IDR: (price) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(price),
      USD: (price) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price),
      SGD: (price) => new Intl.NumberFormat('en-SG', { style: 'currency', currency: 'SGD' }).format(price),
      MYR: (price) => new Intl.NumberFormat('ms-MY', { style: 'currency', currency: 'MYR' }).format(price),
    };
    
    return formatters[currency](convertedPrice);
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, formatPrice, availableCurrencies: currencyDetails }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (context === undefined) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
};
