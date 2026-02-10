'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function About() {
  const t = useTranslations('about');

  return (
    <section className="section-padding ">
      <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

        {/* IMAGE */}
        <div className="
          relative
          w-full
          md:aspect-square
          aspect-4/5
          rounded-3xl
          overflow-hidden
          bg-neutral-100
        ">
          <Image
            src="/images/atakuleanitkabir.png"
            alt="irem"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* TEXT */}
        <div className="text-center lg:text-left">

          <h2 className="
            text-3xl
            sm:text-4xl
            lg:text-5xl
            font-bold
            mb-6
          ">
            {t('title')}
          </h2>

          <p className="
            text-neutral-600
            text-base
            sm:text-lg
            mb-8
            leading-relaxed
          ">
            {t('desc')}
          </p>

          <ul className="
            space-y-3
            text-sm
            sm:text-base
            max-w-xl
            mx-auto
            lg:mx-0
          ">
            <li>• {t('points.1')}</li>
            <li>• {t('points.2')}</li>
            <li>• {t('points.3')}</li>
          </ul>

        </div>

      </div>
    </section>
  );
}
