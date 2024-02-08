<script setup>
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
      label: "LinkedIn",
      // icon: "i-grommet-icons-linkedin",
      to: "https://www.linkedin.com/in/matthieu-siegel/",
    },
    {
      label: "Github",
      // icon: "i-grommet-icons-github",
      to: "https://github.com/ImNotAOwl",
    },
  ],
];
</script>

<template>
  <UHorizontalNavigation
    :links="links"
    class="border-b border-gray-200 dark:border-gray-800"
  >
    <template #default="{ link }">
      <span
        class="group-hover:text-primary text-black relative font-serif text-lg"
        >{{ link.label }}</span
      >
    </template>
  </UHorizontalNavigation>
</template>
