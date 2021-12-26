<template>
  <div class="flex items-center justify-between">
    <div class="flex flex-col">
      <p class="text-lg lg:text-base text-white font-bold">{{ label }}</p>
      <p class="text-dark-cyan font-bold">/ person</p>
    </div>
    <p class="text-3xl lg:text-5xl text-primary-cyan font-bold">
      ${{ amount }}
    </p>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  label: { type: String, required: true },
  amount: { type: Number, required: true },
});
</script>
