import linguiConfig from '../lingui.config'
import { I18n, Messages, setupI18n } from '@lingui/core'

import { messages as enMessages } from './locales/en/messages'
import { messages as esMessages } from './locales/es/messages'
import { messages as plMessages } from './locales/pl/messages'

const { locales } = linguiConfig
// optionally use a stricter union type
type SupportedLocales = string

const allCatalogs: Record<string, Messages> = {
  en: enMessages,
  es: esMessages,
  pl: plMessages,
}

const catalogs = locales.map((locale) => ({ [locale]: allCatalogs[locale] }))

// transform array of catalogs into a single object
export const allMessages = catalogs.reduce((acc, oneCatalog) => {
  return { ...acc, ...oneCatalog }
}, {})

type AllI18nInstances = { [K in SupportedLocales]: I18n }

export const allI18nInstances: AllI18nInstances = locales.reduce(
  (acc, locale) => {
    const messages = allMessages[locale] ?? {}
    const i18n = setupI18n({
      locale,
      messages: { [locale]: messages },
    })
    return { ...acc, [locale]: i18n }
  },
  {},
)

export const getI18nInstance = (locale: SupportedLocales): I18n => {
  if (!allI18nInstances[locale]) {
    console.warn(`No i18n instance found for locale "${locale}"`)
  }
  return allI18nInstances[locale]! || allI18nInstances['en']!
}
