import tailwindTypography from "@tailwindcss/typography";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    prerender: {
      autoSubfolderIndex: false,
    },
  },
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@vueuse/nuxt",
    "nuxt-icon",
    "@vee-validate/nuxt",
    "@morev/vue-transitions/nuxt",
    "@nuxt/content",
    "nuxt-swiper",
  ],
  content: {
    documentDriven: true,
    navigation: { fields: ["icon", "label"] },
    markdown: {
      toc: { depth: 4, searchDepth: 4 },
    },
    sources: {
      documentation: {
        prefix: "/docs",
        driver: "github",
        repo: "ciderapp/cider-docs",
        branch: "main",
        dir: "/",
      },
      changelogs: {
        prefix: "/changelogs",
        driver: "github",
        repo: "ciderapp/changes",
        branch: "main",
        dir: "/releases",
      },
    },
  },
  routeRules: {
    "/": { prerender: true },
  },
  css: ["~/assets/css/styles.scss"],

  tailwindcss: {
    exposeConfig: true,
    config: {
      plugins: [tailwindTypography],
    },
  },

  colorMode: {
    preference: "system",
    // fallback: "dark",
    hid: "nuxt-color-mode-script",
    globalName: "__NUXT_COLOR_MODE__",
    componentName: "ColorScheme",
    classSuffix: "",
    storageKey: "nuxt-color-mode",
  },

  typescript: {
    shim: false,
  },

  imports: {
    imports: [
      {
        from: "tailwind-variants",
        name: "tv",
      },
      {
        from: "tailwind-variants",
        name: "VariantProps",
        type: true,
      },
    ],
  },
});