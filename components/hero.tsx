'use client';


import Image from 'next/image';
import Divider from './divider';

export default function Hero() {

  return (
    <section
      id="home"
      className="relative bg-gray-50 overflow-hidden  md:min-h-[calc(95vh-var(--header-height))] pt-[var(--header-height)"

    >
      {/* BACKGROUND */}
      <div className="mb-10 md:hidden">
        <Image
          src="/images/featured.png"
          width={1200}
          height={800}
          alt="Ankara"
          className="
         w-full
         h-40
        object-cover"
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
            backgroundImage: "url('/images/featured.png')"
          }}
        />
      </div>

      {/* OVERLAY */}

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



          {/* CTA */}
          {/* <div className="
            flex
            flex-col
            gap-4
            sm:items-center
            md:items-start
            md:absolute
            md:bottom-8
            md:left-8
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



          </div> */}

        </div>

      </div>
      <Divider className="md:bg-gray-50  bg-[rgb(var(--color-accent))]" />

    </section>
  );
}
