// Tek kaynak: iletişim bilgileri ve site sabitleri.
// Numara / e-posta değişirse yalnızca burayı güncellemek yeterli.

const PHONE_E164 = "+905060418961";

export const site = {
  name: "Aydın Law & Consulting",
  attorney: "Av. İrem Aydın",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000"),
  phone: {
    display: "+90 506 041 89 61",
    e164: PHONE_E164,
    tel: `tel:${PHONE_E164}`,
  },
  whatsapp: `https://wa.me/${PHONE_E164.replace("+", "")}`,
  email: "atty.iremaydin@gmail.com",
  city: "Ankara",
  country: "Türkiye",
} as const;

export function whatsappLink(text?: string) {
  return text ? `${site.whatsapp}?text=${encodeURIComponent(text)}` : site.whatsapp;
}

export const navItems = ["services", "about", "approach", "contact"] as const;
export type NavItem = (typeof navItems)[number];

export const sectionIds: Record<NavItem | "home", string> = {
  home: "home",
  services: "services",
  about: "about",
  approach: "approach",
  contact: "contact",
};

export const practiceAreas = [
  "commercial",
  "contracts",
  "labor",
  "family",
  "criminal",
  "realEstate",
  "inheritance",
  "enforcement",
  "administrative",
  "sports",
  "energy",
  "dataProtection",
] as const;
export type PracticeArea = (typeof practiceAreas)[number];
