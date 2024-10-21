import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';

export default function HomePage({ params: { locale } }) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('navigation');

  return (
    <div className="flex flex-col flex-1 bg-background text-foreground">
      home
    </div>
  );
}
