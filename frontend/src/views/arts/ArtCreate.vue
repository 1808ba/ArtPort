<script setup>
import { reactive } from "vue";
import  useArts  from "../../stores/arts";

const { storeArt, errors } = useArts();

const form = reactive({
  title: "",
  artist: "",
  image: null
});

const handleFileUpload = (event) => {
  form.image = event.target.files[0];
};
</script>

<template>
<h1>arts create</h1>
<div class="bg-gray-100 flex items-center justify-center min-h-screen">

<div class="w-full max-w-md bg-white rounded-lg shadow-md p-8">
  <h2 class="text-2xl font-bold text-gray-800 text-center mb-6">Create Art</h2>
  
  <form @submit.prevent="storeArt(form)">
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
      <label class="block text-gray-700 text-sm font-bold mb-2" for="image">Image</label>
      <input 
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
      id="image" 
      type="file" 
      @change="handleFileUpload"
      >
    </div>
    
    <div class="flex items-center justify-between">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
       Save
      </button>
      
    </div>
  </form>
</div>
</div>
</template>
