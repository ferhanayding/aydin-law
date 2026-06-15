'use client';

import { useTranslations } from 'next-intl';

export default function Contact() {
  const t = useTranslations('contact');

  return (<section
    id="contact"
    className="py-24 bg-white"
  > <div className="container-custom px-5 sm:px-8 lg:px-0">

      ```
      {/* HEADER */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <span className="text-sm uppercase tracking-[0.3em] text-[rgb(var(--color-accent))] font-semibold">
          {t('badge')}
        </span>

        <h2 className="mt-4 text-4xl md:text-5xl font-bold text-footer">
          {t('title')}
        </h2>

        <p className="mt-6 text-gray-600 leading-relaxed">
          {t('subtitle')}
        </p>
      </div>

      {/* CONTENT */}
      <div className="grid lg:grid-cols-2 gap-12">

        {/* LEFT */}
        <div className="bg-gray-50 rounded-3xl p-8 md:p-10">
          <h3 className="text-2xl font-semibold text-footer mb-6">
            {t('infoTitle')}
          </h3>

          <div className="space-y-8">

            <div>
              <p className="text-sm text-gray-500 mb-1">
                {t('phone')}
              </p>

              <a
                href="tel:+905392669629"
                className="text-lg font-medium text-footer hover:text-[rgb(var(--color-accent))]"
              >
                +90 539 266 96 29
              </a>
            </div>

            <div>
              <p className="text-sm text-gray-500 mb-1">
                {t('email')}
              </p>

              <a
                href="mailto:atty.iremaydin@gmail.com"
                className="text-lg font-medium text-footer hover:text-[rgb(var(--color-accent))]"
              >
                atty.iremaydin@gmail.com
              </a>
            </div>

            <div>
              <p className="text-sm text-gray-500 mb-1">
                {t('location')}
              </p>

              <p className="text-lg font-medium text-footer">
                Ankara, Türkiye
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="bg-footer text-white rounded-3xl p-8 md:p-10 flex flex-col justify-center">

          <span className="text-sm uppercase tracking-[0.3em] text-white/70">
            {t('company')}
          </span>

          <h3 className="text-3xl font-bold mt-4 mb-6">
            {t('ctaTitle')}
          </h3>

          <p className="text-white/80 leading-relaxed mb-8">
            {t('ctaText')}
          </p>

          <a
            href="https://wa.me/905392669629"
            target="_blank"
            rel="noopener noreferrer"
            className="
            inline-flex
            items-center
            justify-center
            bg-[rgb(var(--color-accent))]
            px-8
            py-4
            rounded-full
            font-semibold
            hover:scale-105
            transition-all
            w-fit
          "
          >
            {t('button')}
          </a>

          <p className="mt-6 text-sm text-white/60">
            {t('note')}
          </p>

        </div>

      </div>
    </div>
  </section>


  );
}
