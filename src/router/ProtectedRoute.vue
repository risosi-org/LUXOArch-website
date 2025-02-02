<script setup>
import { inject } from 'vue';
import SignIn from '@/components/SignIn.vue';
import Loading from '@/components/Loading.vue';

const {user,loading} = inject('auth');
</script>

<template>
  <div>
    <Loading v-if="loading"></Loading>
    <SignIn v-else-if="!user" />
    <slot v-else ></slot>
  </div>
</template>
