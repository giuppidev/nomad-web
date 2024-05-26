export const i18n = {
  defaultLocale: "en",
  locales: ["en", "de", "it"],
} as const;

export type Locale = (typeof i18n)["locales"][number];
