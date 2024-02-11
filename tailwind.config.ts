import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  content: [
    "docs/content/**/*.md",
    "./pages/**/*.{ts,tsx,vue}",
    "./components/**/*.{ts,tsx,vue}",
    "./app/**/*.{ts,tsx,vue}",
    "./src/**/*.{ts,tsx,vue}",
  ],
  theme: {
    fontFamily: {
      sans: ["Red Hat Display", "Inter"],
      serif: ["DM Serif Display"],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2rem",
      },
      screens: {},
    },
  },
};
