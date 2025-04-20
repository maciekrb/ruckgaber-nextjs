module.exports = {
  locales: ['en', 'es', 'pl'],
  sourceLocale: 'en',
  catalogs: [
    {
      path: '<rootDir>/src/locales/{locale}/messages',
      include: ['src/app', 'src/components'],
    },
  ],
}
