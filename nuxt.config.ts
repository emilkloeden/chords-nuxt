import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    typescript: {
        shim: false
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
