<script setup>
import { reactive, onMounted } from "vue";
import { useRoute } from "vue-router";
import useArts from "../../stores/arts";

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

const handleFileUpload = (event) => {
  form.image = event.target.files[0];
};

const submitForm = () => {
  updateArt(route.params.id, form);
};
</script>

<template>
<h1>Edit Art</h1>
<div class="bg-gray-100 flex items-center justify-center min-h-screen">
  <div class="w-full max-w-md bg-white rounded-lg shadow-md p-8">
    <h2 class="text-2xl font-bold text-gray-800 text-center mb-6">Edit Art</h2>

    <form @submit.prevent="submitForm">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="title">Title</label>
        <input 
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
        id="title" type="text" placeholder="Title"
        v-model="form.title"
        >
      </div>

      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="artist">Artist</label>
        <input 
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
        id="artist" 
        type="text" 
        placeholder="Artist Name"
        v-model="form.artist"
        >
      </div>

      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="image">Current Image</label>
        <div class="mb-4">
          <!-- <img :src="form.currentImage" alt="Art Image" class="w-32 h-32 object-cover"> -->
          <img  :src="`http://localhost:8000/storage/${form.currentImage}`" alt="Art Image" class="h-16">
       
        </div>
        <label class="block text-gray-700 text-sm font-bold mb-2" for="image">Change Image</label>
        <input 
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
        id="image" 
        type="file" 
        @change="handleFileUpload"
        >
      </div>

      <div class="flex items-center justify-between">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
         Save Changes
        </button>
      </div>
    </form>
  </div>
</div>
</template>
