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
      meta: [{ name: "description", content: "Discover the best of Heng Chomroeun's portfolio on our website! As a web designer, we provide valuable resources and services to help businesses succeed. Explore our website for insightful blog posts, relevant resources, and more. Let's collaborate to take your online presence to the next level!" }],
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
