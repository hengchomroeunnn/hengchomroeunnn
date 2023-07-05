// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/image", "nuxt-icon", "@nuxtjs/color-mode"],
  colorMode: {
    classSuffix: "",
  },
  devtools: { enabled: true },
  css: ["~/assets/css/tailwind.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      title: "JR's Portfolio",
      meta: [{ name: "description", content: "Everything about JR!" }],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
  router: {
    options: {
      linkActiveClass: "active",
      linkExactActiveClass: "exact-active",
    },
  },
  plugins: [{ src: "~/plugins/aos", mode: "client" }],
});
