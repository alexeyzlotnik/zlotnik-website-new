import { defineStore } from 'pinia'

export const useDarkMode = defineStore('darkMode', {
  state: () => {
    return { isDarkMode: true }
  },
  actions: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode
      document.documentElement.setAttribute('data-theme', this.isDarkMode ? 'dark' : 'light');

      // find link in head by id <link id="theme-link" rel="stylesheet" href="/themes/aura-dark-green/theme.css">
      const themeLink = document.getElementById('theme-link');
      themeLink.href = this.isDarkMode ? '/themes/aura-dark-green/theme.css' : '/themes/aura-light-green/theme.css';
    },
  },
});
