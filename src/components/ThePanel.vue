<template>
  <main class="grow lg:grow-0 bg-white rounded-t-3xl p-7">
    <form action="" class="lg:flex lg:gap-14 space-y-10">
      <div class="space-y-10">
        <NumberInput label="Bill">
          <img src="@/assets/icon-dollar.svg" alt="Price icon" class="h-full" />
        </NumberInput>
        <TheTipSelector />
        <NumberInput label="Number of People">
          <img
            src="@/assets/icon-person.svg"
            alt="Person icon"
            class="h-full"
          />
        </NumberInput>
      </div>
      <TheBalancePanel />
    </form>
  </main>
</template>

<script lang="ts" setup>
import NumberInput from './NumberInput.vue';
import TheTipSelector from './TheTipSelector.vue';
import TheBalancePanel from './TheBalancePanel.vue';
</script>
