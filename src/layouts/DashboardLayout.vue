<script setup lang="ts">
import Drawer from '@/components/Drawer.vue';
import AuthProvider from '@/config/AuthProvider.vue';
import ProtectedRoute from '@/router/ProtectedRoute.vue';
</script>

<template>
    <AuthProvider>
    <ProtectedRoute>
        <Drawer>
            <RouterView/>
        </Drawer>
    </ProtectedRoute>
</AuthProvider>
</template>