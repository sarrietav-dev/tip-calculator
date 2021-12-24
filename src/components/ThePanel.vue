<template>
  <main class="grow bg-white rounded-t-3xl p-7">
    <form action="" class="space-y-10">
      <NumberInput label="Bill">
        <img src="@/assets/icon-dollar.svg" alt="Price icon" class="h-full" />
      </NumberInput>
      <div class="space-y-4">
        <label class="text-gray-500 font-bold">Select Tip %</label>
        <ul class="grid grid-cols-2 gap-4">
          <li v-for="tipNumber in tipNumbers">
            <TipSelectionButton :percentage="tipNumber" />
          </li>
          <button>Custom</button>
        </ul>
      </div>
      <NumberInput label="Number of People">
        <img src="@/assets/icon-person.svg" alt="Person icon" class="h-full" />
      </NumberInput>
    </form>
  </main>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import NumberInput from './NumberInput.vue';
import TipSelectionButton from './TipSelectionButton.vue';

const tipNumbers = ref([5, 10, 15, 25, 50]);
</script>
