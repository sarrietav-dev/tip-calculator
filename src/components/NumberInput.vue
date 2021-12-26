<template>
  <div class="flex flex-col font-bold text-gray-500 relative space-y-2">
    <label :for="label">{{ label }}</label>
    <div class="absolute bottom-3 left-5 h-5">
      <slot></slot>
    </div>
    <input
      :id="label"
      type="number"
      placeholder="0"
      min="1"
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
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
  </div>
</template>

<script lang="ts" setup>
defineProps({
  modelValue: Number,
  label: { required: true, type: String },
});
defineEmits(['update:modelValue']);
</script>
