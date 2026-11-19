import { useTranslations } from "next-intl";
import { ArrowUpRight } from "lucide-react";
import SectionLabel from "./section-label";
import ContactForm from "./contact-form";
import { site } from "@/lib/site";

export default function Contact() {
  const t = useTranslations("contact");

  const rows = [
    { label: "WhatsApp", value: t("whatsappValue"), href: site.whatsapp, external: true },
    { label: t("email"), value: site.email, href: `mailto:${site.email}` },
    { label: t("location"), value: t("locationValue") },
  ];

  return (
    <section id="contact" aria-labelledby="contact-title" className="section-y bg-rose-900 text-white">
      <div className="container-site grid gap-16 lg:grid-cols-12">
        {/* BİLGİLER */}
        <div className="lg:col-span-5">
          <SectionLabel index="04" tone="light">
            {t("label")}
          </SectionLabel>
          <h2 id="contact-title" className="mt-6 text-4xl leading-[1.08] sm:text-5xl lg:text-[3.5rem]">
            {t("title")}
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-rose-100/80">{t("text")}</p>

          <div className="mt-12">
            <p className="text-sm text-rose-100/70">{t("phone")}</p>
            <a
              href={site.phone.tel}
              className="mt-1 inline-block font-serif text-4xl text-white transition-colors hover:text-rose-200 sm:text-5xl"
            >
              {site.phone.display}
            </a>
          </div>

          <dl className="mt-10 divide-y divide-white/15 border-y border-white/15">
            {rows.map(({ label, value, href, external }) => (
              <div key={label} className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-4">
                <dt className="text-sm text-rose-100/70">{label}</dt>
                <dd className="min-w-0 break-all sm:break-normal">
                  {href ? (
                    <a
                      href={href}
                      className="inline-flex items-center gap-1 font-semibold text-white underline decoration-white/30 underline-offset-4 transition-colors hover:decoration-white"
                      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                      {value}
                      {external && <ArrowUpRight className="h-4 w-4" aria-hidden />}
                    </a>
                  ) : (
                    <span className="font-semibold">{value}</span>
                  )}
                </dd>
              </div>
            ))}
          </dl>

          <p className="mt-8 max-w-md text-sm leading-relaxed text-rose-100/60">{t("note")}</p>
        </div>

        {/* FORM */}
        <div className="lg:col-span-6 lg:col-start-7">
          <div className="border border-white/15 p-7 sm:p-10">
            <h3 className="text-3xl">{t("form.title")}</h3>
            <p className="mt-3 text-rose-100/75">{t("form.text")}</p>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
