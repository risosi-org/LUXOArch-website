<script setup>
import CustomLI from '../CustomLi.vue';
import { Cog8ToothIcon, UsersIcon } from '@heroicons/vue/24/outline';
</script>

<template>
  <div>
    <hr class="my-2" />
    
    <CustomLI text="Groups" link="/groups">
      <UsersIcon class="w-6 h-6" />
    </CustomLI>
    
    <CustomLI text="Settings" link="/settings">
      <Cog8ToothIcon class="w-6 h-6" />
    </CustomLI>
  </div>
</template>
