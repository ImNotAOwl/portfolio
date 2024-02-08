// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxt/content"],
  alias: {
    assets: "/<rootDir>/assets",
  },
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
  },
  // css: ["~/assets/tailwind.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  pages: true,
});
