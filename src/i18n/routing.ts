import { defineRouting } from "next-intl/routing";

export const locales = ["en", "es", "pt", "ko"] as const;
export const defaultLocale = "en";

export const routing = defineRouting({
  locales: locales as unknown as string[],
  defaultLocale,
  localePrefix: "always",
  localeDetection: false,
});

export type Locale = (typeof locales)[number];
