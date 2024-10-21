import { menuElements } from '@/constants'
import { useTranslations } from 'next-intl'
import LanguajeSelector from '@/components/language-selector'
import NavigationLink from './nav-link'

export function NavBar() {
  const t = useTranslations('navigation')
  const menulist = menuElements.map(({ url, text }) => {

    return (
      <NavigationLink
        className="text-sm"
        scroll={false}
        key={url}
        url={url}
      >
        {t(text)}
      </NavigationLink>
    )
  })

  return (
    <div
      className={`p-4 flex z-50 justify-between items-center absolute inset-x-0 top-0 h-16   text-xl font-[family-name:var(--font-geist-sans)] `}
    >
      <h1 className="text-bold  uppercase ">KodigoSolutions</h1>

      <div className="flex h-full items-center justify-center gap-4 z-50">{menulist}</div>
      <LanguajeSelector ></LanguajeSelector>
    </div>
  )
}
