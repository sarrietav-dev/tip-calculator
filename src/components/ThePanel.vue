<template>
  <main class="grow bg-white rounded-t-3xl p-7">
    <form action="" class="space-y-10">
      <NumberInput label="Bill">
        <img src="@/assets/icon-dollar.svg" alt="Price icon" class="h-full" />
      </NumberInput>
      <TheTipSelector />
      <NumberInput label="Number of People">
        <img src="@/assets/icon-person.svg" alt="Person icon" class="h-full" />
      </NumberInput>
    </form>
  </main>
</template>

<script lang="ts" setup>
import NumberInput from './NumberInput.vue';
import TheTipSelector from './TheTipSelector.vue';
</script>
