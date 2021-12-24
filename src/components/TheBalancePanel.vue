<template>
  <div class="bg-darkest-cyan p-6 pt-10 rounded-xl flex flex-col lg:grow gap-6">
    <BalanceSection label="Tip Amount" :amount="4.27" />
    <BalanceSection label="Total" :amount="32.79" class="lg:mb-auto" />
    <TheResetButton />
  </div>
</template>

<script lang="ts" setup>
import BalanceSection from './BalanceSection.vue';
import TheResetButton from './TheResetButton.vue';
</script>
