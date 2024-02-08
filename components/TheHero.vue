<script setup lang="ts"></script>

<template>
  <section class="w-full h-[600px] flex justify-around pt-20">
    <div class="w-3/6 h-fit">
      <h1 class="text-7xl mb-10">
        Hi ! 👋 <br />
        I'm Matthieu !
      </h1>
      <ContentQuery :path="`/_home/hero`" find="one" v-slot="{ data }">
        <ContentRendererMarkdown :value="data">
          <template #empty>
            <p>No content found.</p>
          </template>
        </ContentRendererMarkdown>
      </ContentQuery>
      <UButton>Contact me</UButton>
      <UButton>About me</UButton>
    </div>
    <div class="">
      <img
        src="@/assets/img/me.jpg"
        alt=""
        class="w-auto h-[500px] rounded-lg shadow-xl skew-y-1"
      />
    </div>
  </section>
</template>

<style scoped>
p {
  font-size: 6em;
}
</style>
