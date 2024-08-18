<script setup>
import { reactive, onMounted } from "vue";
import { useRoute } from "vue-router";
import useArts from "../../stores/arts";
import { useAuthStore } from '../../stores/auth';

const authStore = useAuthStore();


const { getArt, updateArt, art, errors } = useArts();
const route = useRoute();

const form = reactive({
  title: "",
  artist: "",
  image: null,
  currentImage: ""
});

onMounted(async () => {
  await getArt(route.params.id);
  form.title = art.value.title;
  form.artist = art.value.artist;
  form.currentImage = art.value.image;
});

</script>


<template>
    <div class="min-h-screen bg-gray-100 flex items-center justify-center">
      <div class="w-full max-w-6xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden flex">
        <img :src="`http://localhost:8000/storage/${form.currentImage}`" alt="Art Image" class="w-1/3 h-auto object-cover">
        <div class="w-2/3 p-8">
          <h3 class="text-xl font-semibold text-gray-800">{{ form.title }}</h3>
          <p class="text-lg text-gray-600">{{ form.artist }}</p>
          <template v-if="authStore.user">

            <div class="mt-4 flex justify-between items-center">
            <router-link :to="{ name: 'ArtEdit', params: { id: art.id } }" class="text-blue-500 hover:underline">Edit</router-link>
            <button @click="destroyArt(art.id)" class="text-red-500 hover:underline">Delete</button>
            </div>
            </template>
          <router-link to="/" class="text-lg text-blue-500 hover:underline">Back to Gallery</router-link>
        </div>
      </div>
    </div>
  </template>
  
  