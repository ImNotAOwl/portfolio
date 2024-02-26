<script setup lang="ts">
interface Card {
  logo: string;
  job: string;
  badge: Array<string>;
  content: string;
}

const oldXP: Array<Card> = [
  {
    logo: "logos/logo_canal_400x200.png",
    job: "Audiovisual Technician - CFC",
    badge: ["TV", "Live", "Graphic Operator", "VizRT"],
    content: "canal",
  },
  {
    logo: "logos/logo_beinsports_400x200.png",
    job: "Audiovisual Technician - Sports event",
    badge: ["TV", "Live", "Graphic Operator", "VizRT"],
    content: "beinsports",
  },
  {
    logo: "logos/logo_tf1_400x200.png",
    job: "Audiovisual Technician - News",
    badge: ["TV", "Live", "Graphic Operator", "VizRT"],
    content: "tf1",
  },
];
</script>

<template>
  <h2 class="text-3xl font-semibold text-left py-5"><slot name="title" /></h2>
  <slot name="intro" />
  <AboutExperience :card-list="oldXP" />
  <slot name="after_1" />
  <br />
  <slot name="after_2" />
  <br />
  <slot name="outro" />
</template>
