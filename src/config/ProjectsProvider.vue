<script setup>
import { ref, onMounted, provide, computed } from 'vue';
import { supabase } from './supabase';

const projects = ref([]);
const error = ref(null);
const isLoading = ref(true);

onMounted(fetchProjects);

async function fetchProjects() {
  isLoading.value = true;
  const { data, error: fetchError } = await supabase.from("projects").select("*");

  if (fetchError) {
    console.error("Error fetching projects:", fetchError);
    error.value = fetchError;
  } else {
    projects.value = data;
  }

  isLoading.value = false;
}

async function updateProject(id, updates) {
  const { error: updateError } = await supabase
    .from("projects")
    .update(updates)
    .eq("id", id);

  if (updateError) {
    console.error("Error updating project:", updateError);
    return false;
  }


  await fetchProjects();
  return true;
}

async function deleteProject(id) {
  const { error: deleteError } = await supabase
    .from("projects")
    .delete()
    .eq("id", id);

  if (deleteError) {
    console.error("Error deleting project:", deleteError);
    return false;
  }


  projects.value = projects.value.filter(project => project.id !== id);
  return true;
}

// Get a project by ID using local data (avoids unnecessary API calls)
function getProjectById(id) {
  return computed(() => projects.value.find(project => project.id === id) || null);
}


provide('projects', { projects, error, isLoading, getProjectById, updateProject, deleteProject ,fetchProjects});
</script>

<template>
  <slot></slot>
</template>
