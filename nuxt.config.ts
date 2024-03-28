// https://nuxt.com/docs/api/configuration/nuxt-config

const { env } = process;
const variables =
  // env.NODE_ENV === "development"
  //   ? {
  //       MAILHOST: env.DEV_MAIL_HOST,
  //       MAILPORT: env.DEV_MAIL_PORT,
  //       MAILUSER: env.DEV_MAIL_USER,
  //       MAILPASSWORD: env.DEV_MAIL_PASSWORD,
  //       CONTACTMAIL: env.CONTACT_MAIL,
  //       FROM_MAIL: env.FROM_MAIL,
  //     }
  // 	:
  {
    MAILHOST: env.PROD_MAIL_HOST,
    MAILPORT: env.PROD_MAIL_PORT,
    MAILUSER: env.PROD_MAIL_USER,
    MAILPASSWORD: env.PROD_MAIL_PASSWORD,
    CONTACTMAIL: env.CONTACT_MAIL,
    FROM_MAIL: env.FROM_MAIL,
  };

export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        {
          name: "description",
          content:
            "Matthieu Siegel - I am a software engineer and curious about new technologies. I love discovering new ways to develop high-quality and efficient software. My preferred domains are JavaScript, Python, and DevOps. I try to bring this philosophy into the companies where I work, to try to make it understood and demonstrate its value. Being a developer is about embracing challenges, and that's what fascinates me about my job.",
        },
        {
          name: "keywords",
          content:
            "matthieu siegel,siegel, matthieusiegel, mathieu siegel, sigel, matthieu sigel, mathieu sigel, mathieusiegel, mathieusigel, freelancer,software engineer,devops,developer, web developer, developer web, developerweb, software,oop,blog,clean code, clean architecture, ",
        },
        {
          name: "og:title",
          content:
            "Matthieu Siegel - Software engineer and DevOps enthusiastic",
        },
        {
          name: "og:description",
          content:
            "Matthieu Siegel - I am a software engineer and curious about new technologies. I love discovering new ways to develop high-quality and efficient software. My preferred domains are JavaScript, Python, and DevOps. I try to bring this philosophy into the companies where I work, to try to make it understood and demonstrate its value. Being a developer is about embracing challenges, and that's what fascinates me about my job.",
        },
        {
          name: "og:type",
          content: "website",
        },
        {
          name: "og:image",
          content: "https://matthieusiegel.fr/personal_website.png",
        },
      ],
      title: "Matthieu Siegel - Software engineer and DevOps enthusiastic",
      link: [
        {
          rel: "canonical",
          href: "https://www.matthieusiegel.fr",
        },
      ],
    },
  },
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
    icons: ["grommet-icons", "heroicons"],
  },
  colorMode: {
    preference: "light",
  },
  pages: true,
  runtimeConfig: { ...variables },
});
