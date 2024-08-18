<script setup>
import { onMounted } from "vue";
import useArts from "../../stores/arts";
import { useAuthStore } from '../../stores/auth';

const authStore = useAuthStore();

const { arts, getArts } = useArts();

onMounted(() => {
  getArts();
});
</script>

<template>
  <div class="min-h-screen bg-gray-100 py-8">
    <div class="max-w-6xl mx-auto px-4">
      <div class="flex justify-between items-center mb-8">
        <h2 class="text-3xl font-extrabold text-gray-800">Art Gallery</h2>
        <RouterLink :to="{name: 'ArtCreate'}" class="px-4 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-lg shadow-md">New Art</RouterLink>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="art in arts" :key="art.id" class="bg-white rounded-lg shadow-lg overflow-hidden">
            <router-link :to="{ name: 'ArtDetail', params: { id: art.id } }">
            <img v-if="art.image" :src="`http://localhost:8000/storage/${art.image}`" alt="Art Image" class="h-48 w-full object-cover">
          </router-link>          <div class="p-4">
            <h3 class="text-lg font-semibold text-gray-800">{{ art.title }}</h3>
            <p class="text-sm text-gray-600">{{ art.artist }}</p>
           
        <template v-if="authStore.user">

            <div class="mt-4 flex justify-between items-center">
              <router-link :to="{ name: 'ArtEdit', params: { id: art.id } }" class="text-blue-500 hover:underline">Edit</router-link>
              <button @click="destroyArt(art.id)" class="text-red-500 hover:underline">Delete</button>
            </div>
        </template>

          </div>
        </div>
      </div>
    </div>
  </div>

       


            
            

 
</template>
