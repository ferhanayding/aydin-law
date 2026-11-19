"use client";

import { Fragment, useTransition } from "react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/app/i18n/navigation";
import { routing } from "@/app/i18n/routing";

export default function LanguageSwitcher({ className = "" }: { className?: string }) {
  const t = useTranslations("nav");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  function changeLocale(next: string) {
    if (next === locale) return;
    startTransition(() => {
      router.replace(pathname, { locale: next, scroll: false });
    });
  }

  return (
    <div
      role="group"
      aria-label={t("language")}
      className={`flex items-center gap-2 text-[0.95rem] font-semibold ${isPending ? "opacity-50" : ""} ${className}`}
    >
      {routing.locales.map((l, i) => {
        const active = l === locale;
        return (
          <Fragment key={l}>
            {i > 0 && (
              <span aria-hidden className="text-line">
                /
              </span>
            )}
            <button
              type="button"
              lang={l}
              aria-pressed={active}
              onClick={() => changeLocale(l)}
              className={`uppercase transition-colors ${
                active
                  ? "text-ink underline decoration-rose decoration-1 underline-offset-[0.35em]"
                  : "text-ink-soft hover:text-rose-700"
              }`}
            >
              {l}
            </button>
          </Fragment>
        );
      })}
    </div>
  );
}
