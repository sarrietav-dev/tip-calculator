<template>
  <div
    class="
      font-space-mono
      flex flex-col
      place-content-center
      bg-teal-150
      h-full
    "
  >
    <div class="flex place-content-center my-10">
      <img alt="Splitter Logo" src="./assets/logo.svg" />
    </div>
    <ThePanel />
  </div>
</template>

<script lang="ts" setup>
import ThePanel from '@/components/ThePanel.vue';
</script>
