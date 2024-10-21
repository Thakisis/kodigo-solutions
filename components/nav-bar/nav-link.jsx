



import { Link } from '@/i18n/routing'
export default function NavigationLink({ url, children }) {

  return <Link href={url} className="text-sm text ">{children}</Link>
}
