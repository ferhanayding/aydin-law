import { useTranslations } from "next-intl";
import SectionLabel from "./section-label";

const steps = [
  { key: "1", numeral: "I" },
  { key: "2", numeral: "II" },
  { key: "3", numeral: "III" },
  { key: "4", numeral: "IV" },
] as const;

const principles = ["1", "2", "3"] as const;

export default function Approach() {
  const t = useTranslations("approach");

  return (
    <section id="approach" aria-labelledby="approach-title" className="section-y">
      <div className="container-site">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionLabel index="03">{t("label")}</SectionLabel>
            <h2 id="approach-title" className="mt-6 text-4xl leading-[1.08] sm:text-5xl lg:text-[3.5rem]">
              {t("title")}
            </h2>
          </div>
          <p className="text-lg leading-relaxed text-ink-soft lg:col-span-6 lg:col-start-7 lg:pt-12">
            {t("intro")}
          </p>
        </div>

        {/* ADIMLAR */}
        <ol className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {steps.map(({ key, numeral }) => (
            <li key={key} className="border-t-2 border-ink pt-6">
              <span className="font-serif text-2xl text-rose-700 italic">{numeral}.</span>
              <h3 className="mt-4 text-[1.65rem] leading-tight">{t(`steps.${key}.title`)}</h3>
              <p className="mt-3 leading-relaxed text-ink-soft">{t(`steps.${key}.description`)}</p>
            </li>
          ))}
        </ol>

        {/* İLKELER */}
        <div className="mt-20 grid gap-10 bg-rose-50 p-8 sm:p-10 lg:mt-28 lg:grid-cols-12 lg:gap-16 lg:p-14">
          <h3 className="text-3xl leading-tight lg:col-span-4 lg:text-4xl">{t("principlesTitle")}</h3>
          <ul className="grid gap-8 sm:grid-cols-3 lg:col-span-8 lg:gap-10">
            {principles.map((k) => (
              <li key={k}>
                <p className="font-semibold text-ink">{t(`principles.${k}.title`)}</p>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">{t(`principles.${k}.description`)}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
