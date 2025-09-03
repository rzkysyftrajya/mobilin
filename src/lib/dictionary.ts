import 'server-only';
import type { Locale } from '@/i18n-config';

// We enumerate all dictionaries here for better linting and typescript support
// We do not want to use dynamic imports, as it is not supported on EdgeRegions
const dictionaries = {
  en: () => import('@/dictionaries/en').then((module) => module.default),
  id: () => import('@/dictionaries/id').then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => {
    const loader = dictionaries[locale] || dictionaries.id;
    try {
        return await loader();
    } catch (error) {
        console.error(`Failed to load dictionary for locale: ${locale}`, error);
        // Fallback to the default dictionary
        return await dictionaries.id();
    }
};
