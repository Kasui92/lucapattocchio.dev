import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

// import locales - en
import globalsEn from '@/locales/en/globals'
import heroEn from '@/locales/en/hero'
import aboutEn from '@/locales/en/about'
import projectsEn from '@/locales/en/projects'
// import locales - it
import globalsIt from '@/locales/it/globals'
import heroIt from '@/locales/it/hero'
import aboutIt from '@/locales/it/about'
import projectsIt from '@/locales/it/projects'

i18n
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        debug: true,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        resources: {
            en: {
                translation: {
                    ...globalsEn,
                    ...heroEn,
                    ...aboutEn,
                    ...projectsEn,
                },
            },
            it: {
                translation: {
                    ...globalsIt,
                    ...heroIt,
                    ...aboutIt,
                    ...projectsIt,
                },
            },
        },
    })

export default i18n
