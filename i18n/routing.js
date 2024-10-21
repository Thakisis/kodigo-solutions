import { createSharedPathnamesNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'es'],
  defaultLocale: 'en',
  localePrefix: 'as-needed',
  pathnames: {
    '/': '/',
    '/branding': {
      en: '/branding',
      es: '/marcas',
    },
    '/collateral': {
      en: '/collateral',
      es: '/colaterales',
    },
    '/packaging': {
      en: '/packaging',
      es: '/embalajes', // Cambiado a "embalajes"
    },
    '/inventions': {
      en: '/inventions',
      es: '/invenciones',
    },
    '/games': {
      en: '/games',
      es: '/juegos',
    },
    '/screenplays': {
      en: '/screenplays',
      es: '/guiones',
    },
    '/redirect': '/redirect',
  },
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation(routing);
