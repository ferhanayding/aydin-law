import { useTranslations } from "next-intl";
import Wordmark from "./wordmark";
import { navItems, sectionIds, site } from "@/lib/site";

export default function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");
  const year = new Date().getFullYear();

  return (
    <footer className="bg-paper">
      <div className="container-site py-14 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <a href={`#${sectionIds.home}`} aria-label={site.name} className="inline-block">
              <Wordmark />
            </a>
            <p className="mt-6 max-w-sm leading-relaxed text-ink-soft">{t("desc")}</p>
          </div>

          <nav aria-label={t("linksTitle")} className="lg:col-span-3 lg:col-start-7">
            <p className="text-sm text-ink-soft">{t("linksTitle")}</p>
            <ul className="mt-4 space-y-2">
              {navItems.map((item) => (
                <li key={item}>
                  <a href={`#${sectionIds[item]}`} className="text-ink transition-colors hover:text-rose-700">
                    {tNav(item)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <p className="text-sm text-ink-soft">{t("contactTitle")}</p>
            <ul className="mt-4 space-y-2 text-ink">
              <li>
                <a href={site.phone.tel} className="hover:text-rose-700">
                  {site.phone.display}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="break-all hover:text-rose-700">
                  {site.email}
                </a>
              </li>
              <li>{t("location")}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-line pt-6 pb-16 text-sm leading-relaxed text-ink-soft md:flex-row md:justify-between md:pb-0 md:pr-20">
          <p>
            © {year} {site.name}. {t("rights")}
          </p>
          <p className="md:max-w-lg md:text-right">{t("disclaimer")}</p>
        </div>
      </div>
    </footer>
  );
}
