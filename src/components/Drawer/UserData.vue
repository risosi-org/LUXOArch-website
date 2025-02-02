<script setup>
import { inject } from 'vue';
import {UserIcon } from "@heroicons/vue/24/outline"
const auth = inject("auth")
</script>
<template>
    <div class="w-full flex flex-col justify-center items-center text-center gap-2">
        <img referrerPolicy="no-referrer" :src="auth?.user?.photoURL || UserIcon" alt="User Avatar"
            class="h-12 w-12 rounded-full" />
        <h3 class="text-2xl">{{ auth.user.displayName }}</h3>
        <p>{{ auth.user.email }}</p>
        <button @click="auth.logOut" class="btn btn-primary btn-sm">Logout</button>
    </div>
</template>