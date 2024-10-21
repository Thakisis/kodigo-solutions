import { unstable_setRequestLocale } from 'next-intl/server';
import { Inter as FontSans } from 'next/font/google';

import { NavBar } from '@/components/nav-bar';
import { routing } from '@/i18n/routing';
import { cn } from '@/lib/utils';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params: { locale } }) {
  unstable_setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body
        className={cn(
          fontSans.variable,
          'font-sans dark',
          'flex flex-col min-h-screen overscroll-none',
        )}
      >
        <NavBar />

        <div className="flex-grow flex flex-col" id="root">
          <main className="w-full max-w-7xl px-4 py-4 mx-auto flex-grow flex flex-col">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
