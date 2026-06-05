'use client';

import { useTranslations } from 'next-intl';
import { MessageCircle } from 'lucide-react';
import Image from 'next/image';
import Divider from './divider';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section
      id="home"
      className="relative overflow-hidden  md:min-h-[calc(95vh-var(--header-height))] pt-[var(--header-height)"

    >
      {/* BACKGROUND */}
      <div className="my-6 md:hidden">
        <Image
          src="/images/atakuleanitkabir.png"
          width={1200}
          height={800}
          alt="Ankara"
          className="
      w-full
      h-30
      object-cover
    
      
    "
        />
      </div>
      <div className="absolute inset-0 hidden md:block">
        <div
          className="
      h-full w-full
      bg-cover
      bg-center
      scale-105
    "
          style={{
            backgroundImage: "url('/images/atakuleanitkabir.png')"
          }}
        />
      </div>

      {/* OVERLAY */}
      <div className=" md:block absolute hidden inset-0 bg-black/70" />

      {/* CONTENT */}
      <div className="
        relative z-10
        h-full
        container-custom
        flex
        items-center
        md:items-end
        md:pb-16
     
        px-5
        sm:px-8
        lg:px-0
      ">

        {/* TEXT WRAPPER */}
        <div className="
          w-full
          max-w-md
          md:max-w-xl
          text-center
          md:mt-20
          md:text-left
        ">

          <h1 className="
            text-3xl
            sm:text-4xl
            md:text-6xl
            lg:text-7xl
            font-bold
            text-black md:text-white
            mb-5
            leading-tight
          ">
            {t('title')}
          </h1>

          <p className="
            text-sm
            sm:text-base
            md:text-xl
            text-black/80 md:text-white/80
            mb-7
          ">
            {t('subtitle')}
          </p>

          {/* CTA */}
          <div className="
            flex
            flex-col
            gap-4
            sm:items-center
            md:items-start
          ">

            <a
              href="https://wa.me/905XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center justify-center gap-3
                bg-footer
                px-6 py-4
                rounded-full
                font-semibold
                shadow-xl
                hover:scale-105 transition-all
                w-full
                sm:w-auto
                text-white
              "
            >
              <MessageCircle className="w-5 h-5 " />
              WhatsApp’tan İletişime Geç
            </a>

            <span className="text-black/60 md:text-white/60 text-xs sm:text-sm">
              {t('ctaNote')}
            </span>

          </div>

        </div>

      </div>
      <Divider className="md:bg-white  bg-[rgb(var(--color-accent))]" />

    </section>
  );
}
