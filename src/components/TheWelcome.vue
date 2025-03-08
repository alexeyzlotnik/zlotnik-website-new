<script setup>
import IconLinkedin from '../components/icons/IconLinkedin.vue';
import IconGithub from '../components/icons/IconGithub.vue';

const getImgUrl = (img) => {
  return (`@/assets/img/${img}`);
}
</script>

<template>
  <div class="welcome page flex flex-col lg:flex-row items-start lg:items-center justify-center gap-10">

    <div class="photo lg:w-1/3">
      <img :src="getImgUrl('zlotnik.jpg')" alt="Alexey Zlotnik" class="rounded-full lg:rounded" />
    </div>

    <div class="info lg:w-2/3 ">

      <div class="info-text py-4">
        <h1 class="text-2xl lg:text-4xl mb-5">Hi, my name is Alexey Zlotnik</h1>
        <p>I'm passionate Front-End / VueJS developer.</p>
        <p>Currently working full-time at a Canadian Startup.</p>
      </div>

      <div class="social py-4">
        <h2 class="mb-5 font-bold">Lets keep in touch:</h2>
        <div class="flex flex-row items-center gap-3">
          <a href="https://www.linkedin.com/in/alexeyzlotnik/" target="_blank">
            <IconLinkedin />
          </a>
          <a href="https://github.com/alexeyzlotnik" target="_blank">
            <IconGithub />
          </a>
        </div>
      </div>

    </div>

  </div>

</template>

<style scoped>
.welcome {
  min-height: 100vh;
}
</style>