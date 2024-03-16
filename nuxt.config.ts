// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/google-fonts'],
  googleFonts: {
    families: {
      'Inter': true,
      'Roboto': true,
      'Bellota': true,
      'Ole': true,
      'Poppins': true,
      'Ojuju': true,
    },
  },

  plugins: [

  ]
})  