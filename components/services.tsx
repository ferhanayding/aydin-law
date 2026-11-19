import { useTranslations } from "next-intl";
import SectionLabel from "./section-label";
import { practiceAreas } from "@/lib/site";

export default function Services() {
  const t = useTranslations("services");

  return (
    <section id="services" aria-labelledby="services-title" className="section-y">
      <div className="container-site">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionLabel index="01">{t("label")}</SectionLabel>
            <h2 id="services-title" className="mt-6 text-4xl leading-[1.08] sm:text-5xl lg:text-[3.5rem]">
              {t("title")}
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 lg:pt-12">
            <p className="text-lg leading-relaxed text-ink-soft">{t("intro")}</p>
          </div>
        </div>

        <ol className="mt-16 grid md:grid-cols-2 md:gap-x-12 lg:mt-20 lg:gap-x-20">
          {practiceAreas.map((key, i) => (
            <li key={key} className="group flex gap-5 border-t border-line py-7 sm:gap-8">
              <span className="w-6 shrink-0 pt-1.5 text-sm font-semibold text-rose-700 tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-[1.65rem] leading-tight text-ink transition-colors group-hover:text-rose-700">
                  {t(`items.${key}.title`)}
                </h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">{t(`items.${key}.description`)}</p>
              </div>
            </li>
          ))}
        </ol>

        <p className="mt-6 border-t border-line pt-8 text-ink-soft">
          {t("note")}{" "}
          <a href="#contact" className="link-line font-semibold text-ink">
            {t("noteLink")}
          </a>
        </p>
      </div>
    </section>
  );
}
