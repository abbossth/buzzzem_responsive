module.exports = {
  locales: ['ru', 'en', 'uz'],
  defaultLocale: 'ru',
  loadLocaleFrom: (lang, ns) =>
    import(`locales/${lang}/${ns}.json`).then((m) => m.default),
  pages: {
    '*': ['common'],
    '/about': ['about'],
  },
  localeDetection: false,
}
