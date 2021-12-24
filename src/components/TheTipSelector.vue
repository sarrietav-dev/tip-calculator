<template>
  <div class="space-y-4">
    <label class="text-gray-500 font-bold">Select Tip %</label>
    <ul class="grid grid-cols-2 gap-4">
      <li v-for="tipNumber in tipNumbers">
        <TipSelectionButton :percentage="tipNumber" v-model.number="tip" />
      </li>
      <input
        type="number"
        placeholder="Custom"
        class="
          border-none
          bg-gray-100
          rounded
          font-bold
          text-xl text-darkest-cyan text-right
          focus:ring-2 focus:ring-primary-cyan
          transition
        "
      />
    </ul>
  </div>
</template>

<script lang="ts" setup>
import useStore from '@/store/mainStore';
import { ref, watch } from 'vue';
import TipSelectionButton from './TipSelectionButton.vue';

const tipNumbers = ref([5, 10, 15, 25, 50]);

const store = useStore();

const tip = ref(store.$state.tip);
watch(tip, (tip) => store.$patch({ tip }));
</script>
