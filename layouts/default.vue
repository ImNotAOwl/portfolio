<script setup lang="ts">
definePageMeta({
  colorMode: "light",
});
</script>

<template>
  <div class="w-full flex justify-center items-center content-center">
    <div
      class="container place-self-center content-center px-8 flex flex-col justify-center justify-self-center"
    >
      <TheNavBar />
      <slot></slot>
    </div>
  </div>
</template>
