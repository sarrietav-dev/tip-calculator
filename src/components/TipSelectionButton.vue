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
      active:bg-light-cyan active:text-darkest-cyan
      peer-checked:bg-primary-cyan peer-checked:text-darkest-cyan
      text-white text-2xl
      transition
      font-bold
      rounded
      py-1.5
      flex
      place-content-center
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
