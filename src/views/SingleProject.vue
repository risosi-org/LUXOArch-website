<script setup>
import { inject } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()
const projectId = route.params.id;
const {getProjectById} = inject('projects')
const project = getProjectById(projectId);
console.log(project)

</script>
<template>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
    <div class="max-w-3xl mx-auto">
        <!-- Blog post header -->
        <div class="py-8">
            <h1 class="text-3xl font-bold mb-2">{{ project.title }}</h1>
            <p class="text-gray-500 text-sm">{{ project.description }}</p>
        </div>

        <!-- Featured image -->
        <img :src="project.banner" alt="Featured image" class="w-full h-auto mb-8">

        <!-- Blog post content -->
        <div v-html="project.content" ass="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto">
            
        </div>
        <br/>
    </div>
</div>
</template>