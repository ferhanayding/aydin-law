import { useTranslations } from "next-intl";

/** Ana renkte (#A5737D) geniş bir alıntı bandı. Metin büyük puntolu olduğu için beyaz kontrastı yeterli. */
export default function Statement() {
  const t = useTranslations("statement");

  return (
    <section aria-label={t("label")} className="bg-rose text-white">
      <div className="container-site py-16 lg:py-24">
        <p className="max-w-5xl font-serif text-[1.75rem] leading-[1.25] sm:text-4xl lg:text-[3.25rem] lg:leading-[1.15]">
          {t("text")}
        </p>
      </div>
    </section>
  );
}
