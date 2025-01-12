<script setup lang="ts">
import ClientProjects from '@/components/ClientProjects.vue';
</script>

<template>
    <ClientOnly>
        <ClientProjects />
    </ClientOnly>
</template>