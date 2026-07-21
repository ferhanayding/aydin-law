import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "tr", "es"],
  defaultLocale: "tr",
  localePrefix: "as-needed",
});
