'use client';

import { useTranslations } from 'next-intl';
import {
  Scale,
  Briefcase,
  FileText,
  Zap,
  Shield,
  Globe
} from 'lucide-react';

export default function Services() {
  const t = useTranslations('services');

  const services = [
    {
      icon: Scale,
      title: t('sportsLaw.title'),
      description: t('sportsLaw.description')
    },
    {
      icon: Briefcase,
      title: t('commercialLaw.title'),
      description: t('commercialLaw.description')
    },
    {
      icon: FileText,
      title: t('contractManagement.title'),
      description: t('contractManagement.description')
    },
    {
      icon: Zap,
      title: t('energyLaw.title'),
      description: t('energyLaw.description')
    },
    {
      icon: Shield,
      title: t('dataProtection.title'),
      description: t('dataProtection.description')
    },
    {
      icon: Globe,
      title: t('internationalLaw.title'),
      description: t('internationalLaw.description')
    }
  ];

  return (<section
    id="services"
    className="md:py-24 bg-gray-50"
  > <div className="container-custom px-5 sm:px-8 lg:px-0">


      <div className="max-w-3xl mx-auto text-center mb-16">
        <span className="text-sm uppercase tracking-[0.3em] text-[rgb(var(--color-accent))] font-semibold">
          {t('badge')}
        </span>

        <h2 className="mt-4 text-4xl md:text-5xl font-bold text-footer">
          {t('title')}
        </h2>

        <p className="mt-6 text-gray-600">
          {t('subtitle')}
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <div
              key={index}
              className="
              bg-white
              rounded-3xl
              p-8
              shadow-sm
              hover:shadow-xl
              transition-all
              hover:-translate-y-1
            "
            >
              <div className="
              w-14
              h-14
              rounded-2xl
              bg-[rgb(var(--color-accent))]
              flex
              items-center
              justify-center
              mb-6
            ">
                <Icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-xl font-semibold text-footer mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>

    </div>
  </section>


  );
}
