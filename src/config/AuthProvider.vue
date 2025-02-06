<script setup>
import { ref, provide, onMounted } from 'vue';
import { supabase } from './supabase';

const user = ref(null);
const loading = ref(true);

const isError = ref(null);

// Function to get the current user
const fetchUser = async () => {
  try {
    const { data, error } = await supabase.auth.getUser();
    if (error) throw error;
    user.value = data.user;
  } catch (error) {
    isError.value = error.message;
  } finally {
    loading.value = false;
  }
};

// Listen for auth state changes
supabase.auth.onAuthStateChange((_, session) => {
  user.value = session?.user || null;
  loading.value = false
});

const logOut = async () => {
  await supabase.auth.signOut();
  user.value = null;
};

onMounted(fetchUser);

provide('auth', { user, loading, logOut });
</script>

<template>
  <slot></slot>
</template>
