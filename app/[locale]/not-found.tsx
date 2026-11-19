import { useTranslations } from "next-intl";
import { Link } from "@/app/i18n/navigation";

export default function NotFound() {
  const t = useTranslations("notFound");

  return (
    <section className="container-site flex min-h-[70svh] flex-col justify-center py-24">
      <p className="text-sm font-semibold text-rose-700 tabular-nums">404</p>
      <h1 className="mt-6 max-w-2xl text-5xl leading-[1.05] sm:text-6xl">{t("title")}</h1>
      <p className="mt-6 max-w-md text-lg text-ink-soft">{t("text")}</p>
      <Link href="/" className="btn btn-primary mt-10 self-start">
        {t("back")}
      </Link>
    </section>
  );
}
