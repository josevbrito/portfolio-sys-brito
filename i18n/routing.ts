import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["pt", "en"],
  defaultLocale: "pt",
  // Keeps the existing PT URLs untouched (josevbrito.com/projects) and serves
  // English under /en, so no redirects and no lost SEO on the current pages.
  localePrefix: "as-needed",
});

export type Locale = (typeof routing.locales)[number];
