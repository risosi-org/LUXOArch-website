<script setup>
import CustomLi from '../CustomLi.vue';
import { MapPinIcon, MapIcon, UserGroupIcon, PaperAirplaneIcon } from '@heroicons/vue/24/outline';
import UserData from './UserData.vue';
</script>

<template>
  <div>
    <UserData />
    <hr class="my-4" />
    
    <CustomLi text="Locator" link="/locator">
      <MapPinIcon class="w-6 h-6" />
    </CustomLi>
    
    <CustomLi text="Multi Finder" link="/locator/multi">
      <UserGroupIcon class="w-6 h-6" />
    </CustomLi>
    
    <CustomLi text="Tracks" link="/cs">
      <MapIcon class="w-6 h-6" />
    </CustomLi>
    
    <CustomLi text="Start Track" link="/cs">
      <PaperAirplaneIcon class="w-6 h-6" />
    </CustomLi>
  </div>
</template>
