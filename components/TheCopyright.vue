<script setup lang="ts">
import { DateTime } from "luxon";
const thisYear = DateTime.now().toFormat("yyyy");
</script>

<template>
  <p class="">
    Made with love ❤️ by Matthieu SIEGEL - Copyright © {{ thisYear }}
  </p>
</template>

<style scoped></style>
