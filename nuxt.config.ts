// https://nuxt.com/docs/api/configuration/nuxt-config

const { env } = process;
const variables =
  env.NODE_ENV === "development"
    ? {
        MAILHOST: env.DEV_MAIL_HOST,
        MAILPORT: env.DEV_MAIL_PORT,
        MAILUSER: env.DEV_MAIL_USER,
        MAILPASSWORD: env.DEV_MAIL_PASSWORD,
        CONTACTMAIL: env.CONTACT_MAIL,
        FROM_MAIL: env.FROM_MAIL
      }
			: {
				MAILHOST: env.PROD_MAIL_HOST,
        MAILPORT: env.PROD_MAIL_PORT,
        MAILUSER: env.PROD_MAIL_USER,
        MAILPASSWORD: env.PROD_MAIL_PASSWORD,
        CONTACTMAIL: env.CONTACT_MAIL,
				FROM_MAIL: env.FROM_MAIL
      };

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxt/content"],
  alias: {
    assets: "/<rootDir>/assets",
  },
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  ui: {
    icons: ["grommet-icons"],
  },
  colorMode: {
    preference: "light",
  },
  pages: true,
  runtimeConfig: { ...variables },
});
