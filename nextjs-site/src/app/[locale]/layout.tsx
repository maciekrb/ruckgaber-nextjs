import React from 'react'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import { Roboto_Condensed, Great_Vibes } from 'next/font/google'
import { useLingui } from '@lingui/react/macro'
import { ThemeRegistry } from '@/theme/ThemeRegistry'
import { allMessages } from '@/i18n'
import { initLingui } from '@/initLingui'
import { slugLocalizer } from '@/locales/namedSlugs'
import Main from '@components/layouts/Main'
import LinguiClientProvider from '@components/providers/LinguiClientProvider'
import Footer from '@components/organisms/Footer'
import NavBar from '@components/organisms/NavBar'

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
  const localizedUrl = slugLocalizer(lang)
  const { t } = useLingui()

  const mainMenu = [
    { title: t`home.title`, href: localizedUrl('home') },
    { title: t`life.title`, href: localizedUrl('life') },
    {
      title: t`galicianMusicSociety.title`,
      href: localizedUrl('galicianMusicSociety'),
    },
    { title: t`music.title`, href: localizedUrl('music') },
    {
      title: t`lvivArchives.title`,
      href: localizedUrl('lvivArchives'),
    },
    {
      title: t`compositions.title`,
      href: localizedUrl('compositions'),
    },
    { title: t`about.title`, href: localizedUrl('about') },
  ]

  const footerMenu = [
    {
      title: t`Jan Ruckgaber`,
      items: [
        { label: t`life.title`, href: localizedUrl('life') },
        {
          label: t`galicianMusicSociety.title`,
          href: localizedUrl('galicianMusicSociety'),
        },
        { label: t`music.title`, href: localizedUrl('music') },
        {
          label: t`lvivArchives.title`,
          href: localizedUrl('lvivArchives'),
        },
        {
          label: t`compositions.title`,
          href: localizedUrl('compositions'),
        },
        { label: t`about.title`, href: localizedUrl('about') },
      ],
    },
    {
      title: t`The Book`,
      items: [
        { label: t`about.title`, href: localizedUrl('about') },
        { label: t`contact.title`, href: localizedUrl('contact') },
        { label: t`Download`, href: localizedUrl('book') },
      ],
    },
    {
      title: t`Music Compositions`,
      items: [
        {
          label: t`List of compositions`,
          href: localizedUrl('compositions'),
        },
        {
          label: t`Piano with an Orchestra`,
          href: localizedUrl('compositions'),
          section: 'section-A',
        },
        {
          label: t`Chamber Orchestra`,
          href: localizedUrl('compositions'),
          section: 'section-B',
        },
        {
          label: t`Piano`,
          href: localizedUrl('compositions'),
          section: 'section-C',
        },
        {
          label: t`Violin and Piano`,
          href: localizedUrl('compositions'),
          section: 'section-D',
        },
        {
          label: t`Flute, the Czakan and the Piano`,
          href: localizedUrl('compositions'),
          section: 'section-E',
        },
        {
          label: t`Choir`,
          href: localizedUrl('compositions'),
          section: 'section-F',
        },
        {
          label: t`Clarinet and Piano`,
          href: localizedUrl('compositions'),
          section: 'section-G',
        },
        {
          label: t`Voice and Piano`,
          href: localizedUrl('compositions'),
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
