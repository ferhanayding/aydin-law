import Image from "next/image";
import { useTranslations } from "next-intl";
import SectionLabel from "./section-label";
import { site } from "@/lib/site";

const facts = ["degree", "masters", "experience", "office"] as const;

export default function About() {
  const t = useTranslations("about");

  return (
    <section id="about" aria-labelledby="about-title" className="section-y bg-sand">
      <div className="container-site grid gap-14 lg:grid-cols-12 lg:gap-16">
        {/* KARTVİZİT */}
        <div className="lg:col-span-5">
          <SectionLabel index="02">{t("label")}</SectionLabel>

          <div className="mt-8 border border-line bg-paper p-7 sm:p-9 lg:sticky lg:top-[calc(var(--header-height)+2rem)]">
            <div className="flex items-center gap-5">
              <Image
                src="/images/logo-mark.png"
                alt=""
                width={128}
                height={128}
                className="h-16 w-16 shrink-0 object-contain"
              />
              <div>
                <p className="font-serif text-[1.75rem] leading-tight text-ink">{site.attorney}</p>
                <p className="mt-1 text-sm text-ink-soft">{t("role")}</p>
              </div>
            </div>

            <dl className="mt-8 divide-y divide-line border-t border-line text-[0.95rem]">
              {facts.map((f) => (
                <div
                  key={f}
                  className="grid gap-1 py-4 sm:grid-cols-[8.5rem_1fr] sm:gap-4 lg:grid-cols-1 lg:gap-1 xl:grid-cols-[8rem_1fr] xl:gap-4"
                >
                  <dt className="text-ink-soft">{t(`facts.${f}.label`)}</dt>
                  <dd className="text-ink">{t(`facts.${f}.value`)}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* METİN */}
        <div className="lg:col-span-6 lg:col-start-7 lg:pt-14">
          <h2 id="about-title" className="text-4xl leading-[1.08] sm:text-5xl lg:text-[3.5rem]">
            {t("title")}
          </h2>

          <div className="mt-10 space-y-6 text-lg leading-relaxed text-ink-soft">
            <p>{t("p1")}</p>
            <p>{t("p2")}</p>
            <p>{t("p3")}</p>
          </div>

          <div className="mt-12 flex flex-wrap items-end justify-between gap-6 border-t border-line pt-8">
            <p className="font-serif text-4xl text-rose-700 italic">İrem Aydın</p>
            <a href="#contact" className="link-line text-[0.95rem] font-semibold text-ink">
              {t("cta")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
