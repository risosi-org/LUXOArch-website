<template>
    <div className="card bg-transparent w-96 mx-auto">
  <figure className="px-10 pt-10">
    <img
      :src="imageRef"
      alt="Shoes"
      className="rounded-xl w-full" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{{ title }}</h2>
    <p>{{ description }}</p>
  </div>
</div>
</template>
<script setup>
import { defineProps,ref,watch } from 'vue'
const {data} = defineProps(['data'])
let imageRef = ref(data.imageurl)
const title = ref(data.title)
const description = ref(data.description)

watch(()=>data, (newData) => {
  imageRef.value = newData.imageurl
    title.value = newData.title
    description.value = newData.description
  console.log(newData)
})
</script>