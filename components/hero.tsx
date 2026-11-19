import { getImageProps } from "next/image";
import { useTranslations } from "next-intl";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site";

/**
 * Tam ekran hero: Anıtkabir, Atakule ve logo görseli.
 * Görsel hiçbir ekranda kırpılmaz: alana sığacak en büyük boyutta ortalanır,
 * kenarları görselin kendi gece rengine (#00050e → #010103) yumuşakça karışır.
 * Yatay ekranda geniş banner (featured.png), dikey ekranda aynı tasarımın
 * 3:2 versiyonu (featured.jpeg) gösterilir.
 */
export default function Hero() {
  const t = useTranslations("hero");

  const common = { alt: t("imageAlt"), sizes: "100vw", priority: true };
  const {
    props: { srcSet: portraitSrcSet },
  } = getImageProps({ ...common, src: "/images/featured.jpeg", width: 1536, height: 1024 });
  const { props: landscape } = getImageProps({ ...common, src: "/images/featured.png", width: 1844, height: 853 });

  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative flex h-[calc(100svh-var(--header-height))] min-h-[32rem] flex-col bg-gradient-to-b from-[#00050e] to-[#010103] text-white"
    >
      <h1 id="hero-title" className="sr-only">
        {t("srTitle")}
      </h1>

      <div className="flex min-h-0 flex-1 items-center justify-center [container-type:size]">
        <picture className="relative block portrait:[mask-image:linear-gradient(to_bottom,transparent,#000_10%,#000_82%,transparent)] landscape:[mask-image:linear-gradient(to_right,transparent,#000_3%,#000_97%,transparent)] portrait:aspect-[3/2] portrait:w-[min(100cqw,calc(100cqh*1.5))] landscape:aspect-[1844/853] landscape:w-[min(100cqw,calc(100cqh*2.1618))]">
          <source media="(orientation: portrait)" srcSet={portraitSrcSet} sizes="100vw" />
          {/* eslint-disable-next-line jsx-a11y/alt-text -- alt, getImageProps ile geliyor */}
          <img {...landscape} className="absolute inset-0 h-full w-full object-cover" />
        </picture>
      </div>

      <div className="relative border-t border-white/10">
        <div className="container-site flex flex-col gap-6 pt-6 pb-20 md:flex-row md:items-end md:justify-between md:pb-8 md:pr-20 lg:pr-24 lg:pb-10">
          <div>
            <p className="flex items-center gap-3 text-white/85">
              <span aria-hidden className="h-2 w-2 shrink-0 bg-rose" />
              {t("location")}
            </p>
            <a
              href={site.phone.tel}
              className="mt-2 inline-block text-2xl tracking-wide text-white transition-colors hover:text-rose-200"
            >
              {site.phone.display}
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
            <a href={site.phone.tel} className="btn btn-primary">
              {t("ctaCall")}
            </a>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-semibold text-white underline decoration-white/40 underline-offset-[0.3em] transition-colors hover:decoration-white"
            >
              {t("ctaWhatsapp")}
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
