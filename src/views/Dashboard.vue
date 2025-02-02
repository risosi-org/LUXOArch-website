<script setup>
import Drawer from '@/components/Drawer.vue';
import AuthProvider from '@/config/AuthProvider.vue';
import ProtectedRoute from '@/router/ProtectedRoute.vue';
</script>

<template>
    <AuthProvider>
    <ProtectedRoute>
        <Drawer>

            <h1>dashboard</h1>
        </Drawer>
    </ProtectedRoute>
</AuthProvider>
</template>