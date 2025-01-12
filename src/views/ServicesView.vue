<script setup lang="ts">
import ClientServices from '@/components/ClientServices.vue';
</script>

<template>
    <ClientOnly>
        <ClientServices />
    </ClientOnly>
</template>