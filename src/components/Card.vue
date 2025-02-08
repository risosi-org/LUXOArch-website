<template>
  <div className="card bg-transparent  w-full mx-auto">
    <figure className="">
      <Carousel :banners="banners"></Carousel>
    </figure>
    <div className="card-body items-center text-center">
      <h2 className="card-title">{{ title }}</h2>
      <p>{{ description }}</p>
    </div>
  </div>
</template>
<script setup>
import { defineProps, ref, watch } from 'vue'
import Carousel from './Carousel.vue';
const { data } = defineProps(['data'])
let banners = ref(data.banners)
const title = ref(data.title)
const description = ref(data.description)

watch(() => data, (newData) => {
  banners.value = newData.banners
  title.value = newData.title
  description.value = newData.description
})
</script>