import { setRequestLocale } from "next-intl/server";
import Hero from "@/components/hero";
import Statement from "@/components/statement";
import Services from "@/components/services";
import About from "@/components/about";
import Approach from "@/components/approach";
import Contact from "@/components/contact";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <Statement />
      <Services />
      <About />
      <Approach />
      <Contact />
    </>
  );
}
