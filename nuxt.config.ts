import { currentLocales } from './i18n/i18n'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@unocss/nuxt',
    '@nuxt/eslint',
    '@nuxtjs/color-mode',
    '@vueuse/nuxt',
    '@nuxt/fonts',
    '@nuxtjs/i18n',
  ],

  eslint: {
    config: {
      standalone: false,
    },
  },

  colorMode: {
    preference: 'system',
    fallback: 'dark',
    dataValue: 'theme',
    storageKey: 'seb-color-mode',
  },

  fonts: {
    providers: {
      fontshare: false,
    },
    families: [
      {
        name: 'Geist Mono',
        weights: ['400', '500', '600'],
        preload: true,
        global: true,
      },
    ],
  },
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/icon-192.png' },
        { rel: 'icon', type: 'image/png', sizes: '512x512', href: '/icon-512.png' },
      ],
    },
  },
  vite: {
    optimizeDeps: {
      include: ['@vueuse/core'],
    },
  },
  i18n: {
    locales: currentLocales,
    defaultLocale: 'en',
    strategy: 'no_prefix',
    detectBrowserLanguage: false,
    langDir: 'locales',
  },
})
