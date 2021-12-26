<template>
  <input
    type="radio"
    class="sr-only peer"
    :value="percentage"
    :id="percentage.toString()"
    name="tip-selection"
    @change="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    :disabled="disabled"
  />
  <label
    class="
      bg-darkest-cyan
      active:bg-light-cyan active:text-darkest-cyan
      peer-checked:bg-primary-cyan peer-checked:text-darkest-cyan
      peer-disabled:bg-dark-cyan peer-disabled:text-darker-cyan
      text-white text-2xl
      transition
      font-bold
      rounded
      py-1.5
      flex
      place-content-center
    "
    :for="percentage.toString()"
    @click="$emit('click', percentage)"
  >
    {{ percentage + '%' }}
  </label>
</template>

<script lang="ts" setup>
defineProps({
  modelValue: { type: Number, default: '' },
  percentage: { required: true, type: Number },
  disabled: { required: true, type: Boolean, default: false },
});

defineEmits(['update:modelValue', 'click']);
</script>
