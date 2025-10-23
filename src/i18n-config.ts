export const i18n = {
  defaultLocale: "id",
  locales: ["id", "en", "cn"],
} as const;

export type Locale = (typeof i18n)["locales"][number];
