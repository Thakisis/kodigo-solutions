'use client';

import { Link, usePathname } from '@/i18n/routing';

export default function LanguageLink({ locale, langName, selected }) {
  const pathname = usePathname();
  const checkSelected = selected ? (
    <span className="ml-auto">✓ </span>
  ) : (
    <span className="ml-auto opacity-0">✓ </span>
  );
  return (
    <Link
      href={pathname}
      locale={locale}
      className={`px-3 py-3 flex  ${selected && 'bg-gray-800'} text-sm items-center hover:bg-gray-800 no-underline hover:no-underline transition-colors duration-100`}
    >
      <div
        className="flex mr-3 h-4 aspect-[4/3] align-text-bottom  "
        style={{
          backgroundImage: `url(/langs/${locale}.svg)`,
          backgroundSize: 'cover',
        }}
        title={langName}
      />
      <span className="inline-block ml text-white mr-2">{langName}</span>
      {checkSelected}
    </Link>
  );
}
