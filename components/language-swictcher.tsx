'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';

const locales = ['tr', 'en'];

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  function switchLocale(next: string) {
    const segments = pathname.split('/');
    segments[1] = next;
    router.push(segments.join('/'));
  }

  return (
    <div className="flex items-center gap-1 border rounded-lg overflow-hidden">
      {locales.map((lng) => (
        <button
          key={lng}
          onClick={() => switchLocale(lng)}
          className={`px-3 py-1.5 text-sm font-medium transition
            ${
              locale === lng
                ? 'bg-[rgb(var(--color-accent))] text-black'
                : 'hover:bg-neutral-100'
            }`}
        >
          {lng.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
