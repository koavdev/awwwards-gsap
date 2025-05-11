// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/fonts'],
  build: {
    transpile: ['gsap'],
  },
  components: [
    {
      path: "@/components",
      pathPrefix: true,
    },
    {
      path: "@/components/common",
      pathPrefix: false,
    },
  ],
  css: ['@/assets/css/main.css'],
  imports: {
    autoImport: true
  }

})