import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import en from './resources/en'
import ru from './resources/ru'

export const resources = {
  en,
  ru
} as const

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: false,
    resources,
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n