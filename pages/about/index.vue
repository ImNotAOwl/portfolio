<script setup lang="ts"></script>

<template>
  <div>
    <h1>This is the "About" page</h1>
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
