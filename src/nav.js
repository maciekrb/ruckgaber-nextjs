import filter from 'lodash/filter'
import first from 'lodash/first'

const routes = [
  { slug: 'index', href: '/', locale: 'en'},
  { slug: 'index', href: '/', locale: 'es'},
  { slug: 'index', href: '/', locale: 'pl'},
  { slug: 'about', href: '/about', locale: 'en'},
  { slug: 'about', href: '/acerca', locale: 'es'},
  { slug: 'about', href: '/wprowadzenie', locale: 'pl'},
  { slug: 'book', href: '/book', locale: 'en'},
  { slug: 'book', href: '/libro', locale: 'es'},
  { slug: 'book', href: '/ksiazka', locale: 'pl'},
  { slug: 'compositions', href: '/compositions', locale: 'en'},
  { slug: 'compositions', href: '/composiciones', locale: 'es'},
  { slug: 'compositions', href: '/kompozycje', locale: 'pl'},
  { slug: 'contact', href: '/contact', locale: 'en'},
  { slug: 'contact', href: '/contacto', locale: 'es'},
  { slug: 'contact', href: '/kontakt', locale: 'pl'},
  { slug: 'galician-music-society', href: '/galician-music-society', locale: 'en'},
  { slug: 'galician-music-society', href: '/sociedad-gallega-musica', locale: 'es'},
  { slug: 'galician-music-society', href: '/galicyjskie-towarzystwo-muzyczne', locale: 'pl'},
  { slug: 'life', href: '/life', locale: 'en'},
  { slug: 'life', href: '/vida', locale: 'es'},
  { slug: 'life', href: '/zycie', locale: 'pl'},
  { slug: 'lviv-archives', href: '/lviv-archives', locale: 'en'},
  { slug: 'lviv-archives', href: '/archivos-lviv', locale: 'es'},
  { slug: 'lviv-archives', href: '/archiwa-lwowskie', locale: 'pl'},
  { slug: 'music', href: '/music', locale: 'en'},
  { slug: 'music', href: '/musica', locale: 'es'},
  { slug: 'music', href: '/muzyka', locale: 'pl'},
]

const useSlug = ({ currLocale, targetLocale=null, slug = null, href = null }) => {
  if (!targetLocale) {
    targetLocale = currLocale
  }
  if (slug) {
    return first(filter(routes, {slug, locale: targetLocale})).href
  }
  if (href) {
    const currObj = first(filter(routes, {href}))
    if (!currObj) {
      throw new Error(`No routes match href '${href}'`)
    }
    return first(filter(routes, {slug: currObj.slug, locale: targetLocale})).href
  }
  throw new Error('Either slug or href must be provided')
}

export default useSlug
