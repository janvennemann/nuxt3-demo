import vuetify from '@vuetify/vite-plugin'
import { defineNuxtConfig } from 'nuxt3'
import path from 'path'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  vite: {
    logLevel: 'info',
    plugins: [
      vuetify({ autoImport: true })
    ],
    define: { 'process.env': {} },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  },
  vue: {
    config: {
      devtools: process.env.NODE_ENV !== 'production'
    }
  },
  build: {
    transpile: ['vuetify']
  },
  buildModules: [
    '~/modules/vuetify'
  ]
})
