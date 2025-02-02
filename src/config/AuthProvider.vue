<script setup>
import { ref, provide, onMounted } from 'vue';
import { supabase } from './supabase';

const user = ref(null);
const loading = ref(true);

const fetchUser = async () => {
  const { data } = await supabase.auth.getUser();
  user.value = data.user;
  loading.value = false;
};


const logOut = async () => {
  await supabase.auth.signOut();
  user.value = null;
};

onMounted(fetchUser);

provide('auth', { user, loading, logOut });
</script>

<template>
  <slot ></slot>
</template>
