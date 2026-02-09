'use client';

import { useTranslations } from 'next-intl';

export default function Services() {
  const t = useTranslations('services');

  const keys = [
    'sports',
    'contracts',
    'energy',
    'commercial',
    'privacy',
    'international'
  ];

  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-custom">

        <h2 className="text-4xl text-center font-bold mb-12">
          {t('title')}
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {keys.map((key) => (
            <div
              key={key}
              className="bg-white p-8 rounded-2xl shadow"
            >
              <h3 className="font-semibold mb-2">
                {t(`${key}.title`)}
              </h3>
              <p className="text-neutral-600">
                {t(`${key}.desc`)}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
