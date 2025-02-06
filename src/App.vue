<script setup>
import Navigation from './components/Navigation.vue';
import Footer from './components/Footer.vue';
import Modal from './components/Modal.vue';
import { provide, ref } from 'vue';
import Card from './components/Card.vue';
import ProjectsProvider from './config/ProjectsProvider.vue';

const currentModalContentComponent = ref({});
const setModalContent = (component) => {
  currentModalContentComponent.value = component;
};

provide('setModalContent', setModalContent);
</script>
<template>
  <ProjectsProvider>
    <RouterView />
  </ProjectsProvider>
</template>