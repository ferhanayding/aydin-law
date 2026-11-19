"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import Wordmark from "./wordmark";
import LanguageSwitcher from "./language-switcher";
import { navItems, sectionIds, site } from "@/lib/site";

export default function Header() {
  const t = useTranslations("nav");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  // Görünen bölüme göre menüdeki aktif linki işaretle
  useEffect(() => {
    const sections = Object.values(sectionIds)
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Mobil menü açıkken sayfa kaymasın, ESC ile kapansın
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/92 backdrop-blur-sm">
      <div className="container-site flex h-(--header-height) items-center justify-between gap-6">
        <a href={`#${sectionIds.home}`} aria-label={site.name} className="min-w-0" onClick={() => setOpen(false)}>
          <Wordmark />
        </a>

        {/* MASAÜSTÜ */}
        <nav aria-label={t("menuLabel")} className="hidden items-center gap-8 xl:flex">
          {navItems.map((item) => {
            const id = sectionIds[item];
            return (
              <a
                key={item}
                href={`#${id}`}
                aria-current={active === id ? "true" : undefined}
                className={`text-[1.05rem] whitespace-nowrap transition-colors ${
                  active === id ? "text-rose-700" : "text-ink hover:text-rose-700"
                }`}
              >
                {t(item)}
              </a>
            );
          })}
        </nav>

        <div className="hidden items-center gap-7 xl:flex">
          <LanguageSwitcher />
          <a href={site.phone.tel} className="btn btn-primary !px-4 !py-2.5 text-sm whitespace-nowrap">
            {site.phone.display}
          </a>
        </div>

        {/* MOBİL */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="flex items-center gap-2.5 py-2 text-sm font-semibold text-ink xl:hidden"
        >
          {open ? t("close") : t("menu")}
          <span aria-hidden className="relative block h-2.5 w-5">
            <span
              className={`absolute left-0 h-px w-5 bg-ink transition-transform duration-300 ${
                open ? "top-1/2 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 h-px w-5 bg-ink transition-transform duration-300 ${
                open ? "top-1/2 -rotate-45" : "bottom-0"
              }`}
            />
          </span>
        </button>
      </div>

      {/* MOBİL MENÜ */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="h-[calc(100dvh-var(--header-height))] overflow-y-auto border-t border-line bg-paper xl:hidden"
      >
        <div className="container-site flex min-h-full flex-col py-8">
          <nav aria-label={t("menuLabel")}>
            <ol>
              {navItems.map((item, i) => (
                <li key={item} className="border-b border-line">
                  <a
                    href={`#${sectionIds[item]}`}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline gap-4 py-4"
                  >
                    <span className="text-xs font-semibold text-rose-700 tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-serif text-3xl text-ink">{t(item)}</span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="mt-auto pt-10">
            <p className="text-sm text-ink-soft">{t("callUs")}</p>
            <a href={site.phone.tel} className="mt-1 block font-serif text-3xl text-ink">
              {site.phone.display}
            </a>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="link-line mt-3 inline-block text-sm font-semibold"
            >
              WhatsApp
            </a>
            <LanguageSwitcher className="mt-8" />
          </div>
        </div>
      </div>
    </header>
  );
}
