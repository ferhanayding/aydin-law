'use client';

import { useTranslations } from 'next-intl';

export default function About() {
  const t = useTranslations('about');

  return (
    <section className="section-padding">
      <div className="container-custom grid lg:grid-cols-2 gap-16">

        <div className="h-105 bg-neutral-100 rounded-3xl" />

        <div>
          <h2 className="text-4xl font-bold mb-6">{t('title')}</h2>
          <p className="text-neutral-600 mb-6">{t('desc')}</p>

          <ul className="space-y-2">
            <li>• {t('points.1')}</li>
            <li>• {t('points.2')}</li>
            <li>• {t('points.3')}</li>
          </ul>
        </div>

      </div>
    </section>
  );
}
