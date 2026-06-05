// app/[locale]/layout.tsx
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { EB_Garamond } from "next/font/google";
import { notFound } from "next/navigation";
import { routing } from "../i18n/routing";
import Header from "@/components/header";
import FloatingSocials from "@/components/floatingSocials";
import Footer from "@/components/footer";

const garamond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-garamond",
});
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
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
  const messages = await getMessages();

  return (
    <html lang={locale} className={garamond.className}>
      <body className="min-h-dvh bg-white text-neutral-900 antialiased">
        <NextIntlClientProvider messages={messages} locale={locale}>
          <Header />
          <FloatingSocials />

          <main style={{ paddingTop: "var(--header-height)" }}>{children}</main>

          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
