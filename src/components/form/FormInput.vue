<template>
    <div>
        <label :for="id" class="block text-sm font-medium text-gray-700">
            {{ inputLabel }}
        </label>
        <div class="mt-1">
            <input :id="id" :name="id" :type="type" required
                class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                :placeholder="placeholder">
        </div>
    </div>
</template>
<script setup>
    defineProps(['inputLabel','placeholder','id','type'])
</script>