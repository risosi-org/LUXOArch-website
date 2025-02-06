<script setup>
import CustomLi from '../CustomLi.vue';
import { HomeIcon, InboxIcon, CubeIcon } from '@heroicons/vue/24/outline';
import UserData from './UserData.vue';
</script>

<template>
  <div>
    <UserData />
    <hr class="my-4" />
    
    <CustomLi text="Projects" link="/dashboard/projects">
      <CubeIcon class="w-6 h-6" />
    </CustomLi>
    
    <CustomLi text="Website" link="/">
      <HomeIcon class="w-6 h-6" />
    </CustomLi>
    
    <CustomLi text="Inbox" link="/dasboard/inbox">
      <InboxIcon class="w-6 h-6" />
    </CustomLi>
  </div>
</template>
