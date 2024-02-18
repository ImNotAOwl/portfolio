<script setup lang="ts">
interface Card {
  logo: string;
  job: string;
  badge: Array<string>;
  content: string;
}

const oldXP: Array<Card> = [
  {
    logo: "logos/logo_cfr_400x200.png",
    job: "Developer in internship",
    badge: ["PHP", "MySQL", "Database", "DevOps", "Deployment", "Git"],
    content: "cfr",
  },
  {
    logo: "logos/logo_oll_400x200.png",
    job: "Developer Fullstack in apprenticeship",
    badge: [
      "Node.js",
      "React.js",
      "Python",
      "DevOps",
      "MariaDB",
      "CI/CD",
      "Git",
      "Agile",
    ],
    content: "oll",
  },
  {
    logo: "logos/logo_st_300x200.png",
    job: "Developer Fullstack in apprenticeship",
    badge: [
      "Node.js",
      "Vue.js",
      "Python",
      "DevOps",
      "MongoDB",
      "CI/CD",
      "Git",
      "Agile",
    ],
    content: "st",
  },
];
</script>

<template>
	<h2 class="text-3xl font-semibold text-left py-5"> <slot name="title"/></h2>
  <slot name="intro" class="my-10" />
  <AboutExperience :card-list="oldXP" />
  <slot name="after" />
</template>
