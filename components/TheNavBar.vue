<script setup lang="ts">
import { navbarStyle } from "../assets/css/componentStyle";

const colorMode = useColorMode();
const isDark = computed({
  get() {
    return colorMode.value === "dark";
  },
  set() {
    colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
  },
});

useHead({ bodyAttrs: { class: "bg-gray-100 dark:bg-gray-900" } });

const links = [
  [{ label: "MATTHIEU SIEGEL", to: "/" }],
  [
    {
      label: "About",
      to: "/about",
    },
    {
      label: "Projects",
      to: `/projects`,
    },
    {
      label: "Contact",
      to: "/contact",
    },
  ],
  [
    {
      icon:
        colorMode.value === "dark"
          ? "i-heroicons-moon-20-solid"
          : "i-heroicons-sun-20-solid",
      label: "",
      to: "",
      click: () => (isDark.value = !isDark.value),
    },
    {
      icon: "i-grommet-icons-linkedin",
      label: "",
      to: "https://www.linkedin.com/in/matthieu-siegel/",
    },
    {
      icon: "i-grommet-icons-github",
      label: "",
      to: "https://github.com/ImNotAOwl",
    },
  ],
];
</script>

<template>
  <UHorizontalNavigation
    :links="links"
    :ui="navbarStyle"
    class="border-b border-gray-200 dark:border-gray-800"
  >
    <template #default="{ link }">
      <span
        v-if="link.label"
        class="group-hover:text-primary text-black font-primary relative text-lg dark:text-slate-300"
        dynamic
        >{{ link.label }}</span
      >
    </template>
    <template #icon="{ link }">
      <ClientOnly>
        <UIcon
          v-if="
            link.icon === 'i-heroicons-moon-20-solid' ||
            link.icon === 'i-heroicons-sun-20-solid'
          "
          class="h-5 w-5"
          :name="
            isDark ? 'i-heroicons-sun-20-solid' : 'i-heroicons-moon-20-solid'
          "
          aria-label="Theme"
        />
        <UIcon
          v-else-if="link.icon"
          class="h-5 w-5"
          :name="link.icon"
          aria-label="Theme"
        />
      </ClientOnly>
    </template>
  </UHorizontalNavigation>
</template>
