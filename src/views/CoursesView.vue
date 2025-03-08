<script setup>
import { onMounted, ref, computed } from 'vue';

// DATA
const courses = ref([
         {
         title: "How to Start a Freelance Career. Freelancing on Upwork 2023",
         url: "/course/freelancing-upwork/",
         is_published: true,
         rating: 4.7,
         referralCode: 'C027EE01186CAA57B3C5',
         image: '@/assets/img/udemy-english.webp'
        },
        {
          title: "Как начать карьеру на Фрилансе. Заработок на Upwork в 2023",
          url: "/freelance_upwork/",
          is_published: true,
          rating: 4.8,
          referralCode: '71D1309E4547E0389742',
          image: '@/assets/img/udemy-new.webp'
        },
        {
          title: "Upwork. Как начать зарабатывать на Фрилансе",
          url: "/course/upwork_course/",
          is_published: true,
          rating: 4.7,
          referralCode: '749447CC657833204039',
          image: '@/assets/img/udemy-old.jpg'
        }
]);

</script>

<template>
   <div class="my-courses page">
      <div class="courses mb-14">
         <h1 class="mb-5 font-bold text-2xl lg:text-4xl">My courses</h1>
         <div class="courses-wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div class="courses-item col-span-1 md:col-span-1 lg:col-span-1" v-for="(course, index) in courses" :key="index">
               <div class="course-item__body h-full flex flex-col rounded-xl bg-white text-black">
                  <a :href="`https://udemy.com` + course.url + `?referralCode=` + course.referralCode" target="_blank">
                     <img :src="course.image" alt="course image" class="rounded-t"/>
                  </a>
                  <div class="course-item__info h-full flex flex-col py-3 px-4">
                     <h2 class="font-bold mb-3">
                        <a :href="`https://udemy.com` + course.url + `?referralCode=` + course.referralCode" target="_blank">
                           {{ course.title }}
                        </a>
                     </h2>
                     <div class="flex justify-between mb-3 ">
                        <span class="flex items-center gap-2">
                           <IconStar />
                           {{ course.rating.toFixed(1) }}/5
                        </span>
                        <!-- <span>{{ course.num_reviews }} Reviews</span> -->
                     </div>
                     <a
                        :href="`https://udemy.com` + course.url + `?referralCode=` + course.referralCode"
                        target="_blank"
                        class="button mt-auto"
                     >
                        Buy course
                     </a>
                     <span class="text-green text-xs mt-2">* the link above gives you a discount</span>
                  </div>
               </div>
            </div>
         </div>
         <!-- <div v-else class="flex flex-col items-center">
            <IconLoading />
            Loading...
         </div> -->
      </div>
      <!-- <div class="reviews lg:w-2/4 lg:mx-auto" v-if="loaded">
         <h2 class="font-bold text-2xl">Reviews</h2>
         <div class="reviews-wrapper">
            <div class="reviews-item my-3 bg-white text-black p-3 rounded" v-for="(review, index) in filteredReviews" :key="index">
               <span>{{ review.content }}</span>
               <div class="flex mt-3 justify-start gap-3">
                  <span>{{ review.user.title }}</span>
                  <span class="flex items-center gap-1">
                     <IconStar />
                     {{ review.rating }}
                  </span>
               </div>
            </div>
         </div>

      </div> -->
   </div>
</template>