type LocalizedSlugs = {
  [key: string]: {
    [lang: string]: string
  }
}
const localizedSlugs: LocalizedSlugs = {
  home: {
    en: '',
    es: '',
    pl: '',
  },
  about: {
    en: 'about',
    es: 'acerca-de-nosotros',
    pl: 'wprowadzenie',
  },
  book: {
    en: 'book',
    es: 'libro',
    pl: 'ksiazka',
  },
  compositions: {
    en: 'compositions',
    es: 'composiciones',
    pl: 'kompozycje',
  },
  galicianMusicSociety: {
    en: 'galician-music-society',
    es: 'sociedad-de-musica-gallega',
    pl: 'galicyjskie-towarzystwo-muzyczne',
  },
  life: {
    en: 'life',
    es: 'vida',
    pl: 'zycie',
  },
  lvivArchives: {
    en: 'lviv-archives',
    es: 'archivos-de-lviv',
    pl: 'archiwa-lwowskie',
  },
  music: {
    en: 'music',
    es: 'musica',
    pl: 'muzyka',
  },
  error: {
    en: 'error',
    es: 'error',
    pl: 'blad',
  },
}

const sectionMap = Object.keys(localizedSlugs).reduce((acc, normalizedKey) => {
  const langSlugs = localizedSlugs[normalizedKey]
  Object.values(langSlugs).forEach((slug: string) => {
    acc[slug] = normalizedKey
  })
  return acc
}, {})

/**
 * Returns the normalized page name based on the slug.
 * @param slug - The slug to normalize.
 * @returns The normalized page name.
 */
export const slugToPageName = (slug: string): string | undefined => {
  return sectionMap[slug]
}

export const pageNameToSlug = (
  slug: string | undefined,
  lang: string,
): string => {
  if (slug == null || !localizedSlugs[slug]) {
    return `/${lang}${localizedSlugs['error'][lang]}`
  }
  return `/${lang}/${localizedSlugs[slug][lang]}`
}
