// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  devServer: {
    host: "0.0.0.0",
  },

  app: {
    head: {
      script: [{ src: "/yandex.js" }],
    },
  },

  spaLoadingTemplate: `./components/Loading.vue`,
});
