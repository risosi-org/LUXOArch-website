<script setup lang="ts">
const route = useRoute()
const {logout,user} = useNuxtApp().$authutils
</script>

<template>
  
    <button 
    class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:grayscale"
    @click="logout" v-if="user">logout</button>
   
</template>
