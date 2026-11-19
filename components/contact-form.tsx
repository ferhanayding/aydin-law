"use client";

import { useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";
import { ChevronDown } from "lucide-react";
import { practiceAreas, whatsappLink } from "@/lib/site";

const labelClass = "block text-sm text-rose-100/80";
const fieldClass =
  "mt-2 w-full border-0 border-b border-white/30 bg-transparent px-0 py-2.5 text-lg text-white placeholder:text-white/35 transition-colors focus:border-rose-200 focus:ring-0 focus:outline-none";

export default function ContactForm() {
  const t = useTranslations("contact.form");
  const tAreas = useTranslations("services.items");
  const [error, setError] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const subject = String(data.get("subject") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || !message) {
      setError(true);
      return;
    }
    setError(false);

    const details = [`${t("name")}: ${name}`];
    if (phone) details.push(`${t("phone")}: ${phone}`);
    if (subject) details.push(`${t("subject")}: ${subject}`);

    const text = [t("waIntro"), details.join("\n"), message].join("\n\n");
    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={onSubmit} noValidate className="mt-10 grid gap-8 sm:grid-cols-2">
      <label className={labelClass}>
        {t("name")} *
        <input name="name" type="text" required autoComplete="name" placeholder={t("namePlaceholder")} className={fieldClass} />
      </label>

      <label className={labelClass}>
        {t("phone")}
        <input name="phone" type="tel" autoComplete="tel" placeholder={t("phonePlaceholder")} className={fieldClass} />
      </label>

      <label className={`${labelClass} sm:col-span-2`}>
        {t("subject")}
        <span className="relative block">
          <select name="subject" defaultValue="" className={`${fieldClass} appearance-none pr-8 [&>option]:text-ink`}>
            <option value="">{t("subjectPlaceholder")}</option>
            {practiceAreas.map((key) => (
              <option key={key} value={tAreas(`${key}.title`)}>
                {tAreas(`${key}.title`)}
              </option>
            ))}
            <option value={t("subjectOther")}>{t("subjectOther")}</option>
          </select>
          <ChevronDown
            className="pointer-events-none absolute top-1/2 right-0 mt-1 h-4 w-4 -translate-y-1/2 text-white/60"
            aria-hidden
          />
        </span>
      </label>

      <label className={`${labelClass} sm:col-span-2`}>
        {t("message")} *
        <textarea
          name="message"
          required
          rows={4}
          placeholder={t("messagePlaceholder")}
          className={`${fieldClass} resize-y`}
        />
      </label>

      {error && (
        <p role="alert" className="text-sm font-semibold text-rose-200 sm:col-span-2">
          {t("error")}
        </p>
      )}

      <div className="flex flex-col gap-5 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-relaxed text-rose-100/60 sm:max-w-xs">{t("hint")}</p>
        <button type="submit" className="btn btn-light">
          {t("submit")}
        </button>
      </div>
    </form>
  );
}
