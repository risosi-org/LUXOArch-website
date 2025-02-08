<template>
    <div class="carousel w-full relative overflow-hidden">
      <div
       
        key="index"
        class="carousel-item w-full" >
        <img :src="banners[activeIndex??0]" class="w-full aspect-video" />
      </div>
      <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <button @click="prevSlide" class="btn btn-circle">❮</button>
        <button @click="nextSlide" class="btn btn-circle">❯</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, watch } from "vue";
  
  const {banners} = defineProps(['banners'])
  //const banners = ref([])
 
  const activeIndex = ref(0);
  

// watch(() => banners, (newData) => {
//     banners.value = newData
// })

  const prevSlide = () => {
    activeIndex.value = (activeIndex.value - 1 + banners.length) % banners.length;
  };
  
  const nextSlide = () => {
    activeIndex.value = (activeIndex.value + 1) % banners.length;
  };
  </script>
  