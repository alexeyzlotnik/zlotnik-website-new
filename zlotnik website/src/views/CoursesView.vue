<script setup>
import { onMounted, ref, computed } from 'vue';
import UdemyApi from '../api/UdemyApi';
import IconStar from '../components/icons/IconStar.vue';
import IconLoading from '../components/icons/IconLoading.vue';

// DATA
const loaded = ref(false);
const fetchCourses = UdemyApi.getUdemyCourses;
const fetchReviews = UdemyApi.getCoursesReviews;
const courses = ref([]);
const reviews = ref([]);

// METHODS
const getCourses = async () => {
   try {
      const getCourses = await fetchCourses();
      console.log(courses);
      courses.value = JSON.parse(getCourses).results;
   } catch (error) {
      console.error('An error occurred:', error);
   }
};

const getReviews = async () => {
   try {
      const getReviews = await fetchReviews();
      console.log(reviews);
      reviews.value = JSON.parse(getReviews).results;
   } catch (error) {
      console.error('An error occurred:', error);
   }
};

const init = async () => {
   await getCourses();
   await getReviews();
   loaded.value = true;
};

const setImageForCourse = (title) => {
   let courseImage = '';

   switch (title) {
      case 'Upwork. Как начать зарабатывать на Фрилансе':
         courseImage = 'src/assets/img/udemy-old.jpg';
         break;
      default:
         courseImage = 'src/assets/img/udemy-new.jpg';
         break;
   }

   return courseImage;
}

const referralCode = (title) => {
   let referralCode = '';

   switch (title) {
      case 'Upwork. Как начать зарабатывать на Фрилансе':
         referralCode = '749447CC657833204039';
         break;
      case 'How to Start a Freelance Career. Freelancing on Upwork 2023':
         referralCode = 'C027EE01186CAA57B3C5';
         break;
      case 'Как начать карьеру на Фрилансе. Заработок на Upwork в 2023':
         referralCode = '71D1309E4547E0389742';
         break;
   }

   return referralCode;
}

// COMPUTED METHODS
const filteredCourses = computed(() => {
   return courses.value.filter((course) => {
      return course.is_published
   });
})

const filteredReviews = computed(() => {
   return reviews.value.filter((review) => {
      return review.content !== '';
   });
})


onMounted(
   init
);

</script>

<template>
   <div class="my-courses page">
      <div class="courses mb-14">
         <h1 class="mb-5 font-bold text-2xl lg:text-4xl">My courses</h1>
         <div class="courses-wrapper flex flex-col lg:flex-row gap-5" v-if="loaded">
            <div class="courses-item w-full" v-for="(course, index) in filteredCourses" :key="index">
               <div class="course-item__body h-full flex flex-col rounded-xl bg-white text-black">
                  <a :href="`https://udemy.com` + course.url + `?referralCode=` + referralCode(course.title)" target="_blank">
                     <img :src="setImageForCourse(course.title)" alt="course image" class="rounded-t"/>
                  </a>
                  <div class="course-item__info h-full flex flex-col py-3 px-4">
                     <h2 class="font-bold mb-3">
                        <a :href="`https://udemy.com` + course.url + `?referralCode=` + referralCode(course.title)" target="_blank">
                           {{ course.title }}
                        </a>
                     </h2>
                     <div class="flex justify-between mb-3 ">
                        <span class="flex items-center gap-2">
                           <IconStar />
                           {{ course.rating.toFixed(1) }}/5
                        </span>
                        <span>{{ course.num_reviews }} Reviews</span>
                     </div>
                     <a
                        :href="`https://udemy.com` + course.url + `?referralCode=` + referralCode(course.title)"
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
         <div v-else class="flex flex-col items-center">
            <IconLoading />
            Loading...
         </div>
      </div>
      <div class="reviews lg:w-2/4 lg:mx-auto" v-if="loaded">
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

      </div>
   </div>
</template>