<script setup>
import Loading from '@/components/Loading.vue';
import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/vue/24/outline';
import { inject } from 'vue';


const {projects, isLoading, deleteProject} = inject('projects')
</script>


<template>
  <div class="w-full">
    <div class="my-7 mx-6 flex justify-between items-center">
      <h1 class="text-4xl font-bold">Projects</h1>
       <RouterLink to="/dashboard/projects/edit" class="btn btn-success btn-sm text-white"><PlusIcon class="w-6 h-6"/>ADD PROJECT</RouterLink>
      </div>
    <div class="overflow-x-auto mx-6 border rounded-lg">
      <Loading v-if="isLoading"/>
     <table v-else class="table">
       <!-- head -->
       <thead>
         <tr class="bg-slate-200">
           <th></th>
           <th>Title</th>
           <th>Description</th>
           <th>Actions</th>
         </tr>
       </thead>
       <tbody>
         <template v-for="(project,index) in projects">
           <tr>
             <th>{{ index+1 }}</th>
             <td>{{ project.title }}</td>
             <td>{{ project.description.substring(0, 20)+"..." }}</td>
             <td>
              <RouterLink :to="'/dashboard/projects/edit?update='+project.id" class="btn btn-info btn-sm text-white"><PencilIcon class="w-6 h-6"/></RouterLink>
              <button @click="()=>{
                 deleteProject(project.id)
              }"  class="btn btn-error btn-sm text-white ml-2"><TrashIcon class="w-6 h-6"/> </button>
             </td>
           </tr>
         </template>
       </tbody>
     </table>
   </div>   
  </div>
</template>