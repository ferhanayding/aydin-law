'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function About() {
  const t = useTranslations('about');

  return (
    <section className="section-padding bg-footer" id="about">
      <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">


        {/* IMAGE */}
        <div
          className="
        relative
        w-full
        aspect-4/5
        rounded-3xl
        overflow-hidden
        bg-white/10
      "
        >
          <Image
            src="/images/atakuleanitkabir.png"
            alt="İrem Aydın"
            fill

            priority
            className="object-cover"
          />
        </div>

        {/* TEXT */}
        <div className="text-center lg:text-left text-white">

          <span className="uppercase tracking-[0.3em] text-white/70 text-sm font-semibold">
            {t('badge')}
          </span>

          <h2
            className="
          text-3xl
          sm:text-4xl
          lg:text-5xl
          font-bold
          mt-4
          mb-6
        "
          >
            {t('title')}
          </h2>

          <p
            className="
          text-white/85
          text-base
          sm:text-lg
          leading-relaxed
          mb-8
        "
          >
            {t('desc')}
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">

            <div className="bg-white/10 rounded-2xl p-5 backdrop-blur-sm">
              <h3 className="font-semibold mb-2">
                {t('educationTitle')}
              </h3>
              <p className="text-white/80 text-sm">
                {t('education')}
              </p>
            </div>

            <div className="bg-white/10 rounded-2xl p-5 backdrop-blur-sm">
              <h3 className="font-semibold mb-2">
                {t('experienceTitle')}
              </h3>
              <p className="text-white/80 text-sm">
                {t('experience')}
              </p>
            </div>

          </div>

          <ul className="space-y-3 text-white/90">
            <li>✓ {t('points.1')}</li>
            <li>✓ {t('points.2')}</li>
            <li>✓ {t('points.3')}</li>
            <li>✓ {t('points.4')}</li>
          </ul>

        </div>

      </div>
    </section>

  );
}
