import type { Metadata, Viewport } from "next";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { EB_Garamond } from "next/font/google";
import { notFound } from "next/navigation";
import { routing } from "../i18n/routing";
import Header from "@/components/header";
import Footer from "@/components/footer";
import FloatingContact from "@/components/floating-contact";
import { site } from "@/lib/site";

const garamond = EB_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-garamond",
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const viewport: Viewport = {
  themeColor: "#A5737D",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  const path = (l: string) => (l === routing.defaultLocale ? "/" : `/${l}`);

  return {
    metadataBase: new URL(site.url),
    title: {
      default: t("title"),
      template: `%s | ${site.name}`,
    },
    description: t("description"),
    applicationName: site.name,
    alternates: {
      canonical: path(locale),
      languages: Object.fromEntries(routing.locales.map((l) => [l, path(l)])),
    },
    openGraph: {
      type: "website",
      siteName: site.name,
      title: t("title"),
      description: t("description"),
      locale,
      url: path(locale),
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "meta" });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: site.name,
    description: t("description"),
    url: site.url,
    logo: `${site.url}/images/logo-mark.png`,
    image: `${site.url}/opengraph-image.jpg`,
    telephone: site.phone.e164,
    email: site.email,
    founder: { "@type": "Person", name: "İrem Aydın", jobTitle: "Avukat" },
    address: {
      "@type": "PostalAddress",
      addressLocality: site.city,
      addressCountry: "TR",
    },
    areaServed: "TR",
  };

  return (
    <html
      lang={locale}
      className={garamond.variable}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-dvh">
        <NextIntlClientProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <FloatingContact />
        </NextIntlClientProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
