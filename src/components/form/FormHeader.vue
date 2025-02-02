<template>
    <div class="sm:mx-auto sm:w-full sm:max-w-md pb-8">
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
            {{ title }}
        </h2>
    </div>
</template>
<script setup>
    defineProps(['title'])
</script>