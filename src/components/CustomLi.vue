<script setup>
import { defineProps } from 'vue';

defineProps({
  link: String,
  text: String
});
</script>

<template>
  <li class="list-none w-full py-2 flex justify-center">
    <RouterLink :to="link" class="flex w-full gap-2">
      <slot ></slot>
      <span>{{ text }}</span>
    </RouterLink>
  </li>
</template>
