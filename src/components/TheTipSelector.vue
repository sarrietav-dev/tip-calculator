<template>
  <div class="space-y-4">
    <label class="text-gray-500 font-bold">Select Tip %</label>
    <ul class="grid grid-cols-2 gap-4">
      <li v-for="tipNumber in tipNumbers">
        <TipSelectionButton :percentage="tipNumber" />
      </li>
      <input
        type="number"
        placeholder="Custom"
        class="
          border-none
          bg-gray-100
          rounded
          font-bold
          text-2xl text-green-900 text-right
          focus:ring-2 focus:ring-green-500
        "
      />
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import TipSelectionButton from './TipSelectionButton.vue';
const tipNumbers = ref([5, 10, 15, 25, 50]);
</script>
