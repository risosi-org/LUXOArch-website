<script setup>
import { inject } from 'vue';
import {UserIcon } from "@heroicons/vue/24/outline"
const auth = inject("auth")
console.log(auth.user)
</script>
<template>
    <div class="w-full flex flex-col justify-center items-center text-center gap-2">
        <UserIcon referrerPolicy="no-referrer" :src="auth?.user?.photoURL" alt="User Avatar"
            class="h-12 w-12 rounded-full" />
        <h3 class="text-2xl">Admin</h3>
        <p class="text-xs">{{ auth.user.value.email }}</p>
        <button @click="auth.logOut" class="btn btn-primary btn-sm">Logout</button>
    </div>
</template>