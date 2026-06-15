'use client';

import { useTranslations } from 'next-intl';
import {
    Users,
    Globe,
    MessageSquare,
    FileText,
    Shield,
    TrendingUp
} from 'lucide-react';

export default function WhyChooseUs() {
    const t = useTranslations('whyUs');

    const items = [
        {
            icon: Users,
            title: t('items.1.title'),
            description: t('items.1.description')
        },
        {
            icon: Globe,
            title: t('items.2.title'),
            description: t('items.2.description')
        },
        {
            icon: MessageSquare,
            title: t('items.3.title'),
            description: t('items.3.description')
        },
        {
            icon: FileText,
            title: t('items.4.title'),
            description: t('items.4.description')
        },
        {
            icon: Shield,
            title: t('items.5.title'),
            description: t('items.5.description')
        },
        {
            icon: TrendingUp,
            title: t('items.6.title'),
            description: t('items.6.description')
        }
    ];

    return (<section
        id="why-us"
        className="section-padding bg-gray-50"
    > <div className="container-custom">

            ```
            <div className="max-w-3xl mx-auto text-center mb-16">

                <span className="text-sm uppercase tracking-[0.3em] text-[rgb(var(--color-accent))] font-semibold">
                    {t('badge')}
                </span>

                <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
                    {t('title')}
                </h2>

                <p className="text-gray-600 text-lg">
                    {t('subtitle')}
                </p>

            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                {items.map((item, index) => {
                    const Icon = item.icon;

                    return (
                        <div
                            key={index}
                            className="
              bg-white
              p-8
              rounded-3xl
              shadow-sm
              hover:shadow-xl
              transition-all
              hover:-translate-y-1
            "
                        >
                            <div
                                className="
                w-14 h-14
                rounded-2xl
                bg-[rgb(var(--color-accent))]
                flex items-center justify-center
                mb-5
              "
                            >
                                <Icon className="w-7 h-7 text-white" />
                            </div>

                            <h3 className="text-xl font-semibold mb-3">
                                {item.title}
                            </h3>

                            <p className="text-gray-600 leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    );
                })}

            </div>

        </div>
    </section>


    );
}
