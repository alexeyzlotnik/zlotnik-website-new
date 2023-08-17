<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useDarkMode } from './stores/store';
import DarkThemeSwitcher from './components/DarkThemeSwitcher.vue';
import { onMounted } from 'vue';

const darkMode = useDarkMode();

onMounted(() => {
  if (darkMode.isDarkMode) {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
  }
});

</script>

<template>
  <div class="site-wrapper" :data-theme="darkMode.isDarkMode ? 'dark' : 'light'">
      <div class="site-wrapper__container container mx-auto px-6">
      <header class="container mx-auto px-6">
        <div class="flex justify-end py-5">
          <div class="flex gap-5 items-center">
            <router-link to="/">Home</router-link>
            <router-link to="/courses">Courses</router-link>
            <router-link to="/donate">Support 🇺🇦</router-link>
            <DarkThemeSwitcher />
          </div>
        </div>
      </header>

      <RouterView />
    </div>
  </div>
</template>

<style scoped>

</style>
