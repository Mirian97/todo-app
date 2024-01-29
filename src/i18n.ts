import en from '@/languages/en-US.json'
import pt from '@/languages/pt-BR.json'
import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

export const systemLocale = Intl.DateTimeFormat().resolvedOptions().locale

i18n.use(LanguageDetector).use(initReactI18next).init({
  resources: {
    en,
    pt
  },
  fallbackLng: 'pt'
})

export default (language: string | undefined | null) =>
  i18n.getFixedT(language || systemLocale)
