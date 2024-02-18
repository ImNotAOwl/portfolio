<script setup lang="ts">
import { cardStyle } from "~/assets/css/componentStyle";

interface Card {
  logo: string;
  job: string;
  badge: Array<string>;
  content: string;
}

defineProps({
  cardList: {
    type: Array<Card>,
    required: true,
  },
});
</script>

<template>
  <div class="flex justify-center gap-0 flex-col md:gap-5 md:flex-row">
    <UCard
      v-for="xp in cardList"
      :ui="cardStyle"
      class="my-5 dark:bg-slate-800 dark:divide-slate-700 flex-1"
    >
      <template #header>
        <div class="flex flex-col justify-center items-center">
          <img :src="xp.logo" alt="" srcset="" class="w-fit h-16" />
          <h2 class="text-xl font-semibold my-2 text-pretty text-center">
            {{ xp.job }}
          </h2>
          <div class="flex flex-wrap justify-center gap-2">
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
