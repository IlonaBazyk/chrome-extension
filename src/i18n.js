import i18next from 'i18next';

i18next.init({
  interpolation: {
    // React already does escaping
    escapeValue: false,
  },
  lng: 'en', // 'en' | 'es'
  // Using simple hardcoded resources for simple example
  resources: {
    en: {
      translation: {
        popup: {
        },
      },
    },
  },
});

export default i18next;
