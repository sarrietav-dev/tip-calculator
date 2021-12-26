<template>
  <main class="grow lg:grow-0 bg-white rounded-t-3xl lg:rounded-3xl p-7">
    <form action="" class="lg:flex lg:gap-14 space-y-10 lg:space-y-0">
      <div class="space-y-10 flex-1">
        <NumberInput label="Bill" v-model.number="bill">
          <img src="@/assets/icon-dollar.svg" alt="Price icon" class="h-full" />
        </NumberInput>
        <TheTipSelector />
        <NumberInput label="Number of People" v-model.number="people">
          <img
            src="@/assets/icon-person.svg"
            alt="Person icon"
            class="h-full"
          />
        </NumberInput>
      </div>
      <TheBalancePanel class="flex-1" />
    </form>
  </main>
</template>

<script lang="ts" setup>
import NumberInput from './NumberInput.vue';
import TheTipSelector from './TheTipSelector.vue';
import TheBalancePanel from './TheBalancePanel.vue';
import { ref, watch } from 'vue';
import useStore from '@/store/mainStore';

const store = useStore();

const bill = ref(store.$state.bill);
const people = ref(store.$state.people);

watch(bill, (bill) => store.$patch({ bill }));
watch(people, (people) => store.$patch({ people }));
</script>
