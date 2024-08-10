<script setup>
import { onMounted } from "vue";
import  useArts  from "../../stores/arts";


const { updateArt , errors, art , getArt  } = useArts();

const props = defineProps({
  id: {
    required: true,
    type: String,
  },
});
onMounted(() => getArt(props.id));
// const form = reactive({
//   title:"",
//   artist:""
// });


</script>
<template>
  <h1>arts create</h1>
  <div class="bg-gray-100 flex items-center justify-center min-h-screen">

<div class="w-full max-w-md bg-white rounded-lg shadow-md p-8">
  <h2 class="text-2xl font-bold text-gray-800 text-center mb-6">Login</h2>
  
  <form @submit.prevent="updateArt($route.params.id)">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="title">Title</label>
      <input 
      class=
      "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
      id="title" type="text" placeholder="title"
      v-model="art.title"
      >
    </div>
    
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="artist">artist</label>
      <input 
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" 
      type="text" 
      placeholder="Artist name"
      v-model="art.artist"
      
      >
    </div>
    
    <div class="flex items-center justify-between">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
       save
      </button>
      
    </div>
  </form>
</div>
</div>
</template>