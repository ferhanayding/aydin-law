import { useTranslations } from 'next-intl';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="bg-[rgb(var(--color-footer))] text-white ">
      <div className="container-custom py-10 md:py-20 grid gap-8 md:gap-12 grid-cols-1 md:grid-cols-3 px-5 sm:px-8 lg:px-0">

        {/* BRAND */}
        <div>
          <div className="flex items-center relative  gap-3 font-bold text-lg sm:text-2xl mb-5">

            Av. İrem Aydın
          </div>

          <p className="text-white/70 max-w-sm leading-relaxed text-sm sm:text-base">
            {t('desc')}
          </p>
        </div>

        {/* LINKS */}
        <div>
          <h4 className="font-semibold mb-5 text-white text-base sm:text-lg">
            {t('links.title')}
          </h4>

          <ul className="space-y-3 text-white/80 text-sm sm:text-base">
            {['home', 'about', 'services', 'contact'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  className="relative inline-block transition hover:
                  after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0
                  after:bg-[rgb(var(--color-accent))] after:transition-all hover:after:w-full"
                >
                  {t(`links.${item}`)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="font-semibold mb-5 text-base sm:text-lg">
            {t('contact.title')}
          </h4>

          <ul className="space-y-4 text-white/80 text-sm sm:text-base">
            <li className="flex items-center gap-3">
              <Phone size={18} className="flex-shrink-0" />
              <span>+90 539 266 96 29</span>
            </li>

            <li className="flex items-center gap-3">
              <Mail size={18} className="flex-shrink-0" />
              <span>atty.iremaydin@gmail.com</span>
            </li>

            <li className="flex items-center gap-3">
              <MapPin size={18} className="flex-shrink-0" />
              <span>ANKARA, Türkiye</span>
            </li>
          </ul>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10 py-6 px-5 text-center text-white/50 text-xs sm:text-sm">
        © {new Date().getFullYear()} Av. İrem Aydın — {t('rights')}
      </div>
    </footer>
  );
}
