<script setup lang="ts"></script>

<template>
  <div class="w-full flex justify-center items-center content-center">
    <div class="container max-w-screen-xl px-4 mx-auto flex flex-col">
      <UContainer>
        <TheNavBar />
        <slot></slot>
      </UContainer>
    </div>
  </div>
</template>
