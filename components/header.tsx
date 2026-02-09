'use client';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Menu, X } from 'lucide-react';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';

export default function Header() {
  const t = useTranslations('nav');
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/90 border-b border-white/10">
      <div className="container-custom flex items-center justify-between h-(--header-height)">

        {/* LOGO */}
        <div className="font-extrabold text-xl tracking-tight text-primary flex items-center gap-2">
          Av. İrem Aydın
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-10 text-sm font-medium ">
          {['home', 'about', 'services', 'contact'].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="relative text-primary hover:text-[rgb(var(--color-accent-light))]    "
            >
              {t(item)}
            </a>
          ))}
        </nav>

        {/* RIGHT */}
        <div className="flex items-center gap-3">

          {/* DESKTOP LANG */}
          <div className="hidden lg:block">
            <LanguageSwitcher />
          </div>


          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden block text-black p-2 rounded-lg hover:bg-white/10 transition"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="lg:hidden bg-primary border-t border-white/10 animate-in fade-in slide-in-from-top-4">
          <div className="container-custom py-6 flex flex-col gap-6">

            <nav className="flex flex-col gap-4 text-black/80">
              {['home', 'about', 'services', 'contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={() => setOpen(false)}
                  className="text-lg hover:text-accent transition"
                >
                  {t(item)}
                </a>
              ))}
            </nav>

            {/* MOBILE LANG */}
            <div className="pt-4 border-t border-white/10">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}




function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function changeLocale(next: string) {
    const segments = pathname.split('/');
    segments[1] = next;
    router.push(segments.join('/'));
  }

  return (
    <div className="relative flex items-center gap-1 rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-sm text-black hover:bg-white/10 transition">


      <button
        onClick={() => changeLocale('tr')}
        className={`px-2 py-0.5 rounded-md transition ${locale === 'tr'
          ? 'bg-accent text-primary'
          : 'hover:text-accent'
          }`}
      >
        TR
      </button>

      <span className="text-black/30">|</span>

      <button
        onClick={() => changeLocale('en')}
        className={`px-2 py-0.5 rounded-md transition ${locale === 'en'
          ? 'bg-accent text-primary'
          : 'hover:text-accent'
          }`}
      >
        EN
      </button>
    </div>
  );
}
