<script setup>
import assets1 from '@/assets/Rectangle 2.png'
</script>

<template>
  <main>
    <div class="hero bg-[#171411] min-h-screen pr-0 w-full ">
      <div class="hero-content flex-col lg:flex-row-reverse justify-end p-0 max-w-full w-full">
        <img :src="assets1"
          class="lg:w-[60%] w-full h-screen rounded-lg shadow-2xl object-cover" />
        <div class="lg:w-[40%] p-6 pl-[10%] w-full pt-10">
          <span class="text-yellow-600">MEET THE ARCH</span>
          <h1 class="text-5xl text-white font-bold">Looking for what? <br/> <span class="text-yellow-600">Classic or Modern.</span></h1>
          <p class="py-6 text-white">
            LuxoArch Design & Studio is a Building Design and Engineering services firm specializing in
residential – Houses, Duplex, Townhouses, NDIS, Granny & Extensions.
We offer comprehensive design and approval packages for all types of developments.
          </p>
          <RouterLink to="/projects" class="btn btn-primary">SEE OUR PROJECTS</RouterLink>
        </div>
      </div>
    </div>
  </main>
</template>
<style scoped>
.hero {
  background-image: url('../assets/Frame 2 (1).png');
  background-size: 400px;
  background-repeat: no-repeat;
  background-position: top left;
}
</style>