import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importa tus archivos de traducción
import translationEN from './locales/en/translation.json';
import translationES from './locales/es/translation.json';

// Los recursos de traducción.
const resources = {
  en: {
    translation: translationEN,
  },
  es: {
    translation: translationES,
  },
};

i18n
  // Conecta el plugin de react-i18next que pasa i18n abajo a react-i18next
  .use(initReactI18next)
  // Inicia i18next
  .init({
    resources,
    fallbackLng: 'en', // Lenguaje a cargar si no se encuentra otro
  });

export default i18n;
