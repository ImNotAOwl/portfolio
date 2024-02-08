<script setup lang="ts">
definePageMeta({
  colorMode: "light",
});
</script>

<template>
  <div class="w-full flex justify-center items-center content-center">
    <div class="container max-w-screen-xl px-4 mx-auto flex flex-col">
      <TheNavBar />
      <slot></slot>
    </div>
  </div>
</template>
