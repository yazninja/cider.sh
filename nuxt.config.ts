import tailwindTypography from "@tailwindcss/typography";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
    sources: {
      github: {
        prefix: "/docs",
        driver: "github",
        repo: "ciderapp/cider-docs",
        branch: "main",
        dir: "/",
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
