import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    typescript: {
        shim: false
    },
    publicRuntimeConfig: {
      apiUrl: process.env.API_URL
    },
    buildModules: [
      '@nuxtjs/google-fonts'
    ],
    googleFonts: {
      families: {
        Inconsolata: true,
        'Space+Mono': true
      },
      display: 'optional'
    }
})
