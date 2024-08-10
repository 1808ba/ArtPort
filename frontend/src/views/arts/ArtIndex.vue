<script setup>
import  useArts  from "../../stores/arts";
import { onMounted } from "vue";


const { arts , getArts , destroyArt } = useArts();

onMounted(() => getArts());

</script>
<template>
  <h1>arts index</h1>
  <RouterLink :to="{name: 'ArtCreate'}" class="px-4 px-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded">New article</RouterLink>
  <table class="min-w-full bg-white border border-gray-300">
  <thead>
    <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
      <th class="py-3 px-6 text-left">title</th>
      <th class="py-3 px-6 text-left">Artist</th>
     <th class="py-3 px-6 text-left">Actions</th> 
    </tr>
  </thead>
  <tbody class="text-gray-600 text-sm font-light">
    <tr v-for="art in arts" :key="art.id" class="border-b border-gray-300 hover:bg-gray-100">
      <td class="py-3 px-6 text-left">{{art.title}}</td>
      <td class="py-3 px-6 text-left">{{art.artist}}</td>
      <td >
        <!-- <RouterLink :to="{name: 'ArtCreate'}" class="px-4 px-2 bg-red-500 hover:bg-black-700 text-white rounded">Delete</RouterLink> -->
        <button @click="destroyArt(art.id)" class="px-4 px-2 bg-red-500 hover:bg-black-700 text-white rounded">delete</button>
        <RouterLink :to="{name: 'ArtEdit', params: { id: art.id }}" class="px-4 px-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded">Update</RouterLink>
      </td>

    </tr>
   
  </tbody>
</table>

</template>