import { useLocale, useTranslations } from 'next-intl';

import LanguageLink from './language-link';
import LanguageClient from './language.client';

export default function LangSelector() {
  const locale = useLocale();
  const t = useTranslations('languages');
  const langs = ['en', 'es'].map((lang) => (
    <LanguageLink
      locale={lang}
      langName={t(lang)}
      key={lang}
      selected={locale === lang}
    />
  ));
  return (
    <LanguageClient selected={locale} name={t(locale)}>
      <div className="flex flex-col">{langs}</div>
    </LanguageClient>
  );
}
