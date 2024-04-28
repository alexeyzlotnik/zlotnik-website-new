<template>
   <div class="my-courses page">
      <div class="courses mb-14">
         <h1 class="mb-5 font-bold text-2xl lg:text-4xl px-6">My courses</h1>

         <DataView :value="filteredCourses" :layout="layout" v-if="loaded">
            <template #header>
               <div class="flex justify-content-end">
                  <DataViewLayoutOptions v-model="layout" />
               </div>
            </template>

            <template #grid="slotProps">
               <div class="grid grid-nogutter grid-cols-12">
                  <div v-for="(item, index) in slotProps.items" :key="index" class="col-span-12 sm:col-span-6 p-2">
                     <div class="p-4 border-1 surface-border surface-card border-round flex flex-column">
                        <div class="surface-50 flex justify-content-center border-round p-3">
                           <div class="relative mx-auto">
                              <a :href="`https://udemy.com` + item?.url + `?referralCode=` + setCustomData(item.id).referralCode" target="_blank">
                                 <Tag v-if="setCustomData(item.id).new" :value="setCustomData(item.id).new" class="absolute" style="left: 4px; top: 4px"></Tag>
                                 <img class="block xl:block mx-auto border-round w-full"
                                    :src="setCustomData(item.id).img" :alt="item.title"/>
                              </a>
                           </div>
                        </div>
                        <div class="pt-4">
                           <div class="flex flex-row justify-content-between align-items-start gap-2">
                              <div>
                                 <div class="text-lg font-medium text-900 mt-1">{{ item.title }}</div>
                              </div>
                              <div class="surface-100 p-1" style="border-radius: 30px">
                                 <div class="surface-0 flex align-items-center gap-2 justify-content-center py-1 px-2"
                                    style="border-radius: 30px; box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)">
                                    <span class="text-900 font-medium text-sm">{{ item.rating.toFixed(1) }}</span>
                                    <i class="pi pi-star-fill text-yellow-500"></i>
                                 </div>
                              </div>
                           </div>
                           <div class="flex flex-column gap-4 mt-4">
                              <div class="flex gap-2">
                                 <Button icon="pi pi-shopping-cart" label="Buy Now"
                                    @click="openLink(item)"
                                    class="flex-auto white-space-nowrap"></Button>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </template>

            <template #list="slotProps">
               <div class="grid grid-nogutter">
                  <div v-for="(item, index) in slotProps.items" :key="index" class="col-12">
                     <div class="flex flex-column sm:flex-row sm:align-items-center p-4 gap-3"
                        :class="{ 'border-top-1 surface-border': index !== 0 }">
                        <div class="md:w-10rem relative">
                           <a :href="`https://udemy.com` + item?.url + `?referralCode=` + setCustomData(item.id).referralCode" target="_blank">
                              <img class="block xl:block mx-auto border-round w-full" :src="setCustomData(item.id).img" :alt="item.title" style="max-width: 300px" />
                              <Tag v-if="setCustomData(item.id).new" :value="setCustomData(item.id).new" class="absolute" style="left: 4px; top: 4px"></Tag>
                           </a>
                        </div>
                        <div class="flex flex-column md:flex-row justify-content-between md:align-items-center flex-1 gap-4">
                           <div class="flex flex-row md:flex-column justify-content-between align-items-start gap-2">
                              <div>
                                 <div class="text-lg font-medium text-900 mt-2">{{ item.title }}</div>
                              </div>
                              <div class="surface-100 p-1" style="border-radius: 30px">
                                 <div class="surface-0 flex align-items-center gap-2 justify-content-center py-1 px-2"
                                    style="border-radius: 30px; box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)">
                                    <span class="text-900 font-medium text-sm">{{ item.rating.toFixed(1) }}</span>
                                    <i class="pi pi-star-fill text-yellow-500"></i>
                                 </div>
                              </div>
                           </div>
                           <div class="flex flex-column md:align-items-end gap-5">
                              <div class="flex flex-row-reverse md:flex-row gap-2">
                                 <Button icon="pi pi-shopping-cart" label="Buy Now"
                                    @click="openLink(item)"
                                    class="flex-auto md:flex-initial white-space-nowrap"></Button>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </template>
         </DataView>

         <div v-else class="flex flex-col items-center">
            <IconLoading />
            Loading...
         </div>
      </div>
      <div class="reviews" v-if="loaded">
         <h2 class="font-bold text-2xl">Reviews</h2>
         <div class="grid grid-cols-3 gap-5 mt-3">
            <Card v-for="(review, index) in filteredReviews" :key="index" class="mb-5 col-span-1 border surface-0">
               <template #title>
                  <div class="flex gap-3">
                     {{ review.user.title }}
                  <div class="surface-0 flex align-items-center gap-2 justify-content-center py-1 px-2"
                     style="border-radius: 30px; box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)">
                     <span class="text-900 font-medium text-sm">{{ review.rating.toFixed(1) }}</span>
                     <i class="pi pi-star-fill text-yellow-500"></i>
                  </div>
                  </div>
               </template>
               <template #content>
                  <p class="m-0">
                     {{ review.content }}
                  </p>
               </template>
            </Card>
         </div>

      </div>
   </div>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue';
import UdemyApi from '../api/UdemyApi';
import IconStar from '../components/icons/IconStar.vue';
import IconLoading from '../components/icons/IconLoading.vue';

import DataView from 'primevue/dataview';
import DataViewLayoutOptions from 'primevue/dataviewlayoutoptions'
import Button from 'primevue/button';
import Tag from 'primevue/tag';
import Card from 'primevue/card';




// DATA
const loaded = ref(false);
const fetchCourses = UdemyApi.getUdemyCourses;
const fetchReviews = UdemyApi.getCoursesReviews;
const courses = ref([]);
const reviews = ref([]);
const layout = ref('grid');

// METHODS
const getCourses = async () => {
   try {
      const getCourses = await fetchCourses();
      // console.log('courses', courses);
      courses.value = JSON.parse(getCourses).results;
   } catch (error) {
      console.error('An error occurred:', error);
   }
};

const getReviews = async () => {
   try {
      const getReviews = await fetchReviews();
      // console.log(reviews);
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

const setCustomData = (id) => {
   let data = {
      img: '',
      referralCode: '',
      new: '',
   };

   switch (id) {
      case 'x01A-sGTkWM_koHmhIEKqIsIA==': // old
         data.img = new URL('/src/assets/img/udemy-old.jpg', import.meta.url).href;
         data.referralCode = '749447CC657833204039';
         break;
      case 'x01PbtvBw5u3i1aM0zh9tBC9g==': // new
         data.img = new URL('/src/assets/img/udemy-new2.png', import.meta.url).href;
         data.referralCode = 'C027EE01186CAA57B3C5';
         data.new = 'new';
         break;
      case 'x015K3GeS3SWJfRiDW2i8IQbQ==': // en
         data.img = new URL('/src/assets/img/udemy-en.png', import.meta.url).href;
         data.referralCode = '71D1309E4547E0389742'; //
         break;
      default:
         data.img = new URL('/src/assets/img/udemy-new2.png', import.meta.url).href;
         break;
   }

   return data;
}

// COMPUTED METHODS
const filteredCourses = computed(() => {
   return courses.value.filter((course) => {
      return course.is_published
   });
})

const filteredReviews = computed(() => {
   return reviews.value
   // return reviews.value.filter((review) => {
   //    return review.content !== '';
   // });
})

function openLink(item) {
   window.open(`https://udemy.com` + item?.url + `?referralCode=` + setCustomData(item.id).referralCode);
}


onMounted(
   init
);

</script>