<template>
  <button
    type="reset"
    @click="store.$reset()"
    class="
      bg-primary-cyan
      active:bg-light-cyan
      text-darkest-cyan text-lg
      disabled:bg-opaque-cyan disabled:text-opaquest-cyan
      transition
      font-bold
      uppercase
      rounded
      self-stretch
      py-2
    "
  >
    Reset
  </button>
</template>

<script lang="ts" setup>
import useStore from '@/store/mainStore';

const store = useStore();
</script>
