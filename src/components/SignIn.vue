<template>
    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md min-h-screen flex justify-center items-center">
        <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <FormHeader title="Welcome back"/>
            <form class="space-y-6" @submit.prevent="e => onSubmit(e)">
                <FormInput input-label="Email address" placeholder="Enter your email address" type="email" id="email" />
                <FormInput input-label="Password" placeholder="Enter your password" :type="showPassword?'text':'password'" id="password" />
                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <input v-model="showPassword" id="remember_me" name="remember_me" type="checkbox"
                            class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded">
                        <label for="remember_me" class="ml-2 block text-xs text-gray-900">
                            Show password
                        </label>
                    </div>

                    <div class="text-xs">
                        <a href="/forget_password" class="font-medium text-blue-600 hover:text-blue-500">
                            Forgot your password?
                        </a>
                    </div>
                </div>
                <p class="text-red-500 text-sm" v-if="error">{{ error }}</p>
                <div>
                    <button type="submit" :disabled="isLoading"
                        class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:grayscale">
                        Sign in
                    </button>
                </div>
            </form>
            <!-- <div class="mt-6">

                <div class="relative">
                    <div class="absolute inset-0 flex items-center">
                        <div class="w-full border-t border-gray-300"></div>
                    </div>
                    <div class="relative flex justify-center text-sm">
                        <span class="px-2 bg-gray-100 text-gray-500">
                            Or continue with
                        </span>
                    </div>
                </div>

                <div :class="`mt-6 flex justify-evenly gap-3`">
                    <template v-for="provider in socialProviders">
                        <FormSocialButton @on-click="provider.onClick()" :image="provider.icon" :disabled="isLoading" />
                    </template>
                </div>
            </div> -->
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import FormHeader from './form/FormHeader.vue';
import FormInput from './form/FormInput.vue';
import { supabase } from '@/config/supabase';

const error = ref(null)
const isLoading = ref(false)
const showPassword = ref(false)

const onSubmit = async (e)=>{
   isLoading.value=true
  const { _, error:supError } = await supabase.auth.signInWithPassword({
    email:e.target.email.value,
    password:e.target.password.value
  });
  if (supError) error.value = supError.message
  isLoading.value = false
}


</script>