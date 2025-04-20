import React from 'react'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import { Roboto_Condensed, Great_Vibes } from 'next/font/google'
import { useLingui } from '@lingui/react/macro'
import { ThemeRegistry } from '../../theme/ThemeRegistry'
import { allMessages } from '../../i18n'
import LinguiClientProvider from '../../components/providers/LinguiClientProvider'
import Main from '../../components/layouts/Main'
import { initLingui } from '../../initLingui'
import NavBar from '../../components/organisms/NavBar'
import Footer from 'src/components/organisms/Footer'
import { pageNameToSlug } from 'src/locales/namedSlugs'

// export function generateStaticParams() {
//   return routing.locales.map((locale) => ({ locale }))
// }
//
const roboto = Roboto_Condensed({
  subsets: ['latin-ext'],
  display: 'swap',
})
const greatVibes = Great_Vibes({
  weight: '400',
  subsets: ['latin-ext'],
  display: 'swap',
})

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const lang = (await params).locale
  initLingui(lang)
  const { t } = useLingui()
  const mainMenu = [
    { title: t`home.title`, href: pageNameToSlug('home', lang) },
    { title: t`life.title`, href: pageNameToSlug('life', lang) },
    {
      title: t`galicianMusicSociety.title`,
      href: pageNameToSlug('galicianMusicSociety', lang),
    },
    { title: t`music.title`, href: pageNameToSlug('music', lang) },
    {
      title: t`lvivArchives.title`,
      href: pageNameToSlug('lvivArchives', lang),
    },
    {
      title: t`compositions.title`,
      href: pageNameToSlug('compositions', lang),
    },
    { title: t`about.title`, href: pageNameToSlug('about', lang) },
  ]

  const footerMenu = [
    {
      title: t`Jan Ruckgaber`,
      items: [
        { label: t`life.title`, href: 'life.href' },
        {
          label: t`galicianMusicSociety.title`,
          href: t`galicianMusicSociety.href`,
        },
        { label: t`music.title`, href: t`music.href` },
        { label: t`lvivArchives.title`, href: t`lvivArchives.href` },
        { label: t`compositions.title`, href: t`compositions.href` },
        { label: t`about.title`, href: t`about.href` },
      ],
    },
    {
      title: t`The Book`,
      items: [
        { label: t`about.title`, href: t`about.href` },
        { label: t`contact.title`, href: t`contact.href` },
        { label: t`Download`, href: t`book.href` },
      ],
    },
    {
      title: t`Music Compositions`,
      items: [
        { label: t`List of compositions`, href: t`compositions.href` },
        {
          label: t`Piano with an Orchestra`,
          href: t`compositions.href`,
          section: 'section-A',
        },
        {
          label: t`Chamber Orchestra`,
          href: t`compositions.href`,
          section: 'section-B',
        },
        { label: t`Piano`, href: t`compositions.href`, section: 'section-C' },
        {
          label: t`Violin and Piano`,
          href: t`compositions.href`,
          section: 'section-D',
        },
        {
          label: t`Flute, the Czakan and the Piano`,
          href: t`compositions.href`,
          section: 'section-E',
        },
        { label: t`Choir`, href: t`compositions.href`, section: 'section-F' },
        {
          label: t`Clarinet and Piano`,
          href: t`compositions.href`,
          section: 'section-G',
        },
        {
          label: t`Voice and Piano`,
          href: t`compositions.href`,
          section: 'section-H',
        },
      ],
    },
  ]

  return (
    <html lang={lang} className={`${roboto.className} ${greatVibes.className}`}>
      <head>
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="viewport" content="width=device-width" />
      </head>
      <body>
        <AppRouterCacheProvider>
          <ThemeRegistry>
            <LinguiClientProvider
              initialLocale={lang}
              initialMessages={allMessages[lang]!}
            >
              <NavBar lang={lang} items={mainMenu} />
              <Main>{children}</Main>
              <Footer locale={lang} sections={footerMenu} />
            </LinguiClientProvider>
          </ThemeRegistry>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
