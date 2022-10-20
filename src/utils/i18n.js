import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    preload: ['en'],
    load: 'languageOnly',
    // lng: 'en',
    fallbackLng: 'en',
    debug: false,
    lowerCaseLng: true,
    detection: {
      order: ['path', 'localStorage', 'navigator'],
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
