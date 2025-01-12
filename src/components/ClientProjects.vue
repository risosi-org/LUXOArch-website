<template>
  <section class="container mx-auto px-4 py-8 mt-[68px]">
    <h2 class="text-4xl border-b-4 border-accent inline-block">Projects</h2>
    <div class="grid lg:grid-cols-3 grid-cols-1 gap-6 w-full min-h-screen mt-4">
      <template v-for="project in projects">

        <div v-if="project.title" className="card bg-transparent max-w-96 mx-auto bg-base-100 shadow-lg">
          <figure className="px-10 pt-10">
            <img :src="project.imageurl" alt="thumbnail" className="rounded-xl w-full" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{{ project.title }}</h2>
            <p>{{ project.description }}</p>
          </div>
        </div>
      </template>
    </div>
  </section>
</template>
<script setup>
import papaparse from 'papaparse';
import { ref, onMounted } from 'vue';

const projects = ref([])
onMounted(async () => {
  const fileUrl = 'https://luxoarch.github.io/assets/projects.csv';
  const res = await fetch(fileUrl)
  const data = await res.text()
  const parsed = papaparse.parse(data, { header: true })
  projects.value = parsed.data

})
</script>