<script setup lang="ts"></script>

<template>
  <div>
    <h1 class="text-5xl font-semibold text-center py-10">About</h1>
    <ContentQuery :path="`/_about/tv`" find="one" v-slot="{ data }">
      <!-- Bind with the <Tv/> component to render it -->

      <ContentRendererMarkdown :value="data" class="text-pretty">
        <template #empty>
          <p>No content found.</p>
        </template>
      </ContentRendererMarkdown>
    </ContentQuery>
    <ContentQuery :path="`/_about/it`" find="one" v-slot="{ data }">
      <!-- Bind with the <Tv/> component to render it -->

      <ContentRendererMarkdown :value="data" class="text-pretty">
        <template #empty>
          <p>No content found.</p>
        </template>
      </ContentRendererMarkdown>
    </ContentQuery>


  </div>
</template>

<style scoped>

</style>
