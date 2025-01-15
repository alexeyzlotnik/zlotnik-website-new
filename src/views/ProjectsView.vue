<script setup>
import { onMounted, ref, computed } from 'vue';

// DATA
const loaded = ref(false);
const projects = ref([
   // include tool-farm.com and wishlister.online

   {
      title: "Tool Farm",
      url: "https://tool-farm.com",
      description: "Essential Tools for Developers and Marketers",
      image: "src/assets/img/tool-farm.jpeg",
      tags: ['nuxtjs']
   },
   {
      title: "Wishlister",
      url: "https://wishlister.online",
      description: "Your Ultimate Wishlist Platform",
      image: "src/assets/img/wishlister.jpeg",
      tags: ['nuxtjs', 'SQLite']
   }
]);

</script>

<template>
   <div class="my-projects page">
      <div class="projects mb-14">
         <h1 class="mb-5 font-bold text-2xl lg:text-4xl">My coding projects</h1>
         <div class="projects-wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div class="projects-item col-span-1 md:col-span-1 lg:col-span-1" v-for="(project, index) in projects" :key="index">
               <div class="project-item__body h-full flex flex-col rounded-xl bg-white text-black">
                  <a :href="project.url" target="_blank">
                     <img :src="project.image" alt="project image" class="rounded-t"/>
                  </a>
                  <div class="project-item__info h-full flex flex-col py-3 px-4">
                     <h2 class="font-bold mb-3">
                        <a :href="project.url" target="_blank">
                           {{ project.title }}
                        </a>
                     </h2>
                     <div class="flex justify-between mb-3 ">
                        <span class="flex items-center gap-2">
                           {{ project.description }}
                        </span>
                     </div>
                     <div class="project-item__tags flex gap-2 mb-3">
                        <span v-for="tag in project.tags" :key="tag" class="text-xs bg-white border border-black rounded-md px-2 py-1 shadow-sm hover:shadow-md">{{ tag }}</span>
                     </div>
                     <a
                        :href="project.url"
                        target="_blank"
                        class="button mt-auto"
                     >
                        Visit project
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>