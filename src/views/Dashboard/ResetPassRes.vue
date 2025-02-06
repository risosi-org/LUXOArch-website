<template>
    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md min-h-screen flex justify-center items-center">
        <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <FormHeader title="Reset Password"/>
            <form class="space-y-6" @submit.prevent="e => onSubmit(e)">
                <FormInput input-label="Password" placeholder="Enter your new passsword" type="text" id="password" />
                <p class="text-red-500 text-sm" v-if="error">{{ error }}</p>
                <div>
                    <button type="submit" :disabled="isLoading"
                        class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:grayscale">
                        Reset
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import { supabase } from '@/config/supabase';
import FormInput from '@/components/form/FormInput.vue';
import FormHeader from '@/components/form/FormHeader.vue';
import { useRouter } from 'vue-router';
const router = useRouter();

function navigateToBack() {
  router.replace('/dashboard/projects/'); // Navigate to 'profile' without adding to history
}
const error = ref(null)
const isLoading = ref(false)


const onSubmit = async (e)=>{
   isLoading.value=true
  const { _, error:supError } = await supabase.auth.updateUser({ password: e.target.password.value })
  if (supError) error.value = supError.message
  else navigateToBack()
  isLoading.value = false
}


</script>