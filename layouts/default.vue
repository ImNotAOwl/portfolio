<script setup lang="ts"></script>

<template>
  <UContainer class="min-h-screen flex flex-col justify-between">
    <div class="w-full">
      <TheNavBar />
      <slot></slot>
    </div>

    <div class="flex w-full justify-center bottom-0 mt-10 mb-3">
      <TheCopyright />
    </div>
  </UContainer>
</template>
