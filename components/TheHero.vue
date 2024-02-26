<script setup lang="ts"></script>

<template>
  <section class="w-full flex flex-col-reverse justify-center pt-10 md:flex-row md:h-[600px] md:justify-around md:pt-20">
    <div class="h-fit md:w-1/2">
      <h1 class="text-5xl mb-10 md:text-7xl">
        Hi ! 👋 <br />
        I'm Matthieu !
      </h1>
      <ContentQuery :path="`/_home/hero`" find="one" v-slot="{ data }">
        <ContentRendererMarkdown :value="data" class="mb-10 text-pretty">
          <template #empty>
            <p>No content found.</p>
          </template>
        </ContentRendererMarkdown>
      </ContentQuery>
      <div class="space-x-4">
        <UButton size="lg" @click="$router.push({ path: '/contact' })"
          >Contact me</UButton
        >
        <UButton
          size="lg"
          variant="outline"
          @click="$router.push({ path: '/about' })"
          >About me</UButton
        >
      </div>
    </div>
    <div class="">
      <img
        src="@/assets/img/me.jpg"
        alt=""
        class="w-auto h-[380px] m-auto rounded-lg shadow-xl skew-y-1 pb-10 md:h-[435px] lg:h-[500px] md:pb-0 md:m-0"
      />
    </div>
  </section>
</template>
