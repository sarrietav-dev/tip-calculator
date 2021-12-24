<template>
  <input
    type="radio"
    class="sr-only peer"
    :value="percentage"
    :id="percentage.toString()"
    name="tip-selection"
  />
  <label
    class="
      bg-darkest-cyan
      text-white text-2xl
      font-bold
      rounded
      py-1.5
      flex
      place-content-center
      peer-checked:bg-primary-cyan peer-checked:text-darkest-cyan
    "
    :for="percentage.toString()"
  >
    {{ percentage + '%' }}
  </label>
</template>

<script lang="ts" setup>
const props = defineProps({
  percentage: { required: true, type: Number },
});
</script>
