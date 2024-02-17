<script setup lang="ts">
import { cardStyle } from "~/assets/css/componentStyle";

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
  <div class="flex justify-center gap-5">
    <UCard v-for="xp in oldXP" :ui="cardStyle" class="text-justify">
      <template #header>
        <div class="flex flex-col justify-center items-center">
          <img :src="xp.logo" alt="" srcset="" class="w-2/6 h-fit" />
          <h2 class="text-xl font-semibold my-2">{{ xp.job }}</h2>
          <div class="space-x-4">
            <UBadge v-for="tag in xp.badge" :label="tag" class="text-xs" />
          </div>
        </div>
      </template>

      <ContentQuery
        :path="`/_about/${xp.content}`"
        find="one"
        v-slot="{ data }"
      >
        <ContentRendererMarkdown :value="data" class="mb-10 text-pretty">
          <template #empty>
            <p>No content found.</p>
          </template>
        </ContentRendererMarkdown>
      </ContentQuery>
    </UCard>
  </div>
</template>

<style scoped></style>
