<template>
    
        <button :disabled="disabled" @click="$emit('on-click')"
            class="w-auto flex items-center justify-center px-5 py-3 border rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:bg-slate-300 disabled:grayscale">
            <img class="h-5 w-5" :src="image" alt="logo">
    </button>

</template>
<script setup>
    defineProps(['image','disabled'])
    defineEmits(['on-click'])
</script>