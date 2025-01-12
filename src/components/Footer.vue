<script setup>
import { computed, ref, watch } from 'vue';
import { useRoute } from 'vue-router'
const route = useRoute()
const isLightTheme = computed(() => route.fullPath === '/about' || route.fullPath === '/projects')
import logo1 from '@/assets/logo.png'
import logo2 from '@/assets/logo-tr.png'

const logo = ref(logo1)
watch(isLightTheme, () => {
  if (isLightTheme.value) {
    logo.value = logo2
  }
  else {
    logo.value = logo1
  }

})


</script>

<template>


  <footer class="footer p-10 z-10"
    :class="{ 'bg-white text-black': isLightTheme, 'bg-[#171411] text-white': !isLightTheme }">
    <aside>
      <img :src="logo" alt="logo" class="w-14 h-14" />
      <p>
        LUXOArch Ltd AU.
        <br />
        Providing reliable design.
      </p>
    </aside>
    <nav>
      <h6 class="footer-title">Services</h6>
      <a class="">Plans</a>
      <a class="">Design</a>
      <a class="">DA/CDC</a>
      <a class="">Reports</a>
    </nav>
    <nav>
      <h6 class="footer-title">Company</h6>
      <a class="">About us</a>
      <a class="">Contact</a>
      <a class="">Projects</a>
    </nav>
    <nav>
      <h6 class="footer-title">Social</h6>
      <a href="https://www.facebook.com/share/GFLhBoEMBEuLf4Na/?mibextid=wwXIfr" class="">
        <img src="https://www.svgrepo.com/show/158427/facebook.svg" alt="" class="w-8 h-8"></a>
      <a href="#" class="">
        <img src="https://www.svgrepo.com/show/111199/instagram.svg" alt="" class="w-8 h-8"></a>

    </nav>
  </footer>
</template>