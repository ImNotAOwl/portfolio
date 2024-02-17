<script setup lang="ts"></script>

<template>
  <div>
    <h1 class="text-5xl font-semibold text-center py-10">My experiences</h1>
    <ContentQuery :path="`/_about/tv`" find="one" v-slot="{ data }">
      <ContentRendererMarkdown :value="data" class="mb-10 text-pretty">
        <template #empty>
          <p>No content found.</p>
        </template>
      </ContentRendererMarkdown>
    </ContentQuery>
    <HistoryExperience />
  </div>
</template>

<style scoped></style>
