'use client';

import { useTranslations } from 'next-intl';
import { MessageCircle } from 'lucide-react';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section
      id="home"
      className="relative flex items-end"
      style={{
        minHeight: 'calc(85vh - var(--header-height))',
        paddingTop: 'var(--header-height)'
      }}
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 grid">
        <div
          className="bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/atakuleanitkabir.png')"
          }}
        />
      </div>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/80" />

      {/* CONTENT */}
      <div className="relative z-10 container-custom pb-24">

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          {t('title')}
        </h1>

        <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-8">
          {t('subtitle')}
        </p>

        {/* BREADCRUMB */}
        <div className="text-sm text-white/70 mb-10">
          {t('breadcrumb.home')} /{' '}
          <span className="text-red-400 font-medium">
            {t('breadcrumb.current')}
          </span>
        </div>

      </div>

      {/* WHATSAPP BUTTON */}
      <a
        href="https://wa.me/905XXXXXXXXX"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full shadow-xl transition-all hover:scale-105"
      >
        <MessageCircle className="w-5 h-5" />
        WhatsApp
      </a>

    </section>
  );
}
