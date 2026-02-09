import { useTranslations } from 'next-intl';
import { Scale, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="bg-[rgb(var(--color-primary))] text-white mt-32">
      <div className="container-custom py-20 grid gap-12 md:grid-cols-3">

        {/* BRAND */}
        <div>
          <div className="flex items-center gap-3 font-bold text-2xl mb-5">
            <Scale className="text-[rgb(var(--color-accent))]" />
            Av. İrem Aydın
          </div>

          <p className="text-white/70 max-w-sm leading-relaxed">
            {t('desc')}
          </p>
        </div>

        {/* LINKS */}
        <div>
          <h4 className="font-semibold mb-5 text-[rgb(var(--color-accent))]">
            {t('links.title')}
          </h4>

          <ul className="space-y-3 text-white/80">
            {['home', 'about', 'services', 'contact'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  className="relative inline-block transition hover:text-[rgb(var(--color-accent))]
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
          <h4 className="font-semibold mb-5 text-[rgb(var(--color-accent))]">
            {t('contact.title')}
          </h4>

          <ul className="space-y-4 text-white/80">
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-[rgb(var(--color-accent))]" />
              <span>+90 555 123 45 67</span>
            </li>

            <li className="flex items-center gap-3">
              <Mail size={18} className="text-[rgb(var(--color-accent))]" />
              <span>info@iremavukat.com</span>
            </li>

            <li className="flex items-center gap-3">
              <MapPin size={18} className="text-[rgb(var(--color-accent))]" />
              <span>Trabzon, Türkiye</span>
            </li>
          </ul>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10 py-6 text-center text-white/50 text-sm">
        © {new Date().getFullYear()} Av. İrem Aydın — {t('rights')}
      </div>
    </footer>
  );
}
