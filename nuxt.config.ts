// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxt/image",
    "nuxt-icon",
    "@nuxtjs/color-mode",
    "@nuxtjs/i18n",
    "@nuxt/content",
  ],
  content: {
    // https://content.nuxtjs.org/api/configuration
  },
  i18n: {
    lazy: true,
    langDir: "locales",
    strategy: "prefix_except_default",
    locales: [
      {
        code: "en-US",
        iso: "en-US",
        file: "en-US.json",

        name: "English(US)",
        moment: "en",
      },
      {
        code: "kh-KH",
        iso: "kh-KH",
        file: "kh-KH.json",

        name: "ខេមរភាសា",
        moment: "kh",
      },
    ],
    defaultLocale: "en-US",
    vueI18n: "en-US",
  },
  colorMode: {
    classSuffix: "",
  },
  devtools: { enabled: true },
  css: ["~/assets/css/tailwind.css", "~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      title: "JR's Portfolio",
      meta: [
        {
          name: "description",
          content:
            "Discover the best of Heng Chomroeun's portfolio on our website! As a web designer, we provide valuable resources and services to help businesses succeed. Explore our website for insightful blog posts, relevant resources, and more. Let's collaborate to take your online presence to the next level!",
        },
      ],
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
